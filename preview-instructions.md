# How to Preview the Website

## Quick Start

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Version 18 or higher recommended

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to: http://localhost:3000
   - The site will automatically reload when you make changes

## Build for Production

To create a static version of the site:

```bash
npm run build
```

The static files will be in the `out/` directory, which can be deployed to any static hosting service.

## Pages Available

Once running, you can visit:
- http://localhost:3000 - Home page
- http://localhost:3000/about - About Us
- http://localhost:3000/visit - Service Times & Location
- http://localhost:3000/what-to-expect - What to Expect
- http://localhost:3000/beliefs - What We Believe
- http://localhost:3000/sermons - Sermons
- http://localhost:3000/events - Events
- http://localhost:3000/ministries - Ministries
- http://localhost:3000/resources - Resources
- http://localhost:3000/give - Give
- http://localhost:3000/contact - Contact

## Troubleshooting

**If npm is not found:**
- Make sure Node.js is installed
- Try using `npx` instead: `npx create-next-app@latest`

**If port 3000 is in use:**
- The dev server will automatically use the next available port
- Check the terminal output for the actual URL

**If you see build errors:**
- Make sure all dependencies are installed: `npm install`
- Check that you're using Node.js 18 or higher
