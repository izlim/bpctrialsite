# Security Review Findings

**Date:** 2026-01-29 (findings 2 and 3 updated 2026-11-09 to match the current code)
**Status:** Low Risk

## Summary
The project is a **Next.js Static Site (Export)**. This architecture inherently offers a strong security posture because there is no running Node.js server to exploit, and no database logic directly exposed to the internet.

## Detailed Findings

### 1. Attack Surface (Low)
*   **Architecture**: The site uses `output: 'export'`, resulting in pure HTML/CSS/JS files.
*   **Implication**: Common attacks like SQL Injection or Server-Side Remote Code Execution (RCE) are not possible in this environment.

### 2. Content Rendering (Safe)
*   **Observation**: `dangerouslySetInnerHTML` is used to render event Markdown in `app/[locale]/events/[slug]/page.tsx`. It is also used for small inline scripts in `app/(root)/layout.tsx` and `app/[locale]/layout.tsx`.
*   **Analysis**: Markdown is processed in `lib/markdown.ts` using `remark-html` with **`sanitize: false`**, so raw HTML in a Markdown file is output as-is. This is needed for the `{{ embed: <url> }}` YouTube and Instagram embeds. The embed URL is inserted into HTML attributes without escaping. The source content comes from local files (`content/`), which is a trusted source.
*   **Verdict**: **Safe**, provided that the content files are only edited by trusted individuals. Anyone who can edit `content/` can add scripts to the site.

### 3. Input Handling (Safe)
*   **Observation**: `ContactForm.tsx` collects user input.
*   **Analysis**: The form builds a `mailto:hello@bethanypc.org.sg` link and opens the visitor's own email app. No data is sent to a server, so there is no risk of injection attacks or data processing vulnerabilities at this stage.
*   **Recommendation**: When a backend (e.g., EmailJS, serverless function) is connected, ensure that **server-side validation** is implemented to sanitize inputs.

### 4. Dependencies
*   **Observation**: Standard Next.js ecosystem (`next`, `react`, `remark`).
*   **Recommendation**: Regularly run `npm audit` to ensure these packages remain up to date.
*   **Status (2026-11-09)**: `npm audit fix` applied. The remaining `next` and `postcss` advisories need Next.js 16 and affect server features or build-time tooling only, not the static export.

## Recommendations

### 1. Add Security Headers
Even for static sites, it is best practice to include security headers to protect users from XSS and Clickjacking.

Since you are using a static export, these should be configured in your hosting provider configuration. The site is hosted on cPanel (Apache), so add them to `.htaccess` with `Header set` (requires `mod_headers`). `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN` and `Referrer-Policy` are now set there (2026-11-09). A Content-Security-Policy is not set yet.

**Recommended Headers:**
```text
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;
```

Note: this example CSP would block the YouTube and Instagram embeds. Allow `frame-src https://www.youtube.com https://www.instagram.com` and Instagram's embed script if they are used.

### 2. Secure Future API Endpoints
If you add API routes in `app/api/` in the future (requiring a running server), strictly validate all incoming data using a library like `zod` to prevent malformed data from causing issues.
