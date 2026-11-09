# Deployment Guide

This website is a static site (`output: 'export'` in `next.config.js`). Building it produces plain HTML/CSS/JS files that any web server can host.

## Building the Site

```bash
npm install
npm run build
```

This creates an `out/` directory with all the static files and copies `.htaccess` into it (via `scripts/copy-htaccess.js`). Each page is written as its own folder with an `index.html` (`trailingSlash: true`), e.g. `out/en/about/index.html`.

### Base Path (deploying to a subfolder)

If the site is served from a subfolder (e.g. `example.com/bpctrialsite/`), set `NEXT_PUBLIC_BASE_PATH` when building. `next.config.js` reads it automatically, so you don't need to edit the config:

```bash
NEXT_PUBLIC_BASE_PATH=/bpctrialsite npm run build
```

Leave it unset when the site is served from the domain root.

## Release Process

1. **Staging review**: push to `main`. GitHub Actions builds the site and publishes it to GitHub Pages under `/bpctrialsite` so it can be reviewed before release (see below).
2. **Production**: once the changes are approved, build locally and upload to `public_html/` on the cPanel server (next section).

## Deploying to Production

The live site is deployed by uploading the build output straight to `public_html/` on the cPanel server.

1. Build the site: `npm run build`. Leave `NEXT_PUBLIC_BASE_PATH` unset, because the site is served from the domain root.
2. Upload **everything inside** `out/`, including the hidden `.htaccess` file, to `public_html/` (with cPanel File Manager or FTP).
3. Delete any old files on the server that are no longer in `out/`. For example, pages that were removed from the site will otherwise stay online.

**File structure on server:**
```
public_html/
  ├── .htaccess
  ├── index.html          # redirects to /en/ or /zh/
  ├── en/
  │   ├── index.html
  │   ├── about/index.html
  │   ├── services/...
  │   └── ...
  ├── zh/
  ├── _next/
  ├── images/
  ├── fonts/
  └── sitemap.xml
```

## Staging Site (GitHub Pages)

`.github/workflows/deploy.yml` runs on every push to `main` (or by hand from the **Actions** tab). It builds with `NEXT_PUBLIC_BASE_PATH=/bpctrialsite`, because GitHub Pages serves the site from the `/bpctrialsite` subfolder, and publishes `out/` to GitHub Pages. This is the staging site for review before a production release.

GitHub Pages must be enabled for the repository with **Source: GitHub Actions**.

Because staging lives in a subfolder, check new images and links there. Raw `<img src>` and other hand-written paths must be prefixed with `NEXT_PUBLIC_BASE_PATH` or they break on staging even though they work in production.

## Apache `.htaccess`

The `.htaccess` in the repository root is copied into `out/` on every build. It:

- Disables directory listings and sets `index.html` as the default file
- Redirects `/` to `/zh/` when the browser's `Accept-Language` starts with `zh`, otherwise to `/en/` (temporary 302 redirects)
- Rewrites requests for missing files to `/index.html`
- Enables gzip compression and browser caching for images, CSS, and JavaScript

It uses `RewriteBase /` and absolute paths (`/en/`, `/zh/`, `/index.html`), which assume the site is at the domain root. If it is served from a subfolder, these paths need adjusting.

## Other Hosts

Config files for other static hosts are included but not used by the current setup:

- **Vercel**: `vercel.json` (rewrites all routes to `/index.html`)
- **Netlify**: `netlify.toml` (build command `npm run build`, publish directory `out`)

## Troubleshooting

**Images or fonts not loading:**
- Make sure all files from `out/` are uploaded, including `images/` and `fonts/`.
- If the site is in a subfolder, check that it was built with the matching `NEXT_PUBLIC_BASE_PATH`. Pages built without it load assets from the domain root.

**Old pages still showing after a deploy:**
- Uploading doesn't delete old files. Remove them from `public_html/` by hand.

**Build errors:**
- Make sure all dependencies are installed: `npm install`
- Use Node.js 20 (matching the workflows)
- Run `npx tsc --noEmit` and `npm run lint` for details
