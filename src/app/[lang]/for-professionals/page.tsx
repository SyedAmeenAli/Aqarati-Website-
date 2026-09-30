import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { professionalsPage } from "@/content/audiencePages";
import { ProfessionalsView } from "@/components/Pages";

type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang as Lang, "/for-professionals", { en: "For professionals", ar: "للمهنيين" }, professionalsPage.lead);
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <ProfessionalsView lang={lang as Lang} />;
}
