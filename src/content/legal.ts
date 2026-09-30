import type { T } from "@/lib/i18n";
const a = (en: string, ar: string): T => ({ en, ar });

/*
 * LEGAL REVIEW REQUIRED (internal note, not shown on the website):
 * All copy below is a plain-language DRAFT describing how the website is
 * intended to work. It must be reviewed and replaced or approved by the
 * company's legal counsel before launch. It deliberately makes no claims
 * about regulatory compliance, certifications or specific retention periods.
 * Sections marked `review: true` need company-specific facts.
 */

export type LegalSection = { t: T; p: T; review?: boolean };
export type LegalDoc = { title: T; description: T; intro: T; sections: LegalSection[] };

export const privacy: LegalDoc = {
  title: a("Privacy Policy", "سياسة الخصوصية"),
  description: a("How Aqarati collects, uses and protects information.", "كيف تجمع عقاراتي المعلومات وتستخدمها وتحميها."),
  intro: a("This policy explains, in plain language, what information Aqarati handles and why. It applies to this website and, where stated, to the Aqarati app.", "توضّح هذه السياسة بلغة بسيطة المعلومات التي تتعامل معها عقاراتي ولماذا. وهي تنطبق على هذا الموقع، وعلى تطبيق عقاراتي حيثما ذُكر."),
  sections: [
    { t: a("Introduction", "مقدمة"), p: a("Aqarati is a property ecosystem focused on Oman. We aim to collect only the information we need to provide the service and to explain how we use it.", "عقاراتي منظومة عقارية تركّز على عُمان. نسعى إلى جمع المعلومات اللازمة لتقديم الخدمة فقط، وإلى توضيح كيفية استخدامها.") },
    { t: a("Information collected", "المعلومات التي نجمعها"), p: a("Depending on how you use Aqarati, this may include account details, contact details, property information, documents you choose to upload, and technical information about your device.", "بحسب طريقة استخدامك لعقاراتي، قد يشمل ذلك بيانات الحساب وبيانات التواصل ومعلومات العقار والمستندات التي تختار رفعها ومعلومات تقنية عن جهازك.") },
    { t: a("How information is used", "كيف تُستخدم المعلومات"), p: a("To provide and improve Aqarati, to operate verification, to connect people with properties and professionals, to respond to enquiries and to keep the service secure.", "لتقديم عقاراتي وتحسينها، وتشغيل التوثيق، وربط الناس بالعقارات والمهنيين، والرد على الاستفسارات، وحماية الخدمة.") },
    { t: a("Account information", "معلومات الحساب"), p: a("Information you give when creating or using an account, such as your name, email, phone number and account preferences.", "المعلومات التي تقدّمها عند إنشاء حساب أو استخدامه، مثل الاسم والبريد الإلكتروني ورقم الهاتف وتفضيلات الحساب.") },
    { t: a("Contact information", "معلومات التواصل"), p: a("If you write to us through the contact form or by email, we use what you send to reply and to improve support. This website's contact form only works when a delivery service has been configured.", "إذا راسلتنا عبر نموذج التواصل أو البريد الإلكتروني، فنستخدم ما ترسله للرد وتحسين الدعم. ولا يعمل نموذج التواصل في هذا الموقع إلا عند إعداد خدمة توصيل.") },
    { t: a("Property information", "معلومات العقار"), p: a("Details and photos an owner or professional provides about a property so it can be shown to others.", "التفاصيل والصور التي يقدّمها المالك أو المهني عن عقار ليُعرض على الآخرين.") },
    { t: a("Uploaded documents", "المستندات المرفوعة"), p: a("Verification documents are not public profile content. Public profiles show verification status, not private identity documents. Documents are handled only for verification and related support.", "مستندات التوثيق ليست جزءًا من الملف العام. تعرض الملفات العامة حالة التوثيق لا مستندات الهوية الخاصة. وتُعالج المستندات لأغراض التوثيق والدعم المرتبط به فقط.") },
    { t: a("Device and technical information", "معلومات الجهاز والمعلومات التقنية"), p: a("Basic technical information such as browser type and language may be used to deliver the website. This website does not currently run analytics.", "قد تُستخدم معلومات تقنية أساسية مثل نوع المتصفح واللغة لتقديم الموقع. ولا يستخدم هذا الموقع حاليًا أي أدوات تحليلات.") },
    { t: a("Cookies", "ملفات الارتباط"), p: a("See the Cookie Policy for what this website stores on your device and how to control it.", "راجع سياسة ملفات الارتباط لمعرفة ما يخزّنه هذا الموقع على جهازك وكيفية التحكم فيه.") },
    { t: a("Service providers", "مزوّدو الخدمات"), p: a("We may use service providers to host the website and deliver services.", "قد نستعين بمزوّدي خدمات لاستضافة الموقع وتقديم الخدمات."), review: true },
    { t: a("Data sharing", "مشاركة البيانات"), p: a("We share information only as needed to provide the service, with your direction, or where required by law.", "نشارك المعلومات بالقدر اللازم لتقديم الخدمة، أو بتوجيه منك، أو حيث يقتضي القانون."), review: true },
    { t: a("Data retention", "الاحتفاظ بالبيانات"), p: a("We keep information for as long as needed for the purposes above.", "نحتفظ بالمعلومات للمدة اللازمة للأغراض المذكورة أعلاه."), review: true },
    { t: a("Your rights", "حقوقك"), p: a("You can ask us about the information we hold about you and ask us to correct or delete it where appropriate. Contact us to make a request.", "يمكنك أن تسألنا عن المعلومات التي نحتفظ بها عنك وأن تطلب تصحيحها أو حذفها عند الاقتضاء. تواصل معنا لتقديم طلبك.") },
    { t: a("Security", "الأمان"), p: a("We take reasonable steps to protect information. No online service can promise perfect security.", "نتخذ خطوات معقولة لحماية المعلومات. ولا تستطيع أي خدمة عبر الإنترنت أن تعد بأمان مطلق.") },
    { t: a("Children", "الأطفال"), p: a("Aqarati is not intended for children, and we do not knowingly collect their information.", "عقاراتي غير موجّهة للأطفال، ولا نجمع معلوماتهم عن قصد.") },
    { t: a("International transfers", "النقل الدولي للبيانات"), p: a("Our service providers may process information in other countries.", "قد يعالج مزوّدو الخدمات لدينا المعلومات في دول أخرى."), review: true },
    { t: a("Changes to this policy", "التغييرات على هذه السياسة"), p: a("We may update this policy. The date of the latest update is shown at the top of the page.", "قد نحدّث هذه السياسة. ويظهر تاريخ آخر تحديث أعلى الصفحة.") },
    { t: a("Contact", "التواصل"), p: a("Use the Contact page to reach us about privacy.", "استخدم صفحة التواصل لمراسلتنا بشأن الخصوصية.") },
  ],
};

