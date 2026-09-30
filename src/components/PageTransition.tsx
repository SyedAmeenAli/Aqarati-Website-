"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Soft hand-off between routes. App Router swaps the page at once, so:
 *  - on an internal link click the outgoing page eases to 0.97 / -4px (no navigation delay)
 *  - when the new route mounts it enters from 0 / +10px over ~380ms
 * Skipped on first load (the hero has its own sequence) and when reduced motion is requested.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname();
  const ref = useRef<HTMLElement | null>(null);
  const first = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-leaving");
    if (first.current) { first.current = false; return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 380, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  }, [path]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.hash)) return;
      if (url.pathname === location.pathname) return;
      ref.current?.classList.add("is-leaving");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <main id="main" ref={ref} className="page-main">{children}</main>;
}
