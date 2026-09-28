import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/free-office-coffee-machine" },
  title: "מכונת קפה חינם למשרד — איך זה עובד ומה חשוב לבדוק",
  description:
    "מכונת קפה בחינם למשרד או בהשאלה: איך עובד המודל שבו המכונה על הספק ומשלמים רק על הקפה, מה כלול, מה חשוב לבדוק בחוזה ומתי עדיף לקנות.",
  openGraph: {
    title: "מכונת קפה חינם למשרד — איך זה עובד ומה חשוב לבדוק | קפה גינץ",
    description: "איך עובד מודל מכונת הקפה בהשאלה למשרד, ומה חשוב לבדוק לפני שחותמים.",
    url: "https://www.gintz.co.il/blog/free-office-coffee-machine",
    type: "article",
  },
};

const ARTICLE_LD = {"@context": "https://schema.org", "@type": "Article", "headline": "מכונת קפה חינם למשרד — איך זה עובד ומה חשוב לבדוק", "author": {"@type": "Organization", "name": "קפה גינץ"}, "publisher": {"@type": "Organization", "name": "קפה גינץ"}, "datePublished": "2026-09-28", "dateModified": "2026-09-28", "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.gintz.co.il/blog/free-office-coffee-machine"}, "inLanguage": "he"};

const FAQ_LD = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "האם באמת אפשר לקבל מכונת קפה חינם למשרד?", "acceptedAnswer": {"@type": "Answer", "text": "כן, במודל השאלה: המכונה נשארת בבעלות הספק ואתם משלמים על הקפה ועל השירות, בדמי שירות חודשיים. אין תשלום על המכונה עצמה."}}, {"@type": "Question", "name": "מה כלול בדמי השירות החודשיים?", "acceptedAnswer": {"@type": "Answer", "text": "אצלנו: המכונה, התקנה והדרכה, שירות ותחזוקה ללא חיוב נפרד, ואספקה שוטפת של פולים טריים מבית הקלייה שלנו."}}, {"@type": "Question", "name": "מה קורה אם המכונה מתקלקלת?", "acceptedAnswer": {"@type": "Answer", "text": "מתקשרים ואנחנו מטפלים. אם התקלה דורשת טיפול ממושך — מחליפים מכונה תוך 24 שעות."}}, {"@type": "Question", "name": "כמה זה עולה?", "acceptedAnswer": {"@type": "Answer", "text": "המחיר נקבע לפי גודל המכונה וכמות הפולים שהמשרד צורך. אחרי שיחת אפיון קצרה אנחנו חוזרים עם מספר חודשי אחד ומדויק."}}]};

