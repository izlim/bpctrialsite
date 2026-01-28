# Security Review Findings

**Date:** 2026-01-29
**Status:** Low Risk

## Summary
The project is a **Next.js Static Site (Export)**. This architecture inherently offers a strong security posture because there is no running Node.js server to exploit, and no database logic directly exposed to the internet.

## Detailed Findings

### 1. Attack Surface (Low)
*   **Architecture**: The site uses `output: 'export'`, resulting in pure HTML/CSS/JS files.
*   **Implication**: Common attacks like SQL Injection or Server-Side Remote Code Execution (RCE) are not possible in this environment.

### 2. Content Rendering (Safe)
*   **Observation**: `dangerouslySetInnerHTML` is used in dynamic pages (e.g., `app/sermons/[slug]/page.tsx`).
*   **Analysis**: This is used to render Markdown content. The content is processed in `lib/markdown.ts` using `remark-html`, which sanitizes HTML output by default. The source content comes from local files (`content/`), which is a trusted source.
*   **Verdict**: **Safe**, provided that the internal content files are managed by trusted individuals.

### 3. Input Handling (Safe)
*   **Observation**: `ContactForm.tsx` collects user input.
*   **Analysis**: Currently, the form only logs data to the browser console. There is no backend endpoint being hit, so there is no risk of injection attacks or data processing vulnerabilities at this stage.
*   **Recommendation**: When a backend (e.g., EmailJS, serverless function) is connected, ensure that **server-side validation** is implemented to sanitize inputs.

### 4. Dependencies
*   **Observation**: Standard Next.js ecosystem (`next`, `react`, `remark`).
*   **Recommendation**: Regularly run `npm audit` to ensure these packages remain up to date.

## Recommendations

### 1. Add Security Headers
Even for static sites, it is best practice to include security headers to protect users from XSS and Clickjacking.

Since you are using a static export, these should be configured in your hosting provider configuration (e.g., `_headers` for Netlify or `vercel.json` for Vercel).

**Recommended Headers:**
```text
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;
```

### 2. Secure Future API Endpoints
If you add API routes in `app/api/` in the future (requiring a running server), strictly validate all incoming data using a library like `zod` to prevent malformed data from causing issues.
