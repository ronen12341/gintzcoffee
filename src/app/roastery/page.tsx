import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Leaf, SlidersVertical, Truck, Coffee, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "בית קלייה לקפה | קליית פולי קפה טריים בהתאמה אישית",
  description:
    "קפה גינץ — בית קלייה לקפה מאז 2005. קליית פולי קפה בוטיק בהתאמה אישית: בחירת מוצא, רמת קלייה ובלנד. הקפה מגיע לעסק טרי, עד 10 ימים מיום הקלייה. בית קלייה בבני ברק.",
  keywords: [
    "בית קלייה לקפה",
    "בית קלייה",
    "קליית קפה",
    "בית קלייה בוטיק",
    "פולי קפה טריים",
    "בית קלייה בני ברק",
    "קפה טרי מבית קלייה",
    "קליית קפה בהתאמה אישית",
    "בלנד קפה לעסק",
  ],
  alternates: { canonical: "/roastery" },
  openGraph: {
    title: "בית קלייה לקפה | קפה גינץ",
    description:
      "בית קלייה בוטיק מאז 2005. קליית פולי קפה בהתאמה אישית — טרי עד 10 ימים מהקלייה.",
    url: "https://www.gintz.co.il/roastery",
  },
};

const steps = [
  {
    icon: Leaf,
    title: "פולים ירוקים ממיטב המטעים",
    text: "אנחנו בוחרים פולי קפה ירוקים ממקורות מובילים ברחבי העולם — ברזיל, קולומביה, אתיופיה ועוד — ובודקים כל משלוח לפני שהוא נכנס לבית הקלייה.",
  },
  {
    icon: Flame,
    title: "קלייה קפדנית באצוות קטנות",
    text: "כל אצווה נקלית בנפרד, בפרופיל קלייה מדויק שמפתח את הטעמים הייחודיים של כל מוצא. קלייה בוטיק אמיתית — לא ייצור המוני.",
  },
  {
    icon: SlidersVertical,
    title: "התאמה אישית של הבלנד",
    text: "רמת קלייה בהירה, בינונית או כהה? חמיצות פירותית או גוף שוקולדי? אנחנו בונים יחד אתכם את הבלנד המדויק לטעם של העסק שלכם.",
  },
  {
    icon: Truck,
    title: "אספקה טרייה עד הדלת",
    text: "הקפה יוצא אליכם תוך 24–48 שעות מהקלייה, ומגיע לעסק טרי — עד 10 ימים בלבד מיום הקלייה. ההבדל מורגש בכל כוס.",
  },
];

const audiences = [
  { icon: Coffee, title: "משרדים ועסקים", text: "פולים טריים למכונות הקפה במשרד, עם אספקה חודשית קבועה." },
  { icon: Flame, title: "בתי קפה ומסעדות", text: "בלנד ייחודי לעסק שלכם, בקלייה עקבית ובמחיר יצרן." },
  { icon: HeartHandshake, title: "חובבי קפה", text: "קפה טרי ברמה של בית קלייה — גם להזמנות קטנות הביתה." },
];

export default function RoasteryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="roastery-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            Gintz Coffee · Roastery
          </p>
          <h1 id="roastery-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            בית קלייה לקפה
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מאז 2005 אנחנו קולים פולי קפה בבני ברק — באצוות קטנות, בהתאמה אישית,
            ומספקים אותם טריים לעסקים בכל הארץ. לא מפיצים. יצרנים.
          </p>
        </div>
      </section>

      {/* למה בית קלייה */}
      <section className="py-16 bg-cream" aria-labelledby="why-roastery-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="why-roastery-heading" className="text-3xl font-bold text-brown mb-5">
            מה ההבדל בין ספק קפה לבית קלייה?
          </h2>
          <p className="text-brown/70 text-base leading-relaxed mb-4">
            רוב ספקי הקפה קונים פולים קלויים מוכנים — שלפעמים יושבים חודשים במחסן לפני
            שהם מגיעים אליכם. בבית קלייה הקפה נולד אצלנו: אנחנו שולטים בכל שלב, מבחירת
            הפול הירוק ועד רגע האריזה, והקפה יוצא לדרך רק אחרי שנקלה.
          </p>
          <p className="text-brown/70 text-base leading-relaxed">
            התוצאה: כוס קפה עשירה וארומטית, בטריות שאי אפשר לקבל מקפה מדף —{" "}
            <strong className="text-brown">עד 10 ימים בלבד מיום הקלייה</strong>.
          </p>
        </div>
      </section>

      {/* תהליך הקלייה */}
      <section className="py-16 bg-cream-dark" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="text-3xl font-bold text-brown mb-10 text-center">
            כך נולד הקפה שלכם
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <article key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <step.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-gold font-bold text-sm">שלב {i + 1}</span>
                </div>
                <h3 className="text-brown font-bold text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-brown/65 text-sm leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* למי זה מתאים */}
      <section className="py-16 bg-cream" aria-labelledby="audience-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="audience-heading" className="text-3xl font-bold text-brown mb-10 text-center">
            למי בית הקלייה שלנו קולה?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <article key={a.title} className="bg-white rounded-2xl p-7 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark mx-auto mb-4">
                  <a.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-brown font-bold text-xl mb-2">{a.title}</h3>
                <p className="text-brown/60 text-sm leading-relaxed">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="roastery-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="roastery-cta-heading" className="text-3xl font-bold text-cream mb-4">
            רוצים לטעום קפה טרי מבית הקלייה?
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            ספרו לנו על העסק שלכם ונרכיב לכם בלנד מותאם אישית — כולל טעימה,
            הצעת מחיר ואספקה קבועה.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn btn-primary">
              דברו איתנו על בלנד לעסק
            </Link>
            <Link href="/beans" className="btn btn-outline-gold">
              לקטלוג פולי הקפה ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
