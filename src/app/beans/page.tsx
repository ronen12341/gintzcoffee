import type { Metadata } from "next";
import Link from "next/link";
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
        className="page-hero"
        aria-labelledby="beans-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 id="beans-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            פולי קפה פרימיום
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            קפה שנקלה במיוחד בשבילכם ומסופק טרי לעסק. תערובות מאוזנות, ממוצא יחיד, לכל
            גודל הזמנה.
          </p>
        </div>
      </section>

      {/* Shop grid with filters */}
      <section className="pt-8 pb-16 bg-cream" aria-labelledby="beans-grid-heading">
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
              { step: "03", title: "מספקים מהר", desc: "אספקה עד 7 ימי עסקים עד הדלת" },
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

      {/* Related guides */}
      <section className="py-10 bg-cream" aria-labelledby="beans-guide-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p id="beans-guide-heading" className="text-brown/70">
            רוצים לדעת עוד?{" "}
            <Link href="/blog/matching-coffee-to-taste" className="text-gold-dark font-bold underline">
              איך מתאימים קפה לטעם של העובדים
            </Link>{" "}
            ·{" "}
            <Link href="/blog/beans-vs-capsules" className="text-gold-dark font-bold underline">
              פולים או קפסולות?
            </Link>{" "}
            · ראו גם את{" "}
            <Link href="/business-solutions" className="text-gold-dark font-bold underline">
              פתרונות קפה לעסקים
            </Link>{" "}
            שלנו.
          </p>
        </div>
      </section>
    </>
  );
}
