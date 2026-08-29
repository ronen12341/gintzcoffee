import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import {
  Coffee,
  Wrench,
  HeartHandshake,
  Truck,
  PhoneCall,
  ClipboardCheck,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions/rental" },
  title: "השכרת מכונת קפה לעסק",
  description:
    "השכרת מכונת קפה לעסק - מכונה עלינו, משלמים על הקפה. דמי שירות חודשיים קבועים כוללים מכונה, התקנה, הדרכה, שירות ופולים טריים מבית הקלייה שלנו. בלי השקעה ראשונית.",
  keywords: [
    "השכרת מכונת קפה לעסק",
    "השכרת מכונת קפה למשרד",
    "מכונת קפה כשירות",
    "מכונת קפה למשרד מחיר",
    "מכונת קפה למשרד בחינם",
    "פתרון קפה חודשי לעסק",
    "אספקת קפה לעסקים",
  ],
  openGraph: {
    title: "השכרת מכונת קפה לעסק | קפה גינץ",
    description:
      "מכונה עלינו, משלמים על הקפה. השכרת מכונת קפה לעסק בדמי שירות חודשיים קבועים - בלי השקעה ראשונית.",
    url: "https://www.gintz.co.il/business-solutions/rental",
  },
};

const INCLUDED = [
  {
    icon: Coffee,
    title: "המכונה עצמה",
    body: "מכונה מקצועית מותאמת לגודל העסק - בלי לשלם עליה מראש ובלי לרכוש ציוד.",
  },
  {
    icon: Wrench,
    title: "התקנה והדרכה",
    body: "מגיעים אליכם, מתקינים ומכיילים את המכונה, ומדריכים את הצוות עד שהכוס הראשונה יוצאת מושלמת.",
  },
  {
    icon: HeartHandshake,
    title: "שירות ותחזוקה שוטפים",
    body: "תקלה? מתקשרים ואנחנו מטפלים. אין חשבון נפרד על ביקור טכנאי או חלקי חילוף.",
  },
  {
    icon: Truck,
    title: "פולים טריים לפי צריכה",
    body: "אספקה שוטפת של פולים שנקלו אצלנו, בבית הקלייה - מגיעים לפי הקצב שלכם, לא לפי מלאי שנגמר.",
  },
];

const RENT_VS_BUY = [
  ["השקעה ראשונית", "אין - המכונה עלינו", "אלפי שקלים לציוד מקצועי"],
  ["תחזוקה ותיקונים", "כלולים בדמי החודשיים", "על חשבונכם, מול טכנאי חיצוני"],
  ["שדרוג או החלפת מכונה", "גמיש, לפי צורך משתנה", "רכישה חדשה מאפס"],
  ["סיכון תקלה", "עלינו - מחליפים תוך 24 שעות", "עליכם, עד שמתפנה טכנאי"],
  ["גמישות בסיום התקשרות", "לא נשארים עם ציוד מיותר", "המכונה נשארת, גם אם לא מתאימה"],
];

const DIFF_ROWS = [
  ["מקור הפולים", "נקלים אצלנו, בבית הקלייה שלנו", "פולים מיובאים ארוזים מחו״ל"],
  ["טריות בכוס", "ימים ספורים מהקלייה", "שבועות עד חודשים באריזה"],
  ["התאמת תערובת", "מתאימים לטעם של הצוות שלכם", "קטלוג קבוע, בחירה מתוך רשימה"],
  ["מי עונה לכם", "אדם שמכיר את העסק שלכם", "מוקד שירות טלפוני"],
  ["מודל התשלום", "דמי שירות חודשיים קבועים", "רכישת ציוד ומלאי בנפרד"],
];

const STEPS = [
  {
    icon: PhoneCall,
    n: "01",
    title: "שיחת אפיון",
    body: "כמה עובדים, איזה משקאות אוהבים אצלכם, ואיפה המכונה תעמוד. 10 דקות שקובעות את כל השאר.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    title: "הצעה מותאמת",
    body: "חוזרים אליכם עם דגם מכונה מדויק ודמי שירות חודשיים קבועים. מספר אחד, בלי כוכביות.",
  },
  {
    icon: Truck,
    n: "03",
    title: "התקנה והדרכה",
    body: "מגיעים, מתקינים, מכיילים את הטחינה ומדריכים את הצוות - בלי עלות נוספת.",
  },
  {
    icon: Flame,
    n: "04",
    title: "אספקה ושירות שוטף",
    body: "פולים טריים מגיעים לפי הצריכה שלכם, ותקלה מטופלת בלי שתצטרכו לחשוב על זה.",
  },
];

