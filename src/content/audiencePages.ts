import type { T } from "@/lib/i18n";

export type AudiencePage = {
  slug: string;
  title: T; // used for <title>
  description: T;
  overline: T;
  h1: T;
  lead: T;
  itemsH: T;
  items: { t: T; d: T }[];
  images: { src: string; alt: T }[];
  app: { src: string; label: T };
  cta: T;
  closing: T;
};

const a = (en: string, ar: string): T => ({ en, ar });

export const audiencePages: AudiencePage[] = [
  {
    slug: "for-buyers",
    title: a("For buyers", "للباحثين عن عقار"),
    description: a("Search properties, compare options, explore locations and connect through Aqarati.", "ابحث عن العقارات وقارن الخيارات واستكشف المواقع وتواصل عبر عقاراتي."),
    overline: a("For buyers, renters and tenants", "للمشترين والمستأجرين"),
    h1: a("Looking for your next place?", "تبحث عن مكانك القادم؟"),
    lead: a("Search properties, compare options, explore locations and connect through Aqarati.", "ابحث عن العقارات وقارن الخيارات واستكشف المواقع وتواصل عبر عقاراتي."),
    itemsH: a("What you can do", "ما يمكنك فعله"),
    items: [
      { t: a("Search", "البحث"), d: a("Look for property by location and what matters to you.", "ابحث عن العقار حسب الموقع وما يهمك.") },
      { t: a("Property types", "أنواع العقارات"), d: a("Villas, apartments, land, commercial and more.", "فلل وشقق وأراضٍ وعقارات تجارية وغيرها.") },
      { t: a("Buy, rent or lease", "شراء أو إيجار أو استئجار"), d: a("Choose the way you want to move.", "اختر الطريقة التي تناسبك.") },
      { t: a("Verified properties", "عقارات موثّقة"), d: a("See which listings have completed property verification.", "اعرف الإعلانات التي أتمّت توثيق العقار.") },
      { t: a("Nearby places", "الأماكن القريبة"), d: a("Understand the area around a property.", "افهم المنطقة المحيطة بالعقار.") },
      { t: a("Saved properties", "العقارات المحفوظة"), d: a("Keep the ones you like in one place.", "احتفظ بما يعجبك في مكان واحد.") },
      { t: a("Viewings", "المعاينات"), d: a("Arrange a time to see a property.", "رتّب موعدًا لمعاينة العقار.") },
      { t: a("Enquiries", "الاستفسارات"), d: a("Ask questions and keep the conversation in Aqarati.", "اطرح أسئلتك وأبقِ المحادثة داخل عقاراتي.") },
      { t: a("Aqarati Broker", "وسيط عقاراتي"), d: a("Where available, get help coordinating the next steps.", "حيثما يتوفر، احصل على مساعدة في تنسيق الخطوات التالية.") },
      { t: a("Self-managed", "بإدارتك الخاصة"), d: a("Or do it all yourself. You stay in control.", "أو تولَّ كل شيء بنفسك. أنت المتحكم.") },
    ],
    images: [
      { src: "/images/buyers/buyers-villa-seeb.webp", alt: a("A modern Omani villa exterior", "واجهة فيلا عُمانية عصرية") },
      { src: "/images/buyers/buyers-living-room.webp", alt: a("A bright, spacious villa living room", "غرفة معيشة واسعة ومضيئة في فيلا") },
      { src: "/images/ecosystem/ecosystem-pool.webp", alt: a("A villa pool terrace at dusk", "شرفة مسبح في فيلا وقت الغروب") },
    ],
    app: { src: "/images/app/app-search.webp", label: a("Search results in the app", "نتائج البحث في التطبيق") },
    cta: a("Explore Aqarati", "استكشف عقاراتي"),
    closing: a("Start with a place. Aqarati helps with the rest.", "ابدأ بمكان، وعقاراتي تساعدك في الباقي."),
  },
  {
    slug: "for-property-owners",
    title: a("For property owners", "لمُلّاك العقارات"),
    description: a("Add your property, verify it and choose how much of the journey you handle yourself.", "أضف عقارك ووثّقه واختر مقدار ما تتولاه بنفسك من الرحلة."),
    overline: a("For property owners", "لمُلّاك العقارات"),
    h1: a("Your property deserves more than a listing.", "عقارك يستحق أكثر من مجرد إعلان."),
    lead: a("Present your property clearly, verify it, and decide whether you manage the journey yourself or ask Aqarati Broker to help coordinate it.", "اعرض عقارك بوضوح ووثّقه، وقرّر إن كنت ستدير الرحلة بنفسك أم تطلب مساعدة وسيط عقاراتي في تنسيقها."),
    itemsH: a("What you can do", "ما يمكنك فعله"),
    items: [
      { t: a("Add a property", "أضف عقارًا"), d: a("Create a listing step by step.", "أنشئ إعلانك خطوة بخطوة.") },
      { t: a("Upload photos", "ارفع الصور"), d: a("Show the property at its best.", "اعرض العقار بأفضل صورة.") },
      { t: a("Property details", "تفاصيل العقار"), d: a("Describe size, rooms, features and price.", "صِف المساحة والغرف والمزايا والسعر.") },
      { t: a("Property verification", "توثيق العقار"), d: a("Submit documents for review so people can see the status.", "قدّم المستندات للمراجعة ليرى الناس الحالة.") },
      { t: a("Aqarati Broker", "وسيط عقاراتي"), d: a("Where available, ask for help coordinating interest and viewings.", "حيثما يتوفر، اطلب المساعدة في تنسيق الاهتمام والمعاينات.") },
      { t: a("Self-managed", "بإدارتك الخاصة"), d: a("Or handle enquiries and viewings yourself.", "أو تولَّ الاستفسارات والمعاينات بنفسك.") },
      { t: a("Enquiries", "الاستفسارات"), d: a("See who is interested and respond.", "اعرف من المهتم وردّ عليه.") },
      { t: a("Viewings", "المعاينات"), d: a("Set availability and manage requests.", "حدّد أوقات التوفر وأدِر الطلبات.") },
      { t: a("Key custody", "حفظ المفاتيح"), d: a("Where the service is offered, arrange how keys are held for viewings.", "حيثما تُقدَّم الخدمة، رتّب كيفية حفظ المفاتيح للمعاينات.") },
      { t: a("Property journey & documents", "الرحلة العقارية والمستندات"), d: a("Keep track of the property and related documents.", "تابع العقار والمستندات المرتبطة به.") },
    ],
    images: [
      { src: "/images/owners/owners-garden.webp", alt: a("A garden lounge at a villa", "جلسة حديقة في فيلا") },
      { src: "/images/owners/owners-majlis.webp", alt: a("A contemporary Omani majlis interior", "مجلس عُماني معاصر") },
      { src: "/images/ecosystem/ecosystem-entrance-hall.webp", alt: a("A warm entrance hall with timber and stone details", "ردهة دخول دافئة بتفاصيل خشبية وحجرية") },
    ],
    app: { src: "/images/app/app-verification.webp", label: a("Verification centre in the app", "مركز التوثيق في التطبيق") },
    cta: a("List your property", "أدرج عقارك"),
    closing: a("Tell us about your property and choose how you want to move.", "أخبرنا عن عقارك واختر كيف تريد أن تمضي."),
  },
  {
    slug: "for-agents",
    title: a("For agents & brokers", "للوكلاء والوسطاء"),
    description: a("Manage your property presence on Aqarati: listings, enquiries, viewings and a verified professional profile.", "أدِر حضورك العقاري في عقاراتي: الإعلانات والاستفسارات والمعاينات وملف مهني موثّق."),
    overline: a("For real estate agents & brokers", "لوكلاء ووسطاء العقارات"),
    h1: a("Manage your property presence on Aqarati.", "أدِر حضورك العقاري على عقاراتي."),
    lead: a("A professional profile, your inventory and your enquiries in one place.", "ملف مهني ومخزونك العقاري واستفساراتك في مكان واحد."),
    itemsH: a("What you can do", "ما يمكنك فعله"),
    items: [
      { t: a("Upload properties", "ارفع العقارات"), d: a("Add listings with photos and details.", "أضف إعلانات بصورها وتفاصيلها.") },
      { t: a("Manage inventory", "أدِر مخزونك"), d: a("Keep your listings organised and up to date.", "أبقِ إعلاناتك منظمة ومحدّثة.") },
      { t: a("Manage enquiries", "أدِر الاستفسارات"), d: a("Respond to interested people in one inbox.", "ردّ على المهتمين من مكان واحد.") },
      { t: a("Viewings", "المعاينات"), d: a("Coordinate viewing requests.", "نسّق طلبات المعاينة.") },
      { t: a("Professional profile", "الملف المهني"), d: a("Introduce yourself and your services.", "عرّف بنفسك وخدماتك.") },
      { t: a("Business verification", "توثيق النشاط"), d: a("Complete business verification so people can see your status.", "أتمّ توثيق نشاطك ليرى الناس حالته.") },
      { t: a("Property verification", "توثيق العقار"), d: a("Submit listings for property verification.", "قدّم إعلاناتك لتوثيق العقار.") },
      { t: a("Portfolio", "معرض الأعمال"), d: a("Show the properties you have worked with.", "اعرض العقارات التي عملت عليها.") },
      { t: a("Messages", "الرسائل"), d: a("Keep conversations within Aqarati.", "أبقِ المحادثات داخل عقاراتي.") },
    ],
    images: [
      { src: "/images/ecosystem/ecosystem-villa-facade.webp", alt: a("A villa with arched balconies", "فيلا بشرفات مقوّسة") },
      { src: "/images/ecosystem/ecosystem-coast-city.webp", alt: a("A coastal residential neighbourhood in Oman", "حي سكني ساحلي في عُمان") },
    ],
    app: { src: "/images/app/app-home.webp", label: a("Home screen in the app", "الشاشة الرئيسية في التطبيق") },
    cta: a("Join Aqarati", "انضم إلى عقاراتي"),
    closing: a("Bring your listings and your reputation into one professional profile.", "اجمع إعلاناتك وسمعتك في ملف مهني واحد."),
  },
  {
    slug: "for-developers",
    title: a("For property developers", "للمطوّرين العقاريين"),
    description: a("Show the whole development on Aqarati: masterplan, units, availability, amenities and gallery.", "اعرض مشروعك كاملًا على عقاراتي: المخطط العام والوحدات والتوفر والمرافق والمعرض."),
    overline: a("For property developers", "للمطوّرين العقاريين"),
    h1: a("Show the whole development.", "اعرض المشروع كاملًا."),
    lead: a("Present a development the way it deserves, from masterplan to individual units.", "اعرض مشروعك كما يستحق، من المخطط العام إلى الوحدات."),
    itemsH: a("What you can do", "ما يمكنك فعله"),
    items: [
      { t: a("Development profile", "ملف المشروع"), d: a("Tell the story of the development.", "احكِ قصة المشروع.") },
      { t: a("Masterplan", "المخطط العام"), d: a("Show how the development fits together.", "اعرض كيف يتكامل المشروع.") },
      { t: a("Units", "الوحدات"), d: a("List the unit types on offer.", "اعرض أنواع الوحدات المتاحة.") },
      { t: a("Availability", "التوفر"), d: a("Keep availability current.", "أبقِ حالة التوفر محدّثة.") },
      { t: a("Amenities", "المرافق"), d: a("Show what residents get.", "اعرض ما يحصل عليه السكان.") },
      { t: a("Gallery", "المعرض"), d: a("Photography and visuals of the project.", "صور ومرئيات للمشروع.") },
      { t: a("Project details", "تفاصيل المشروع"), d: a("Timelines, location and specifications.", "الجداول الزمنية والموقع والمواصفات.") },
      { t: a("Enquiries", "الاستفسارات"), d: a("Receive enquiries from interested people.", "استقبل استفسارات المهتمين.") },
      { t: a("Professional verification", "التوثيق المهني"), d: a("Complete business verification.", "أتمّ توثيق نشاطك.") },
    ],
    images: [
      { src: "/images/developers/developer-aerial.webp", alt: a("Aerial view of a residential development at dusk", "منظر جوي لمشروع سكني وقت الغروب") },
      { src: "/images/developers/developer-community.webp", alt: a("A planned residential community in Oman", "مجتمع سكني مخطط في عُمان") },
    ],
    app: { src: "/images/app/app-property.webp", label: a("Property detail in the app", "تفاصيل العقار في التطبيق") },
    cta: a("Show your development", "اعرض مشروعك"),
    closing: a("Give a whole community a clear place to be discovered.", "امنح مجتمعًا كاملًا مكانًا واضحًا ليُكتشف."),
  },
  {
    slug: "for-construction",
    title: a("For construction companies", "لشركات المقاولات"),
    description: a("Show your work and receive quote requests from people ready to build.", "اعرض أعمالك واستقبل طلبات عروض الأسعار ممن هم جاهزون للبناء."),
    overline: a("For construction companies", "لشركات المقاولات"),
    h1: a("Build what comes next.", "ابنِ ما هو قادم."),
    lead: a("Connect with property owners who need a team to build.", "تواصل مع مُلّاك العقارات الذين يحتاجون إلى فريق للبناء."),
    itemsH: a("What you can do", "ما يمكنك فعله"),
    items: [
      { t: a("Business profile", "ملف النشاط"), d: a("Introduce your company.", "عرّف بشركتك.") },
      { t: a("Services", "الخدمات"), d: a("List what you build and how.", "اذكر ما تبنيه وكيف.") },
      { t: a("Portfolio", "معرض الأعمال"), d: a("Show finished work.", "اعرض الأعمال المنجزة.") },
      { t: a("Projects", "المشاريع"), d: a("Feature current and completed projects.", "اعرض المشاريع الجارية والمنجزة.") },
      { t: a("Quote requests", "طلبات الأسعار"), d: a("Receive requests from people ready to build.", "استقبل الطلبات ممن هم جاهزون للبناء.") },
      { t: a("Enquiries", "الاستفسارات"), d: a("Answer questions in one place.", "أجب عن الأسئلة في مكان واحد.") },
      { t: a("Verification", "التوثيق"), d: a("Complete business verification.", "أتمّ توثيق نشاطك.") },
    ],
    images: [
      { src: "/images/construction/construction-crane.webp", alt: a("A residential construction site with a tower crane", "موقع بناء سكني مع رافعة برجية") },
      { src: "/images/construction/construction-structure.webp", alt: a("A concrete structural frame under construction", "هيكل خرساني قيد الإنشاء") },
      { src: "/images/construction/construction-finished.webp", alt: a("A finished residential building", "مبنى سكني مكتمل") },
    ],
    app: { src: "/images/app/app-explore.webp", label: a("Explore professionals in the app", "استكشاف المهنيين في التطبيق") },
    cta: a("Join Aqarati", "انضم إلى عقاراتي"),
    closing: a("Let the work you have built introduce the work you will build.", "دع ما بنيته يعرّف بما ستبنيه."),
  },
  {
    slug: "for-design",
    title: a("For architects & designers", "للمعماريين والمصممين"),
    description: a("Show your portfolio, services and projects to people who need an architect or interior / exterior designer.", "اعرض معرض أعمالك وخدماتك ومشاريعك لمن يحتاجون إلى معماري أو مصمم داخلي وخارجي."),
    overline: a("For architects & interior / exterior designers", "للمعماريين ومصممي الداخل والخارج"),
    h1: a("Design spaces people want to live in.", "صمّم مساحات يرغب الناس في العيش فيها."),
    lead: a("A portfolio, your services and enquiries from people who need a designer.", "معرض أعمال وخدماتك واستفسارات من يحتاجون إلى مصمم."),
    itemsH: a("What you can do", "ما يمكنك فعله"),
    items: [
      { t: a("Portfolio", "معرض الأعمال"), d: a("Let your finished spaces speak.", "دع مساحاتك المنجزة تتحدث.") },
      { t: a("Projects", "المشاريع"), d: a("Feature projects in detail.", "اعرض المشاريع بالتفصيل.") },
      { t: a("Services", "الخدمات"), d: a("Architecture, interior and exterior design.", "العمارة والتصميم الداخلي والخارجي.") },
      { t: a("Enquiries", "الاستفسارات"), d: a("Hear from people who need a designer.", "استمع إلى من يحتاجون إلى مصمم.") },
      { t: a("Quotes", "عروض الأسعار"), d: a("Respond to quote requests.", "ردّ على طلبات الأسعار.") },
      { t: a("Business profile", "ملف النشاط"), d: a("A clear professional presence.", "حضور مهني واضح.") },
      { t: a("Verification", "التوثيق"), d: a("Complete business verification.", "أتمّ توثيق نشاطك.") },
    ],
    images: [
      { src: "/images/architecture/arch-lattice.webp", alt: a("A carved lattice screen casting patterned light", "حاجز مشربية مفرّغ يلقي ظلالًا مزخرفة") },
      { src: "/images/architecture/arch-model.webp", alt: a("An architectural model of a contemporary house", "مجسّم معماري لمنزل معاصر") },
      { src: "/images/professionals/design-bedroom.webp", alt: a("A styled bedroom interior", "غرفة نوم مصممة") },
      { src: "/images/architecture/arch-arched-door.webp", alt: a("A stone arched doorway", "مدخل حجري مقوّس") },
    ],
    app: { src: "/images/app/app-business.webp", label: a("A business profile in the app", "ملف نشاط تجاري في التطبيق") },
    cta: a("Join Aqarati", "انضم إلى عقاراتي"),
    closing: a("Show the detail, the material and the finished place.", "اعرض التفصيل والخامة والمكان المكتمل."),
  },
];

