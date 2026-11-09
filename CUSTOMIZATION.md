# Customization Guide

This guide explains how to manually customize the website's appearance and content, specifically focusing on **Colors**, **Fonts**, **Icons**, and **Text**.

## 1. Changing Colors

The website uses [Tailwind CSS](https://tailwindcss.com/) for styling. The colour palette is defined in `tailwind.config.js` and follows the church brand rules in [.cursorrules](.cursorrules).

### The Brand Palette

`theme.extend.colors` in `tailwind.config.js` defines three colour scales plus a text colour:

| Scale | Main shade | Role |
|---|---|---|
| `primary` (Deep Violet) | `600: '#2E1A46'` | Navigation, heroes, footer, dark sections |
| `teal` (Aqua Teal) | `400: '#2ED9C3'` | Primary buttons ("Plan your visit", "Watch sermon"), links |
| `orange` (Warm Orange) | `400: '#FF6C0E'` | Accents and announcements, 1–2 per page |
| `ink` | `'#1a1040'` | Text on teal buttons and light teal backgrounds |

**Example:**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2EFF7',  // Lightest shade
          // ...
          600: '#2E1A46', // <--- MAIN BRAND COLOR (Anchor)
          // ...
          950: '#080510', // Darkest shade
        },
        teal: { /* 50–900 */ },
        orange: { /* 50–900 */ },
        ink: '#1a1040',
      },
    },
  },
}
```

### Rules to Keep

If you change colours, keep these accessibility rules from `.cursorrules`:
*   Text on teal 400 or lighter must use the dark `ink` colour, never white.
*   Never put orange text on a violet background.
*   Don't use both teal and orange as the main button colour on the same page.

Shared styles built from these colours (`btn-teal-primary`, `link-on-light`, `card-accent-primary`, `card-accent-orange`, `bg-primary-gradient`, `bg-soft-gradient`) are defined in `app/globals.css`.

---

## 2. Fonts

*   **English text** uses Inter, loaded from `public/fonts/Inter-VariableFont.woff2` via `lib/fonts.ts`.
*   **Chinese text** uses GenSen Rounded 2. The `@font-face` rules are in `public/fonts/gensen.css`, which is loaded by the page layouts. These fonts are served as plain static files (not through `next/font`) because of their size.
*   The font stack is set under `fontFamily` in `tailwind.config.js`.

---

## 3. Changing Icons

The website uses **inline SVG icons** directly within the React components. This means there isn't a single folder of icon files; instead, the SVG code is embedded in the component files (e.g., `Footer.tsx`, `Header.tsx`).

### Steps to Change an Icon

1.  **Locate the Component**: Find the file containing the icon you want to change (e.g., `components/Footer.tsx` for social media icons).
2.  **Find the SVG**: Look for the `<svg>...</svg>` tag associated with the element.
3.  **Replace the SVG**:
    *   Find a new icon (e.g., from [Heroicons](https://heroicons.com/) or [Lucide](https://lucide.dev/)).
    *   Copy the **JSX** or **SVG** code.
    *   Replace the existing `<svg>...</svg>` block with your new code.
    *   **Important:** Ensure you keep any existing specific classes (like `w-6 h-6` or `className="text-gray-400"`) to maintain consistent styling.

**Example in `Footer.tsx`:**

```tsx
// BEFORE
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="..." />
</svg>

// AFTER (Replacing with a new icon)
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M..." />
</svg>
```

The transport pictures on the Visit page are images (`public/images/train.png`, `bus.png`, `car.png`), not SVGs.

---

## 4. Changing Text & Content

Text content is managed in different places depending on what it is.

### A. Static Page Text (Headings, Buttons, Labels)
*   **Location**: `translations/` folder (`en.json` for English, `zh.json` for Chinese).
*   **How to Edit**: Open the JSON file and modify the text values. **Do not modify the keys** (the text on the left side).
*   **Detailed Guide**: See [I18N_GUIDE.md](I18N_GUIDE.md).

### B. Sermons and Events
*   **Location**: `content/services/` and `content/events/`, each with `en/` and `zh/` folders.
*   **How to Edit**: These are Markdown files. You can edit the "frontmatter" (metadata at the top) for dates/titles/speakers, and the body text for the description.
*   **Detailed Guide**: See [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

### C. Church History
*   **Location**: `church-history-v4.json` in the project root.

### D. Images
*   **Location**: `public/images/`. Reference them as `/images/<filename>`.
