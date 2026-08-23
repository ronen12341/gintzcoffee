import Link from "next/link";
import Image from "next/image";
import { Coffee, Package, Award, Zap, HeartHandshake, Briefcase } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BusinessSolutionCard from "@/components/BusinessSolutionCard";
import { businessSolutions } from "@/data/products";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative isolate min-h-[620px] overflow-hidden bg-brown-dark text-white sm:min-h-[680px]"
        aria-label="פתרונות קפה לעסקים"
      >
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2000&q=85"
          alt="מכונת אספרסו וקפה טרי"
          fill
          priority
          className="-z-20 object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-brown-dark/95 via-brown-dark/78 to-brown-dark/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brown-dark/80 via-transparent to-black/25" />
        <div
          className="absolute -start-40 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:min-h-[680px] sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-black/20 px-4 py-2 text-sm font-semibold text-cream backdrop-blur-sm">
              <Award className="h-4 w-4 text-gold" aria-hidden="true" />
              בית קלייה בוטיק · ניסיון של עשרות שנים
            </div>

            <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:text-sm">
              Gintz Coffee · Coffee Solutions
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              קפה טרי לעסק שלכם{" "}
              <span className="mt-2 block text-gold">קלוי במיוחד בשבילכם</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              אנחנו לא מוכרים קפה מהמדף — אנחנו מתאימים את הטעם לעובדים שלכם,
              וקולים אותו בעצמנו בבית הקלייה. מכונה מקצועית, פולים טריים,
              התאמת תערובת, אספקה ושירות — הכול ממקור אחד.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 py-3 font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                קבלו הצעת מחיר
              </a>
              <a
                href="https://wa.me/97239600550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                דברו איתנו ב-WhatsApp
              </a>
            </div>

            <div className="grid max-w-2xl grid-cols-3 divide-x-reverse divide-x divide-white/20 border-t border-white/20 pt-6">
              <div className="px-2 first:pe-0 sm:px-5 sm:first:pe-0">
                <strong className="block text-xl text-gold sm:text-2xl">30+</strong>
                <span className="text-xs text-cream/70 sm:text-sm">שנות ניסיון</span>
              </div>
              <div className="px-2 sm:px-5">
                <strong className="block text-xl text-gold sm:text-2xl">ארצי</strong>
                <span className="text-xs text-cream/70 sm:text-sm">שירות ואספקה</span>
              </div>
              <div className="px-2 sm:px-5">
                <strong className="block text-xl text-gold sm:text-2xl">טרי</strong>
                <span className="text-xs text-cream/70 sm:text-sm">ישירות מהקלייה</span>
              </div>
            </div>
          </div>
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

      {/* ── Business Solutions — the headline pitch ── */}
      <section
        className="relative overflow-hidden bg-cream py-20 sm:py-24"
        id="business-solutions"
        aria-labelledby="home-solutions-heading"
      >
        <div className="absolute -end-32 top-12 h-80 w-80 rounded-full bg-gold/[0.08] blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-gold-dark">
              <Briefcase className="w-4 h-4" aria-hidden="true" />
                פתרון שמתאים לעסק שלכם
              </div>
              <h2
                id="home-solutions-heading"
                className="mb-4 text-3xl font-bold leading-tight text-brown sm:text-4xl md:text-5xl"
              >
                קפה מצוין, בכל גודל של <span className="text-gold-dark">עסק</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-brown/70">
                בחרו את גודל המשרד וקבלו מעטפת מלאה: מכונה מקצועית, פולים טריים,
                התקנה, הדרכה ושירות שוטף ממקור אחד.
              </p>
            </div>
            <Link
              href="/business-solutions"
              className="hidden flex-shrink-0 items-center gap-2 font-bold text-brown transition-colors hover:text-gold md:inline-flex"
            >
              לכל הפתרונות ←
            </Link>
          </div>

          {businessSolutions.length > 0 && (
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {businessSolutions.slice(0, 3).map((s) => (
                <BusinessSolutionCard key={s.id} solution={s} variant="home" />
              ))}
            </div>
          )}

          <div className="mt-8 text-center md:hidden">
            <Link href="/business-solutions" className="btn btn-secondary btn-lg">
              כל הפתרונות לעסקים ←
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-brown-dark py-16" aria-labelledby="how-it-works-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="how-it-works-heading"
            className="mb-10 text-center text-3xl font-bold text-cream sm:text-4xl"
          >
            איך זה עובד
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
            {[
              { step: "1", title: "טעימה", desc: "בודקים איזה קפה הצוות שלכם אוהב" },
              { step: "2", title: "התאמת תערובת", desc: "בוחרים רמת קלייה ובלנד מתאימים" },
              { step: "3", title: "קלייה טרייה", desc: "קולים אצלנו, לפי הזמנה" },
              { step: "4", title: "מכונה מתאימה", desc: "לפי גודל הצוות והצריכה" },
              { step: "5", title: "אספקה ושירות", desc: "מתמשכים, לא חד-פעמיים" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-bold text-gold">
                  {step}
                </span>
                <h3 className="mb-1 font-bold text-cream">{title}</h3>
                <p className="text-sm text-cream/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main categories ── */}
      <section className="bg-cream-dark py-14" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <h2
              id="services-heading"
              className="mb-3 text-3xl font-bold text-brown"
            >
              כל מה שצריך לקפה מצוין
            </h2>
            <p className="mx-auto max-w-xl text-base text-brown/60">
              שלושה תחומים, מעטפת אחת מקצועית לעסק שלכם.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <ServiceCard
              icon={<Coffee className="w-8 h-8" />}
              title="מכונות קפה"
              description="מכונות מקצועיות עם התקנה, הדרכה ושירות."
              href="/machines"
            />
            <ServiceCard
              icon={<Package className="w-8 h-8" />}
              title="פולי קפה טריים"
              description="קלייה מקומית ומבחר תערובות לכל סגנון וטעם."
              href="/beans"
            />
            <ServiceCard
              icon={<CupIcon />}
              title="כוסות ממותגות"
              description="הדפסה אישית ואספקה מהירה לעסקים ואירועים."
              href="https://www.gilcups.com"
            />
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-gold/15 bg-brown-dark py-8" aria-label="למה לבחור בקפה גינץ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <WhyCard
              icon={<Award className="w-8 h-8" />}
              title="30+ שנות ניסיון"
              description="ידע מקצועי שעובר בכל כוס"
            />
            <WhyCard
              icon={<Zap className="w-8 h-8" />}
              title="אספקה מהירה"
              description="שירות יעיל בכל רחבי הארץ"
            />
            <WhyCard
              icon={<Coffee className="w-8 h-8" />}
              title="קלייה טרייה"
              description="קפה שנקלה אצלנו באהבה"
            />
            <WhyCard
              icon={<HeartHandshake className="w-8 h-8" />}
              title="שירות אישי"
              description="ליווי אמיתי מהבחירה ועד המזיגה"
            />
          </div>
        </div>
      </section>

      {/* ── Contact / Lead form ── */}
      <section
        className="py-16 bg-cream-dark"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-brown mb-3"
            >
              קבל הצעת מחיר מותאמת
            </h2>
            <p className="text-brown/65">מלא את הטופס ונחזור אליך תוך שעות ספורות</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <LeadForm title="" />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-brown/5 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      <div className="text-gold mb-4 flex justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-brown font-bold text-xl mb-2">{title}</h3>
      <p className="text-brown/60 text-sm leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:underline">
        למידע נוסף ←
      </span>
    </Link>
  );
}

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center text-cream">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon}
      </div>
      <h3 className="mb-1 font-bold text-cream">{title}</h3>
      <p className="text-xs leading-relaxed text-cream/55 sm:text-sm">{description}</p>
    </div>
  );
}

function CupIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 2h12l-1.5 14a2 2 0 01-2 1.8H9.5a2 2 0 01-2-1.8L6 2z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16" />
    </svg>
  );
}
