import type { Metadata } from "next";
import { site } from "@/config/site";
import { href, type Lang, type T } from "./i18n";

export function pageMeta(lang: Lang, path: string, title: T, description: T, opts?: { absoluteTitle?: boolean; image?: string }): Metadata {
  const url = `${site.siteUrl}${href(lang, path)}`;
  const t = opts?.absoluteTitle ? { absolute: title[lang] } : title[lang];
  const img = opts?.image || "/og.jpg";
  const fullTitle = opts?.absoluteTitle ? title[lang] : `${title[lang]} — ${site.brandName}`;
  return {
    title: t,
    description: description[lang],
    alternates: {
      canonical: url,
      languages: { en: `${site.siteUrl}${href("en", path)}`, ar: `${site.siteUrl}${href("ar", path)}`, "x-default": `${site.siteUrl}${href("en", path)}` },
    },
    openGraph: { title: fullTitle, description: description[lang], url, siteName: site.brandName, type: "website", locale: lang === "ar" ? "ar_OM" : "en_GB", images: [{ url: img, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: fullTitle, description: description[lang], images: [img] },
  };
}
