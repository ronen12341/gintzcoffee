import type { Metadata } from "next";
import BeansShop from "@/components/BeansShop";
import { coffeeBeans } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/beans" },
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
  openGraph: {
    title: "פולי קפה טריים לעסק ולמשרד | קפה גינץ",
    description:
      "פולי קפה טריים מבית קלייה גינץ — תערובות וחד-זני בקלייה בוטיק, טרי עד 10 ימים מהקלייה.",
    url: "https://www.gintz.co.il/beans",
  },
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

      {/* Quality manifesto */}
      <section className="py-14 bg-cream" aria-labelledby="beans-intro-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="beans-intro-heading"
            className="text-2xl sm:text-3xl font-bold text-brown mb-4"
          >
            קפה שנקלה בשבילכם, לא מהמדף
          </h2>
          <p className="text-brown/70 text-base sm:text-lg leading-relaxed">
            כל שקית שיוצאת מבית הקלייה שלנו נקלית בהזמנה — לא מיוצרת מראש ומחכה במחסן.
            אנחנו בוחרים פולים ממיטב אזורי הגידול בעולם, מתאימים לכל אחד פרופיל קלייה
            מדויק, ומוציאים אותו אליכם טרי עד 10 ימים מהקלייה. ההבדל מורגש כבר בכוס
            הראשונה.
          </p>
        </div>
      </section>

      {/* Shop grid with filters */}
      <section className="pb-16 bg-cream" aria-labelledby="beans-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="beans-grid-heading" className="sr-only">
            הפולים שלנו
          </h2>
          <BeansShop beans={coffeeBeans} />
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
    </>
  );
}
