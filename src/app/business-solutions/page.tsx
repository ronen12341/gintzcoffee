import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Truck, Flame, ClipboardCheck, PhoneCall } from "lucide-react";
import BusinessSolutionCard from "@/components/BusinessSolutionCard";
import LeadForm from "@/components/LeadForm";
import { businessSolutions } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/business-solutions" },
  title: "פתרונות קפה לעסקים ולמשרד — מכונה, פולים ושירות",
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
    "פתרון קפה משרדי",
    "אספקת קפה לעסק",
    "מכונת קפה לחברה",
    "קפה בוטיק לעסקים",
    "מכונת קפה בתשלום חודשי",
    "עמדת קפה לעסק",
  ],
};

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
    a: "אספקת קפה לעסקים אצלנו פרושה על כל הארץ. המשרד ובית הקלייה שלנו נמצאים בבני ברק, ומשם יוצא מערך השירות והאספקה.",
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
        className="page-hero"
        aria-labelledby="business-heading"
      >
        <div className="relative max-w-4xl mx-auto px-4">
          <h1
            id="business-heading"
            className="text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight"
          >
            פתרונות קפה <span className="text-gold">לעסקים ולמשרד</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            פתרון קפה איכותי למשרד מקצה לקצה — מכונה מקצועית, פולים טריים מבית
            הקלייה שלנו, התקנה, הדרכה ותמיכה שוטפת. מותאם לגודל העסק ולתקציב.
          </p>
        </div>
      </section>

      {/* ── Client logos ── */}
      <section className="bg-cream-dark py-6" aria-labelledby="clients-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p id="clients-heading" className="mb-4 text-center text-xs font-semibold text-brown/40">
            בין הלקוחות שלנו
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-50 grayscale">
            <Image src="/lp/logos/electra.png" alt="Electra" width={90} height={30} className="h-5 w-auto object-contain" />
            <Image src="/lp/logos/amazon.svg" alt="Amazon" width={90} height={30} className="h-4 w-auto object-contain" />
            <Image src="/lp/logos/aws.svg" alt="AWS" width={80} height={30} className="h-5 w-auto object-contain" />
            <Image src="/lp/logos/meitar.png" alt="Meitar Law Offices" width={100} height={34} className="h-6 w-auto object-contain" />
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

      {/* Segments */}
      <section className="py-16 bg-cream" aria-labelledby="segments-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="segments-heading" className="text-3xl font-bold text-brown mb-8 text-center">
            פתרון קפה לפי סוג העסק שלכם
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { href: "/business-solutions/hightech", title: "קפה להייטק", desc: "מכונה בנפח גבוה ושירות שעומד בקצב" },
              { href: "/business-solutions/factories", title: "קפה למפעלים", desc: "מכונה עמידה לעבודה מרובת משמרות" },
              { href: "/business-solutions/clinics", title: "קפה למרפאות", desc: "מכונה קומפקטית ושקטה לחדר המתנה" },
              { href: "/business-solutions/small-office", title: "משרד קטן (עד 10)", desc: "מכונה קומפקטית עם מיכל מים פנימי" },
              { href: "/business-solutions/medium-office", title: "משרד בינוני (עד 20)", desc: "מכונה מקצועית עם הקצפת חלב וחיבור מים" },
              { href: "/business-solutions/large-office", title: "משרד גדול (מעל 20)", desc: "מכונה בעומס גבוה, אפשר יותר מעמדה אחת" },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 text-center"
              >
                <h3 className="font-bold text-brown text-lg mb-1">{title}</h3>
                <p className="text-brown/65 text-sm">{desc}</p>
              </Link>
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
