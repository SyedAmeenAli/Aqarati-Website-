"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ctl } from "@/content/motion";
import type { Lang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

type Photo = { src: string; alt: string };
const Chev = () => (
  <svg className="arr" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
);

/** Photo row with a click-to-enlarge lightbox (FLIP expand from the thumbnail, Esc / arrow keys, focus returns to the thumbnail). */
export function PhotoRow({ photos, lang, className }: { photos: Photo[]; lang: Lang; className: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const origin = useRef<HTMLButtonElement | null>(null);
  const thumbs = useRef<(HTMLImageElement | null)[]>([]);
  const big = useRef<HTMLImageElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const flip = useRef<number | null>(null); // index to animate from, consumed once after mount
  const rtl = lang === "ar";

  const show = (i: number, btn: HTMLButtonElement) => { origin.current = btn; flip.current = i; setOpen(i); };
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + photos.length) % photos.length)), [photos.length]);

  const close = useCallback(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = big.current, t = open !== null ? thumbs.current[open] : null;
    const done = () => { setOpen(null); origin.current?.focus({ preventScroll: true }); };
    if (!reduced && el && t) {
      const a = el.getBoundingClientRect(), b = t.getBoundingClientRect();
      el.animate([{ transform: "none" }, { transform: `translate(${b.left + b.width / 2 - (a.left + a.width / 2)}px, ${b.top + b.height / 2 - (a.top + a.height / 2)}px) scale(${b.width / a.width})` }], { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" });
      shell.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 320, fill: "forwards" }).finished.then(done, done);
    } else done();
  }, [open]);

  useLayoutEffect(() => {
    if (open === null || flip.current === null) return;
    const i = flip.current; flip.current = null;
    const el = big.current, t = thumbs.current[i];
    if (!el || !t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const a = t.getBoundingClientRect(), b = el.getBoundingClientRect();
    el.animate([{ transform: `translate(${a.left + a.width / 2 - (b.left + b.width / 2)}px, ${a.top + a.height / 2 - (b.top + b.height / 2)}px) scale(${a.width / b.width})` }, { transform: "none" }], { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus({ preventScroll: true });
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      else if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      else if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
      else if (e.key === "Tab") { // keep focus inside the viewer
        const f = [...(shell.current?.querySelectorAll<HTMLElement>("button") ?? [])];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, close, step, rtl]);

  return (
    <>
      <div className={className}>
        {photos.map((p, i) => (
          <Reveal as="figure" img key={p.src} delay={i * 80}>
            <button type="button" className="photo-btn" aria-label={`${ctl.enlarge[lang]}: ${p.alt}`} onClick={(e) => show(i, e.currentTarget)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img ref={(el) => { thumbs.current[i] = el; }} src={p.src} alt={p.alt} width={1376} height={768} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
            </button>
          </Reveal>
        ))}
      </div>
      {open !== null && (
        <div ref={shell} className="lightbox" role="dialog" aria-modal="true" aria-label={ctl.gallery[lang]} onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={big} key={open} className="lightbox-img" src={photos[open].src} alt={photos[open].alt} />
          <button ref={closeBtn} type="button" className="lb-btn lb-close" onClick={close} aria-label={ctl.close[lang]}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          {photos.length > 1 && (
            <>
              <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label={ctl.prev[lang]}><Chev /></button>
              <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label={ctl.next[lang]}><Chev /></button>
            </>
          )}
          <span className="lb-count" aria-live="polite">{open + 1} / {photos.length}</span>
        </div>
      )}
    </>
  );
}