const FAQ = [
  {
    q: "כמה עולה השכרת מכונת קפה לעסק?",
    a: "המחיר נקבע לפי גודל המכונה וכמות הפולים שהעסק צורך. המודל שלנו הוא דמי שירות ואחזקה חודשיים קבועים - בלי השקעה ראשונית בציוד. אחרי שיחת אפיון קצרה נחזור אליכם עם מספר אחד ומדויק.",
  },
  {
    q: "מה בדיוק כלול בדמי החודשיים?",
    a: "המכונה עצמה, ההתקנה, ההדרכה לצוות, השירות והתחזוקה השוטפים. הפולים הטריים מסופקים בנפרד לפי צריכה בפועל.",
  },
  {
    q: "עדיף לשכור או לקנות מכונת קפה למשרד?",
    a: "רוב העסקים מעדיפים השכרה - היא חוסכת את ההשקעה הראשונית ומעבירה אלינו את הסיכון לתקלות ותחזוקה. רכישה משתלמת בעיקר לעסקים גדולים עם צוות תחזוקה פנימי. בשיחת האפיון נמליץ מה מתאים לכם.",
  },
  {
    q: "יש התחייבות לתקופה מסוימת?",
    a: "כן, ההתקשרות היא לתקופה קבועה שסוכמת מראש בהצעת המחיר - כדי שגם אנחנו וגם אתם תדעו למה לצפות. אין חוזים נסתרים או תנאים שמתגלים אחרי החתימה.",
  },
  {
    q: "מה קורה אם המכונה המושכרת מתקלקלת?",
    a: "אתם מרימים טלפון ואנחנו מטפלים. השירות כלול בדמי החודשיים, ובמקרה של תקלה שדורשת טיפול ממושך אנחנו מחליפים מכונה תוך 24 שעות כדי שהמשרד לא יישאר בלי קפה.",
  },
  {
    q: "מה ההבדל בין השכרה אצלכם לבין יבואן קפה רגיל?",
    a: "אנחנו בית קלייה - הפולים נקלים אצלנו, לא נקנים מיבואן חיצוני. זה אומר קפה שמגיע אליכם ימים ספורים אחרי הקלייה במקום שבועות באריזה, אפשרות להתאים תערובת לטעם המשרד, ואדם שמכיר אתכם במקום מוקד שירות.",
  },
  {
    q: "צריך חיבור מים למכונה המושכרת?",
    a: "תלוי בדגם. למשרדים קטנים יש מכונות עם מיכל מים פנימי שלא דורש תשתית. למשרדים גדולים יותר חיבור מים קבוע עדיף. בשיחת האפיון נבדוק מה קיים אצלכם ונתאים את הדגם.",
  },
  {
    q: "באילו אזורים אתם נותנים שירות השכרה?",
    a: "בכל הארץ. המשרד ובית הקלייה שלנו נמצאים בבני ברק, ומשם יוצא מערך ההתקנה, האספקה והשירות.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "השכרת מכונות קפה לעסקים",
  name: "השכרת מכונת קפה לעסק",
  description:
    "שירות השכרת מכונות קפה לעסקים ומשרדים בדמי שירות חודשיים קבועים, הכולל מכונה, התקנה, הדרכה, שירות ותחזוקה, ואספקת פולים טריים מבית קלייה.",
  provider: {
    "@type": "Organization",
    name: "קפה גינץ",
    url: "https://www.gintz.co.il",
  },
  areaServed: {
    "@type": "Country",
    name: "IL",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "ILS",
    description: "דמי שירות חודשיים קבועים הכוללים מכונה, התקנה, הדרכה, שירות ופולים טריים",
  },
};

export default function RentalCoffeePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 60%, #6B3A18 100%)" }}
        aria-labelledby="rental-heading"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #C8922A 0%, transparent 35%), radial-gradient(circle at 70% 70%, #C8922A 0%, transparent 30%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="text-gold/90 text-sm font-montserrat tracking-widest uppercase mb-4">
            פתרונות קפה לעסקים
          </p>
          <h1
            id="rental-heading"
            className="text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight"
          >
            השכרת מכונת קפה <span className="text-gold">לעסק</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            המכונה עלינו, אתם משלמים על הקפה. דמי שירות חודשיים קבועים כוללים
            מכונה, התקנה, הדרכה, שירות ופולים טריים - בלי שקל השקעה ראשונית.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-bold text-brown-dark transition hover:bg-gold/90 w-full sm:w-auto"
            >
              קבלו הצעת מחיר
            </a>
            <a
              href="https://wa.me/97239600550?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%9B%D7%A8%D7%AA%20%D7%9E%D7%9B%D7%95%D7%A0%D7%AA%20%D7%A7%D7%A4%D7%94%20%D7%9C%D7%A2%D7%A1%D7%A7"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-xl border border-cream/40 px-8 py-3.5 font-bold text-cream transition hover:bg-cream/10 w-full sm:w-auto"
            >
              דברו איתנו בוואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-cream" aria-labelledby="included-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="included-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              מה כלול בדמי השירות החודשיים
            </h2>
            <p className="text-brown/65 max-w-2xl mx-auto">
              מספר אחד קבוע בחודש, בלי הפתעות ובלי חשבוניות נפרדות.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-cream text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-brown font-bold mb-2">{title}</h3>
                <p className="text-brown/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent vs buy */}
      <section className="py-16 bg-cream-dark border-y border-cream" aria-labelledby="rentbuy-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="rentbuy-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              לשכור או לקנות מכונת קפה למשרד?
            </h2>
            <p className="text-brown/65 max-w-2xl mx-auto">
              ההבדל האמיתי לא בכוס הראשונה - הוא בשנה השנייה, כשמשהו מתקלקל.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cream bg-white">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="text-right p-4 text-brown font-bold"> </th>
                  <th className="text-right p-4 text-gold font-bold">השכרה אצלנו</th>
                  <th className="text-right p-4 text-brown/60 font-bold">רכישה עצמאית</th>
                </tr>
              </thead>
              <tbody className="text-brown/75">
                {RENT_VS_BUY.map(([label, us, them]) => (
                  <tr key={label} className="border-t border-cream">
                    <td className="p-4 font-semibold text-brown">{label}</td>
                    <td className="p-4">{us}</td>
                    <td className="p-4 text-brown/55">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Roastery vs importer differentiator */}
      <section className="py-16 bg-cream" aria-labelledby="diff-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="diff-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              בית קלייה מול יבואן - ההבדל בפועל
            </h2>
            <p className="text-brown/65 max-w-2xl mx-auto">
              מכונה מושכרת היא רק חצי מהסיפור. השאלה השנייה היא מאיפה מגיע הקפה.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cream bg-white">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="text-right p-4 text-brown font-bold"> </th>
                  <th className="text-right p-4 text-gold font-bold">קפה גינץ - בית קלייה</th>
                  <th className="text-right p-4 text-brown/60 font-bold">יבואן טיפוסי</th>
                </tr>
              </thead>
              <tbody className="text-brown/75">
                {DIFF_ROWS.map(([label, us, them]) => (
                  <tr key={label} className="border-t border-cream">
                    <td className="p-4 font-semibold text-brown">{label}</td>
                    <td className="p-4">{us}</td>
                    <td className="p-4 text-brown/55">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-cream-dark border-y border-cream" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              איך זה עובד
            </h2>
            <p className="text-brown/65 max-w-2xl mx-auto">
              מהשיחה הראשונה ועד הכוס הראשונה - בדרך כלל תוך שבוע.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ icon: Icon, n, title, body }) => (
              <div key={n} className="bg-white rounded-2xl p-6 border border-cream relative">
                <span className="absolute top-5 left-5 text-4xl font-bold text-gold/15 font-montserrat">
                  {n}
                </span>
                <div className="w-11 h-11 mb-4 bg-gold/15 text-gold rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-brown font-bold mb-2">{title}</h3>
                <p className="text-brown/65 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              שאלות נפוצות על השכרת מכונת קפה
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-xl border border-cream overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 font-bold text-brown flex items-center justify-between gap-4 hover:bg-cream-dark/40 transition-colors">
                  <span>{q}</span>
                  <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-brown/70 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-cream-dark" aria-labelledby="rental-links-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p id="rental-links-heading" className="text-brown/70">
            רוצים לראות את דגמי המכונות?{" "}
            <Link href="/machines" className="text-gold-dark font-bold underline">
              כל דגמי המכונות
            </Link>
            {" "}· סקרנים לגבי הקפה עצמו?{" "}
            <Link href="/roastery" className="text-gold-dark font-bold underline">
              בית הקלייה שלנו
            </Link>
            {" "}· או חזרו ל
            <Link href="/business-solutions" className="text-gold-dark font-bold underline">
              כל פתרונות הקפה לעסקים
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 bg-cream" id="contact" aria-labelledby="rental-contact-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="rental-contact-heading" className="text-3xl font-bold text-brown mb-2">
              קבלו הצעת מחיר להשכרת מכונת קפה לעסק
            </h2>
            <p className="text-brown/65">
              מלאו פרטים ונחזור אליכם תוך יום עסקים עם הצעה מקצועית.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}
