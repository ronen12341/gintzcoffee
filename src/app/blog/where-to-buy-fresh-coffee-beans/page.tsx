import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/where-to-buy-fresh-coffee-beans" },
  title: "איפה לקנות פולי קפה טריים בישראל — המדריך המלא",
  description:
    "איפה לקנות פולי קפה טריים בישראל: סופר, רשתות או בית קלייה? מה לבדוק על השקית, כמה זה עולה, ופולים טריים מבית הקלייה גינץ מ-120 ש״ח לק״ג עם משלוח לכל הארץ.",
  openGraph: {
    title: "איפה לקנות פולי קפה טריים בישראל? המדריך המלא | קפה גינץ",
    description: "סופר, רשתות או בית קלייה — איפה קונים פולי קפה טריים ומה לבדוק.",
    url: "https://www.gintz.co.il/blog/where-to-buy-fresh-coffee-beans",
    type: "article",
   siteName: "קפה גינץ", locale: "he_IL", images: [{ url: "/logo.png", width: 1079, height: 1080, alt: "קפה גינץ" }],
  },
};

const ARTICLE_LD = {"@context": "https://schema.org", "@type": "Article", "headline": "איפה לקנות פולי קפה טריים בישראל? המדריך המלא", "author": {"@type": "Organization", "name": "קפה גינץ"}, "publisher": {"@type": "Organization", "name": "קפה גינץ"}, "datePublished": "2026-11-28", "dateModified": "2026-11-28", "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.gintz.co.il/blog/where-to-buy-fresh-coffee-beans"}, "inLanguage": "he"};

const FAQ_LD = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "איפה הכי כדאי לקנות פולי קפה טריים?", "acceptedAnswer": {"@type": "Answer", "text": "בבית קלייה שמציין תאריך קלייה ושולח זמן קצר אחרי הקלייה. בסופרמרקט בדרך כלל יש רק תאריך תפוגה, בלי תאריך קלייה."}}, {"@type": "Question", "name": "כמה עולים פולי קפה טריים בישראל?", "acceptedAnswer": {"@type": "Answer", "text": "בבית הקלייה גינץ תערובות עולות מ-120 ש״ח לק״ג ופולים ממוצא יחיד 140 ש״ח לק״ג, עם משלוח חינם מעל 400 ש״ח."}}, {"@type": "Question", "name": "האם אפשר להזמין פולי קפה טריים עם משלוח עד הבית?", "acceptedAnswer": {"@type": "Answer", "text": "כן. קפה גינץ שולח פולים טריים לכל הארץ תוך עד 7 ימי עסקים — 60 ש״ח משלוח, וחינם בהזמנה מעל 400 ש״ח."}}, {"@type": "Question", "name": "כמה זמן פולי קפה נשארים טריים?", "acceptedAnswer": {"@type": "Answer", "text": "חלון הטעם הטוב ביותר הוא בשבועות הראשונים אחרי הקלייה. אחסנו בכלי אטום, במקום קריר וחשוך — לא במקרר."}}]};

