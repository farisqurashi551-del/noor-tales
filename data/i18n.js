/* ============================================================
   Noor Tales — UI strings dictionary
   Every user-facing UI string lives here. No hardcoded UI text
   in HTML. Keys are flat: "section.key" -> { en, ar }.
   Use %n as a numeric placeholder where noted.
   ============================================================ */

const I18N = {
  /* Site identity */
  "site.name":     { en: "Noor Tales", ar: "حكايا النور" },
  "site.tagline":  { en: "Stories of the Prophets, the Companions, and the Arabs — told through the noble virtues they lived by.",
                     ar: "قصص الأنبياء والصحابة والتابعين والعرب — تُروى من خلال مكارم الأخلاق التي عاشوا بها." },

  /* Navigation */
  "nav.home":     { en: "Home",      ar: "الرئيسية" },
  "nav.stories":  { en: "Stories",   ar: "القصص" },
  "nav.virtues":  { en: "Virtues",   ar: "الأخلاق" },
  "nav.sources":  { en: "Sources",   ar: "المصادر" },
  "nav.about":    { en: "About",     ar: "عنّا" },
  "nav.contact":  { en: "Contact",   ar: "تواصل معنا" },
  "nav.menu":     { en: "Menu",      ar: "القائمة" },
  "lang.toggle":  { en: "ع",         ar: "EN" },
  "lang.toggleLabel": { en: "التبديل إلى العربية", ar: "Switch to English" },

  /* Home */
  "home.heroKicker":   { en: "Bilingual stories of noble character", ar: "قصص ثنائية اللغة في مكارم الأخلاق" },
  "home.cta.stories":  { en: "Browse the Stories", ar: "تصفّح القصص" },
  "home.browseTitle":  { en: "Two Ways In", ar: "مدخلان إلى الحكايا" },
  "home.byVirtue":     { en: "Browse by Virtue", ar: "تصفّح حسب الأخلاق" },
  "home.byVirtueDesc": { en: "Truthfulness, generosity, courage… the code of noble character the Arabs honored. Enter through the virtue itself.",
                         ar: "الصدق والكرم والشجاعة… منظومة مكارم الأخلاق التي أجلّها العرب. ادخل إلى القصص من باب الخُلُق نفسه." },
  "home.byPeople":     { en: "Browse by People", ar: "تصفّح حسب الأشخاص" },
  "home.byPeopleDesc": { en: "Prophets, Companions, Successors, and the Arabs of old. Enter through the people who lived these stories.",
                         ar: "الأنبياء والصحابة والتابعون وعرب الجاهلية وما بعدها. ادخل إلى القصص من باب أصحابها." },
  "home.featured":     { en: "Featured Stories", ar: "قصص مختارة" },
  "home.readStory":    { en: "Read the story", ar: "اقرأ القصة" },

  /* Stories list */
  "stories.title":       { en: "The Stories", ar: "القصص" },
  "stories.intro":       { en: "Filter by virtue, by people, or both — every story carries more than one lesson.",
                           ar: "صفِّ القصص حسب الخُلُق أو حسب الأشخاص أو بهما معًا — فكل قصة تحمل أكثر من عبرة." },
  "stories.search":      { en: "Search stories…", ar: "ابحث في القصص…" },
  "stories.searchLabel": { en: "Search stories", ar: "البحث في القصص" },
  "stories.byPeople":    { en: "By people", ar: "حسب الأشخاص" },
  "stories.byVirtue":    { en: "By virtue", ar: "حسب الأخلاق" },
  "stories.all":         { en: "All", ar: "الكل" },
  "stories.clear":       { en: "Clear filters", ar: "مسح التصفية" },
  "stories.count":       { en: "%n stories", ar: "%n من القصص" },
  "stories.countOne":    { en: "1 story", ar: "قصة واحدة" },
  "stories.none":        { en: "No stories match these filters yet. More stories are on their way.",
                           ar: "لا توجد قصص تطابق هذه التصفية بعد. المزيد من القصص في الطريق." },

  /* Story page */
  "story.category":  { en: "Category", ar: "التصنيف" },
  "story.virtues":   { en: "Virtues in this story", ar: "الأخلاق في هذه القصة" },
  "story.sources":   { en: "Sources", ar: "المصادر" },
  "story.prev":      { en: "Previous story", ar: "القصة السابقة" },
  "story.next":      { en: "Next story", ar: "القصة التالية" },
  "story.back":      { en: "All stories", ar: "جميع القصص" },
  "story.notFound":  { en: "Story not found. It may have been moved or is not written yet.",
                       ar: "لم يتم العثور على القصة. ربما نُقلت أو لم تُكتب بعد." },

  /* Virtues page */
  "virtues.title": { en: "The Noble Virtues", ar: "مكارم الأخلاق" },
  "virtues.intro": {
    en: "Long before Islam, the Arabs held to a code of noble character — <em>makārim al-akhlāq</em> — virtues they celebrated in their poetry, bound themselves to in pacts such as Ḥilf al-Fuḍūl sworn beside the Kaaba, and told stories about around their fires: truthfulness, generosity, courage, loyalty to one's word. Islam came, as the Prophet ﷺ said, to perfect this nobility of character. These are the virtues through which Noor Tales reads its stories.",
    ar: "عرفت العرب قبل الإسلام منظومةً من مكارم الأخلاق تغنّوا بها في أشعارهم، وتعاقدوا عليها في أحلافهم كحلف الفضول الذي عُقد عند الكعبة، وتناقلوا حولها الحكايات في مجالسهم: الصدق، والكرم، والشجاعة، والوفاء بالعهد. ثم جاء الإسلام — كما قال النبي ﷺ — ليتمّم مكارم الأخلاق. هذه هي الأخلاق التي تقرأ بها «حكايا النور» قصصها."
  },
  "virtues.viewStories": { en: "View stories", ar: "عرض القصص" },

  /* Sources page */
  "sources.title": { en: "Sources", ar: "المصادر" },
  "sources.intro": {
    en: "Noor Tales draws on the Qur'an and its exegesis, the canonical hadith collections, classical works of sīrah and biography, and the treasuries of classical Arabic literature. Each story cites its own sources; this page gathers the main references by type.",
    ar: "تستقي «حكايا النور» موادها من القرآن الكريم وتفاسيره، ودواوين الحديث المعتمدة، وكتب السيرة والتراجم، وذخائر الأدب العربي القديم. ولكل قصة مصادرها الخاصة المذكورة في صفحتها؛ وتجمع هذه الصفحة أهم المراجع مصنّفةً حسب نوعها."
  },

  /* About page */
  "about.title": { en: "About Noor Tales", ar: "عن حكايا النور" },
  "about.body": {
    en: "<p><strong>Noor Tales</strong> exists to preserve and share the stories of the Prophets, the Companions, the Successors, and the Arabs of old — and, through them, the timeless virtues they embody.</p><p>We believe these stories are not museum pieces. Truthfulness, generosity, courage, loyalty, forbearance — these were lived realities for the people in these pages, tested in famine and war, in trade and trust, in exile and triumph. Told well, they still teach.</p><p>Every story on this site is presented in both English and Arabic, classified both by the people it concerns and by the virtues it displays, and traced back to its sources so that readers can verify and go deeper.</p><p>This is a growing library. If you find an error, know a story that belongs here, or wish to help with translation, we would love to hear from you.</p>",
    ar: "<p>وُجدت <strong>«حكايا النور»</strong> لحفظ قصص الأنبياء والصحابة والتابعين والعرب الأقدمين ونشرها — ولنقل ما تجسّده من مكارم الأخلاق الخالدة عبرها.</p><p>نؤمن أن هذه القصص ليست قطعًا متحفية. فالصدق والكرم والشجاعة والوفاء والحلم كانت حقائق معيشة عند أصحاب هذه الصفحات، امتُحنوا فيها في المجاعة والحرب، وفي التجارة والأمانة، وفي الغربة والظفر. وهي — إذا أُحسنت روايتها — ما زالت تعلّم.</p><p>كل قصة في هذا الموقع تُعرض بالعربية والإنجليزية معًا، وتُصنَّف حسب أصحابها وحسب ما فيها من أخلاق، وتُوثَّق بمصادرها ليتحقق القارئ ويستزيد.</p><p>هذه مكتبة تنمو. فإن وجدت خطأً، أو عرفت قصةً يليق بها هذا المقام، أو أحببت المساعدة في الترجمة، فيسعدنا أن نسمع منك.</p>"
  },

  /* Contact page */
  "contact.title":   { en: "Contact Us", ar: "تواصل معنا" },
  "contact.intro":   { en: "A correction, a story suggestion, or a kind word — write to us.",
                       ar: "تصويب، أو اقتراح قصة، أو كلمة طيبة — اكتب لنا." },
  "contact.name":    { en: "Your name", ar: "الاسم" },
  "contact.email":   { en: "Your email", ar: "البريد الإلكتروني" },
  "contact.message": { en: "Your message", ar: "رسالتك" },
  "contact.send":    { en: "Send message", ar: "إرسال الرسالة" },
  "contact.note":    { en: "Sending opens your email app — no data is stored on this site.",
                       ar: "عند الإرسال يُفتح تطبيق البريد لديك — لا تُخزَّن أي بيانات في هذا الموقع." },
  "contact.follow":  { en: "Follow us", ar: "تابعنا" },

  /* Footer */
  "footer.tagline": { en: "Stories of light, virtue by virtue.", ar: "حكايا من نور، خُلُقًا خُلُقًا." },
  "footer.rights":  { en: "© %n Noor Tales. Texts of the stories are drawn from the sources cited on each page.",
                      ar: "© %n حكايا النور. نصوص القصص مستقاة من المصادر المذكورة في صفحاتها." }
};
