"use client";
import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════
// i18n TRANSLATIONS — RU / EN / KZ
// ═══════════════════════════════════════════════════════

const T = {
  ru: {
    langLabel: "RU",
    heroLabel: "Химчистка в Астане",
    heroTitle: "Профессиональный уход за вещами с\u00A0вниманием к\u00A0качеству и\u00A0деталям",
    heroSub: "Serenity — химчистка в Астане с аккуратным сервисом, понятной консультацией и бережным подходом к изделиям.",
    heroNote: "Одежда, обувь, шторы, одеяла и подушки — с возможностью заранее уточнить стоимость, сроки и особенности обработки.",
    ctaWhatsApp: "Написать в WhatsApp",
    ctaServices: "Выбрать услуги",
    introTexts: [
      "Serenity — современная химчистка в Астане для тех, кому важны аккуратность, понятный сервис и уверенность в результате.",
      "Вы можете заранее написать нам в WhatsApp, отправить фото изделия и уточнить стоимость, сроки и возможность обработки.",
    ],
    whyTitle: "Почему выбирают Serenity",
    whySub: "Мы делаем ставку не только на результат обработки, но и на общее качество сервиса.",
    benefits: [
      { title: "Бережный подход", text: "Каждое изделие требует внимательного отношения и правильно подобранной обработки." },
      { title: "Понятная консультация", text: "Заранее объясняем важные нюансы, сроки и особенности обработки." },
      { title: "Стабильное качество", text: "Для нас важны аккуратность, предсказуемость и общий уровень результата." },
      { title: "Удобная связь", text: "Можно сразу написать в WhatsApp и уточнить всё по фото изделия." },
      { title: "Аккуратная подача", text: "Для нас важен не только результат чистки, но и впечатление от сервиса в целом." },
      { title: "Современный сервис", text: "Спокойный, понятный и аккуратно выстроенный клиентский опыт на каждом этапе." },
    ],
    catTitle: "Что мы принимаем",
    catSub: "Основные категории, с которыми мы работаем чаще всего.",
    categories: [
      { title: "Верхняя одежда", desc: "Куртки, пальто, жилеты, ветровки" },
      { title: "Обувь", desc: "Текстильная, кожаная, замшевая, деликатная, детская" },
      { title: "Одеяла и подушки", desc: "Изделия, требующие аккуратной и профессиональной обработки" },
      { title: "Шторы и тюль", desc: "Лёгкие, плотные и двусторонние изделия" },
      { title: "Домашний текстиль", desc: "Изделия для дома, которым нужен профессиональный уход" },
    ],
    servTitle: "Выберите нужные изделия",
    servSub: "Отметьте интересующие позиции, и мы подготовим сообщение для WhatsApp.",
    serviceGroups: [
      { title: "Куртки и верхняя одежда", note: "Точная стоимость зависит от типа, длины и особенностей изделия." },
      { title: "Обувь", note: null },
      { title: "Одеяла и подушки", note: null },
      { title: "Шторы и тюль", note: "Для точного расчёта по шторам можно отправить фото и параметры в WhatsApp." },
    ],
    selectedCount: "Выбрано",
    selectedUnit: ["позиция", "позиции", "позиций"],
    sendRequest: "Отправить запрос в WhatsApp",
    stepsTitle: "Как проходит работа",
    steps: [
      { title: "Вы обращаетесь к нам", text: "Можно написать в WhatsApp, отправить фото изделия или выбрать нужные услуги прямо на сайте." },
      { title: "Мы уточняем детали", text: "Подсказываем по стоимости, срокам и возможности обработки." },
      { title: "Подбираем способ чистки", text: "Способ обработки определяется с учётом типа изделия, материала и особенностей ухода." },
      { title: "Выполняем чистку и сушку", text: "Каждое изделие проходит обработку в соответствии с его характеристиками." },
      { title: "Подготавливаем к выдаче", text: "После обработки изделие подготавливается к выдаче аккуратно и в надлежащем виде." },
    ],
    locTitle: "Наши пункты приёма",
    locSub: "Выберите удобную для вас точку или напишите нам в WhatsApp.",
    openIn2GIS: "2GIS",
    waBlockTitle: "Удобнее всего — написать нам в\u00A0WhatsApp",
    waBlockText: "Если вы хотите заранее уточнить стоимость, сроки или возможность обработки, просто отправьте нам сообщение. Можно сразу приложить фото изделия — так мы быстрее сориентируем вас по деталям.",
    priceTitle: "Полный прайс",
    priceText: "На сайте представлены самые частые категории. Полный прайс со всеми позициями можно открыть отдельно.",
    priceBtn: "Смотреть полный прайс",
    faqTitle: "Частые вопросы",
    faq: [
      { q: "Как узнать стоимость?", a: "Вы можете выбрать нужные позиции на сайте или просто написать нам в WhatsApp. По некоторым изделиям точная стоимость уточняется по типу, размеру или материалу." },
      { q: "Можно ли заранее отправить фото изделия?", a: "Да. По фото мы сможем предварительно сориентировать вас по стоимости, срокам и возможности обработки." },
      { q: "От чего зависит срок готовности?", a: "Срок зависит от типа изделия, материала, степени загрязнения и текущей загрузки. Точный срок сообщается при обращении." },
      { q: "Есть ли ускоренная обработка?", a: "Для части изделий такая возможность есть. Это уточняется индивидуально." },
      { q: "Можно ли обратиться на английском или казахском языке?", a: "Да, вы можете написать нам на русском, английском или казахском языке." },
      { q: "Где посмотреть полный прайс?", a: "Полный прайс доступен в отдельном PDF-файле на сайте." },
      { q: "Можно ли заранее понять, примете ли вы изделие в работу?", a: "Предварительно — да. Для этого лучше отправить фото изделия и, если есть, фото маркировки." },
    ],
    finalCtaTitle: "Отправьте запрос в WhatsApp",
    finalCtaText: "Подскажем по стоимости, срокам и возможности обработки.",
    footerTagline: "Химчистка в Астане",
    footerLocations: "Пункты приёма",
    footerSchedule: "График работы",
    footerRights: "Все права защищены.",
    waDefaultMsg: "Здравствуйте. Хочу узнать по чистке изделия. Подскажите, пожалуйста, по стоимости, срокам и возможности обработки.",
    waServiceMsg: (items) => `Здравствуйте. Хочу уточнить по следующим изделиям:\n\n${items}\n\nПодскажите, пожалуйста, по стоимости, срокам и возможности обработки.`,
  },

  en: {
    langLabel: "EN",
    heroLabel: "Dry cleaning in Astana",
    heroTitle: "Professional garment care with\u00A0attention to\u00A0quality and\u00A0detail",
    heroSub: "Serenity — dry cleaning in Astana with careful service, clear consultations and a gentle approach to your items.",
    heroNote: "Clothing, footwear, curtains, blankets and pillows — with the option to check the cost, timing and processing details in advance.",
    ctaWhatsApp: "Message us on WhatsApp",
    ctaServices: "Choose services",
    introTexts: [
      "Serenity is a modern dry cleaning service in Astana for those who value care, transparency and confidence in the result.",
      "You can message us on WhatsApp in advance, send a photo of your item and check the cost, timing and processing options.",
    ],
    whyTitle: "Why choose Serenity",
    whySub: "We focus not only on the cleaning result, but on the overall quality of service.",
    benefits: [
      { title: "Gentle care", text: "Every item requires careful attention and the right processing method." },
      { title: "Clear consultation", text: "We explain important details, timing and processing specifics in advance." },
      { title: "Consistent quality", text: "We value precision, predictability and a high standard of results." },
      { title: "Easy communication", text: "You can message us on WhatsApp and get answers with just a photo." },
      { title: "Premium presentation", text: "We care about the overall impression, not just the cleaning result." },
      { title: "Modern service", text: "A calm, clear and well-organized customer experience at every step." },
    ],
    catTitle: "What we accept",
    catSub: "The main categories we work with most often.",
    categories: [
      { title: "Outerwear", desc: "Jackets, coats, vests, windbreakers" },
      { title: "Footwear", desc: "Textile, leather, suede, delicate, children's" },
      { title: "Blankets & pillows", desc: "Items requiring careful professional care" },
      { title: "Curtains & tulle", desc: "Light, heavy and double-sided fabrics" },
      { title: "Home textiles", desc: "Household items that need professional care" },
    ],
    servTitle: "Select items for cleaning",
    servSub: "Check the items you need and we'll prepare a WhatsApp message for you.",
    serviceGroups: [
      { title: "Jackets & outerwear", note: "The exact cost depends on the type, length and specifics of the item." },
      { title: "Footwear", note: null },
      { title: "Blankets & pillows", note: null },
      { title: "Curtains & tulle", note: "For an accurate quote on curtains, please send a photo and dimensions via WhatsApp." },
    ],
    selectedCount: "Selected",
    selectedUnit: ["item", "items", "items"],
    sendRequest: "Send request via WhatsApp",
    stepsTitle: "How the process works",
    steps: [
      { title: "You contact us", text: "Message us on WhatsApp, send a photo of your item or select the services you need on the website." },
      { title: "We clarify details", text: "We advise on the cost, timing and processing options." },
      { title: "We choose the method", text: "The processing method is selected based on the item type, material and care requirements." },
      { title: "We clean and dry", text: "Each item is processed according to its specific characteristics." },
      { title: "We prepare for pickup", text: "After processing, the item is carefully prepared for collection." },
    ],
    locTitle: "Our drop-off points",
    locSub: "Choose a convenient location or message us on WhatsApp.",
    openIn2GIS: "2GIS",
    waBlockTitle: "The easiest way — message us on\u00A0WhatsApp",
    waBlockText: "If you'd like to check the cost, timing or processing options in advance, simply send us a message. You can attach a photo of the item right away — this helps us give you faster answers.",
    priceTitle: "Full price list",
    priceText: "The website shows the most common categories. The full price list with all items is available as a separate file.",
    priceBtn: "View full price list",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How can I find out the cost?", a: "You can select the items on the website or simply message us on WhatsApp. For some items, the exact cost depends on the type, size or material." },
      { q: "Can I send a photo of the item in advance?", a: "Yes. Based on the photo, we can give you a preliminary estimate of the cost, timing and processing options." },
      { q: "What does the turnaround time depend on?", a: "The time depends on the item type, material, level of soiling and current workload. The exact time is provided when you contact us." },
      { q: "Is express processing available?", a: "For some items, yes. This is determined on a case-by-case basis." },
      { q: "Can I contact you in English or Kazakh?", a: "Yes, you can message us in Russian, English or Kazakh." },
      { q: "Where can I see the full price list?", a: "The full price list is available as a separate PDF file on the website." },
      { q: "Can I find out in advance if you'll accept my item?", a: "Tentatively, yes. It's best to send a photo of the item and, if available, a photo of the care label." },
    ],
    finalCtaTitle: "Send a request via WhatsApp",
    finalCtaText: "We'll advise on the cost, timing and processing options.",
    footerTagline: "Dry cleaning in Astana",
    footerLocations: "Drop-off points",
    footerSchedule: "Working hours",
    footerRights: "All rights reserved.",
    waDefaultMsg: "Hello. I'd like to inquire about cleaning an item. Could you please advise on the cost, timing and processing options?",
    waServiceMsg: (items) => `Hello. I'd like to ask about the following items:\n\n${items}\n\nCould you please advise on the cost, timing and processing options?`,
  },

  kz: {
    langLabel: "KZ",
    heroLabel: "Астанадағы химиялық тазалау",
    heroTitle: "Заттарға кәсіби күтім — сапа мен\u00A0егжей-тегжейге\u00A0назар аудара отырып",
    heroSub: "Serenity — Астанадағы химиялық тазалау. Ұқыпты сервис, түсінікті кеңес және бұйымдарға ұқыпты қарым-қатынас.",
    heroNote: "Киім, аяқ киім, перделер, көрпелер мен жастықтар — құнын, мерзімін және өңдеу ерекшеліктерін алдын ала білу мүмкіндігімен.",
    ctaWhatsApp: "WhatsApp-қа жазу",
    ctaServices: "Қызметтерді таңдау",
    introTexts: [
      "Serenity — Астанадағы заманауи химиялық тазалау. Ұқыптылық, түсінікті сервис және нәтижеге сенімділік маңызды адамдарға арналған.",
      "WhatsApp-қа алдын ала жазып, бұйымның фотосын жіберіп, құнын, мерзімін және өңдеу мүмкіндігін білуге болады.",
    ],
    whyTitle: "Неліктен Serenity таңдайды",
    whySub: "Біз тек өңдеу нәтижесіне ғана емес, жалпы сервис сапасына баса назар аударамыз.",
    benefits: [
      { title: "Ұқыпты тәсіл", text: "Әрбір бұйым зейінді қарым-қатынас пен дұрыс таңдалған өңдеуді талап етеді." },
      { title: "Түсінікті кеңес", text: "Маңызды нюанстарды, мерзімдерді және өңдеу ерекшеліктерін алдын ала түсіндіреміз." },
      { title: "Тұрақты сапа", text: "Біз үшін ұқыптылық, болжамдылық және нәтиженің жалпы деңгейі маңызды." },
      { title: "Ыңғайлы байланыс", text: "WhatsApp-қа жазып, бұйымның фотосы бойынша бәрін анықтауға болады." },
      { title: "Ұқыпты презентация", text: "Біз үшін тек тазалау нәтижесі ғана емес, жалпы сервис әсері маңызды." },
      { title: "Заманауи сервис", text: "Әр кезеңде тыныш, түсінікті және ұқыпты құрылған клиенттік тәжірибе." },
    ],
    catTitle: "Біз не қабылдаймыз",
    catSub: "Біз жиі жұмыс істейтін негізгі санаттар.",
    categories: [
      { title: "Сыртқы киім", desc: "Күртешелер, пальтолар, жилеттер, жел күртешелер" },
      { title: "Аяқ киім", desc: "Мата, тері, замша, нәзік, балалар" },
      { title: "Көрпелер мен жастықтар", desc: "Ұқыпты кәсіби өңдеуді қажет ететін бұйымдар" },
      { title: "Перделер мен тюль", desc: "Жеңіл, тығыз және екі жақты бұйымдар" },
      { title: "Үй текстилі", desc: "Кәсіби күтімді қажет ететін үй бұйымдары" },
    ],
    servTitle: "Қажетті бұйымдарды таңдаңыз",
    servSub: "Қызықтыратын позицияларды белгілеңіз, біз WhatsApp үшін хабарлама дайындаймыз.",
    serviceGroups: [
      { title: "Күртешелер мен сыртқы киім", note: "Нақты құны бұйымның түріне, ұзындығына және ерекшеліктеріне байланысты." },
      { title: "Аяқ киім", note: null },
      { title: "Көрпелер мен жастықтар", note: null },
      { title: "Перделер мен тюль", note: "Перделер бойынша нақты есеп үшін WhatsApp-қа фото мен параметрлерді жіберуге болады." },
    ],
    selectedCount: "Таңдалды",
    selectedUnit: ["позиция", "позиция", "позиция"],
    sendRequest: "WhatsApp-қа сұрау жіберу",
    stepsTitle: "Жұмыс қалай жүреді",
    steps: [
      { title: "Сіз бізге хабарласасыз", text: "WhatsApp-қа жазуға, бұйымның фотосын жіберуге немесе сайттан қажетті қызметтерді таңдауға болады." },
      { title: "Біз мәліметтерді нақтылаймыз", text: "Құны, мерзімі және өңдеу мүмкіндігі бойынша кеңес береміз." },
      { title: "Тазалау тәсілін таңдаймыз", text: "Өңдеу тәсілі бұйымның түрін, материалын және күтім ерекшеліктерін ескере отырып анықталады." },
      { title: "Тазалау мен кептіруді орындаймыз", text: "Әрбір бұйым өзінің сипаттамаларына сәйкес өңделеді." },
      { title: "Беруге дайындаймыз", text: "Өңдеуден кейін бұйым ұқыпты түрде беруге дайындалады." },
    ],
    locTitle: "Біздің қабылдау пункттері",
    locSub: "Ыңғайлы нүктені таңдаңыз немесе бізге WhatsApp-қа жазыңыз.",
    openIn2GIS: "2GIS",
    waBlockTitle: "Ең ыңғайлысы — бізге WhatsApp-қа\u00A0жазу",
    waBlockText: "Құнын, мерзімін немесе өңдеу мүмкіндігін алдын ала білгіңіз келсе, бізге хабарлама жіберіңіз. Бұйымның фотосын бірден қоса жіберуге болады — солай біз сізге мәліметтерді тезірек айта аламыз.",
    priceTitle: "Толық прайс",
    priceText: "Сайтта ең жиі кездесетін санаттар ұсынылған. Барлық позициялармен толық прайсты бөлек ашуға болады.",
    priceBtn: "Толық прайсты көру",
    faqTitle: "Жиі қойылатын сұрақтар",
    faq: [
      { q: "Құнын қалай білуге болады?", a: "Сайтта қажетті позицияларды таңдауға немесе WhatsApp-қа жазуға болады. Кейбір бұйымдар бойынша нақты құны түріне, өлшеміне немесе материалына байланысты нақтыланады." },
      { q: "Бұйымның фотосын алдын ала жіберуге бола ма?", a: "Иә. Фото бойынша құны, мерзімі және өңдеу мүмкіндігі туралы алдын ала бағдар бере аламыз." },
      { q: "Дайындық мерзімі неге байланысты?", a: "Мерзім бұйымның түріне, материалына, ластану дәрежесіне және ағымдағы жүктемеге байланысты. Нақты мерзім хабарласқанда хабарланады." },
      { q: "Жеделдетілген өңдеу бар ма?", a: "Кейбір бұйымдар үшін мұндай мүмкіндік бар. Бұл жеке нақтыланады." },
      { q: "Ағылшын немесе қазақ тілінде хабарласуға бола ма?", a: "Иә, бізге орыс, ағылшын немесе қазақ тілінде жазуға болады." },
      { q: "Толық прайсты қайдан көруге болады?", a: "Толық прайс сайтта жеке PDF файлында қолжетімді." },
      { q: "Бұйымды жұмысқа қабылдайтыныңызды алдын ала білуге бола ма?", a: "Алдын ала — иә. Ол үшін бұйымның фотосын және бар болса, таңбалау фотосын жіберген жөн." },
    ],
    finalCtaTitle: "WhatsApp-қа сұрау жіберіңіз",
    finalCtaText: "Құны, мерзімі және өңдеу мүмкіндігі бойынша кеңес береміз.",
    footerTagline: "Астанадағы химиялық тазалау",
    footerLocations: "Қабылдау пункттері",
    footerSchedule: "Жұмыс кестесі",
    footerRights: "Барлық құқықтар қорғалған.",
    waDefaultMsg: "Сәлеметсіз бе. Бұйымды тазалау туралы білгім келеді. Құны, мерзімі және өңдеу мүмкіндігі бойынша кеңес берсеңіз.",
    waServiceMsg: (items) => `Сәлеметсіз бе. Келесі бұйымдар бойынша нақтылағым келеді:\n\n${items}\n\nҚұны, мерзімі және өңдеу мүмкіндігі бойынша кеңес берсеңіз.`,
  },
};



