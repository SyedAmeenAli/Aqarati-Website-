"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { site } from "@/config/site";
import { megaMenu } from "@/content/motion";
import { mobileNav, nav, ui } from "@/content/ui";
import { href, type Lang } from "@/lib/i18n";
import { AppLink } from "./AppLink";
import { Arrow, Close, Menu } from "./Icons";

export function Brand({ lang }: { lang: Lang }) {
  return (
    <Link href={href(lang, "/")} className="brand" aria-label={`${site.brandName} ${site.arabicName}`}>
      {/* approved logo mark, unaltered */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/aqarati-mark.svg" alt="" width={40} height={32} />
      <span className="brand-word"><b>{site.brandName}</b><span lang="ar">{site.arabicName}</span></span>
    </Link>
  );
}

const Chevron = () => (
  <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
);

export function Header({ lang }: { lang: Lang }) {
  const path = usePathname() || "/";
  const bare = path.replace(/^\/(ar|en)(?=\/|$)/, "") || "/";
  const isHome = bare === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [active, setActive] = useState(0);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const megaBtn = useRef<HTMLButtonElement>(null);
  const megaWrap = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); setMega(false); }, [path]);

  const closeMenu = useCallback(() => { setOpen(false); menuBtn.current?.focus({ preventScroll: true }); }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (open) closeMenu(); setMega(false); }
      if (open && e.key === "Tab" && panel.current) {
        const f = [...panel.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled])")];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, closeMenu]);

  useEffect(() => {
    if (!mega) return;
    const down = (e: MouseEvent) => { if (megaWrap.current && !megaWrap.current.contains(e.target as Node)) setMega(false); };
    document.addEventListener("mousedown", down);
    return () => document.removeEventListener("mousedown", down);
  }, [mega]);

  const enter = () => { window.clearTimeout(hoverTimer.current); setMega(true); };
  const leave = () => { window.clearTimeout(hoverTimer.current); hoverTimer.current = window.setTimeout(() => setMega(false), 240); };
  const onMegaKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setMega(false); megaBtn.current?.focus(); return; }
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const items = [...(megaWrap.current?.querySelectorAll<HTMLElement>(".mega-item") ?? [])];
    if (!items.length) return;
    e.preventDefault();
    const i = items.indexOf(document.activeElement as HTMLElement);
    const n = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    items[n].focus();
  };

  const other: Lang = lang === "en" ? "ar" : "en";
  const switchHref = href(other, bare);
  const over = isHome && !scrolled && !open && !mega;
  const cls = `site-header ${scrolled || !isHome ? "solid" : ""} ${over ? "over" : ""} ${mega ? "mega-open" : ""}`;
  const L = (p: string) => (p.startsWith("#") ? href(lang, "/") + p : href(lang, p));
  const n = mobileNav.length + 2;

  return (
    <>
      <header className={cls}>
        <div className="container bar">
          <Brand lang={lang} />
          <nav className="nav-desk" aria-label={ui.primaryNav[lang]}>
            <Link href={href(lang, "/") + "#why"}>{nav[0].label[lang]}</Link>
            <Link href={href(lang, "/how-it-works")} aria-current={bare === "/how-it-works" ? "page" : undefined}>{nav[1].label[lang]}</Link>
            <div className="nav-item" ref={megaWrap} onMouseEnter={enter} onMouseLeave={leave} onKeyDown={onMegaKey}>
              <button ref={megaBtn} type="button" className="nav-link" aria-expanded={mega} aria-controls="mega-menu" aria-current={bare.startsWith("/for-") ? "page" : undefined}
                onClick={(e) => { if (e.detail > 0 && window.matchMedia("(hover: hover)").matches) setMega(true); else setMega((v) => !v); }}
                onKeyDown={(e) => { if (e.key === "ArrowDown") { e.preventDefault(); e.stopPropagation(); setMega(true); window.setTimeout(() => megaWrap.current?.querySelector<HTMLElement>(".mega-item")?.focus(), 60); } }}>
                {megaMenu.label[lang]}<Chevron />
              </button>
              <div id="mega-menu" className={`mega ${mega ? "open" : ""}`} role="region" aria-label={megaMenu.title[lang]} {...(!mega ? { inert: true } : {})}>
                <div className="container">
                  <div className="mega-card">
                    <div className="mega-list">
                      <p className="mega-title">{megaMenu.title[lang]}</p>
                      {megaMenu.items.map((it, i) => (
                        <Link key={it.path} href={href(lang, it.path)} className={`mega-item ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setMega(false)}>
                          <span className="mega-bar" aria-hidden="true" />
                          <span className="mega-text"><b>{it.t[lang]}</b><span>{it.d[lang]}</span></span>
                          <Arrow className="arr" width={18} height={18} />
                        </Link>
                      ))}
                    </div>
                    <div className="mega-visual" aria-hidden="true">
                      {megaMenu.items.map((it, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={it.src} src={it.src} alt="" width={1000} height={914} loading="lazy" decoding="async" className={active === i ? "on" : ""} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href={href(lang, "/verification")} aria-current={bare === "/verification" ? "page" : undefined}>{nav[3].label[lang]}</Link>
            <Link href={href(lang, "/about")} aria-current={bare === "/about" ? "page" : undefined}>{nav[4].label[lang]}</Link>
          </nav>
          <div className="tools">
            <Link className="lang-link" href={switchHref} hrefLang={other} lang={other} aria-label={`${ui.language[lang]}: ${site.languageOptions.find((l) => l.code === other)!.name}`}>
              {lang === "en" ? "العربية" : "EN"}
            </Link>
            <AppLink lang={lang} className={`btn btn-sm cta-desk ${over ? "btn-light" : "btn-red"}`}>{ui.openAqarati[lang]} <Arrow width={16} height={16} /></AppLink>
            <button ref={menuBtn} className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label={ui.menu[lang]} aria-expanded={open} aria-controls="mobile-menu" type="button"><Menu /></button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label={ui.menu[lang]} {...(!open ? { inert: true } : {})} style={{ "--n": n } as CSSProperties}>
        <button type="button" className="mm-backdrop" tabIndex={-1} aria-label={ui.close[lang]} onClick={closeMenu} />
        <div className="mm-panel" ref={panel} tabIndex={-1}>
          <div className="top mm-item" style={{ "--i": 0 } as CSSProperties}>
            <Brand lang={lang} />
            <button className="icon-btn" onClick={closeMenu} aria-label={ui.close[lang]} type="button"><Close /></button>
          </div>
          <nav aria-label={ui.menu[lang]}>
            {mobileNav.map((m, i) => (
              <Link key={m.path + i} href={i === 0 ? L("#why") : L(m.path)} className="mm-item mm-link" style={{ "--i": i + 1 } as CSSProperties}>
                <span>{m.label[lang]}</span><Arrow className="arr" width={20} height={20} />
              </Link>
            ))}
          </nav>
          <div className="mm-foot">
            <Link className="lang-link mm-item" href={switchHref} hrefLang={other} lang={other} style={{ "--i": mobileNav.length + 1 } as CSSProperties}>{lang === "en" ? "العربية" : "English"}</Link>
            <AppLink lang={lang} className="btn btn-red mm-item" style={{ "--i": mobileNav.length + 2 } as CSSProperties}>{ui.openAqarati[lang]} <Arrow /></AppLink>
          </div>
        </div>
      </div>
    </>
  );
}