export default function WhereToBuyFreshCoffeeBeansPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />

      <section className="page-hero" aria-labelledby="post-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            איפה לקנות פולי קפה טריים בישראל? המדריך המלא
          </h1>
          <p className="text-cream/60 text-sm">6 דקות קריאה · 28 בנובמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>מחפשים פולי קפה טריים בישראל? יש כמה מקומות לקנות — והם לא שווים. ההבדל העיקרי הוא <strong>כמה זמן עבר מהקלייה</strong>: פולי קפה מתחילים לאבד ארומה כבר בשבועות שאחרי הקלייה, ושקית שנקלתה בחו״ל ועברה משלוח, מחסן ומדף כבר רחוקה מהשיא שלה. הנה המדריך לבחירה.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איפה אפשר לקנות פולי קפה בישראל?</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right">איפה</th><th className="p-3 text-right">טריות</th><th className="p-3 text-right">מה לבדוק</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">סופרמרקט</td><td className="p-3">בדרך כלל אין תאריך קלייה — רק תאריך תפוגה</td><td className="p-3">אם אין תאריך קלייה על השקית, סביר שהיא ישנה</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">רשתות ובתי קפה</td><td className="p-3">משתנה</td><td className="p-3">לשאול מתי נקלו הפולים ואם נקלים במקום</td></tr><tr className="border-b border-brown/10"><td className="p-3">בית קלייה עם משלוח</td><td className="p-3">הכי טרי — נקלה קרוב למשלוח</td><td className="p-3">תאריך קלייה, מקור הפולים ורמת קלייה מפורטת</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה לבדוק לפני שקונים פולי קפה</h2>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>תאריך קלייה</strong> — לא תאריך תפוגה. זה הנתון שקובע את הטעם.</li>
            <li><strong>רמת קלייה</strong> — בהירה (פירותי וחומצי), בינונית (מאוזן), כהה (מר וגוף כבד).</li>
            <li><strong>טעמים</strong> — בית קלייה רציני מפרט טעמים: שוקולד, אגוזים, פירות, הדרים.</li>
            <li><strong>התאמה למכונה</strong> — למכונה אוטומטית עדיפה קלייה בינונית. <Link href="/blog/coffee-beans-for-automatic-machine" className="text-gold-dark font-bold underline">אילו פולים מתאימים למכונה אוטומטית</Link>.</li>
            <li><strong>משלוח</strong> — כמה זמן לוקח ומאיזה סכום הוא חינם.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">פולי קפה טריים מבית הקלייה גינץ</h2>

          <p>קפה גינץ הוא בית קלייה בבני ברק מאז 2005. הפולים נקלים אצלנו ונשלחים טריים — עד 10 ימים מהקלייה — במשלוח עד הבית או לעסק בכל הארץ.</p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right">מה</th><th className="p-3 text-right">פרטים</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">מחיר</td><td className="p-3">תערובות מ-120 ש״ח לק״ג, פולים ממוצא יחיד 140 ש״ח לק״ג</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">משלוח</td><td className="p-3">60 ש״ח, וחינם בהזמנה מעל 400 ש״ח</td></tr><tr className="border-b border-brown/10"><td className="p-3">זמן אספקה</td><td className="p-3">עד 7 ימי עסקים</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">תערובות</td><td className="p-3">Gold, Gold+, Silver, Silver+, Platinium, Titanium, Premium, Premium+, House Blend</td></tr><tr className="border-b border-brown/10"><td className="p-3">ממוצא יחיד</td><td className="p-3">ברזיל, קולומביה, קוסטה ריקה, אתיופיה</td></tr>
              </tbody>
            </table>
          </div>
          <p>לא בטוחים מה לבחור? <Link href="/blog/coffee-beans-by-taste" className="text-gold-dark font-bold underline">מדריך פולי קפה לפי טעם</Link> · <Link href="/beans" className="text-gold-dark font-bold underline">לכל הפולים ולהזמנה</Link></p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">איפה הכי כדאי לקנות פולי קפה טריים?</h3>

          <p>בבית קלייה שמציין תאריך קלייה ושולח זמן קצר אחרי הקלייה. בסופרמרקט בדרך כלל יש רק תאריך תפוגה, בלי תאריך קלייה.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">כמה עולים פולי קפה טריים בישראל?</h3>

          <p>בבית הקלייה גינץ תערובות עולות מ-120 ש״ח לק״ג ופולים ממוצא יחיד 140 ש״ח לק״ג, עם משלוח חינם מעל 400 ש״ח.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">האם אפשר להזמין פולי קפה טריים עם משלוח עד הבית?</h3>

          <p>כן. קפה גינץ שולח פולים טריים לכל הארץ תוך עד 7 ימי עסקים — 60 ש״ח משלוח, וחינם בהזמנה מעל 400 ש״ח.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">כמה זמן פולי קפה נשארים טריים?</h3>

          <p>חלון הטעם הטוב ביותר הוא בשבועות הראשונים אחרי הקלייה. אחסנו בכלי אטום, במקום קריר וחשוך — לא במקרר.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">פולים טריים, ישר מבית הקלייה</h3>
            <p className="text-brown/65 mb-4">תערובות מ-120 ש״ח לק״ג · משלוח חינם מעל 400 ש״ח</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/beans"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                להזמנת פולי קפה
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
            <li><Link href="/beans" className="text-gold-dark font-bold underline">פולי קפה טריים מבית הקלייה — להזמנה באתר</Link></li>
            <li><Link href="/blog/fresh-coffee-beans" className="text-gold-dark font-bold underline">פולי קפה טריים: 4 סימנים שהקפה באמת טרי</Link></li>
            <li><Link href="/blog/coffee-beans-by-taste" className="text-gold-dark font-bold underline">פולי קפה לפי טעם — איזה פולים לבחור</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
