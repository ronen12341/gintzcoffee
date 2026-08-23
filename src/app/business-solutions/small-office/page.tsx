import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { Building2, Droplets, Coffee, Ruler } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/small-office" },
  title: "מכונת קפה למשרד קטן (עד 10 עובדים)",
  description:
    "מכונת קפה למשרד קטן עד 10 עובדים - מכונה אוטומטית קומפקטית עם מיכל מים פנימי, בלי צורך בתשתית. פולים טריים מבית הקלייה שלנו, בדמי שירות חודשיים.",
  keywords: [
    "מכונת קפה למשרד קטן",
    "מכונת קפה קומפקטית למשרד",
    "מכונת קפה לסטארט-אפ",
    "מכונת קפה למשרד עד 10 עובדים",
    "מכונת קפה משרדית קטנה",
  ],
  openGraph: {
    title: "מכונת קפה למשרד קטן (עד 10 עובדים) | קפה גינץ",
    description:
      "מכונה אוטומטית קומפקטית עם מיכל מים פנימי, בלי צורך בתשתית מים - מותאמת למשרד קטן.",
    url: "https://www.gintz.co.il/business-solutions/small-office",
  },
};

const FAQ = [
  {
    q: "כמה פולים צורך משרד קטן בחודש?",
    a: "בממוצע כ-5–10 ק\"ג פולים בחודש, בהתאם למספר העובדים ולהרגלי השתייה. נקבע כמות מדויקת בשיחת האפיון ומתאימים את קצב האספקה בפועל.",
  },
  {
    q: "צריך חיבור מים למכונה במשרד קטן?",
    a: "לרוב לא. במשרדים קטנים אנחנו ממליצים על מכונה עם מיכל מים פנימי - ממלאים אותו ידנית ואין צורך בעבודות אינסטלציה או תשתית קבועה.",
  },
  {
    q: "כמה מקום המכונה תופסת?",
    a: "מכונה קומפקטית טיפוסית למשרד קטן תופסת בערך את השטח של מיקרוגל - מתאימה לפינת קפה קטנה או לדלפק קיים, בלי צורך בהתקנה מיוחדת.",
  },
  {
    q: "יש התחייבות ארוכה למשרד קטן?",
    a: "התנאים נסגרים מראש בהצעת המחיר לפי הגודל והצריכה שלכם, כך שגם משרד קטן מקבל מודל שמתאים לו בלי לשלם על עודף קיבולת שלא צריך.",
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

export default function SmallOfficeCoffeePage() {
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
        aria-labelledby="small-office-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            פתרונות קפה לעסקים · עד 10 עובדים
          </p>
          <h1 id="small-office-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            מכונת קפה למשרד קטן
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונה אוטומטית קומפקטית עם מיכל מים פנימי - בלי תשתית, בלי בזבוז
            מקום, וקפה טרי מבית קלייה בדיוק בכמות שמשרד קטן צריך.
          </p>
        </div>
      </section>

      {/* Topical content */}
      <section className="py-16 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <h2 id="why-heading" className="text-2xl font-bold text-brown mb-3">
            למה משרד קטן צריך מכונה אחרת ממשרד גדול
          </h2>
          <p>
            הטעות הנפוצה ביותר במשרדים קטנים היא הזמנת מכונה שנבנתה לעומס של
            מאה עובדים. מכונה כזו גדולה מדי, יקרה מדי לתחזוקה, ולרוב דורשת
            חיבור מים קבוע שלא שווה להתקין עבור צוות של כמה אנשים. משרד עד 10
            עובדים צריך בדיוק את ההפך: מכונה קומפקטית, פשוטה לתפעול, שעונה על
            כ-20–50 כוסות ביום בלי תשתית מיוחדת.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה מתאים למשרד בגודל הזה</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose my-6">
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">20–50 כוסות ביום</p>
              <p className="text-brown/60 text-sm">היקף צריכה טיפוסי למשרד עד 10 עובדים</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">מיכל מים פנימי</p>
              <p className="text-brown/60 text-sm">בלי צורך בחיבור אינסטלציה או תשתית קבועה</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Ruler className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">גודל מיקרוגל</p>
              <p className="text-brown/60 text-sm">נכנסת לכל פינת קפה או דלפק קיים</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">כמה פולים זה בפועל</h2>
          <p className="flex items-start gap-2">
            <Coffee className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              משרד קטן צורך בממוצע כ-5–10 ק&quot;ג פולים בחודש. אנחנו קולים
              אותם טריים בבית הקלייה שלנו ומספקים לפי הקצב האמיתי שלכם - לא
              לפי הערכה גסה שגורמת למלאי לתפוח או להיגמר.
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
      <section className="py-10 bg-cream" aria-labelledby="small-office-links-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p id="small-office-links-heading" className="text-brown/70">
            צוות גדל?{" "}
            <Link href="/business-solutions/medium-office" className="text-gold-dark font-bold underline">
              עברו לעמוד משרד בינוני
            </Link>
            {" "}או{" "}
            <Link href="/business-solutions/large-office" className="text-gold-dark font-bold underline">
              משרד גדול
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
      <section className="py-16 bg-cream-dark" id="contact" aria-labelledby="small-office-contact-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="small-office-contact-heading" className="text-3xl font-bold text-brown mb-2">
              קבלו הצעה מותאמת למשרד הקטן שלכם
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
