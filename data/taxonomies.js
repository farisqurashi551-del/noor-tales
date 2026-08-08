/* ============================================================
   Noor Tales — Taxonomies
   Two independent classification axes; every story belongs to
   exactly one people-category and any number of virtues.

   NOTE ON THE VIRTUES LIST — curated order and composition set
   by site editor (2026-08-08). Array order is the display order
   used throughout the site (virtues page, badges, filters).
   Edit freely — this file is the single place to do so.
   ============================================================ */

const VIRTUES = [
  { id: "truthfulness",    name: { en: "Truthfulness", ar: "الصدق" },
    description: { en: "Saying the truth even against oneself, and living without a double face.",
                   ar: "قول الحق ولو على النفس، والعيش بوجه واحد لا وجهين." },
    icon: "🕊️" },
  { id: "loyalty",         name: { en: "Loyalty", ar: "الوفاء" },
    description: { en: "Honoring one's word and covenants, whatever the price.",
                   ar: "الوفاء بالكلمة والعهد مهما غلا الثمن." },
    icon: "🤝" },
  { id: "trustworthiness", name: { en: "Trustworthiness", ar: "الأمانة" },
    description: { en: "Guarding what is entrusted to you — property, secrets, and duties.",
                   ar: "حفظ ما اؤتمنت عليه من مالٍ وسرٍّ وواجب." },
    icon: "🗝️" },
  { id: "mudara",          name: { en: "Graciousness with People", ar: "مداراة الناس" },
    description: { en: "Meeting people with gentleness and easy manners, softening friction and keeping harmony without compromising what is right.",
                   ar: "لين الجانب مع الناس وحسن معاشرتهم، دفعًا للأذى وجلبًا للألفة من غير مداهنة في الحق." },
    icon: "🌼" },
  { id: "reciprocity",     name: { en: "Rewarding Good Deeds", ar: "المكافأة بالصنائع" },
    description: { en: "Repaying a kindness with its like or better, so that no favor done for you goes unanswered.",
                   ar: "مقابلة صنيع المعروف بمثله أو خير منه، فلا يذهب جميل صانعه سدى." },
    icon: "🎁" },
  { id: "generosity",      name: { en: "Generosity", ar: "الكرم" },
    description: { en: "Giving freely of wealth and self, expecting no return.",
                   ar: "البذل من المال والنفس عن طيب خاطر دون انتظار مقابل." },
    icon: "🌙" },
  { id: "neighborliness",  name: { en: "Good Neighborliness", ar: "حسن الجوار" },
    description: { en: "Sheltering and honoring the neighbor and those under one's protection.",
                   ar: "إيواء الجار وإكرامه والذبّ عنه." },
    icon: "🏡" },
  { id: "aiding",          name: { en: "Aiding the Distressed", ar: "إغاثة الملهوف" },
    description: { en: "Rushing to help the wronged, the stranded, and the desperate.",
                   ar: "المسارعة إلى نصرة المظلوم وعون المنقطع والملهوف." },
    icon: "🤲" },
  { id: "ijarah",          name: { en: "Protecting the Refuge-Seeker", ar: "إجارة المستجير" },
    description: { en: "Sheltering and defending whoever seeks protection, even at the cost of confronting the powerful.",
                   ar: "حماية من يلجأ طالبًا الأمان والذبّ عنه، ولو كلّف ذلك مواجهة الأقوياء." },
    icon: "⛺" },
  { id: "courage",         name: { en: "Courage", ar: "الشجاعة" },
    description: { en: "Standing firm for what is right when standing costs something.",
                   ar: "الثبات على الحق حين يكون للثبات ثمن." },
    icon: "🛡️" }
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
