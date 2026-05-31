"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "מכונות קפה למשרד",
    questions: [
      {
        q: "כמה עולה מכונת קפה למשרד?",
        a: "מחיר מכונת קפה למשרד נע בין 3,000 ל-15,000 ש\"ח, בהתאם לדגם ולנפח הייצור הנדרש. מכונות בינוניות למשרדים של 10–30 עובדים מתחילות מ-5,000 ש\"ח. אנחנו מציעים גם מסלולי השכרה ומימון המתאימים לכל תקציב — צרו איתנו קשר לקבלת הצעת מחיר.",
      },
      {
        q: "איזו מכונת קפה מתאימה לעסק שלי?",
        a: "הבחירה תלויה במספר העובדים וכמות הכוסות ביום: עד 20 עובד — מכונה ביתית-מקצועית (עד 30 כוסות ביום), 20–50 עובד — מכונה מקצועית כמו JURA E8 (עד 40 כוסות), 50+ עובד — מכונה חזקה כמו JURA X10 (עד 100 כוסות ביום). נשמח לייעץ בחינם לפי הצרכים שלכם.",
      },
      {
        q: "האם המכונה כוללת התקנה והדרכה?",
        a: "כן — כל מכונה שרוכשים דרך קפה גינץ מגיעה עם התקנה, הדרכה לצוות ותמיכה שוטפת. אנחנו לא מוכרים מכונה ונעלמים — אנחנו מלווים אתכם לאורך זמן.",
      },
      {
        q: "מה ההבדל בין מכונה אוטומטית למחצה-אוטומטית?",
        a: "מכונה אוטומטית (Super-Automatic) טוחנת, מדחיסה ומכינה את הקפה בלחיצת כפתור — אידיאלית למשרד שבו לא יש בריסטה מקצועי. מחצה-אוטומטית דורשת ידע ומיומנות, ומתאימה יותר לבתי קפה. לעסקים ומשרדים אנחנו ממליצים תמיד על מכונה אוטומטית.",
      },
    ],
  },
  {
    category: "פולי קפה",
    questions: [
      {
        q: "מה זה בית קלייה בוטיק?",
        a: "בית קלייה בוטיק קולה כמויות קטנות של פולי קפה באיכות גבוהה, עם תשומת לב לכל אצווה. בניגוד לקפה תעשייתי, הקפה שלנו נקלה לפי הזמנה ומגיע אליכם תוך ימים ספורים — טרי, ריחני ובטעם עמוק.",
      },
      {
        q: "כמה זמן פולי קפה נשארים טריים?",
        a: "פולי קפה טריים שנקלו לאחרונה נשמרים כ-4 שבועות בשקית אטומה, ועד 3 חודשים בקפואים. אנחנו מספקים קפה שנקלה לכל היותר 10 ימים לפני האספקה — כדי שתקבלו את המקסימום מכל כוס.",
      },
      {
        q: "אפשר להזמין פולים בקלייה ובמיזוג לפי בחירה?",
        a: "כן, זה בדיוק מה שאנחנו עושים. כבית קלייה, אנחנו מתאימים עבורכם את רמת הקלייה (בהירה / בינונית / כהה), את מקור הפולים ואת המיזוג לפי הטעם של הצוות שלכם.",
      },
      {
        q: "כמה עולה קילו פולי קפה לעסק?",
        a: "מחיר קילו פולי קפה איכותי לעסק נע בין 60 ל-120 ש\"ח, בהתאם למקור ולרמת הקלייה. בהזמנות קבועות לעסקים אנחנו מציעים תנאים מיוחדים ומחירים נוחים יותר.",
      },
    ],
  },
  {
    category: "שירות ואספקה",
    questions: [
      {
        q: "כמה זמן לוקחת האספקה?",
        a: "אספקה תוך 24–48 שעות מיום ההזמנה, ישירות לעסק שלכם. ללקוחות קבועים אנחנו מציעים לוח אספקות קבוע שמתאים לצריכה שלהם.",
      },
      {
        q: "האם אתם משרתים גם עסקים מחוץ לבני ברק?",
        a: "כן. אנחנו מספקים קפה ומכונות לעסקים בכל הארץ — תל אביב, ירושלים, חיפה, ראשון לציון ועוד. צרו קשר ונבדוק יחד את האפשרויות.",
      },
      {
        q: "יש אחריות על המכונות?",
        a: "כל מכונה שנרכשת דרכנו מגיעה עם אחריות יצרן מלאה + שירות טכני זמין. מכונות יד-שנייה שמכורות דרכנו מגיעות עם 3–6 חודשי אחריות.",
      },
      {
        q: "אפשר לקבל הצעת מחיר מותאמת לעסק?",
        a: "כמובן. מלאו את הטופס באתר או התקשרו ל-03-9600550 ואנחנו נחזור אליכם תוך שעות ספורות עם הצעה מותאמת לגודל העסק, כמות העובדים והתקציב.",
      },
    ],
  },
  {
    category: "כוסות ממותגות",
    questions: [
      {
        q: "מה זה כוסות ממותגות ולמה זה כדאי לעסק?",
        a: "כוסות ממותגות הן כוסות חד-פעמיות עם הלוגו של העסק שלכם מודפס עליהן. כל כוס קפה שמוגשת לאורח, לקוח או עובד הופכת לפרסומת. זה אחד הפתרונות השיווקיים החכמים והמשתלמים ביותר לעסקים.",
      },
      {
        q: "מה המינימום להזמנת כוסות ממותגות?",
        a: "המינימום להזמנה הוא 1,000 כוסות. צרו קשר לקבלת פרטים על גדלים, חומרים ומחירים.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/10 last:border-0">
      <button
        className="w-full text-right flex items-center justify-between gap-4 py-4 text-cream hover:text-gold transition-colors focus:outline-none focus-visible:text-gold"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium leading-snug">{q}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="pb-4 text-cream/70 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #2A1506 0%, #1F0F03 100%)" }}
    >
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <p className="text-gold/70 text-xs font-montserrat tracking-[0.25em] uppercase mb-3">
          שאלות נפוצות
        </p>
        <h1 className="text-cream text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
          כל מה שרציתם לדעת על קפה לעסקים
        </h1>
        <p className="text-cream/60 max-w-xl mx-auto text-base">
          מכונות קפה, פולים, אספקה וכוסות ממותגות — כאן תמצאו תשובות לשאלות הנפוצות ביותר.
        </p>
      </section>

      {/* FAQ sections */}
      <section className="max-w-3xl mx-auto px-4 pb-20 space-y-10">
        {faqs.map(({ category, questions }) => (
          <div key={category}>
            <h2 className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              {category}
            </h2>
            <div className="bg-white/5 rounded-2xl ring-1 ring-white/10 px-6">
              {questions.map(({ q, a }) => (
                <FaqItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center pt-6">
          <p className="text-cream/60 mb-4">לא מצאתם את התשובה שחיפשתם?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0399600550"
              className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
            >
              התקשרו: 03-9600550
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gold/40 text-cream px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              שלחו פנייה
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap(({ questions }) =>
              questions.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: a,
                },
              }))
            ),
          }),
        }}
      />
    </div>
  );
}
