# Internationalization (i18n) Guide

This website supports multiple languages. Currently, English (en) and Chinese (zh) are supported.

## How It Works

1. **Language Routes**: All pages are under the `app/[locale]/` directory
   - English pages: `/en/about/`, `/en/services/`, etc.
   - Chinese pages: `/zh/about/`, `/zh/services/`, etc.

2. **Language Detection**: The root page (`/`, in `app/(root)/`) redirects to `/zh/` if the browser language starts with `zh`, and to `/en/` otherwise. On Apache, `.htaccess` does the same redirect on the server using the `Accept-Language` header.

3. **Current Language**: `components/LocaleProvider.tsx` reads the language from the first part of the URL path (not from page params) and provides the matching translations through the `useLocale()` hook.

4. **Language Switcher**: `components/LanguageSwitcher.tsx` in the header swaps the language prefix on the current URL (respecting `NEXT_PUBLIC_BASE_PATH`).

5. **Translations**: All UI text is stored in JSON files:
   - `translations/en.json` - English translations
   - `translations/zh.json` - Chinese translations

## Adding a New Page with Language Support

1. **Create the page structure**:
   ```
   app/[locale]/your-page/
     ├── page.tsx          # Server component (handles locale validation)
     └── YourPageClient.tsx # Client component (uses translations)
   ```

2. **Create the server component** (`page.tsx`):
   ```typescript
   import { notFound } from 'next/navigation';
   import { locales, type Locale } from '@/lib/i18n';
   import YourPageClient from './YourPageClient';

   export async function generateStaticParams() {
     return locales.map((locale) => ({ locale }));
   }

   export default function YourPage({ params }: { params: { locale: string } }) {
     if (!locales.includes(params.locale as Locale)) {
       notFound();
     }

     return <YourPageClient />;
   }
   ```
   Pages can also export `generateMetadata` to set a per-language title and description (see `app/[locale]/history/page.tsx`).

3. **Create the client component** (`YourPageClient.tsx`):
   ```typescript
   'use client';

   import { useLocale } from '@/components/LocaleProvider';
   import { getLocalizedPath } from '@/lib/i18n';
   import Link from 'next/link';

   export default function YourPageClient() {
     const { locale, t } = useLocale();

     return (
       <div>
         <h1>{t.yourPage.title}</h1>
         <p>{t.yourPage.description}</p>
         {/* Use getLocalizedPath for all internal links */}
         <Link href={getLocalizedPath('/other-page', locale)}>
           {t.nav.otherPage}
         </Link>
       </div>
     );
   }
   ```

4. **Add translations** to both `translations/en.json` and `translations/zh.json`:
   ```json
   {
     "yourPage": {
       "title": "Your Page Title",
       "description": "Page description"
     }
   }
   ```

5. **Add the page to the sitemap**: add its path to the `staticRoutes` list in `app/sitemap.ts`.

6. **Link to it**: add it to `components/Navigation.tsx` and/or `components/Footer.tsx` if it should appear in the menus.

## Using Translations in Components

### In Client Components

```typescript
'use client';

import { useLocale } from '@/components/LocaleProvider';

export default function MyComponent() {
  const { locale, t } = useLocale();

  return <h1>{t.home.welcome}</h1>;
}
```

### In Server Components (limited)

For server components, you can import translations directly:

```typescript
import enTranslations from '@/translations/en.json';
import zhTranslations from '@/translations/zh.json';

// Use based on locale from params
const t = locale === 'zh' ? zhTranslations : enTranslations;
```

## Creating Localized Links

Always use `getLocalizedPath` for internal links:

```typescript
import { getLocalizedPath } from '@/lib/i18n';
import { useLocale } from '@/components/LocaleProvider';

const { locale } = useLocale();
<Link href={getLocalizedPath('/about', locale)}>About</Link>
```

## Adding a New Language

1. Add the locale to `lib/i18n.ts`:
   ```typescript
   export type Locale = 'en' | 'zh' | 'ms'; // Add new language
   export const locales: Locale[] = ['en', 'zh', 'ms'];
   export const localeNames: Record<Locale, string> = {
     en: 'English',
     zh: '中文',
     ms: 'Bahasa Melayu', // Add new language name
   };
   ```

2. Create the translation file `translations/ms.json`, copying the structure from `en.json` and translating every string.

3. Register it in the `translations` map in `components/LocaleProvider.tsx`.

4. Add it to the `LOCALES` list in `app/sitemap.ts`.

5. Add `content/services/ms/` and `content/events/ms/` folders for Markdown content.

6. Update the per-language metadata in `app/[locale]/layout.tsx` and the redirect logic in `app/(root)/` and `.htaccess` if needed.

## Translation File Structure

Translations are organized by page/section:

```json
{
  "nav": { ... },           // Navigation items
  "common": { ... },        // Common UI elements
  "home": { ... },          // Home page
  "about": { ... },         // About page
  "visit": { ... },         // Visit page
  "footer": { ... },        // Footer (including the History link)
  // etc.
}
```

## Best Practices

1. **Always use translations**: Never hardcode text that users will see
2. **Use getLocalizedPath**: For all internal navigation links
3. **Keep translations organized**: Group by page/section
4. **Test both languages**: Make sure all pages work in both languages
5. **Keep both files in sync**: There is **no fallback** to English. A key missing from `zh.json` still passes the TypeScript check (types come from `en.json`) but shows as blank on the Chinese site.

## Current Pages with Language Support

✅ Home (`/[locale]`)
✅ About (`/[locale]/about`)
✅ History (`/[locale]/history`)
✅ Visit (`/[locale]/visit`)
✅ What to Expect (`/[locale]/what-to-expect`)
✅ Services / sermons (`/[locale]/services`, `/[locale]/services/[slug]`)
✅ Events (`/[locale]/events`, `/[locale]/events/[slug]`)
✅ Ministries (`/[locale]/ministries`)
✅ Contact (`/[locale]/contact`)

The Beliefs, Resources, and Give pages were removed.

## Troubleshooting

**Language switcher not working?**
- Make sure `LocaleProvider` wraps your components
- Check that routes include the locale prefix

**Translations not showing?**
- Verify the translation key exists in both `en.json` and `zh.json`
- Check that you're using `useLocale()` hook correctly

**Links breaking when switching languages?**
- Make sure all links use `getLocalizedPath()`
- Verify the target page exists in both language folders. For sermons and events, the Markdown file must exist in both `content/.../en/` and `content/.../zh/`.
