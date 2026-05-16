# Bethany Presbyterian Church Website

A modern, maintainable church website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **Multi-language Support**: English and Chinese (中文)
- ✅ **Static Site Generation**: Fast, SEO-friendly static pages
- ✅ **Markdown Content**: Easy content management for sermons, events, and resources
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Modern UI**: Clean, professional design with Tailwind CSS

## Brand colors (Tailwind)

Design tokens follow [.cursorrules](.cursorrules) (Deep Violet, Aqua Teal, Warm Orange):

| Token | Role |
|--------|------|
| `primary-*` | Violet scale — navigation, heroes, footers, dark UI (`primary-600` = `#2E1A46`) |
| `teal-*` | Primary CTAs on light backgrounds, inline links on white (`teal-400` / `teal-500`), icons on violet bars |
| `orange-*` | Accents only — dividers, tags, warm highlights (`orange-400` = `#FF6C0E`) |
| `text-ink` / `#1a1040` | Text on teal buttons and light teal surfaces (contrast) |

Utilities in [`app/globals.css`](app/globals.css): `btn-teal-primary`, `link-on-light`, `card-accent-primary` (violet top border), `card-accent-orange` (orange top border).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
```

This will create a static export in the `out` directory.

## Adding Content

### Adding Sermons

Create a new markdown file in `content/sermons/` with the following frontmatter:

```markdown
---
title: "Sermon Title"
date: "2024-01-15"
speaker: "Pastor Name"
series: "Series Name"
videoUrl: "https://youtube.com/..."
audioUrl: "https://..."
---

Sermon content here...
```

### Adding Events

Create a new markdown file in `content/events/` with the following frontmatter:

```markdown
---
title: "Event Title"
date: "2024-01-20"
time: "7:00 PM"
location: "Main Sanctuary"
---

Event description...
```

### Adding Resources

Create a new markdown file in `content/resources/` with the following frontmatter:

```markdown
---
title: "Resource Title"
date: "2024-01-15"
type: "devotion"
---

Resource content...
```

## Project Structure

- `app/` - Next.js app router pages and layouts
  - `[locale]/` - Language-specific pages (en, zh)
- `components/` - Reusable React components
- `content/` - Markdown content files
- `lib/` - Utility functions
- `translations/` - Language translation files (en.json, zh.json)
- `public/` - Static assets

## SEO & Performance

This site is optimized for:
- **SEO**: All pages include proper metadata, Open Graph tags, and structured data
- **Performance**: Static site generation for fast loading times
- **Accessibility**: Semantic HTML and ARIA labels where appropriate
- **Mobile**: Fully responsive design that works on all devices

## Content Management

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for instructions on adding content to the website.

## Internationalization (i18n)

The website supports multiple languages. See [I18N_GUIDE.md](I18N_GUIDE.md) for details on:
- How the language system works
- Adding new pages with language support
- Adding new languages
- Using translations in components

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)
- Any static hosting service

To build for production:
```bash
npm run build
```

The static files will be in the `out` directory.
