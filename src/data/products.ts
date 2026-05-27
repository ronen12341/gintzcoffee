export interface Machine {
  id: string;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
  image?: string;
  /** Display price string like "11,200 ש\"ח" */
  price?: string;
  /** Numeric price in NIS — used for cart totals calculation */
  priceNumeric?: number;
}

export interface Bean {
  id: string;
  name: string;
  description: string;
  origin: string;
  roast: string;
  featured?: boolean;
  image?: string;
  price?: string;
  priceNumeric?: number;
}

export interface CupCategory {
  id: string;
  name: string;
  description: string;
  minQuantity: number;
  image?: string;
  price?: string;
  priceNumeric?: number;
}

export interface UsedMachine {
  id: string;
  name: string;
  description: string;
  condition: string;
  image?: string;
}

export const coffeeMachines: Machine[] = [
  {
    id: "jura-z10",
    name: "JURA Z10 דור 2",
    description:
      "51 התמחויות – חם, קל, קר ומתוק. מכונת הדגל של JURA עם מטחנת P.R.G.2+ המתאימה את הטחינה אוטומטית לכל משקה. מערכת קוורטט חכמה: Coffee Timer, Caffeine Regulator, Milk Assistant ו-Quality Assistant. שימוש מומלץ עד 50 ספלים ביום.",
    features: ["51 התמחויות", "מטחנת P.R.G.2+", "עד 50 ספלים ביום", "Wi-Fi + אפליקציית J.O.E."],
    featured: true,
    image: "https://www.jura.co.il/wp-content/uploads/2026/05/Z10_1.webp",
    price: "11,200 ש\"ח",
    priceNumeric: 11200,
  },
  {
    id: "jura-x10",
    name: "JURA X10 – מקצועי לעסקים",
    description:
      "המכונה המקצועית למשקאות קפה חמים וקרים — רב תכליתית, חזקה ואמינה. ה-X10 מציעה 35 סוגים שונים של משקאות קפה, מתוכם 9 בחליטה קרה (Cold Brew) אוטומטית לחלוטין. מטחנת P.A.G.2+, מסך צבעוני 3.5 אינץ' עם מקשים פיזיים, ופונקציית One Touch Lungo. מתאימה למשרדים, חנויות, עסקים גדולים וקייטרינג. שימוש ממוצע מומלץ עד 100 ספלים ביום.",
    features: ["35 משקאות (9 Cold Brew)", "מטחנת P.A.G.2+", "עד 100 ספלים ביום", "מסך 3.5 אינץ' + מקשים פיזיים", "תמיכה בתשלום חכם (MDB)"],
    featured: true,
    image: "https://www.jura.co.il/wp-content/uploads/2024/06/X10Main.webp",
    price: "11,250 ש\"ח",
    priceNumeric: 11250,
  },
  {
    id: "jura-e8",
    name: "JURA E8 דור 4",
    description:
      "הדור הרביעי של מכונת הקפה האוטומטית המצליחה ביותר של JURA. שלושה עולמות פינוק: Classic Hot Brew (חליטה חמה קלאסית), Light Brew (חליטה קלה בכ-60°C לשתייה מיידית) ו-Sweet Foam (קצף מתוק מוקצף). מטחנת P.A.G.2 לדיוק מירבי, מסך צבעוני 3.5 אינץ' עם כפתורים פיזיים, ותמיכה באפליקציית J.O.E.®. שימוש ממוצע מומלץ עד 40 ספלים ביום.",
    features: ["27 משקאות מיוחדים", "מטחנת P.A.G.2", "עד 40 ספלים ביום", "מסך צבעוני 3.5 אינץ'", "תמיכה ב-J.O.E.® App"],
    featured: true,
    image: "https://www.jura.co.il/wp-content/uploads/2026/05/E8_MS1.webp",
    price: "6,300 ש\"ח",
    priceNumeric: 6300,
  },
  {
    id: "melitta-solo-silver",
    name: "Melitta Caffeo Solo Pure Silver",
    description:
      "מכונת קפה אוטומטית טוחנת של מליטה — הכנה ישירה מפולים בלחיצת כפתור. לחץ 15 בר, עוצמת ארומה ב-3 רמות, כמות קפה מתכווננת 30–220 מ\"ל, שפיכה מתכווננת לגובה עד 135 מ\"מ. מיכל מים 1.2 ליטר, מיכל פולים 125 גרם, הספק 1400W. מתאימה למשרדים ועסקים המחפשים מכונה מהירה, שקטה ואמינה.",
    features: ["15 בר לחץ", "3 רמות ארומה", "מיכל מים 1.2 ליטר", "מיכל פולים 125 גרם", "שפיכה מתכווננת עד 135 מ\"מ"],
    featured: false,
    image: "https://www.coffeeman.co.il/images/itempics/900602_05042025131742.jpg",
    price: "1,880 ש\"ח",
    priceNumeric: 1880,
  },
];

