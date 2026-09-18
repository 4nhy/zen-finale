# bymonolog.com / — Page Topology

Total document height at 1440×900 desktop: **15,597px**
Site framework: **Webflow** (author Huy Nguyen / MONOLOG Studio)
Motion stack: **GSAP 3.15** (Core + ScrollTrigger + SplitText + CustomEase + Flip) + **Lenis 1.x** smooth scroll

## Sections (in DOM order)

| # | Class prefix | Top (px) | Height | In scope | Notes |
|---|---|---|---|---|---|
| Nav | `nav_main_wrap` | fixed | ~64 | yes (light) | Fixed top nav, transparent → shrinks on scroll. Logo, MENU/hamburger, Start-a-project pill |
| 1 | `hero_home_wrap` | 0 | 900 | **yes** | Full-viewport hero: overhead orb icon, animated intro paragraph, giant "MONOLOG" wordmark bottom |
| 2 | `problems_home_wrap` | 900 | 1403 | **yes** | Two-part stats/logos section — 15+ / 30+ animated counters, giant narrative headline, 8 client-logo grid (VINAMILK, MOC CHAU, USYD, OH ARCH, SUPERSOLID, SLIK, MAMMOTH MURALS, BACKHOUSE), founder attribution |
| 3 | `gap_home_wrap` | 2303 | 1800 | **yes** | "WE CLOSE THAT GAP" — big split headline that reveals imagery + supporting paragraph |
| 4 | `works_home_wrap` | 4103 | 2731 | **yes** | Selected works vertical scroll list, each card = video/image + case-study copy + metric ("21%", "58%", "$100K+"…) |
| 5 | `services_home_wrap` | 6834 | 894 | skip | Services list (Strategy/Identity/Web…) — user-scoped out |
| 6 | `process_home_wrap` | 7728 | 1728 | skip | 3-step process with videos |
| 7 | `faq_home_wrap` | 9456 | 805 | skip | FAQ accordion |
| 8 | `cta_home_wrap` | 10261 | 1730 | **yes** | Big split "LET'S BUILD…" CTA over founder portrait |
| 9 | `footer_home_wrap` | ~11991 | ~3600 | **yes** | Nav links, studio details, ask-AI links, Hanoi clock, availability banner |

## Layout constants

- `--site--viewport-max`: 100 (rem) = 1600px max content width
- `--site--viewport-min`: 20 (rem) = 320px min
- 12-column grid: `--site--column-count: 12`; gutter `--site--gutter: 1rem`
- Side margin: `clamp(0.75rem, …, 1.75rem)` (wide viewport ⇒ 28px)
- All type sizes and spacings use `clamp(min, fluid, max)` scaling between viewport-min/max
