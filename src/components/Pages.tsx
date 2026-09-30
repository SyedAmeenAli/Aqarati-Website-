import Link from "next/link";
import { feePercent, site } from "@/config/site";
import { audiencePages, professionalsPage, type AudiencePage } from "@/content/audiencePages";
import { faqCategories, faqPage } from "@/content/faq";
import * as H from "@/content/home";
import type { LegalDoc } from "@/content/legal";
import * as PG from "@/content/pages";
import { ui } from "@/content/ui";
import { fill, href, longDate, tx, type Lang } from "@/lib/i18n";
import type { CSSProperties } from "react";
import { brokerJourney, keyCustody } from "@/content/motion";
import { founder } from "@/content/founder";
import { AppLink } from "./AppLink";
import { EcosystemMap } from "./EcosystemMap";
import { FlowSteps } from "./Flow";
import { FounderCard } from "./Founder";
import { HorizontalCarousel } from "./HorizontalCarousel";
import { PhotoRow } from "./PhotoRow";
import { ContactForm } from "./ContactForm";
import { Arrow, Check } from "./Icons";
import { BrokerIllustration } from "./Illustrations";
import { Reveal } from "./Reveal";
import { Audiences, BrokerSection, FeeCard, FinalCta, Img, Phone, JourneyLine, PrivacyNote, SectionHead, SelfManaged, StepTimeline, VerificationLayers, VerificationProcess } from "./Sections";

type P = { lang: Lang };

type Variant = "rise" | "line" | "quiet";
export function PageHero({ overline, h1, lead, children, variant = "rise" }: { overline?: string; h1: string; lead?: string; children?: React.ReactNode; variant?: Variant }) {
  return (
    <header className="page-hero" data-variant={variant}>
      <div className="container">
        {overline && <p className="overline">{overline}</p>}
        <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6.4vw, 5rem)" }}>{h1}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children && <div className="actions" style={{ marginBlockStart: 32 }}>{children}</div>}
        {variant === "line" && <span className="hero-line" aria-hidden="true" />}
      </div>
    </header>
  );
}

/* ---------- audience pages (buyers, owners, agents, developers, construction, design) ---------- */
export const findAudience = (slug: string) => audiencePages.find((p) => p.slug === slug)!;

