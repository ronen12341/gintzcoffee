import type { Metadata } from "next";
import Link from "next/link";
import {
  Coffee,
  Wrench,
  HeartHandshake,
  Truck,
  Building2,
  Users,
  Factory,
  Flame,
  ClipboardCheck,
  PhoneCall,
} from "lucide-react";
import BusinessSolutionCard from "@/components/BusinessSolutionCard";
import LeadForm from "@/components/LeadForm";
import { businessSolutions } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions" },
  title: "פתרונות קפה לעסקים",
  description:
    "פתרונות קפה מקצה לקצה לעסקים — מכונת קפה מקצועית, פולים טריים מבית הקלייה שלנו, התקנה, הדרכה, שירות ותחזוקה. מותאם לפי מספר עובדים, מ-10 ועד 200+.",
  openGraph: {
    url: "https://www.gintz.co.il/business-solutions",
    title: "פתרונות קפה לעסקים | קפה גינץ",
    description:
      "פתרון קפה מלא מקצה לקצה — מכונה מקצועית, פולים טריים מבית הקלייה, התקנה, הדרכה ותמיכה שוטפת.",
  },
  keywords: [
    "פתרונות קפה לעסקים",
    "מכונת קפה למשרד",
    "פתרון קפה משרדי",
    "אספקת קפה לעסק",
    "מכונת קפה לחברה",
    "קפה בוטיק לעסקים",
    "מכונת קפה בתשלום חודשי",
    "עמדת קפה לעסק",
  ],
};

const PERKS = [
  {
    icon: Coffee,
    title: "פולים טריים מהקלייה שלנו",
    body: "אספקה שוטפת של פולים שנקלו במיוחד לעסק שלכם.",
  },
  {
    icon: Wrench,
    title: "התקנה והדרכה כלולות",
    body: "מגיעים אליכם, מתקינים, ומדריכים את הצוות לפני שעוזבים.",
  },
  {
    icon: HeartHandshake,
    title: "שירות אישי שוטף",
    body: "מנהל לקוח ייעודי שזמין בכל עת — שיחה אחת והכל מטופל.",
  },
  {
    icon: Truck,
    title: "אספקה והחלפה מהירה",
    body: "תקלה? מחליפים מכונה תוך 24 שעות. מלאי חירום זמין תמיד.",
  },
];

const SIZES = [
  {
    icon: Building2,
    range: "10–30 עובדים",
    cups: "כ-20–50 כוסות ביום",
    machine: "מכונה אוטומטית קומפקטית",
    body: "משרד קטן או סטארט-אפ. מכונה אוטומטית על בסיס פולים, טוחנת בכל כוס, עם מיכל מים פנימי — בלי צורך בתשתית מים. תופסת מקום של מיקרוגל.",
    consumption: "כ-5–10 ק\"ג פולים בחודש",
  },
  {
    icon: Users,
    range: "30–80 עובדים",
    cups: "כ-50–130 כוסות ביום",
    machine: "מכונה אוטומטית מקצועית",
    body: "החלק הגדול של הלקוחות שלנו. מכונה עם מערכת הקצפת חלב, מגוון משקאות בלחיצת כפתור, וחיבור קבוע למים. עומדת בעומס של שעות השיא בבוקר.",
    consumption: "כ-10–15 ק\"ג פולים בחודש",
  },
  {
    icon: Factory,
    range: "80+ עובדים",
    cups: "100+ כוסות ביום",
    machine: "מכונה מקצועית בעומס גבוה",
    body: "חברות, מפעלים, חדרי אוכל ומוסדות. מכונה שבנויה לעבודה רציפה, לעיתים יותר מעמדה אחת. כולל תכנון פריסה של עמדות הקפה בבניין.",
    consumption: "15+ ק\"ג פולים בחודש",
  },
];

const STEPS = [
  {
    icon: PhoneCall,
    n: "01",
    title: "שיחת אפיון",
    body: "כמה עובדים, איזה משקאות אוהבים אצלכם, איפה המכונה תעמוד, ויש חיבור מים? 10 דקות שקובעות את כל השאר.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    title: "הצעה מותאמת",
    body: "אנחנו חוזרים עם דגם מכונה מדויק, תערובת מומלצת ודמי שירות חודשיים. מחיר אחד, בלי כוכביות.",
  },
  {
    icon: Truck,
    n: "03",
    title: "התקנה והדרכה",
    body: "מגיעים, מתקינים, מכיילים את הטחינה לתערובת שלכם, ומדריכים את הצוות. עד שהכוס הראשונה יוצאת מושלמת.",
  },
  {
    icon: Flame,
    n: "04",
    title: "אספקה ושירות שוטף",
    body: "פולים טריים מגיעים לפי קצב הצריכה שלכם. תקלה? מטפלים. זה כבר לא הכאב ראש שלכם.",
  },
];

