import { founder } from "@/content/founder";
import { tx, type Lang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/** Founder card. Not interactive. Shows an approved portrait only if `founder.image` is set; otherwise a neutral monogram frame. */
export function FounderCard({ lang }: { lang: Lang }) {
  const name = tx(lang, founder.name);
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <Reveal className="founder-card" as="article">
      <div className="founder-frame">
        {founder.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={founder.image} alt={`${name}, ${tx(lang, founder.role)}`} width={640} height={800} loading="lazy" decoding="async" />
        ) : (
          <div className="founder-mono" aria-hidden="true">
            <svg viewBox="0 0 240 300" fill="none" stroke="currentColor" strokeWidth="1.1"><path d="M20 300V110a100 100 0 0 1 200 0v190" /><path d="M52 300V112a68 68 0 0 1 136 0v188" /><path d="M84 300V114a36 36 0 0 1 72 0v186" /></svg>
            <span className="display">{initial}</span>
          </div>
        )}
      </div>
      <div className="founder-text">
        <h3 className="display">{name}</h3>
        <p className="founder-role">{tx(lang, founder.role)}</p>
        <span className="founder-rule" aria-hidden="true" />
        <p className="founder-line">{tx(lang, founder.line)}</p>
        {tx(lang, founder.bio) && <p className="muted">{tx(lang, founder.bio)}</p>}
        {founder.linkedin && <a className="tlink" href={founder.linkedin} rel="noopener noreferrer">LinkedIn</a>}
      </div>
    </Reveal>
  );
}

export function FounderSection({ lang }: { lang: Lang }) {
  return (
    <section className="section" aria-labelledby="founder-h">
      <div className="container founder-wrap">
        <Reveal>
          <p className="overline">{tx(lang, founder.homeOverline)}</p>
          <h2 id="founder-h" className="display h-lg founder-quote">{tx(lang, founder.homeQuote)}</h2>
        </Reveal>
        <FounderCard lang={lang} />
      </div>
    </section>
  );
}
