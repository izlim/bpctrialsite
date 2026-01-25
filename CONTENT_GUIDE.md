# Content Management Guide

This guide will help non-technical users add and edit content on the church website, including how to handle multiple languages.

## Overview

The website uses two types of content:

1.  **Dynamic Content (Markdown)**: For frequently updated items like Sermons, Events, and Resources. Stored in `content/`.
2.  **Static Page Content (JSON)**: For fixed text on pages like Home, About, Visit, etc. Stored in `translations/`.

## 1. Managing Dynamic Content (Sermons, Events, Resources)

Content is stored in the `content/` folder, organized by type and then by language:

*   `content/events/en/` - English events
*   `content/events/zh/` - Chinese events
*   `content/resources/en/` - English resources
*   `content/resources/zh/` - Chinese resources

**Note:** Sermons are currently language-neutral and stored in `content/sermons/`.

### Getting Started

1.  **Find the template files** in `content/templates/`
2.  **Copy a template** to the appropriate folder (e.g., `content/events/en/`)
3.  **Rename the file** to something descriptive (use lowercase, hyphens for spaces)
4.  **Edit the content** following the examples below
5.  **(Optional) Create the translation:** Copy your new file to the corresponding `zh` folder and translate the content.

### File Naming
*   Use lowercase letters
*   Use hyphens (-) instead of spaces
*   **Important:** To link English and Chinese versions of the same item, **they must have the exact same filename**.
    *   Example: `content/events/en/easter-service.md` AND `content/events/zh/easter-service.md`

### Adding an Event
1.  Copy `content/templates/event-template.md` to `content/events/en/`
2.  Rename it (e.g., `community-outreach.md`)
3.  Edit the frontmatter (the section between `---` at the top):
    ```markdown
    ---
    title: "Event Name"
    date: "2024-02-20"
    time: "7:00 PM"
    location: "Main Sanctuary"
    recurring: false
    ---
    ```
4.  Write your event description below the frontmatter.
5.  To add Chinese: Copy this file to `content/events/zh/community-outreach.md` and translate the title, location, and description.

### Adding a Resource
1.  Copy `content/templates/resource-template.md` to `content/resources/en/`
2.  Rename it (e.g., `daily-devotion-1.md`)
3.  Edit the frontmatter:
    ```markdown
    ---
    title: "Resource Title"
    date: "2024-02-15"
    type: "devotion"  # specific types: devotion, study, article
    ---
    ```
4.  Write content below.
5.  To add Chinese: Copy to `content/resources/zh/` and translate.

## 2. Managing Static Page Content

Text that appears on the main pages (Home, About, Visit, etc.) is managed in translation files.

*   `translations/en.json` - English text
*   `translations/zh.json` - Chinese text

### How to Edit
1.  Open the file in a text editor.
2.  Find the text you want to change. Keys are organized by page (e.g., `"about": { ... }`).
3.  Change the text inside the quotes on the right side of the colon.
    *   **Do not** change the keys on the left side.
    *   **Do not** remove commas or quotes.

**Example:**
To change the "About Us" title:
```json
"about": {
  "title": "About Bethany Presbyterian Church",  <-- Edit this text
  ...
}
```

## Markdown Basics (for Dynamic Content)

*   **Headers**: `# Header 1`, `## Header 2`
*   **Bold**: `**text**`
*   **Italic**: `*text*`
*   **Lists**: `- Item` or `1. Item`
*   **Links**: `[Text](URL)`

## Help & Troubleshooting

*   **Content not appearing?** Check if you saved the file in the correct language folder (`en` or `zh`) and that it ends in `.md`.
*   **Translation missing?** If a Chinese version of an event is missing, the site might show an empty page or error (depending on implementation). Ensure both `en` and `zh` files exist if you want full coverage.