export function AudiencePageView({ lang, page }: P & { page: AudiencePage }) {
  const n = page.images.length;
  const withBroker = page.slug === "for-buyers" || page.slug === "for-property-owners";
  const withVerification = page.slug !== "for-buyers";
  return (
    <>
      <PageHero overline={tx(lang, page.overline)} h1={tx(lang, page.h1)} lead={tx(lang, page.lead)}>
        <AppLink lang={lang} className="btn btn-red">{tx(lang, page.cta)} <Arrow /></AppLink>
        <Link className="btn btn-line" href={href(lang, "/how-it-works")}>{tx(lang, H.hero.secondary)}</Link>
      </PageHero>
      <section className="section tight">
        <div className="container">
          <PhotoRow lang={lang} className={`img-row n${Math.min(n, 4)}`} photos={page.images.map((im) => ({ src: im.src, alt: tx(lang, im.alt) }))} />
        </div>
      </section>
      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <Reveal className="section-head"><h2 id="feat-h" className="display h-xl">{tx(lang, page.itemsH)}</h2></Reveal>
          <div className="feature-grid">
            {page.items.map((it, i) => (
              <Reveal key={i} className="feature" delay={(i % 2) * 70}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <b>{tx(lang, it.t)}</b>
                <p>{tx(lang, it.d)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt" aria-labelledby="app-spot-h">
        <div className="container split">
          <Reveal>
            <p className="overline">{tx(lang, H.app.h)}</p>
            <h2 id="app-spot-h" className="display h-xl" style={{ marginBlock: "20px" }}>{tx(lang, page.app.label)}</h2>
            <p className="lead">{tx(lang, H.app.p)}</p>
            <p className="small muted" style={{ marginBlockStart: 16 }}>{tx(lang, H.app.note)}</p>
          </Reveal>
          <div className="app-spot"><Phone lang={lang} src={page.app.src} label={tx(lang, page.app.label)} /></div>
        </div>
      </section>
      {page.slug === "for-property-owners" && (
        <section className="section" aria-labelledby="custody-h">
          <div className="container">
            <Reveal className="section-head"><h2 id="custody-h" className="display h-xl">{tx(lang, keyCustody.h)}</h2><p className="lead">{tx(lang, keyCustody.p)}</p></Reveal>
            <FlowSteps lang={lang} steps={keyCustody.steps} />
          </div>
        </section>
      )}
      {withBroker && <BrokerSection lang={lang} />}
      {withVerification && (
        <section className="section alt">
          <div className="container">
            <SectionHead overline={tx(lang, H.verification.overline)} lead={tx(lang, H.verification.p)}>{tx(lang, H.verification.h)}</SectionHead>
            <VerificationLayers lang={lang} />
            <div className="actions" style={{ marginBlockStart: 32 }}><Link className="btn btn-green" href={href(lang, "/verification")}>{tx(lang, H.verification.cta)} <Arrow /></Link></div>
          </div>
        </section>
      )}
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- professionals master ---------- */
export function ProfessionalsView({ lang }: P) {
  const p = professionalsPage;
  return (
    <>
      <PageHero overline={tx(lang, p.overline)} h1={tx(lang, p.h1)} lead={tx(lang, p.lead)}>
        <AppLink lang={lang} className="btn btn-red">{tx(lang, p.cta)} <Arrow /></AppLink>
      </PageHero>
      <section className="section tight">
        <div className="container">
          <HorizontalCarousel lang={lang} label={tx(lang, p.h1)} desktopGrid className="pro-carousel">
            {p.panels.map((x, i) => (
              <Link key={x.src + i} href={href(lang, x.path)} className="pro-panel">
                <Img src={x.src} alt="" w={1000} h={914} />
                <div className="txt"><h3>{tx(lang, x.t)}</h3><p>{tx(lang, x.d)}</p><span className="go">{tx(lang, ui.learnMore)} <Arrow width={16} height={16} /></span></div>
              </Link>
            ))}
          </HorizontalCarousel>
        </div>
      </section>
      <section className="section" id="maintenance">
        <div className="container split">
          <Reveal>
            <h2 className="display h-xl">{tx(lang, p.maintenanceH)}</h2>
            <p className="lead" style={{ marginBlockStart: 20 }}>{tx(lang, p.maintenanceP)}</p>
          </Reveal>
          <Reveal img className="wide-img" ><Img src="/images/professionals/maintenance-ac.webp" alt="" w={1000} h={914} /></Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal className="section-head"><h2 className="display h-xl">{tx(lang, p.journeyH)}</h2></Reveal>
          <Reveal className="tl">
            {p.journey.map((j, i) => (
              <div className="tl-step" key={i} style={{ "--i": i } as CSSProperties}>
                <span className="tl-num">{String(i + 1).padStart(2, "0")}</span>
                <p style={{ color: "var(--ink)", fontFamily: "var(--f-display)", fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.25 }}>{tx(lang, j)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead overline={tx(lang, H.verification.overline)} lead={tx(lang, H.verification.p)}>{tx(lang, H.verification.h)}</SectionHead>
          <VerificationLayers lang={lang} />
        </div>
      </section>
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- about ---------- */
export function AboutView({ lang }: P) {
  const a = PG.about;
  return (
    <>
      <PageHero variant="line" h1={tx(lang, a.h1)} lead={tx(lang, a.lead)} />
      <section className="section tight"><div className="container"><Reveal img className="wide-img"><Img src={a.images[0].src} alt={tx(lang, a.images[0].alt)} eager /></Reveal></div></section>
      <section className="section">
        <div className="container">
          {a.sections.map((s) => (
            <div key={s.id}>
              <Reveal className="about-row">
                <div id={s.id} className="about-in">
                  <h2 className="display h-lg">{tx(lang, s.t)}</h2>
                  <p className="lead">{tx(lang, s.p)}</p>
                </div>
              </Reveal>
              {s.id === "ecosystem" && (
                <Reveal className="about-row">
                  <div id="founder" className="about-in">
                    <h2 className="display h-lg">{tx(lang, founder.aboutH)}</h2>
                    <FounderCard lang={lang} />
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="section tight"><div className="container"><Reveal img className="wide-img"><Img src={a.images[1].src} alt={tx(lang, a.images[1].alt)} /></Reveal></div></section>
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- how it works ---------- */
export function HowView({ lang }: P) {
  const h = PG.howPage;
  return (
    <>
      <PageHero variant="line" h1={tx(lang, h.h1)} lead={tx(lang, h.lead)} />
      <section className="section tight"><div className="container"><StepTimeline lang={lang} /></div></section>
      <section className="section tight"><div className="container"><Reveal img className="wide-img"><Img src={h.image.src} alt={tx(lang, h.image.alt)} w={1376} h={702} /></Reveal></div></section>
      <section className="section alt"><div className="container"><Reveal className="section-head"><h2 className="display h-xl">{tx(lang, h.choose)}</h2></Reveal><SelfManaged lang={lang} /></div></section>
      <BrokerSection lang={lang} />
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- verification ---------- */
export function VerificationView({ lang }: P) {
  const v = PG.verificationPage;
  return (
    <>
      <PageHero variant="line" overline={tx(lang, H.verification.overline)} h1={tx(lang, v.h1)} lead={tx(lang, v.lead)} />
      <section className="section tight">
        <div className="container">
          <Reveal className="section-head"><h2 className="display h-xl">{tx(lang, v.whyH)}</h2><p className="lead">{tx(lang, v.whyP)}</p></Reveal>
          <VerificationLayers lang={lang} />
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal className="section-head"><h2 className="display h-xl">{H.verification.process.map((p) => tx(lang, p.t)).join(" · ")}</h2></Reveal>
          <VerificationProcess lang={lang} />
          <PrivacyNote lang={lang} />
        </div>
      </section>
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <Reveal>
            <h2 className="display h-lg">{tx(lang, v.basicsH)}</h2>
            <ul className="ticks" style={{ marginBlockStart: 24 }}>{v.basics.map((b, i) => <li key={i}><Check />{tx(lang, b)}</li>)}</ul>
            <p className="muted" style={{ marginBlockStart: 20 }}>{tx(lang, v.basicsNote)}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display h-lg">{tx(lang, v.statesH)}</h2>
            <div style={{ marginBlockStart: 24 }}>{v.states.map((s, i) => <div className="feature" key={i} style={{ gridTemplateColumns: "1fr" }}><b>{tx(lang, s.t)}</b><p style={{ gridColumn: 1 }}>{tx(lang, s.d)}</p></div>)}</div>
          </Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Reveal className="section-head"><h2 className="display h-xl">{tx(lang, v.notH)}</h2></Reveal>
          <ul className="ticks red" style={{ maxWidth: "46em" }}>{v.not.map((n, i) => <li key={i}><Check />{tx(lang, n)}</li>)}</ul>
        </div>
      </section>
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- broker page ---------- */
export function BrokerView({ lang }: P) {
  const b = PG.brokerPage;
  return (
    <>
      <PageHero variant="line" overline={tx(lang, H.broker.overline)} h1={tx(lang, b.h1)} lead={tx(lang, H.broker.p)} />
      <section className="section tight">
        <div className="container split">
          <Reveal>
            <h2 className="display h-lg">{tx(lang, b.whatH)}</h2>
            <p className="lead" style={{ marginBlockStart: 18 }}>{tx(lang, b.whatP)}</p>
            <p className="caveat">{tx(lang, H.broker.caveat)}</p>
          </Reveal>
          <Reveal className="broker-art" delay={100}><BrokerIllustration /></Reveal>
        </div>
      </section>
      <BrokerSection lang={lang} link={false} hideArt />
      <section className="section">
        <div className="container">
          <Reveal className="section-head"><h2 className="display h-xl">{tx(lang, b.compareH)}</h2></Reveal>
          <div className="compare" role="table">
            <div className="crow chead" role="row"><span role="columnheader" /><span role="columnheader">{tx(lang, b.colBroker)}</span><span role="columnheader">{tx(lang, b.colSelf)}</span></div>
            {b.rows.map((r, i) => <div className="crow" role="row" key={i}><b role="rowheader">{tx(lang, r[0])}</b><span role="cell">{tx(lang, r[1])}</span><span role="cell">{tx(lang, r[2])}</span></div>)}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container fee-wrap">
          <Reveal>
            <h2 className="display h-xl">{tx(lang, b.feeH)}</h2>
            <p className="lead" style={{ marginBlockStart: 18 }}>{fill(tx(lang, H.fee.p), { rate: String(feePercent) })}</p>
            <p className="muted" style={{ marginBlockStart: 14 }}>{tx(lang, H.fee.notAll)}</p>
            <p style={{ marginBlockStart: 14 }}><Link className="tlink" href={href(lang, "/terms")}>{tx(lang, H.fee.terms)}</Link></p>
          </Reveal>
          <Reveal delay={100}><FeeCard lang={lang} /></Reveal>
        </div>
      </section>
      <section className="section"><div className="container"><Reveal className="section-head"><h2 className="display h-xl">{tx(lang, brokerJourney.h)}</h2></Reveal><FlowSteps lang={lang} steps={brokerJourney.steps} /></div></section>
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- ecosystem ---------- */
export function EcosystemView({ lang }: P) {
  const e = PG.ecosystemPage;
  return (
    <>
      <PageHero variant="line" h1={tx(lang, e.h1)} lead={tx(lang, e.lead)} />
      <section className="section tight"><div className="container"><EcosystemMap lang={lang} /></div></section>
      <section className="section tight">
        <div className="container">
          <ol className="land-list eco-list">
            {e.flow.map((f, i) => (
              <Reveal as="li" key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span><b className="display" style={{ fontSize: "1.5rem", fontWeight: 600, display: "block" }}>{tx(lang, f.t)}</b><span className="muted">{tx(lang, f.d)}</span></span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="section alt"><div className="container"><Reveal className="section-head"><h2 className="display h-xl">{tx(lang, H.journey.h)}</h2></Reveal><JourneyLine lang={lang} /></div></section>
      <Audiences lang={lang} />
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- FAQ ---------- */
export function FaqView({ lang }: P) {
  const rate = String(feePercent);
  return (
    <>
      <PageHero variant="quiet" h1={tx(lang, faqPage.h1)} lead={tx(lang, faqPage.lead)} />
      <section className="section tight">
        <div className="container faq-layout">
          <nav className="faq-nav" aria-label={tx(lang, faqPage.title)}>{faqCategories.map((c) => <a key={c.id} href={`#${c.id}`}>{tx(lang, c.t)}</a>)}</nav>
          <div className="faq" style={{ maxWidth: "52rem" }}>
            {faqCategories.map((c) => (
              <div className="faq-cat" key={c.id} id={c.id}>
                <h2>{tx(lang, c.t)}</h2>
                {c.qs.map((q, i) => (
                  <details key={i}><summary>{fill(tx(lang, q.q), { rate })}</summary><p className="ans">{fill(tx(lang, q.a), { rate })}</p></details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta lang={lang} />
    </>
  );
}

/* ---------- contact ---------- */
export function ContactView({ lang }: P) {
  const c = PG.contact;
  return (
    <>
      <PageHero h1={tx(lang, c.h1)} lead={tx(lang, c.lead)} />
      <section className="section tight">
        <div className="container split" style={{ alignItems: "start" }}>
          <ContactForm lang={lang} />
          <div className="contact-side">
            {site.supportEmail || site.contactPhone ? (
              <>
                <p>{tx(lang, c.f.direct)}</p>
                {site.supportEmail && <p><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></p>}
                {site.contactPhone && <p><a href={`tel:${site.contactPhone}`}>{site.contactPhone}</a></p>}
              </>
            ) : (
              <p>{tx(lang, c.f.none)}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- legal ---------- */
export function LegalView({ lang, doc }: P & { doc: LegalDoc }) {
  const rate = String(feePercent);
  return (
    <>
      <PageHero variant="quiet" h1={tx(lang, doc.title)} />
      <section className="section tight">
        <div className="container">
          <div className="legal">
            <p className="lead">{tx(lang, doc.intro)}</p>
            <p className="updated">{lang === "ar" ? "آخر تحديث" : "Last updated"}: {longDate(lang, site.legalLastUpdated)}</p>
            {doc.sections.map((s, i) => (
              <section key={i} id={`s${i + 1}`}><h2>{i + 1}. {tx(lang, s.t)}</h2><p>{fill(tx(lang, s.p), { rate })}</p></section>
            ))}
            <p style={{ marginBlockStart: 24 }}><Link className="tlink" href={href(lang, "/contact")}>{lang === "ar" ? "تواصل معنا" : "Contact us"} <Arrow width={16} height={16} /></Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
