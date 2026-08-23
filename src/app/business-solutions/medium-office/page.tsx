import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { Users, Milk, Droplets, Coffee } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/medium-office" },
  title: "מכונת קפה למשרד בינוני (עד 20 עובדים)",
  description:
    "מכונת קפה למשרד בינוני עד 20 עובדים - מכונה אוטומטית מקצועית עם הקצפת חלב וחיבור מים, שעומדת בעומס שעות השיא. פולים טריים מבית הקלייה שלנו.",
  keywords: [
    "מכונת קפה למשרד בינוני",
    "מכונת קפה מקצועית למשרד",
    "מכונת קפה עם הקצפת חלב למשרד",
    "מכונת קפה למשרד עד 20 עובדים",
    "מכונת קפה עם חיבור מים",
  ],
  openGraph: {
    title: "מכונת קפה למשרד בינוני (עד 20 עובדים) | קפה גינץ",
    description:
      "מכונה אוטומטית מקצועית עם הקצפת חלב וחיבור מים קבוע - עומדת בעומס שעות השיא של משרד בינוני.",
    url: "https://www.gintz.co.il/business-solutions/medium-office",
  },
};

const FAQ = [
  {
    q: "כמה פולים צורך משרד בינוני בחודש?",
    a: "בממוצע כ-10–15 ק\"ג פולים בחודש, בהתאם למספר העובדים ולמגוון המשקאות. אנחנו מספקים לפי צריכה בפועל שנקבעת בשיחת האפיון.",
  },
  {
    q: "למה צריך חיבור מים קבוע במשרד בינוני?",
    a: "כשעשרות עובדים משתמשים במכונה כל בוקר, מילוי ידני של מיכל מים הופך למטלה יומיומית. חיבור מים קבוע מבטל את הצורך הזה ומאפשר למכונה לעמוד בעומס שעות השיא בלי הפסקות.",
  },
  {
    q: "המכונה כוללת הקצפת חלב?",
    a: "כן - במשרד בינוני אנחנו ממליצים על מכונה עם מערכת הקצפת חלב, כדי לתת מגוון מלא של משקאות (קפוצ׳ינו, לאטה ולא רק אספרסו) בלחיצת כפתור.",
  },
  {
    q: "המכונה עומדת בעומס של שעת שיא בבוקר?",
    a: "כן - מכונות שאנחנו מציבים במשרדים בגודל הזה נבנו לעבודה רציפה ולעומס גבוה סביב 8:30–9:30, כשרוב הצוות מגיע כמעט בו-זמנית.",
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

export default function MediumOfficeCoffeePage() {
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
        aria-labelledby="medium-office-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            פתרונות קפה לעסקים · עד 20 עובדים
          </p>
          <h1 id="medium-office-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            מכונת קפה למשרד בינוני
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונה אוטומטית מקצועית עם הקצפת חלב וחיבור מים קבוע - עומדת
            בעומס של שעות השיא, עם קפה טרי מבית קלייה.
          </p>
        </div>
      </section>

      {/* Topical content */}
      <section className="py-16 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <h2 id="why-heading" className="text-2xl font-bold text-brown mb-3">
            למה משרד בינוני צריך מכונה שונה ממשרד קטן
          </h2>
          <p>
            בין 10 ל-20 עובדים נקודת המעבר הכי משמעותית היא שעת השיא בבוקר:
            עשרות אנשים רוצים כוס קפה בפרק זמן קצר, ומכונה קומפקטית עם מיכל
            מים פנימי פשוט לא בנויה לזה. משרד בינוני צריך מכונה מקצועית
            שמתמודדת עם כ-50–130 כוסות ביום, עם חיבור מים קבוע שמבטל מילוי
            ידני, ומערכת הקצפת חלב שנותנת מגוון משקאות בלי לעצור לתחזוקה
            באמצע היום.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה מתאים למשרד בגודל הזה</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose my-6">
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">50–130 כוסות ביום</p>
              <p className="text-brown/60 text-sm">היקף צריכה טיפוסי למשרד עד 20 עובדים</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">חיבור מים קבוע</p>
              <p className="text-brown/60 text-sm">בלי מילוי ידני, בלי הפסקות בשעת שיא</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                <Milk className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="font-bold text-brown mb-1">הקצפת חלב מובנית</p>
              <p className="text-brown/60 text-sm">קפוצ׳ינו ולאטה בלחיצת כפתור, לא רק אספרסו</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">כמה פולים זה בפועל</h2>
          <p className="flex items-start gap-2">
            <Coffee className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              משרד בינוני צורך בממוצע כ-10–15 ק&quot;ג פולים בחודש. הפולים
              נקלים אצלנו בבית הקלייה ומגיעים אליכם ימים ספורים אחרי הקלייה,
              לא שבועות באריזה כמו אצל יבואנים.
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
      <section className="py-10 bg-cream" aria-labelledby="medium-office-links-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p id="medium-office-links-heading" className="text-brown/70">
            צוות קטן יותר?{" "}
            <Link href="/business-solutions/small-office" className="text-gold-dark font-bold underline">
              עברו לעמוד משרד קטן
            </Link>
            {" "}או צוות גדול יותר?{" "}
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
      <section className="py-16 bg-cream-dark" id="contact" aria-labelledby="medium-office-contact-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="medium-office-contact-heading" className="text-3xl font-bold text-brown mb-2">
              קבלו הצעה מותאמת למשרד הבינוני שלכם
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
