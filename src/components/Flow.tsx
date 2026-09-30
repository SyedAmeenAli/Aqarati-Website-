import type { CSSProperties } from "react";
import { tx, type Lang, type T } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/** A connected sequence: the line draws as the section enters, nodes arrive one after another. */
export function FlowSteps({ lang, steps, finalTone = "red" }: { lang: Lang; steps: { t: T; d?: T }[]; finalTone?: "red" | "green" }) {
  return (
    <Reveal as="ol" className={`flow flow-${finalTone}`} style={{ "--n": steps.length } as CSSProperties}>
      {steps.map((s, i) => (
        <li className="flow-node" key={i} style={{ "--i": i } as CSSProperties}>
          <span className="flow-dot" aria-hidden="true" />
          <b>{tx(lang, s.t)}</b>
          {s.d && <p>{tx(lang, s.d)}</p>}
        </li>
      ))}
    </Reveal>
  );
}
