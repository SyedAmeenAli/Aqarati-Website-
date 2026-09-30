"use client";
import { useEffect, useRef } from "react";

/** The Aqarati arch-line motif, drawn line by line the first time it enters the viewport. */
export function AnimatedMotif({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("in"); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <svg ref={ref} className={`motif-draw ${className}`} viewBox="0 0 240 300" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path pathLength={1} d="M20 300V110a100 100 0 0 1 200 0v190" />
      <path pathLength={1} d="M52 300V112a68 68 0 0 1 136 0v188" />
      <path pathLength={1} d="M84 300V114a36 36 0 0 1 72 0v186" />
      <path pathLength={1} d="M0 300h240" />
    </svg>
  );
}