const FAQ = [
  {
    q: "כמה עולה פתרון קפה למשרד?",
    a: "המחיר נקבע לפי גודל המכונה וכמות הפולים שהעסק צורך. המודל שלנו הוא דמי שירות ואחזקה חודשיים קבועים שכוללים את המכונה, ההתקנה, ההדרכה, השירות והתחזוקה — בלי השקעה ראשונית בציוד. הפולים מסופקים בנפרד לפי צריכה בפועל. אחרי שיחת אפיון קצרה נחזור אליכם עם מספר אחד ומדויק.",
  },
  {
    q: "צריך לקנות את המכונה?",
    a: "לא. אנחנו מציבים את המכונה אצלכם ואתם משלמים דמי שירות ואחזקה חודשיים. אין השקעה ראשונית של אלפי שקלים בציוד. בתום שנת ההתקשרות המכונה עוברת לבעלותכם.",
  },
  {
    q: "מה קורה אם המכונה מתקלקלת?",
    a: "אתם מרימים טלפון ואנחנו מטפלים. השירות והתחזוקה כלולים בדמי החודשיים — אין חשבון נפרד על ביקור טכנאי. במקרה של תקלה שדורשת טיפול ממושך, אנחנו מחליפים מכונה תוך 24 שעות כדי שהמשרד לא יישאר בלי קפה.",
  },
  {
    q: "מה ההבדל בינכם לבין ספק קפה גדול?",
    a: "אנחנו בית קלייה — הפולים נקלים אצלנו, לא נקנים ממישהו אחר. זה אומר שאנחנו שולטים באיכות מקצה לקצה, שהקפה מגיע אליכם ימים ספורים אחרי הקלייה במקום שבועות, ושאפשר להתאים תערובת לטעם של המשרד שלכם. בנוסף, אתם מדברים עם אדם שמכיר אתכם, לא עם מוקד.",
  },
  {
    q: "כמה זמן לוקח להתקין?",
    a: "מרגע סגירת ההצעה, התקנה סטנדרטית מתבצעת בדרך כלל תוך מספר ימי עסקים. ההתקנה עצמה אורכת כשעה, כולל כיול המכונה והדרכת הצוות.",
  },
  {
    q: "צריך חיבור למים?",
    a: "תלוי בדגם. למשרדים קטנים יש מכונות עם מיכל מים פנימי שלא דורשות תשתית. למשרדים גדולים יותר, שבהם המכונה עובדת בעומס, חיבור מים קבוע עדיף — זה חוסך מילוי ידני. בשיחת האפיון נבדוק מה קיים אצלכם ונתאים.",
  },
  {
    q: "אפשר לטעום לפני שמחליטים?",
    a: "בהחלט, ואנחנו ממליצים על זה. הטעם הוא הסיבה המרכזית שלקוחות בוחרים בנו, וקשה להעביר אותו בהצעת מחיר. נשמח לתאם טעימה.",
  },
  {
    q: "אתם מספקים גם לבתי מלון ומסעדות?",
    a: "הפוקוס שלנו הוא משרדים, חברות ומוסדות — שם המודל שלנו נותן את הערך הגדול ביותר. לפניות מעולם המסעדנות והאירוח, דברו איתנו ונראה אם יש התאמה.",
  },
  {
    q: "באיזה אזורים אתם נותנים שירות?",
    a: "אנחנו נותנים שירות בכל הארץ. המשרד ובית הקלייה שלנו נמצאים בבני ברק, ומשם יוצא מערך השירות והאספקה.",
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

export default function BusinessSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3B1F0A 0%, #5C3015 60%, #6B3A18 100%)" }}
        aria-labelledby="business-heading"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #C8922A 0%, transparent 35%), radial-gradient(circle at 70% 70%, #C8922A 0%, transparent 30%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-gold/90 text-sm font-montserrat tracking-widest uppercase mb-4">
            Coffee Solutions · For Business
          </p>
          <h1
            id="business-heading"
            className="text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight"
          >
            פתרונות קפה <span className="text-gold">לעסקים</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            פתרון קפה מלא מקצה לקצה — מכונה מקצועית, פולים טריים מבית הקלייה
            שלנו, התקנה, הדרכה ותמיכה שוטפת. מותאם לגודל העסק ולתקציב.
          </p>
        </div>
      </section>

      {/* Intro — topical depth */}
      <section className="py-14 bg-cream" aria-labelledby="intro-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="intro-heading" className="text-2xl md:text-3xl font-bold text-brown mb-5">
            קפה במשרד הוא לא מוצר. זו מערכת.
          </h2>
          <div className="space-y-4 text-brown/75 leading-relaxed">
            <p>
              רוב העסקים חושבים שהם צריכים לקנות מכונת קפה. בפועל הם צריכים משהו
              אחר: שהקפה יהיה שם כל בוקר, שהוא יהיה טעים, שמישהו יטפל במכונה
              כשהיא נתקעת, ושהפולים לא ייגמרו באמצע השבוע. מכונה היא רק רכיב אחד
              מתוך ארבעה.
            </p>
            <p>
              לכן אנחנו לא מוכרים מכונות. אנחנו מציבים אצלכם פתרון שלם: מכונה
              מקצועית מותאמת לגודל העסק, אספקה שוטפת של פולים שנקלו{" "}
              <Link href="/roastery" className="text-gold underline hover:no-underline">
                בבית הקלייה שלנו
              </Link>
              , התקנה והדרכה, ושירות ותחזוקה שוטפים — בדמי שירות חודשיים קבועים,
              בלי השקעה ראשונית בציוד.
            </p>
            <p>
              המשמעות המעשית: מנהל המשרד מקבל מספר אחד בחודש ושיחת טלפון אחת
              כשמשהו צריך טיפול. זהו. אין רכש, אין חוזי שירות נפרדים, אין
              התלבטות איזה קפה לקנות.
            </p>
          </div>
        </div>
      </section>

      {/* Size segmentation */}
      <section className="py-16 bg-cream-dark border-y border-cream" aria-labelledby="sizes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="sizes-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              מה מתאים לעסק שלכם, לפי מספר עובדים
            </h2>
            <p className="text-brown/65 max-w-2xl mx-auto">
              הפרמטר שקובע הכל הוא כמה כוסות ביום. משרד של 20 איש ומשרד של 100
              צריכים מכונות שונות לגמרי — וזו הטעות הכי נפוצה שאנחנו רואים.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SIZES.map(({ icon: Icon, range, cups, machine, body, consumption }) => (
              <div
                key={range}
                className="bg-white rounded-2xl p-7 shadow-sm border border-cream flex flex-col"
              >
                <div className="w-12 h-12 mb-4 bg-gold/15 text-gold rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-1">{range}</h3>
                <p className="text-gold text-sm font-semibold mb-3">{cups}</p>
                <p className="text-brown/70 text-sm leading-relaxed mb-4 flex-1">{body}</p>
                <div className="pt-4 border-t border-cream space-y-1.5 text-sm">
                  <p className="text-brown/60">
                    <span className="font-semibold text-brown">מכונה: </span>
                    {machine}
                  </p>
                  <p className="text-brown/60">
                    <span className="font-semibold text-brown">צריכה: </span>
                    {consumption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section
        className="py-16 bg-cream"
        id="solutions"
        aria-labelledby="solutions-grid-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="solutions-grid-heading"
              className="text-3xl md:text-4xl font-bold text-brown mb-3"
            >
              בחרו את הפתרון לפי גודל העסק
            </h2>
          </div>

          {businessSolutions.length === 0 ? (
            <p className="text-center text-brown/55 py-12">
              אין כרגע פתרונות זמינים. השאירו פרטים ונחזור אליכם.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {businessSolutions.map((s) => (
                <BusinessSolutionCard key={s.id} solution={s} />
              ))}
            </div>
          )}
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
              מהשיחה הראשונה ועד הכוס הראשונה — בדרך כלל תוך שבוע.
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

      {/* Differentiator — roastery vs big supplier */}
      <section className="py-16 bg-cream" aria-labelledby="diff-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="diff-heading" className="text-3xl md:text-4xl font-bold text-brown mb-3">
              בית קלייה מול ספק גדול — ההבדל בפועל
            </h2>
            <p className="text-brown/65 max-w-2xl mx-auto">
              שתי האפשרויות נראות דומה בהצעת מחיר. הן לא דומות בכוס.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cream bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="text-right p-4 text-brown font-bold"> </th>
                  <th className="text-right p-4 text-gold font-bold">קפה גינץ</th>
                  <th className="text-right p-4 text-brown/60 font-bold">ספק גדול טיפוסי</th>
                </tr>
              </thead>
              <tbody className="text-brown/75">
                {[
                  ["מקור הפולים", "נקלים אצלנו, בבית הקלייה שלנו", "נקנים מקולה חיצוני או מיובאים ארוזים"],
                  ["טריות", "ימים ספורים מהקלייה", "שבועות עד חודשים"],
                  ["התאמת תערובת", "מתאימים לטעם של המשרד שלכם", "קטלוג קבוע, בחירה מתוך רשימה"],
                  ["מי עונה לכם", "אדם שמכיר את העסק שלכם", "מוקד שירות"],
                  ["גמישות", "משנים תערובת או מכונה לפי צורך", "תהליך דרך מחלקות"],
                ].map(([label, us, them]) => (
                  <tr key={label} className="border-t border-cream">
                    <td className="p-4 font-semibold text-brown">{label}</td>
                    <td className="p-4">{us}</td>
                    <td className="p-4 text-brown/55">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-brown/65 text-sm leading-relaxed mt-6 text-center max-w-2xl mx-auto">
            זו הסיבה שלקוחות עוברים אלינו מספקים גדולים — ונשארים. אם אתם כבר
            עובדים עם ספק, שווה לטעום ולהשוות לפני שמחדשים חוזה.
          </p>
        </div>
      </section>

      {/* Perks strip */}
      <section className="py-12 bg-cream-dark border-y border-cream" aria-label="יתרונות">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gold/15 text-gold rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-brown font-bold mb-1">{title}</h3>
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
              שאלות שנשאלות לפני שסוגרים
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

      {/* Lead form */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="business-contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="business-contact-heading" className="text-3xl font-bold text-brown mb-2">
              קבלו הצעת מחיר מותאמת לעסק שלכם
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