export default function FreeOfficeCoffeeMachinePost() {
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
            מכונת קפה חינם למשרד — איך זה עובד ומה חשוב לבדוק
          </h1>
          <p className="text-cream/60 text-sm">6 דקות קריאה · 28 בספטמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>״מכונת קפה חינם למשרד״ היא אחת ההצעות הנפוצות בשוק הקפה לעסקים — ובצדק היא מעוררת חשד. אף אחד לא נותן מכונה של אלפי שקלים סתם. אז מה באמת עומד מאחורי המודל, ואיך יודעים אם זו עסקה טובה?</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איך המודל עובד</h2>

          <p>הספק מתקין אצלכם מכונה מקצועית שנשארת בבעלותו — מכונת קפה בהשאלה. אתם לא משלמים על המכונה עצמה, אלא על הקפה שאתם צורכים, בדרך כלל כחלק מדמי שירות חודשיים. הרווח של הספק מגיע מאספקת הפולים לאורך זמן, ולכן משתלם לו לתת מכונה טובה ולשמור עליכם מרוצים.</p>

          <p>אצלנו זה נקרא <Link href="/business-solutions/rental" className="text-gold-dark font-bold underline">השכרת מכונת קפה לעסק</Link>: המכונה עלינו, אתם משלמים על הקפה. דמי השירות החודשיים כוללים מכונה, התקנה, הדרכה, שירות ותחזוקה, ופולים טריים מבית הקלייה שלנו.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה צריך להיות כלול בעסקה טובה</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right">רכיב</th><th className="p-3 text-right">מה לבדוק</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">המכונה</td><td className="p-3">דגם מקצועי שמתאים לכמות העובדים — לא מכונה ביתית שתיתקע בשעות השיא</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">התקנה והדרכה</td><td className="p-3">כלולה, כולל כיול המכונה לפולים</td></tr>
                <tr className="border-b border-brown/10"><td className="p-3">שירות ותקלות</td><td className="p-3">ללא חיוב נפרד על ביקור טכנאי או חלקי חילוף</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">זמן תגובה</td><td className="p-3">התחייבות להחלפת מכונה אם התקלה ממושכת (אצלנו — תוך 24 שעות)</td></tr>
                <tr className="border-b border-brown/10"><td className="p-3">הקפה</td><td className="p-3">מאיפה הפולים מגיעים וכמה זמן עבר מהקלייה</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">המחיר</td><td className="p-3">מספר אחד וברור לחודש, בלי כוכביות</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">״חינם״ — איפה בכל זאת משלמים</h2>

          <p>המכונה חינם, הקפה לא. לכן השאלה החשובה היא לא ״כמה עולה המכונה״ אלא <strong>כמה עולה כוס</strong> לאורך שנה. כדאי לבקש מהספק הערכה חודשית לפי מספר העובדים, ולהשוות אותה לתקציב שאתם מוציאים היום. <Link href="/blog/office-coffee-budget-guide" className="text-gold-dark font-bold underline">מדריך תקציב הקפה למשרד</Link> עוזר לעשות את החישוב.</p>

          <p>עוד דברים שכדאי לשאול:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>האם יש התחייבות מינימלית לכמות פולים בחודש?</li>
            <li>מה תקופת ההתקשרות ומה קורה אם רוצים לסיים?</li>
            <li>האם אפשר להחליף או לשדרג מכונה אם המשרד גדל?</li>
            <li>האם אפשר לבחור את טעם הקפה, או שמקבלים תערובת אחת קבועה?</li>
          </ul>

          <div className="bg-gold/10 border-r-4 border-gold rounded-xl p-5 my-6">
            <strong className="block mb-1">💡 כלל אצבע:</strong>
            אם הספק מתחמק ממספר חודשי מדויק או מתמחר כל ביקור טכנאי בנפרד — זו לא באמת ״מכונה חינם״.
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">השאלה או קנייה — מה משתלם יותר?</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right"></th><th className="p-3 text-right">מכונה בהשאלה</th><th className="p-3 text-right">קניית מכונה</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">השקעה ראשונית</td><td className="p-3">אין</td><td className="p-3">אלפי שקלים (לדוגמה JURA E8 — 5,700 ש״ח, JURA X10 — 11,250 ש״ח)</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">תחזוקה ותיקונים</td><td className="p-3">כלולים</td><td className="p-3">על חשבונכם</td></tr>
                <tr className="border-b border-brown/10"><td className="p-3">גמישות</td><td className="p-3">מחליפים מכונה לפי הצורך</td><td className="p-3">המכונה נשארת גם אם לא מתאימה</td></tr>
                <tr className="border-b border-brown/10 bg-white/50"><td className="p-3">עלות לאורך שנים</td><td className="p-3">תלויה בצריכת הקפה</td><td className="p-3">משתלמת יותר כשהצריכה גבוהה והיציבה</td></tr>
              </tbody>
            </table>
          </div>

          <p>למשרד שרוצה ראש שקט, בלי השקעה ובלי להתעסק עם טכנאים — השאלה היא בדרך כלל הבחירה הנכונה. משרד עם צוות יציב שמעדיף לשלם פעם אחת ולהחזיק ציוד משלו יכול לבחור מתוך <Link href="/machines" className="text-gold-dark font-bold underline">מכונות הקפה שלנו למכירה</Link>.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">לאיזה משרד זה מתאים</h2>

          <ul className="list-disc list-inside space-y-2">
            <li><Link href="/business-solutions/small-office" className="text-gold-dark font-bold underline">משרד קטן עד 10 עובדים</Link> — מכונה קומפקטית, ללא השקעה</li>
            <li><Link href="/business-solutions/medium-office" className="text-gold-dark font-bold underline">משרד בינוני</Link> — מכונה אוטומטית שעומדת בעומס הבוקר</li>
            <li><Link href="/business-solutions/large-office" className="text-gold-dark font-bold underline">משרד גדול</Link> — מכונה מקצועית בנפח גבוה עם שירות שוטף</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">האם באמת אפשר לקבל מכונת קפה חינם למשרד?</h3>

          <p>כן, במודל השאלה: המכונה נשארת בבעלות הספק ואתם משלמים על הקפה ועל השירות, בדמי שירות חודשיים. אין תשלום על המכונה עצמה.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">מה כלול בדמי השירות החודשיים?</h3>

          <p>אצלנו: המכונה, התקנה והדרכה, שירות ותחזוקה ללא חיוב נפרד, ואספקה שוטפת של פולים טריים מבית הקלייה שלנו.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">מה קורה אם המכונה מתקלקלת?</h3>

          <p>מתקשרים ואנחנו מטפלים. אם התקלה דורשת טיפול ממושך — מחליפים מכונה תוך 24 שעות.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">כמה זה עולה?</h3>

          <p>המחיר נקבע לפי גודל המכונה וכמות הפולים שהמשרד צורך. אחרי שיחת אפיון קצרה אנחנו חוזרים עם מספר חודשי אחד ומדויק.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">רוצים מכונה בהשאלה למשרד?</h3>
            <p className="text-brown/65 mb-4">ספרו לנו כמה עובדים יש אצלכם — נחזור עם דגם מכונה ומחיר חודשי קבוע.</p>
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
            <li><Link href="/business-solutions/rental" className="text-gold-dark font-bold underline">השכרת מכונת קפה לעסק</Link></li>
            <li><Link href="/blog/office-coffee-budget-guide" className="text-gold-dark font-bold underline">כמה עולה קפה למשרד? מדריך תקציב</Link></li>
            <li><Link href="/blog/choosing-office-coffee-machine" className="text-gold-dark font-bold underline">איך לבחור מכונת קפה למשרד</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
