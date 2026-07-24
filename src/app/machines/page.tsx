import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { coffeeMachines } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/machines" },
  title: "מכונת קפה למשרד ולעסק | JURA ומכונות מקצועיות",
  description:
    "מכונת קפה למשרד ולעסק — JURA, Melitta ועוד. פתרונות קפה לעסק כולל התקנה, הדרכה ותמיכה. קפה למשרד בהתאמה אישית מבית קלייה גינץ.",
  keywords: [
    "מכונת קפה למשרד",
    "מכונות קפה לעסקים",
    "פתרונות קפה לעסק",
    "קפה למשרד",
    "JURA לעסקים",
    "מכונת קפה אוטומטית לעסק",
    "מכונת קפה לעסק בני ברק",
    "מכונת קפה קפסולות לעומת פולים",
  ],
  openGraph: {
    title: "מכונת קפה למשרד ולעסק | קפה גינץ",
    description:
      "מכונות קפה מקצועיות לעסק — JURA, Melitta ועוד, כולל התקנה, הדרכה ותמיכה. פתרונות קפה למשרד מבית גינץ.",
    url: "https://www.gintz.co.il/machines",
  },
};

const TYPES = [
  {
    name: "מכונה אוטומטית מפולים (Bean-to-Cup)",
    good: "טעם הכי קרוב לבית קפה, טוחנת טרי לכל כוס, עלות לכוס נמוכה בטווח הארוך",
    less: "השקעה ראשונית גבוהה יותר, דורשת ניקוי וטיפול תקופתי",
    fit: "משרדים מ-15 עובדים ומעלה שרוצים שדרוג אמיתי בחוויית הקפה",
  },
  {
    name: "מכונת קפסולות",
    good: "פשוטה מאוד להפעלה, אין צורך בטחינה או כיול, נקייה יחסית",
    less: "עלות לכוס גבוהה יותר לאורך זמן, תלות באספקת קפסולות מתאימות",
    fit: "משרדים קטנים או חדרי ישיבות עם צריכה מזדמנת",
  },
  {
    name: "מכונה מקצועית לעומס גבוה",
    good: "עומדת בעשרות עד מאות כוסות ביום ברצף, בנויה לעבודה תעשייתית",
    less: "דורשת חיבור מים קבוע ותכנון מקום מראש",
    fit: "חברות, מפעלים וחדרי אוכל עם 80+ עובדים",
  },
];

const MACHINES_FAQ = [
  {
    q: "עדיף לקנות מכונת קפה למשרד או לשכור אותה?",
    a: "לרוב המשרדים רכישה בתשלומים או במסלול שירות חודשי משתלמת יותר מרכישה חד-פעמית: אין השקעה ראשונית גדולה, התחזוקה כלולה, ובסיום ההתקשרות המכונה יכולה לעבור לבעלותכם. רכישה ישירה מתאימה בעיקר לעסקים שכבר יודעים בדיוק איזה דגם הם רוצים ומעדיפים לא להתחייב לשירות חודשי.",
  },
  {
    q: "מה ההבדל בין מכונת קפסולות למכונת קפה מפולים לעסק?",
    a: "מכונת קפסולות פשוטה יותר להפעלה אך העלות לכוס גבוהה יותר לאורך זמן, ותלויה בזמינות הקפסולות. מכונה מפולים (Bean-to-Cup) טוחנת קפה טרי בכל כוס, נותנת טעם קרוב יותר לבית קפה, ולעסק עם צריכה קבועה משתלמת יותר לכוס — בעיקר כשמדובר בעשרות כוסות ביום ומעלה.",
  },
  {
    q: "כמה כוסות קפה ביום מכונה מקצועית לעסק מייצרת?",
    a: "תלוי בדגם: מכונה קומפקטית למשרד קטן מייצרת כ-20–50 כוסות ביום, מכונה מקצועית בינונית עד כ-130 כוסות, ומכונה לעומס גבוה 100+ כוסות ברצף לאורך יום עבודה מלא. אנחנו מתאימים את הדגם למספר העובדים ולשעות השיא בפועל.",
  },
  {
    q: "האם צריך תחזוקה שוטפת למכונת קפה במשרד?",
    a: "כן — ניקוי יומי קצר על ידי הצוות, וטיפול תקופתי (הסרת אבנית, החלפת מסננים) שאנחנו מבצעים במסגרת השירות. מכונה שמתוחזקת כמו שצריך שומרת על טעם הקפה ומאריכה משמעותית את חיי הציוד.",
  },
];

const machinesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: MACHINES_FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function MachinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(machinesFaqSchema) }}
      />

      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="machines-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            Gintz Coffee · Machines
          </p>
          <h1 id="machines-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            מכונות קפה לעסקים
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונות אוטומטיות ומקצועיות לכל גודל עסק — משרד, מסעדה, מלון או קליניקה.
            אספקה, התקנה והדרכה כלולים.
          </p>
        </div>
      </section>

      {/* Intro — how to choose */}
      <section className="py-14 bg-cream" aria-labelledby="choose-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="choose-heading" className="text-2xl md:text-3xl font-bold text-brown mb-5">
            איך בוחרים מכונת קפה למשרד
          </h2>
          <div className="space-y-4 text-brown/75 leading-relaxed">
            <p>
              הבחירה הנכונה תלויה בשלושה גורמים בעיקר: כמה עובדים יש במשרד, כמה
              כוסות קפה נצרכות ביום (בעיקר בשעות השיא בבוקר), ואיזה סוג חוויית
              קפה חשוב לכם — טעם קרוב לבית קפה, או פשטות הפעלה מקסימלית.
              מכונה קטנה מדי לעומס יומי גבוה תיתקע בשעות השיא; מכונה גדולה מדי
              למשרד קטן היא בזבוז מיותר.
            </p>
            <p>
              אנחנו מספקים מכונות קפה למשרד ולעסק בכל הארץ — מבני ברק וגוש דן
              ועד תל אביב, ירושלים וחיפה — כולל התקנה, הדרכה לצוות ותמיכה
              טכנית שוטפת.
            </p>
          </div>
        </div>
      </section>

      {/* Machine types comparison */}
      <section className="py-14 bg-cream-dark border-y border-cream" aria-labelledby="types-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="types-heading" className="text-2xl md:text-3xl font-bold text-brown mb-8 text-center">
            שלושת סוגי מכונות הקפה לעסק
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TYPES.map(({ name, good, less, fit }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-cream flex flex-col">
                <h3 className="text-brown font-bold mb-3">{name}</h3>
                <p className="text-sm text-brown/70 mb-2">
                  <span className="font-semibold text-gold">יתרון: </span>
                  {good}
                </p>
                <p className="text-sm text-brown/70 mb-2">
                  <span className="font-semibold text-brown/50">מגבלה: </span>
                  {less}
                </p>
                <p className="text-sm text-brown/60 mt-auto pt-3 border-t border-cream">
                  <span className="font-semibold text-brown">מתאים ל: </span>
                  {fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-14 bg-cream" aria-labelledby="machines-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="machines-grid-heading" className="text-2xl font-bold text-brown mb-8">
            כל המכונות שלנו
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeMachines.map((m) => (
              <ProductCard
                key={m.id}
                name={m.name}
                description={m.description}
                features={m.features}
                image={m.image}
                priceRange={m.price}
                ctaHref={`/machines/${m.id}`}
                ctaLabel="פרטים מלאים ←"
                detailHref={`/machines/${m.id}`}
                imageContain={m.id === "melitta-solo-silver"}
                cartItem={{
                  id: m.id,
                  name: m.name,
                  price: m.price,
                  priceNumeric: m.priceNumeric,
                  category: "machine",
                  image: m.image,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-10 bg-gold/10 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "התקנה חינם", desc: "מגיעים אליכם ומתקינים בלי תוספת" },
              { title: "הדרכה מקצועית", desc: "מדריכים את הצוות לפני שעוזבים" },
              { title: "תמיכה שוטפת", desc: "טכנאי מוסמך זמין לכל תקלה" },
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-brown font-bold text-lg mb-1">{title}</h3>
                <p className="text-brown/65 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream" aria-labelledby="machines-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="machines-faq-heading" className="text-3xl font-bold text-brown mb-8 text-center">
            שאלות נפוצות על מכונות קפה למשרד
          </h2>
          <div className="space-y-3">
            {MACHINES_FAQ.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-xl border border-cream overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                  <span>{q}</span>
                  <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
