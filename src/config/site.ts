/**
 * Central website configuration. Values that are not yet known are left empty:
 * components hide the related UI instead of showing made-up details.
 * Override with NEXT_PUBLIC_* env vars at deploy time.
 */
export const site = {
  brandName: "AQARATI",
  arabicName: "عقاراتي",
  // Set NEXT_PUBLIC_SITE_URL at deploy time. Without it the origin falls back to the Vercel production host or localhost, never an invented domain.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3100")).replace(/\/$/, ""),
  // Where "Open Aqarati" goes. Set to the live app / store landing URL.
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || "",
  googlePlayUrl: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  socialLinks: [] as { label: string; href: string }[],
  // Fee shown on the website, as a fraction. 0.02 = 2%.
  serviceFeeRate: 0.02,
  exampleTransactionOmr: 125000,
  legalLastUpdated: "2026-09-30",
  languageOptions: [
    { code: "en", label: "EN", name: "English", dir: "ltr" },
    { code: "ar", label: "العربية", name: "العربية", dir: "rtl" },
  ] as const,
  analytics: { enabled: false },
};
export const feePercent = site.serviceFeeRate * 100;
export const exampleFee = site.exampleTransactionOmr * site.serviceFeeRate;
