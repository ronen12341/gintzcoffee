import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import BusinessSolutionCard from "@/components/BusinessSolutionCard";
import ProductCard from "@/components/ProductCard";
import { businessSolutions, coffeeBeans, coffeeMachines } from "@/data/products";

// Products shown in the homepage "הנמכרים שלנו" strip. Hidden products drop out
// automatically (coffeeBeans/coffeeMachines already filter them).
const SHOP_BEAN_IDS = ["espresso-blend", "single-origin-ethiopia"];
const SHOP_MACHINE_IDS = ["jura-e8", "melitta-solo-silver"];
const shopBeans = coffeeBeans.filter((b) => SHOP_BEAN_IDS.includes(b.id));
const shopMachines = coffeeMachines.filter((m) => SHOP_MACHINE_IDS.includes(m.id));

export default function HomePage() {
  const site = "https://www.gintz.co.il";
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "קפה גינץ",
    alternateName: "Gintz Coffee",
    url: site,
    logo: `${site}/logo.png`,
    description:
      "בית קלייה בוטיק מאז 2005. פתרונות קפה למשרד ולעסק: מכונות קפה, פולי קפה טריים וכוסות ממותגות בהתאמה אישית.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+97239600550",
      contactType: "sales",
      areaServed: "IL",
      availableLanguage: ["he"],
    },
    sameAs: [
      "https://wa.me/97239600550",
      "https://www.facebook.com/gintzcoffee",
      "https://www.instagram.com/gintzcoffee",
    ],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "קפה גינץ",
    url: site,
    inLanguage: "he-IL",
    publisher: { "@type": "Organization", name: "קפה גינץ" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      {/* ── Hero ── */}
      <section
        className="relative isolate overflow-hidden bg-brown-dark text-white"
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

        <div className="mx-auto flex max-w-7xl items-center px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
              קפה טרי לעסק שלכם{" "}
              <span className="mt-2 block text-gold">קלוי במיוחד בשבילכם</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              פולים טריים ומכונות קפה, ישירות מבית הקלייה שלנו.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 py-3 font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-gold-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                לרכישה באתר
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

      {/* ── Shop — direct purchase ── */}
      <section className="scroll-mt-20 bg-cream py-16 sm:py-20" id="shop" aria-labelledby="shop-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 id="shop-heading" className="text-3xl font-bold text-brown sm:text-4xl">
              הנמכרים שלנו
            </h2>
            <div className="flex gap-3">
              <Link href="/beans" className="btn btn-secondary btn-sm">כל הפולים ←</Link>
              <Link href="/machines" className="btn btn-secondary btn-sm">כל המכונות ←</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shopBeans.map((b) => (
              <ProductCard
                key={b.id}
                name={b.name}
                description={b.description}
                image={b.image}
                priceRange={b.price}
                ctaHref={`/beans/${b.id}`}
                ctaLabel="בחירת טחינה וקנייה ←"
              />
            ))}
            {shopMachines.map((m) => (
              <ProductCard
                key={m.id}
                name={m.name}
                description={m.description}
                image={m.image}
                priceRange={m.price}
                detailHref={`/machines/${m.id}`}
                cartItem={{
                  id: m.id,
                  name: m.name,
                  price: m.price,
                  priceNumeric: m.priceNumeric,
                  category: "machine",
                  image: m.image,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Solutions — the headline pitch ── */}
      <section
        className="bg-cream-dark py-16 sm:py-20"
        id="business-solutions"
        aria-labelledby="home-solutions-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2
                id="home-solutions-heading"
                className="mb-2 text-3xl font-bold text-brown sm:text-4xl"
              >
                פתרונות קפה למשרד
              </h2>
              <p className="text-brown/70">
                מכונה, פולים, התקנה ושירות, לפי גודל המשרד.
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
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

          {/* Quote form — for office coffee solutions only */}
          <div
            id="contact"
            className="mx-auto mt-12 max-w-2xl scroll-mt-24"
            aria-labelledby="contact-heading"
          >
            <div className="text-center mb-8">
              <h2 id="contact-heading" className="text-2xl font-bold text-brown mb-2">
                פתרון קפה למשרד? קבלו הצעת מחיר
              </h2>
              <p className="text-brown/65">השאירו פרטים ונחזור אליכם תוך שעות ספורות</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <LeadForm title="" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
