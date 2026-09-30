import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { AudiencePageView, findAudience } from "@/components/Pages";

type Props = { params: Promise<{ lang: string }> };
const page = findAudience("for-developers");
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang as Lang, "/for-developers", page.title, page.description);
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <AudiencePageView lang={lang as Lang} page={page} />;
}
