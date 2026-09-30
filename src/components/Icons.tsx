import type { SVGProps } from "react";

const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
type P = SVGProps<SVGSVGElement>;

export const Arrow = (p: P) => (
  <svg {...base} className="arr" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} width={20} height={20} {...p}><path d="M4 12.5l5 5L20 6.5" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Sun = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" /></svg>
);
export const Moon = (p: P) => (
  <svg {...base} {...p}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>
);
export const Doc = (p: P) => (
  <svg {...base} {...p}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></svg>
);
export const Lens = (p: P) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l5 5" /></svg>
);
export const Badge = (p: P) => (
  <svg {...base} {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M8.5 12l2.5 2.5L15.5 9.5" /></svg>
);

/** Journey icons, keyed by stop id. */
export function JourneyIcon({ k }: { k: string }) {
  switch (k) {
    case "find": return <Lens />;
    case "verify": return <Badge />;
    case "view": return <svg {...base}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "connect": return <svg {...base}><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8" /></svg>;
    case "decide": return <svg {...base}><circle cx="12" cy="12" r="8.5" /><path d="M8 12.5l3 3 5-6" /></svg>;
    case "transact": return <svg {...base}><path d="M4 8h14l-3-3M20 16H6l3 3" /></svg>;
    case "build": return <svg {...base}><path d="M4 20V8l8-4 8 4v12M4 20h16M9 20v-6h6v6" /></svg>;
    case "design": return <svg {...base}><path d="M4 20l1-5L16 4l4 4L9 19z" /><path d="M14 6l4 4" /></svg>;
    case "maintain": return <svg {...base}><path d="M14.5 6.5a4 4 0 0 0 4.9 4.9l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4a4 4 0 0 0-1.9-1.9z" /></svg>;
    default: return null;
  }
}

/** Recurring brand motif: a doorway / arch outline drawn as one continuous line. */
export function Motif(p: P) {
  return (
    <svg viewBox="0 0 240 300" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...p}>
      <path d="M20 300V110a100 100 0 0 1 200 0v190" />
      <path d="M52 300V112a68 68 0 0 1 136 0v188" />
      <path d="M84 300V114a36 36 0 0 1 72 0v186" />
      <path d="M0 300h240" />
    </svg>
  );
}
