# Internationalization (i18n) Guide

This website supports multiple languages. Currently, English (en) and Chinese (zh) are supported.

## How It Works

1. **Language Routes**: All pages are under `app/[locale]/` directory
   - English pages: `/en/about`, `/en/sermons`, etc.
   - Chinese pages: `/zh/about`, `/zh/sermons`, etc.

2. **Language Detection**: The root page (`/`) automatically redirects to `/en` or `/zh` based on browser language

3. **Language Switcher**: A language switcher in the header allows users to switch between languages

4. **Translations**: All text content is stored in JSON files:
   - `translations/en.json` - English translations
   - `translations/zh.json` - Chinese translations

## Adding a New Page with Language Support

To add a new page that supports multiple languages:

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

2. Create translation file: `translations/ms.json`

3. Copy structure from `en.json` and translate all strings

4. Update language switcher if needed

## Translation File Structure

Translations are organized by page/section:

```json
{
  "nav": { ... },           // Navigation items
  "common": { ... },        // Common UI elements
  "home": { ... },          // Home page
  "about": { ... },         // About page
  "visit": { ... },         // Visit page
  // etc.
}
```

## Best Practices

1. **Always use translations**: Never hardcode text that users will see
2. **Use getLocalizedPath**: For all internal navigation links
3. **Keep translations organized**: Group by page/section
4. **Test both languages**: Make sure all pages work in both languages
5. **Handle missing translations**: The system falls back to English if a translation is missing

## Current Pages with Language Support

✅ Home (`/[locale]`)
✅ About (`/[locale]/about`)
✅ Visit (`/[locale]/visit`)
✅ Sermons (`/[locale]/sermons`)
✅ Contact (`/[locale]/contact`)

## Pages Still Needed

The following pages need to be created following the same pattern:
- `/[locale]/what-to-expect`
- `/[locale]/beliefs`
- `/[locale]/events`
- `/[locale]/ministries`
- `/[locale]/resources`
- `/[locale]/give`
- `/[locale]/sermons/[slug]`
- `/[locale]/events/[slug]`
- `/[locale]/resources/[slug]`

## Troubleshooting

**Language switcher not working?**
- Make sure `LocaleProvider` wraps your components
- Check that routes include the locale prefix

**Translations not showing?**
- Verify the translation key exists in both `en.json` and `zh.json`
- Check that you're using `useLocale()` hook correctly

**Links breaking when switching languages?**
- Make sure all links use `getLocalizedPath()`
- Verify the target page exists in both language folders
