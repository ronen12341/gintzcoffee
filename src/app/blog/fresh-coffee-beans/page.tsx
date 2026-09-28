import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/fresh-coffee-beans" },
  title: "פולי קפה טריים — איך יודעים שהקפה באמת טרי?",
  description:
    "איך מזהים פולי קפה טריים: תאריך קלייה מול תאריך תפוגה, כמה זמן פולים קלויים נשארים טריים, איך לאחסן אותם ולמה קפה טרי מבית קלייה טעים יותר.",
  openGraph: {
    title: "פולי קפה טריים — איך יודעים שהקפה באמת טרי? | קפה גינץ",
    description: "תאריך קלייה, אחסון ומה ההבדל בכוס — המדריך לפולי קפה טריים.",
    url: "https://www.gintz.co.il/blog/fresh-coffee-beans",
    type: "article",
  },
};

const ARTICLE_LD = {"@context": "https://schema.org", "@type": "Article", "headline": "פולי קפה טריים — איך יודעים שהקפה באמת טרי?", "author": {"@type": "Organization", "name": "קפה גינץ"}, "publisher": {"@type": "Organization", "name": "קפה גינץ"}, "datePublished": "2026-09-28", "dateModified": "2026-09-28", "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.gintz.co.il/blog/fresh-coffee-beans"}, "inLanguage": "he"};

const FAQ_LD = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "כמה זמן פולי קפה נשארים טריים אחרי הקלייה?", "acceptedAnswer": {"@type": "Answer", "text": "חלון הטעם הטוב ביותר הוא בשבועות הראשונים אחרי הקלייה. אחרי כחודש הארומה נחלשת בהדרגה, ופולים שעומדים חודשים על מדף מאבדים את רוב הארומה."}}, {"@type": "Question", "name": "האם כדאי לשמור פולי קפה במקרר?", "acceptedAnswer": {"@type": "Answer", "text": "לא. הלחות והריחות במקרר פוגעים בפולים. עדיף כלי אטום או השקית המקורית, במקום קריר, חשוך ויבש."}}, {"@type": "Question", "name": "למה חשוב תאריך קלייה ולא תאריך תפוגה?", "acceptedAnswer": {"@type": "Answer", "text": "תאריך התפוגה מציין רק שהקפה בטוח לשתייה. תאריך הקלייה מראה כמה הקפה טרי — וזה מה שקובע את הטעם בכוס."}}, {"@type": "Question", "name": "כמה טריים הפולים של גינץ?", "acceptedAnswer": {"@type": "Answer", "text": "הפולים נקלים בבית הקלייה שלנו ומגיעים ללקוח טריים — עד 10 ימים מהקלייה."}}]};

