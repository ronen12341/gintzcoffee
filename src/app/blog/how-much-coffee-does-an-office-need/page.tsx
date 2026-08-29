import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/how-much-coffee-does-an-office-need" },
  title: "כמה קפה (פולים) צריך למשרד בחודש?",
  description:
    "מדריך כמויות פולי קפה למשרד - כמה קילוגרם בחודש לפי מספר עובדים, וכמה זה עולה בפועל. מחשבון פשוט לתכנון נכון.",
  openGraph: {
    title: "כמה קפה צריך למשרד בחודש? | קפה גינץ",
    description: "מדריך כמויות פולי קפה למשרד לפי מספר עובדים.",
    url: "https://www.gintz.co.il/blog/how-much-coffee-does-an-office-need",
    type: "article",
  },
};

export default function HowMuchCoffeePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "כמה קפה (פולים) צריך למשרד בחודש?",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-08-08",
            dateModified: "2026-08-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/how-much-coffee-does-an-office-need",
            },
            inLanguage: "he",
          }),
        }}
      />

      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="post-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gold/80 text-sm font-montserrat tracking-widest uppercase mb-3">
            תכנון ותקציב
          </p>
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            כמה קפה (פולים) צריך למשרד בחודש?
          </h1>
          <p className="text-cream/60 text-sm">4 דקות קריאה · 8 באוגוסט 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            אחת השאלות הכי נפוצות לפני שמזמינים אספקת קפה קבועה: כמה
            פולים בעצם צריך? הזמנה קטנה מדי אומרת שנגמר באמצע החודש -
            הזמנה גדולה מדי אומרת קפה שיושב יותר מדי זמן ומאבד טריות.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">נוסחת בסיס</h2>
          <p>
            כלל אצבע: כוס קפה ממוצעת (בכוסות מכונה אוטומטית) משתמשת
            בכ-7-9 גרם פולים. עובד ממוצע שותה 2-3 כוסות ביום עבודה.
          </p>
          <p>
            <strong>נוסחה:</strong> מספר עובדים × 2.5 כוסות × 8 גרם ×
            ימי עבודה בחודש (כ-22) = גרמים לחודש.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream">
                  <th className="p-3 text-right rounded-tr-lg">מספר עובדים</th>
                  <th className="p-3 text-right">כוסות ביום (משוער)</th>
                  <th className="p-3 text-right rounded-tl-lg">פולים לחודש</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10">
                  <td className="p-3">עד 10</td>
                  <td className="p-3">25</td>
                  <td className="p-3">~4 ק&quot;ג</td>
                </tr>
                <tr className="border-b border-brown/10 bg-white/50">
                  <td className="p-3">10–20</td>
                  <td className="p-3">50</td>
                  <td className="p-3">~7 ק&quot;ג</td>
                </tr>
                <tr className="border-b border-brown/10">
                  <td className="p-3">20–50</td>
                  <td className="p-3">125</td>
                  <td className="p-3">~18 ק&quot;ג</td>
                </tr>
                <tr>
                  <td className="p-3">50–100</td>
                  <td className="p-3">250</td>
                  <td className="p-3">~35 ק&quot;ג</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">למה ההערכה תמיד משוערת</h2>
          <p>
            הצריכה בפועל משתנה - יש עובדים ששותים כוס אחת ביום ויש
            ששותים חמש, ויש עונות (חורף, תקופות עומס) שבהן הצריכה קופצת.
            לכן מומלץ להתחיל עם הערכה סבירה ולהתאים לפי הצריכה בפועל
            אחרי חודש-חודשיים.
          </p>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 הפתרון הפשוט:</strong>
            באספקה חודשית קבועה שלנו אנחנו עוקבים אחרי הצריכה בפועל
            ומתאימים את הכמות - כך שלא תיגמר לכם ולא תישארו עם עודף.
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">סיכום</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>נוסחה בסיסית: עובדים × 2.5 כוסות × 8 גרם × 22 ימי עבודה</li>
            <li>עדיף להתחיל בהערכה זהירה ולהתאים אחרי חודש ראשון</li>
            <li>
              רוצים לדעת גם כמה זה עולה בכסף?{" "}
              <Link href="/blog/office-coffee-budget-guide" className="text-gold-dark font-bold underline">
                קראו את מדריך התקציב המלא
              </Link>
              .
            </li>
          </ul>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">לא בטוחים כמה להזמין?</h3>
            <p className="text-brown/65 mb-4">שלחו לנו את מספר העובדים - נמליץ על כמות מדויקת.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                קבלו הצעת מחיר
              </Link>
              <a
                href="tel:039600550"
                className="inline-flex items-center justify-center gap-2 border border-brown/20 text-brown px-6 py-3 rounded-full hover:border-gold transition-colors"
              >
                📞 03-9600550
              </a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brown mt-10 mb-3">פוסטים קשורים</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="/blog/beans-vs-capsules" className="text-gold-dark font-bold underline">
                פולים או קפסולות? מה עדיף לקפה במשרד
              </Link>
            </li>
            <li>
              <Link href="/blog/choosing-office-coffee-machine" className="text-gold-dark font-bold underline">
                איך לבחור מכונת קפה למשרד
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
