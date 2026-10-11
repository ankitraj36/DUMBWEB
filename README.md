# DUMBWEB website

React + Vite + Tailwind CSS 3 + Framer Motion + Lucide. No backend required.

## Run locally
```bash
npm install
cp .env.example .env   # optional
npm run dev            # http://localhost:5173
npm run build && npm run preview
```

## Configure
| Variable | Purpose |
|---|---|
| `VITE_FORM_ENDPOINT` | Form endpoint, e.g. a [Formspree](https://formspree.io) URL `https://formspree.io/f/xxxx`. |
| `VITE_CONTACT_EMAIL` | Email shown on the site (default `hello@dumbweb.com` is a placeholder). |
| `VITE_WHATSAPP_NUMBER` | Optional. Shows a WhatsApp link when set. |

**Form behaviour:** with no endpoint the form runs in *demo mode*: it validates, then says clearly that nothing was sent. Success is shown only when the endpoint returns an OK response. Only a public form URL is used, never a secret.

## Deploy to Vercel
1. Push this folder to GitHub/GitLab.
2. In Vercel: **Add New > Project**, import the repo (framework preset: Vite, build `npm run build`, output `dist`).
3. Add the environment variables above, then deploy. `vercel.json` handles route rewrites.

## Before launch
- Replace `https://www.dumbweb.com` in `index.html`, `public/sitemap.xml`, `public/robots.txt`; add an `og:image` (PNG, 1200x630).
- Have `Privacy` and `Terms` (`src/pages.jsx`) reviewed by a legal professional.
- Replace demo projects: edit `projects` in `src/data.js` (fictional concepts; mockups render from that data).

## Structure
`src/components` (Layout, Mockup, LeadForm, ui) · `src/sections` (page sections) · `src/pages.jsx` (routes) · `src/data.js` (services, projects, FAQ) · `src/config.js`
