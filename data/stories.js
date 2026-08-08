/* ============================================================
   Noor Tales — Story library
   Adding a new story = adding ONE object to this array.
   Everything else (cards, filters, story pages, counts,
   prev/next) renders from this data automatically.

   Shape:
   {
     id: "kebab-case-unique-id",
     title:   { en, ar },
     excerpt: { en, ar },
     body:    { en, ar },      // HTML paragraphs
     peopleCategory: "prophets" | "companions" | "tabiun" | "arabs",
     virtues: ["id", ...],     // ids from VIRTUES in taxonomies.js
     sources: [{ en, ar }, ...],
     featured: true | false
   }
   ============================================================ */

const STORIES = [

  /* ---------- 1. PROPHET STORY ---------- */
  {
    id: "ibrahim-honored-guests",
    title: {
      en: "Ibrahim and the Honored Guests",
      ar: "إبراهيم عليه السلام وضيوفه المُكرَمون"
    },
    excerpt: {
      en: "Strangers arrive at Ibrahim's tent. Before they say a word about their errand, a roasted calf is already before them — the moment that made him the father of Arab hospitality.",
      ar: "غرباء يطرقون بيت إبراهيم عليه السلام، وقبل أن يُفصحوا عن حاجتهم كان العجل الحنيذ بين أيديهم — لحظةٌ جعلته أبا الضيافة عند العرب."
    },
    body: {
      en: "<p>They came to him as strangers out of the desert — men he had never seen, unannounced and unknown. The Qur'an calls them <em>“the honored guests of Ibrahim”</em>: angels sent by Allah, though Ibrahim, peace be upon him, did not yet know it. He saw only travelers at his door, and that was enough.</p><p>He returned their greeting of peace, and then — the Qur'an says — <em>he turned quietly to his household</em>. No asking whether they were hungry. No weighing of what the pantry could spare. He slipped away without fuss, so his guests would feel no burden of gratitude, and came back carrying a whole roasted calf — the best of his wealth, for guests who had asked for nothing.</p><p>He set it near them and said gently, <em>“Will you not eat?”</em> — inviting rather than urging, honoring rather than obliging. When their hands did not reach for the food, he felt a stir of fear, for among the Arabs a guest who would not eat might mean harm. Then the angels calmed him: <em>“Do not fear,”</em> and gave him and his wife Sarah the impossible good news of a knowing son, Ishaq, in their old age.</p><p>From this scene the scholars drew the very manners of hospitality: greet the guest with peace, serve the best you have, serve it swiftly and without announcement, bring the food near to the guest, and press no one. Ibrahim, peace be upon him, was not honoring angels — he did not know they were angels. He was honoring strangers. That is why he is remembered, among the prophets and among the Arabs alike, as the father of guests.</p>",
      ar: "<p>جاؤوه غرباء من جوف الصحراء — قومٌ لم يرهم من قبل، بلا موعد ولا معرفة. سمّاهم القرآن <em>«ضيف إبراهيم المكرمين»</em>: ملائكة أرسلهم الله، غير أن إبراهيم عليه السلام لم يكن يعلم ذلك بعد. رأى مسافرين على بابه، وكفى بذلك عنده سببًا للإكرام.</p><p>ردّ عليهم السلام، ثم — كما قال القرآن — <em>«فراغ إلى أهله»</em>: انسلّ في خفية ولطف. لم يسألهم: أجائعون أنتم؟ ولم يحسب ما يسعه البيت. ذهب من غير ضجيج حتى لا يُثقل على ضيفه بمنّة، وعاد يحمل عجلًا حنيذًا سمينًا — خير ماله، لضيوفٍ لم يطلبوا شيئًا.</p><p>قرّبه إليهم وقال برفق: <em>«ألا تأكلون؟»</em> — عرضًا لا إلحاحًا، وإكرامًا لا إلزامًا. فلما رأى أيديهم لا تصل إليه أوجس منهم خيفة؛ فقد كان الضيف عند العرب إذا لم يأكل من الطعام خُشي منه الشر. فطمأنته الملائكة: <em>«لا تخف»</em>، وبشّروه وامرأته سارة — على الكِبَر — بغلامٍ عليم، هو إسحاق عليه السلام.</p><p>من هذا المشهد استنبط العلماء آداب الضيافة نفسها: أن يُبدأ الضيف بالسلام، وأن يُقدَّم له أفضل الموجود، سريعًا ومن غير إعلان، وأن يُقرَّب الطعام إليه، وألّا يُلحّ على أحد. لم يكن إبراهيم عليه السلام يُكرم ملائكة — فهو لم يعلم أنهم ملائكة — وإنما كان يُكرم غرباء. ولهذا بقي في ذاكرة الأنبياء والعرب جميعًا: أبا الضيفان.</p>"
    },
    peopleCategory: "prophets",
    virtues: ["hospitality", "generosity"],
    sources: [
      { en: "Qur'an, Sūrat al-Dhāriyāt 51:24–30", ar: "القرآن الكريم، سورة الذاريات 24–30" },
      { en: "Qur'an, Sūrat Hūd 11:69–73", ar: "القرآن الكريم، سورة هود 69–73" },
      { en: "Tafsīr Ibn Kathīr on Sūrat al-Dhāriyāt", ar: "تفسير ابن كثير لسورة الذاريات" }
    ],
    featured: true
  },

  /* ---------- 2. COMPANION STORY ---------- */
  {
    id: "abu-bakr-gives-everything",
    title: {
      en: "“I Left Them Allah and His Messenger” — Abu Bakr Gives Everything",
      ar: "«أبقيتُ لهم الله ورسوله» — أبو بكر يتصدق بماله كله"
    },
    excerpt: {
      en: "The Prophet ﷺ called for donations for the expedition of Tabuk. Umar brought half his wealth, sure that this time he would outdo Abu Bakr. Then Abu Bakr arrived.",
      ar: "دعا النبي ﷺ إلى النفقة في غزوة تبوك، فجاء عمر بنصف ماله واثقًا أنه سيسبق أبا بكر هذه المرة. ثم جاء أبو بكر."
    },
    body: {
      en: "<p>It was the season of hardship — the army of Tabuk had to be equipped in a year of drought and long distance, and the Prophet ﷺ called on the Muslims to spend. Umar ibn al-Khattab, may Allah be pleased with him, saw his chance. <em>“Today,”</em> he said to himself, <em>“I will outdo Abu Bakr”</em> — for he had never once managed to outdo him in good.</p><p>Umar went home and came back carrying half of everything he owned. The Prophet ﷺ asked him: <em>“What have you left for your family?”</em> He answered, with a giver's pride: <em>“The like of it”</em> — half his wealth for the army, half for his household. It was an enormous gift, and he knew it.</p><p>Then Abu Bakr, may Allah be pleased with him, came carrying all that he had — everything. The Prophet ﷺ asked him the same question: <em>“What have you left for your family?”</em> And Abu Bakr answered with the sentence that has echoed ever since: <em>“I have left them Allah and His Messenger.”</em></p><p>Umar said: <em>“I shall never outdo him in anything.”</em> The lesson the scholars drew is not that every believer must empty their house — the Prophet ﷺ accepted from each man what suited his certainty and his means. It is that generosity, at its summit, is not an act of arithmetic but an act of trust: Abu Bakr did not give away his security; he had simply placed it somewhere no drought could reach.</p>",
      ar: "<p>كان ذلك في ساعة العسرة — جيش تبوك يُجهَّز في عام جدبٍ ومسافة بعيدة، وقد حثّ النبي ﷺ المسلمين على النفقة. رأى عمر بن الخطاب رضي الله عنه الفرصة سانحة، فقال في نفسه: <em>«اليوم أسبق أبا بكر»</em> — فما استطاع أن يسبقه إلى خيرٍ قط.</p><p>ذهب عمر إلى بيته وجاء يحمل نصف ماله كله. فسأله النبي ﷺ: <em>«ما أبقيتَ لأهلك؟»</em> فأجاب بفخر المنفق: <em>«مثله»</em> — نصفٌ للجيش ونصفٌ لأهل بيته. وكان عطاءً عظيمًا، وهو يعلم ذلك.</p><p>ثم جاء أبو بكر رضي الله عنه يحمل كل ما عنده — كل شيء. فسأله النبي ﷺ السؤال نفسه: <em>«ما أبقيتَ لأهلك؟»</em> فأجاب أبو بكر بالجملة التي ما زالت تتردد إلى اليوم: <em>«أبقيتُ لهم اللهَ ورسولَه»</em>.</p><p>قال عمر: <em>«لا أسبقه إلى شيء أبدًا»</em>. وليست العبرة التي استخلصها العلماء أن يُفرغ كل مؤمنٍ بيته — فقد قَبِل النبي ﷺ من كل رجلٍ ما يناسب يقينه وطاقته — وإنما العبرة أن الكرم في ذروته ليس عملية حسابية بل فعل ثقة: لم يتخلَّ أبو بكر عن أمانه، وإنما وضعه حيث لا يبلغه جدب.</p>"
    },
    peopleCategory: "companions",
    virtues: ["generosity", "truthfulness"],
    sources: [
      { en: "Sunan Abī Dāwūd 1678; Jāmiʿ al-Tirmidhī 3675 (graded ḥasan)", ar: "سنن أبي داود 1678؛ جامع الترمذي 3675 (حسّنه الترمذي)" },
      { en: "Narrated by Umar ibn al-Khattab, may Allah be pleased with him", ar: "من حديث عمر بن الخطاب رضي الله عنه" }
    ],
    featured: true
  },

  /* ---------- 3. ARAB STORY ---------- */
  {
    id: "samawal-loyalty",
    title: {
      en: "More Faithful than al-Samaw'al",
      ar: "أوفى من السَّمَوْأل"
    },
    excerpt: {
      en: "A king besieges a fortress and holds a hostage: the keeper's own son. The price of the boy's life is a betrayal of trust. The keeper's answer became a proverb the Arabs still speak.",
      ar: "ملكٌ يحاصر حصنًا وبيده رهينة: ابن صاحب الحصن نفسه. وثمن حياة الغلام خيانة أمانة. فكان جواب الأب مثلًا ما زالت العرب تضربه."
    },
    body: {
      en: "<p>Before Islam, in the fortress of al-Ablaq near Taymāʾ, lived al-Samaw'al ibn ʿĀdiyāʾ — a man whose name would become the Arabic proverb for faithfulness. The poet-prince Imruʾ al-Qays, setting out on his fateful journey to seek help from Caesar, left in al-Samaw'al's keeping a precious trust: coats of mail, the treasured arms of his royal house.</p><p>Imruʾ al-Qays died on that journey. And in time a king — narrations name al-Ḥārith ibn Abī Shamir, or another lord of the Ghassānids — came to al-Ablaq demanding the armor. Al-Samaw'al refused: the trust belonged to its owner's heirs, and no king had a claim to it. So the king laid siege to the fortress.</p><p>Then fortune handed the besieger a terrible key. A son of al-Samaw'al was outside the walls — returning, they say, from a hunt — and the king seized him. He called up to the fortress: surrender the armor, or watch your son die. Al-Samaw'al answered from the wall that treachery was not in him: <em>“He was my son; but faithfulness is a debt.”</em> The king killed the boy before his father's eyes — and the fortress did not open. When the siege failed and the king withdrew, al-Samaw'al carried the armor to the heirs of Imruʾ al-Qays at the next season of ʿUkāẓ, and the trust reached its people complete.</p><p>The Arabs, who forgave many sins but never the betrayal of a trust, coined from his name their measure of fidelity: <em>awfā min al-Samawʾal</em> — “more faithful than al-Samaw'al.” His story was told at fairs and around fires as the outer limit of what keeping one's word can cost, and what it can be worth. A man may rebuild wealth and even outlive grief; a broken trust is broken forever.</p>",
      ar: "<p>قبل الإسلام، في حصن الأبلق قرب تيماء، عاش السَّمَوْأل بن عادِياء — رجلٌ صار اسمه عند العرب مضربَ المثل في الوفاء. فقد أودعه الشاعر الملك امرؤ القيس، وهو خارجٌ في رحلته المشؤومة يطلب نصرة قيصر، وديعةً نفيسة: أدرُعًا هي ذخيرة بيته الملكي وسلاحه.</p><p>مات امرؤ القيس في تلك الرحلة. وبعد حين جاء إلى الأبلق ملكٌ — تسمّيه الروايات الحارث بن أبي شمر أو غيره من ملوك الغساسنة — يطالب بالأدراع. فأبى السموأل: الوديعة لورثة صاحبها، وليس لملكٍ فيها حق. فضرب الملك الحصار على الحصن.</p><p>ثم ألقت الأقدار بيد المحاصِر مفتاحًا رهيبًا: كان ابنٌ للسموأل خارج الأسوار — قيل عائدًا من صيد — فقبض عليه الملك، ونادى أهل الحصن: سلِّموا الأدراع أو يُقتل الغلام. فأجاب السموأل من فوق السور أن الغدر ليس من شيمته: <em>«هو ابني، ولكن الوفاء دَين»</em>. فقتل الملك الغلام أمام عين أبيه — ولم يُفتح الحصن. فلما أعيا الملكَ الحصارُ وانصرف، حمل السموأل الأدراع إلى ورثة امرئ القيس في موسم عكاظ التالي، فبلغت الأمانة أهلها كاملة.</p><p>والعربُ التي كانت تغفر ذنوبًا كثيرة ولا تغفر خيانة الأمانة، صكّت من اسمه ميزانها في الوفاء: <em>«أوفى من السموأل»</em>. وظلت قصته تُروى في الأسواق وحول النيران بوصفها الحدّ الأقصى لما قد يكلّفه الوفاء بالكلمة — ولما قد يساويه. فالمال يُستردّ، والحزن قد يُعاش بعده؛ أما الأمانة إذا انكسرت فلا تُجبر أبدًا.</p>"
    },
    peopleCategory: "arabs",
    virtues: ["loyalty", "trustworthiness", "courage"],
    sources: [
      { en: "Kitāb al-Aghānī of Abū al-Faraj al-Iṣfahānī — account of al-Samaw'al ibn ʿĀdiyāʾ", ar: "كتاب الأغاني لأبي الفرج الأصفهاني — أخبار السموأل بن عادياء" },
      { en: "Majmaʿ al-Amthāl of al-Maydānī — the proverb “awfā min al-Samawʾal”", ar: "مجمع الأمثال للميداني — مَثَل «أوفى من السموأل»" },
      { en: "Al-Shiʿr wa-l-Shuʿarāʾ of Ibn Qutaybah", ar: "الشعر والشعراء لابن قتيبة" }
    ],
    featured: true
  }

];
