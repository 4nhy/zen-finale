# Artifact manifest — bymonolog.com clone

**Target:** https://bymonolog.com/
**Local dev:** http://localhost:3000
**Scope built:** SiteNav, Hero, ProblemsSection (stats + narrative + client tiles),
GapSection (WE CLOSE / THAT GAP), WorksSection (5 case-study cards with autoplay
videos), CtaSection, SiteFooter
**Scope skipped (per user):** Testimonials block, Services list, 3-step Process,
FAQ accordion

## Simplifications vs. the source

- Motion stack replaced. Source uses GSAP 3 (Core + ScrollTrigger + SplitText +
  CustomEase + Flip). Clone uses Lenis for smooth scroll plus a small
  `useReveal` IntersectionObserver + pure CSS transitions. Visual timing is
  close on section entrance reveals; SplitText per-char reveals and Flip
  layout transitions are not reproduced.
- Nav bar: fixed transparent-to-blur on scroll only (no mobile menu popup, no
  custom cursor, no MENU/CONTACT bottom bar).
- Hero: intro paragraph is paraphrased; giant MONOLOG wordmark uses a plain
  bordered rectangle in place of the source's bespoke swapped glyph.
- Problems section: 8 client tiles use original abstract `ClientMark` SVG
  geometry (not source's brand marks). Brand names appear as text only.
- Gap section: 5 fanned image thumbnails animate in on scroll. Images are
  loaded directly from the source Webflow CDN by URL — nothing is committed
  to this repo. Do not deploy publicly.
- Works section: 5 cards autoplay their source-CDN webm videos on
  intersection. Same hotlinking caveat.
- CTA section: uses paraphrased body copy; short headline fragment retained.
- Footer: real-time Hanoi clock rebuilt from scratch with `Intl.DateTimeFormat`.

## Content copy

All longer marketing paragraphs on the source site are rewritten. Only short
identifiers (nav labels, brand names, headline fragments like "WE CLOSE THAT
GAP", "LET'S BUILD") are used as-is.

## Fonts

Three commercially-licensed families (Khteka, Suisse Mono, Animo) are loaded
via `@font-face` pointing at the same Webflow CDN URLs the source site uses.
No font binaries are stored in this repo. Before any public deploy, swap to
open-source proxies (Space Grotesk / JetBrains Mono / Bricolage Grotesque
respectively) or licence the fonts directly.

## Files added

```
src/app/layout.tsx                                          # Metadata + LenisScroll mount
src/app/globals.css                                         # Monolog design tokens + font faces
src/app/page.tsx                                            # Section composition
next.config.ts                                              # remotePatterns for source CDNs

src/components/sites/bymonolog-com-fdc3e3a7/shared/
  LenisScroll.tsx                                           # Lenis 1.x mount
  useReveal.ts                                              # IO reveal + counter hooks
  icons.tsx                                                 # Original OrbIcon, ArrowIcons, ClientMark

src/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/
  SiteNav.tsx
  Hero.tsx
  ProblemsSection.tsx
  GapSection.tsx
  WorksSection.tsx
  CtaSection.tsx
  SiteFooter.tsx

docs/research/bymonolog-com-fdc3e3a7/root-8a5edab2/
  PAGE_TOPOLOGY.md
  BEHAVIORS.md
  TOKENS.md
  ARTIFACT_MANIFEST.md   (this file)
```

## Known gaps to iterate on

- **Text reveal on hero** currently animates the *whole line*, not per character.
  A full SplitText-style per-glyph reveal would need `@splitting/js` or manual
  span splitting, plus stagger delays.
- **GapSection layout on mobile** stacks the thumbnails without a re-flow —
  the ±280px translate keeps the thumbnails clipped inside their container.
  Needs a viewport-scaled offset (e.g. `min(280px, 28vw)`).
- **WorksSection cards** are 16:9 flat blocks; the source's per-card
  scroll-parallax and hover-on-cursor states aren't reproduced.
- **Nav** has no hamburger for narrow viewports.
- **CTA background** uses a single hotlinked photo; source uses a large hero
  crop with tighter focal point control.

## How to iterate

1. `cd C:\Users\arnav\Downloads\bymonolog-clone && npm run dev`
2. Open http://localhost:3000, tweak component files under
   `src/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/`.
3. Tokens live in `src/app/globals.css` under `:root { --mono-* }`.
4. Add new sections by dropping a new component in the same folder and
   importing it in `src/app/page.tsx`.
