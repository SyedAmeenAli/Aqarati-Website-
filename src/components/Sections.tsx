import Link from "next/link";
import { feePercent, exampleFee, site } from "@/config/site";
import * as C from "@/content/home";
import { ui } from "@/content/ui";
import { fill, href, num, tx, txl, type Lang } from "@/lib/i18n";
import { AppLink } from "./AppLink";
import { AnimatedMotif } from "./AnimatedMotif";
import { Arrow, Badge, Check, Doc, JourneyIcon, Lens } from "./Icons";
import { AudienceIllustration, BrokerIllustration } from "./Illustrations";
import { PhoneShowcase } from "./PhoneShowcase";
import { Reveal } from "./Reveal";
import type { CSSProperties } from "react";

type P = { lang: Lang };

export const Img = ({ src, alt, w = 1376, h = 768, eager = false, className }: { src: string; alt: string; w?: number; h?: number; eager?: boolean; className?: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} width={w} height={h} loading={eager ? "eager" : "lazy"} decoding="async" {...(eager ? { fetchPriority: "high" as const } : {})} className={className} />
);

export function SectionHead({ overline, children, lead }: { overline?: string; children: React.ReactNode; lead?: string }) {
  return (
    <Reveal className="section-head">
      {overline && <p className="overline">{overline}</p>}
      <h2 className="display h-xl">{children}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

/* ---------- hero ---------- */
export function Hero({ lang }: P) {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="bg hero-image"><Img src="/images/hero/hero-oman-home.webp" alt={tx(lang, C.hero.alt)} w={1376} h={702} eager /></div>
      <div className="container inner">
        <p className="overline hero-rise" style={{ "--d": "150ms" } as CSSProperties}>{tx(lang, C.hero.overline)}</p>
        <h1 id="hero-h" className="display h-hero hero-rise" style={{ "--d": "350ms" } as CSSProperties}>{tx(lang, C.hero.h1a)}<br />{tx(lang, C.hero.h1b)}</h1>
        <p className="lead hero-rise" style={{ "--d": "450ms" } as CSSProperties}>{tx(lang, C.hero.sub)}</p>
        <div className="actions">
          <Link className="btn btn-light hero-rise" style={{ "--d": "550ms" } as CSSProperties} href="#audiences">{tx(lang, C.hero.primary)} <Arrow /></Link>
          <Link className="btn btn-ghost-light hero-rise" style={{ "--d": "650ms" } as CSSProperties} href={href(lang, "/how-it-works")}>{tx(lang, C.hero.secondary)}</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- trust strip ---------- */
export function TrustStrip({ lang }: P) {
  return (
    <section className="trust" aria-labelledby="trust-h">
      <div className="container trust-grid">
        <Reveal>
          <h2 id="trust-h" className="display h-lg">{tx(lang, C.trust.h)}</h2>
          <p className="muted" style={{ marginBlockStart: 14, maxWidth: "30em" }}>{tx(lang, C.trust.p)}</p>
        </Reveal>
        <div>
          <ul className="trust-items">
            {C.trust.items.map((it, i) => (
              <Reveal as="li" key={i} className="trust-item" delay={i * 80}>
                <Badge width={24} height={24} />
                <div><b>{tx(lang, it.t)}</b><span>{tx(lang, it.d)}</span></div>
              </Reveal>
            ))}
          </ul>
          <p className="small muted" style={{ marginBlockStart: 20 }}>{tx(lang, C.trust.note)}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- what is ---------- */
export function WhatIs({ lang }: P) {
  return (
    <section className="section" id="why" aria-labelledby="what-h">
      <div className="container">
        <Reveal className="stack" >
          <p className="overline">{tx(lang, C.what.overline)}</p>
          <h2 id="what-h" className="display h-xl" style={{ marginBlockStart: 20 }}>{tx(lang, C.what.h)}</h2>
          <p className="display statement" style={{ marginBlockStart: 28, fontWeight: 400 }}>{tx(lang, C.what.statement)}</p>
        </Reveal>
        <div className="triad">
          {C.what.items.map((it, i) => (
            <Reveal key={i} className={`triad-item ${it.c === "green" ? "green" : ""}`} delay={i * 90}>
              <h3>{tx(lang, it.t)}</h3>
              <p>{tx(lang, it.d)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal img className="wide-img"><Img src="/images/ecosystem/ecosystem-villa-facade.webp" alt={tx(lang, C.what.alt)} w={1376} h={702} /></Reveal>
      </div>
    </section>
  );
}

/* ---------- audiences ---------- */
export function Audiences({ lang }: P) {
  return (
    <section className="section alt" id="audiences" aria-labelledby="aud-h">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="aud-h" className="display h-xl">{tx(lang, C.audiencesSection.h1)}<br />{tx(lang, C.audiencesSection.h2)}</h2>
        </Reveal>
        <div className="aud-grid">
          {C.audiences.map((a, i) => (
            <Reveal key={a.key} delay={(i % 3) * 70}>
              <Link href={href(lang, a.path)} className="aud-card">
                <div className="aud-art"><AudienceIllustration k={a.key} /></div>
                <div className="aud-body">
                  <span className="aud-n">{a.n}</span>
                  <h3>{tx(lang, a.title)}</h3>
                  <p className="aud-line">{tx(lang, a.line)}</p>
                  <p className="aud-desc">{tx(lang, a.desc)}</p>
                  <span className="aud-go">{tx(lang, ui.learnMore)} <Arrow width={16} height={16} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how it works ---------- */
export function StepTimeline({ lang }: P) {
  return (
    <Reveal className="tl">
      {C.howSteps.steps.map((s, i) => (
        <div className="tl-step" key={s.n} style={{ "--i": i } as CSSProperties}>
          <span className="tl-num">{s.n}</span>
          <h3 className="display">{tx(lang, s.t)}</h3>
          <p>{tx(lang, s.d)}</p>
        </div>
      ))}
    </Reveal>
  );
}
export function HowItWorks({ lang }: P) {
  return (
    <section className="section" aria-labelledby="how-h">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="how-h" className="display h-xl">{tx(lang, C.howSteps.h)}</h2>
          <p className="lead">{tx(lang, C.howSteps.p)}</p>
        </Reveal>
        <StepTimeline lang={lang} />
      </div>
    </section>
  );
}

/* ---------- broker + self-managed ---------- */
export function BrokerSection({ lang, link = true, hideArt = false }: P & { link?: boolean; hideArt?: boolean }) {
  const b = C.broker;
  return (
    <section className="section alt" id="broker" aria-labelledby="broker-h">
      <div className="container">
        <div className={hideArt ? "" : "split"}>
          <Reveal from="start">
            <p className="overline">{tx(lang, b.overline)}</p>
            <h2 id="broker-h" className="display h-xl" style={{ marginBlock: "20px 20px" }}>{tx(lang, b.h)}</h2>
            <p className="lead">{tx(lang, b.p)}</p>
            <div className="twin" style={{ marginBlockStart: 32, gridTemplateColumns: "1fr", gap: 24 }}>
              {[b.buyers, b.owners].map((g, gi) => (
                <div key={gi}>
                  <h3 className="h-md">{tx(lang, g.t)}</h3>
                  <ul className="ticks red">
                    {txl(lang, g.lines).map((l) => <li key={l}><Check />{l}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="caveat">{tx(lang, b.caveat)}</p>
            {link && <div className="actions" style={{ marginBlockStart: 24 }}><Link className="btn btn-line" href={href(lang, "/aqarati-broker")}>{tx(lang, b.cta)} <Arrow /></Link></div>}
          </Reveal>
          {!hideArt && <Reveal className="broker-art" delay={120}><BrokerIllustration /></Reveal>}
        </div>
        <SelfManaged lang={lang} />
      </div>
    </section>
  );
}
export function SelfManaged({ lang }: P) {
  const s = C.broker.self;
  return (
    <Reveal className="panel tone-green" from="end">
      <div className="split" style={{ alignItems: "start" }}>
        <div>
          <h3>{tx(lang, s.t)}</h3>
          <p className="sub">{tx(lang, s.p)}</p>
        </div>
        <ul className="ticks">{txl(lang, s.lines).map((l) => <li key={l}><Check />{l}</li>)}</ul>
      </div>
    </Reveal>
  );
}

/* ---------- fee ---------- */
export function FeeCard({ lang }: P) {
  const f = C.fee;
  const rate = String(feePercent);
  return (
    <Reveal className="fee-card">
      <span className="fee-tag">{tx(lang, ui.example)}</span>
      <div className="fee-row fee-step" style={{ "--i": 0 } as CSSProperties}><small>{tx(lang, f.tx)}</small><b>OMR {num(lang, site.exampleTransactionOmr)}</b></div>
      <div className="fee-op fee-step" style={{ "--i": 1 } as CSSProperties} aria-hidden="true">×</div>
      <div className="fee-row fee-step" style={{ "--i": 2 } as CSSProperties}><small>{tx(lang, f.feeLabel)}</small><b>{rate}%</b></div>
      <div className="fee-op fee-step" style={{ "--i": 3 } as CSSProperties} aria-hidden="true">↓</div>
      <div className="fee-line" />
      <div className="fee-row fee-res fee-step" style={{ "--i": 4 } as CSSProperties}><small>{tx(lang, f.result)}</small><b>OMR {num(lang, exampleFee)}</b></div>
    </Reveal>
  );
}
export function FeeSection({ lang }: P) {
  const f = C.fee;
  return (
    <section className="section" id="pricing" aria-labelledby="fee-h">
      <div className="container fee-wrap">
        <Reveal>
          <p className="overline">{tx(lang, f.overline)}</p>
          <h2 id="fee-h" className="display h-xl" style={{ marginBlock: "20px" }}>{tx(lang, f.h)}</h2>
          <p className="lead">{fill(tx(lang, f.p), { rate: String(feePercent) })}</p>
          <p className="muted" style={{ marginBlockStart: 16 }}>{tx(lang, f.notAll)}</p>
          <p style={{ marginBlockStart: 16, fontWeight: 600 }}><Link className="tlink" href={href(lang, "/terms")}>{tx(lang, f.terms)}</Link></p>
        </Reveal>
        <Reveal delay={100}><FeeCard lang={lang} /></Reveal>
      </div>
    </section>
  );
}

/* ---------- verification ---------- */
export function VerificationLayers({ lang }: P) {
  return (
    <div className="layers">
      {C.verification.layers.map((l, i) => (
        <Reveal key={l.n} className="layer" delay={i * 90}>
          <span className="n">{l.n}</span>
          <h3>{tx(lang, l.t)}</h3>
          <p>{tx(lang, l.d)}</p>
        </Reveal>
      ))}
    </div>
  );
}
export function VerificationProcess({ lang }: P) {
  const icons = [<Doc key="d" />, <Lens key="l" />, <Check key="c" width={24} height={24} />];
  return (
    <div className="process">
      {C.verification.process.map((p, i) => (
        <Reveal key={i} className="proc" delay={i * 260}>
          <span className="proc-ic">{icons[i]}</span>
          <div><b>{tx(lang, p.t)}</b><span>{tx(lang, p.d)}</span></div>
        </Reveal>
      ))}
    </div>
  );
}
export function PrivacyNote({ lang }: P) {
  return <Reveal className="privacy-note"><b>{tx(lang, C.verification.privacyH)}</b><p className="muted">{tx(lang, C.verification.privacyP)}</p></Reveal>;
}
export function VerificationSection({ lang }: P) {
  const v = C.verification;
  return (
    <section className="section" aria-labelledby="ver-h">
      <div className="container">
        <SectionHead overline={tx(lang, v.overline)} lead={tx(lang, v.p)}>{tx(lang, v.h)}</SectionHead>
        <VerificationLayers lang={lang} />
        <VerificationProcess lang={lang} />
        <PrivacyNote lang={lang} />
        <div className="actions" style={{ marginBlockStart: 32 }}><Link className="btn btn-green" href={href(lang, "/verification")}>{tx(lang, v.cta)} <Arrow /></Link></div>
      </div>
    </section>
  );
}

/* ---------- journey ---------- */
export function JourneyLine({ lang }: P) {
  return (
    <Reveal className="jline">
      <ol aria-label={tx(lang, C.journey.h)}>
        {C.journey.stops.map((s) => (
          <li className="jstop" key={s.k}><span className="ic"><JourneyIcon k={s.k} /></span>{tx(lang, s.t)}</li>
        ))}
      </ol>
    </Reveal>
  );
}
export function JourneySection({ lang }: P) {
  const j = C.journey;
  return (
    <section className="section alt" aria-labelledby="jr-h">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="jr-h" className="display h-xl">{tx(lang, j.h)}</h2>
          <p className="lead">{tx(lang, j.p)}</p>
        </Reveal>
        <JourneyLine lang={lang} />
        <div className="land" style={{ marginBlockStart: "clamp(56px,8vw,112px)" }}>
          <Reveal>
            <h3 className="display h-lg">{tx(lang, j.landH)}</h3>
            <ol className="land-list">
              {j.landItems.map((it, i) => <li key={i}><span>{String(i + 1).padStart(2, "0")}</span><span>{tx(lang, it)}</span></li>)}
            </ol>
          </Reveal>
          <div className="mosaic">
            <Reveal as="figure" img className="m1" style={{ "--d": "0ms" } as CSSProperties}><Img src="/images/ecosystem/ecosystem-staircase.webp" alt={tx(lang, j.alts.a)} /></Reveal>
            <Reveal as="figure" img className="m2" delay={80}><Img src="/images/construction/construction-crane.webp" alt={tx(lang, j.alts.b)} /></Reveal>
            <Reveal as="figure" img className="m3" delay={160}><Img src="/images/architecture/arch-model.webp" alt={tx(lang, j.alts.d)} /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- phones ---------- */
export function Phone({ src, label, cls = "", lang, delay = 0 }: { src: string; label: string; cls?: string; lang: Lang; delay?: number }) {
  void lang;
  return (
    <Reveal as="figure" className={`phone phone-enter ${cls}`} delay={delay}>
      <div className="phone-frame"><div className="scr"><Img src={src} alt={label} w={400} h={867} /></div></div>
      <figcaption>{label}</figcaption>
    </Reveal>
  );
}
export function AppPreview({ lang }: P) {
  const a = C.app;
  return (
    <section className="section" aria-labelledby="app-h">
      <div className="container">
        <Reveal className="section-head" >
          <h2 id="app-h" className="display h-xl">{tx(lang, a.h)}</h2>
          <p className="lead">{tx(lang, a.p)}</p>
        </Reveal>
        <PhoneShowcase lang={lang} />
        <p className="app-note">{tx(lang, a.note)}</p>
      </div>
    </section>
  );
}

/* ---------- why ---------- */
export function WhyAqarati({ lang }: P) {
  const w = C.why;
  return (
    <section className="section alt" aria-labelledby="why-h">
      <div className="container">
        <SectionHead>{tx(lang, w.h)}</SectionHead>
        <div className="pillars">
          {w.pillars.map((p, i) => (
            <Reveal key={i} className="pillar" delay={i * 80}><h3>{tx(lang, p.t)}</h3><p>{tx(lang, p.d)}</p></Reveal>
          ))}
        </div>
        <Reveal><h3 className="display h-lg" style={{ marginBlockStart: 72 }}>{tx(lang, w.diffH)}</h3></Reveal>
        <div className="versus">
          <Reveal className="vs before"><h3>{tx(lang, w.before.t)}</h3><ul>{txl(lang, w.before.items).map((x) => <li key={x}>{x}</li>)}</ul></Reveal>
          <Reveal className="vs after" delay={100}><h3>{tx(lang, w.after.t)}</h3><ul>{txl(lang, w.after.items).map((x) => <li key={x}>{x}</li>)}</ul></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- final CTA ---------- */
export function FinalCta({ lang }: P) {
  const f = C.finalCta;
  return (
    <section className="cta-band section" id="get-started" aria-labelledby="cta-h">
      <AnimatedMotif className="motif" />
      <div className="container">
        <Reveal>
          <h2 id="cta-h" className="display h-xl">{tx(lang, f.h)}</h2>
          <p>{tx(lang, f.p)}</p>
          <div className="actions">
            <AppLink lang={lang} className="btn btn-light">{tx(lang, f.primary)} <Arrow /></AppLink>
            <Link className="btn btn-ghost-light" href={href(lang, "/how-it-works")}>{tx(lang, f.secondary)}</Link>
          </div>
          {!site.appUrl && <p className="badge-soon" style={{ marginBlockStart: 16, fontSize: "0.875rem" }}>{tx(lang, ui.soon)}</p>}
        </Reveal>
      </div>
    </section>
  );
}
