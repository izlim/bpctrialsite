# Customization Guide

This guide explains how to manually customize the website's appearance and content, specifically focusing on **Icons**, **Colors**, and **Text**.

## 1. Changing Colors

The website uses [Tailwind CSS](https://tailwindcss.com/) for styling, and the color palette is defined in the configuration file.

### Steps to Update the Theme Color

1.  Open `tailwind.config.js` in the root directory.
2.  Locate the `colors` object within the `theme.extend` section.
3.  You will see a `primary` color object with shades from `50` to `900`.
4.  Update the hex color codes to your desired palette.

**Example:**

```javascript
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f1f8',  // Lightest shade
          // ...
          600: '#2E1A46', // <--- MAIN THEME COLOR (Anchor)
          // ...
          900: '#130a1f', // Darkest shade
        },
        // ...
      },
    },
  },
  // ...
}
```

> **Tip:** You can use online tools like [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) or [shades generator](https://javisperez.github.io/tailwindcolorshades/) to generate a full palette from a single color.

---

## 2. Changing Icons

The website currently uses **inline SVG icons** directly within the React components. This means there isn't a single folder of icon files; instead, the SVG code is embedded in the component files (e.g., `Footer.tsx`, `Header.tsx`).

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

---

## 3. Changing Text & Content

Text content is managed in two different ways depending on whether it is **static page text** or **dynamic content** (like events or sermons).

### A. Static Page Text (Headings, Buttons, Labels)
*   **Location**: `translations/` folder (`en.json` for English, `zh.json` for Chinese).
*   **How to Edit**: Open the JSON file and modify the text values. **Do not modify the keys** (the text on the left side).
*   **Detailed Guide**: See [I18N_GUIDE.md](I18N_GUIDE.md).

### B. Dynamic Content (Events, Resources)
*   **Location**: `content/` folder.
*   **How to Edit**: These are Markdown files. You can edit the "frontmatter" (metadata at the top) for dates/titles/speakers, and the body text for the description.
*   **Detailed Guide**: See [CONTENT_GUIDE.md](CONTENT_GUIDE.md).
