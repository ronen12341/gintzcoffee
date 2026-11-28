import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/coffee-beans-by-taste" },
  title: "פולי קפה לפי טעם — שוקולדי, אגוזי או פירותי? מדריך בחירה",
  description:
    "מדריך לבחירת פולי קפה לפי טעם: שוקולדי, אגוזי, פירותי או חזק. טבלה של כל הפולים מבית הקלייה גינץ עם רמת קלייה, טעמים ושיטת הכנה מומלצת — מ-120 ש״ח לק״ג.",
  openGraph: {
    title: "פולי קפה לפי טעם — איזה פולים לבחור? | קפה גינץ",
    description: "שוקולדי, אגוזי, פירותי או חזק — טבלת פולים לפי טעם.",
    url: "https://www.gintz.co.il/blog/coffee-beans-by-taste",
    type: "article",
   siteName: "קפה גינץ", locale: "he_IL", images: [{ url: "/logo.png", width: 1079, height: 1080, alt: "קפה גינץ" }],
  },
};

const ARTICLE_LD = {"@context": "https://schema.org", "@type": "Article", "headline": "פולי קפה לפי טעם — איזה פולים לבחור?", "author": {"@type": "Organization", "name": "קפה גינץ"}, "publisher": {"@type": "Organization", "name": "קפה גינץ"}, "datePublished": "2026-11-28", "dateModified": "2026-11-28", "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.gintz.co.il/blog/coffee-beans-by-taste"}, "inLanguage": "he"};

const FAQ_LD = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "אילו פולי קפה בטעם שוקולדי?", "acceptedAnswer": {"@type": "Answer", "text": "מגינץ: Gold (שוקולד מריר וקרמל), Silver (שוקולד מריר וקקאו), Titanium ו-Premium+."}}, {"@type": "Question", "name": "אילו פולי קפה פחות מרים?", "acceptedAnswer": {"@type": "Answer", "text": "פולים בקלייה בינונית עם חמיצות נמוכה, כמו Silver+, Gold+ וברזיל."}}, {"@type": "Question", "name": "אילו פולי קפה פירותיים?", "acceptedAnswer": {"@type": "Answer", "text": "פולים ממוצא יחיד בקלייה בהירה-בינונית: אתיופיה, קוסטה ריקה וקולומביה, וגם תערובת Premium."}}, {"@type": "Question", "name": "אילו פולי קפה הכי חזקים?", "acceptedAnswer": {"@type": "Answer", "text": "House Blend — קלייה כהה עם גוף כבד וסיומת ארוכה."}}]};

