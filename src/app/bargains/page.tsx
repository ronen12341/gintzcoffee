import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { usedMachines } from "@/data/products";

const FAQ = [
  {
    q: "באיזה מצב מכונות הקפה יד 2?",
    a: "המכונות משומשות ונמכרות כמו שהן. כל מכונת יד 2 עוברת קודם בדיקה טכנית מלאה, ורק מכונות תקינות שעובדות כמו שצריך עולות למכירה.",
  },
  {
    q: "למי מתאימה מכונת קפה יד 2?",
    a: "לעסק או למשרד שרוצים מכונה אוטומטית איכותית בבעלותם, בלי חוזה שירות ובלי לשלם מחיר של מכונה חדשה. Jura X8 מתאימה למשרדים עם הרבה עובדים, ו-Jura E8 ו-Nivona מתאימות למשרד קטן או לבית.",
  },
  {
    q: "איך מזמינים מכונת קפה יד 2?",
    a: "בוחרים מכונה מהמלאי ומזמינים ישירות באתר, או מתקשרים אלינו ל-03-9600550 לשאלות לפני הקנייה. המלאי משתנה, ולכן מכונה שמופיעה כאן זמינה עכשיו.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const metadata: Metadata = {
  alternates: { canonical: "/bargains" },
  title: "מכונות קפה יד 2 – מכונות משומשות ותקינות במחיר מוזל",
  description:
    "מכונות קפה יד 2: Jura E8, Jura X8, Nivona ו-Melitta משומשות ותקינות במחירים מוזלים. כל מכונה עוברת בדיקה טכנית מלאה לפני המכירה. מלאי מתעדכן.",
};

export default function BargainsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        aria-labelledby="bargains-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 id="bargains-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            מכונות קפה יד 2 — משומשות ותקינות
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונות קפה יד 2 איכותיות – משומשות ותקינות, אחרי בדיקה טכנית. הזדמנות
            מצוינת לעסקים שרוצים איכות במחיר שמשתלם.
          </p>
        </div>
      </section>

      {/* Badge legend */}
      <div className="bg-gold/10 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 justify-center text-sm text-brown/70">
          <span className="bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
            מכונות משומשות
          </span>
          <span>כל המכונות עברו בדיקה טכנית מלאה</span>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-14 bg-cream" aria-labelledby="bargains-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="bargains-grid-heading" className="text-2xl font-bold text-brown mb-8">
            המלאי הנוכחי
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {usedMachines.map((m) => (
              <ProductCard
                key={m.id}
                name={m.name}
                description={m.description}
                image={m.image}
                badge="מכונות משומשות"
                detailHref={`/bargains/${m.id}`}
                features={[`מצב: ${m.condition}`, "עברה בדיקה טכנית"]}
                priceRange={m.price}
                originalPrice={m.originalPrice}
                cartItem={{
                  id: m.id,
                  name: m.name,
                  price: m.price,
                  priceNumeric: m.priceNumeric,
                  category: "used",
                  image: m.image,
                }}
              />
            ))}
          </div>

          {usedMachines.length === 0 && (
            <p className="text-center text-brown/60 py-16 text-lg">
              אין מלאי זמין כרגע — חזרו בקרוב או השאירו פרטים ונודיע לכם!
            </p>
          )}
        </div>
      </section>

      {/* SEO content + FAQ */}
      <section className="py-14 bg-white" aria-labelledby="bargains-about-heading">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-3xl mx-auto px-4 text-brown/80 leading-relaxed space-y-4">
          <h2 id="bargains-about-heading" className="text-2xl font-bold text-brown">
            מכונת קפה יד 2 — איכות של מכונה אוטומטית במחיר מוזל
          </h2>
          <p>
            מכונת קפה יד שניה היא הדרך הכי משתלמת להחזיק מכונה אוטומטית איכותית.
            אנחנו מוכרים מכונות קפה משומשות ותקינות של Jura, Nivona ו-Melitta,
            ולפעמים גם מכונות מקצועיות. כל מכונה עוברת בדיקה טכנית מלאה לפני
            שהיא עולה למכירה.
          </p>
          <p>
            למשרד שרוצה מכונה משלו בלי חוזה, Jura X8 יד 2 היא אחת המכונות
            האוטומטיות העמידות לעבודה בהיקף גבוה. למי שמחפש פתרון מלא עם שירות
            ותחזוקה, יש גם{" "}
            <Link href="/business-solutions" className="text-gold-dark font-bold underline">
              פתרונות קפה לעסקים בדמי שירות חודשיים
            </Link>
            , ולמי שמעדיף מכונה חדשה, כל הדגמים נמצאים ב
            <Link href="/machines" className="text-gold-dark font-bold underline">
              מכונות הקפה החדשות שלנו
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-brown pt-4">שאלות נפוצות</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-bold text-brown">{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