export const cookies: LegalDoc = {
  title: a("Cookie Policy", "سياسة ملفات الارتباط"),
  description: a("What this website stores on your device and how you control it.", "ما يخزّنه هذا الموقع على جهازك وكيف تتحكم فيه."),
  intro: a("Cookies and similar storage are small pieces of data a website keeps in your browser. This policy lists what this website actually uses.", "ملفات الارتباط والتخزين المشابه بيانات صغيرة يحتفظ بها الموقع في متصفحك. تسرد هذه السياسة ما يستخدمه هذا الموقع فعليًا."),
  sections: [
    { t: a("Necessary", "الضرورية"), p: a("Used to remember your cookie choice, your language and your light or dark theme. The website needs these to work as you expect.", "تُستخدم لتذكّر اختيارك لملفات الارتباط ولغتك ومظهرك الفاتح أو الداكن. يحتاجها الموقع ليعمل كما تتوقع.") },
    { t: a("Analytics", "التحليلات"), p: a("This website does not currently use analytics. If we add it, it will stay off until you allow it.", "لا يستخدم هذا الموقع حاليًا أي تحليلات. وإن أضفناها فستبقى متوقفة حتى تسمح بها.") },
    { t: a("Preferences", "التفضيلات"), p: a("No optional preference cookies are currently used beyond the necessary ones above.", "لا تُستخدم حاليًا ملفات تفضيلات اختيارية غير الضرورية المذكورة أعلاه.") },
    { t: a("Marketing", "التسويق"), p: a("This website does not use marketing or advertising cookies.", "لا يستخدم هذا الموقع ملفات ارتباط تسويقية أو إعلانية.") },
    { t: a("Third-party cookies", "ملفات ارتباط الأطراف الثالثة"), p: a("This website does not currently set third-party cookies. Fonts are served from the website itself.", "لا يضبط هذا الموقع حاليًا ملفات ارتباط من أطراف ثالثة. وتُقدَّم الخطوط من الموقع نفسه.") },
    { t: a("Your controls", "تحكمك"), p: a("Use Cookie preferences in the footer of any page to change your choice at any time. You can also clear site data in your browser.", "استخدم «تفضيلات ملفات الارتباط» في تذييل أي صفحة لتغيير اختيارك في أي وقت. ويمكنك أيضًا مسح بيانات الموقع من متصفحك.") },
    { t: a("Retention", "مدة الاحتفاظ"), p: a("Your cookie choice is stored in your browser until you change it or clear your browser data.", "يُخزَّن اختيارك في متصفحك إلى أن تغيّره أو تمسح بيانات المتصفح.") },
  ],
};

