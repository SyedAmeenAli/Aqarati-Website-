import type { T } from "@/lib/i18n";
const a = (en: string, ar: string): T => ({ en, ar });

export const about = {
  title: a("About", "من نحن"),
  description: a("Aqarati is being built for Oman around a simple idea: property should feel clearer, more trusted and more connected.", "تُبنى عقاراتي لعُمان حول فكرة بسيطة: أن يكون العقار أوضح وأكثر ثقة وترابطًا."),
  h1: a("Why Aqarati?", "لماذا عقاراتي؟"),
  lead: a("Aqarati is being built for Oman around a simple idea: property should feel clearer, more trusted and more connected.", "تُبنى عقاراتي لعُمان حول فكرة بسيطة: أن يكون العقار أوضح وأكثر ثقة وترابطًا."),
  sections: [
    { id: "purpose", t: a("Our purpose", "غايتنا"), p: a("To make the property journey easier to understand, from the first search to living in and looking after a home.", "أن نجعل الرحلة العقارية أسهل فهمًا، من أول بحث إلى السكن في المنزل والعناية به.") },
    { id: "approach", t: a("Our approach", "نهجنا"), p: a("Keep it simple. Show what has been verified. Bring the people and services around a property into one place, and let people choose how much help they want.", "البساطة أولًا. نُظهر ما تم توثيقه. نجمع الأشخاص والخدمات المحيطة بالعقار في مكان واحد، ونترك للناس اختيار مقدار المساعدة التي يريدونها.") },
    { id: "trust", t: a("Trust", "الثقة"), p: a("Verification of people, businesses and properties is designed to make it clearer who you are dealing with and what has been reviewed. We are careful not to claim more than a verification means.", "صُمّم توثيق الأشخاص والأعمال والعقارات ليوضّح من تتعامل معه وما الذي تمت مراجعته. ونحرص على ألا نَعِد بأكثر مما يعنيه التوثيق.") },
    { id: "ecosystem", t: a("The ecosystem", "المنظومة"), p: a("People looking for property, owners, agents, developers, construction companies, architects, designers and maintenance professionals, all in one ecosystem.", "الباحثون عن عقار والمُلّاك والوكلاء والمطوّرون وشركات المقاولات والمعماريون والمصممون ومهنيو الصيانة، جميعهم في منظومة واحدة.") },
    { id: "oman", t: a("Oman", "عُمان"), p: a("Aqarati is built around the Omani property ecosystem, in English and Arabic, from the start.", "بُنيت عقاراتي حول المنظومة العقارية العُمانية، بالعربية والإنجليزية منذ البداية.") },
    { id: "future", t: a("The future", "المستقبل"), p: a("Aqarati is still being built. Some services described on this website will roll out over time, and we will say clearly which are available.", "لا تزال عقاراتي قيد البناء. ستتوفر بعض الخدمات الموصوفة في هذا الموقع تدريجيًا، وسنوضح بجلاء ما هو متاح منها.") },
  ],
  images: [
    { src: "/images/about/about-muscat-coast.webp", alt: a("Muscat's coastline and mountains at sunset", "ساحل مسقط وجبالها وقت الغروب") },
    { src: "/images/about/about-old-muscat.webp", alt: a("Old Muscat's architecture beside the sea", "عمارة مسقط القديمة بجوار البحر") },
  ],
  cta: a("Explore Aqarati", "استكشف عقاراتي"),
};

export const howPage = {
  title: a("How it works", "كيف يعمل"),
  description: a("Five simple steps: discover, verify, connect, move forward and manage, all within Aqarati.", "خمس خطوات بسيطة: اكتشف وتحقّق وتواصل وتقدّم وأدِر، كلها داخل عقاراتي."),
  h1: a("How Aqarati works", "كيف تعمل عقاراتي"),
  lead: a("Whether you are looking, selling, building or designing, the journey follows the same five steps.", "سواء كنت تبحث أو تبيع أو تبني أو تصمم، تتبع الرحلة الخطوات الخمس نفسها."),
  image: { src: "/images/ecosystem/ecosystem-entrance-hall.webp", alt: a("A warm entrance hall with timber and stone details", "ردهة دخول دافئة بتفاصيل خشبية وحجرية") },
  choose: a("Two ways to move forward", "طريقتان للمضي قدمًا"),
};

