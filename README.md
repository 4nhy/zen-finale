# Zen Consulting — site

Marketing + portfolio site for Zen Consulting. Next.js 16 App Router, deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Opens on http://localhost:3000.

## What's in here

- `src/app/` — routes (home, /portfolio, /portfolio/[kind]/[slug], /contact, /partners, /terms, /privacy, /api/*)
- `src/components/sites/…/root-8a5edab2/` — page sections (Hero, ProblemsSection, GapSection, AboutSection, CtaSection, SiteNav, SiteFooter, etc.)
- `src/components/sites/…/shared/` — reusable pieces (LenisScroll, AutoRotator, RouteStatus, Threads WebGL background, useReveal hooks, portfolioData)
- `public/zen-app/` — the Zen demo SPA built standalone (HashRouter, base `/zen-app/`). Every software portfolio detail page embeds `/zen-app/index.html#/demo/{id}` so all 14 demos run inside this deploy.
- `public/websites/` — 6 static website portfolio pieces served directly.
- `public/portfolio/` — screenshots used on portfolio cards.
- `public/gap-images/` — screenshots cycled by GapSection on the home page.

## Refreshing the baked-in Zen demos

The `public/zen-app/` folder is the built output of the separate Zen React app. To refresh it after changes to that app:

```bash
# in the Zen source repo
VITE_STANDALONE=1 npm run build

# then copy the fresh build into this repo
cp -r Zen/dist/* zen-consulting-site/public/zen-app/
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run check` | lint + typecheck + build |
