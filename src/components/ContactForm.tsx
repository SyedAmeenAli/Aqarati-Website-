"use client";
import { useState } from "react";
import { contact } from "@/content/pages";
import { tx, type Lang } from "@/lib/i18n";

type State = "idle" | "loading" | "success" | "failure";
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function ContactForm({ lang }: { lang: Lang }) {
  const f = contact.f;
  const [state, setState] = useState<State>("idle");
  const [errs, setErrs] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = { topic: String(fd.get("topic") || ""), name: String(fd.get("name") || "").trim(), email: String(fd.get("email") || "").trim(), message: String(fd.get("message") || "").trim(), website: String(fd.get("website") || "") };
    const er: Record<string, string> = {};
    if (!v.name) er.name = tx(lang, f.required);
    if (!v.email) er.email = tx(lang, f.required); else if (!emailOk(v.email)) er.email = tx(lang, f.badEmail);
    if (!v.message) er.message = tx(lang, f.required);
    setErrs({});
    if (Object.keys(er).length) { requestAnimationFrame(() => setErrs(er)); return; }
    setState("loading");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      const j = await r.json().catch(() => ({}));
      setState(r.ok && j.ok ? "success" : "failure");
      if (r.ok && j.ok) (e.target as HTMLFormElement).reset();
    } catch { setState("failure"); }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="topic">{tx(lang, f.topic)}</label>
        <select id="topic" name="topic" defaultValue="general">{contact.topics.map((t) => <option key={t.id} value={t.id}>{tx(lang, t.t)}</option>)}</select>
      </div>
      <div className={`field ${errs.name ? "has-err" : ""}`}>
        <label htmlFor="name">{tx(lang, f.name)}</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={!!errs.name} aria-describedby={errs.name ? "e-name" : undefined} />
        {errs.name && <span className="err" id="e-name">{errs.name}</span>}
      </div>
      <div className={`field ${errs.email ? "has-err" : ""}`}>
        <label htmlFor="email">{tx(lang, f.email)}</label>
        <input id="email" name="email" type="email" autoComplete="email" dir="ltr" aria-invalid={!!errs.email} aria-describedby={errs.email ? "e-email" : undefined} />
        {errs.email && <span className="err" id="e-email">{errs.email}</span>}
      </div>
      <div className={`field ${errs.message ? "has-err" : ""}`}>
        <label htmlFor="message">{tx(lang, f.msg)}</label>
        <textarea id="message" name="message" aria-invalid={!!errs.message} aria-describedby={errs.message ? "e-msg" : undefined} />
        {errs.message && <span className="err" id="e-msg">{errs.message}</span>}
      </div>
      {/* honeypot */}
      <div aria-hidden="true" className="sr-only"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div><button className="btn btn-red" type="submit" disabled={state === "loading"}>{state === "loading" ? tx(lang, f.sending) : tx(lang, f.send)}</button></div>
      <div aria-live="polite">
        {state === "success" && <p className="form-msg ok"><svg className="check-draw" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path pathLength={1} d="M4 12.5l5 5L20 6.5" /></svg>{tx(lang, f.success)}</p>}
        {state === "failure" && <p className="form-msg bad">{tx(lang, f.failure)}</p>}
      </div>
    </form>
  );
}
