"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { href, type Lang } from "@/lib/i18n";
import { Brand } from "./Header";
import { Reveal } from "./Reveal";

function Col({ title, open, onToggle, delay, children }: { title: string; open: boolean; onToggle: () => void; delay: number; children: React.ReactNode }) {
  return (
    <Reveal className={`foot-col ${open ? "open" : ""}`} delay={delay}>
      <h4>{title}</h4>
      <button type="button" className="foot-toggle" aria-expanded={open} onClick={onToggle}>{title}<span aria-hidden="true">{open ? "–" : "+"}</span></button>
      <div className="foot-body">{children}</div>
    </Reveal>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const [openCol, setOpenCol] = useState<string | null>(null);
  const tog = (k: string) => setOpenCol((c) => (c === k ? null : k));
  const year = new Date().getFullYear();
  const other: Lang = lang === "en" ? "ar" : "en";
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-top">
          <Reveal className="foot-brand">
            <Brand lang={lang} />
            <p>{ui.footerStatement[lang]}</p>
            <span className="foot-line" aria-hidden="true" />
          </Reveal>
          <div className="foot-cols">
            <Col delay={80} title={ui.cols.explore[lang]} open={openCol === "e"} onToggle={() => tog("e")}>
              <ul>{ui.footerLinks.explore.map((l) => <li key={l.path}><Link href={href(lang, l.path)}>{l.label[lang]}</Link></li>)}</ul>
            </Col>
            <Col delay={120} title={ui.cols.company[lang]} open={openCol === "c"} onToggle={() => tog("c")}>
              <ul>{ui.footerLinks.company.map((l) => <li key={l.path}><Link href={href(lang, l.path)}>{l.label[lang]}</Link></li>)}</ul>
            </Col>
            <Col delay={160} title={ui.cols.legal[lang]} open={openCol === "l"} onToggle={() => tog("l")}>
              <ul>
                {ui.footerLinks.legal.map((l) => <li key={l.path}><Link href={href(lang, l.path)}>{l.label[lang]}</Link></li>)}
                <li><button type="button" onClick={() => window.dispatchEvent(new Event("aq:cookie-prefs"))}>{ui.cookiePrefs[lang]}</button></li>
              </ul>
            </Col>
            <Col delay={200} title={ui.cols.connect[lang]} open={openCol === "n"} onToggle={() => tog("n")}>
              {site.socialLinks.length ? (
                <ul>{site.socialLinks.map((s) => <li key={s.href}><a href={s.href} rel="noopener noreferrer">{s.label}</a></li>)}</ul>
              ) : (
                <p className="note">{ui.noSocial[lang]}</p>
              )}
            </Col>
          </div>
        </div>
        <div className="foot-bottom">
          <span><bdi className="foot-word">{site.brandName}</bdi> · <bdi>© {year} {site.brandName.charAt(0) + site.brandName.slice(1).toLowerCase()}.</bdi> {ui.rights[lang]}</span>
          <span>
            <Link href={href("en", "/")} hrefLang="en" aria-current={lang === "en" ? "true" : undefined} style={{ opacity: lang === "en" ? 1 : 0.7 }}>English</Link>
            {" · "}
            <Link href={href("ar", "/")} hrefLang="ar" lang="ar" aria-current={lang === "ar" ? "true" : undefined} style={{ opacity: lang === "ar" ? 1 : 0.7 }}>العربية</Link>
            <span className="sr-only">{other}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
