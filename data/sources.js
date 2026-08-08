/* ============================================================
   Noor Tales — General reference library (Sources page)
   Grouped by type. Per-story citations live inside each story
   object in stories.js; this is the site-wide bibliography.
   ============================================================ */

const SOURCE_GROUPS = [
  {
    id: "quran",
    name: { en: "Qur'an & Exegesis (Tafsīr)", ar: "القرآن الكريم وتفاسيره" },
    items: [
      { en: "The Noble Qur'an", ar: "القرآن الكريم" },
      { en: "Tafsīr Ibn Kathīr (d. 774 AH)", ar: "تفسير القرآن العظيم — ابن كثير (ت 774هـ)" },
      { en: "Tafsīr al-Ṭabarī, Jāmiʿ al-Bayān (d. 310 AH)", ar: "جامع البيان — الطبري (ت 310هـ)" }
    ]
  },
  {
    id: "hadith",
    name: { en: "Hadith Collections", ar: "دواوين الحديث" },
    items: [
      { en: "Ṣaḥīḥ al-Bukhārī", ar: "صحيح البخاري" },
      { en: "Ṣaḥīḥ Muslim", ar: "صحيح مسلم" },
      { en: "Sunan Abī Dāwūd", ar: "سنن أبي داود" },
      { en: "Jāmiʿ al-Tirmidhī", ar: "جامع الترمذي" }
    ]
  },
  {
    id: "sirah",
    name: { en: "Sīrah, History & Biography", ar: "السيرة والتاريخ والتراجم" },
    items: [
      { en: "Sīrat Ibn Hishām", ar: "السيرة النبوية — ابن هشام" },
      { en: "Qiṣaṣ al-Anbiyāʾ — Ibn Kathīr", ar: "قصص الأنبياء — ابن كثير" },
      { en: "Siyar Aʿlām al-Nubalāʾ — al-Dhahabī", ar: "سير أعلام النبلاء — الذهبي" },
      { en: "Usd al-Ghābah — Ibn al-Athīr", ar: "أسد الغابة — ابن الأثير" }
    ]
  },
  {
    id: "adab",
    name: { en: "Classical Arabic Literature", ar: "الأدب العربي القديم" },
    items: [
      { en: "Kitāb al-Aghānī — Abū al-Faraj al-Iṣfahānī", ar: "كتاب الأغاني — أبو الفرج الأصفهاني" },
      { en: "Al-Shiʿr wa-l-Shuʿarāʾ — Ibn Qutaybah", ar: "الشعر والشعراء — ابن قتيبة" },
      { en: "Majmaʿ al-Amthāl — al-Maydānī", ar: "مجمع الأمثال — الميداني" },
      { en: "Bulūgh al-Arab fī Maʿrifat Aḥwāl al-ʿArab — al-Ālūsī", ar: "بلوغ الأرب في معرفة أحوال العرب — الآلوسي" }
    ]
  }
];
