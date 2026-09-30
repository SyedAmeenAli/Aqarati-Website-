import type { T } from "@/lib/i18n";

export const hero = {
  overline: { en: "Oman's property ecosystem", ar: "المنظومة العقارية في عُمان" } as T,
  h1a: { en: "Property,", ar: "العقار،" } as T,
  h1b: { en: "without the guesswork.", ar: "بلا تخمين." } as T,
  sub: { en: "A simpler way to discover property, connect with trusted professionals, and move through the journey with confidence.", ar: "طريقة أبسط لاكتشاف العقار، والتواصل مع مهنيين موثوقين، والمضي في الرحلة بثقة." } as T,
  primary: { en: "Explore Aqarati", ar: "استكشف عقاراتي" } as T,
  secondary: { en: "How it works", ar: "كيف يعمل" } as T,
  alt: { en: "A modern stone villa with landscaped garden in Oman at golden hour", ar: "فيلا عصرية من الحجر مع حديقة في عُمان وقت الغروب" } as T,
};

export const trust = {
  h: { en: "Built around trust.", ar: "مبنية على الثقة." } as T,
  p: { en: "Different types of verification help people understand who they're dealing with and what has been reviewed.", ar: "تساعد أنواع التوثيق المختلفة الناس على فهم من يتعاملون معه وما الذي تمت مراجعته." } as T,
  items: [
    { t: { en: "Verified people", ar: "أشخاص موثّقون" }, d: { en: "Identity reviewed by Aqarati.", ar: "هوية تمت مراجعتها من عقاراتي." } },
    { t: { en: "Verified businesses", ar: "أعمال موثّقة" }, d: { en: "Professionals who completed business verification.", ar: "مهنيون أتمّوا توثيق أعمالهم." } },
    { t: { en: "Verified properties", ar: "عقارات موثّقة" }, d: { en: "Listings whose documents were reviewed.", ar: "إعلانات تمت مراجعة مستنداتها." } },
  ],
  note: { en: "Verification applies to the people, businesses and properties that complete it. Not everything on Aqarati is verified.", ar: "ينطبق التوثيق على الأشخاص والأعمال والعقارات التي تُكمله. ليس كل ما في عقاراتي موثّقًا." } as T,
};

export const what = {
  overline: { en: "What is Aqarati", ar: "ما هي عقاراتي" } as T,
  h: { en: "More than a property listing.", ar: "أكثر من مجرد إعلان عقاري." } as T,
  statement: { en: "Aqarati brings property discovery, trusted professionals and the wider home journey into one ecosystem.", ar: "تجمع عقاراتي اكتشاف العقار والمهنيين الموثوقين ورحلة المنزل الأوسع في منظومة واحدة." } as T,
  items: [
    { t: { en: "Discover", ar: "اكتشف" }, d: { en: "Find property and services.", ar: "اعثر على العقارات والخدمات." }, c: "red" },
    { t: { en: "Connect", ar: "تواصل" }, d: { en: "Enquire, communicate and arrange the next step.", ar: "استفسر وتواصل ورتّب الخطوة التالية." }, c: "green" },
    { t: { en: "Move forward", ar: "تقدّم" }, d: { en: "Viewings, quotes, transactions and property services.", ar: "المعاينات وعروض الأسعار والمعاملات وخدمات العقار." }, c: "red" },
  ],
  alt: { en: "Facade of a contemporary Omani villa with arched detailing", ar: "واجهة فيلا عُمانية معاصرة بتفاصيل مقوّسة" } as T,
};

export const audiencesSection = {
  h1: { en: "One ecosystem.", ar: "منظومة واحدة." } as T,
  h2: { en: "Six ways to use Aqarati.", ar: "ست طرق لاستخدام عقاراتي." } as T,
};

