# ToolHub

[ToolHub](https://toolhub.axtrivc.com) is a collection of 169 free online tools that run entirely in your browser — finance and health calculators, unit converters, and developer, text, and web-design utilities. No sign-up, and nothing you type ever leaves your device.

## Features

- **169 tools** across 11 categories
- **Four languages** — English, 中文, Español, Deutsch, switchable client-side
- **Installable PWA** — service-worker caching for fast repeat visits
- **Privacy-friendly** — all calculations run client-side; analytics are cookie-free and aggregate; ads and GA4 load only after consent
- **Command palette** — press <kbd>Ctrl/Cmd</kbd> + <kbd>K</kbd> to fuzzy-search every tool
- **Dark mode**, responsive layout, keyboard-accessible dialogs, reduced-motion support

## Categories

| Category | Tools |
|---|---|
| Developer Tools | 37 |
| Finance Calculators | 31 |
| Text Tools | 24 |
| Unit Converters | 18 |
| Math Calculators | 18 |
| Web Design Tools | 14 |
| Health Calculators | 9 |
| Time Calculators | 7 |
| Security Tools | 5 |
| Education Calculators | 3 |
| Business Tools | 3 |

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript, statically exported
- Tailwind CSS with semantic design tokens (light / dark themes)
- Framer Motion animations with reduced-motion fallbacks
- Cloudflare Pages hosting; a Pages Function backed by D1 powers the on-site visitor counter

## Getting Started

```bash
npm install
npm run dev      # develop at http://localhost:3000
npm run build    # static output in out/
```

### Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used by the sitemap, canonical tags, and Open Graph (default: `https://toolhub.axtrivc.com`) |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | AdSense publisher ID; ad slots render only when set |
| `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` | Cloudflare Web Analytics beacon token |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (loaded only after cookie consent) |

`NEXT_PUBLIC_*` values are inlined at build time, so rebuild after changing them.

## Adding a Tool

1. Create `app/tools/<slug>/page.tsx` — `app/tools/slug-generator/` works as a template
2. Register the tool in `lib/tools.ts` with `published: true`

The homepage, footer, sitemap, and search palette pick it up automatically.

## Project Structure

```
app/           # App Router pages: tools/, blog/, about / contact / privacy / terms, sitemap, robots
components/    # Shared UI: Header, Footer, SearchPalette, AdSlot, calculator form fields
lib/           # Tool registry and metadata, i18n dictionaries, SEO / JSON-LD helpers
functions/     # Cloudflare Pages Functions (visitor-stats API backed by D1)
public/        # Static assets and the service worker
```
