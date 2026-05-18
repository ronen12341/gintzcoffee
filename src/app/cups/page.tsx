import type { Metadata } from "next";
import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CupsQuoteForm from "@/components/CupsQuoteForm";
import { cupCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "כוסות ממותגות לעסקים | הדפסה על כוסות נייר",
  description:
    "כוסות נייר ממותגות לעסקים, אירועים, מסעדות וימי הולדת. הדפסה איכותית עד 4 צבעים עם הלוגו שלכם. Gil Cups — אספגיל.",
};

export default function CupsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="cups-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
            <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            Gil Cups · אספגיל
          </p>
          <h1 id="cups-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            כוסות ממותגות לעסקים
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            הדפסת כוסות נייר מעוצבות בהתאמה אישית ללקוחות עסקיים ופרטיים.
            הפכו כל כוס קפה לכלי שיווקי — משלוח לכל הארץ.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-cream" aria-labelledby="cups-cats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cups-cats-heading" className="text-2xl font-bold text-brown mb-8">
            הקטלוג שלנו
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cupCategories.map((cat) => (
              <article
                key={cat.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative w-full aspect-square bg-[#F5F0E8]">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <ImagePlaceholder label="הוסף תמונה" width={300} height={300} />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-gold font-semibold mb-1 block">
                    מינ׳ {cat.minQuantity.toLocaleString("he-IL")} יחידות
                  </span>
                  <h3 className="text-brown font-bold text-base mb-2">{cat.name}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed flex-1">{cat.description}</p>
                  <a
                    href="#contact"
                    className="mt-4 block text-center bg-brown hover:bg-brown-light text-cream font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    לפרטים והצעת מחיר
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-14 bg-brown" aria-labelledby="cups-process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cups-process-heading" className="text-2xl font-bold text-gold text-center mb-10">
            איך זה עובד?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center text-cream">
            {[
              { n: "1", t: "בחרו כמות", d: "מ-500 עד 100,000 יחידות" },
              { n: "2", t: "שלחו לוגו", d: "כל פורמט — נדאג לעיצוב" },
              { n: "3", t: "אשרו הדפסה", d: "נשלח הדמיה לאישורכם" },
              { n: "4", t: "קבלו אצלכם", d: "משלוח מהיר לכתובת שלכם" },
            ].map(({ n, t, d }) => (
              <div key={n}>
                <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 font-montserrat">
                  {n}
                </div>
                <h3 className="text-gold font-bold mb-1">{t}</h3>
                <p className="text-cream/60 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="cups-quote-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="cups-quote-heading" className="text-3xl font-bold text-brown mb-2">
              בקש הצעת מחיר לכוסות
            </h2>
            <p className="text-brown/65">מלא את הפרטים ונחזור אליך עם הצעה מפורטת</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CupsQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