export default function CoffeeBeansByTastePost() {
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
            פולי קפה לפי טעם — איזה פולים לבחור?
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 28 בנובמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>איך בוחרים פולי קפה כשיש כל כך הרבה אפשרויות? הדרך הכי פשוטה היא לפי הטעם שאתם אוהבים בכוס. ריכזנו את כל הפולים שלנו בטבלה אחת — לפי טעמים, רמת קלייה ושיטת הכנה.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">כל הפולים של גינץ לפי טעם</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right">פולים</th><th className="p-3 text-right">קלייה</th><th className="p-3 text-right">טעמים</th><th className="p-3 text-right">מומלץ ל</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">Gold</td><td className="p-3">בינונית</td><td className="p-3">שוקולד מריר, קרמל חם, חמיצות עדינה</td><td className="p-3">אספרסו ומשקאות חלב</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">Gold+</td><td className="p-3">בינונית</td><td className="p-3">אגוזיות עדינה, מתיקות מעודנת</td><td className="p-3">מכונה אוטומטית ופילטר</td></tr><tr className="border-b border-brown/10"><td className="p-3">Silver</td><td className="p-3">כהה, סגנון איטלקי</td><td className="p-3">שוקולד מריר, קקאו, אגוזים קלויים</td><td className="p-3">אספרסו, קפוצ׳ינו והפוך</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">Silver+</td><td className="p-3">בינונית</td><td className="p-3">אגוזים, שוקולד חלב, קרמל עדין</td><td className="p-3">שתייה יומיומית ומשקאות חלב</td></tr><tr className="border-b border-brown/10"><td className="p-3">Platinium</td><td className="p-3">בינונית</td><td className="p-3">קקאו כהה, אגוזים קלויים</td><td className="p-3">אספרסו במכונה אוטומטית</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">Titanium</td><td className="p-3">בינונית</td><td className="p-3">שוקולד עמוק, אגוזים קלויים, קרמל</td><td className="p-3">אספרסו חזק ומשקאות חלב</td></tr><tr className="border-b border-brown/10"><td className="p-3">House Blend</td><td className="p-3">כהה</td><td className="p-3">גוף כבד, טעם נחוש, סיומת ארוכה</td><td className="p-3">אספרסו חזק</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">Premium</td><td className="p-3">בינונית</td><td className="p-3">פרחוני, אוכמניות, הדרים, דבש-קרמל</td><td className="p-3">פילטר ואספרסו בהיר</td></tr><tr className="border-b border-brown/10"><td className="p-3">Premium+</td><td className="p-3">בינונית</td><td className="p-3">שוקולד, אגוזים קלויים, קרמל</td><td className="p-3">אספרסו ומשקאות חלב</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">ברזיל</td><td className="p-3">בינונית</td><td className="p-3">אגוז לוז, שוקולד חלב</td><td className="p-3">אספרסו רך וקפה חלב</td></tr><tr className="border-b border-brown/10"><td className="p-3">קולומביה</td><td className="p-3">בינונית</td><td className="p-3">קרמל, פרי אדום, חמיצות רעננה</td><td className="p-3">פילטר ואספרסו קלאסי</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">קוסטה ריקה</td><td className="p-3">בהירה</td><td className="p-3">דבש, תפוז, חמיצות עדינה</td><td className="p-3">פילטר וכוס בוקר קלילה</td></tr><tr className="border-b border-brown/10"><td className="p-3">אתיופיה</td><td className="p-3">בינונית</td><td className="p-3">פרחוני, פירות יער</td><td className="p-3">פילטר וכוס בוקר קלילה</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איך לבחור בקצרה</h2>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>אוהבים שוקולדי ועוצמתי עם חלב?</strong> Gold, Silver, Titanium או Premium+.</li>
            <li><strong>אוהבים רך ועגול, בלי מרירות?</strong> Silver+, Gold+ או ברזיל.</li>
            <li><strong>אוהבים פירותי ופרחוני?</strong> אתיופיה, קוסטה ריקה, קולומביה או Premium.</li>
            <li><strong>אוהבים חזק מאוד?</strong> House Blend.</li>
            <li><strong>יש לכם מכונה אוטומטית?</strong> <Link href="/blog/coffee-beans-for-automatic-machine" className="text-gold-dark font-bold underline">המדריך לפולים למכונה אוטומטית</Link>.</li>
          </ul>
          <p>המחירים: תערובות 120 ש״ח לק״ג, פולים ממוצא יחיד ו-Premium 140 ש״ח לק״ג. משלוח חינם מעל 400 ש״ח. <Link href="/beans" className="text-gold-dark font-bold underline">לכל הפולים ולהזמנה</Link></p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">אילו פולי קפה בטעם שוקולדי?</h3>

          <p>מגינץ: Gold (שוקולד מריר וקרמל), Silver (שוקולד מריר וקקאו), Titanium ו-Premium+.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">אילו פולי קפה פחות מרים?</h3>

          <p>פולים בקלייה בינונית עם חמיצות נמוכה, כמו Silver+, Gold+ וברזיל.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">אילו פולי קפה פירותיים?</h3>

          <p>פולים ממוצא יחיד בקלייה בהירה-בינונית: אתיופיה, קוסטה ריקה וקולומביה, וגם תערובת Premium.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">אילו פולי קפה הכי חזקים?</h3>

          <p>House Blend — קלייה כהה עם גוף כבד וסיומת ארוכה.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">מצאתם את הטעם שלכם?</h3>
            <p className="text-brown/65 mb-4">פולים טריים מבית הקלייה, מ-120 ש״ח לק״ג</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/beans"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                להזמנת פולים
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
            <li><Link href="/blog/where-to-buy-fresh-coffee-beans" className="text-gold-dark font-bold underline">איפה לקנות פולי קפה טריים בישראל</Link></li>
            <li><Link href="/blog/matching-coffee-to-taste" className="text-gold-dark font-bold underline">איך מתאימים קפה לטעם של העובדים</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
