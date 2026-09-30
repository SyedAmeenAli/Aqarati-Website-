import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { routes } from "@/config/routes";
import { href } from "@/lib/i18n";
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((p) => (["en", "ar"] as const).map((l) => ({
    url: `${site.siteUrl}${href(l, p)}`,
    lastModified: site.legalLastUpdated,
    alternates: { languages: { en: `${site.siteUrl}${href("en", p)}`, ar: `${site.siteUrl}${href("ar", p)}` } },
  })));
}
