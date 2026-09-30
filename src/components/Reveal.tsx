"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "section" | "figure" | "article" | "ol" | "ul";
  delay?: number;
  img?: boolean;
  /** Slide in from the inline start / end side (mirrors in RTL). */
  from?: "start" | "end";
  style?: CSSProperties;
};

/** Adds `.in` once when the element enters the viewport. Motion itself is pure CSS (transform + opacity). */
export function Reveal({ children, className = "", as: Tag = "div", delay = 0, img = false, from, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("in"); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const merged = delay ? ({ ...style, "--d": `${delay}ms` } as CSSProperties) : style;
  const Comp = Tag as "div";
  return <Comp ref={ref as React.RefObject<HTMLDivElement>} data-from={from} className={`${img ? "reveal-img" : "reveal"} ${className}`} style={merged}>{children}</Comp>;
}
