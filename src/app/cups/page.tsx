import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CupsQuoteForm from "@/components/CupsQuoteForm";
import AddToCartButton from "@/components/AddToCartButton";
import { cupCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "כוסות ממותגות לעסקים | הדפסה על כוסות נייר",
  description:
    "כוסות נייר ממותגות לעסקים, אירועים, מסעדות וימי הולדת. הדפסה איכותית עד 4 צבעים עם הלוגו שלכם. Gil Cups — קפה גינץ.",
};

export default function CupsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 100%)" }}
        aria-labelledby="cups-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 id="cups-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            כוסות ממותגות לעסקים
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            הדפסת כוסות נייר מעוצבות בהתאמה אישית ללקוחות עסקיים ופרטיים.
            הפכו כל כוס קפה לכלי שיווקי — משלוח לכל הארץ.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-cream" aria-labelledby="cups-cats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cups-cats-heading" className="text-2xl font-bold text-brown mb-8">
            הקטלוג שלנו
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cupCategories.map((cat) => (
              <article
                key={cat.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="relative w-full aspect-square bg-[#F5F0E8]">
                  {cat.image ? (
                    <SmartImage
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <SmartImagePlaceholder label="הוסף תמונה" width={300} height={300} />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-brown font-bold text-base mb-2">{cat.name}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed flex-1">{cat.description}</p>
                  <p className="text-xs text-brown/55 mt-2">
                    כמות מינימום: {cat.minQuantity.toLocaleString("he-IL")} יחידות
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <AddToCartButton
                      item={{
                        id: cat.id,
                        name: cat.name,
                        price: cat.price,
                        priceNumeric: cat.priceNumeric,
                        category: "cup",
                        image: cat.image,
                        note: `כמות מינימום: ${cat.minQuantity.toLocaleString("he-IL")} יחידות`,
                      }}
                    />
                    <a href="#contact" className="btn btn-soft-secondary btn-block btn-sm">
                      לפרטים והצעת מחיר
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Aspagil / Factory section */}
      <section className="py-16 bg-white" aria-labelledby="cups-about-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cups-about-heading" className="text-3xl font-bold text-brown text-center mb-10">
            הדפסה על כוסות — שיווק חכם בכל לגימה
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-brown mb-3">למה כוסות ממותגות?</h3>
              <p className="text-brown/70 leading-relaxed">
                כוסות נייר הן מצרך פרקטי המצוי כמעט בכל בית, ארגון, חברה או אירוע. למה לא לנצל את קיומן ההכרחי והשימושי ולהפיק מהן ערך מוסף — שיווק, פרסום וקידום מכירות?
              </p>
              <p className="text-brown/70 leading-relaxed mt-4">
                כאשר נכנסים למשרד ומכינים שתייה חמה, ונתקלים בכוס נייר מושקעת שהודפסה בהתאמה אישית — הכוס הופכת באופן אוטומטי לבעלת ערך. היא אינה עוד כוס סתמית, אלא מוצר ייחודי שהחברה נטמעת בתודעה תוך השארת רושם חיובי.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brown mb-3">המפעל שלנו</h3>
              <p className="text-brown/70 leading-relaxed">
                &quot;קפה גינץ&quot; מצוידת במיטב המכשור והציוד המקצועי, מה שמאפשר לה לספק מוצר איכותי ומעוצב ברמה גבוהה. אנו מציעים הדפסה על כוסות בהתאם לצרכים ולדרישות של כל לקוח — החל מהזמנות קטנות ועד להזמנות בנפחים גדולים.
              </p>
              <p className="text-brown/70 leading-relaxed mt-4">
                הדפסה על כוסות נייר מבית &quot;קפה גינץ&quot; משלבת חומר משובח ומתכלה — חשוב בעידן שבו שמירה על הסביבה היא ערך — לבין הדפסה איכותית ומקצועית של לוגו, כיתוב או ציור.
              </p>
            </div>
          </div>

          {/* Value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "כוסות נייר עם לוגו",
                body: "הדפסת לוגו, כיתוב או ציור הופכת את המוצר הפשוט לאלמנט שיווקי המציג את החברה באור רציני ומכובד.",
              },
              {
                title: "לאירועים וכנסים",
                body: "כוסות ייחודיות לכנסים, ועידות, ישיבות וימי הולדת — בידול מכל כוס נייר אחרת ויצירת רושם מתמשך.",
              },
              {
                title: "ידידותי לסביבה",
                body: "חומר מתכלה ואיכותי — שיווק חכם שמכבד גם את הסביבה. חשוב בעידן המודרני.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-cream rounded-2xl p-6">
                <h4 className="font-bold text-brown mb-2">{title}</h4>
                <p className="text-brown/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-14 bg-brown" aria-labelledby="cups-process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cups-process-heading" className="text-2xl font-bold text-gold text-center mb-10">
            איך זה עובד?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center text-cream">
            {[
              { n: "1", t: "בחרו כמות", d: "מ-500 עד 100,000 יחידות" },
              { n: "2", t: "שלחו לוגו", d: "כל פורמט — נדאג לעיצוב" },
              { n: "3", t: "אשרו הדפסה", d: "נשלח הדמיה לאישורכם" },
              { n: "4", t: "קבלו אצלכם", d: "משלוח מהיר לכתובת שלכם" },
            ].map(({ n, t, d }) => (
              <div key={n}>
                <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 font-montserrat">
                  {n}
                </div>
                <h3 className="text-gold font-bold mb-1">{t}</h3>
                <p className="text-cream/60 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="cups-quote-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="cups-quote-heading" className="text-3xl font-bold text-brown mb-2">
              בקש הצעת מחיר לכוסות
            </h2>
            <p className="text-brown/65">מלא את הפרטים ונחזור אליך עם הצעה מפורטת</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CupsQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
