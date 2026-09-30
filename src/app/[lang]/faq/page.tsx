import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { faqPage } from "@/content/faq";
import { FaqView } from "@/components/Pages";

type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang as Lang, "/faq", faqPage.title, faqPage.description);
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <FaqView lang={lang as Lang} />;
}
