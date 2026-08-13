import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/matching-coffee-to-taste" },
  title: "איך מתאימים קפה לטעם של העובדים",
  description:
    "לא כל קפה מתאים לכל צוות. הסבר על תהליך התאמת רמת קלייה ובלנד לטעם הספציפי של העובדים שלכם - כמו שרק בית קלייה יכול לעשות.",
  openGraph: {
    title: "איך מתאימים קפה לטעם של העובדים | קפה גינץ",
    description: "תהליך התאמת רמת קלייה ובלנד לטעם הספציפי של הצוות שלכם.",
    url: "https://www.gintz.co.il/blog/matching-coffee-to-taste",
    type: "article",
  },
};

export default function MatchingCoffeeToTastePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "איך מתאימים קפה לטעם של העובדים",
            author: { "@type": "Organization", name: "קפה גינץ" },
            publisher: { "@type": "Organization", name: "קפה גינץ" },
            datePublished: "2026-08-08",
            dateModified: "2026-08-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.gintz.co.il/blog/matching-coffee-to-taste",
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
            בית הקלייה שלנו
          </p>
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold text-cream mb-4">
            איך מתאימים קפה לטעם של העובדים
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 8 באוגוסט 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>
            רוב ספקי הקפה מוכרים אותו קפה לכל הלקוחות - כי הם קונים
            פולים קלויים מוכנים ומפיצים אותם הלאה. אנחנו עובדים אחרת:
            אנחנו בית קלייה, ואנחנו קולים בעצמנו לפי הזמנה. זה מאפשר
            משהו שספק רגיל פשוט לא יכול להציע - התאמה אמיתית לטעם של
            הצוות הספציפי שלכם.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איך התהליך עובד בפועל</h2>

          <h3 className="text-lg font-bold text-brown mt-4 mb-2">1. מבינים מה הצוות אוהב</h3>
          <p>
            שואלים שאלות פשוטות: קפה חזק או עדין? חמיצות פירותית או גוף
            שוקולדי-אגוזי? יש כבר קפה שהצוות אוהב במקום אחר? זו נקודת
            ההתחלה.
          </p>

          <h3 className="text-lg font-bold text-brown mt-4 mb-2">2. בוחרים מוצא ורמת קלייה</h3>
          <p>
            קפה מברזיל, קולומביה, אתיופיה ומקורות נוספים - כל אחד עם
            פרופיל טעם שונה. רמת הקלייה (בהירה, בינונית, כהה) משנה את
            האיזון בין חמיצות למרירות ולגוף המשקה.
          </p>

          <h3 className="text-lg font-bold text-brown mt-4 mb-2">3. קולים אצווה ובודקים</h3>
          <p>
            כל אצווה נקלית בנפרד בבית הקלייה שלנו, בפרופיל קלייה מדויק.
            זו לא קלייה תעשייתית המונית - זו קלייה בוטיק שמפתחת את
            הטעמים הייחודיים של כל מוצא.
          </p>

          <h3 className="text-lg font-bold text-brown mt-4 mb-2">4. מספקים טרי</h3>
          <p>
            הקפה יוצא אליכם תוך 24-48 שעות מהקלייה, ומגיע לעסק טרי -
            עד 10 ימים בלבד מיום הקלייה. ההבדל בטעם מורגש כבר בכוס
            הראשונה.
          </p>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 למה זה חשוב:</strong>
            קפה שמתאים לטעם של הצוות זה לא רק &quot;פינוק&quot; - זה משפיע ישירות
            על כמה עובדים בפועל משתמשים במכונה, ועל שביעות הרצון
            היומיומית שלהם מהמשרד.
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">סיכום</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>בית קלייה יכול להתאים טעם באופן שספק רגיל לא יכול</li>
            <li>התהליך: הבנת העדפות → בחירת מוצא ורמת קלייה → קלייה טרייה → אספקה</li>
            <li>
              רוצים לראות איך זה מתחיל?{" "}
              <Link href="/business-solutions" className="text-gold-dark font-bold underline">
                קראו על פתרונות קפה לעסקים
              </Link>
              .
            </li>
          </ul>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">רוצים למצוא את הקפה שהצוות שלכם יאהב?</h3>
            <p className="text-brown/65 mb-4">ספרו לנו קצת על הטעם שהצוות אוהב - נתחיל משם.</p>
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
