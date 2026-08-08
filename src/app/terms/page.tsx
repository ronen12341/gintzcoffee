import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "תקנון האתר",
  description: "תקנון השימוש באתר קפה גינץ - תנאי הזמנה, תשלום, משלוח וביטול עסקה.",
};

export default function TermsPage() {
  return (
    <>
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="terms-heading"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 id="terms-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            תקנון האתר
          </h1>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-brown leading-relaxed space-y-6">
          <p className="text-sm text-brown/60">עודכן לאחרונה: אוגוסט 2026</p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">1. כללי</h2>
          <p>
            השימוש באתר קפה גינץ (&quot;האתר&quot;) ובשירותים המוצעים בו כפוף
            לתנאים המפורטים בתקנון זה. גלישה באתר ו/או ביצוע הזמנה מהווים
            הסכמה לתנאים אלו. האתר מופעל על ידי קפה גינץ, רחוב הירקון 39, בני
            ברק.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">2. הזמנה ותשלום</h2>
          <p>
            המחירים המוצגים באתר כוללים מע&quot;מ אלא אם צוין אחרת. השלמת
            הזמנה כפופה לאישור זמינות המוצר ואישור העסקה על ידי חברת האשראי /
            אמצעי הסליקה. קפה גינץ שומרת לעצמה את הזכות לבטל הזמנה במקרה של
            טעות סופר במחיר או בפרטי המוצר.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">3. משלוח ואספקה</h2>
          <p>
            זמני האספקה המצוינים באתר הם משוערים. קפה גינץ תעשה מאמץ סביר
            לעמוד בהם, אך אינה אחראית לעיכובים שאינם בשליטתה (כגון עיכובי
            שילוח חיצוניים).
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">4. ביטול עסקה</h2>
          <p>
            ניתן לבטל עסקה בהתאם להוראות חוק הגנת הצרכן, התשמ&quot;א-1981
            ותקנותיו. ביטול הזמנה למוצר יעשה בכתב, בפנייה לדוא&quot;ל{" "}
            <a href="mailto:salesaspagil@gmail.com" className="text-gold font-bold">
              salesaspagil@gmail.com
            </a>{" "}
            או בטלפון{" "}
            <a href="tel:0399600550" className="text-gold font-bold" dir="ltr">
              03-9600550
            </a>
            . במקרה של ביטול שלא עקב פגם, רשאית קפה גינץ לגבות דמי ביטול כפי
            שמתיר החוק. מוצר שסופק ללקוח יוחזר באריזתו המקורית ובמצב תקין.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">5. אחריות</h2>
          <p>
            מכונות קפה הנרכשות דרך האתר מגיעות עם אחריות יצרן כמפורט בעמוד
            המוצר או כפי שנמסר בהזמנה. קפה גינץ אינה אחראית לנזק שנגרם כתוצאה
            משימוש שלא בהתאם להוראות היצרן.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">6. קניין רוחני</h2>
          <p>
            כל הזכויות בתוכן האתר — לרבות טקסט, תמונות ועיצוב — שייכות לקפה
            גינץ ואין להעתיק, להפיץ או לעשות בהן שימוש מסחרי ללא אישור מראש
            ובכתב.
          </p>

          <h2 className="text-2xl font-bold text-brown mt-8 mb-3">7. יצירת קשר</h2>
          <p>
            לכל שאלה בנוגע לתקנון זה ניתן לפנות אלינו בטלפון{" "}
            <a href="tel:0399600550" className="text-gold font-bold" dir="ltr">
              03-9600550
            </a>{" "}
            או בדוא&quot;ל{" "}
            <a href="mailto:salesaspagil@gmail.com" className="text-gold font-bold">
              salesaspagil@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
