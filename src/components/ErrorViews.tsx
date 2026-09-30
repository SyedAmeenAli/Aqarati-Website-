"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { notFound as nf } from "@/content/ui";
import { href, type Lang } from "@/lib/i18n";
import { Arrow } from "./Icons";

const useLang = (): Lang => ((usePathname() || "").startsWith("/ar") ? "ar" : "en");

export function NotFoundView() {
  const lang = useLang();
  return (
    <section className="notfound">
      <div className="container">
        <p className="overline" style={{ justifyContent: "center" }}>404</p>
        <h1 className="display h-xl">{nf.title[lang]}</h1>
        <p className="lead" style={{ marginInline: "auto" }}>{nf.body[lang]}</p>
        <div className="actions" style={{ justifyContent: "center", marginBlockStart: 28 }}><Link className="btn btn-red" href={href(lang, "/")}>{nf.cta[lang]} <Arrow /></Link></div>
      </div>
    </section>
  );
}

export function ErrorView({ reset }: { reset: () => void }) {
  const lang = useLang();
  return (
    <section className="notfound">
      <div className="container">
        <h1 className="display h-xl">{nf.errTitle[lang]}</h1>
        <p className="lead" style={{ marginInline: "auto" }}>{nf.errBody[lang]}</p>
        <div className="actions" style={{ justifyContent: "center", marginBlockStart: 28 }}>
          <button type="button" className="btn btn-red" onClick={reset}>{nf.retry[lang]}</button>
          <Link className="btn btn-line" href={href(lang, "/")}>{nf.cta[lang]}</Link>
        </div>
      </div>
    </section>
  );
}
