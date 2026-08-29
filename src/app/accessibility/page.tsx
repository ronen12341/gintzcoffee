import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/accessibility" },
  title: "הצהרת נגישות",
  description:
    "הצהרת הנגישות של קפה גינץ - המחויבות שלנו לאתר נגיש לכלל האוכלוסייה, בהתאם לתקן הישראלי ת\"י 5568.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="accessibility-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="accessibility-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            הצהרת נגישות
          </h1>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-6">
          <p>
            קפה גינץ מחויבת לכך שהאתר יהיה נגיש לכלל האוכלוסייה — כולל אנשים עם
            מוגבלויות. אנחנו עובדים על שיפור הנגישות באופן שוטף, בהתאם לתקן
            הנגישות הישראלי ת&quot;י 5568 (WCAG 2.0 ברמה AA).
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">מה כבר נעשה</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>תמיכה בניווט מקלדת מלא</li>
            <li>תיאורים חלופיים לתמונות חשובות</li>
            <li>ניגודיות צבעים תקנית בטקסטים המרכזיים</li>
            <li>מבנה כותרות סמנטי לקריאה על ידי קוראי מסך</li>
            <li>טפסים עם תוויות ברורות ומצבי מיקוד נראים לעין</li>
          </ul>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">דיווח על בעיה</h2>
          <p>
            אם נתקלתם בקושי בגישה לאתר, אנא דווחו לנו בטלפון{" "}
            <a href="tel:039600550" className="text-gold font-bold" dir="ltr">
              03-9600550
            </a>{" "}
            או בדוא&quot;ל{" "}
            <a href="mailto:salesaspagil@gmail.com" className="text-gold font-bold">
              salesaspagil@gmail.com
            </a>
            . אנחנו מתחייבים לטפל בכל פנייה תוך 5 ימי עסקים.
          </p>
        </div>
      </section>
    </>
  );
}
