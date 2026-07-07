import type { Metadata } from "next";
import { Coffee, Wrench, HeartHandshake, Truck } from "lucide-react";
import BusinessSolutionCard from "@/components/BusinessSolutionCard";
import LeadForm from "@/components/LeadForm";
import { businessSolutions } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions" },
  title: "פתרונות קפה לעסקים | קפה גינץ",
  description:
    "פתרונות קפה מקצה לקצה לעסקים — מכונת קפה, פולים טריים, התקנה, הדרכה ותמיכה שוטפת. מתאים מעסקים קטנים ועד ארגונים גדולים.",
  keywords: [
    "פתרונות קפה לעסקים",
    "מכונת קפה למשרד",
    "פתרון קפה משרדי",
    "אספקת קפה לעסק",
    "מכונת קפה לחברה",
    "קפה בוטיק לעסקים",
  ],
};

const PERKS = [
  {
    icon: Coffee,
    title: "פולים טריים מהקלייה שלנו",
    body: "אספקה שוטפת של פולים שנקלו במיוחד לעסק שלכם.",
  },
  {
    icon: Wrench,
    title: "התקנה והדרכה כלולות",
    body: "מגיעים אליכם, מתקינים, ומדריכים את הצוות לפני שעוזבים.",
  },
  {
    icon: HeartHandshake,
    title: "שירות אישי שוטף",
    body: "מנהל לקוח ייעודי שזמין בכל עת — שיחה אחת והכל מטופל.",
  },
  {
    icon: Truck,
    title: "אספקה והחלפה מהירה",
    body: "תקלה? מחליפים מכונה תוך 24 שעות. מלאי חירום זמין תמיד.",
  },
];

export default function BusinessSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 60%, #6B3A18 100%)" }}
        aria-labelledby="business-heading"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #C8922A 0%, transparent 35%), radial-gradient(circle at 70% 70%, #C8922A 0%, transparent 30%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-gold/90 text-sm font-montserrat tracking-widest uppercase mb-4">
            Coffee Solutions · For Business
          </p>
          <h1
            id="business-heading"
            className="text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight"
          >
            פתרונות קפה <span className="text-gold">לעסקים</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            פתרון קפה מלא מקצה לקצה — מכונה מקצועית, פולים טריים מבית הקלייה
            שלנו, התקנה, הדרכה ותמיכה שוטפת. מותאם לגודל העסק ולתקציב.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section
        className="py-16 bg-cream"
        id="solutions"
        aria-labelledby="solutions-grid-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="solutions-grid-heading"
              className="text-3xl md:text-4xl font-bold text-brown mb-3"
            >
              בחרו את הפתרון לפי גודל העסק
            </h2>
          </div>

          {businessSolutions.length === 0 ? (
            <p className="text-center text-brown/55 py-12">
              אין כרגע פתרונות זמינים. השאירו פרטים ונחזור אליכם.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {businessSolutions.map((s) => (
                <BusinessSolutionCard key={s.id} solution={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Perks strip */}
      <section className="py-12 bg-cream-dark border-y border-cream" aria-label="יתרונות">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gold/15 text-gold rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-brown font-bold mb-1">{title}</h3>
                <p className="text-brown/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="business-contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="business-contact-heading" className="text-3xl font-bold text-brown mb-2">
              קבלו הצעת מחיר מותאמת לעסק שלכם
            </h2>
            <p className="text-brown/65">
              מלאו פרטים ונחזור אליכם תוך יום עסקים עם הצעה מקצועית.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}
