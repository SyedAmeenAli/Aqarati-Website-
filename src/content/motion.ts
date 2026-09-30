import type { T } from "@/lib/i18n";
const a = (en: string, ar: string): T => ({ en, ar });

/** Desktop "For You" mega menu. */
export const megaMenu = {
  label: a("For You", "لك أنت"),
  title: a("For you", "لك أنت"),
  items: [
    { path: "/for-buyers", t: a("For buyers", "للباحثين عن عقار"), d: a("Find your next property.", "اعثر على عقارك القادم."), src: "/images/buyers/buyers-villa-seeb.webp" },
    { path: "/for-property-owners", t: a("For owners", "للمُلّاك"), d: a("Sell or rent your property.", "بع عقارك أو أجّره."), src: "/images/owners/owners-garden.webp" },
    { path: "/for-agents", t: a("Agents & brokers", "الوكلاء والوسطاء"), d: a("Manage your professional property presence.", "أدِر حضورك العقاري المهني."), src: "/images/ecosystem/ecosystem-villa-facade.webp" },
    { path: "/for-developers", t: a("Developers", "المطوّرون"), d: a("Showcase your development.", "اعرض مشروعك."), src: "/images/developers/developer-aerial.webp" },
    { path: "/for-professionals", t: a("Build & design", "البناء والتصميم"), d: a("Construction, architecture and design professionals.", "مهنيو المقاولات والعمارة والتصميم."), src: "/images/construction/construction-crane.webp" },
    { path: "/for-professionals#maintenance", t: a("Maintenance", "الصيانة"), d: a("Property services and ongoing care.", "خدمات العقار والعناية المستمرة."), src: "/images/professionals/maintenance-home.webp" },
  ],
};

export const brokerJourney = {
  h: a("The journey", "الرحلة"),
  steps: [
    { t: a("You", "أنت"), d: a("Tell us what you need.", "أخبرنا بما تحتاجه.") },
    { t: a("Aqarati", "عقاراتي"), d: a("Where available, we help coordinate.", "حيثما يتوفر، نساعد في التنسيق.") },
    { t: a("Property", "العقار"), d: a("Suitable opportunities come into view.", "تظهر الفرص المناسبة.") },
    { t: a("Enquiry", "الاستفسار"), d: a("Questions stay within Aqarati.", "تبقى الأسئلة داخل عقاراتي.") },
    { t: a("Viewing", "المعاينة"), d: a("Arranged and coordinated.", "تُرتَّب وتُنسَّق.") },
    { t: a("Next step", "الخطوة التالية"), d: a("You decide how to move forward.", "أنت تقرر كيف تتقدم.") },
  ],
};

export const keyCustody = {
  h: a("Keep your keys with us — if you choose.", "احتفظ بمفاتيحك لدينا — إن اخترت ذلك."),
  p: a("Property owners can optionally use Aqarati key custody where the service is available.", "يمكن لمُلّاك العقارات استخدام حفظ المفاتيح من عقاراتي اختياريًا حيثما تتوفر الخدمة."),
  steps: [
    { t: a("Handover", "التسليم"), d: a("You choose to hand the keys over.", "تختار تسليم المفاتيح.") },
    { t: a("Custody", "الحفظ"), d: a("The keys are held for the property.", "تُحفظ المفاتيح للعقار.") },
    { t: a("Approved viewing", "معاينة معتمدة"), d: a("A viewing is approved first.", "تُعتمد المعاينة أولًا.") },
    { t: a("Return", "الإرجاع"), d: a("The keys come back to you.", "تعود المفاتيح إليك.") },
  ],
};

export const ecosystemMap = {
  root: a("Aqarati", "عقاراتي"),
  home: a("Property / Home journey", "العقار / رحلة المنزل"),
  roles: [a("Buyer", "مشترٍ"), a("Owner", "مالك"), a("Agent", "وكيل"), a("Developer", "مطوّر"), a("Construction", "مقاولات"), a("Design", "تصميم"), a("Maintenance", "صيانة")],
};

export const verificationFlow = {
  decision: a("Verified, resubmission or rejected", "موثّق، أو إعادة تقديم، أو مرفوض"),
};

export const ctl = {
  prev: a("Previous", "السابق"),
  next: a("Next", "التالي"),
  close: a("Close", "إغلاق"),
  enlarge: a("Enlarge image", "تكبير الصورة"),
  gallery: a("Image viewer", "عارض الصور"),
  carousel: a("Carousel", "شريط متحرك"),
  slide: a("Slide", "شريحة"),
  tabs: a("App screens", "شاشات التطبيق"),
  toTop: a("Back to top", "العودة إلى الأعلى"),
};