export type AudienceKey = "buyer" | "owner" | "agent" | "developer" | "construction" | "design";
export const audiences: { key: AudienceKey; n: string; path: string; title: T; line: T; desc: T }[] = [
  { key: "buyer", n: "01", path: "/for-buyers", title: { en: "People looking for property", ar: "الباحثون عن عقار" }, line: { en: "Buy, rent or lease.", ar: "شراء أو إيجار أو استئجار." }, desc: { en: "Search, compare, see what has been verified and connect with the right people.", ar: "ابحث وقارن وتعرّف على ما تم توثيقه وتواصل مع الأشخاص المناسبين." } },
  { key: "owner", n: "02", path: "/for-property-owners", title: { en: "Property owners", ar: "مُلّاك العقارات" }, line: { en: "Sell, rent or manage your property.", ar: "بع عقارك أو أجّره أو أدِره." }, desc: { en: "Present your property clearly and choose how much of the journey you handle yourself.", ar: "اعرض عقارك بوضوح واختر مقدار ما تتولاه بنفسك من الرحلة." } },
  { key: "agent", n: "03", path: "/for-agents", title: { en: "Real estate agents & brokers", ar: "وكلاء ووسطاء العقارات" }, line: { en: "Upload, manage and grow your property presence.", ar: "ارفع عقاراتك وأدِرها ووسّع حضورك." }, desc: { en: "A professional profile, your inventory and your enquiries in one place.", ar: "ملف مهني ومخزونك العقاري واستفساراتك في مكان واحد." } },
  { key: "developer", n: "04", path: "/for-developers", title: { en: "Property developers", ar: "المطوّرون العقاريون" }, line: { en: "Showcase developments and available units.", ar: "اعرض مشاريعك والوحدات المتاحة." }, desc: { en: "Present the whole development, from masterplan to individual units.", ar: "اعرض المشروع كاملًا، من المخطط العام إلى الوحدات." } },
  { key: "construction", n: "05", path: "/for-construction", title: { en: "Construction companies", ar: "شركات المقاولات" }, line: { en: "Connect property owners with the teams that build.", ar: "صِل المُلّاك بفرق البناء." }, desc: { en: "Show your work and receive quote requests from people ready to build.", ar: "اعرض أعمالك واستقبل طلبات عروض الأسعار ممن هم جاهزون للبناء." } },
  { key: "design", n: "06", path: "/for-design", title: { en: "Architects & interior / exterior designers", ar: "المعماريون ومصممو الداخل والخارج" }, line: { en: "Turn ideas and spaces into finished places.", ar: "حوّل الأفكار والمساحات إلى أماكن مكتملة." }, desc: { en: "A portfolio, your services and enquiries from people who need a designer.", ar: "معرض أعمال وخدماتك واستفسارات من يحتاجون إلى مصمم." } },
];

export const howSteps = {
  h: { en: "How Aqarati works", ar: "كيف تعمل عقاراتي" } as T,
  p: { en: "Five simple steps from first search to a property you can manage.", ar: "خمس خطوات بسيطة من أول بحث إلى عقار يمكنك إدارته." } as T,
  steps: [
    { n: "01", t: { en: "Discover", ar: "اكتشف" }, d: { en: "Find a property, professional or service.", ar: "اعثر على عقار أو مهني أو خدمة." } },
    { n: "02", t: { en: "Verify", ar: "تحقّق" }, d: { en: "Understand what has been verified.", ar: "افهم ما الذي تم توثيقه." } },
    { n: "03", t: { en: "Connect", ar: "تواصل" }, d: { en: "Keep enquiries and communication within Aqarati.", ar: "أبقِ الاستفسارات والتواصل داخل عقاراتي." } },
    { n: "04", t: { en: "Move forward", ar: "تقدّم" }, d: { en: "Arrange viewings, quotes and the next step.", ar: "رتّب المعاينات وعروض الأسعار والخطوة التالية." } },
    { n: "05", t: { en: "Manage", ar: "أدِر" }, d: { en: "Keep track of your property journey in one place.", ar: "تابع رحلتك العقارية في مكان واحد." } },
  ],
};

