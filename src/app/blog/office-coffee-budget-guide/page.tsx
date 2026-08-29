import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/office-coffee-budget-guide" },
  title: "כמה עולה קפה למשרד? מדריך תקציב מלא לעסקים",
  description:
    "עלות מכונת קפה, פולים חודשית ותחזוקה - פירוט מלא של תקציב הקפה השנתי למשרד, לפי גודל הצוות.",
  openGraph: {
    title: "כמה עולה קפה למשרד? מדריך תקציב מלא | קפה גינץ",
    description: "עלות מכונה, פולים חודשית ותחזוקה - תקציב הקפה השנתי למשרד לפי גודל הצוות.",
    url: "https://www.gintz.co.il/blog/office-coffee-budget-guide",
    type: "article",
  },
};

export default function OfficeCoffeeBudgetGuidePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "כמה עולה קפה למשרד? מדריך תקציב מלא לעסקים",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-08-08",
            dateModified: "2026-08-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/office-coffee-budget-guide",
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
            תקציב ועלויות
          </p>
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            כמה עולה קפה למשרד? מדריך תקציב מלא
          </h1>
          <p className="text-cream/60 text-sm">6 דקות קריאה · 8 באוגוסט 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            &quot;כמה זה יעלה לנו&quot; היא כמעט תמיד השאלה הראשונה שעולה
            כשמתכננים קפה למשרד. התשובה תלויה בשלושה מרכיבים: עלות המכונה
            עצמה, עלות הפולים החודשית, ותחזוקה. הנה פירוק מלא.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">1. עלות המכונה</h2>
          <p>
            מחיר מכונת קפה למשרד נע בין 3,000 ל-15,000 ש&quot;ח, בהתאם לדגם
            ולנפח הייצור. זו הוצאה חד-פעמית (או תשלום חודשי, אם בוחרים
            במסלול השכרה/מימון).
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream">
                  <th className="p-3 text-right rounded-tr-lg">גודל צוות</th>
                  <th className="p-3 text-right">מחיר מכונה משוער</th>
                  <th className="p-3 text-right rounded-tl-lg">פולים לחודש (ק&quot;ג)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10">
                  <td className="p-3">עד 20 עובדים</td>
                  <td className="p-3">3,000–5,000 ש&quot;ח</td>
                  <td className="p-3">~3–4 ק&quot;ג</td>
                </tr>
                <tr className="border-b border-brown/10 bg-white/50">
                  <td className="p-3">20–50 עובדים</td>
                  <td className="p-3">5,000–9,000 ש&quot;ח</td>
                  <td className="p-3">~6–10 ק&quot;ג</td>
                </tr>
                <tr>
                  <td className="p-3">50+ עובדים</td>
                  <td className="p-3">9,000–15,000 ש&quot;ח</td>
                  <td className="p-3">~15+ ק&quot;ג</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">2. עלות הפולים החודשית</h2>
          <p>
            קילו פולי קפה איכותי לעסק נע בין 60 ל-120 ש&quot;ח, בהתאם למקור
            ולרמת הקלייה. משרד של 30 עובדים, למשל, צורך בממוצע 5-7 ק&quot;ג
            בחודש - כלומר כ-400-800 ש&quot;ח לחודש לקפה טרי לכל הצוות.
          </p>
          <p>
            בהזמנות קבועות אנחנו מציעים תנאים מיוחדים ומחיר נמוך יותר
            ליחידה - ההפרש בין הזמנה חד-פעמית לאספקה חודשית קבועה יכול
            להגיע ל-15-20% חיסכון.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">3. תחזוקה ושירות</h2>
          <p>
            מכונה שנרכשת דרכנו מגיעה עם התקנה, הדרכה ושירות טכני זמין - בלי
            עלות נוספת שוטפת מעבר לתחזוקה בסיסית (סבוני ניקוי, פילטרים).
            זו נקודה חשובה להשוואה בין ספקים - חלק מהעלות ה&quot;זולה&quot;
            של מכונה מתגלה בפועל בעלויות שירות נסתרות בהמשך.
          </p>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 חישוב מהיר:</strong>
            משרד של 30 עובדים: מכונה כ-6,000 ש&quot;ח (חד-פעמי) + כ-500
            ש&quot;ח לחודש לפולים = כ-6,000 ש&quot;ח בשנה הראשונה, וכ-6,000
            ש&quot;ח בשנים הבאות (רק פולים).
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איך להקטין את התקציב בלי לפגוע באיכות</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>מסלול השכרה/מימון.</strong> פורס את עלות המכונה לתשלומים
              חודשיים במקום הוצאה חד-פעמית גדולה.
            </li>
            <li>
              <strong>מכונת יד שנייה.</strong> ראו את{" "}
              <Link href="/bargains" className="text-gold-dark font-bold underline">
                המציאון
              </Link>{" "}
              שלנו - מכונות עם אחריות במחיר נמוך משמעותית ממכונה חדשה.
            </li>
            <li>
              <strong>אספקה חודשית קבועה.</strong> חוסכת גם זמן ניהול וגם
              מקבלת מחיר טוב יותר ליחידה מהזמנות חד-פעמיות.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">סיכום</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>עלות המכונה היא הוצאה חד-פעמית (או תשלום פרוס)</li>
            <li>פולים הם ההוצאה השוטפת - תלויה בגודל הצוות ובצריכה</li>
            <li>שירות ותחזוקה כלולים אצלנו - בדקו את זה מול כל ספק</li>
            <li>
              רוצים הצעת מחיר מדויקת לפי גודל הצוות שלכם?{" "}
              <Link href="/contact" className="text-gold-dark font-bold underline">
                צרו קשר
              </Link>
              .
            </li>
          </ul>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">רוצים תקציב מדויק למשרד שלכם?</h3>
            <p className="text-brown/65 mb-4">
              שלחו את גודל הצוות - נחזור עם הצעה מפורטת תוך שעות ספורות.
            </p>
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
              <Link href="/blog/choosing-office-coffee-machine" className="text-gold-dark font-bold underline">
                איך לבחור מכונת קפה למשרד — המדריך המלא
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
