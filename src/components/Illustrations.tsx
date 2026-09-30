import fs from "node:fs";
import path from "node:path";
import type { AudienceKey } from "@/content/home";

/* Illustrations are unDraw SVGs (free commercial licence, no attribution required), recoloured to the
   Aqarati palette. They are inlined at build time so the red / green accents can move (settle, assemble)
   once on entry and lightly on hover. No looping. */
const file: Record<AudienceKey, string> = {
  buyer: "audience-buyer",
  owner: "audience-owner",
  agent: "audience-agent",
  developer: "audience-developer",
  construction: "audience-construction",
  design: "audience-design",
};
const cache = new Map<string, string>();

function load(name: string) {
  let svg = cache.get(name);
  if (svg) return svg;
  svg = fs.readFileSync(path.join(process.cwd(), "public", "images", "audience", `${name}.svg`), "utf8");
  let k = 0;
  svg = svg
    .replace(/<svg([^>]*)>/, (_m, attrs: string) => `<svg${attrs.replace(/\s(width|height)="[^"]*"/g, "")} role="img" aria-hidden="true" focusable="false">`)
    .replace(/fill="#(A91F2B|145A3A)"/gi, (m) => `${m} class="ill-accent" style="--k:${k++}"`);
  cache.set(name, svg);
  return svg;
}

export function AudienceIllustration({ k }: { k: AudienceKey }) {
  return <div className="ill" data-ill={k} dangerouslySetInnerHTML={{ __html: load(file[k]) }} />;
}

export function BrokerIllustration() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/images/broker/broker-coordination.svg" alt="" width={520} height={420} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", maxHeight: 420 }} />;
}
