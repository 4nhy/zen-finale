# bymonolog.com / — Behavior Bible

## Motion stack

- **Lenis 1.x** smooth scroll (`<html class="lenis lenis-smooth">`). All parallax/scroll timelines assume rAF-driven scroll.
- **GSAP 3.15** with ScrollTrigger, SplitText (per-line/char reveal), CustomEase, Flip.
- Primary easing var `--animation-primary: cubic-bezier(0.83, 0, 0.17, 1)` — quart-in-out-ish.
- Secondary `cubic-bezier(0.31,0.75,0.22,1)` — expo-out with slight overshoot.
- `--duration-fast: 0.45s`.

## Global behaviors

- **Grain overlay** — fixed full-screen `.g_grain_overlay` div with a `download.png` bg-image (subtle noise); mix-blend soft-light–like.
- **Nav on scroll** — logo stays; menu group condenses; background gains a light backdrop-blur once you leave the hero.
- **Custom cursor** — the site swaps in a bespoke cursor over interactive elements (not reproduced; safe to skip).

## Section-level behaviors (in-scope only)

### Hero (`hero_home_wrap`)

- On load: SplitText reveals the paragraph line-by-line (each line clip-mask up from `translateY(100%)`).
- The wordmark "MONOLOG" at the bottom is a **static giant heading** (font: Khteka Bold, letter-spacing tight). One glyph in "MO_OLOG" is swapped for a bordered rectangle placeholder, another for a stylised eye/orb; both are inline SVG glyphs.
- The overhead orb icon rotates slowly (`animation: spin 30s linear infinite` on inline SVG).
- Later scroll counter increment: "01 / 02" or "01 / 03" counter in top-left — a **fake scroll indicator** tied to ScrollTrigger sections.

### Problems section (`problems_home_wrap`)

- Two animated stat rows: `15+` and `30+`, each with descriptor block. Counter animation drives from 0 → target when block enters viewport (IntersectionObserver, 500ms, ease-out-quart).
- Below stats: the large narrative headline (H2, `--font-size--h2` = 3rem→4.75rem clamp). Text reveal is SplitText line-mask on scroll into view.
- Below headline: 8 client-logo tiles (SVG) in a responsive grid. Each is a bordered pill with the client's mark; slight lift + border colour change on hover.

### Gap section (`gap_home_wrap`)

- "WE CLOSE THAT GAP" — H2 rendered as two lines separated by 5 stacked absolute-positioned image thumbnails (`gap_home_cover > gap_home_image`). Thumbnails are 5 client-work photos overlapping / fanning in a diagonal.
- On scroll into view: photos fan out from a stacked center; parallax while section is in view.

### Works section (`works_home_wrap`)

- A vertical stack of five `works_home_item` cards.
- Each card: full-bleed video (autoplay+loop+muted) OR poster image; bottom-left case name + brand line; bottom-right metric badge (percentage or dollar value).
- On scroll into item: video begins playing (its `autoplay` is false in DOM; IntersectionObserver toggles `.play()`).
- Hover on card: overlay lightens slightly; case link labelled with `SS /05`, `/05`… numeric.
- After list: "View All Stories (→)" CTA.

### CTA + Footer (`cta_home_wrap`, `footer`)

- Full-bleed portrait of Huy behind big split H2 "LET'S BUILD / AN EXPERIENCE / THAT MOVES → PEOPLE".
- Below: "Tell us your story" pill button (invert on hover: text becomes bg, bg becomes text).
- Awards / trust strip.
- Footer: 6-column link grid + studio details + Hanoi live clock (updates every second) + "Booking projects for Q3 '2026" pill.

## Responsive breakpoints observed

- 1440 → 768: 12-col collapses to 6-col; heading clamps kick in; nav condenses to logo + hamburger.
- 768 → 390: single column; hero orb centres; giant MONOLOG wordmark rescales to viewport width; problem tiles stack.
