"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { app } from "@/content/home";
import { ctl } from "@/content/motion";
import { tx, type Lang } from "@/lib/i18n";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { Reveal } from "./Reveal";

type Screen = (typeof app.screens)[number];

function Frame({ s, lang, children, className = "" }: { s?: Screen; lang: Lang; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="scr">
        {children ?? (s && /* eslint-disable-next-line @next/next/no-img-element */ <img src={s.src} alt={tx(lang, s.label)} width={400} height={867} loading="lazy" decoding="async" />)}
      </div>
    </div>
  );
}

/**
 * "See Aqarati in action": five phones on desktop (the centre phone switches screens through tabs with a
 * slow cross-fade), one phone at a time with swipe + "01 / 05" on mobile.
 */
export function PhoneShowcase({ lang }: { lang: Lang }) {
  const s = app.screens;
  const [cur, setCur] = useState(2);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // one small, bounded parallax: centre phone drifts up, side phones drift the other way (max 8px / 5px)
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.innerWidth < 861) { el.style.setProperty("--p", "0"); return; }
      const r = el.getBoundingClientRect();
      const p = Math.max(-1, Math.min(1, (window.innerHeight / 2 - (r.top + r.height / 2)) / (window.innerHeight / 2)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const last = s.length - 1;
    const d = e.key === "ArrowRight" ? (lang === "ar" ? -1 : 1) : e.key === "ArrowLeft" ? (lang === "ar" ? 1 : -1) : 0;
    if (!d && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const n = e.key === "Home" ? 0 : e.key === "End" ? last : (i + d + s.length) % s.length;
    setCur(n);
    tabs.current[n]?.focus();
  };

  const side = (idx: number, cls: string, delay: number, par: string) => (
    <Reveal as="figure" className={`phone phone-enter ${cls}`} delay={delay} style={{ "--par": par } as CSSProperties}>
      <div className="phone-par"><Frame s={s[idx]} lang={lang} /></div>
      <figcaption>{tx(lang, s[idx].label)}</figcaption>
    </Reveal>
  );

  return (
    <div ref={root} className="showcase">
      <div className="phones">
        {side(1, "side", 0, "5px")}
        {side(0, "", 80, "-4px")}
        <Reveal as="figure" className="phone phone-enter mid" delay={150} style={{ "--par": "-8px" } as CSSProperties}>
          <div className="phone-par">
            <Frame lang={lang}>
              {s.map((x, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={x.id} className={`phone-screen ${i === cur ? "on" : ""}`} src={x.src} alt={i === cur ? tx(lang, x.label) : ""} aria-hidden={i !== cur} width={400} height={867} loading="lazy" decoding="async" />
              ))}
            </Frame>
          </div>
          <figcaption key={cur} className="phone-cap">{tx(lang, s[cur].label)}</figcaption>
        </Reveal>
        {side(3, "", 220, "4px")}
        {side(4, "side", 290, "-5px")}
      </div>

      <div className="phone-tabs" role="tablist" aria-label={ctl.tabs[lang]}>
        {s.map((x, i) => (
          <button key={x.id} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" aria-selected={i === cur} tabIndex={i === cur ? 0 : -1} className="phone-tab" onClick={() => setCur(i)} onKeyDown={(e) => onTabKey(e, i)}>
            {tx(lang, x.label)}
          </button>
        ))}
      </div>

      <HorizontalCarousel lang={lang} label={tx(lang, app.h)} className="phone-rail-mobile">
        {s.map((x) => (
          <figure className="phone" key={x.id}>
            <Frame s={x} lang={lang} />
            <figcaption>{tx(lang, x.label)}</figcaption>
          </figure>
        ))}
      </HorizontalCarousel>
    </div>
  );
}
