# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 1. Project Overview

This is the official website for **Bethany Presbyterian Church (BPC)**, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It is configured as a fully static website (`output: 'export'`) deployed to static hosting / cPanel.

- **Primary Languages**: English (`en`) and Chinese (`zh`) via custom route-based i18n (`app/[locale]/`).
- **Content System**: Markdown files parsed with `gray-matter` and `remark` in `content/` (`events`, `services`).
- **Styling**: Tailwind CSS with custom palette adhering strictly to church brand guidelines.

---

## 2. Common Commands

All commands run from the repository root:

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:3000` |
| `npm run build` | Build static export to `out/` and copy `.htaccess` |
| `npm run lint` | Run ESLint across codebase |
| `npx tsc --noEmit` | Check TypeScript types without emitting code |
| `npm start` | Start Next.js production server (for local test, not static export) |
| `NEXT_PUBLIC_BASE_PATH=/bpctrialsite npm run build` | Build for a subfolder deployment (the GitHub Pages staging build uses this; production does not) |

There is no test suite. Verify changes with `npx tsc --noEmit`, `npm run lint`, and `npm run build` (the build catches missing `generateStaticParams` and static-export violations).

---

## 3. Architecture & Directory Structure

```text
bpcsite/
├── app/
│   ├── (root)/                # Root page redirects to /en or /zh
│   ├── [locale]/              # Localized routes (about, contact, events, services, visit, etc.)
│   │   ├── page.tsx           # Server component (validates locale, generateStaticParams)
│   │   ├── *PageClient.tsx    # Client component rendering page UI and using translations
│   │   └── layout.tsx         # Locale-specific root layout with LocaleProvider
│   ├── globals.css            # Global CSS, base layers, and utility classes
│   └── sitemap.ts             # Static sitemap generator
├── components/                # Reusable React components (Header, Footer, Navigation, Cards, etc.)
├── content/                   # Markdown content source
│   ├── events/{en,zh}/        # Event markdown files
│   ├── services/{en,zh}/      # Sermons / service markdown files
│   └── templates/             # Markdown templates for new entries
├── lib/                       # Utility helpers
│   ├── i18n.ts                # Locale definitions, getLocalizedPath, getLocaleFromPath
│   ├── markdown.ts            # Markdown parsing & custom embed parser ({{ embed: <url> }})
│   ├── fonts.ts               # Local & web font configurations
│   └── utils.ts               # Formatting and general helper functions
├── translations/              # Locale JSON dictionaries (en.json, zh.json)
├── public/                    # Static assets (images, fonts, robots.txt, favicon)
├── scripts/                   # Build scripts (copy-htaccess.js, generate-locale-pages.js)
├── tailwind.config.js         # Tailwind theme & brand color definitions
└── next.config.js             # Static export configuration (output: 'export', unoptimized images)
```

### 3.1. Cross-cutting behaviour worth knowing

- **Two root layouts**: `app/(root)/layout.tsx` and `app/[locale]/layout.tsx` each render `<html>` and import `globals.css`. The root one only redirects (inline script + meta refresh) to `/zh/` if the browser language starts with `zh`, otherwise `/en/`. Per-locale SEO metadata (titles, keywords, OpenGraph, `metadataBase: https://bethanypc.org.sg`) lives in `app/[locale]/layout.tsx`.
- **Locale comes from the URL path, not params**: `LocaleProvider` calls `getLocaleFromPath(usePathname())` and picks the dictionary. `t` is typed as `typeof en.json`, so a key added only to `en.json` type-checks but is `undefined` in Chinese. Always add it to both.
- **basePath**: `next.config.js` reads `NEXT_PUBLIC_BASE_PATH`. `next/link` handles it automatically, but raw `<img src>`, `<link href>`, and manual `window.location` paths do not. Prefix them with `process.env.NEXT_PUBLIC_BASE_PATH || ''` (see `VisitPageClient.tsx`, `ImagePlaceholder.tsx`, `ImageCarousel.tsx`, `LanguageSwitcher.tsx`).
- **Markdown detail pages** (`events/[slug]`, `services/[slug]`): `generateStaticParams` reads `content/<type>/<locale>/*.md` directly, with `dynamicParams = false`. If no files exist it returns a placeholder slug so the export doesn't fail. Each locale has its own files, so a slug that exists only in `en` has no `zh` page. Markdown is rendered with `remark-html` `sanitize: false`, so raw HTML in content is passed through.
- **Sitemap**: `app/sitemap.ts` has a hardcoded `staticRoutes` list. Add new pages there.
- **History page**: `components/ChurchHistory.tsx` is driven by `church-history-v4.json` (English) and `church-history-v4.zh.json` (Chinese) at the repo root, chosen by locale. Both must keep the same structure (`ChurchHistoryData`); fixes to names or facts usually need making in both.
- **Deployment**: pushing to `main` runs `.github/workflows/deploy.yml`, which publishes a **staging** site to GitHub Pages with `NEXT_PUBLIC_BASE_PATH=/bpctrialsite` for review. After approval, production is deployed by running `npm run build` (no base path) and uploading `out/` to cPanel `public_html/` by hand. Asset paths must work both with and without the base path. `.htaccess` at the repo root is copied into `out/` by `scripts/copy-htaccess.js`.