const LANGS = ["ru", "en", "kz"];
const WHATSAPP_NUMBER = "77769262888";
const INSTAGRAM_URL = "https://www.instagram.com/serenity.clean";
const PRICE_PDF_URL = "serenity-price.pdf";

const LOGO_BLACK = "data:image/png;base64,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";
const LOGO_WHITE = "data:image/png;base64,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";

const BENEFIT_ICONS = ["🤲", "💬", "✓", "📱", "✦", "◈"];
const CATEGORY_ICONS = ["🧥", "👟", "☁️", "🪟", "🏠"];
const STEP_NUMS = ["01", "02", "03", "04", "05"];

const SERVICE_ITEMS = {
  ru: [
    [
      { name: "Куртка зимняя", price: "от 7 000 ₸" },
      { name: "Пуховой жилет", price: "5 000 ₸" },
      { name: "Куртка-ветровка", price: "6 000 ₸" },
      { name: "Полупальто", price: "6 000 ₸" },
      { name: "Пальто демисезонное", price: "7 500 ₸" },
      { name: "Пальто зимнее", price: "10 000 ₸" },
    ],
    [
      { name: "Обувь текстиль / синтетика", price: "9 000 ₸" },
      { name: "Обувь кожа / замша / нубук", price: "10 000 ₸" },
      { name: "Обувь мех", price: "12 000 ₸" },
      { name: "Обувь деликатная", price: "12 000 ₸" },
      { name: "Детская обувь", price: "уточняется" },
    ],
    [
      { name: "Одеяло полуторное", price: "5 000 ₸" },
      { name: "Одеяло двуспальное", price: "7 000 ₸" },
      { name: "Подушка синтепоновая", price: "4 000 ₸" },
      { name: "Подушка пуховая", price: "4 000 ₸" },
    ],
    [
      { name: "Тюль", price: "от 2 500 ₸/кг" },
      { name: "Шторы обычные", price: "от 3 500 ₸/кг" },
      { name: "Шторы двусторонние", price: "уточняется" },
    ],
  ],
  en: [
    [
      { name: "Winter jacket", price: "from 7,000 ₸" },
      { name: "Down vest", price: "5,000 ₸" },
      { name: "Windbreaker", price: "6,000 ₸" },
      { name: "Short coat", price: "6,000 ₸" },
      { name: "Demi-season coat", price: "7,500 ₸" },
      { name: "Winter coat", price: "10,000 ₸" },
    ],
    [
      { name: "Textile / synthetic footwear", price: "9,000 ₸" },
      { name: "Leather / suede / nubuck", price: "10,000 ₸" },
      { name: "Fur footwear", price: "12,000 ₸" },
      { name: "Delicate footwear", price: "12,000 ₸" },
      { name: "Children's footwear", price: "TBD" },
    ],
    [
      { name: "Single blanket", price: "5,000 ₸" },
      { name: "Double blanket", price: "7,000 ₸" },
      { name: "Synthetic pillow", price: "4,000 ₸" },
      { name: "Down pillow", price: "4,000 ₸" },
    ],
    [
      { name: "Tulle", price: "from 2,500 ₸/kg" },
      { name: "Regular curtains", price: "from 3,500 ₸/kg" },
      { name: "Double-sided curtains", price: "TBD" },
    ],
  ],
  kz: [
    [
      { name: "Қысқы күртеше", price: "7 000 ₸-ден" },
      { name: "Мамық жилет", price: "5 000 ₸" },
      { name: "Жел күртеше", price: "6 000 ₸" },
      { name: "Жарты пальто", price: "6 000 ₸" },
      { name: "Демисезондық пальто", price: "7 500 ₸" },
      { name: "Қысқы пальто", price: "10 000 ₸" },
    ],
    [
      { name: "Мата / синтетика аяқ киім", price: "9 000 ₸" },
      { name: "Тері / замша / нубук", price: "10 000 ₸" },
      { name: "Үлпілдек аяқ киім", price: "12 000 ₸" },
      { name: "Нәзік аяқ киім", price: "12 000 ₸" },
      { name: "Балалар аяқ киімі", price: "нақтыланады" },
    ],
    [
      { name: "Жарты көрпе", price: "5 000 ₸" },
      { name: "Қос көрпе", price: "7 000 ₸" },
      { name: "Синтепон жастық", price: "4 000 ₸" },
      { name: "Мамық жастық", price: "4 000 ₸" },
    ],
    [
      { name: "Тюль", price: "2 500 ₸/кг-ден" },
      { name: "Қарапайым перделер", price: "3 500 ₸/кг-ден" },
      { name: "Екі жақты перделер", price: "нақтыланады" },
    ],
  ],
};

