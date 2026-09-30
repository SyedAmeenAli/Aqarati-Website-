import type { T } from "@/lib/i18n";

/**
 * Founder block. Only the name and title are supplied.
 * `image` and `bio` stay empty until approved material exists; the component then shows
 * a neutral monogram frame instead of inventing a portrait.
 * (Internal note: founder portrait placeholder — replace `image` with an approved photo.)
 */
export const founder = {
  name: { en: "Talal", ar: "طلال" } as T,
  role: { en: "Founder, Aqarati", ar: "المؤسس، عقاراتي" } as T,
  line: { en: "Building Aqarati around a simpler property journey for Oman.", ar: "نبني عقاراتي حول رحلة عقارية أبسط لعُمان." } as T,
  bio: { en: "", ar: "" } as T,
  image: "",
  linkedin: "",
  homeOverline: { en: "Why Aqarati exists", ar: "لماذا وُجدت عقاراتي" } as T,
  homeQuote: { en: "Built with a simple idea: property should feel clearer, more trusted and more connected.", ar: "بُنيت على فكرة بسيطة: أن يكون العقار أوضح وأكثر ثقة وترابطًا." } as T,
  aboutH: { en: "The founder", ar: "المؤسس" } as T,
};