export const professionalsPage = {
  overline: { en: "For professionals", ar: "للمهنيين" } as T,
  h1: { en: "Everything around the property.", ar: "كل ما يحيط بالعقار." } as T,
  lead: { en: "Aqarati connects the professionals and services that surround a property, so the journey does not stop at the listing.", ar: "تربط عقاراتي المهنيين والخدمات المحيطة بالعقار، فلا تتوقف الرحلة عند الإعلان." } as T,
  panels: [
    { path: "/for-agents", t: { en: "Real Estate", ar: "العقارات" } as T, d: { en: "Agents and brokers managing listings and enquiries.", ar: "وكلاء ووسطاء يديرون الإعلانات والاستفسارات." } as T, src: "/images/ecosystem/ecosystem-villa-facade.webp" },
    { path: "/for-developers", t: { en: "Development", ar: "التطوير" } as T, d: { en: "Developers showing whole projects and units.", ar: "مطوّرون يعرضون مشاريع ووحدات كاملة." } as T, src: "/images/developers/developer-aerial.webp" },
    { path: "/for-construction", t: { en: "Construction", ar: "المقاولات" } as T, d: { en: "Teams that build, with portfolios and quote requests.", ar: "فرق البناء، بمعارض أعمال وطلبات أسعار." } as T, src: "/images/construction/construction-crane.webp" },
    { path: "/for-design", t: { en: "Architecture", ar: "العمارة" } as T, d: { en: "Architects turning ideas into buildings.", ar: "معماريون يحوّلون الأفكار إلى مبانٍ." } as T, src: "/images/architecture/arch-model.webp" },
    { path: "/for-design", t: { en: "Interior / Exterior Design", ar: "التصميم الداخلي والخارجي" } as T, d: { en: "Designers shaping the spaces people live in.", ar: "مصممون يشكّلون المساحات التي يعيش فيها الناس." } as T, src: "/images/professionals/design-bedroom.webp" },
    { path: "/for-professionals#maintenance", t: { en: "Maintenance", ar: "الصيانة" } as T, d: { en: "Property-service professionals who keep homes running.", ar: "مهنيو خدمات العقار الذين يُبقون المنازل جاهزة." } as T, src: "/images/professionals/maintenance-home.webp" },
  ],
  maintenanceH: { en: "Maintenance and property services", ar: "الصيانة وخدمات العقار" } as T,
  maintenanceP: { en: "Electrical, plumbing, air-conditioning, painting and garden care professionals can present their services and receive enquiries, with the same business verification as other professionals.", ar: "يمكن لمهنيي الكهرباء والسباكة والتكييف والدهان وتنسيق الحدائق عرض خدماتهم واستقبال الاستفسارات، مع توثيق النشاط نفسه المعتمد لبقية المهنيين." } as T,
  journeyH: { en: "The professional journey", ar: "رحلة المهني" } as T,
  journey: [
    { en: "Create a business profile", ar: "أنشئ ملف نشاطك" },
    { en: "Complete business verification", ar: "أتمّ توثيق النشاط" },
    { en: "Show your portfolio and services", ar: "اعرض معرض أعمالك وخدماتك" },
    { en: "Receive enquiries and quote requests", ar: "استقبل الاستفسارات وطلبات الأسعار" },
    { en: "Move forward with the people you meet", ar: "تقدّم مع من تتعرّف عليهم" },
  ] as T[],
  cta: { en: "Join Aqarati", ar: "انضم إلى عقاراتي" } as T,
};
