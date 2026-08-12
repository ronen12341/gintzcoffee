import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/clinics" },
  title: "קפה למרפאות",
  description:
    "פתרון קפה למרפאות וקליניקות - מכונה קומפקטית ושקטה, קפה איכותי לצוות ולמטופלים, ושירות אמין. פתרון קפה שמשתלב בחוויה המקצועית של המקום.",
  openGraph: {
    title: "קפה למרפאות | קפה גינץ",
    description: "פתרון קפה למרפאות וקליניקות - מכונה קומפקטית, קפה איכותי ושירות אמין.",
    url: "https://www.gintz.co.il/business-solutions/clinics",
  },
};

export default function ClinicsCoffeePage() {
  return (
    <>
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="clinics-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            פתרונות קפה לעסקים
          </p>
          <h1 id="clinics-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            קפה למרפאות
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            כוס קפה טובה בחדר ההמתנה או בעמדת הצוות היא פרט קטן שמשדר
            רצינות ותשומת לב - בדיוק כמו שאר החוויה במרפאה שלכם.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <h2 className="text-2xl font-bold text-brown mb-3">קפה שמתאים לאווירה מקצועית</h2>
          <p>
            במרפאה הקפה משרת שני קהלים - הצוות שעובד שעות ארוכות, והמטופלים
            שמחכים. מכונה קומפקטית ושקטה, בלי הרבה תחזוקה, עם תוצאה שנראית
            ונטעמת ברמה - זה בדיוק מה שהמקום צריך.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה זה כולל</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>מכונה אוטומטית קומפקטית, מותאמת לחלל קבלה או עמדת צוות</li>
            <li>פולים טריים מבית הקלייה - איכות שמורגשת גם בכוס בודדת</li>
            <li>התקנה מהירה והדרכה קצרה, בלי לשבש את שגרת המרפאה</li>
            <li>שירות ותחזוקה שוטפת - כדי שהמכונה תמיד תעבוד כשצריך</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>
          <div className="space-y-3 not-prose">
            <details className="group bg-white rounded-xl border border-cream overflow-hidden">
              <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                <span>יש מכונה קטנה שמתאימה לחדר המתנה?</span>
                <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">
                כן - יש לנו דגמים קומפקטיים שמתאימים למרפאות קטנות-בינוניות.
                ראו את{" "}
                <Link href="/machines" className="text-gold-dark font-bold underline">כל דגמי המכונות</Link>{" "}
                או צרו קשר ונמליץ לפי החלל שלכם.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-cream overflow-hidden">
              <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                <span>כמה תחזוקה המכונה דורשת מהצוות שלנו?</span>
                <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">
                מינימלית - תוכנית ניקוי אוטומטית ומילוי שוטף. אנחנו גם
                מספקים שירות טכני זמין כשצריך.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brown mb-2">קבלו הצעה מותאמת למרפאה שלכם</h2>
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
