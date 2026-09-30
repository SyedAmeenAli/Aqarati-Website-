import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import * as PG from "@/content/pages";
import { HowView } from "@/components/Pages";

type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang as Lang, "/how-it-works", PG.howPage.title, PG.howPage.description);
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <HowView lang={lang as Lang} />;
}
