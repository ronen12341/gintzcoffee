import type { Metadata } from "next";
import Link from "next/link";
import { machinePrice } from "@/lib/price";

const E8 = machinePrice("jura-e8");
const Z10 = machinePrice("jura-z10");
const X10 = machinePrice("jura-x10");

export const metadata: Metadata = {
  alternates: { canonical: "/blog/jura-e8-vs-z10" },
  title: "JURA E8 או JURA Z10? השוואה, מחירים ולמי כל אחת מתאימה",
  description: `JURA E8 (${E8}) מול JURA Z10 (${Z10}): כמה משקאות, איזו מטחנה, כמה כוסות ביום ואיזו מתאימה למשרד או לבית. השוואה מלאה מבית קלייה גינץ.`,
  openGraph: {
    title: "JURA E8 או JURA Z10? השוואה ומחירים | קפה גינץ",
    description: "השוואה בין JURA E8 ל-JURA Z10 — משקאות, מטחנה, נפח יומי ומחיר.",
    url: "https://www.gintz.co.il/blog/jura-e8-vs-z10",
    type: "article",
  },
};

const FAQ = [
  {
    q: "מה ההבדל העיקרי בין JURA E8 ל-JURA Z10?",
    a: `ה-Z10 היא מכונת הדגל: 51 משקאות כולל משקאות קרים, מטחנת P.R.G.2+ שמשנה את דרגת הטחינה אוטומטית לכל משקה, ונפח מומלץ של עד 50 ספלים ביום. ה-E8 פשוטה יותר: 27 משקאות, מטחנת P.A.G.2 ועד 40 ספלים ביום — בכמחצית המחיר (${E8} מול ${Z10}).`,
  },
  {
    q: "איזו מכונה מתאימה למשרד קטן?",
    a: "למשרד של עד כ-15 עובדים שותים בעיקר אספרסו, הפוך ואמריקנו — JURA E8 מספיקה ונותנת את רוב התמורה במחיר נמוך יותר.",
  },
  {
    q: "מתי שווה לשלם על Z10?",
    a: "כשהצוות גדול יותר (עד כ-20–25 שותים), כשרוצים מגוון רחב ומשקאות קרים, או כשהמכונה עומדת בקבלת קהל ומהווה חלק מחוויית האורחים.",
  },
  {
    q: "ומה אם המשרד גדול יותר?",
    a: `מעל כ-25 שותים כדאי לעבור למכונה מקצועית כמו JURA X10 (${X10}), או לפתרון קפה לעסק עם מכונה בהשאלה ושירות כלול.`,
  },
];

const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "JURA E8 או JURA Z10? השוואה, מחירים ולמי כל אחת מתאימה",
  author: { "@type": "Organization", name: "קפה גינץ" },
  publisher: { "@type": "Organization", name: "קפה גינץ" },
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.gintz.co.il/blog/jura-e8-vs-z10" },
  inLanguage: "he",
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const ROWS: [string, string, string][] = [
  ["מחיר באתר", E8, Z10],
  ["מספר משקאות", "27", "51 — חמים, קלים, קרים ומתוקים"],
  ["מטחנה", "P.A.G.2", "P.R.G.2+ — מתאימה את הטחינה אוטומטית לכל משקה"],
  ["שימוש מומלץ", "עד 40 ספלים ביום", "עד 50 ספלים ביום"],
  ["תפעול", "מסך צבעוני 3.5 אינץ׳ עם כפתורים", "מסך מגע וממשק מתקדם"],
  ["חיבור לאפליקציה", "תמיכה ב-J.O.E.®", "Wi-Fi מובנה + J.O.E.®"],
  ["מתאימה במיוחד ל", "משרד קטן, בית, חדר ישיבות", "משרד בינוני, קבלת קהל, מי שרוצה הכל"],
];

const link = "text-gold-dark font-bold underline";

