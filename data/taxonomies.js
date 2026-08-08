/* ============================================================
   Noor Tales — Taxonomies
   Two independent classification axes; every story belongs to
   exactly one people-category and any number of virtues.

   NOTE ON THE VIRTUES LIST — this is a *seed* list of the noble
   virtues (makārim al-akhlāq) celebrated by the Arabs and
   associated with their pacts at the Kaaba (e.g. Ḥilf al-Fuḍūl).
   It is intended to be reviewed against classical sources
   (al-Aghānī, Bulūgh al-Arab fī Maʿrifat Aḥwāl al-ʿArab of
   al-Ālūsī, etc.) and edited freely — this file is the single
   place to do so.
   ============================================================ */

const VIRTUES = [
  { id: "truthfulness",   name: { en: "Truthfulness", ar: "الصدق" },
    description: { en: "Saying the truth even against oneself, and living without a double face.",
                   ar: "قول الحق ولو على النفس، والعيش بوجه واحد لا وجهين." },
    icon: "🕊️" },
  { id: "generosity",     name: { en: "Generosity", ar: "الكرم" },
    description: { en: "Giving freely of wealth and self, expecting no return.",
                   ar: "البذل من المال والنفس عن طيب خاطر دون انتظار مقابل." },
    icon: "🌙" },
  { id: "courage",        name: { en: "Courage", ar: "الشجاعة" },
    description: { en: "Standing firm for what is right when standing costs something.",
                   ar: "الثبات على الحق حين يكون للثبات ثمن." },
    icon: "🛡️" },
  { id: "loyalty",        name: { en: "Loyalty & Keeping Covenants", ar: "الوفاء بالعهد" },
    description: { en: "Honoring one's word and covenants, whatever the price.",
                   ar: "الوفاء بالكلمة والعهد مهما غلا الثمن." },
    icon: "🤝" },
  { id: "trustworthiness", name: { en: "Trustworthiness", ar: "الأمانة" },
    description: { en: "Guarding what is entrusted to you — property, secrets, and duties.",
                   ar: "حفظ ما اؤتمنت عليه من مالٍ وسرٍّ وواجب." },
    icon: "🗝️" },
  { id: "neighborliness", name: { en: "Protecting Neighbors", ar: "حسن الجوار وحماية الجار" },
    description: { en: "Sheltering and honoring the neighbor and those under one's protection.",
                   ar: "إيواء الجار والمستجير وإكرامهما والذبّ عنهما." },
    icon: "🏡" },
  { id: "aiding",         name: { en: "Aiding the Distressed", ar: "إغاثة الملهوف" },
    description: { en: "Rushing to help the wronged, the stranded, and the desperate.",
                   ar: "المسارعة إلى نصرة المظلوم وعون المنقطع والملهوف." },
    icon: "🤲" },
  { id: "forbearance",    name: { en: "Forbearance", ar: "الحلم" },
    description: { en: "Meeting ignorance and provocation with patience and self-mastery.",
                   ar: "مقابلة الجهل والاستفزاز بالصبر وضبط النفس." },
    icon: "🌾" },
  { id: "chastity",       name: { en: "Chastity & Honor", ar: "العفة" },
    description: { en: "Purity and restraint in desire, wealth, and speech.",
                   ar: "طهارة النفس وضبطها في الشهوة والمال واللسان." },
    icon: "💠" },
  { id: "hospitality",    name: { en: "Hospitality", ar: "إكرام الضيف" },
    description: { en: "Welcoming the guest with the best of what one has, asked or unasked.",
                   ar: "استقبال الضيف بأفضل الموجود، سأل أم لم يسأل." },
    icon: "☕" }
];

const PEOPLE = [
  { id: "prophets",   name: { en: "Prophets", ar: "الأنبياء" },
    description: { en: "Stories of the Prophets, peace be upon them, from the Qur'an and authentic narrations.",
                   ar: "قصص الأنبياء عليهم السلام من القرآن الكريم وصحيح الأخبار." },
    icon: "📜" },
  { id: "companions", name: { en: "Companions", ar: "الصحابة" },
    description: { en: "Stories of the Companions of the Prophet ﷺ, may Allah be pleased with them.",
                   ar: "قصص صحابة النبي ﷺ رضوان الله عليهم." },
    icon: "⭐" },
  { id: "tabiun",     name: { en: "Successors (Tabi'un)", ar: "التابعون" },
    description: { en: "Stories of the generation that followed the Companions in excellence.",
                   ar: "قصص الجيل الذي تبع الصحابة بإحسان." },
    icon: "🌿" },
  { id: "arabs",      name: { en: "Stories of the Arabs", ar: "قصص العرب" },
    description: { en: "Tales of the Arabs of old — their days, their poetry, and their code of honor.",
                   ar: "أخبار العرب الأقدمين — أيامهم وأشعارهم ومآثر أخلاقهم." },
    icon: "🏜️" }
];
