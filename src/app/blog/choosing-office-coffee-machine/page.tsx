import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/choosing-office-coffee-machine" },
  title: "איך לבחור מכונת קפה למשרד — המדריך המלא",
  description:
    "מכונה אוטומטית או מחצה-אוטומטית? כמה עובדים מצדיקים איזה דגם? מדריך מלא לבחירת מכונת קפה למשרד ולעסק.",
  openGraph: {
    title: "איך לבחור מכונת קפה למשרד — המדריך המלא | קפה גינץ",
    description:
      "מכונה אוטומטית או מחצה-אוטומטית? כמה עובדים מצדיקים איזה דגם? מדריך מלא לבחירת מכונת קפה למשרד.",
    url: "https://www.gintz.co.il/blog/choosing-office-coffee-machine",
    type: "article",
  },
};

export default function ChoosingOfficeCoffeeMachinePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "איך לבחור מכונת קפה למשרד — המדריך המלא",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-08-08",
            dateModified: "2026-08-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/choosing-office-coffee-machine",
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
            מכונות קפה
          </p>
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            איך לבחור מכונת קפה למשרד — המדריך המלא
          </h1>
          <p className="text-cream/60 text-sm">7 דקות קריאה · 8 באוגוסט 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            מכונת קפה למשרד היא לא רק כלי - היא חלק מהתרבות הארגונית. מכונה
            טובה חוסכת זמן, מונעת תורים במטבחון, ומשפיעה ישירות על שביעות
            הרצון של העובדים. הבעיה: יש עשרות דגמים בשוק, וקל לבחור לא נכון.
            המדריך הזה יעזור לכם להתאים את המכונה הנכונה לגודל ולצרכים של
            המשרד שלכם.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">
            שלב 1: אוטומטית או מחצה-אוטומטית?
          </h2>
          <p>
            <strong>מכונה אוטומטית (Super-Automatic)</strong> טוחנת, מדחיסה
            ומכינה את הקפה בלחיצת כפתור אחת. אין צורך בהכשרה או במיומנות -
            כל עובד יכול להכין כוס קפה איכותית תוך שניות. זו הבחירה הנכונה
            כמעט תמיד למשרד, כי אין בריסטה קבוע במקום.
          </p>
          <p>
            <strong>מכונה מחצה-אוטומטית</strong> דורשת ידע - טחינה, הידוק,
            שליטה בזמן החליטה. מתאימה לבתי קפה עם צוות מקצועי, לא למשרד
            רגיל.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">
            שלב 2: כמה עובדים = איזה דגם
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream">
                  <th className="p-3 text-right rounded-tr-lg">גודל משרד</th>
                  <th className="p-3 text-right">כוסות ביום</th>
                  <th className="p-3 text-right rounded-tl-lg">מכונה מומלצת</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10">
                  <td className="p-3">עד 20 עובדים</td>
                  <td className="p-3">עד 30 כוסות</td>
                  <td className="p-3">מכונה ביתית-מקצועית</td>
                </tr>
                <tr className="border-b border-brown/10 bg-white/50">
                  <td className="p-3">20–50 עובדים</td>
                  <td className="p-3">עד 40 כוסות</td>
                  <td className="p-3">JURA E8 ודומות</td>
                </tr>
                <tr>
                  <td className="p-3">50+ עובדים</td>
                  <td className="p-3">עד 100 כוסות</td>
                  <td className="p-3">JURA X10 ודומות</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">
            שלב 3: פרטים שקל לפספס
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>מיכל חלב מובנה או קפוצ&apos;ינטור חיצוני?</strong> מיכל
              מובנה נוח יותר לתחזוקה יומיומית, קפוצ&apos;ינטור חיצוני זול
              יותר ומתאים למשרדים קטנים.
            </li>
            <li>
              <strong>רעש.</strong> מכונות עוצמתיות יכולות להיות רועשות -
              חשוב אם המכונה ממוקמת ליד עמדות עבודה.
            </li>
            <li>
              <strong>קלות ניקוי.</strong> מכונה עם תוכנית ניקוי אוטומטית
              חוסכת זמן תחזוקה משמעותי לאורך זמן.
            </li>
            <li>
              <strong>שירות ואחריות.</strong> ודאו שיש שירות טכני זמין
              באזורכם - מכונה תקולה בלי גיבוי זו בעיה יומיומית, לא רק תקלה
              חד-פעמית.
            </li>
          </ul>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 טיפ:</strong>
            לפני שרוכשים, שווה לבדוק גם את{" "}
            <Link href="/bargains" className="text-gold-dark font-bold underline">
              מכונות היד השנייה
            </Link>{" "}
            שלנו - כולן עם אחריות ובמחיר נמוך משמעותית ממכונה חדשה.
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">קנייה, השכרה או מימון?</h2>
          <p>
            לא כל משרד צריך לרכוש מכונה במזומן. אנחנו מציעים גם מסלולי
            השכרה ומימון שמתאימים לתקציב, כולל התקנה, הדרכה לצוות ותחזוקה
            שוטפת - בלי התחייבות גדולה מראש.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">סיכום</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>למשרד - כמעט תמיד מכונה אוטומטית, לא מחצה-אוטומטית</li>
            <li>גודל הצוות קובע את עוצמת המכונה, לא רק את המחיר</li>
            <li>אל תזניחו שירות ותחזוקה - זה קובע את חוויית השימוש היומיומית</li>
            <li>
              רוצים המלצה מדויקת? ראו את{" "}
              <Link href="/machines" className="text-gold-dark font-bold underline">
                כל דגמי המכונות
              </Link>{" "}
              שלנו או{" "}
              <Link href="/business-solutions" className="text-gold-dark font-bold underline">
                פתרונות קפה לעסקים
              </Link>
              .
            </li>
          </ul>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">לא בטוחים איזו מכונה מתאימה?</h3>
            <p className="text-brown/65 mb-4">שלחו פרטים על המשרד - נחזור עם המלצה מותאמת.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                קבלו הצעת מחיר
              </Link>
              <a
                href="tel:0399600550"
                className="inline-flex items-center justify-center gap-2 border border-brown/20 text-brown px-6 py-3 rounded-full hover:border-gold transition-colors"
              >
                📞 03-9600550
              </a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brown mt-10 mb-3">פוסטים קשורים</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="/blog/office-coffee-budget-guide" className="text-gold-dark font-bold underline">
                כמה עולה קפה למשרד? מדריך תקציב מלא
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
