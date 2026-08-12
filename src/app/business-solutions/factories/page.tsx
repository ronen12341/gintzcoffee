import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/factories" },
  title: "קפה למפעלים",
  description:
    "פתרון קפה למפעלים ולמתקני ייצור - מכונות עמידות לעבודה מרובת משמרות, פולים טריים ושירות טכני זמין. פתרון קפה שמחזיק מעמד.",
  openGraph: {
    title: "קפה למפעלים | קפה גינץ",
    description: "פתרון קפה למפעלים ולמתקני ייצור - מכונות עמידות ושירות טכני זמין.",
    url: "https://www.gintz.co.il/business-solutions/factories",
  },
};

export default function FactoriesCoffeePage() {
  return (
    <>
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="factories-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            פתרונות קפה לעסקים
          </p>
          <h1 id="factories-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            קפה למפעלים
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            מכונה שעומדת בעבודה מרובת משמרות, שירות טכני זמין כשמשהו נתקע,
            וקפה טרי שמגיע לעובדים בלי סיפורים.
          </p>
        </div>
      </section>

      <section className="py-10 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-brown/50 mb-4">בין הלקוחות שלנו</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            <Image src="/lp/logos/electra-construction.png" alt="Electra Construction" width={160} height={54} className="h-10 w-auto object-contain" />
            <Image src="/lp/logos/electra.png" alt="Electra" width={140} height={48} className="h-10 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <h2 className="text-2xl font-bold text-brown mb-3">קפה שעומד בקצב של מתקן ייצור</h2>
          <p>
            במפעל אין זמן לחכות למכונה שנתקעת, ואין מקום לפינוקים מסובכים.
            צריך מכונה פשוטה לתפעול, עמידה לשימוש אינטנסיבי במשמרות
            מרובות, ושירות שמגיע כשצריך - לא אחרי שבוע.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה זה כולל</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>מכונה אוטומטית עמידה, מותאמת לעבודה רציפה ומרובת עובדים</li>
            <li>פולים טריים באספקה חודשית קבועה - בלי לזכור להזמין</li>
            <li>התקנה והדרכה לצוות</li>
            <li>שירות טכני מהיר - כי מכונה תקולה עוצרת הפסקה שלמה</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>
          <div className="space-y-3 not-prose">
            <details className="group bg-white rounded-xl border border-cream overflow-hidden">
              <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                <span>המכונה עומדת בשימוש של עשרות עובדים במשמרות?</span>
                <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">
                כן - אנחנו מתאימים דגם לפי נפח הצריכה בפועל, לא רק לפי מספר
                העובדים הרשום. לצוותים גדולים במיוחד נמליץ על{" "}
                <Link href="/machines/jura-x10" className="text-gold-dark font-bold underline">JURA X10</Link>.
              </div>
            </details>
            <details className="group bg-white rounded-xl border border-cream overflow-hidden">
              <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                <span>מה קורה אם המכונה מתקלקלת באמצע יום עבודה?</span>
                <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">
                יש לנו שירות טכני זמין לכל לקוח - מתקשרים ואנחנו מטפלים.
                כל מכונה שנרכשת דרכנו כוללת אחריות ותמיכה שוטפת.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brown mb-2">קבלו הצעה מותאמת למפעל שלכם</h2>
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
