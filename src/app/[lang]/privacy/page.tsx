import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import * as L from "@/content/legal";
import { LegalView } from "@/components/Pages";

type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang as Lang, "/privacy", L.privacy.title, L.privacy.description);
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <LegalView lang={lang as Lang} doc={L.privacy} />;
}