export const broker = {
  overline: { en: "Aqarati Broker", ar: "وسيط عقاراتي" } as T,
  h: { en: "Aqarati can handle the journey.", ar: "عقاراتي تتولى الرحلة معك." } as T,
  p: { en: "Tell us what you need and, where the service is available, Aqarati Broker can help coordinate the next steps.", ar: "أخبرنا بما تحتاجه، وحيثما تتوفر الخدمة يمكن لوسيط عقاراتي أن يساعد في تنسيق الخطوات التالية." } as T,
  buyers: { t: { en: "For buyers", ar: "للمشترين" } as T, lines: { en: ["Tell us what you're looking for.", "We help identify suitable opportunities.", "We help coordinate enquiries and viewings.", "We help move the process forward."], ar: ["أخبرنا بما تبحث عنه.", "نساعد في تحديد الفرص المناسبة.", "نساعد في تنسيق الاستفسارات والمعاينات.", "نساعد في دفع العملية إلى الأمام."] } },
  owners: { t: { en: "For owners", ar: "للمُلّاك" } as T, lines: { en: ["Tell us about your property.", "We help connect relevant interest.", "We help coordinate enquiries and viewings.", "We help manage the journey."], ar: ["أخبرنا عن عقارك.", "نساعد في ربطه بالمهتمين المناسبين.", "نساعد في تنسيق الاستفسارات والمعاينات.", "نساعد في إدارة الرحلة."] } },
  cta: { en: "About Aqarati Broker", ar: "عن وسيط عقاراتي" } as T,
  caveat: { en: "Aqarati Broker helps coordinate. It does not guarantee a buyer, a sale or a completed transaction.", ar: "يساعد وسيط عقاراتي في التنسيق، ولا يضمن وجود مشترٍ أو إتمام بيع أو صفقة." } as T,
  self: { t: { en: "You can also do it yourself.", ar: "ويمكنك أيضًا أن تتولى الأمر بنفسك." } as T, p: { en: "Search, enquire, arrange viewings and manage your journey yourself through Aqarati.", ar: "ابحث واستفسر ورتّب المعاينات وأدِر رحلتك بنفسك عبر عقاراتي." } as T, lines: { en: ["Search and compare at your own pace.", "Send enquiries directly.", "Arrange viewings yourself.", "You stay in control at every step."], ar: ["ابحث وقارن بالوتيرة التي تناسبك.", "أرسل استفساراتك مباشرة.", "رتّب المعاينات بنفسك.", "تبقى مسيطرًا في كل خطوة."] } },
};

export const fee = {
  overline: { en: "Pricing", ar: "الرسوم" } as T,
  h: { en: "Simple, transparent pricing.", ar: "رسوم بسيطة وشفافة." } as T,
  p: { en: "Where the applicable Aqarati service / convenience fee applies, the rate is {rate}% of the applicable completed transaction.", ar: "حيثما تنطبق رسوم الخدمة / الراحة من عقاراتي، فإن النسبة هي {rate}٪ من قيمة المعاملة المكتملة المعنية." } as T,
  notAll: { en: "The fee does not apply to every Aqarati feature. It is not a government fee or a tax.", ar: "لا تنطبق الرسوم على كل ميزات عقاراتي، وهي ليست رسومًا حكومية ولا ضريبة." } as T,
  tx: { en: "Transaction", ar: "قيمة المعاملة" } as T,
  feeLabel: { en: "Aqarati service / convenience fee", ar: "رسوم خدمة / راحة عقاراتي" } as T,
  result: { en: "Fee", ar: "الرسوم" } as T,
  terms: { en: "See applicable terms before completing a transaction.", ar: "راجع الشروط المعمول بها قبل إتمام أي معاملة." } as T,
};