export default function FreshCoffeeBeansPost() {
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
            פולי קפה טריים — איך יודעים שהקפה באמת טרי?
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 28 בספטמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>כמעט כל שקית קפה על המדף כתוב עליה ״טרי״. אבל פולי קפה קלויים מתחילים לאבד ארומה כבר בימים ובשבועות שאחרי הקלייה — ושקית שנקלתה בחו״ל ועברה משלוח, מחסן ומדף רחוקה מאוד מהמצב הזה. הנה איך יודעים מה באמת נמצא בשקית.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">תאריך קלייה — לא תאריך תפוגה</h2>

          <p>הנתון החשוב ביותר על שקית קפה הוא <strong>מתי הפולים נקלו</strong>. תאריך תפוגה של שנה או שנתיים אומר רק שהקפה לא יזיק לכם — לא שהוא יהיה טעים. אם על השקית אין תאריך קלייה בכלל, סביר שהיא כבר ישנה.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">כמה זמן פולי קפה נשארים טריים?</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right">זמן מהקלייה</th><th className="p-3 text-right">מה קורה בכוס</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">ימים ספורים</td><td className="p-3">הפולים עדיין משחררים גזים — הטעם מתייצב</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">עד שבועות ספורים</td><td className="p-3">חלון הטעם הטוב ביותר: ארומה מלאה וקרמה עשירה</td></tr>
                <tr className="border-b border-brown/10"><td className="p-3">חודש ויותר</td><td className="p-3">הארומה נחלשת, הקרמה דלילה והטעם שטוח יותר</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">חודשים על מדף</td><td className="p-3">קפה ״עייף״ — מרירות ומעט ארומה</td></tr>
              </tbody>
            </table>
          </div>

          <p>זו הסיבה שבבית הקלייה שלנו הפולים יוצאים ללקוח טריים — עד 10 ימים מהקלייה — ולא יושבים במחסן. <Link href="/roastery" className="text-gold-dark font-bold underline">על בית הקלייה של גינץ</Link>.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">סימנים שהפולים טריים</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>יש על השקית תאריך קלייה, והוא קרוב</li>
            <li>השקית עם שסתום חד-כיווני — פולים טריים משחררים גזים</li>
            <li>כשפותחים את השקית — ריח חזק ומורכב, לא ״אבקתי״</li>
            <li>באספרסו — קרמה עבה וצבעונית שנשארת על הכוס</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איך לאחסן פולי קפה כדי שיישארו טריים</h2>

          <ol className="list-decimal list-inside space-y-2">
            <li><strong>פולים שלמים, לא טחונים.</strong> קפה טחון מאבד ארומה הרבה יותר מהר — טוחנים רגע לפני ההכנה.</li>
            <li><strong>בשקית המקורית או בכלי אטום,</strong> הרחק מאור, חום ולחות.</li>
            <li><strong>לא במקרר.</strong> הלחות והריחות במקרר פוגעים בפולים.</li>
            <li><strong>לקנות לפי הצריכה.</strong> עדיף שקית שתיגמר תוך כמה שבועות מאשר מלאי לחצי שנה.</li>
          </ol>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 למשרדים:</strong>
            הדרך הכי פשוטה לשמור על טריות היא אספקה קבועה לפי הצריכה בפועל. <Link href="/blog/how-much-coffee-does-an-office-need" className="text-gold-dark font-bold underline">כמה קפה המשרד שלכם צריך בחודש?</Link>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איזה פולים לבחור?</h2>

          <p>הטריות היא התנאי הראשון — אחריה מגיע הטעם. תערובות לאספרסו עם גוף מלא (כמו Gold או Silver) מתאימות למשקאות חלב, וקפה ממוצא יחיד (ברזיל, קולומביה, קוסטה ריקה, אתיופיה) מתאים למי שאוהב לטעום את ההבדלים בין אזורי הגידול. <Link href="/blog/matching-coffee-to-taste" className="text-gold-dark font-bold underline">איך מתאימים קפה לטעם</Link>.</p>

          <p>כל הפולים שלנו נקלים אצלנו ונשלחים טריים — <Link href="/beans" className="text-gold-dark font-bold underline">לחנות פולי הקפה</Link>.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">כמה זמן פולי קפה נשארים טריים אחרי הקלייה?</h3>

          <p>חלון הטעם הטוב ביותר הוא בשבועות הראשונים אחרי הקלייה. אחרי כחודש הארומה נחלשת בהדרגה, ופולים שעומדים חודשים על מדף מאבדים את רוב הארומה.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">האם כדאי לשמור פולי קפה במקרר?</h3>

          <p>לא. הלחות והריחות במקרר פוגעים בפולים. עדיף כלי אטום או השקית המקורית, במקום קריר, חשוך ויבש.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">למה חשוב תאריך קלייה ולא תאריך תפוגה?</h3>

          <p>תאריך התפוגה מציין רק שהקפה בטוח לשתייה. תאריך הקלייה מראה כמה הקפה טרי — וזה מה שקובע את הטעם בכוס.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">כמה טריים הפולים של גינץ?</h3>

          <p>הפולים נקלים בבית הקלייה שלנו ומגיעים ללקוח טריים — עד 10 ימים מהקלייה.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">רוצים פולים טריים באספקה קבועה?</h3>
            <p className="text-brown/65 mb-4">ספרו לנו כמה קפה אתם צורכים — נדאג שיגיע טרי, בקצב שלכם.</p>
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
            <li><Link href="/beans" className="text-gold-dark font-bold underline">פולי קפה טריים מבית הקלייה</Link></li>
            <li><Link href="/blog/beans-vs-capsules" className="text-gold-dark font-bold underline">פולים או קפסולות? מה עדיף במשרד</Link></li>
            <li><Link href="/blog/matching-coffee-to-taste" className="text-gold-dark font-bold underline">איך מתאימים קפה לטעם של העובדים</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