export const terms: LegalDoc = {
  title: a("Terms of Use", "شروط الاستخدام"),
  description: a("The terms for using the Aqarati website.", "شروط استخدام موقع عقاراتي."),
  intro: a("These terms describe how the Aqarati website may be used.", "تصف هذه الشروط كيفية استخدام موقع عقاراتي."),
  sections: [
    { t: a("Using Aqarati", "استخدام عقاراتي"), p: a("You may use this website to learn about Aqarati. Some features described here are available in the Aqarati app, and some may be introduced over time.", "يمكنك استخدام هذا الموقع للتعرّف على عقاراتي. بعض الميزات الموصوفة هنا متاحة في تطبيق عقاراتي، وبعضها قد يُطرح تدريجيًا.") },
    { t: a("Accounts", "الحسابات"), p: a("Accounts are created in the Aqarati app. You are responsible for keeping your sign-in details private and for activity on your account.", "تُنشأ الحسابات في تطبيق عقاراتي. أنت مسؤول عن سرية بيانات دخولك وعن النشاط على حسابك.") },
    { t: a("Listings", "الإعلانات"), p: a("People who list a property are responsible for the accuracy of what they provide.", "يتحمل من يدرج عقارًا مسؤولية دقة ما يقدّمه.") },
    { t: a("Professional content", "المحتوى المهني"), p: a("Professionals are responsible for their profiles, portfolios and the services they describe.", "يتحمل المهنيون مسؤولية ملفاتهم ومعارض أعمالهم والخدمات التي يصفونها.") },
    { t: a("Verification", "التوثيق"), p: a("Verification reflects the outcome of Aqarati's review process for what was submitted. It is not a guarantee of a transaction or result, and identity, business and property verification are separate.", "يعكس التوثيق نتيجة عملية المراجعة لدى عقاراتي لما تم تقديمه. وهو ليس ضمانًا لصفقة أو نتيجة، وتوثيق الهوية والنشاط والعقار منفصل.") },
    { t: a("Enquiries", "الاستفسارات"), p: a("Enquiries are between the people involved. Aqarati provides the place to make them.", "الاستفسارات بين الأطراف المعنية. وتوفّر عقاراتي المكان لإجرائها.") },
    { t: a("Broker services", "خدمات الوسيط"), p: a("Where available, Aqarati Broker helps coordinate. It does not guarantee a buyer, a sale or a completed transaction.", "حيثما يتوفر، يساعد وسيط عقاراتي في التنسيق، ولا يضمن وجود مشترٍ أو إتمام بيع أو صفقة.") },
    { t: a("Payments", "المدفوعات"), p: a("This website does not take payments. Any payment takes place under the terms shown at that point in the Aqarati app.", "لا يستقبل هذا الموقع مدفوعات. وتتم أي مدفوعات وفق الشروط المعروضة عندها في تطبيق عقاراتي.") },
    { t: a("Fees", "الرسوم"), p: a("Where the applicable Aqarati service / convenience fee applies, the rate is {rate}% of the applicable completed transaction. It does not apply to every feature and is not a government fee or tax.", "حيثما تنطبق رسوم الخدمة / الراحة من عقاراتي، فإن النسبة هي {rate}٪ من قيمة المعاملة المكتملة المعنية. ولا تنطبق على كل الميزات وليست رسومًا حكومية أو ضريبة."), review: true },
    { t: a("User responsibilities", "مسؤوليات المستخدم"), p: a("Provide accurate information, respect other people, and follow the law.", "قدّم معلومات دقيقة، واحترم الآخرين، والتزم بالقانون.") },
    { t: a("Prohibited use", "الاستخدام المحظور"), p: a("Do not misuse the website, attempt to disrupt it, or submit false or misleading information.", "لا تسئ استخدام الموقع، ولا تحاول تعطيله، ولا تقدّم معلومات كاذبة أو مضللة.") },
    { t: a("Intellectual property", "الملكية الفكرية"), p: a("The Aqarati name, logo and website content belong to Aqarati or its licensors. Do not use them without permission.", "اسم عقاراتي وشعارها ومحتوى الموقع مملوكة لعقاراتي أو لمرخّصيها. لا تستخدمها دون إذن.") },
    { t: a("Third-party services", "خدمات الأطراف الثالثة"), p: a("The app or website may link to or rely on third-party services, which have their own terms.", "قد يرتبط التطبيق أو الموقع بخدمات أطراف ثالثة أو يعتمد عليها، ولها شروطها الخاصة."), review: true },
    { t: a("Disclaimers", "إخلاء المسؤولية"), p: a("Information on this website is general and may change. Some described services may not yet be available.", "المعلومات في هذا الموقع عامة وقابلة للتغيير. وقد لا تتوفر بعض الخدمات الموصوفة بعد."), review: true },
    { t: a("Limitation of liability", "حدود المسؤولية"), p: a("Nothing in these terms limits any right you have under applicable law.", "لا يحدّ أي بند في هذه الشروط من أي حق لك بموجب القانون المعمول به."), review: true },
    { t: a("Changes", "التغييرات"), p: a("We may update these terms. The date of the latest update is shown at the top of the page.", "قد نحدّث هذه الشروط. ويظهر تاريخ آخر تحديث أعلى الصفحة.") },
    { t: a("Contact", "التواصل"), p: a("Use the Contact page to reach us about these terms.", "استخدم صفحة التواصل لمراسلتنا بشأن هذه الشروط.") },
  ],
};
