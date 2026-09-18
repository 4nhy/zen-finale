# Design Tokens — bymonolog.com

## Colors (source palette)

| Token | Hex | Role |
|---|---|---|
| beige-100 | `#e8e8e3` | Primary light text on dark bg (default site body color) |
| beige-100-2 | `#fafaf9` | Whitest highlight |
| beige-200 | `#ddddd5` | Subtle border on dark |
| beige-300 | `#d1d1c7` | Light-section background (html bg) |
| beige-400 | `#bfbfb1` | Warm mid-beige, primary button bg |
| beige-600 | `#8c8c73` | Olive accent (heading accents, secondary text) |
| black-50 | `#938f8a` | Faded dark on light |
| black-100 | `#6b645c` | Muted body on light |
| black-200 | `#524d47` | Border on light |
| black-300 | `#393632` | Deep neutral |
| black-400 | `#080807` | Body dark background |
| card-bg | `#181715` | Elevated dark card bg |

## Fonts (proprietary; download locally only)

| Family | Weights | Source |
|---|---|---|
| Khteka | 500 medium, 700 bold | primary headings + body |
| Suisse Mono | 400 | small labels, meta, counters |
| Animo | 400 | large display serif (`MONOLOG` wordmark, feature headlines) |

## Fluid type scale (clamp, `20rem` → `100rem` viewport)

| Token | Min | Max |
|---|---|---|
| display | 5rem | 9.25rem |
| display-small | 4rem | 8rem |
| h1 | 5rem | 6rem |
| h2 | 3rem | 4.75rem |
| h3 | 2rem | 3.5rem |
| h4 | 1.5rem | 3rem |
| h5 | 1.375rem | 1.5rem |
| h6 | 1rem | 1.125rem |
| text-large | 1.125rem | 1.25rem |
| text-main | 1rem | 1.125rem |
| text-small | 0.875rem | 1rem |
| text-xsmall | 0.65rem | 0.75rem |
| text-micro | 0.6rem | 0.65rem |

## Spacing scale

| Token | Min | Max |
|---|---|---|
| space-1 | 0.375rem | 0.5rem |
| space-2 | 0.625rem | 0.75rem |
| space-3 | 0.875rem | 1rem |
| space-4 | 1.25rem | 1.5rem |
| space-5 | 1.75rem | 2rem |
| space-6 | 2rem | 2.5rem |
| space-7 | 2.25rem | 3rem |
| space-8 | 2.5rem | 4rem |
| section-space-small | 3rem | 5rem |
| section-space-main | 4rem | 7rem |
| section-space-large | 5.5rem | 10rem |
| section-space-page-top | 7rem | 14rem |

## Grid

- 12 columns
- gutter `--site--gutter: 1rem`
- site margin `clamp(0.75rem, …, 1.75rem)`
- viewport-max 100rem = 1600px
- viewport-min 20rem = 320px

## Radii & border

- radius-small `0.15rem`
- radius-medium `0.35rem`
- radius-main `1rem`
- radius-round `100vw`
- border-width-main `0.094rem` (≈ 1.5px)

## Easings

- primary `cubic-bezier(0.83, 0, 0.17, 1)`
- secondary `cubic-bezier(0.31, 0.75, 0.22, 1)`
- expo-out `cubic-bezier(0.2, 1, 0.36, 1)`
- duration-fast `0.45s`
