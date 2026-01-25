# Content Management Guide

This guide will help non-technical users add content to the church website.

## Overview

The website uses Markdown files to store content. Markdown is a simple text format that's easy to learn. Content is stored in the `content/` folder, organized by type:
- `content/sermons/` - Sermon messages
- `content/events/` - Church events
- `content/resources/` - Devotions and other resources

## Getting Started

1. **Find the template files** in `content/templates/`
2. **Copy a template** to the appropriate folder
3. **Rename the file** to something descriptive (use lowercase, hyphens for spaces)
4. **Edit the content** following the examples below

## File Naming

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names
- Examples:
  - `sunday-service-regular.md`
  - `prayer-meeting.md`
  - `sermon-on-faith.md`

## Adding a Sermon

1. Copy `content/templates/sermon-template.md` to `content/sermons/`
2. Rename it (e.g., `sermon-on-love.md`)
3. Edit the frontmatter (the section between `---` at the top):
   ```markdown
   ---
   title: "Your Sermon Title"
   date: "2024-02-15"  # Use YYYY-MM-DD format
   speaker: "Pastor Name"
   series: "Series Name"  # Optional
   videoUrl: "https://youtube.com/..."  # Optional
   audioUrl: "https://..."  # Optional
   ---
   ```
4. Write your sermon content below the frontmatter using Markdown

## Adding an Event

1. Copy `content/templates/event-template.md` to `content/events/`
2. Rename it (e.g., `community-outreach.md`)
3. Edit the frontmatter:
   ```markdown
   ---
   title: "Event Name"
   date: "2024-02-20"
   time: "7:00 PM"  # Optional
   location: "Main Sanctuary"  # Optional
   recurring: false  # true or false
   ---
   ```
4. Write your event description below

## Adding a Resource

1. Copy `content/templates/resource-template.md` to `content/resources/`
2. Rename it (e.g., `daily-devotion-1.md`)
3. Edit the frontmatter:
   ```markdown
   ---
   title: "Resource Title"
   date: "2024-02-15"
   type: "devotion"  # Optional: devotion, study, article, etc.
   ---
   ```
4. Write your content below

## Markdown Basics

Markdown is simple! Here are the most common formatting options:

### Headers
```markdown
# Large Header
## Medium Header
### Small Header
```

### Bold and Italic
```markdown
**bold text**
*italic text*
```

### Lists
```markdown
- Item 1
- Item 2
- Item 3

1. Numbered item
2. Another item
```

### Links
```markdown
[Link text](https://example.com)
```

### Line Breaks
Press Enter twice to create a new paragraph.

## Tips

1. **Always include the frontmatter** - The section between `---` at the top is required
2. **Use proper date format** - Always use YYYY-MM-DD (e.g., 2024-02-15)
3. **Save files with .md extension** - All content files must end with `.md`
4. **Test your content** - After adding content, check the website to make sure it looks right
5. **Keep it simple** - Markdown is meant to be simple. Don't worry about complex formatting

## Common Issues

**Problem:** Content doesn't appear on the website
- **Solution:** Make sure the file is in the correct folder and has a `.md` extension

**Problem:** Date format error
- **Solution:** Use YYYY-MM-DD format (e.g., 2024-02-15, not 02/15/2024)

**Problem:** Special characters causing issues
- **Solution:** Avoid special characters in file names. Use only letters, numbers, and hyphens

## Need Help?

If you have questions or need help adding content, contact the website administrator.

## Examples

See the sample files in:
- `content/sermons/sample-sermon-1.md`
- `content/events/sunday-service-regular.md`
- `content/resources/daily-devotion-1.md`

These are good examples to follow when creating your own content.