const LOCATIONS = {
  ru: [
    { address: "Туран 22/1", hours: "Ежедневно: 09:00–20:00", gis: "https://go.2gis.com/5GxTc", wa: "77769262888" },
    { address: "Кайым Мухамедханова 4а, магазин Mitris", hours: "Ежедневно: 10:00–19:00", gis: "https://go.2gis.com/w8GVG", wa: "77714167908" },
    { address: "Алихан Бокейхан, 16/3", hours: "Ежедневно: 10:00–19:00", gis: "https://go.2gis.com/IbsFZ", wa: "77779262888" },
  ],
  en: [
    { address: "Turan 22/1", hours: "Daily: 09:00–20:00", gis: "https://go.2gis.com/5GxTc", wa: "77769262888" },
    { address: "Kaiym Mukhamedkhanov 4a, Mitris store", hours: "Daily: 10:00–19:00", gis: "https://go.2gis.com/w8GVG", wa: "77714167908" },
    { address: "Alikhan Bokeikhan, 16/3", hours: "Daily: 10:00–19:00", gis: "https://go.2gis.com/IbsFZ", wa: "77779262888" },
  ],
  kz: [
    { address: "Тұран 22/1", hours: "Күн сайын: 09:00–20:00", gis: "https://go.2gis.com/5GxTc", wa: "77769262888" },
    { address: "Қайым Мұхамедханов 4а, Mitris дүкені", hours: "Күн сайын: 10:00–19:00", gis: "https://go.2gis.com/w8GVG", wa: "77714167908" },
    { address: "Әліхан Бөкейхан, 16/3", hours: "Күн сайын: 10:00–19:00", gis: "https://go.2gis.com/IbsFZ", wa: "77779262888" },
  ],
};

function waLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function buildServiceMsg(selected, t) {
  const items = selected.map((s) => `— ${s.name} (${s.price})`).join("\n");
  return t.waServiceMsg(items);
}

function pluralize(n, forms) {
  if (n === 1) return forms[0];
  if (n >= 2 && n <= 4) return forms[1];
  return forms[2];
}

// ═══════════════════════════════════════════════════════
// ANIMATION HOOK
// ═══════════════════════════════════════════════════════

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}


// ═══════════════════════════════════════════════════════
// ICONS (inline SVG to avoid dependencies)
// ═══════════════════════════════════════════════════════

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MapIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChevronDown = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);


export default function SerenityLanding() {
  const [selected, setSelected] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const [lang, setLang] = useState("ru");
  const servicesRef = useRef(null);

  const t = T[lang];

  useEffect(() => {
    setSelected([]);
    setActiveGroup(0);
    setOpenFaq(null);
  }, [lang]);

  const toggleItem = (item) => {
    setSelected((prev) => {
      const exists = prev.find((s) => s.name === item.name);
      return exists ? prev.filter((s) => s.name !== item.name) : [...prev, item];
    });
  };

  const isSelected = (name) => selected.some((s) => s.name === name);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendSelectedToWA = () => {
    if (selected.length === 0) return;
    window.open(waLink(buildServiceMsg(selected, t)), "_blank");
  };

  return (
    <>


      {/* ════════ HEADER ════════ */}
      <header className="sr-header">
        <div className="sr-wrap sr-header-inner">
          <a href="#" className="sr-logo"><img src={LOGO_BLACK} alt="Serenity" className="sr-logo-img" /></a>
          <div className="sr-header-right">
            <div className="sr-lang">
              {LANGS.map((l) => (
                <button key={l} className={`sr-lang-btn${lang === l ? " active" : ""}`} onClick={() => setLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href={waLink(t.waDefaultMsg)} target="_blank" rel="noopener noreferrer" className="sr-header-wa">
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ════════ HERO ════════ */}
      <section className="sr-hero">
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-hero-label">{t.heroLabel}</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>{t.heroTitle}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sr-hero-sub">{t.heroSub}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="sr-hero-buttons">
              <a href={waLink(t.waDefaultMsg)} target="_blank" rel="noopener noreferrer" className="sr-btn-primary">
                <WhatsAppIcon /> {t.ctaWhatsApp}
              </a>
              <button onClick={scrollToServices} className="sr-btn-secondary">
                ↓ {t.ctaServices}
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="sr-hero-note">{t.heroNote}</p>
          </Reveal>
        </div>
      </section>

      {/* ════════ INTRO ════════ */}
      <section className="sr-intro">
        <div className="sr-wrap">
          <div className="sr-divider" style={{ marginBottom: 48 }} />
          <Reveal>
            {t.introTexts.map((txt, i) => <p key={i}>{txt}</p>)}
          </Reveal>
        </div>
      </section>

      {/* ════════ BENEFITS ════════ */}
      <section className="sr-section">
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-section-header">
              <h2>{t.whyTitle}</h2>
              <p>{t.whySub}</p>
            </div>
          </Reveal>
          <div className="sr-benefits-grid">
            {t.benefits.map((b, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="sr-benefit-card">
                  <div className="sr-benefit-icon">{BENEFIT_ICONS[i]}</div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CATEGORIES ════════ */}
      <section className="sr-section" style={{ background: "#FFFFFF" }}>
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-section-header">
              <h2>{t.catTitle}</h2>
              <p>{t.catSub}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="sr-cat-grid">
              {t.categories.map((c, i) => (
                <div className="sr-cat-card" key={i}>
                  <div className="sr-cat-icon">{CATEGORY_ICONS[i]}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ SERVICE SELECTOR ════════ */}
      <section className="sr-section-lg" ref={servicesRef} id="services">
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-section-header">
              <h2>{t.servTitle}</h2>
              <p>{t.servSub}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sr-services-tabs">
              {t.serviceGroups.map((g, i) => (
                <button key={i} className={`sr-tab${activeGroup === i ? " active" : ""}`} onClick={() => setActiveGroup(i)}>
                  {g.title}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="sr-service-items">
              {SERVICE_ITEMS[lang][activeGroup].map((item) => (
                <div
                  key={item.name}
                  className={`sr-service-item${isSelected(item.name) ? " checked" : ""}`}
                  onClick={() => toggleItem(item)}
                >
                  <div className="sr-service-check">
                    {isSelected(item.name) && <CheckIcon />}
                  </div>
                  <span className="sr-service-name">{item.name}</span>
                  <span className="sr-service-price">{item.price}</span>
                </div>
              ))}
            </div>
            {t.serviceGroups[activeGroup].note && (
              <p className="sr-service-note">{t.serviceGroups[activeGroup].note}</p>
            )}
          </Reveal>

          {selected.length > 0 && (
            <div className="sr-selected-bar">
              <div className="sr-wrap sr-selected-bar-inner">
                <span className="sr-selected-count">
                  {t.selectedCount}: <strong>{selected.length}</strong> {pluralize(selected.length, t.selectedUnit)}
                </span>
                <button className="sr-btn-wa-send" onClick={sendSelectedToWA}>
                  <WhatsAppIcon /> {t.sendRequest}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ════════ STEPS ════════ */}
      <section className="sr-section" style={{ background: "#FFFFFF" }}>
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-section-header">
              <h2>{t.stepsTitle}</h2>
            </div>
          </Reveal>
          <div className="sr-steps">
            {t.steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="sr-step">
                  <span className="sr-step-num">{STEP_NUMS[i]}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ LOCATIONS ════════ */}
      <section className="sr-section">
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-section-header">
              <h2>{t.locTitle}</h2>
              <p>{t.locSub}</p>
            </div>
          </Reveal>
          <div className="sr-locations-grid">
            {LOCATIONS[lang].map((loc, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="sr-location-card">
                  <h3>{loc.address}</h3>
                  <p className="sr-location-hours">{loc.hours}</p>
                  <div className="sr-location-btns">
                    <a href={waLink(t.waDefaultMsg, loc.wa)} target="_blank" rel="noopener noreferrer" className="sr-loc-btn sr-loc-btn-wa">
                      <WhatsAppIcon size={15} /> WhatsApp
                    </a>
                    <a href={loc.gis} target="_blank" rel="noopener noreferrer" className="sr-loc-btn sr-loc-btn-gis">
                      <MapIcon size={15} /> {t.openIn2GIS}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WA BLOCK ════════ */}
      <section className="sr-section">
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-wa-block">
              <h2>{t.waBlockTitle}</h2>
              <p>{t.waBlockText}</p>
              <a href={waLink(t.waDefaultMsg)} target="_blank" rel="noopener noreferrer" className="sr-btn-wa-white">
                <WhatsAppIcon size={18} /> {t.ctaWhatsApp}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ PRICE PDF ════════ */}
      <section className="sr-section">
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-price-block">
              <h2>{t.priceTitle}</h2>
              <p>{t.priceText}</p>
              <a href={PRICE_PDF_URL} target="_blank" rel="noopener noreferrer" className="sr-btn-outline">
                📄 {t.priceBtn}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="sr-section" style={{ background: "#FFFFFF" }}>
        <div className="sr-wrap">
          <Reveal>
            <div className="sr-section-header">
              <h2>{t.faqTitle}</h2>
            </div>
          </Reveal>
          <div className="sr-faq-list">
            {t.faq.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="sr-faq-item">
                  <button
                    className={`sr-faq-q${openFaq === i ? " open" : ""}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <ChevronDown />
                  </button>
                  <div
                    className="sr-faq-a"
                    style={{
                      maxHeight: openFaq === i ? 200 : 0,
                      opacity: openFaq === i ? 1 : 0,
                    }}
                  >
                    <div className="sr-faq-a-inner">{faq.a}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="sr-final-cta">
        <div className="sr-wrap">
          <Reveal>
            <h2>{t.finalCtaTitle}</h2>
            <p>{t.finalCtaText}</p>
            <a href={waLink(t.waDefaultMsg)} target="_blank" rel="noopener noreferrer" className="sr-btn-primary" style={{ maxWidth: 340, margin: "0 auto" }}>
              <WhatsAppIcon /> {t.ctaWhatsApp}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="sr-footer">
        <div className="sr-wrap">
          <div className="sr-footer-grid">
            <div>
              <div className="sr-footer-brand"><img src={LOGO_BLACK} alt="Serenity" className="sr-footer-logo-img" /></div>
              <div className="sr-footer-tag">{t.footerTagline}</div>
              <div className="sr-footer-socials">
                <a href={waLink(t.waDefaultMsg)} target="_blank" rel="noopener noreferrer" className="sr-footer-social" title="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="sr-footer-social" title="Instagram">
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4>{t.footerLocations}</h4>
              {LOCATIONS[lang].map((loc, i) => (
                <a key={i} href={loc.gis} target="_blank" rel="noopener noreferrer" className="sr-footer-link">
                  {loc.address}
                </a>
              ))}
            </div>
            <div>
              <h4>{t.footerSchedule}</h4>
              {LOCATIONS[lang].map((loc, i) => (
                <span key={i} className="sr-footer-link" style={{ cursor: "default" }}>{loc.address} — {loc.hours}</span>
              ))}
              <div style={{ marginTop: 14 }}>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="sr-footer-link" style={{ fontWeight: 500 }}>
                  +7 776 926 28 88
                </a>
              </div>
            </div>
          </div>
          <div className="sr-footer-bottom">
            © {new Date().getFullYear()} Serenity. {t.footerRights}
          </div>
        </div>
      </footer>

      {/* ════════ FLOATING WA BUTTON ════════ */}
      <a
        href={waLink(t.waDefaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-float-wa"
        aria-label={t.ctaWhatsApp}
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
