# How to Preview the Website

## Quick Start

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Version 20 recommended (the deployment workflows use Node 20)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to: http://localhost:3000 (you will be redirected to `/en/` or `/zh/`)
   - The site will automatically reload when you make changes

## Build for Production

To create a static version of the site:

```bash
npm run build
```

The static files will be in the `out/` directory. See [DEPLOYMENT.md](DEPLOYMENT.md) for how they are published.

## Pages Available

Every page exists in English (`/en/...`) and Chinese (`/zh/...`). The English versions:
- http://localhost:3000/en/ - Home page
- http://localhost:3000/en/about/ - About Us
- http://localhost:3000/en/history/ - Our History
- http://localhost:3000/en/visit/ - Service Times & Location
- http://localhost:3000/en/what-to-expect/ - What to Expect
- http://localhost:3000/en/services/ - Services (sermons)
- http://localhost:3000/en/events/ - Events
- http://localhost:3000/en/ministries/ - Ministries
- http://localhost:3000/en/contact/ - Contact

## Troubleshooting

**If npm is not found:**
- Make sure Node.js is installed and restart your terminal

**If port 3000 is in use:**
- The dev server will automatically use the next available port
- Check the terminal output for the actual URL

**If you see build errors:**
- Make sure all dependencies are installed: `npm install`
- Check that you're using Node.js 20
- Run `npx tsc --noEmit` and `npm run lint` to see type and lint errors