export const coffeeBeans: Bean[] = [
  {
    id: "espresso-blend",
    name: "תערובת GOLD",
    description:
      "תערובת פולים קלוייה בדרגה עמוקה עם טעמי שוקולד, קרמל וחמיצות נעימה. מושלמת לאספרסו וקפוצ'ינו.",
    origin: "ברזיל, קולומביה, אתיופיה",
    roast: "קלייה בינונית",
    featured: true,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "single-origin-ethiopia",
    name: "HOUSE BLEND",
    description:
      "פולי קפה ממוצא יחיד מאתיופיה. פרופיל ארומטי עשיר – פרחוני, פירותי ועם חמיצות עדינה.",
    origin: "אתיופיה",
    roast: "קלייה בינונית",
    featured: true,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "office-blend",
    name: "תערובת משרד פרימיום",
    description:
      "תערובת מאוזנת המתאימה לכל הטעמים במשרד. עגולה, לא חזקה מדי, מתאימה לכל שיטת הכנה.",
    origin: "ברזיל, הודו",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "brazil-cerrado",
    name: "ברזיל סרדו",
    description:
      "פולים ממוצא יחיד מאזור סרדו בברזיל. טעם מתוק עם נגיעות אגוז ושוקולד חלב, גוף מלא ומאוזן.",
    origin: "ברזיל",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "colombia-supremo",
    name: "קולומביה סופרמו",
    description:
      "פולים ממוצא יחיד מקולומביה. ארומה עשירה עם טעמי פירות יבשים, חמיצות מאוזנת וסיומת ארוכה.",
    origin: "קולומביה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "costa-rica",
    name: "קוסטה ריקה",
    description:
      "פולים ממוצא יחיד מקוסטה ריקה. טעם נקי ומובהק עם נגיעות דבש ותפוז, חמיצות עדינה ומרעננת.",
    origin: "קוסטה ריקה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "guatemala",
    name: "גואטמלה אנטיגואה",
    description:
      "פולי קפה מובחרים מאזור אנטיגואה. פרופיל ארומטי מורכב עם טעמי קקאו, קרמל ועשן עדין.",
    origin: "גואטמלה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "kenya-aa",
    name: "קניה AA",
    description:
      "דרגת הפולים הגבוהה ביותר מקניה. חמיצות בהירה ופירותית, ארומה פרחונית וגוף מלא ועשיר.",
    origin: "קניה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "india-monsoon",
    name: "הודו מונסון",
    description:
      "פולים ייחודיים שעברו תהליך ייבוש מונסוני. גוף כבד ועשיר, טעמי עץ ותבלינים, חמיצות נמוכה.",
    origin: "הודו",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "platinum-blend",
    name: "תערובת PLATINUM",
    description:
      "תערובת יוקרתית מפולים נבחרים בעלי אופי חזק ועמוק. מתאימה לאספרסו ולמכונות אוטומטיות.",
    origin: "ברזיל, קולומביה, קניה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "decaf",
    name: "נטול קפאין",
    description:
      "פולים נטולי קפאין בתהליך טבעי. שומר על מלוא הארומה והטעם ללא הקפאין. מתאים לכל שעות היום.",
    origin: "ברזיל, קולומביה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
  {
    id: "silver-blend",
    name: "תערובת SILVER",
    description:
      "תערובת עדינה ומאוזנת לשתיינים המחפשים קפה נעים ולא חזק מדי. מתאימה לכל שעות היום.",
    origin: "ברזיל, הודו, קולומביה",
    roast: "קלייה בינונית",
    featured: false,
    image: "/coffee-bag.jpg.jpg",
    price: "100 ש\"ח",
    priceNumeric: 100,
  },
];

export const cupCategories: CupCategory[] = [
  {
    id: "branded-cups",
    name: "כוסות ממותגות לעסקים",
    description:
      "הטבעת החותם האישי של בית העסק שלכם. כוסות עם הלוגו שלכם — שיווק חכם בכל כוס קפה.",
    minQuantity: 500,
    image: "/cups/branded-cups.svg",
  },
  {
    id: "disposable-cups",
    name: "כוסות חד פעמיות",
    description:
      "כוסות חד פעמיות איכותיות לשיווק מקצועי ושמירה על איכות הסביבה. במגוון גדלים לכל שימוש.",
    minQuantity: 500,
    image: "/cups/disposable-cups.svg",
  },
  {
    id: "event-cups",
    name: "כוסות לאירועים וכנסים",
    description:
      "כוסות מעוצבות לאירועים עסקיים וכנסים — שמירה על סטטוס גבוה, איכות ויוקרה. עיצוב מותאם אישית.",
    minQuantity: 500,
    image: "/cups/event-cups.svg",
  },
  {
    id: "printing-service",
    name: "הדפסה על כוסות נייר",
    description:
      "הדפסה איכותית בטכנולוגיה מתקדמת. עד 4 צבעים, עמיד בחום ולחות. מושלם לקידום מכירות.",
    minQuantity: 1000,
    image: "/cups/printing-service.svg",
  },
  {
    id: "restaurant-cups",
    name: "כוסות למסעדות ודוכני מזון",
    description:
      "כוסות נייר מעוצבות למסעדות ודוכני מזון — שיווק קל ונטול מאמץ. שילוב פרקטיות עם קידום מכירות.",
    minQuantity: 500,
    image: "/cups/restaurant-cups.svg",
  },
  {
    id: "birthday-cups",
    name: "כוסות לימי הולדת",
    description:
      "כוסות מעוצבות לימי הולדת — נגיעה אישית ומקורית לכל אירוע חגיגי. מושלם להפעלות ולאירועים.",
    minQuantity: 500,
    image: "/cups/birthday-cups.svg",
  },
];

export const usedMachines: UsedMachine[] = [
  {
    id: "used-jura-s8",
    name: "ג'ורה S8 – יד שנייה",
    description:
      "מכונה שימשה שנתיים במשרד. תוחזקה על ידי טכנאי מוסמך. במצב מעולה.",
    condition: "מצב טוב מאוד",
  },
  {
    id: "used-delonghi-perfecta",
    name: "דה לונגי פרפקטה – מציאה",
    description:
      "מכונה מוחזרת מלקוח. עברה בדיקה ושיפוץ מלא. מגיעה עם אחריות 6 חודשים.",
    condition: "אחרי שיפוץ",
  },
  {
    id: "used-bezzera-arcadia-2gr",
    name: "Bezzera ARCADIA DE PID 2GR – מכונה מקצועית",
    description:
      "מכונת אספרסו מקצועית של בזרה האיטלקית, דגם ARCADIA עם 2 ראשי הכנה (2GR). מתאימה לבתי קפה, מסעדות ועסקים בעלי תפוקה גבוהה. בקרת טמפרטורה PID, חימום מהיר ויציבות מעולה. חיבור ישיר למים (DE).",
    condition: "מצב טוב מאוד",
  },
  {
    id: "used-saeco-royal",
    name: "סאקו רויאל – מכונות יד2",
    description:
      "מכונת תצוגה. שימוש מינימלי. כמו חדשה. ללא קופסה מקורית.",
    condition: "כמו חדש",
  },
];

export const quantityOptions = [
  500, 1000, 2000, 3000, 5000, 10000, 20000, 50000, 100000,
];
