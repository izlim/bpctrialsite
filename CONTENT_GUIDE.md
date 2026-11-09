# Content Management Guide

This guide will help non-technical users add and edit content on the church website, including how to handle multiple languages.

## Overview

The website uses three types of content:

1.  **Sermons and Events (Markdown)**: Frequently updated items. Stored in `content/`.
2.  **Static Page Content (JSON)**: Fixed text on pages like Home, About, Visit, etc. Stored in `translations/`.
3.  **Church History (JSON)**: The timeline on the History page. Stored in `church-history-v4.json` (English) and `church-history-v4.zh.json` (Chinese) at the project root.

## 1. Managing Sermons and Events

Content is stored in the `content/` folder, organized by type and then by language:

*   `content/services/en/` - English sermons
*   `content/services/zh/` - Chinese sermons
*   `content/events/en/` - English events
*   `content/events/zh/` - Chinese events

### Getting Started

1.  **Find the template files** in `content/templates/` (`service-template.md`, `event-template.md`)
2.  **Copy a template** to the appropriate folder (e.g., `content/events/en/`)
3.  **Rename the file** to something descriptive (use lowercase, hyphens for spaces)
4.  **Edit the content** following the examples below
5.  **Create the translation:** Copy your new file to the corresponding `zh` folder and translate the content.

### File Naming
*   Use lowercase letters
*   Use hyphens (-) instead of spaces
*   The filename becomes part of the web address, e.g. `content/events/en/easter-service.md` → `/en/events/easter-service/`
*   **Important:** To link English and Chinese versions of the same item, **they must have the exact same filename**.
    *   Example: `content/events/en/easter-service.md` AND `content/events/zh/easter-service.md`

### Adding a Sermon
1.  Copy `content/templates/service-template.md` to `content/services/en/`
2.  Rename it (e.g., `17May26.md`, matching the existing files)
3.  Edit the frontmatter (the section between `---` at the top):
    ```markdown
    ---
    title: "The One Thing God Values Most in Your Life"
    date: "2026-05-17"
    speaker: "Rev Timothy Hoon"
    series: ""
    videoUrl: "https://www.youtube.com/watch?v=..."
    audioUrl: ""
    notesUrl: ""
    ---
    ```
4.  Copy the file to `content/services/zh/` with the same name and translate the title.

**Note:** The sermon page shows the title, series, speaker, date, the embedded YouTube video (from `videoUrl`), and a link to the notes (`notesUrl`). The text written below the frontmatter and the `audioUrl` field are **not currently shown** on the site.

### Adding an Event
1.  Copy `content/templates/event-template.md` to `content/events/en/`
2.  Rename it (e.g., `community-outreach.md`)
3.  Edit the frontmatter:
    ```markdown
    ---
    title: "Event Name"
    date: "2026-09-19"
    time: "6:30 PM - 9:30 PM"
    location: "Main Sanctuary"
    recurring: false
    image: "/images/community-outreach.jpeg"
    ---
    ```
    *   `recurring` (optional): set to `true` to show a "recurring" badge.
    *   `image` (optional): put the picture in `public/images/` and reference it as `/images/<filename>`.
4.  Write your event description below the frontmatter.
5.  To add Chinese: Copy this file to `content/events/zh/community-outreach.md` and translate the title, location, and description.

### Embedding Videos and Instagram Posts
In an event description, put a link on its own line like this:

```markdown
{{ embed: https://www.youtube.com/watch?v=VIDEO_ID }}
{{ embed: https://www.instagram.com/p/POST_ID/ }}
```

YouTube links become an embedded player and Instagram links become an embedded post. Any other link becomes a plain link.

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

## 3. Managing the Church History Page

The History page is built from two files:

*   `church-history-v4.json` - English (`/en/history/`)
*   `church-history-v4.zh.json` - Chinese (`/zh/history/`)

Edit the text values the same way as the translation files. Keep the keys and structure unchanged, and keep both files in step: a corrected name or date usually needs changing in both.

## Markdown Basics

*   **Headers**: `# Header 1`, `## Header 2`
*   **Bold**: `**text**`
*   **Italic**: `*text*`
*   **Lists**: `- Item` or `1. Item`
*   **Links**: `[Text](URL)`
*   **Tables** are also supported.

## Help & Troubleshooting

*   **Content not appearing?** Check that the file is in the correct language folder (`en` or `zh`) and ends in `.md`. The site must be rebuilt and re-uploaded (see [DEPLOYMENT.md](DEPLOYMENT.md)) before changes appear.
*   **Item only shows in one language?** Each language only lists the files in its own folder. If the `zh` file is missing, the item does not appear in Chinese, and its Chinese address shows "page not found". Create both files for full coverage.
*   **Wrong order?** Sermons are sorted newest first and events oldest first, using the `date` field. Use the `YYYY-MM-DD` format.
