"use client";
import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ctl } from "@/content/motion";
import type { Lang } from "@/lib/i18n";

const pad = (n: number) => String(n).padStart(2, "0");
const Arrow = () => (
  <svg className="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);

/**
 * Scroll-snap carousel: native swipe on touch, drag with the mouse, arrow buttons, arrow keys,
 * "01 / 05" progress. No autoplay. `desktopGrid` turns it into a normal grid on wide screens.
 */
export function HorizontalCarousel({ children, lang, label, className = "", desktopGrid = false }: { children: ReactNode; lang: Lang; label: string; className?: string; desktopGrid?: boolean }) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const track = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const measure = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const mid = t.getBoundingClientRect().left + t.clientWidth / 2;
    let best = 0, bd = Infinity;
    [...t.children].forEach((c, i) => { const r = (c as HTMLElement).getBoundingClientRect(); const d = Math.abs(r.left + r.width / 2 - mid); if (d < bd) { bd = d; best = i; } });
    setIdx(best);
  }, []);
  useEffect(() => { measure(); }, [measure]);

  const go = (i: number) => {
    const t = track.current;
    const el = t?.children[Math.max(0, Math.min(total - 1, i))] as HTMLElement | undefined;
    if (!t || !el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tr = t.getBoundingClientRect(), er = el.getBoundingClientRect();
    t.scrollBy({ left: er.left + er.width / 2 - (tr.left + tr.width / 2), behavior: reduced ? "auto" : "smooth" });
  };
  const rtl = lang === "ar";
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const d = (e.key === "ArrowRight" ? 1 : -1) * (rtl ? -1 : 1);
    go(idx + d);
  };
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const t = track.current!;
    drag.current = { x: e.clientX, left: t.scrollLeft, moved: false };
    t.classList.add("dragging");
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current; if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    track.current!.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    const t = track.current;
    if (!drag.current || !t) return;
    drag.current = null;
    t.classList.remove("dragging");
    measure();
    requestAnimationFrame(() => go(idxFromScroll(t)));
  };
  const idxFromScroll = (t: HTMLDivElement) => {
    const mid = t.getBoundingClientRect().left + t.clientWidth / 2;
    let best = 0, bd = Infinity;
    [...t.children].forEach((c, i) => { const r = (c as HTMLElement).getBoundingClientRect(); const d = Math.abs(r.left + r.width / 2 - mid); if (d < bd) { bd = d; best = i; } });
    return best;
  };

  return (
    <div className={`hcar ${desktopGrid ? "hcar-grid" : ""} ${className}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <div ref={track} className="hcar-track" tabIndex={0} onScroll={measure} onKeyDown={onKey} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onPointerLeave={onUp} onDragStart={(e) => e.preventDefault()} onClickCapture={(e) => { if (drag.current?.moved) e.preventDefault(); }} aria-live="off">
        {slides.map((s, i) => (
          <div key={i} className="hcar-slide" role="group" aria-roledescription="slide" aria-label={`${ctl.slide[lang]} ${i + 1} / ${total}`} data-active={i === idx}>{s}</div>
        ))}
      </div>
      <div className="hcar-ctrl">
        <button type="button" className="hcar-btn" onClick={() => go(idx - 1)} disabled={idx === 0} aria-label={ctl.prev[lang]}><Arrow /></button>
        <span className="hcar-count" aria-live="polite">{pad(idx + 1)} / {pad(total)}</span>
        <button type="button" className="hcar-btn next" onClick={() => go(idx + 1)} disabled={idx === total - 1} aria-label={ctl.next[lang]}><Arrow /></button>
      </div>
    </div>
  );
}
