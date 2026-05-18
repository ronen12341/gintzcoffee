export interface Machine {
  id: string;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
  image?: string;
}

export interface Bean {
  id: string;
  name: string;
  description: string;
  origin: string;
  roast: string;
  featured?: boolean;
  image?: string;
}

export interface CupCategory {
  id: string;
  name: string;
  description: string;
  minQuantity: number;
  image?: string;
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
  },
  {
    id: "jura-x10",
    name: "JURA X10 – מקצועי לעסקים",
    description:
      "המכונה המקצועית למשקאות קפה חמים וקרים — רב תכליתית, חזקה ואמינה. ה-X10 מציעה 35 סוגים שונים של משקאות קפה, מתוכם 9 בחליטה קרה (Cold Brew) אוטומטית לחלוטין. מטחנת P.A.G.2+, מסך צבעוני 3.5 אינץ' עם מקשים פיזיים, ופונקציית One Touch Lungo. מתאימה למשרדים, חנויות, עסקים גדולים וקייטרינג. שימוש ממוצע מומלץ עד 100 ספלים ביום.",
    features: ["35 משקאות (9 Cold Brew)", "מטחנת P.A.G.2+", "עד 100 ספלים ביום", "מסך 3.5 אינץ' + מקשים פיזיים", "תמיכה בתשלום חכם (MDB)"],
    featured: true,
    image: "https://www.jura.co.il/wp-content/uploads/2024/06/X10Main.webp",
  },
  {
    id: "jura-e8",
    name: "JURA E8 דור 4",
    description:
      "הדור הרביעי של מכונת הקפה האוטומטית המצליחה ביותר של JURA. שלושה עולמות פינוק: Classic Hot Brew (חליטה חמה קלאסית), Light Brew (חליטה קלה בכ-60°C לשתייה מיידית) ו-Sweet Foam (קצף מתוק מוקצף). מטחנת P.A.G.2 לדיוק מירבי, מסך צבעוני 3.5 אינץ' עם כפתורים פיזיים, ותמיכה באפליקציית J.O.E.®. שימוש ממוצע מומלץ עד 40 ספלים ביום.",
    features: ["27 משקאות מיוחדים", "מטחנת P.A.G.2", "עד 40 ספלים ביום", "מסך צבעוני 3.5 אינץ'", "תמיכה ב-J.O.E.® App"],
    featured: true,
    image: "https://www.jura.co.il/wp-content/uploads/2026/05/E8_MS1.webp",
  },
  {
    id: "melitta-solo-silver",
    name: "Melitta Caffeo Solo Pure Silver",
    description:
      "מכונת קפה אוטומטית טוחנת של מליטה — הכנה ישירה מפולים בלחיצת כפתור. לחץ 15 בר, עוצמת ארומה ב-3 רמות, כמות קפה מתכווננת 30–220 מ\"ל, שפיכה מתכווננת לגובה עד 135 מ\"מ. מיכל מים 1.2 ליטר, מיכל פולים 125 גרם, הספק 1400W. מתאימה למשרדים ועסקים המחפשים מכונה מהירה, שקטה ואמינה.",
    features: ["15 בר לחץ", "3 רמות ארומה", "מיכל מים 1.2 ליטר", "מיכל פולים 125 גרם", "שפיכה מתכווננת עד 135 מ\"מ"],
    featured: false,
    image: "https://www.coffeeman.co.il/images/itempics/900602_05042025131742.jpg",
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
    id: "used-saeco-royal",
    name: "סאקו רויאל – מציאון",
    description:
      "מכונת תצוגה. שימוש מינימלי. כמו חדשה. ללא קופסה מקורית.",
    condition: "כמו חדש",
  },
];

export const quantityOptions = [
  500, 1000, 2000, 3000, 5000, 10000, 20000, 50000, 100000,
];
