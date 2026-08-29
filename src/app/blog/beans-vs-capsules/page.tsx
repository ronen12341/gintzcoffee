import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/beans-vs-capsules" },
  title: "פולים או קפסולות? מה עדיף לקפה במשרד",
  description:
    "פולי קפה טריים מול קפסולות למשרד - השוואת עלות, איכות, נוחות והשפעה סביבתית. מה באמת מתאים לעסק שלכם.",
  openGraph: {
    title: "פולים או קפסולות? מה עדיף לקפה במשרד | קפה גינץ",
    description: "השוואת עלות, איכות ונוחות בין פולי קפה טריים לקפסולות למשרד.",
    url: "https://www.gintz.co.il/blog/beans-vs-capsules",
    type: "article",
  },
};

export default function BeansVsCapsulesPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "פולים או קפסולות? מה עדיף לקפה במשרד",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-08-08",
            dateModified: "2026-08-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/beans-vs-capsules",
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
            פולי קפה
          </p>
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            פולים או קפסולות? מה עדיף לקפה במשרד
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 8 באוגוסט 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            הרבה משרדים בוחרים קפסולות כי זה נראה פשוט ונקי - אבל זו לא
            תמיד הבחירה הכי טובה, לא מבחינת טעם ולא מבחינת עלות לטווח
            ארוך. הנה השוואה כנה בין השניים.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream">
                  <th className="p-3 text-right rounded-tr-lg">קריטריון</th>
                  <th className="p-3 text-right">פולי קפה טריים</th>
                  <th className="p-3 text-right rounded-tl-lg">קפסולות</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10">
                  <td className="p-3 font-semibold">טעם וטריות</td>
                  <td className="p-3">נטחנים ברגע ההכנה, טעם עשיר</td>
                  <td className="p-3">קפה שנארז מראש, לרוב חלש יותר בטעם</td>
                </tr>
                <tr className="border-b border-brown/10 bg-white/50">
                  <td className="p-3 font-semibold">עלות לכוס</td>
                  <td className="p-3">נמוכה יותר בכמות, יורדת עוד יותר בהזמנה קבועה</td>
                  <td className="p-3">גבוהה יותר לכוס, במיוחד בצריכה גבוהה</td>
                </tr>
                <tr className="border-b border-brown/10">
                  <td className="p-3 font-semibold">התאמה אישית</td>
                  <td className="p-3">רמת קלייה ובלנד לפי הטעם של הצוות</td>
                  <td className="p-3">מוגבל למגוון הקפסולות הקיים</td>
                </tr>
                <tr className="border-b border-brown/10 bg-white/50">
                  <td className="p-3 font-semibold">השפעה סביבתית</td>
                  <td className="p-3">אריזה מינימלית, פחות פסולת</td>
                  <td className="p-3">פסולת קפסולות בכל כוס</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">נוחות תפעולית</td>
                  <td className="p-3">מכונה אוטומטית - טוחנת ומכינה לבד</td>
                  <td className="p-3">פשוט מאוד, אך דורש החלפת קפסולות תדירה</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מתי קפסולות עדיין הגיוני</h2>
          <p>
            במשרדים קטנים מאוד עם צריכה נמוכה מאוד (פחות מ-10 כוסות ביום),
            העלות הראשונית הנמוכה של מכונת קפסולות יכולה להיות פתרון
            זמני סביר. אבל ברגע שהצריכה עולה, פולים טריים כמעט תמיד
            משתלמים יותר וטעימים יותר.
          </p>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 למה אנחנו ממליצים על פולים:</strong>
            כבית קלייה, אנחנו לא רק מספקים קפה - אנחנו קולים אותו בעצמנו
            ומתאימים את התערובת לטעם של הצוות שלכם. זו רמת התאמה שקפסולה
            אף פעם לא תיתן.
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">סיכום</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>יותר מ-10 כוסות ביום? פולים טריים כמעט תמיד משתלמים יותר</li>
            <li>רוצים טעם עשיר ומותאם אישית? רק פולים טריים נותנים את זה</li>
            <li>
              רוצים לדעת איזו מכונה מתאימה?{" "}
              <Link href="/blog/choosing-office-coffee-machine" className="text-gold-dark font-bold underline">
                קראו את המדריך לבחירת מכונה
              </Link>
              .
            </li>
          </ul>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">רוצים לטעום פולים מותאמים לצוות שלכם?</h3>
            <p className="text-brown/65 mb-4">שלחו פרטים - נתאים תערובת ונחזור עם הצעה.</p>
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
              <Link href="/blog/office-coffee-budget-guide" className="text-gold-dark font-bold underline">
                כמה עולה קפה למשרד? מדריך תקציב מלא
              </Link>
            </li>
            <li>
              <Link href="/blog/matching-coffee-to-taste" className="text-gold-dark font-bold underline">
                איך מתאימים קפה לטעם של העובדים
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
