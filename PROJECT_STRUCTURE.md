# Project Structure Guide

This specific guide is designed to help you understand "what lives where" in this website project.

## Top-Level Folders

| Folder | Description |
| :--- | :--- |
| **`app/`** | The **Pages** of your website. This is where the routing happens (e.g., `/about`, `/contact`). |
| **`components/`** | **Reusable Building Blocks**. Content pieces that appear on multiple pages, like the Header, Footer, or Event Cards. |
| **`content/`** | **Dynamic Content**. This is where you write your Sermons, Events, and Resources using Markdown files. |
| **`translations/`** | **Text & Language**. JSON files containing all the static text for the website in different languages (English, Chinese). |
| **`public/`** | **Static Assets**. Images, fonts, and files that are publicly accessible (like `favicon.ico`). |
| **`lib/`** | **Helper Code**. Utility functions and logic that run behind the scenes (e.g., date formatting). |

## Important Files

| File | Description |
| :--- | :--- |
| `tailwind.config.js` | **Design Settings**. Where you define your color palette, fonts, and other design tokens. |
| `package.json` | **Project Manifesto**. Lists the libraries the project uses and the commands to run it. |
| `CONTENT_GUIDE.md` | **How-To Guide** for adding events, sermons, and resources. |
| `CUSTOMIZATION.md` | **How-To Guide** for changing colors, icons, and text. |
| `I18N_GUIDE.md` | **Technical Guide** for adding new languages and pages. |

## Which Folder Should I Open?

*   **"I want to change the text on the 'About Us' page."**
    *   Go to `translations/en.json` (or `zh.json`).
*   **"I want to add a new event."**
    *   Go to `content/events/`.
*   **"I want to change the logo."**
    *   You might need to look at `components/Header.tsx` or `public/`.
*   **"I want to change the primary purple color."**
    *   Go to `tailwind.config.js`.
*   **"I want to change the links in the footer."**
    *   Go to `components/Footer.tsx`.
