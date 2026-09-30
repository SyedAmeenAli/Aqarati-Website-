import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import "../motion.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import { ScrollTop } from "@/components/ScrollTop";
import { ThemeScript } from "@/components/ThemeScript";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { dirOf, isLang, langs } from "@/lib/i18n";
import { cormorant, inter, naskh, sansArabic } from "../fonts";

export const dynamicParams = false;
export const generateStaticParams = () => langs.map((lang) => ({ lang }));

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: "AQARATI — Oman's Property Ecosystem", template: `%s — ${site.brandName}` },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }], apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#f7f5f0", width: "device-width", initialScale: 1 };

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} dir={dirOf(lang)} className={`${cormorant.variable} ${inter.variable} ${naskh.variable} ${sansArabic.variable}`} suppressHydrationWarning>
      <head><ThemeScript /></head>
      <body>
        <a href="#main" className="skip">{ui.skip[lang]}</a>
        <Header lang={lang} />
        <PageTransition>{children}</PageTransition>
        <ScrollTop lang={lang} />
        <Footer lang={lang} />
        <CookieConsent lang={lang} />
      </body>
    </html>
  );
}
