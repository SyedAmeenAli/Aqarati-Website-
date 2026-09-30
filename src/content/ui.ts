import type { T } from "@/lib/i18n";

export const nav: { key: string; path: string; label: T }[] = [
  { key: "why", path: "/about", label: { en: "Why Aqarati", ar: "لماذا عقاراتي" } },
  { key: "how", path: "/how-it-works", label: { en: "How It Works", ar: "كيف يعمل" } },
  { key: "you", path: "/for-buyers", label: { en: "For You", ar: "لك أنت" } },
  { key: "ver", path: "/verification", label: { en: "Verification", ar: "التوثيق" } },
  { key: "about", path: "/about", label: { en: "About", ar: "من نحن" } },
];

/** "For You" dropdown / mobile list */
export const audienceNav: { path: string; label: T }[] = [
  { path: "/for-buyers", label: { en: "For Buyers", ar: "للباحثين عن عقار" } },
  { path: "/for-property-owners", label: { en: "For Owners", ar: "للمُلّاك" } },
  { path: "/for-agents", label: { en: "For Agents & Brokers", ar: "للوكلاء والوسطاء" } },
  { path: "/for-professionals", label: { en: "For Professionals", ar: "للمهنيين" } },
];

export const mobileNav: { path: string; label: T }[] = [
  { path: "/about", label: { en: "Why Aqarati", ar: "لماذا عقاراتي" } },
  { path: "/how-it-works", label: { en: "How It Works", ar: "كيف يعمل" } },
  { path: "/for-buyers", label: { en: "For Buyers", ar: "للباحثين عن عقار" } },
  { path: "/for-property-owners", label: { en: "For Owners", ar: "للمُلّاك" } },
  { path: "/for-professionals", label: { en: "For Professionals", ar: "للمهنيين" } },
  { path: "/verification", label: { en: "Verification", ar: "التوثيق" } },
  { path: "/aqarati-broker", label: { en: "Aqarati Broker", ar: "وسيط عقاراتي" } },
  { path: "/about", label: { en: "About", ar: "من نحن" } },
  { path: "/faq", label: { en: "FAQ", ar: "الأسئلة الشائعة" } },
  { path: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export const ui = {
  openAqarati: { en: "Open Aqarati", ar: "افتح عقاراتي" } as T,
  getStarted: { en: "Get Started", ar: "ابدأ الآن" } as T,
  menu: { en: "Menu", ar: "القائمة" } as T,
  close: { en: "Close", ar: "إغلاق" } as T,
  skip: { en: "Skip to content", ar: "انتقل إلى المحتوى" } as T,
  theme: { en: "Toggle colour theme", ar: "تبديل المظهر" } as T,
  language: { en: "Language", ar: "اللغة" } as T,
  primaryNav: { en: "Primary", ar: "القائمة الرئيسية" } as T,
  learnMore: { en: "Learn more", ar: "اعرف المزيد" } as T,
  example: { en: "Example", ar: "مثال" } as T,
  soon: { en: "App link coming soon", ar: "رابط التطبيق قريبًا" } as T,
  footerStatement: { en: "Oman's property ecosystem.", ar: "المنظومة العقارية في سلطنة عُمان." } as T,
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." } as T,
  cols: {
    explore: { en: "Explore", ar: "استكشف" } as T,
    company: { en: "Company", ar: "الشركة" } as T,
    legal: { en: "Legal", ar: "قانوني" } as T,
    connect: { en: "Connect", ar: "تواصل" } as T,
  },
  footerLinks: {
    explore: [
      { path: "/how-it-works", label: { en: "How it works", ar: "كيف يعمل" } },
      { path: "/for-buyers", label: { en: "For buyers", ar: "للباحثين عن عقار" } },
      { path: "/for-property-owners", label: { en: "For owners", ar: "للمُلّاك" } },
      { path: "/for-professionals", label: { en: "For professionals", ar: "للمهنيين" } },
      { path: "/verification", label: { en: "Verification", ar: "التوثيق" } },
      { path: "/aqarati-broker", label: { en: "Aqarati Broker", ar: "وسيط عقاراتي" } },
      { path: "/ecosystem", label: { en: "The ecosystem", ar: "المنظومة" } },
    ],
    company: [
      { path: "/about", label: { en: "About", ar: "من نحن" } },
      { path: "/faq", label: { en: "FAQ", ar: "الأسئلة الشائعة" } },
      { path: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
    ],
    legal: [
      { path: "/privacy", label: { en: "Privacy", ar: "الخصوصية" } },
      { path: "/cookies", label: { en: "Cookies", ar: "ملفات الارتباط" } },
      { path: "/terms", label: { en: "Terms", ar: "الشروط" } },
    ],
  },
  cookiePrefs: { en: "Cookie preferences", ar: "تفضيلات ملفات الارتباط" } as T,
  noSocial: { en: "Social channels will be listed here once they are live.", ar: "ستُعرض قنوات التواصل هنا عند إطلاقها." } as T,
};

export const notFound = {
  title: { en: "That page doesn't exist.", ar: "هذه الصفحة غير موجودة." } as T,
  body: { en: "The link may be old, or the page may have moved.", ar: "قد يكون الرابط قديمًا أو أن الصفحة نُقلت." } as T,
  cta: { en: "Return to Aqarati", ar: "العودة إلى عقاراتي" } as T,
  errTitle: { en: "Something went wrong.", ar: "حدث خطأ ما." } as T,
  errBody: { en: "Please try again in a moment.", ar: "يُرجى المحاولة مرة أخرى بعد قليل." } as T,
  retry: { en: "Try again", ar: "حاول مرة أخرى" } as T,
};

export const cookieUi = {
  banner: { en: "We use cookies to keep Aqarati working and understand how the website is used.", ar: "نستخدم ملفات الارتباط لتشغيل عقاراتي وفهم كيفية استخدام الموقع." } as T,
  acceptAll: { en: "Accept all", ar: "قبول الكل" } as T,
  manage: { en: "Manage preferences", ar: "إدارة التفضيلات" } as T,
  reject: { en: "Reject non-essential", ar: "رفض غير الضرورية" } as T,
  title: { en: "Cookie preferences", ar: "تفضيلات ملفات الارتباط" } as T,
  intro: { en: "Choose which cookies Aqarati may use. Necessary cookies are always on because the website needs them.", ar: "اختر ملفات الارتباط التي يمكن لعقاراتي استخدامها. الضرورية مفعّلة دائمًا لأن الموقع يحتاجها." } as T,
  save: { en: "Save preferences", ar: "حفظ التفضيلات" } as T,
  always: { en: "Always active", ar: "مفعّلة دائمًا" } as T,
  cats: [
    { id: "necessary", name: { en: "Necessary", ar: "ضرورية" }, desc: { en: "Remember your cookie choice, language and colour theme.", ar: "لتذكّر اختيارك لملفات الارتباط واللغة والمظهر." } },
    { id: "analytics", name: { en: "Analytics", ar: "التحليلات" }, desc: { en: "Help us understand how the website is used. Not active on this website yet.", ar: "تساعدنا على فهم استخدام الموقع. غير مفعّلة في هذا الموقع حاليًا." } },
    { id: "preferences", name: { en: "Preferences", ar: "التفضيلات" }, desc: { en: "Remember optional settings. Not active on this website yet.", ar: "لتذكّر الإعدادات الاختيارية. غير مفعّلة في هذا الموقع حاليًا." } },
    { id: "marketing", name: { en: "Marketing", ar: "التسويق" }, desc: { en: "Used for advertising measurement. Not used on this website.", ar: "تُستخدم لقياس الإعلانات. غير مستخدمة في هذا الموقع." } },
  ] as { id: "necessary" | "analytics" | "preferences" | "marketing"; name: T; desc: T }[],
  on: { en: "On", ar: "مفعّل" } as T,
  off: { en: "Off", ar: "متوقف" } as T,
};