---

## 4. Brand Design System & Color Tokens (STRICT RULES)

The project follows strict brand design rules defined in `.cursorrules` and `GEMINI.md`. **Always adhere to these rules**:

### 4.1. Core Brand Colors

| Color | Role | Tailwind Token | Hex |
|---|---|---|---|
| **Deep Violet** | Foundation (nav, hero, footer, dark sections) | `primary-600` | `#2E1A46` |
| **Aqua Teal** | Primary CTA ("Plan your visit", "Watch sermon", "Give") | `teal-400` | `#2ED9C3` |
| **Warm Orange** | Accent / Announcements / Badges (1–2 per page max) | `orange-400` | `#FF6C0E` |
| **Dark Ink** | Text on teal buttons & light teal surfaces | `ink` / `--text-on-teal` | `#1a1040` |

### 4.2. Shade Scales & Usage
- **Violet (`primary-*`)**:
  - `primary-50` (`#F2EFF7`): Light section background tint
  - `primary-100` (`#D9D0EC`): Tags, sidebar highlights, calendar cells
  - `primary-200` (`#B9A9D8`): Card or input borders
  - `primary-400` (`#7A61A8`): Secondary text on dark backgrounds
  - `primary-600` (`#2E1A46`): Core brand color (nav, hero, footer)
  - `primary-800` (`#1A0E28`): Very dark sections, footer base
  - `primary-900` (`#100819`) / `primary-950` (`#080510`): Dark headings on tinted surfaces
- **Teal (`teal-*`)**:
  - `teal-50` (`#E3FAF8`): Info boxes, scripture quote backgrounds
  - `teal-100` (`#B0F1E9`): "New" badges, volunteer tags
  - `teal-400` (`#2ED9C3`): Primary CTA button fill, active icons on violet
  - `teal-500` (`#20B8A5`): Links on light/white backgrounds (`link-on-light`)
  - `teal-600` (`#148F80`): Primary button hover state
  - `teal-900` (`#03332E`): Headings on teal tints
- **Orange (`orange-*`)**:
  - `orange-50` (`#FFF3EB`): Warm section tints (giving, mission)
  - `orange-100` (`#FFD9BB`): Testimonial cards, soft highlights
  - `orange-400` (`#FF6C0E`): Accent tags, announcements, secondary action button
  - `orange-500` (`#E05800`): Orange button hover state
  - `orange-900` (`#3D1800`): Text/headings on orange 50 tint

