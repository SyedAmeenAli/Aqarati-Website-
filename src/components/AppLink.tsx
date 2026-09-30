import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { site } from "@/config/site";
import { href, type Lang } from "@/lib/i18n";

/** "Open Aqarati" target. Uses the configured app URL; until one exists it routes to Contact rather than a made-up link. */
export function AppLink({ lang, className, children, style }: { lang: Lang; className?: string; children: ReactNode; style?: CSSProperties }) {
  if (site.appUrl) return <a className={className} style={style} href={site.appUrl} rel="noopener">{children}</a>;
  return <Link className={className} style={style} href={href(lang, "/contact")}>{children}</Link>;
}