export default function JuraE8VsZ10Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <section className="page-hero" aria-labelledby="post-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            JURA E8 או JURA Z10? השוואה, מחירים ולמי כל אחת מתאימה
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 30 באוקטובר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            שתי המכונות האוטומטיות הנמכרות ביותר של JURA עומדות כמעט באותו מדף, אבל בפער מחיר של כמעט פי שניים:{" "}
            <Link href="/machines/jura-e8" className={link}>JURA E8</Link> ב-{E8} מול{" "}
            <Link href="/machines/jura-z10" className={link}>JURA Z10</Link> ב-{Z10}. שתיהן טוחנות פולים טריים לכל כוס ומכינות משקאות חלב בלחיצה.
            השאלה היא כמה מהתוספות של ה-Z10 באמת ישמשו אתכם.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">בשורה אחת</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>JURA E8:</strong> כל מה שמשרד קטן או בית צריכים, במחיר שפוי. עד 40 ספלים ביום.</li>
            <li><strong>JURA Z10:</strong> מכונת הדגל, עם 51 משקאות כולל קרים ומטחנה שמתכווננת לבד. עד 50 ספלים ביום.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">השוואה מלאה</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream">
                  <th className="p-3 text-right"></th>
                  <th className="p-3 text-right">JURA E8</th>
                  <th className="p-3 text-right">JURA Z10</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, e8, z10], i) => (
                  <tr key={label} className={`border-b border-brown/10${i % 2 ? " bg-white/50" : ""}`}>
                    <td className="p-3 font-semibold">{label}</td>
                    <td className="p-3">{e8}</td>
                    <td className="p-3">{z10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מתי לבחור JURA E8</h2>
          <p>
            ברוב המשרדים הקטנים שותים בעיקר אספרסו, הפוך ואמריקנו. ה-E8 עושה את זה מצוין, והדור הרביעי שלה הוסיף
            חליטה קלה (Light Brew) וקצף מתוק (Sweet Foam). עד כ-15 עובדים, או בבית עם צריכה גבוהה, אין סיבה לשלם יותר.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מתי לבחור JURA Z10</h2>
          <p>
            ה-Z10 שווה את ההפרש כשיש יותר שותים (עד כ-20–25), כשרוצים משקאות קרים לקיץ, או כשהמכונה עומדת בקבלת קהל ומרשימה אורחים.
            מטחנת ה-P.R.G.2+ משנה לבד את דרגת הטחינה בין אספרסו לקפה ארוך, כך שכל משקה יוצא כמו שצריך בלי שאף אחד יכוון כלום.
          </p>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 המשרד גדול יותר?</strong>
            מעל כ-25 שותים שתי המכונות יעבדו קשה מדי בשעת השיא בבוקר. עדיף מכונה מקצועית כמו{" "}
            <Link href="/machines/jura-x10" className={link}>JURA X10</Link> ({X10}), או{" "}
            <Link href="/business-solutions" className={link}>פתרון קפה לעסק</Link> עם מכונה מותאמת ושירות כלול.
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">והפולים?</h2>
          <p>
            גם המכונה הכי טובה תלויה בקפה שמכניסים לה. פולים שנקלו לפני שבוע ייתנו קרמה וטעם שפולים מהמדף לא ייתנו.{" "}
            <Link href="/beans" className={link}>פולי קפה טריים מבית הקלייה שלנו</Link>, וגם{" "}
            <Link href="/blog/fresh-coffee-beans" className={link}>איך יודעים שהפולים באמת טריים</Link>.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-xl font-bold text-brown mt-6 mb-2">{q}</h3>
              <p>{a}</p>
            </div>
          ))}

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">עדיין מתלבטים?</h3>
            <p className="text-brown/65 mb-4">ספרו לנו כמה אתם ומה שותים — נגיד לכם בדיוק איזו מכונה מתאימה.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors">
                דברו איתנו
              </Link>
              <a href="tel:039600550" className="inline-flex items-center justify-center gap-2 border border-brown/20 text-brown px-6 py-3 rounded-full hover:border-gold transition-colors">
                📞 03-9600550
              </a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brown mt-10 mb-3">פוסטים קשורים</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Link href="/blog/automatic-vs-professional-coffee-machine" className={link}>מכונת קפה אוטומטית או מקצועית לעסק</Link></li>
            <li><Link href="/blog/choosing-office-coffee-machine" className={link}>איך לבחור מכונת קפה למשרד</Link></li>
            <li><Link href="/machines" className={link}>כל מכונות הקפה לעסקים ולמשרד</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
