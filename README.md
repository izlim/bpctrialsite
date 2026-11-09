# Bethany Presbyterian Church Website

The website for Bethany Presbyterian Church Singapore, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, and exported as a fully static site.

## Features

- ✅ **Two languages**: English (`/en/`) and Chinese (`/zh/`). Visitors to `/` are sent to the language matching their browser.
- ✅ **Static export**: `npm run build` produces plain HTML/CSS/JS in `out/`, suitable for cPanel or any static host
- ✅ **Markdown content**: Sermons (services) and events are Markdown files in `content/`
- ✅ **Church history page**: An interactive 120-year timeline at `/[locale]/history`
- ✅ **SEO**: Per-language metadata, Open Graph tags, and a generated `sitemap.xml`

## Pages

Home, About, History, Visit, What to Expect, Services (sermons), Events, Ministries, and Contact. Each one exists in both `/en/` and `/zh/`.

## Brand colors (Tailwind)

Design tokens follow [.cursorrules](.cursorrules) (Deep Violet, Aqua Teal, Warm Orange):

| Token | Role |
|--------|------|
| `primary-*` | Violet scale — navigation, heroes, footers, dark UI (`primary-600` = `#2E1A46`) |
| `teal-*` | Primary CTAs on light backgrounds, inline links on white (`teal-400` / `teal-500`), icons on violet bars |
| `orange-*` | Accents only — dividers, tags, warm highlights (`orange-400` = `#FF6C0E`) |
| `text-ink` / `#1a1040` | Text on teal buttons and light teal surfaces (contrast) |

Utilities in [`app/globals.css`](app/globals.css): `btn-teal-primary`, `link-on-light`, `card-accent-primary` (violet top border), `card-accent-orange` (orange top border), `bg-primary-gradient`, `bg-soft-gradient`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to `/en/` or `/zh/`.

## Building for Production

```bash
npm run build
```

This creates a static export in `out/` and copies `.htaccess` into it. To build for a site that lives in a subfolder, set the base path:

```bash
NEXT_PUBLIC_BASE_PATH=/bpctrialsite npm run build
```

Other checks: `npm run lint` and `npx tsc --noEmit`. There is no automated test suite.

## Adding Content

Content lives in language folders. To have an item appear in both languages, create a file with the **same filename** in both `en/` and `zh/`. Templates are in `content/templates/`.

### Adding Sermons

Create `content/services/en/<name>.md` and `content/services/zh/<name>.md`:

```markdown
---
title: "Sermon Title"
date: "2026-05-17"
speaker: "Pastor Name"
series: "Series Name"
videoUrl: "https://www.youtube.com/watch?v=..."
audioUrl: ""
notesUrl: "https://..."
---
```

### Adding Events

Create `content/events/en/<name>.md` and `content/events/zh/<name>.md`:

```markdown
---
title: "Event Title"
date: "2026-09-19"
time: "6:30 PM - 9:30 PM"
location: "Bethany Presbyterian Church Hall"
recurring: false
image: "/images/my-event.jpeg"
---

Event description...
```

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for full details.

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `(root)/` - Language redirect at `/`
  - `[locale]/` - Language-specific pages (en, zh)
- `components/` - Reusable React components
- `content/` - Markdown sermons and events
- `church-history-v4.json` - Data for the History page timeline
- `lib/` - Utility functions (i18n, markdown, fonts, formatting)
- `translations/` - UI text (`en.json`, `zh.json`)
- `public/` - Images and fonts

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for a guided tour.

## Internationalization (i18n)

See [I18N_GUIDE.md](I18N_GUIDE.md) for how the language system works and how to add pages.

## Deployment

Pushing to `main` publishes a staging copy to GitHub Pages for review. Once approved, build with `npm run build` and upload the contents of `out/` (including `.htaccess`) to `public_html/` on the cPanel server. See [DEPLOYMENT.md](DEPLOYMENT.md).
