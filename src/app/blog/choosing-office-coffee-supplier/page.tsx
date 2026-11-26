import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/choosing-office-coffee-supplier" },
  title: "איך בוחרים ספק קפה למשרד: 7 שאלות שכדאי לשאול לפני שחותמים",
  description:
    "7 שאלות לספק קפה למשרד: מי קולה את הפולים, מה זמן התגובה לתקלה, מה קורה בחוזה, ומה כלול בשירות. מדריך קצר לפני שחותמים.",
  openGraph: {
    title: "איך בוחרים ספק קפה למשרד: 7 שאלות שכדאי לשאול לפני שחותמים",
    description: "7 שאלות לספק קפה למשרד: מי קולה את הפולים, מה זמן התגובה לתקלה, מה קורה בחוזה, ומה כלול בשירות. מדריך קצר לפני שחותמים.",
    url: "https://www.gintz.co.il/blog/choosing-office-coffee-supplier",
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
            headline: "איך בוחרים ספק קפה למשרד: 7 שאלות שכדאי לשאול לפני שחותמים",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-11-26",
            dateModified: "2026-11-26",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/choosing-office-coffee-supplier",
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
              { "@type": "Question", name: "איך יודעים שהקפה שהספק מוכר באמת טרי?", acceptedAnswer: { "@type": "Answer", text: "בקשו לראות תאריך קלייה על האריזה, ושאלו אם הספק קולה בעצמו. ככל שהתאריך קרוב יותר לאספקה, הקפה טרי יותר." } },
              { "@type": "Question", name: "כמה זמן אמור לקחת לטכנאי להגיע למשרד?", acceptedAnswer: { "@type": "Answer", text: "אין תקן אחד, ולכן כדאי לשאול ולהכניס את זמן התגובה לחוזה. בדרך כלל עדיף ספק שנותן מכונה חלופית כשהתיקון מתארך." } },
              { "@type": "Question", name: "האם כדאי להתחייב לחוזה ארוך?", acceptedAnswer: { "@type": "Answer", text: "רק אם התנאים ברורים וקיימת דרך יציאה סבירה. אפשר להתחיל בתקופה קצרה ולבדוק את השירות בפועל." } },
            ],
          }),
        }}
      />

      <section className="page-hero" aria-labelledby="post-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            איך בוחרים ספק קפה למשרד: 7 שאלות שכדאי לשאול לפני שחותמים
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 26 בנובמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            ספק קפה למשרד הוא יותר מכתובת שמזמינים ממנה שקיות. זה מי שיטפל במכונה, יספק קפה טרי ויגיע כשמשהו נתקע. ההבדלים בין ספקים מתגלים בדרך כלל רק אחרי החתימה, ולכן כדאי לשאול כמה שאלות מראש.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">1. מי קולה את הקפה, ומתי?</h2>
          <p>
            ספק שקולה בעצמו שולט בטריות ובטעם. כדאי לשאול אם יש תאריך קלייה על האריזה ומה גיל הפולים כשהם מגיעים אליכם. פולים שקלויים לפני שבועות מפיקים קפה שטוח, גם במכונה מצוינת.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">2. מה זמן התגובה לתקלה?</h2>
          <p>
            מכונה שעומדת מושבתת במשרד של עשרות עובדים היא בעיה יומיומית. שאלו כמה זמן עובר עד שמגיע טכנאי, והאם יש מי שעונה בטלפון או בוואטסאפ בשעות העבודה.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">3. האם יש מכונה חלופית בזמן תקלה?</h2>
          <p>
            ספק עם מלאי מכונות יכול להחליף מכונה אם התיקון מתארך. זו אחת השאלות שמבדילות בין ספק קטן לספק שמוכן לשירות רציני.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">4. מה כלול בטיפולים?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ניקוי וניקוי אבנית תקופתי</li>
            <li>החלפת חלקים מתכלים</li>
            <li>ביקורי תחזוקה מתוזמנים</li>
            <li>מה נחשב לתקלה שעולה כסף ומה כלול</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">5. איך נראה החוזה, ואיך יוצאים ממנו?</h2>
          <p>
            בדקו משך התחייבות, תנאי ביטול, התחייבות לכמות קפה, ומה קורה במעבר דירה או בשינוי בגודל המשרד. חוזה טוב ברור ולא מפתיע.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">6. האם הספק מתאים לגודל הארגון?</h2>
          <p>
            ספק שמתמחה בעסקים קטנים לא בהכרח יודע לשרת חברה עם מאות עובדים או כמה קומות. שאלו אם יש לו לקוחות בגודל שלכם ואיך הוא מטפל בעומסים.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">7. אפשר לטעום לפני שמתחייבים?</h2>
          <p>
            קפה הוא עניין של טעם. בקשו לטעום, ובדקו שהספק מוכן להתאים את הקלייה לטעם של המשרד שלכם ולא רק למכור מה שיש.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>
          <h3 className="text-lg font-bold text-brown mt-5 mb-1">איך יודעים שהקפה שהספק מוכר באמת טרי?</h3>
          <p>בקשו לראות תאריך קלייה על האריזה, ושאלו אם הספק קולה בעצמו. ככל שהתאריך קרוב יותר לאספקה, הקפה טרי יותר.</p>
          <h3 className="text-lg font-bold text-brown mt-5 mb-1">כמה זמן אמור לקחת לטכנאי להגיע למשרד?</h3>
          <p>אין תקן אחד, ולכן כדאי לשאול ולהכניס את זמן התגובה לחוזה. בדרך כלל עדיף ספק שנותן מכונה חלופית כשהתיקון מתארך.</p>
          <h3 className="text-lg font-bold text-brown mt-5 mb-1">האם כדאי להתחייב לחוזה ארוך?</h3>
          <p>רק אם התנאים ברורים וקיימת דרך יציאה סבירה. אפשר להתחיל בתקופה קצרה ולבדוק את השירות בפועל.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">מחפשים ספק קפה למשרד?</h3>
            <p className="text-brown/65 mb-4">גינץ הוא בית קלייה בבני ברק מאז 2005. דברו איתנו ונתאים פתרון לגודל המשרד.</p>
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
              <Link href="/blog/rent-or-buy-office-coffee-machine" className="text-gold-dark font-bold underline">
                קנייה, שכירות או הצבה
              </Link>
            </li>
            <li>
              <Link href="/blog/fresh-coffee-beans" className="text-gold-dark font-bold underline">
                פולי קפה טריים: איך יודעים
              </Link>
            </li>
            <li>
              <Link href="/roastery" className="text-gold-dark font-bold underline">
                בית הקלייה של גינץ
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
