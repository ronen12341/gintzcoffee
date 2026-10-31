import type { Metadata } from "next";
import Link from "next/link";
import BeansShop from "@/components/BeansShop";
import { coffeeBeans } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/beans" },
  title: "פולי קפה טריים עם משלוח עד הבית | בית קלייה גינץ",
  description:
    "פולי קפה טריים מבית הקלייה גינץ במשלוח עד הבית ולעסק. החל מ-120 ש\"ח לק\"ג, תערובות וחד-זני בקלייה עצמית. משלוח חינם מעל 400 ש\"ח, אספקה עד 7 ימי עסקים.",
  keywords: [
    "פולי קפה טריים",
    "פולי קפה משלוח עד הבית",
    "בית קלייה לקפה",
    "קניית פולי קפה אונליין",
    "פולי קפה לבית",
    "פולי קפה לעסק",
    "קפה למשרד",
    "פתרונות קפה למשרד",
    "בית קלייה בוטיק",
    "קפה טרי לעסקים",
    "קלייה בהתאמה אישית",
  ],
  openGraph: {
    title: "פולי קפה טריים עם משלוח עד הבית | קפה גינץ",
    description:
      "פולי קפה טריים מבית הקלייה גינץ — תערובות וחד-זני בקלייה עצמית, החל מ-120 ש\"ח לק\"ג, במשלוח עד הבית ולעסק.",
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
            פולי קפה טריים מבית הקלייה
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            קפה שאנחנו קולים בעצמנו בבית הקלייה גינץ בבני ברק, ונשלח טרי עד הבית או לעסק.
            תערובות מאוזנות וקפה ממוצא יחיד, מ-250 גרם ועד הזמנות גדולות.
          </p>
        </div>
      </section>

      {/* Key facts — price, shipping, delivery (plain text so search engines and AI assistants can read it).
          Shipping numbers mirror FREE_SHIPPING_THRESHOLD / SHIPPING_FEE in checkout/page.tsx and lib/server-pricing.ts — keep in sync. */}
      <section className="py-6 bg-cream border-b border-brown/10" aria-labelledby="beans-facts-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="beans-facts-heading" className="sr-only">
            מחירים, משלוח ואספקה
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-brown">
            <li>
              <p className="font-bold">החל מ-120 ש&quot;ח לק&quot;ג</p>
              <p className="text-sm text-brown/65">אריזת 250 גרם ב-45 ש&quot;ח</p>
            </li>
            <li>
              <p className="font-bold">משלוח עד הבית</p>
              <p className="text-sm text-brown/65">חינם מעל 400 ש&quot;ח, אחרת 60 ש&quot;ח</p>
            </li>
            <li>
              <p className="font-bold">אספקה עד 7 ימי עסקים</p>
              <p className="text-sm text-brown/65">או איסוף עצמי בבני ברק בתיאום</p>
            </li>
            <li>
              <p className="font-bold">קלייה עצמית</p>
              <p className="text-sm text-brown/65">ב-250 גרם: פולים שלמים או טחונים</p>
            </li>
          </ul>
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
            <Link href="/blog/fresh-coffee-beans" className="text-gold-dark font-bold underline">
              איך יודעים שפולי הקפה באמת טריים
            </Link>{" "}
            ·{" "}
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
