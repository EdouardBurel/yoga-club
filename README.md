# Yoga Club — React showcase site

A single-page yoga club website built with **React + Vite**, matching the
provided mockup (navbar, hero carousel, About Club, 8-practice grid, feature
boxes, picture carousel, CTA banner, contact form, testimonials, footer).

## Run locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

## Editing content

- **Text & images:** everything is in `src/data.js`. Replace the placeholder
  image URLs with your own (drop photos in `/public/images/` and use a path
  like `/images/hatha.jpg`).
- **Colors & fonts:** the design tokens live at the top of `src/index.css`
  (`--yellow`, `--gold`, `--ink`, fonts). Change them once, the whole site
  updates.
- **Sections:** each part of the page is its own component in
  `src/components/` with a matching `.css` file next to it.

## Build

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build locally
```

## Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages   # already in package.json
npm run deploy                    # builds and pushes /dist to gh-pages branch
```

Then in your repo: **Settings → Pages → Branch: `gh-pages` / root → Save**.
Your site appears at `https://<your-username>.github.io/<repo-name>/`.

## Custom domain (Namecheap)

1. Buy a domain on Namecheap.
2. In Namecheap → **Domain List → Manage → Advanced DNS**, add the GitHub
   Pages records (4 A records + a CNAME) — see the chat guide for exact values.
3. In your repo → **Settings → Pages → Custom domain**, enter your domain and
   enable **Enforce HTTPS**.
