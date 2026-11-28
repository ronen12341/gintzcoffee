import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/coffee-beans-for-automatic-machine" },
  title: "פולי קפה למכונה אוטומטית — אילו פולים לבחור (JURA, דלונגי)",
  description:
    "אילו פולי קפה מתאימים למכונת קפה אוטומטית כמו JURA, דלונגי ופיליפס: למה קלייה בינונית, אילו פולים לא כדאי, והמלצות פולים טריים מבית הקלייה גינץ מ-120 ש״ח לק״ג.",
  openGraph: {
    title: "אילו פולי קפה מתאימים למכונה אוטומטית? | קפה גינץ",
    description: "קלייה בינונית, פולים לא שמנוניים — ואילו פולים לבחור למכונה אוטומטית.",
    url: "https://www.gintz.co.il/blog/coffee-beans-for-automatic-machine",
    type: "article",
   siteName: "קפה גינץ", locale: "he_IL", images: [{ url: "/logo.png", width: 1079, height: 1080, alt: "קפה גינץ" }],
  },
};

const ARTICLE_LD = {"@context": "https://schema.org", "@type": "Article", "headline": "אילו פולי קפה מתאימים למכונה אוטומטית?", "author": {"@type": "Organization", "name": "קפה גינץ"}, "publisher": {"@type": "Organization", "name": "קפה גינץ"}, "datePublished": "2026-11-28", "dateModified": "2026-11-28", "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.gintz.co.il/blog/coffee-beans-for-automatic-machine"}, "inLanguage": "he"};

const FAQ_LD = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "אילו פולי קפה הכי מתאימים למכונה אוטומטית?", "acceptedAnswer": {"@type": "Answer", "text": "פולים בקלייה בינונית, לא מבריקים משמן. מגינץ: Gold+ למכונה אוטומטית ופילטר, ו-Platinium לאספרסו במכונה אוטומטית."}}, {"@type": "Question", "name": "האם פולים בקלייה כהה מזיקים למכונה אוטומטית?", "acceptedAnswer": {"@type": "Answer", "text": "פולים בקלייה כהה מאוד ושמנוניים עלולים להשאיר שמן במטחנה ובמעברים. לכן במכונה אוטומטית עדיף לבחור קלייה בינונית."}}, {"@type": "Question", "name": "אילו פולים מתאימים ל-JURA?", "acceptedAnswer": {"@type": "Answer", "text": "קלייה בינונית טרייה. מגינץ מומלצים Gold+ ו-Platinium, ולמשקאות חלב Gold או Silver+."}}, {"@type": "Question", "name": "כמה עולים פולי קפה למכונה אוטומטית?", "acceptedAnswer": {"@type": "Answer", "text": "בגינץ 120 ש״ח לק״ג לתערובות ו-140 ש״ח לק״ג לפולים ממוצא יחיד, עם משלוח חינם מעל 400 ש״ח."}}]};

