import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import LeadForm from "@/components/LeadForm";
import { coffeeBeans } from "@/data/products";

export const metadata: Metadata = {
  title: "פולי קפה טריים לעסק ולמשרד | בית קלייה בוטיק",
  description:
    "פולי קפה טריים לעסק ולמשרד מבית קלייה גינץ. קלייה בוטיק בהתאמה אישית לפי הטעם שלכם. קפה לעסק שמגיע טרי עד 10 ימים מהקלייה.",
  keywords: [
    "פולי קפה לעסק",
    "קפה למשרד",
    "פתרונות קפה למשרד",
    "בית קלייה בוטיק",
    "קפה טרי לעסקים",
    "קלייה בהתאמה אישית",
  ],
};

export default function BeansPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="beans-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            Gintz Coffee · Beans
          </p>
          <h1 id="beans-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            פולי קפה פרימיום
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            קפה שנקלה במיוחד בשבילכם ומסופק טרי לעסק. תערובות מאוזנות, ממוצא יחיד, לכל
            גודל הזמנה.
          </p>
        </div>
      </section>

      {/* Beans grid */}
      <section className="py-14 bg-cream" aria-labelledby="beans-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="beans-grid-heading" className="text-2xl font-bold text-brown mb-8">
            הפולים שלנו
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeBeans.map((bean) => (
              <article
                key={bean.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {bean.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={bean.image}
                    alt={bean.name}
                    className="w-full aspect-[3/4] object-cover bg-white"
                  />
                ) : (
                  <ImagePlaceholder label="הוסף תמונה" width={300} height={400} />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs bg-gold/15 text-gold-dark font-semibold px-2.5 py-1 rounded-full">
                      {bean.roast}
                    </span>
                    <span className="text-xs bg-brown/10 text-brown font-medium px-2.5 py-1 rounded-full">
                      {bean.origin}
                    </span>
                  </div>
                  <h3 className="text-brown font-bold text-xl mb-2">{bean.name}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed flex-1">
                    {bean.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 block text-center bg-brown hover:bg-brown-light text-cream font-medium py-2.5 px-4 rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
                  >
                    לפרטים והצעת מחיר
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roast info strip */}
      <section className="py-12 bg-brown text-cream" aria-labelledby="roast-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="roast-heading" className="text-2xl font-bold text-gold text-center mb-8">
            איך אנחנו עובדים
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { step: "01", title: "בוחרים את הפולים", desc: "ממקורות איכות ברחבי העולם" },
              { step: "02", title: "קולים טרי", desc: "בהזמנה אישית לפי הצרכים שלכם" },
              { step: "03", title: "מספקים מהר", desc: "אספקה תוך 48 שעות עד הדלת" },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div className="text-gold/40 font-bold text-5xl font-montserrat mb-3">
                  {step}
                </div>
                <h3 className="text-gold font-bold text-lg mb-1">{title}</h3>
                <p className="text-cream/65 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="beans-contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="beans-contact-heading" className="text-3xl font-bold text-brown mb-2">
              הזמינו פולי קפה
            </h2>
            <p className="text-brown/65">השאירו פרטים ונחזור אליכם עם הצעה</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}
