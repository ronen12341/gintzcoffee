export interface Machine {
  id: string;
  name: string;
  description: string;
  priceRange: string;
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
  price: string;
  image?: string;
}

export const coffeeMachines: Machine[] = [
  {
    id: "jura-z10",
    name: "ג'ורה Z10 – פרימיום ביתי-עסקי",
    description:
      "מכונת הדגל של JURA. מכינה 38 משקאות חמים וקרים בלחיצת כפתור, עם טוחנת P.R.G. המתאימה את הטחינה אוטומטית לכל משקה. עיצוב אלומיניום יוקרתי.",
    priceRange: "₪7,500 – ₪9,500",
    features: ["38 משקאות חמים וקרים", "טוחנת P.R.G. חכמה", "מסך מגע 4.3 אינץ'", "Wi-Fi מובנה"],
    featured: true,
    image: "https://api.jura.com/media/global/images/home-products/z-line/z10/Z10-Aluminium-White-EA-15348/Z10_Alu_White_EA_15348_packshot.jpg?cb=247293",
  },
  {
    id: "jura-x10",
    name: "ג'ורה X10 – מקצועי לעסקים",
    description:
      "המכונה המקצועית של JURA לסביבת עבודה. מתאימה ל-100 כוסות ביום, 34 משקאות כולל Cold Brew. ממשק נוח עם מסך ולחצנים פיזיים.",
    priceRange: "₪9,000 – ₪12,000",
    features: ["100 כוסות ביום", "34 משקאות כולל Cold Brew", "ניהול טלמטרי", "תשלום חכם"],
    featured: true,
    image: "https://us.jura.com/-/media/global/images/professional-products/x-line/X10-EB-SB/Website_Overview_X10_DaIn_pss2_900x990px.jpg",
  },
  {
    id: "jura-e8",
    name: "ג'ורה E8 אוטומטית",
    description:
      "מכונת קפה אוטומטית מלאה לעסקים קטנים ובינוניים. מכינה אספרסו, קפה, קפוצ'ינו ועוד. קלה לניקוי ותחזוקה.",
    priceRange: "₪4,200 – ₪5,500",
    features: ["עד 25 כוסות ביום", "קצף חלב אוטומטי", "מסך מגע"],
    featured: true,
  },
  {
    id: "delonghi-dinamica",
    name: "דה לונגי דינמיקה פלוס",
    description:
      "מכונת קפה משרדית פופולרית עם מגרסת פולים מובנית ואפשרויות הכנה מגוונות. שקטה ואמינה.",
    priceRange: "₪3,500 – ₪4,200",
    features: ["מגרסה מובנית", "6 משקאות מוגדרים", "שקט במיוחד"],
    featured: false,
  },
  {
    id: "franke-a400",
    name: "פרנקה A400 מקצועית",
    description:
      "מכונת קפה מסחרית לעסקים בינוניים וגדולים. מתאימה ל-50 כוסות ביום ומעלה. חיבור ישיר לצינור מים.",
    priceRange: "₪8,500 – ₪12,000",
    features: ["50+ כוסות ביום", "ממשק מסחרי", "חיבור ישיר למים"],
    featured: false,
  },
  {
    id: "saeco-aulika",
    name: "סאקו אוליקה פוקוס",
    description:
      "מכונת קפה אוטומטית עמידה במיוחד, מתאימה לסביבת עבודה תובענית. כוללת מסנן מים.",
    priceRange: "₪6,500 – ₪9,000",
    features: ["קיבולת גבוהה", "תוכנת ניהול", "מסנן מים כלול"],
    featured: false,
  },
  {
    id: "wega-concept",
    name: "וגה קונספט ידנית",
    description:
      "מכונת קפה ידנית מקצועית לאנשי קפה שאוהבים שליטה מלאה על ההכנה. 2 גרופות.",
    priceRange: "₪5,000 – ₪7,500",
    features: ["בקרת לחץ ידנית", "עיצוב ייחודי", "2 גרופות"],
    featured: false,
  },
];

export const coffeeBeans: Bean[] = [
  {
    id: "espresso-blend",
    name: "תערובת אספרסו קלאסיק",
    description:
      "תערובת פולים קלוייה בדרגה עמוקה עם טעמי שוקולד, קרמל וחמיצות נעימה. מושלמת לאספרסו וקפוצ'ינו.",
    origin: "ברזיל, קולומביה, אתיופיה",
    roast: "קלייה כהה",
    featured: true,
  },
  {
    id: "single-origin-ethiopia",
    name: "אתיופיה יירגצ'ף",
    description:
      "פולי קפה ממוצא יחיד מאתיופיה. פרופיל ארומטי עשיר – פרחוני, פירותי ועם חמיצות עדינה.",
    origin: "אתיופיה",
    roast: "קלייה בהירה-בינונית",
    featured: true,
  },
  {
    id: "office-blend",
    name: "תערובת משרד פרימיום",
    description:
      "תערובת מאוזנת המתאימה לכל הטעמים במשרד. עגולה, לא חזקה מדי, מתאימה לכל שיטת הכנה.",
    origin: "ברזיל, הודו",
    roast: "קלייה בינונית",
    featured: false,
  },
];

export const cupCategories: CupCategory[] = [
  {
    id: "branded-cups",
    name: "כוסות ממותגות לעסקים",
    description:
      "הדפסת הלוגו שלכם על כוסות קפה חד פעמיות. פרסום שוטף בכל כוס. מינימום 500 יחידות.",
    minQuantity: 500,
  },
  {
    id: "disposable-cups",
    name: "כוסות חד פעמיות",
    description:
      "כוסות קפה חד פעמיות איכותיות במגוון גדלים (4, 6, 8, 12 אונקיות). מתאימות לעסקים ואירועים.",
    minQuantity: 200,
  },
  {
    id: "printing-service",
    name: "הדפסה על כוסות",
    description:
      "הדפסה איכותית בטכנולוגיה מתקדמת. עמידה בחום ולחות. עד 4 צבעים בהדפסה.",
    minQuantity: 1000,
  },
  {
    id: "event-cups",
    name: "כוסות לאירועים",
    description:
      "כוסות מיוחדות לאירועים עסקיים, כנסים וחגיגות. עיצוב מותאם אישית לכל אירוע.",
    minQuantity: 200,
  },
];

export const usedMachines: UsedMachine[] = [
  {
    id: "used-jura-s8",
    name: "ג'ורה S8 – יד שנייה",
    description:
      "מכונה שימשה שנתיים במשרד. תוחזקה על ידי טכנאי מוסמך. במצב מעולה.",
    condition: "מצב טוב מאוד",
    price: "₪2,200",
  },
  {
    id: "used-delonghi-perfecta",
    name: "דה לונגי פרפקטה – מציאה",
    description:
      "מכונה מוחזרת מלקוח. עברה בדיקה ושיפוץ מלא. מגיעה עם אחריות 6 חודשים.",
    condition: "אחרי שיפוץ",
    price: "₪1,500",
  },
  {
    id: "used-saeco-royal",
    name: "סאקו רויאל – מציאון",
    description:
      "מכונת תצוגה. שימוש מינימלי. כמו חדשה. ללא קופסה מקורית.",
    condition: "כמו חדש",
    price: "₪1,800",
  },
];

export const quantityOptions = [
  200, 500, 1000, 2000, 3000, 5000, 10000, 20000, 50000, 100000,
];