export const verification = {
  overline: { en: "Verification", ar: "التوثيق" } as T,
  h: { en: "Trust should be visible.", ar: "الثقة يجب أن تكون ظاهرة." } as T,
  p: { en: "Three separate kinds of verification. One does not automatically verify the others.", ar: "ثلاثة أنواع منفصلة من التوثيق. ولا يوثّق أحدها الآخرين تلقائيًا." } as T,
  layers: [
    { n: "01", t: { en: "Identity verified", ar: "هوية موثّقة" }, d: { en: "Identity information has been reviewed according to Aqarati's verification process.", ar: "تمت مراجعة معلومات الهوية وفق عملية التوثيق لدى عقاراتي." } },
    { n: "02", t: { en: "Business verified", ar: "عمل موثّق" }, d: { en: "A professional or business has completed Aqarati's applicable verification process.", ar: "أتمّ مهني أو نشاط تجاري عملية التوثيق المعمول بها لدى عقاراتي." } },
    { n: "03", t: { en: "Property verified", ar: "عقار موثّق" }, d: { en: "A property's submitted information and documents have completed the applicable Aqarati property verification process.", ar: "أتمّت معلومات العقار ومستنداته المقدّمة عملية توثيق العقارات المعمول بها لدى عقاراتي." } },
  ],
  process: [
    { t: { en: "Submit", ar: "قدّم" }, d: { en: "Information and documents", ar: "المعلومات والمستندات" } },
    { t: { en: "Review", ar: "مراجعة" }, d: { en: "Aqarati review process", ar: "عملية المراجعة لدى عقاراتي" } },
    { t: { en: "Decision", ar: "القرار" }, d: { en: "Verified, resubmission or rejected", ar: "موثّق، أو إعادة تقديم، أو مرفوض" } },
  ],
  privacyH: { en: "Verification documents are not public profile content.", ar: "مستندات التوثيق ليست جزءًا من الملف العام." } as T,
  privacyP: { en: "Public profiles show verification status, not private identity documents.", ar: "تعرض الملفات العامة حالة التوثيق، لا مستندات الهوية الخاصة." } as T,
  cta: { en: "See how verification works", ar: "اعرف كيف يعمل التوثيق" } as T,
};

export const journey = {
  h: { en: "From finding a place to making it yours.", ar: "من العثور على مكان إلى جعله مكانك." } as T,
  p: { en: "The property journey rarely ends with a listing. Aqarati is designed to keep the people and services around it within reach.", ar: "نادرًا ما تنتهي الرحلة العقارية عند الإعلان. صُمّمت عقاراتي لتبقي الأشخاص والخدمات المحيطة بالعقار في متناولك." } as T,
  stops: [
    { k: "find", t: { en: "Find", ar: "اعثر" } },
    { k: "verify", t: { en: "Verify", ar: "تحقّق" } },
    { k: "view", t: { en: "View", ar: "عاين" } },
    { k: "connect", t: { en: "Connect", ar: "تواصل" } },
    { k: "decide", t: { en: "Decide", ar: "قرّر" } },
    { k: "transact", t: { en: "Transact", ar: "أتمّم" } },
    { k: "build", t: { en: "Build", ar: "ابنِ" } },
    { k: "design", t: { en: "Design", ar: "صمّم" } },
    { k: "maintain", t: { en: "Maintain", ar: "صُن" } },
  ] as { k: string; t: T }[],
  landH: { en: "From land to home", ar: "من الأرض إلى المنزل" } as T,
  landItems: [
    { en: "Find land or property", ar: "اعثر على أرض أو عقار" },
    { en: "Architecture", ar: "العمارة" },
    { en: "Construction", ar: "البناء" },
    { en: "Interior / exterior design", ar: "التصميم الداخلي والخارجي" },
    { en: "Planning tools, where available", ar: "أدوات التخطيط، حيثما تتوفر" },
    { en: "Maintenance", ar: "الصيانة" },
    { en: "Ongoing ownership", ar: "الملكية المستمرة" },
  ] as T[],
  alts: {
    a: { en: "Omani villa exterior", ar: "واجهة فيلا عُمانية" } as T,
    b: { en: "Construction of a residential building in Oman", ar: "بناء مبنى سكني في عُمان" } as T,
    c: { en: "Warm, finished interior space", ar: "مساحة داخلية مكتملة بألوان دافئة" } as T,
    d: { en: "Architectural model on a desk", ar: "مجسّم معماري على مكتب" } as T,
  },
};

