# Deployment Guide

This website is configured as a static site, which means it can be deployed to any web server that serves static files. Here are several deployment options:

## Building the Site

First, build the static site:

```bash
npm install
npm run build
```

This creates an `out/` directory containing all the static files ready to upload to your web server.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the simplest deployment:

1. **Install Vercel CLI** (optional, or use web interface):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live at a `*.vercel.app` URL
   - You can add a custom domain later

3. **Or use GitHub integration**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically deploy on every push

**Pros:** Free tier, automatic HTTPS, custom domains, automatic deployments

---

### Option 2: Netlify

Similar to Vercel, very easy to use:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=out
   ```

3. **Or use drag-and-drop**:
   - Build the site: `npm run build`
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `out/` folder
   - Your site is live!

**Pros:** Free tier, easy deployment, custom domains

---

### Option 3: GitHub Pages

Free hosting through GitHub:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `gh-pages`)
   - Folder: `/out` (you'll need to configure this)

4. **Or use GitHub Actions** (automated):
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
     steps:
       - uses: actions/checkout@v3
       - uses: actions/setup-node@v3
         with:
           node-version: '18'
       - run: npm install
       - run: npm run build
       - uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./out
   ```

**Pros:** Free, integrated with GitHub, custom domain support

---

### Option 4: Traditional Web Server (cPanel, FTP, etc.)

For traditional web hosting (shared hosting, VPS, etc.):

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - The `out/` directory contains all files
   - Upload everything inside `out/` to your web server's public directory
   - Usually: `public_html/`, `www/`, or `htdocs/`

3. **Configure your server**:
   - Ensure your server supports static file serving
   - Point your domain to the uploaded files
   - The site should work immediately

**File structure on server:**
```
public_html/
  ├── index.html
  ├── about/
  ├── sermons/
  ├── _next/
  └── ... (all other files from out/)
```

**Note:** Make sure your server is configured to:
- Serve `index.html` for directory requests
- Handle client-side routing (may need `.htaccess` for Apache)

---

### Option 5: AWS S3 + CloudFront

For scalable, professional hosting:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Configure S3 bucket**:
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `404.html`

4. **Set up CloudFront** (optional, for CDN):
   - Create CloudFront distribution
   - Point to S3 bucket
   - Use for faster global delivery

**Pros:** Scalable, professional, CDN support

---

## Important Configuration

### Custom Domain

For any hosting option, you can add a custom domain:

1. Point your domain's DNS to your hosting provider
2. Configure the custom domain in your hosting dashboard
3. Update `next.config.js` if needed (for absolute URLs)

### Environment Variables

If you need environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Then rebuild: `npm run build`

### Base Path (if deploying to subdirectory)

If deploying to a subdirectory (e.g., `yoursite.com/church/`), update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/church',
  images: {
    unoptimized: true
  }
}
```

---

## Quick Deploy Commands

**Vercel:**
```bash
npm i -g vercel && vercel
```

**Netlify:**
```bash
npm run build && netlify deploy --prod --dir=out
```

**Traditional Server:**
```bash
npm run build && scp -r out/* user@server:/path/to/public_html/
```

---

## Troubleshooting

**404 errors on page refresh:**
- This is normal for client-side routing
- Configure your server to redirect all routes to `index.html`
- For Apache, add `.htaccess` (see below)

**Images not loading:**
- Make sure all files from `out/` are uploaded
- Check that paths are relative (they should be by default)

**Build errors:**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (18+ recommended)

---

## Apache .htaccess (for traditional servers)

Create `.htaccess` in your `out/` directory before building, or add it after:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This ensures client-side routing works correctly.

---

## Recommended: Vercel or Netlify

For easiest deployment, I recommend **Vercel** or **Netlify**:
- Zero configuration needed
- Free tier available
- Automatic HTTPS
- Custom domains
- Automatic deployments from Git

Just connect your GitHub repository and you're done!
