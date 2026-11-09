# Project Structure Guide

This guide is designed to help you understand "what lives where" in this website project.

## Top-Level Folders

| Folder | Description |
| :--- | :--- |
| **`app/`** | The **Pages** of your website. Every page lives under `app/[locale]/` so it exists in both English (`/en/...`) and Chinese (`/zh/...`). `app/(root)/` only redirects visitors from `/` to a language. |
| **`components/`** | **Reusable Building Blocks**. Pieces that appear on multiple pages, like the Header, Footer, Event Cards, and the Church History timeline. |
| **`content/`** | **Sermons and Events**. Markdown files in `content/services/{en,zh}/` and `content/events/{en,zh}/`, plus templates in `content/templates/`. |
| **`translations/`** | **Text & Language**. JSON files containing all the static text for the website in English and Chinese. |
| **`public/`** | **Static Assets**. Images (`public/images/`), fonts (`public/fonts/`), and files like `favicon.ico` and `robots.txt`. |
| **`lib/`** | **Helper Code**. Language helpers, Markdown reading, fonts, and date formatting. |
| **`scripts/`** | **Build Helpers**. `copy-htaccess.js` copies `.htaccess` into the build output. |
| **`.github/workflows/`** | **GitHub Actions**. `deploy.yml` publishes the staging review site to GitHub Pages on every push to `main`. The live site is uploaded by hand (see `DEPLOYMENT.md`). |

## Important Files

| File | Description |
| :--- | :--- |
| `tailwind.config.js` | **Design Settings**. Where you define your color palette, fonts, and other design tokens. |
| `church-history-v4.json`, `church-history-v4.zh.json` | **History Page Data**. The English and Chinese timeline and text shown on the History page. |
| `app/sitemap.ts` | **Sitemap**. Lists every page for search engines. Update it when adding a page. |
| `.htaccess` | **Apache Settings**. Language redirect, caching, and compression on the cPanel server. |
| `next.config.js` | **Build Settings**. Static export, trailing slashes, and the optional base path. |
| `package.json` | **Project Manifest**. Lists the libraries the project uses and the commands to run it. |
| `CONTENT_GUIDE.md` | **How-To Guide** for adding sermons and events. |
| `CUSTOMIZATION.md` | **How-To Guide** for changing colors, fonts, icons, and text. |
| `I18N_GUIDE.md` | **Technical Guide** for adding new languages and pages. |
| `DEPLOYMENT.md` | **How-To Guide** for building and publishing the site. |

## Which Folder Should I Open?

*   **"I want to change the text on the 'About Us' page."**
    *   Go to `translations/en.json` (or `zh.json`).
*   **"I want to add a new event."**
    *   Go to `content/events/en/` and `content/events/zh/`.
*   **"I want to add a new sermon."**
    *   Go to `content/services/en/` and `content/services/zh/`.
*   **"I want to edit the church history."**
    *   Go to `church-history-v4.json` (English) and `church-history-v4.zh.json` (Chinese).
*   **"I want to change the logo."**
    *   Look at `components/Logo.tsx` and `public/images/logo/`.
*   **"I want to change the primary purple color."**
    *   Go to `tailwind.config.js`.
*   **"I want to change the links in the footer."**
    *   Go to `components/Footer.tsx`.
*   **"I want to change the menu."**
    *   Go to `components/Navigation.tsx`.
