import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
import { usedMachines } from "@/data/products";

export const metadata: Metadata = {
  title: "מכונות יד2 – מכונות קפה משומשות",
  description:
    "מכונות קפה יד שנייה ומשופצות במחירים מיוחדים. מגיעות עם בדיקה ואחריות.",
};

export default function BargainsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="bargains-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            Gintz Coffee · מכונות יד2
          </p>
          <h1 id="bargains-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            מכונות יד2 — מכונות משומשות
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונות קפה איכותיות יד שנייה, מבודקות ומשופצות. הזדמנות מצוינת לעסקים שרוצים
            איכות במחיר שמשתלם.
          </p>
        </div>
      </section>

      {/* Badge legend */}
      <div className="bg-gold/10 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 justify-center text-sm text-brown/70">
          <span className="bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
            מכונות יד2
          </span>
          <span>כל המכונות עברו בדיקה טכנית ומגיעות עם אחריות מינימום 3 חודשים</span>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-14 bg-cream" aria-labelledby="bargains-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="bargains-grid-heading" className="text-2xl font-bold text-brown mb-8">
            המלאי הנוכחי
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usedMachines.map((m) => (
              <ProductCard
                key={m.id}
                name={m.name}
                description={m.description}
                image={m.image}
                badge="מכונות יד2"
                hideCta
                features={[`מצב: ${m.condition}`]}
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

      {/* Lead form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="bargains-contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="bargains-contact-heading" className="text-3xl font-bold text-brown mb-2">
              מעוניינים במכונה?
            </h2>
            <p className="text-brown/65">השאירו פרטים ונחזור אליכם מהר</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}