export default function CoffeeBeansForAutomaticMachinePost() {
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
            אילו פולי קפה מתאימים למכונה אוטומטית?
          </h1>
          <p className="text-cream/60 text-sm">5 דקות קריאה · 28 בנובמבר 2026</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-5">
          <p>למכונת קפה אוטומטית — JURA, דלונגי, פיליפס, מליטה או סייקו — יש מטחנה מובנית, והיא רגישה לסוג הפולים. הבחירה הנכונה משפיעה גם על הטעם וגם על אורך החיים של המכונה.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">איזו קלייה מתאימה למכונה אוטומטית?</h2>

          <p><strong>קלייה בינונית</strong> היא הבחירה הבטוחה. פולים בקלייה כהה מאוד מעלים שמנים לפני השטח — הם נראים מבריקים — והשמן עלול להצטבר במטחנה ובמעברים של המכונה. קלייה בהירה מאוד, לעומת זאת, יוצאת לעיתים חמוצה מדי באספרסו קצר.</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">הפולים של גינץ למכונה אוטומטית</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brown text-cream"><th className="p-3 text-right">פולים</th><th className="p-3 text-right">קלייה</th><th className="p-3 text-right">טעמים</th><th className="p-3 text-right">מתאים ל</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-brown/10"><td className="p-3">Gold+</td><td className="p-3">בינונית</td><td className="p-3">אגוזיות עדינה, מתיקות מעודנת, גוף בינוני</td><td className="p-3">מכונה אוטומטית ופילטר — מאוזן לכל העובדים</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">Platinium</td><td className="p-3">בינונית</td><td className="p-3">קקאו כהה, אגוזים קלויים, 100% עראביקה</td><td className="p-3">אספרסו במכונה אוטומטית</td></tr><tr className="border-b border-brown/10"><td className="p-3">Gold</td><td className="p-3">בינונית</td><td className="p-3">שוקולד מריר, קרמל, חמיצות עדינה</td><td className="p-3">אספרסו ומשקאות חלב</td></tr><tr className="border-b border-brown/10 bg-white/50"><td className="p-3">Silver+</td><td className="p-3">בינונית</td><td className="p-3">אגוזים, שוקולד חלב, חמיצות נמוכה</td><td className="p-3">שתייה יומיומית ומשקאות חלב</td></tr><tr className="border-b border-brown/10"><td className="p-3">ברזיל</td><td className="p-3">בינונית</td><td className="p-3">אגוז לוז, שוקולד חלב</td><td className="p-3">אספרסו רך וקפה חלב</td></tr>
              </tbody>
            </table>
          </div>
          <p>כל הפולים בטבלה בקלייה בינונית, ומחירם 120–140 ש״ח לק״ג. <Link href="/beans" className="text-gold-dark font-bold underline">לכל הפולים</Link></p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">טיפים לשימוש בפולים במכונה אוטומטית</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>מלאו במכל הפולים כמות לכמה ימים בלבד — הפולים במכל חשופים לאוויר.</li>
            <li>כשמחליפים סוג פולים, הכינו 2–3 כוסות עד שהטעם מתייצב.</li>
            <li>כוונו את דרגת הטחינה לפי הפולים: אספרסו מימי — טחינה דקה יותר.</li>
          </ul>
          <p>מחפשים מכונה לעסק? <Link href="/business-solutions" className="text-gold-dark font-bold underline">פתרונות קפה לעסקים</Link> · <Link href="/blog/jura-e8-vs-z10" className="text-gold-dark font-bold underline">JURA E8 או Z10</Link></p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">שאלות נפוצות</h2>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">אילו פולי קפה הכי מתאימים למכונה אוטומטית?</h3>

          <p>פולים בקלייה בינונית, לא מבריקים משמן. מגינץ: Gold+ למכונה אוטומטית ופילטר, ו-Platinium לאספרסו במכונה אוטומטית.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">האם פולים בקלייה כהה מזיקים למכונה אוטומטית?</h3>

          <p>פולים בקלייה כהה מאוד ושמנוניים עלולים להשאיר שמן במטחנה ובמעברים. לכן במכונה אוטומטית עדיף לבחור קלייה בינונית.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">אילו פולים מתאימים ל-JURA?</h3>

          <p>קלייה בינונית טרייה. מגינץ מומלצים Gold+ ו-Platinium, ולמשקאות חלב Gold או Silver+.</p>

          <h3 className="text-xl font-bold text-brown mt-6 mb-2">כמה עולים פולי קפה למכונה אוטומטית?</h3>

          <p>בגינץ 120 ש״ח לק״ג לתערובות ו-140 ש״ח לק״ג לפולים ממוצא יחיד, עם משלוח חינם מעל 400 ש״ח.</p>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center mt-10">
            <h3 className="text-xl font-bold text-brown mb-2">פולים טריים למכונה האוטומטית שלכם</h3>
            <p className="text-brown/65 mb-4">קלייה בינונית, טרי מבית הקלייה · משלוח חינם מעל 400 ש״ח</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/beans"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown font-bold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                לבחירת פולים
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
            <li><Link href="/blog/coffee-beans-by-taste" className="text-gold-dark font-bold underline">פולי קפה לפי טעם</Link></li>
            <li><Link href="/blog/automatic-vs-professional-coffee-machine" className="text-gold-dark font-bold underline">מכונה אוטומטית או מקצועית?</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
