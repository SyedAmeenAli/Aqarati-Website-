"use client";
import { useEffect, useState } from "react";
import { ctl } from "@/content/motion";
import type { Lang } from "@/lib/i18n";

/** Small back-to-top button, shown after a meaningful scroll. */
export function ScrollTop({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button type="button" className={`scroll-top ${show ? "show" : ""}`} aria-label={ctl.toTop[lang]} tabIndex={show ? 0 : -1} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
    </button>
  );
}
