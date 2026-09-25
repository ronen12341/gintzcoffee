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

const CATEGORIES = [
  { href: "/beans", title: "פולי קפה", sub: "קלויים טרי אצלנו", image: "/coffee-bag.jpg", cta: "לקנייה" },
  { href: "/business-solutions", title: "קפה למשרד", sub: "מכונה, פולים ושירות", image: "/images/jura-x10.jpg", badge: "הצעת מחיר", cta: "לפרטים" },
  { href: "/machines", title: "מכונות חדשות", sub: "JURA, Lelit ועוד", image: "/images/products/machine-ena8.jpg", cta: "לקנייה" },
  { href: "/bargains", title: "מכונות מחודשות", sub: "3 חודשי אחריות", image: "/images/products/used-jura-x8.jpg", badge: "מציאון", cta: "לקנייה" },
];

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
      {/* ── Hero — category tiles ── */}
      <section className="bg-white pb-10 pt-8 sm:pb-14 sm:pt-12" aria-labelledby="home-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7 text-center sm:mb-10">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold-dark sm:text-sm">
              בית קלייה בוטיק · מאז 2005
            </p>
            <h1 id="home-heading" className="text-2xl font-bold text-brown sm:text-3xl">
              מה תרצו להזמין היום?
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group relative flex flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-b from-cream to-cream-dark px-3 pb-5 pt-4 text-center shadow-sm ring-1 ring-brown/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:px-5 sm:pb-7 sm:pt-6"
              >
                {c.badge && (
                  <span className="absolute start-3 top-3 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold text-white shadow-sm sm:text-sm">
                    {c.badge}
                  </span>
                )}
                <div className="relative aspect-square w-full">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    priority
                    className="object-contain p-2 mix-blend-multiply transition duration-500 group-hover:scale-105 sm:p-4"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h2 className="mt-2 text-lg font-bold leading-tight text-brown sm:mt-4 sm:text-2xl">{c.title}</h2>
                <p className="mt-1 text-sm text-brown/65 sm:text-base">{c.sub}</p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-brown px-4 py-1.5 text-sm font-bold text-cream transition group-hover:bg-gold sm:mt-4 sm:px-6 sm:py-2 sm:text-base">
                  {c.cta} ←
                </span>
              </Link>
            ))}
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
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {shopBeans.map((b) => (
              <ProductCard
                key={b.id}
                name={b.name}
                description={b.description}
                image={b.image}
                priceRange={b.price}
                ctaHref={`/beans/${b.id}`}
                ctaLabel="לקנייה ←"
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
