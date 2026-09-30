import type { T } from "@/lib/i18n";
const a = (en: string, ar: string): T => ({ en, ar });

export const faqPage = {
  title: a("FAQ", "الأسئلة الشائعة"),
  description: a("Answers to common questions about Aqarati, verification, Aqarati Broker, fees and privacy.", "إجابات عن الأسئلة الشائعة حول عقاراتي والتوثيق ووسيط عقاراتي والرسوم والخصوصية."),
  h1: a("Questions, answered.", "أسئلة وإجابات."),
  lead: a("If you can't find what you need, get in touch.", "إن لم تجد ما تحتاجه، تواصل معنا."),
};

export const faqCategories: { id: string; t: T; qs: { q: T; a: T }[] }[] = [
  {
    id: "general", t: a("General", "عام"),
    qs: [
      { q: a("What is Aqarati?", "ما هي عقاراتي؟"), a: a("Aqarati is an Oman-focused property ecosystem. It connects people looking for property, owners, real estate professionals, developers, construction companies, architects, designers and maintenance professionals.", "عقاراتي منظومة عقارية تركّز على عُمان، تربط الباحثين عن عقار والمُلّاك ومهنيي العقارات والمطوّرين وشركات المقاولات والمعماريين والمصممين ومهنيي الصيانة.") },
      { q: a("Who can use Aqarati?", "من يمكنه استخدام عقاراتي؟"), a: a("Anyone looking for property, owning property, or offering a property-related professional service.", "كل من يبحث عن عقار أو يملك عقارًا أو يقدّم خدمة مهنية متعلقة بالعقار.") },
      { q: a("Can I browse without an account?", "هل يمكنني التصفح دون حساب؟"), a: a("Some browsing may be available without an account. Actions such as saving properties, sending enquiries or listing a property may need one. The app shows what is needed at each step.", "قد يتوفر بعض التصفح دون حساب. أما الإجراءات مثل حفظ العقارات أو إرسال الاستفسارات أو إدراج عقار فقد تتطلب حسابًا. يوضح التطبيق المطلوب في كل خطوة.") },
    ],
  },
  {
    id: "buyers", t: a("Buyers", "المشترون"),
    qs: [
      { q: a("Can I manage everything myself?", "هل يمكنني إدارة كل شيء بنفسي؟"), a: a("Yes. You can search, enquire, arrange viewings and manage your journey yourself through Aqarati.", "نعم. يمكنك البحث والاستفسار وترتيب المعاينات وإدارة رحلتك بنفسك عبر عقاراتي.") },
    ],
  },
  {
    id: "owners", t: a("Owners", "المُلّاك"),
    qs: [
      { q: a("Can I upload a property?", "هل يمكنني رفع عقار؟"), a: a("Yes. Owners can add a property with photos and details, and can submit it for property verification.", "نعم. يمكن للمُلّاك إضافة عقار بصوره وتفاصيله، وتقديمه لتوثيق العقار.") },
      { q: a("Do I have to use Aqarati Broker?", "هل يجب أن أستخدم وسيط عقاراتي؟"), a: a("No. Aqarati Broker is optional, where available. You can manage your property yourself.", "لا. وسيط عقاراتي اختياري، حيثما يتوفر. يمكنك إدارة عقارك بنفسك.") },
    ],
  },
  {
    id: "professionals", t: a("Professionals", "المهنيون"),
    qs: [
      { q: a("Can businesses create professional profiles?", "هل يمكن للأنشطة التجارية إنشاء ملفات مهنية؟"), a: a("Yes. Agents, developers, construction companies, architects, designers and maintenance professionals can create a business profile and complete business verification.", "نعم. يمكن للوكلاء والمطوّرين وشركات المقاولات والمعماريين والمصممين ومهنيي الصيانة إنشاء ملف نشاط وإتمام توثيق النشاط.") },
    ],
  },
  {
    id: "verification", t: a("Verification", "التوثيق"),
    qs: [
      { q: a("How does verification work?", "كيف يعمل التوثيق؟"), a: a("You submit information and documents, Aqarati reviews them, and the result is a decision: verified, resubmission needed, or rejected.", "تقدّم المعلومات والمستندات، وتراجعها عقاراتي، وتكون النتيجة قرارًا: موثّق أو يلزم إعادة التقديم أو مرفوض.") },
      { q: a("What is property verification?", "ما هو توثيق العقار؟"), a: a("It means a property's submitted information and documents have completed the applicable Aqarati property verification process. It is separate from identity and business verification.", "يعني أن معلومات العقار ومستنداته المقدّمة أتمّت عملية توثيق العقارات المعمول بها لدى عقاراتي. وهو منفصل عن توثيق الهوية والنشاط.") },
      { q: a("What happens to verification documents?", "ماذا يحدث لمستندات التوثيق؟"), a: a("Verification documents are not public profile content. Public profiles show verification status, not private identity documents. See the Privacy page for details.", "مستندات التوثيق ليست جزءًا من الملف العام. تعرض الملفات العامة حالة التوثيق لا مستندات الهوية الخاصة. راجع صفحة الخصوصية للتفاصيل.") },
    ],
  },
  {
    id: "broker", t: a("Aqarati Broker", "وسيط عقاراتي"),
    qs: [
      { q: a("What is Aqarati Broker?", "ما هو وسيط عقاراتي؟"), a: a("Where the service is available, Aqarati Broker helps coordinate enquiries, viewings and next steps for buyers and owners. It helps; it does not guarantee a buyer, a sale or a completed transaction.", "حيثما تتوفر الخدمة، يساعد وسيط عقاراتي في تنسيق الاستفسارات والمعاينات والخطوات التالية للمشترين والمُلّاك. إنه يساعد ولا يضمن وجود مشترٍ أو إتمام بيع أو صفقة.") },
    ],
  },
  {
    id: "fees", t: a("Payments & fees", "المدفوعات والرسوم"),
    qs: [
      { q: a("What does the {rate}% fee mean?", "ماذا تعني رسوم {rate}٪؟"), a: a("Where the applicable Aqarati service / convenience fee applies, the rate is {rate}% of the applicable completed transaction. It does not apply to every feature, and it is not a government fee or a tax. See the applicable terms before completing a transaction.", "حيثما تنطبق رسوم الخدمة / الراحة من عقاراتي، فإن النسبة هي {rate}٪ من قيمة المعاملة المكتملة المعنية. لا تنطبق على كل الميزات، وليست رسومًا حكومية ولا ضريبة. راجع الشروط المعمول بها قبل إتمام أي معاملة.") },
    ],
  },
  {
    id: "privacy", t: a("Privacy", "الخصوصية"),
    qs: [
      { q: a("Where can I read the privacy policy?", "أين يمكنني قراءة سياسة الخصوصية؟"), a: a("On the Privacy page, linked from the footer of every page.", "في صفحة الخصوصية، وهي مرتبطة من تذييل كل صفحة.") },
    ],
  },
];