### 4.3. Contrast & Accessibility Rules
- **Text on Teal 400 and lighter**: MUST use dark ink text (`#1a1040` / `text-ink`), NEVER white text.
- **Orange on Violet**: NEVER place orange text on violet background (fails WCAG contrast).
- **CTA Rule**: NEVER use both teal and orange as primary CTAs on the same page. Assign one role per color.
- **Tinted Backgrounds**: Text on a 50 or 100 background must use the 800 or 900 stop of that color family.
- **White text**: Safe on violet 600–900, teal 600–900, and orange 500–900.

### 4.4. Component Patterns
- **Navigation**: `bg-primary-600`, brand text white, links `rgba(255,255,255,0.65)`, CTA button `bg-orange-400` with white text.
- **Hero**: `bg-primary-600`, white heading, subtext `rgba(255,255,255,0.65)`, primary CTA `bg-teal-400` with `text-ink`, secondary CTA ghost button (white border + white text).
- **Cards**: `bg-primary-600` or white with `card-accent-primary` / `card-accent-orange`, category tag `orange-400`, teal CTA.
- **Announcement Banners**: `bg-orange-50` or `100`, left border `border-orange-400`, text `text-orange-900`.
- **Body Sections**: White (`#FFFFFF`) or light neutral (`#faf9fc`), dark text, inline links `text-teal-500 hover:text-teal-600`.
- **Footer**: `bg-primary-800` or `primary-900`, white and muted white text.

---

## 5. Internationalization (i18n) Patterns

1. **Routing**: Every page exists under `app/[locale]/[page]/`.
   - Server page (`page.tsx`):
     ```typescript
     import { notFound } from 'next/navigation';
     import { locales, type Locale } from '@/lib/i18n';
     import YourPageClient from './YourPageClient';

     export async function generateStaticParams() {
       return locales.map((locale) => ({ locale }));
     }

     export default function Page({ params }: { params: { locale: string } }) {
       if (!locales.includes(params.locale as Locale)) notFound();
       return <YourPageClient />;
     }
     ```
2. **Client Components**: Use the `useLocale()` hook:
   ```typescript
   'use client';
   import { useLocale } from '@/components/LocaleProvider';
   import { getLocalizedPath } from '@/lib/i18n';
   import Link from 'next/link';

   export default function YourComponent() {
     const { locale, t } = useLocale();
     return (
       <Link href={getLocalizedPath('/about', locale)}>
         {t.nav.about}
       </Link>
     );
   }
   ```
3. **No Hardcoded UI Text**: All text visible to users must be added to both `translations/en.json` and `translations/zh.json`.
4. **Internal Links**: Always pass hrefs through `getLocalizedPath(path, locale)` from `@/lib/i18n`.

---

## 6. Static Export Constraints (Next.js)

Because the site builds with `output: 'export'`:
- **No Dynamic Server Headers**: Do not use `cookies()`, `headers()`, or server actions.
- **Dynamic Routes**: Any dynamic route (e.g. `[slug]`) must implement `generateStaticParams()` to provide all params at build time.
- **Images**: `next.config.js` uses `images: { unoptimized: true }`. Normal Next.js `<Image />` tags work, but dynamic optimization on the server is disabled.
- **Trailing Slashes**: `trailingSlash: true` is configured for clean Apache / cPanel static file routing.

---

## 7. Content Management (Markdown)

Markdown files live in `content/`:
- **Services/Sermons** (`content/services/{en,zh}/`):
  ```yaml
  ---
  title: "Sermon Title"
  date: "2026-05-10"
  speaker: "Pastor Name"
  series: "Series Name"
  videoUrl: "https://youtube.com/..."
  audioUrl: "https://..."
  notesUrl: "https://..."
  ---
  ```
- **Events** (`content/events/{en,zh}/`):
  ```yaml
  ---
  title: "Event Title"
  date: "2026-06-20"
  time: "7:00 PM"
  location: "Main Sanctuary"
  recurring: true        # optional, shows a recurring badge
  image: "/images/..."   # optional, used by EventCard
  ---
  ```
