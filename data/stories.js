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
     featured: true | false,
     seo: {                          // used for <title>/<meta> on story.html and for
       metaTitle:       { en, ar },  // future social/AI-generated captions. All optional —
       metaDescription: { en, ar },  // app.js falls back to title/excerpt when seo is absent.
       keywords:         { en, ar },
       pinterestDescription: { en, ar },
       instagramHashtags:    { en, ar }
     },
     purchase: {                     // story.html shows ONLY the title plus these two links.
       previewPdf: "",               // URL to a 2-3 page sample PDF ("read before buying").
       gumroadUrl: ""                // URL to this story's Gumroad product page.
     }                               // Leave either blank to hide that link/show "Coming soon".
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
    virtues: ["generosity"],
    sources: [
      { en: "Qur'an, Sūrat al-Dhāriyāt 51:24–30", ar: "القرآن الكريم، سورة الذاريات 24–30" },
      { en: "Qur'an, Sūrat Hūd 11:69–73", ar: "القرآن الكريم، سورة هود 69–73" },
      { en: "Tafsīr Ibn Kathīr on Sūrat al-Dhāriyāt", ar: "تفسير ابن كثير لسورة الذاريات" }
    ],
    featured: true,
    seo: {
      metaTitle: {
        en: "Ibrahim's Hospitality: The Honored Guests Story",
        ar: "إبراهيم عليه السلام وضيوفه المكرمون: قصة الضيافة"
      },
      metaDescription: {
        en: "The Quranic story of Prophet Ibrahim (Abraham) and his honored guests — the moment that became the origin of Arab hospitality and generosity.",
        ar: "قصة إبراهيم عليه السلام مع ضيوفه المكرمين من القرآن الكريم، وكيف أصبح أبا الضيافة عند العرب. اقرأ القصة كاملة."
      },
      keywords: {
        en: "Prophet Ibrahim story, Abraham hospitality, honored guests Quran, Arab hospitality origin, Ibrahim generosity, Islamic stories of the prophets",
        ar: "قصة إبراهيم عليه السلام, ضيوف إبراهيم, قصص الأنبياء, الضيافة عند العرب, قصص قرآنية, كرم إبراهيم عليه السلام"
      },
      pinterestDescription: {
        en: "The story of Prophet Ibrahim (Abraham) and the honored guests — how one act of generosity became the origin of Arab hospitality. A timeless tale of faith and giving.",
        ar: "قصة إبراهيم عليه السلام مع ضيوفه المكرمين — كيف صارت لحظة كرم واحدة أصل الضيافة عند العرب. قصة خالدة عن الإيمان والعطاء."
      },
      instagramHashtags: {
        en: "#ProphetIbrahim #IslamicStories #ArabHospitality #QuranStories #ProphetsOfIslam #IslamicHistory #NoorTales #MuslimStories #Hospitality #FaithStories",
        ar: "#إبراهيم_عليه_السلام #قصص_الأنبياء #الضيافة_عند_العرب #قصص_قرآنية #قصص_إسلامية #نور_تيلز #التراث_العربي #كرم_وعطاء"
      }
    },
    purchase: { previewPdf: "", gumroadUrl: "" }
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
    featured: true,
    seo: {
      metaTitle: {
        en: "Abu Bakr Gives Everything: “I Left Them Allah”",
        ar: "أبو بكر يتصدق بماله كله: «أبقيت لهم الله ورسوله»"
      },
      metaDescription: {
        en: "The story of Abu Bakr at the Battle of Tabuk, who gave away all his wealth and said: “I left them Allah and His Messenger.” A lesson in trust and generosity.",
        ar: "قصة أبي بكر الصديق رضي الله عنه في غزوة تبوك حين تصدق بكل ماله، وقال: «أبقيت لهم الله ورسوله». درس في الثقة والكرم."
      },
      keywords: {
        en: "Abu Bakr story, Battle of Tabuk, Abu Bakr generosity, companions of the prophet stories, Islamic stories of trust, Sahaba stories",
        ar: "قصة أبو بكر الصديق, غزوة تبوك, كرم الصحابة, قصص الصحابة, أبو بكر الصديق, قصص إسلامية عن الثقة بالله"
      },
      pinterestDescription: {
        en: "Abu Bakr gave away everything he owned for the sake of Allah — and when asked what he left his family, he said: “Allah and His Messenger.” A story of ultimate trust.",
        ar: "أبو بكر الصديق يتصدق بكل ماله في سبيل الله، وحين سُئل ماذا أبقى لأهله قال: «الله ورسوله». قصة عن الثقة المطلقة."
      },
      instagramHashtags: {
        en: "#AbuBakr #Sahaba #IslamicStories #BattleOfTabuk #CompanionsOfTheProphet #IslamicHistory #NoorTales #TrustInAllah #MuslimStories",
        ar: "#أبو_بكر_الصديق #الصحابة #قصص_إسلامية #غزوة_تبوك #صحابة_رسول_الله #نور_تيلز #الثقة_بالله #قصص_قرآنية"
      }
    },
    purchase: { previewPdf: "", gumroadUrl: "" }
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
    featured: true,
    seo: {
      metaTitle: {
        en: "More Faithful than al-Samaw'al: An Arab Loyalty Tale",
        ar: "أوفى من السموأل: قصة الوفاء عند العرب"
      },
      metaDescription: {
        en: "The pre-Islamic Arab proverb “more faithful than al-Samaw'al” — the story of a father who kept his trust even at the cost of his son's life.",
        ar: "قصة المثل العربي «أوفى من السموأل» — أب يحافظ على الأمانة حتى وهو يرى ابنه يُقتل أمام عينيه. قصة خالدة عن الوفاء والشرف."
      },
      keywords: {
        en: "al-Samawal story, Arab proverbs, awfa min al-Samawal, pre-Islamic Arab stories, loyalty in Arab culture, Arab honor stories",
        ar: "قصة السموأل, أمثال عربية, أوفى من السموأل, قصص عربية قبل الإسلام, الوفاء عند العرب, قصص الشرف والأمانة"
      },
      pinterestDescription: {
        en: "The Arab proverb “more faithful than al-Samaw'al” — a father's ultimate test of loyalty and keeping a trust, even when it cost him everything.",
        ar: "المثل العربي «أوفى من السموأل» — قصة أب حافظ على الأمانة حتى الرمق الأخير. قصة خالدة عن الوفاء والشرف عند العرب."
      },
      instagramHashtags: {
        en: "#ArabProverbs #ArabHistory #PreIslamicArabia #Loyalty #ArabCulture #NoorTales #ArabianStories #Honor #ArabHeritage",
        ar: "#أوفى_من_السموأل #أمثال_عربية #التراث_العربي #الوفاء #قصص_عربية #نور_تيلز #الشرف_والأمانة #العرب_قبل_الإسلام"
      }
    },
    purchase: { previewPdf: "", gumroadUrl: "" }
  },

  /* ---------- 4. PROPHET STORY (purchasable) ---------- */
  {
    id: "yusuf-trusted-boy",
    title: {
      en: "The Trusted Boy — The Story of Prophet Yusuf (Joseph)",
      ar: "الغُلام الأمين — قصة يوسف عليه السلام"
    },
    excerpt: {
      en: "From the bottom of a dark well to the treasuries of Egypt — a 49-page illustrated story for ages 4–12 about the boy who kept his integrity whatever it cost him.",
      ar: "رحلةٌ من قاع بئر مظلم إلى خزائن مصر — قصة كاملة من 49 صفحة بلغة عربية فصيحة مبسّطة ومشكولة، للأعمار 4 إلى 12 سنة، تغرس قيمة الأمانة والعفّة."
    },
    body: {
      en: "<p>They took his shirt, and they lowered him into the well. The well was cold and dark, and the sound of water echoed far below. Yusuf lifted his head to a small circle of light high above him… then he closed his eyes and called on Allah in his heart. And whoever calls on Allah is never truly alone.</p><p>Years later, in a locked room, his shirt would tear again — this time from the back, the mark that proved his innocence to everyone who saw it. And when a king's messenger finally came to free him from prison, Yusuf refused to walk out until his name was clean. <em>“The Trusted Boy”</em> follows him from that well to the treasuries of Egypt, in nine chapters written for children ages 4–12, with a “Think With Me” page after every chapter and a companion coloring book — every detail traced to the classical books of tafsīr and prophetic history.</p>",
      ar: "<p>ابتعد إخوته به عن البيت، وهناك تغيّرت الوجوه. أخذوا قميص يوسف وأنزلوه إلى قاع بئر مظلمة باردة، يتردّد صوت الماء في أسفلها. رفع يوسف رأسه إلى دائرة ضوء صغيرة بعيدة في الأعلى، ثم أغمض عينيه ودعا الله في قلبه. ومَن دعا الله لم يكن وحيدًا أبدًا.</p><p>وبعد سنين، في بيت العزيز، تمزّق قميصه من الخلف عند الباب، وفُتح الباب فجأة ليقف العزيز أمامه. اتُّهم يوسف بما لم يفعله. لكن رجلًا حكيمًا نظر إلى القميص وقال: «إن كان الشقّ من الأمام فهو المخطئ، وإن كان من الخلف فقد كان هاربًا». وكان الشقّ من الخلف، فظهرت براءته.</p><p>وفي السجن، حين أقلقت رؤيا الملكَ وطلب إحضار يوسف، جاءه الرسول يقول: اخرج، الملك يدعوك! فقال يوسف: «لا أخرج حتى يعلم الناس أنّي بريء». عجبًا لرجلٍ يُفتح له باب السجن فيرفض الخروج حتى يخرج نظيف الاسم.</p><p>من قاع البئر إلى خزائن مصر، تروي «الغُلام الأمين» رحلة يوسف عليه السلام في تسعة فصول، مع صندوق «فكّر معي» بعد كل فصل وكتاب تلوين مرافق — وكل تفصيلة فيها موثّقة من كتب التفسير والسيرة النبوية المعتمدة.</p>"
    },
    peopleCategory: "prophets",
    virtues: ["trustworthiness", "truthfulness"],
    sources: [
      { en: "Qur'an, Sūrat Yūsuf 12:1–101", ar: "القرآن الكريم، سورة يوسف 1–101" },
      { en: "Tafsīr al-Ṭabarī, Tafsīr Ibn Kathīr, Tafsīr al-Qurṭubī, and Tafsīr al-Saʿdī on Sūrat Yūsuf", ar: "تفسير الطبري وابن كثير والقرطبي والسعدي لسورة يوسف" }
    ],
    featured: true,
    seo: {
      metaTitle: {
        en: "The Trusted Boy: Prophet Yusuf Story for Kids",
        ar: "الغُلام الأمين: قصة يوسف عليه السلام للأطفال"
      },
      metaDescription: {
        en: "49-page illustrated story of Prophet Yusuf for ages 4-12. Teaches integrity. No prophet images. Coloring book included.",
        ar: "قصة مصوّرة من 49 صفحة عن يوسف عليه السلام للأعمار 4–12 — من البئر إلى خزائن مصر، موثّقة من كتب التفسير المعتمدة. اقرأ عيّنة مجانية."
      },
      keywords: {
        en: "Prophet Yusuf story for kids, Islamic stories for children PDF download, illustrated story books for children ages 4 to 12, best moral stories for children about honesty, Islamic children's books without images of prophets, printable story book for kids, prophet Joseph story for children Islamic, Islamic homeschool reading curriculum ages 4-12, Muslim kids coloring book printable, teaching modesty and integrity to children, Noor Tales",
        ar: "قصة يوسف عليه السلام للأطفال, قصة سيدنا يوسف, كتاب أطفال إسلامي, قصص الأنبياء للأطفال, الأمانة والصدق, نور تيلز"
      },
      pinterestDescription: {
        en: "Prophet Yusuf story for kids - a 49-page illustrated children's book for ages 4-12 that teaches honesty, integrity and modesty through story, not lecturing. Includes a 6-page printable coloring book, comprehension and moral discussion questions after every chapter, and a full academic reference page sourced from classical tafsir. Contains no images depicting the Prophet. Perfect for Muslim homeschool, Islamic weekend schools, and Ramadan activities. Instant PDF download - read a free sample first. Islamic children's books | Islamic stories for kids | Prophet stories for kids",
        ar: "الغُلام الأمين — قصة يوسف عليه السلام، من البئر إلى خزائن مصر. قصة إسلامية مصوّرة للأطفال من سن 4 إلى 12 سنة."
      },
      instagramHashtags: {
        en: "#IslamicStoriesForKids #ProphetYusuf #MuslimKids #CharacterEducation #MuslimHomeschool #ChildrensBooks #StoryTime #TeachingIntegrity #KidsBooks #ProphetStories",
        ar: "#يوسف_عليه_السلام #قصص_الأنبياء #كتب_أطفال #قصص_إسلامية_للأطفال #نور_تيلز #الأمانة #قصص_قرآنية"
      }
    },
    purchase: { previewPdf: "previews/yusuf-trusted-boy.pdf", gumroadUrl: "https://qurashi1.gumroad.com/l/iklhtq" }
  },

  /* ---------- 5–7. PLACEHOLDERS — replace title/category/virtues/body
                     with real content as each story is written ---------- */
  {
    id: "coming-soon-2",
    title: { en: "Coming Soon", ar: "قريبًا" },
    excerpt: {
      en: "A new story is on its way. Check back soon.",
      ar: "قصة جديدة في الطريق. تابعونا قريبًا."
    },
    body: { en: "<p>This story is being written.</p>", ar: "<p>هذه القصة قيد الإعداد.</p>" },
    peopleCategory: "",
    virtues: [],
    sources: [],
    featured: false,
    seo: {},
    purchase: { previewPdf: "", gumroadUrl: "" }
  },
  {
    id: "coming-soon-3",
    title: { en: "Coming Soon", ar: "قريبًا" },
    excerpt: {
      en: "A new story is on its way. Check back soon.",
      ar: "قصة جديدة في الطريق. تابعونا قريبًا."
    },
    body: { en: "<p>This story is being written.</p>", ar: "<p>هذه القصة قيد الإعداد.</p>" },
    peopleCategory: "",
    virtues: [],
    sources: [],
    featured: false,
    seo: {},
    purchase: { previewPdf: "", gumroadUrl: "" }
  },
  {
    id: "coming-soon-4",
    title: { en: "Coming Soon", ar: "قريبًا" },
    excerpt: {
      en: "A new story is on its way. Check back soon.",
      ar: "قصة جديدة في الطريق. تابعونا قريبًا."
    },
    body: { en: "<p>This story is being written.</p>", ar: "<p>هذه القصة قيد الإعداد.</p>" },
    peopleCategory: "",
    virtues: [],
    sources: [],
    featured: false,
    seo: {},
    purchase: { previewPdf: "", gumroadUrl: "" }
  }

];
