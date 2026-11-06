import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "אודות קפה גינץ | בית קלייה ופתרונות קפה לעסקים מאז 2005",
  description:
    "קפה גינץ — בית קלייה בוטיק בבני ברק מאז 2005. קולים פולי קפה באצוות קטנות במכונת Probat ומספקים פתרונות קפה למשרדים ולארגונים: מכונת קפה בהשאלה, פולים טריים, התקנה ותחזוקה.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://www.gintz.co.il/about",
    title: "אודות קפה גינץ | בית קלייה מאז 2005",
    description: "בית קלייה בוטיק בבני ברק מאז 2005 — פולי קפה טריים ופתרונות קפה לעסקים.",
  },
};

const site = "https://www.gintz.co.il";
const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${site}/about`,
  inLanguage: "he-IL",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${site}/#localbusiness`,
    name: "קפה גינץ",
    alternateName: "Gintz Coffee",
    url: site,
    telephone: "+97239600550",
    email: "sales@aspagil.com",
    foundingDate: "2005",
    address: {
      "@type": "PostalAddress",
      streetAddress: "הירקון 39, קומה 3",
      addressLocality: "בני ברק",
      addressCountry: "IL",
    },
  },
};

const facts = [
  { title: "מאז 2005", text: "בית קלייה בוטיק" },
  { title: "קולים בעצמנו", text: "במכונת קלייה Probat" },
  { title: "מעסק קטן ועד אלפי עובדים", text: "פתרונות קפה לכל גודל ארגון" },
  { title: "הירקון 39, בני ברק", text: "משלוח ואספקה בכל הארץ" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />

      <section className="page-hero" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto px-4">
          <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-cream mb-4">
            אודות קפה גינץ
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            בית קלייה בוטיק בבני ברק מאז 2005. אנחנו קולים את הקפה בעצמנו, ומביאים אותו טרי למשרדים,
            לעסקים ולבתים בכל הארץ.
          </p>
        </div>
      </section>

      <section className="py-6 bg-cream border-b border-brown/10" aria-labelledby="about-facts-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="about-facts-heading" className="sr-only">עובדות על קפה גינץ</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-brown">
            {facts.map((f) => (
              <li key={f.title}>
                <p className="font-bold">{f.title}</p>
                <p className="text-sm text-brown/65">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="who-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-brown/75 text-base leading-relaxed">
          <h2 id="who-heading" className="text-3xl font-bold text-brown mb-2 text-center">מי אנחנו</h2>
          <p>
            קפה גינץ הוא בית קלייה, לא מפיץ. מאז 2005 אנחנו בוחרים פולי קפה ירוקים ממקורות מובילים בעולם,
            קולים אותם באצוות קטנות במכונת קלייה Probat בבני ברק, ושולחים אותם טריים — כך שהקפה מגיע אליכם
            זמן קצר אחרי הקלייה.
          </p>
          <p>
            לצד בית הקלייה, אנחנו מספקים{" "}
            <Link href="/business-solutions" className="text-gold-dark hover:underline">פתרונות קפה לעסקים</Link>:
            מכונת קפה מקצועית למשרד בהשאלה, פולים טריים מבית הקלייה, התקנה, הדרכה ותחזוקה שוטפת. אנחנו
            עובדים עם עסקים קטנים ועד ארגונים של אלפי עובדים, ומתאימים את הקפה לטעם של העובדים.
          </p>
          <h2 className="text-2xl font-bold text-brown pt-4">מה אנחנו עושים</h2>
          <ul className="list-disc ps-6 space-y-2">
            <li><Link href="/business-solutions" className="text-gold-dark hover:underline">מכונת קפה למשרד</Link> — בהשאלה, משלמים רק על הקפה</li>
            <li><Link href="/beans" className="text-gold-dark hover:underline">פולי קפה טריים</Link> — קלויים אצלנו, במשלוח עד הבית ולעסקים</li>
            <li><Link href="/machines" className="text-gold-dark hover:underline">מכונות קפה חדשות</Link> — JURA, Lelit ועוד</li>
            <li><Link href="/bargains" className="text-gold-dark hover:underline">מכונות קפה משומשות</Link> — אחרי בדיקה טכנית מלאה</li>
            <li><Link href="/business-solutions/rental" className="text-gold-dark hover:underline">השכרת מכונת קפה</Link> — לאירועים ולתקופות קצרות</li>
          </ul>
        </div>
      </section>

      <section className="bg-cream-dark py-10" aria-labelledby="about-clients-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="about-clients-heading" className="mb-5 text-center text-lg font-bold text-brown">בין הלקוחות שלנו</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60 grayscale">
            <Image src="/lp/logos/electra.png" alt="Electra" width={90} height={30} className="h-5 w-auto object-contain" />
            <Image src="/lp/logos/amazon.svg" alt="Amazon" width={90} height={30} className="h-4 w-auto object-contain" />
            <Image src="/lp/logos/aws.svg" alt="AWS" width={80} height={30} className="h-5 w-auto object-contain" />
            <Image src="/lp/logos/meitar.png" alt="Meitar Law Offices" width={100} height={34} className="h-6 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="py-14 bg-cream" aria-labelledby="about-contact-heading">
        <div className="max-w-3xl mx-auto px-4 text-center text-brown">
          <h2 id="about-contact-heading" className="text-2xl font-bold mb-3">יצירת קשר</h2>
          <p className="text-brown/75 leading-relaxed">
            הירקון 39, קומה 3, בני ברק · טלפון ו-WhatsApp:{" "}
            <a href="tel:039600550" className="text-gold-dark hover:underline">03-9600550</a> ·{" "}
            <a href="mailto:sales@aspagil.com" className="text-gold-dark hover:underline">sales@aspagil.com</a>
          </p>
          <Link href="/contact" className="inline-block mt-6 rounded-full bg-gold px-6 py-3 font-bold text-white hover:bg-gold-dark">
            לקבלת הצעת מחיר
          </Link>
        </div>
      </section>
    </>
  );
}