- **Custom Embeds**: In markdown body, use `{{ embed: https://... }}` for YouTube videos or Instagram posts.
- The sermon detail page (`services/[slug]`) renders only frontmatter (YouTube from `videoUrl`, `notesUrl` link); the Markdown body and `audioUrl` are not displayed. Event pages do render the body.
- Event `image` posters show uncropped at 16:9 on `EventCard` and in full at the top of the event page, where `ImageLightbox` opens them full-screen. Posters are usually 1600×900.

### 7.1. Adding events from posters

This workflow is run by **non-technical church staff** using their own Claude Code. Their steps are in `poster-inbox/README.md`. Talk to them in plain language, without git or Next.js jargon, and explain what each step does. Never commit, push or build for production until they say to.

**1. Write the events**
- `poster-inbox/` is where staff drop event posters. Only its `README.md` is tracked; everything else in it is git-ignored. Copy each poster into `public/images/` with a descriptive kebab-case name, write the `en` and `zh` markdown files from it, then **delete the poster from `poster-inbox/`**.
- Translate the poster faithfully. Don't invent details it doesn't give (write "To be announced" / "另行通知" where the poster says so).
- An event moves to "Past" the day after its `date`, so for multi-day events use the **last** day.
- Copy registration deadlines as printed. Don't add wording that invites late sign-ups.
- Use the glossary below for names. If a name or place isn't in it and isn't elsewhere in the repo, **ask the staff member** for the English name, then add it to the glossary.
- Then summarise what was added and list anything they should double-check.

**2. Local preview**
- `npm run dev` currently returns 500 on every event detail page (a dev-server issue with `output: 'export'`; the build is fine). Preview the static build instead: `npm run build`, then `python3 -I -m http.server 3000 --directory out` in the background, and give them `http://localhost:3000/en/events/` links. Rebuild after every change. Stop the server when they're done.

**3. Staging (when they ask)**
- If the commit changes anything outside `content/events/`, `public/images/`, `poster-inbox/` or the glossary in this file, don't stop or worry them about it. Add a line to the commit message body starting `NOTE: changes outside event content:` and list those files, so the admin can spot it. `.github/workflows/check-paths.yml` also flags these pushes by opening an issue for the admin.
- Commit and push to `main`. GitHub Pages redeploys in a few minutes at `https://izlim.github.io/bpctrialsite/en/events/` (replace `en` with `zh` for Chinese). Give them the direct event links so they can check on their phone.
- If the push is rejected because `main` has moved on, run `git pull --rebase origin main`. If that applies cleanly, push again.
- If it hits a **conflict, don't resolve it**. Run `git rebase --abort`, then `git branch events/<slug>` and `git push origin events/<slug>`. Only after that push succeeds, run `git reset --hard origin/main` so their `main` is up to date again (their work is safe on the branch). Tell them in plain words that their changes are saved and the website admin will merge them. The admin resolves all conflicts.

**4. Live site**
- Staff stop at staging. The website admin approves the live upload in GitHub, so don't build, zip or upload for production unless the admin asks.

**Glossary**: English names for Chinese terms that appear on posters:

| Chinese | English |
|---|---|
| 主恩楼 | Grace Auditorium |
| 秋娥牧师 / 洪秋娥牧师 | Rev. Serene Ang |
| 佳佳姐妹 | Sister Jia Jia |

---

## 8. Coding Conventions

- **File Naming**: PascalCase for React components (`EventCard.tsx`), camelCase for utilities and hooks (`markdown.ts`, `useLocale`).
- **Imports**: Prefer path alias `@/...` (e.g., `@/components/...`, `@/lib/...`, `@/translations/...`).
- **Icons**: Use inline SVGs with standard dimensions (`w-5 h-5` or `w-6 h-6`) or reusable component wrappers.
- **CSS Utility Classes**: Use custom classes defined in `app/globals.css` where applicable:
  - `.btn-teal-primary` for primary CTA buttons
  - `.link-on-light` for inline links on white/light sections
  - `.bg-primary-gradient` and `.bg-soft-gradient` for consistent gradients
