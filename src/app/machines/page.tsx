import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
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
  ],
};

export default function MachinesPage() {
  return (
    <>
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

      {/* Lead form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="machines-contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="machines-contact-heading" className="text-3xl font-bold text-brown mb-2">
              מעוניינים? נשמח לעזור
            </h2>
            <p className="text-brown/65">השאירו פרטים ונחזור אליכם עם הצעת מחיר מותאמת</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}