export const verificationPage = {
  title: a("Verification", "التوثيق"),
  description: a("How Aqarati verification works: identity, business and property verification, what each means and what it does not.", "كيف يعمل التوثيق في عقاراتي: توثيق الهوية والنشاط والعقار، وما يعنيه كل منها وما لا يعنيه."),
  h1: a("Trust should be visible.", "الثقة يجب أن تكون ظاهرة."),
  lead: a("Verification helps people understand who they are dealing with and what has been reviewed.", "يساعد التوثيق الناس على فهم من يتعاملون معه وما الذي تمت مراجعته."),
  whyH: a("Why verification matters", "لماذا يهم التوثيق"),
  whyP: a("Property decisions are big decisions. Seeing a clear status next to a person, business or property makes it easier to know what to ask and what has already been checked.", "القرارات العقارية قرارات كبيرة. وجود حالة واضحة بجوار الشخص أو النشاط أو العقار يسهّل معرفة ما يجب السؤال عنه وما تم فحصه بالفعل."),
  basicsH: a("What we ask for", "ما الذي نطلبه"),
  basics: [a("Email verification", "توثيق البريد الإلكتروني"), a("Phone verification", "توثيق الهاتف"), a("Citizen or resident status", "صفة المواطن أو المقيم"), a("Passport upload", "رفع جواز السفر")],
  basicsNote: a("The Aqarati app guides you through these steps. The website does not collect verification documents.", "يرشدك تطبيق عقاراتي خلال هذه الخطوات. ولا يجمع الموقع مستندات التوثيق."),
  statesH: a("Verification states", "حالات التوثيق"),
  states: [
    { t: a("Not started", "لم يبدأ"), d: a("No verification has been submitted.", "لم يتم تقديم أي توثيق.") },
    { t: a("Pending", "قيد المراجعة"), d: a("Submitted and waiting for review.", "تم التقديم وبانتظار المراجعة.") },
    { t: a("Verified", "موثّق"), d: a("The review was completed successfully.", "اكتملت المراجعة بنجاح.") },
    { t: a("Resubmission needed", "يلزم إعادة التقديم"), d: a("More or corrected information is needed.", "يلزم معلومات إضافية أو مصحّحة.") },
    { t: a("Rejected", "مرفوض"), d: a("The submission did not meet the requirements.", "لم يستوفِ التقديم المتطلبات.") },
  ],
  notH: a("What verification does not mean", "ما لا يعنيه التوثيق"),
  not: [
    a("It does not mean that one verification covers everything. Identity, business and property verification are separate.", "لا يعني أن توثيقًا واحدًا يغطي كل شيء. فتوثيق الهوية والنشاط والعقار منفصل."),
    a("It is not a guarantee of a transaction, a price or a result.", "ليس ضمانًا لصفقة أو سعر أو نتيجة."),
    a("It is not an endorsement by any government body.", "ليس تزكية من أي جهة حكومية."),
    a("Not every person, business or property on Aqarati is verified.", "ليس كل شخص أو نشاط أو عقار في عقاراتي موثّقًا."),
  ],
  cta: a("Open Aqarati", "افتح عقاراتي"),
};

export const brokerPage = {
  title: a("Aqarati Broker", "وسيط عقاراتي"),
  description: a("Where the service is available, Aqarati Broker helps coordinate enquiries, viewings and next steps for buyers and owners.", "حيثما تتوفر الخدمة، يساعد وسيط عقاراتي في تنسيق الاستفسارات والمعاينات والخطوات التالية للمشترين والمُلّاك."),
  h1: a("Aqarati can handle the journey.", "عقاراتي تتولى الرحلة معك."),
  whatH: a("What Aqarati Broker is", "ما هو وسيط عقاراتي"),
  whatP: a("Aqarati Broker is a service, where available, that helps coordinate the steps of a property journey for people who would rather not manage every step themselves.", "وسيط عقاراتي خدمة، حيثما تتوفر، تساعد في تنسيق خطوات الرحلة العقارية لمن يفضّلون عدم إدارة كل خطوة بأنفسهم."),
  compareH: a("Broker or self-managed", "الوسيط أو الإدارة الذاتية"),
  rows: [
    [a("Searching", "البحث"), a("We help identify suitable opportunities", "نساعد في تحديد الفرص المناسبة"), a("You search and compare", "أنت تبحث وتقارن")],
    [a("Enquiries", "الاستفسارات"), a("We help coordinate them", "نساعد في تنسيقها"), a("You send and answer them", "أنت ترسلها وترد عليها")],
    [a("Viewings", "المعاينات"), a("We help coordinate them", "نساعد في تنسيقها"), a("You arrange them", "أنت ترتبها")],
    [a("Control", "التحكم"), a("You decide each step", "أنت تقرر كل خطوة"), a("You decide each step", "أنت تقرر كل خطوة")],
  ] as T[][],
  colBroker: a("With Aqarati Broker", "مع وسيط عقاراتي"),
  colSelf: a("Self-managed", "بإدارتك الخاصة"),
  feeH: a("Fees where applicable", "الرسوم حيثما تنطبق"),
  timelineH: a("The journey", "الرحلة"),
  cta: a("Open Aqarati", "افتح عقاراتي"),
};

