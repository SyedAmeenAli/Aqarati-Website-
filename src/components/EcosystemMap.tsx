import type { CSSProperties } from "react";
import { ecosystemMap } from "@/content/motion";
import { tx, type Lang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/** Editorial connection of every participant to the property / home journey. Lines draw, roles arrive one by one. */
export function EcosystemMap({ lang }: { lang: Lang }) {
  const m = ecosystemMap;
  return (
    <Reveal className="eco-map" style={{ "--n": m.roles.length } as CSSProperties}>
      <div className="eco-root"><span>{tx(lang, m.root)}</span></div>
      <div className="eco-trunk" aria-hidden="true" />
      <ul className="eco-roles">
        {m.roles.map((r, i) => <li key={i} style={{ "--i": i } as CSSProperties}><span>{tx(lang, r)}</span></li>)}
      </ul>
      <div className="eco-trunk eco-trunk-end" aria-hidden="true" />
      <div className="eco-home"><span>{tx(lang, m.home)}</span></div>
    </Reveal>
  );
}
