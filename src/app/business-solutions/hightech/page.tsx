import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/hightech" },
  title: "קפה לחברות הייטק",
  description:
    "פתרון קפה לחברות הייטק - מכונות בנפח גבוה, פולים טריים מבית קלייה ושירות מהיר. קפה שמתאים לתרבות ולקצב של חברת הייטק.",
  openGraph: {
    title: "קפה לחברות הייטק | קפה גינץ",
    description: "פתרון קפה לחברות הייטק - מכונות בנפח גבוה, פולים טריים ושירות מהיר.",
    url: "https://www.gintz.co.il/business-solutions/hightech",
  },
};

export default function HightechCoffeePage() {
  return (
    <>
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="hightech-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            פתרונות קפה לעסקים
          </p>
          <h1 id="hightech-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            קפה לחברות הייטק
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            קפה טוב הוא חלק מתרבות המשרד. מכונה שעומדת בקצב, קפה שמתאים לטעם
            של הצוות, ושירות שלא נופל בדיוק כשהכי צריך אותו.
          </p>
        </div>
      </section>

      <section className="py-10 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-brown/50 mb-4">בין הלקוחות שלנו</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            <Image src="/lp/logos/amazon.svg" alt="Amazon" width={140} height={48} className="h-8 w-auto object-contain" />
            <Image src="/lp/logos/aws.svg" alt="AWS" width={120} height={48} className="h-9 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <h2 className="text-2xl font-bold text-brown mb-3">למה חברות הייטק צריכות פתרון קפה שונה</h2>
          <p>
            במשרד הייטק הקפה לא רק מקרר את הכוננות - הוא חלק מהיום-יום של
            הצוות ומחוויית העבודה שאתם מציעים. תפוסה גבוהה, שעות עבודה
            ארוכות ותרבות open-space אומרות שהמכונה צריכה לעמוד בעומס
            אמיתי, לא רק להיראות טוב בפינת המטבחון.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה זה כולל</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>מכונה אוטומטית בנפח גבוה, מותאמת למספר העובדים בפועל</li>
            <li>פולים טריים מבית הקלייה שלנו, עם התאמת תערובת לטעם הצוות</li>
            <li>התקנה והדרכה ללא עלות נוספת</li>
            <li>שירות טכני זמין - כי מכונה תקולה באמצע יום עבודה זו בעיה אמיתית</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>
          <div className="space-y-3 not-prose">
            <details className="group bg-white rounded-xl border border-cream overflow-hidden">
              <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                <span>איזו מכונה מתאימה לחברת הייטק בינונית-גדולה?</span>
                <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">
                לרוב מכונה חזקה כמו{" "}
                <Link href="/machines/jura-x10" className="text-gold-dark font-bold underline">JURA X10</Link>{" "}
                שמתמודדת עם נפח גבוה. פרטים נוספים בעמוד{" "}
                <Link href="/machines" className="text-gold-dark font-bold underline">כל דגמי המכונות</Link>.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-cream overflow-hidden">
              <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                <span>אפשר להתאים תערובת לטעם הצוות שלנו?</span>
                <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">
                בהחלט - זה בדיוק מה שבית קלייה עושה. נעבור על טעמים מועדפים
                ונתאים רמת קלייה ובלנד בהתאם.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brown mb-2">קבלו הצעה מותאמת למשרד ההייטק שלכם</h2>
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