export const ecosystemPage = {
  title: a("The ecosystem", "المنظومة"),
  description: a("The Aqarati ecosystem: people, property, verification, connection and the wider journey from finding a place to maintaining it.", "منظومة عقاراتي: الناس والعقار والتوثيق والتواصل والرحلة الأوسع من العثور على مكان إلى صيانته."),
  h1: a("Oman. Property. People. Trust.", "عُمان. العقار. الناس. الثقة."),
  lead: a("Aqarati is an ecosystem, not only a list of properties. This is how the pieces fit together.", "عقاراتي منظومة لا قائمة عقارات فحسب. هكذا تتكامل أجزاؤها."),
  flow: [
    { t: a("Find property", "اعثر على عقار"), d: a("Buy or rent.", "شراء أو إيجار.") },
    { t: a("Work with property", "اعمل مع العقار"), d: a("Own, sell or rent out.", "امتلك أو بع أو أجّر.") },
    { t: a("Verification", "التوثيق"), d: a("People, businesses and properties.", "الأشخاص والأعمال والعقارات.") },
    { t: a("Connection", "التواصل"), d: a("Enquiries, messages, viewings.", "الاستفسارات والرسائل والمعاينات.") },
    { t: a("Aqarati Broker", "وسيط عقاراتي"), d: a("Help coordinating, where available.", "مساعدة في التنسيق حيثما تتوفر.") },
    { t: a("View, decide, transact", "عاين وقرّر وأتمّم"), d: a("Move forward with confidence.", "تقدّم بثقة.") },
    { t: a("Build and design", "ابنِ وصمّم"), d: a("Architects, builders, designers.", "معماريون ومقاولون ومصممون.") },
    { t: a("Maintain", "صُن"), d: a("Property services over time.", "خدمات العقار مع الوقت.") },
    { t: a("My home", "منزلي"), d: a("Keep the journey in one place.", "أبقِ الرحلة في مكان واحد.") },
  ],
};

export const contact = {
  title: a("Contact", "تواصل معنا"),
  description: a("Get in touch with Aqarati for general, property, professional, business or technical enquiries.", "تواصل مع عقاراتي للاستفسارات العامة أو العقارية أو المهنية أو التجارية أو التقنية."),
  h1: a("Let's talk.", "لنتحدث."),
  lead: a("Tell us what you need and choose the topic that fits best.", "أخبرنا بما تحتاجه واختر الموضوع الأنسب."),
  topics: [
    { id: "general", t: a("General enquiry", "استفسار عام") },
    { id: "property", t: a("Property support", "دعم العقارات") },
    { id: "professional", t: a("Professional enquiry", "استفسار مهني") },
    { id: "business", t: a("Business enquiry", "استفسار تجاري") },
    { id: "technical", t: a("Technical support", "دعم تقني") },
  ],
  f: {
    topic: a("Topic", "الموضوع"),
    name: a("Your name", "الاسم"),
    email: a("Email", "البريد الإلكتروني"),
    msg: a("Message", "الرسالة"),
    send: a("Send message", "إرسال الرسالة"),
    sending: a("Sending…", "جارٍ الإرسال…"),
    required: a("This field is required.", "هذا الحقل مطلوب."),
    badEmail: a("Enter a valid email address.", "أدخل بريدًا إلكترونيًا صحيحًا."),
    success: a("Thank you. Your message has been received.", "شكرًا لك. تم استلام رسالتك."),
    failure: a("We couldn't send your message right now. Please try again later.", "تعذّر إرسال رسالتك الآن. يُرجى المحاولة لاحقًا."),
    direct: a("Or write to us directly:", "أو راسلنا مباشرة:"),
    none: a("Direct contact details will be published here soon.", "ستُنشر بيانات التواصل المباشر هنا قريبًا."),
  },
};
