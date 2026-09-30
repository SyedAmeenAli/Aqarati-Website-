"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cookieUi } from "@/content/ui";
import { href, type Lang } from "@/lib/i18n";

type Choice = { v: 1; status: "all" | "rejected" | "custom"; analytics: boolean; preferences: boolean; marketing: boolean };
type Optional = "analytics" | "preferences" | "marketing";
const KEY = "aq_consent";
const read = (): Choice | null => {
  try { const r = localStorage.getItem(KEY); if (!r) return null; const c = JSON.parse(r); return c?.v === 1 ? c : null; } catch { return null; }
};

export function CookieConsent({ lang }: { lang: Lang }) {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [modal, setModal] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, preferences: false, marketing: false });
  const back = useRef<HTMLElement | null>(null);

  useEffect(() => { const c = read(); setChoice(c); if (c) setDraft({ analytics: c.analytics, preferences: c.preferences, marketing: c.marketing }); setReady(true); }, []);
  const openPrefs = useCallback(() => { back.current = document.activeElement as HTMLElement; setModal(true); }, []);
  useEffect(() => { window.addEventListener("aq:cookie-prefs", openPrefs); return () => window.removeEventListener("aq:cookie-prefs", openPrefs); }, [openPrefs]);
  useEffect(() => {
    if (!modal) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  const close = () => { setModal(false); back.current?.focus?.(); };
  const save = (c: Choice) => {
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
    setDraft({ analytics: c.analytics, preferences: c.preferences, marketing: c.marketing }); setModal(false);
    if (!choice && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLeaving(true); window.setTimeout(() => { setChoice(c); setLeaving(false); }, 260); } else setChoice(c);
    window.dispatchEvent(new CustomEvent("aq:consent", { detail: c }));
  };
  const all = () => save({ v: 1, status: "all", analytics: true, preferences: true, marketing: true });
  const rej = () => save({ v: 1, status: "rejected", analytics: false, preferences: false, marketing: false });
  const custom = () => save({ v: 1, status: "custom", ...draft });

  if (!ready) return null;
  return (
    <>
      {(!choice || leaving) && !modal && (
        <div className={`cookie ${leaving ? "cookie-out" : ""}`} role="region" aria-label={cookieUi.title[lang]}>
          <p>{cookieUi.banner[lang]} <Link className="tlink" href={href(lang, "/cookies")}>{cookieUi.title[lang]}</Link></p>
          <div className="row">
            <button type="button" className="btn btn-red btn-sm" onClick={all}>{cookieUi.acceptAll[lang]}</button>
            <button type="button" className="btn btn-line btn-sm" onClick={openPrefs}>{cookieUi.manage[lang]}</button>
            <button type="button" className="btn btn-line btn-sm" onClick={rej}>{cookieUi.reject[lang]}</button>
          </div>
        </div>
      )}
      {modal && (
        <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="ck-h">
            <h2 id="ck-h">{cookieUi.title[lang]}</h2>
            <p className="muted">{cookieUi.intro[lang]}</p>
            <div>
              {cookieUi.cats.map((c) => (
                <div className="cat" key={c.id}>
                  <b id={`ck-${c.id}`}>{c.name[lang]}</b>
                  {c.id === "necessary" ? (
                    <span className="always">{cookieUi.always[lang]}</span>
                  ) : (
                    <button type="button" role="switch" className="switch" aria-checked={draft[c.id as Optional]} aria-labelledby={`ck-${c.id}`} onClick={() => setDraft((d) => ({ ...d, [c.id]: !d[c.id as Optional] }))}>
                      <span className="sr-only">{draft[c.id as Optional] ? cookieUi.on[lang] : cookieUi.off[lang]}</span>
                    </button>
                  )}
                  <p>{c.desc[lang]}</p>
                </div>
              ))}
            </div>
            <div className="actions">
              <button type="button" className="btn btn-red" onClick={custom} autoFocus>{cookieUi.save[lang]}</button>
              <button type="button" className="btn btn-line" onClick={all}>{cookieUi.acceptAll[lang]}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
