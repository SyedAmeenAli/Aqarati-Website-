export type Lang = "en" | "ar";
export const langs: Lang[] = ["en", "ar"];
export type T = { en: string; ar: string };
export type TL = { en: string[]; ar: string[] };
export const isLang = (v: string): v is Lang => v === "en" || v === "ar";
export const tx = (l: Lang, v: T) => v[l];
export const txl = (l: Lang, v: TL) => v[l];
export const dirOf = (l: Lang) => (l === "ar" ? "rtl" : "ltr");
/** Build a localized path. English has no prefix. */
export const href = (l: Lang, path: string) => {
  const p = path === "/" ? "" : path;
  return l === "ar" ? `/ar${p}` || "/ar" : p || "/";
};
/** Replace "{fee}" style tokens. */
export const fill = (s: string, vars: Record<string, string>) =>
  Object.entries(vars).reduce((a, [k, v]) => a.replaceAll(`{${k}}`, v), s);
export const num = (l: Lang, n: number) => new Intl.NumberFormat(l === "ar" ? "ar-OM-u-nu-latn" : "en-GB").format(n);
export const longDate = (l: Lang, iso: string) => new Intl.DateTimeFormat(l === "ar" ? "ar-OM-u-nu-latn" : "en-GB", { dateStyle: "long" }).format(new Date(iso));
