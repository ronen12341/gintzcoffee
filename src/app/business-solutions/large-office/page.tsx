import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { Factory, LayoutGrid, Gauge, Coffee } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/large-office" },
  title: "מכונת קפה למשרד גדול (מעל 20 עובדים)",
  description:
    "מכונת קפה למשרד גדול מעל 20 עובדים - מכונה מקצועית בעומס גבוה, אפשרות ליותר מעמדת קפה אחת ותכנון פריסה. פולים טריים מבית הקלייה שלנו, בדמי שירות חודשיים.",
  keywords: [
    "מכונת קפה למשרד גדול",
    "מכונת קפה בעומס גבוה",
    "עמדת קפה למשרד גדול",
    "מכונת קפה מעל 20 עובדים",
    "מכונת קפה למשרדים גדולים",
  ],
  openGraph: {
    title: "מכונת קפה למשרד גדול (מעל 20 עובדים) | קפה גינץ",
    description:
      "מכונה מקצועית בעומס גבוה, אפשרות ליותר מעמדת קפה אחת ותכנון פריסה למשרד גדול.",
    url: "https://www.gintz.co.il/business-solutions/large-office",
  },
};

const FAQ = [
  {
    q: "כמה פולים צורך משרד גדול בחודש?",
    a: "15 ק\"ג פולים ומעלה בחודש, בהתאם למספר העובדים ומספר עמדות הקפה. נקבע היקף מדויק בשיחת אפיון ומתאימים את קצב האספקה.",
  },
  {
    q: "צריך יותר מעמדת קפה אחת?",
    a: "לרוב כן, ממשרד של כ-50 עובדים ומעלה, או במבנה עם כמה קומות. עמדה אחת יוצרת תור בשעת שיא, ולכן אנחנו מתכננים פריסה של יותר מעמדה - כל אחת עם מכונה שמותאמת לעומס האזור שלה.",
  },
  {
    q: "המכונה עומדת בעבודה רציפה לאורך כל היום?",
    a: "כן - במשרדים גדולים אנחנו מציבים מכונות שנבנו לעבודה רציפה ולמאות כוסות ביום, לא רק לגל בוקר אחד. זה כולל מיכלי מים וחלב בקיבולת גדולה ומחזור אחזקה שמותאם לעומס.",
  },
  {
    q: "אתם מתכננים את פריסת עמדות הקפה בבניין?",
    a: "כן - בשיחת האפיון אנחנו בוחנים את תוכנית הבניין, מיקום הצוותים והמטבחונים, וממליצים כמה עמדות צריך ואיפה למקם אותן כדי לצמצם תורים.",
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

export default function LargeOfficeCoffeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="large-office-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            פתרונות קפה לעסקים · מעל 20 עובדים
          </p>
          <h1 id="large-office-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            מכונת קפה למשרד גדול
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונה מקצועית בעומס גבוה, תכנון פריסה של עמדות קפה בבניין, וקפה
            טרי שמגיע לכל הצוותים בזמן.
          </p>
        </div>
      </section>

      {/* Topical content */}
      <section className="py-16 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <h2 id="why-heading" className="text-2xl font-bold text-brown mb-3">
            למה משרד גדול צריך תכנון, לא רק מכונה
          </h2>
          <p>
            מעל 20 עובדים השאלה כבר לא רק &quot;איזו מכונה&quot;, אלא &quot;כמה עמדות
            ואיפה&quot;. מכונה בודדת, גם החזקה ביותר, יוצרת תור בשעת שיא ומכשילה
            את החוויה. משרד גדול צריך מכונה שבנויה לעבודה רציפה ולעומס של
            100+ כוסות ביום, ולעיתים יותר מעמדה אחת, פרושות לפי מיקום
            הצוותים בבניין.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה מתאים למשרד בגודל הזה</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose my-6">
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Factory className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">100+ כוסות ביום</p>
              <p className="text-brown/60 text-sm">היקף צריכה טיפוסי למשרד מעל 20 עובדים</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Gauge className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">מכונה בעומס גבוה</p>
              <p className="text-brown/60 text-sm">בנויה לעבודה רציפה לאורך כל היום</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <LayoutGrid className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">יותר מעמדה אחת</p>
              <p className="text-brown/60 text-sm">תכנון פריסה לפי מיקום הצוותים בבניין</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">כמה פולים זה בפועל</h2>
          <p className="flex items-start gap-2">
            <Coffee className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              משרד גדול צורך 15 ק&quot;ג פולים ומעלה בחודש, לפעמים בכמה
              עמדות במקביל. אנחנו קולים הכל בבית הקלייה שלנו ומתאימים את
              קצב האספקה לצריכה בפועל של כל עמדה.
            </span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream-dark border-y border-cream" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              שאלות נפוצות
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-xl border border-cream overflow-hidden">
                <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                  <span>{q}</span>
                  <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross links */}
      <section className="py-10 bg-cream" aria-labelledby="large-office-links-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p id="large-office-links-heading" className="text-brown/70">
            צוות קטן יותר?{" "}
            <Link href="/business-solutions/medium-office" className="text-gold-dark font-bold underline">
              עברו לעמוד משרד בינוני
            </Link>
            {" "}או{" "}
            <Link href="/business-solutions/small-office" className="text-gold-dark font-bold underline">
              משרד קטן
            </Link>
            . מעדיפים מודל השכרה?{" "}
            <Link href="/business-solutions/rental" className="text-gold-dark font-bold underline">
              קראו על השכרת מכונת קפה לעסק
            </Link>
            . או{" "}
            <Link href="/machines" className="text-gold-dark font-bold underline">
              עיינו בכל דגמי המכונות
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 bg-cream-dark" id="contact" aria-labelledby="large-office-contact-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="large-office-contact-heading" className="text-3xl font-bold text-brown mb-2">
              קבלו הצעה מותאמת למשרד הגדול שלכם
            </h2>
            <p className="text-brown/65">נחזור אליכם תוך יום עסקים.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}
