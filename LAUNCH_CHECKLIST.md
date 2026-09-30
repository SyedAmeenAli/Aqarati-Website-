# AQARATI website — launch checklist

Internal document. Not linked from the site. Design and motion are frozen; change only for a real defect.

Legend: `[x]` done and verified · `[ ]` open · **WAITING** needs a value or a decision from the client.

## A. Technical
- [x] Next.js 15.5 / React 19 / TypeScript 5.9 (keep TypeScript on v5; v7 breaks Next 15 path aliases).
- [x] `npm run build` passes; `npm start` serves the production build.
- [x] `src/middleware.ts` routing: `/x` -> `/en/x` internally, `/en/*` redirects to `/*`, `/ar/*` served as is.
- [x] Light theme only. No dark-mode CSS or theme switch.
- [x] No secrets in client code. `.env*` is ignored by git.
- [ ] Safari / iOS Safari not tested (QA ran on Windows with Chrome and Edge). Test on a real iPhone before launch.

## B. Content
- [x] No lorem ipsum, TODO, TBD, example.com or placeholder domains in `src/`.
- [x] No invented statistics, reviews, awards, partners, government claims or guarantees. Every "guarantee" / "government" mention is a negation.
- [x] Verification is split into Identity, Business and Property verification. No THEQA / KYC / Aadhaar / National ID wording.
- [x] Fee text reads from `site.serviceFeeRate` (2%). Described as an Aqarati service / convenience fee, never as a tax or government fee.
- [x] Founder: name "Talal", role "Founder, Aqarati", portrait. No surname, bio, social link or history.
- [ ] Company factual review: someone at Aqarati confirms every product statement matches the app (features, availability by city, broker scope, fee scope).
- [ ] Native Arabic review required (see C).

## C. Legal
- [x] Privacy, Cookies and Terms pages exist in English and Arabic and are reachable from the footer.
- [ ] **Legal review PENDING.** Privacy, Cookies, Terms. A qualified reviewer must approve wording, governing law, data-controller details and retention.
- [ ] **Native Arabic review REQUIRED** for all Arabic copy, especially legal pages.
- [ ] Company factual review (legal entity name, registered address, contact details to show in the legal pages).
- Internal review markers live in `src/content/legal.ts` (`review: true`). They are not rendered publicly.

## D. Images
- [x] `IMAGE_RIGHTS_AUDIT.md` lists all 48 assets with file, location, source and status.
- 13 assets APPROVED (unDraw illustrations under their licence, logo). 35 assets CLIENT REVIEW. 0 UNKNOWN.
- [ ] **Founder portrait `public/images/about/founder-talal.webp`: CLIENT REVIEW.** Needs the subject's explicit consent and confirmation of the image source. It is not claimed to be real or AI-generated.
- [ ] Client confirms ownership or licence for each CLIENT REVIEW asset. Replace files in place (same path) if any is rejected.
- Three assets are unused: `app-saved.webp`, `arch-facade.webp`, `design-nook.webp`.

## E. SEO
- [x] `NEXT_PUBLIC_SITE_URL = https://aqarati-website.vercel.app`.
- [x] Canonical, hreflang (en / ar / x-default), OpenGraph and Twitter metadata per page.
- [x] `sitemap.xml` (36 URLs), `robots.txt`.
- [ ] When a custom domain is attached, update `NEXT_PUBLIC_SITE_URL` in Vercel and redeploy. Nothing else needs editing.
- [ ] Add Search Console / Bing verification after the final domain is live.

## F. Accessibility
- [x] Skip link, visible focus, keyboard-operable menus, drawer, mega menu, carousel, lightbox and cookie dialog.
- [x] Escape closes drawer, mega menu and lightbox. Focus returns to the trigger.
- [x] 44px minimum targets (measured in QA).
- [x] Reduced motion: content visible immediately; parallax, line drawing, phone movement and page-transition movement are disabled.
- [x] RTL layout, counters and arrows tested in Arabic.
- [ ] Screen-reader pass (NVDA / VoiceOver) not done.

## G. Performance
- [x] Images are webp with explicit dimensions. Below-fold images lazy load.
- [x] Fonts via `next/font`. Motion uses `transform` and `opacity` only.
- [ ] Run Lighthouse on the final domain and record results.

## H. Deployment
- [x] GitHub: `SyedAmeenAli/Aqarati-Website-`, branch `main`. Pushes to `main` deploy to Vercel production.
- [x] Production: https://aqarati-website.vercel.app
- [ ] Custom domain (optional): add in Vercel, then update `NEXT_PUBLIC_SITE_URL`.

## I. App integration — **WAITING**
- `NEXT_PUBLIC_APP_URL` is **unset**. "Open Aqarati" uses the honest fallback.
- Optional: `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_GOOGLE_PLAY_URL`. Also unset. Do not invent store links or deep links.
- When the real URL arrives: set the env var in Vercel, redeploy. No code change.
- [ ] After setting: click every "Open Aqarati" button (header, drawer, hero, page CTAs) in EN and AR.

## J. Contact integration — **WAITING**
- `CONTACT_WEBHOOK_URL` is **unset**. The form shows an honest failure state and never fakes success.
- `NEXT_PUBLIC_SUPPORT_EMAIL` and `NEXT_PUBLIC_CONTACT_PHONE` are unset, so those details are hidden.
- When the endpoint arrives: set `CONTACT_WEBHOOK_URL` (server-side only) in Vercel, redeploy, then test:
  - [ ] success (message accepted, confirmation shown)
  - [ ] failure (endpoint down, error shown, form data kept)
  - [ ] validation (empty / invalid email rejected in EN and AR)
  - [ ] loading (button disabled, no double submit)
