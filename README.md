# AQARATI website

Brand / explanation website for AQARATI (Next.js 15 App Router, TypeScript, plain CSS tokens). It explains the product; the Flutter app (`../aqarati-app`) does the work. No listings, search, maps or dashboards live here.

## Run

```bash
npm install
npm run dev      # http://localhost:3100
npm run build && npm start
```

## Where things live

| Need to change | File |
|---|---|
| Brand name, app URL, email, phone, socials, fee rate, legal date | `src/config/site.ts` (or `NEXT_PUBLIC_*` env vars) |
| Copy, per topic, EN + AR side by side | `src/content/*.ts` |
| Legal drafts (privacy, cookies, terms) | `src/content/legal.ts` |
| Design tokens (colour, type, spacing, dark mode) | top of `src/app/globals.css` |
| Illustrations | `src/components/Illustrations.tsx` |
| Images | `public/images/*` (webp) |

## Locales

English is served at `/`, Arabic at `/ar` (RTL). `src/middleware.ts` rewrites `/about` to the `[lang]` route and redirects `/en/*` to `/*`.

## Environment

```
NEXT_PUBLIC_SITE_URL          canonical origin, used in metadata and sitemap
NEXT_PUBLIC_APP_URL           target of every "Open Aqarati" button (falls back to /contact while empty)
NEXT_PUBLIC_APP_STORE_URL     optional
NEXT_PUBLIC_GOOGLE_PLAY_URL   optional
NEXT_PUBLIC_SUPPORT_EMAIL     shown on Contact when set
NEXT_PUBLIC_CONTACT_PHONE     shown on Contact when set
CONTACT_WEBHOOK_URL           server-only; contact form POSTs here. Unset = form reports failure honestly
```

## Open items before launch

- Legal review of `legal.ts` (sections flagged `review: true` need company facts).
- Native Arabic copy review.
- Real `appUrl`, contact details and socials.
- Photography: current images are the AI-generated app assets; replace any you do not hold rights to.
- App screens are renders of the Figma exports in `Desktop/figma aqarati`; swap for device screenshots when available.

## Motion

All motion lives in `src/app/motion.css` (tokens at the top: `--motion-*`, `--ease-premium`, `--ease-soft`) plus small client components: `Reveal`, `PageTransition`, `HorizontalCarousel`, `PhoneShowcase`, `PhotoRow` (lightbox), `AnimatedMotif`. No animation library. Reduced motion shows everything immediately.

Dark mode was removed on 2026-10-01 (light theme only).
Founder block content: `src/content/founder.ts` (name and role only; portrait and bio empty until supplied).