export const app = {
  h: { en: "See Aqarati in action.", ar: "شاهد عقاراتي أثناء العمل." } as T,
  p: { en: "Screens from the Aqarati app design. The website explains; the app is where it happens.", ar: "شاشات من تصميم تطبيق عقاراتي. الموقع يشرح، والتطبيق هو المكان الذي يحدث فيه كل شيء." } as T,
  screens: [
    { id: "home", src: "/images/app/app-home.webp", label: { en: "Home", ar: "الرئيسية" } },
    { id: "search", src: "/images/app/app-search.webp", label: { en: "Search results", ar: "نتائج البحث" } },
    { id: "property", src: "/images/app/app-property.webp", label: { en: "Property detail", ar: "تفاصيل العقار" } },
    { id: "map", src: "/images/app/app-map.webp", label: { en: "Map", ar: "الخريطة" } },
    { id: "verification", src: "/images/app/app-verification.webp", label: { en: "Verification centre", ar: "مركز التوثيق" } },
  ] as { id: string; src: string; label: T }[],
  note: { en: "Design screens shown for illustration. Content and availability in the live app may differ.", ar: "الشاشات المعروضة للتوضيح. قد يختلف المحتوى والتوفر في التطبيق الفعلي." } as T,
};

export const why = {
  h: { en: "Why Aqarati", ar: "لماذا عقاراتي" } as T,
  pillars: [
    { t: { en: "Trust", ar: "الثقة" }, d: { en: "Verification helps make people and properties easier to understand.", ar: "يساعد التوثيق على جعل الأشخاص والعقارات أوضح للفهم." } },
    { t: { en: "Simplicity", ar: "البساطة" }, d: { en: "One place for the property journey.", ar: "مكان واحد للرحلة العقارية." } },
    { t: { en: "People", ar: "الناس" }, d: { en: "Connect users with verified professionals.", ar: "صِل المستخدمين بمهنيين موثّقين." } },
    { t: { en: "Oman", ar: "عُمان" }, d: { en: "Built around the Omani property ecosystem.", ar: "مبنية حول المنظومة العقارية العُمانية." } },
  ],
  diffH: { en: "A different way to move through property.", ar: "طريقة مختلفة للتعامل مع العقار." } as T,
  before: { t: { en: "Traditionally", ar: "تقليديًا" } as T, items: { en: ["Search in one place", "Contact separately", "Keep documents elsewhere", "Find professionals separately", "Follow up manually"], ar: ["تبحث في مكان", "وتتواصل في مكان آخر", "وتحفظ المستندات في مكان ثالث", "وتبحث عن المهنيين منفصلًا", "وتتابع يدويًا"] } },
  after: { t: { en: "With Aqarati", ar: "مع عقاراتي" } as T, items: { en: ["Discover", "Verify", "Connect", "Manage", "Move forward"], ar: ["اكتشف", "تحقّق", "تواصل", "أدِر", "تقدّم"] } },
};

export const finalCta = {
  h: { en: "Your property journey starts with clarity.", ar: "رحلتك العقارية تبدأ بالوضوح." } as T,
  p: { en: "Discover property. Connect with people. Move forward with Aqarati.", ar: "اكتشف العقار. تواصل مع الناس. تقدّم مع عقاراتي." } as T,
  primary: { en: "Open Aqarati", ar: "افتح عقاراتي" } as T,
  secondary: { en: "Learn how it works", ar: "تعرّف على آلية العمل" } as T,
};
