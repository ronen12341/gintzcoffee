import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/rent-or-buy-office-coffee-machine" },
  title: "קנייה, שכירות או הצבה: איזה מודל מכונת קפה למשרד מתאים לכם?",
  description:
    "השוואה בין קניית מכונת קפה למשרד, שכירות והצבה מול ספק: מי אחראי על התחזוקה, מה קורה בתקלה ואיך בוחרים לפי גודל המשרד.",
  openGraph: {
    title: "קנייה, שכירות או הצבה: איזה מודל מכונת קפה למשרד מתאים לכם?",
    description: "השוואה בין קניית מכונת קפה למשרד, שכירות והצבה מול ספק: מי אחראי על התחזוקה, מה קורה בתקלה ואיך בוחרים לפי גודל המשרד.",
    url: "https://www.gintz.co.il/blog/rent-or-buy-office-coffee-machine",
    type: "article",
    siteName: "קפה גינץ", locale: "he_IL", images: [{ url: "/logo.png", width: 1079, height: 1080, alt: "קפה גינץ" }],
  },
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "קנייה, שכירות או הצבה: איזה מודל מכונת קפה למשרד מתאים לכם?",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-11-26",
            dateModified: "2026-11-26",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/rent-or-buy-office-coffee-machine",
            },
            inLanguage: "he",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "מה עדיף למשרד, לקנות מכונת קפה או לקבל בהצבה?", acceptedAnswer: { "@type": "Answer", text: "תלוי במי שיטפל במכונה. אם אין אצלכם מי שיקפיד על טיפולים ותקלות, מודל עם שירות חוסך עבודה ודאגות. אם יש לכם מי שמטפל, קנייה נותנת שליטה מלאה." } },
              { "@type": "Question", name: "מה לבדוק בחוזה הצבה או שכירות?", acceptedAnswer: { "@type": "Answer", text: "משך ההתחייבות, תנאי היציאה, מה כלול בשירות, זמן תגובה לתקלה, והאם מקבלים מכונה חלופית בזמן תיקון." } },
              { "@type": "Question", name: "האם מכונה משומשת היא אפשרות סבירה למשרד?", acceptedAnswer: { "@type": "Answer", text: "כן, כשהיא תקינה ובדוקה. כדאי לשאול מה מצבה ומה כולל המחיר, ולזכור שבמכונה משומשת בדרך כלל אין אחריות יצרן." } },
            ],
          }),
        }}
      />

      <section className="page-hero" aria-labelledby="post-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            קנייה, שכירות או הצבה: איזה מודל מכונת קפה למשרד מתאים לכם?
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 26 בנובמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            יש שלוש דרכים עיקריות להכניס מכונת קפה למשרד: לקנות אותה, לשכור אותה, או לקבל אותה בהצבה אצל ספק שמספק גם את הקפה והשירות. ההבדל אינו רק במחיר החודשי. הוא קובע מי מטפל בתקלות, מה קורה כשהמכונה מתקלקלת ובאיזו חופשיות אתם נשארים.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">קנייה: שליטה מלאה, אחריות מלאה</h2>
          <p>
            כשקונים מכונה, היא שלכם. אתם בוחרים את הדגם ואת הקפה, ואין התחייבות לספק. בתמורה, הטיפולים, הניקוי המקצועי והתקלות הם עליכם.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>מתאים למשרדים שיש בהם מי שדואג למכונה באופן קבוע</li>
            <li>כדאי לוודא שיש מי שמטפל בה מקצועית, ושמורים לכם חלפים ושירות</li>
            <li>אפשר לקנות מכונה חדשה, או משומשת ותקינה כשהתקציב מוגבל</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שכירות והצבה: שירות כחלק מהמודל</h2>
          <p>
            בהצבה המכונה נשארת בבעלות הספק, והוא אחראי על תחזוקה, טיפולים ותקלות, בדרך כלל כנגד רכישת הקפה ממנו. אתם משלמים על שימוש ולא על ציוד.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>מתאים למשרדים שלא רוצים לנהל מכונה בעצמם</li>
            <li>חשוב לבדוק בחוזה: משך ההתחייבות, תנאי היציאה, מכונה חלופית בזמן תקלה וזמן תגובה לשירות</li>
            <li>ככל שהמשרד גדול יותר ומשתמשים בו יותר, שירות אמין חשוב יותר</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איך מחליטים</h2>
          <p>
            שלוש שאלות מספיקות כדי להחליט. מי יטפל במכונה כשיש תקלה? כמה אנשים שותים ממנה ביום? והאם אתם מוכנים להתחייב לתקופה ארוכה?
          </p>
          <p>
            משרד קטן עם עובד שאוהב קפה יכול להסתדר עם קנייה. משרד גדול, מפעל או חברה עם הרבה עובדים ירוויחו בדרך כלל ממודל עם שירות, כי השבתה של המכונה מורגשת מיד.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">טעויות נפוצות</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>להשוות רק מחיר חודשי בלי לבדוק מה כלול בו</li>
            <li>לא לברר מה קורה אם המכונה מושבתת כמה ימים</li>
            <li>לקנות מכונה ביתית למשרד עמוס, כי היא לא נבנתה לעומס</li>
            <li>לא לבדוק את איכות הקפה, כי מכונה טובה עם קפה ישן מפיקה קפה בינוני</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>
          <h3 className="text-lg font-bold text-brown mt-5 mb-1">מה עדיף למשרד, לקנות מכונת קפה או לקבל בהצבה?</h3>
          <p>תלוי במי שיטפל במכונה. אם אין אצלכם מי שיקפיד על טיפולים ותקלות, מודל עם שירות חוסך עבודה ודאגות. אם יש לכם מי שמטפל, קנייה נותנת שליטה מלאה.</p>
          <h3 className="text-lg font-bold text-brown mt-5 mb-1">מה לבדוק בחוזה הצבה או שכירות?</h3>
          <p>משך ההתחייבות, תנאי היציאה, מה כלול בשירות, זמן תגובה לתקלה, והאם מקבלים מכונה חלופית בזמן תיקון.</p>
          <h3 className="text-lg font-bold text-brown mt-5 mb-1">האם מכונה משומשת היא אפשרות סבירה למשרד?</h3>
          <p>כן, כשהיא תקינה ובדוקה. כדאי לשאול מה מצבה ומה כולל המחיר, ולזכור שבמכונה משומשת בדרך כלל אין אחריות יצרן.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">רוצים לדעת איזה מודל מתאים למשרד שלכם?</h3>
            <p className="text-brown/65 mb-4">ספרו לנו כמה עובדים יש ואיך אתם שותים קפה, ונמליץ.</p>
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
                03-9600550
              </a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brown mt-10 mb-3">פוסטים קשורים</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="/blog/choosing-office-coffee-machine" className="text-gold-dark font-bold underline">
                איך לבחור מכונת קפה למשרד
              </Link>
            </li>
            <li>
              <Link href="/blog/office-coffee-budget-guide" className="text-gold-dark font-bold underline">
                כמה עולה קפה למשרד: מדריך תקציב
              </Link>
            </li>
            <li>
              <Link href="/business-solutions" className="text-gold-dark font-bold underline">
                פתרונות קפה לעסקים
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
