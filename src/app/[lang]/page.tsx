import type { Metadata } from "next";
import { FounderSection } from "@/components/Founder";
import { AppPreview, Audiences, BrokerSection, FeeSection, FinalCta, Hero, HowItWorks, JourneySection, TrustStrip, VerificationSection, WhatIs, WhyAqarati } from "@/components/Sections";
import { site } from "@/config/site";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(
    lang as Lang,
    "/",
    { en: "AQARATI — Oman's Property Ecosystem", ar: "عقاراتي — المنظومة العقارية في عُمان" },
    { en: "Aqarati brings property discovery, trusted professionals and the wider home journey into one ecosystem in Oman.", ar: "تجمع عقاراتي اكتشاف العقار والمهنيين الموثوقين ورحلة المنزل الأوسع في منظومة واحدة في عُمان." },
    { absoluteTitle: true },
  );
}

export default async function Home({ params }: Props) {
  const { lang: l } = await params;
  const lang = l as Lang;
  const ld = { "@context": "https://schema.org", "@type": "Organization", name: site.brandName, alternateName: site.arabicName, url: site.siteUrl, logo: `${site.siteUrl}/brand/aqarati-mark-512.png` };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero lang={lang} />
      <TrustStrip lang={lang} />
      <WhatIs lang={lang} />
      <Audiences lang={lang} />
      <HowItWorks lang={lang} />
      <BrokerSection lang={lang} />
      <FeeSection lang={lang} />
      <VerificationSection lang={lang} />
      <JourneySection lang={lang} />
      <AppPreview lang={lang} />
      <WhyAqarati lang={lang} />
      <FounderSection lang={lang} />
      <FinalCta lang={lang} />
    </>
  );
}
