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
  { href: "/beans", title: "פולי קפה", sub: "קלויים טרי אצלנו", image: "/coffee-bag.jpg" },
  { href: "/business-solutions", title: "פתרונות קפה למשרד", sub: "מכונה, פולים ושירות", image: "/images/jura-x10.jpg", badge: "הצעת מחיר" },
  { href: "/machines", title: "מכונות קפה חדשות", sub: "JURA, Lelit ועוד", image: "/images/products/machine-ena8.jpg" },
  { href: "/bargains", title: "מכונות מחודשות", sub: "עם 3 חודשי אחריות", image: "/images/products/used-jura-x8.jpg", badge: "מציאון" },
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
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-brown/10 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {c.badge && (
                  <span className="absolute start-2.5 top-2.5 z-10 rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-bold text-white sm:text-xs">
                    {c.badge}
                  </span>
                )}
                <div className="relative aspect-square w-full bg-white">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    priority
                    className="object-contain p-5 transition duration-500 group-hover:scale-105 sm:p-7"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between gap-2 border-t border-brown/[0.06] px-3 py-3 sm:px-5 sm:py-4">
                  <div>
                    <h2 className="text-sm font-bold leading-snug text-brown sm:text-lg">{c.title}</h2>
                    <p className="mt-0.5 text-xs text-brown/55 sm:text-sm">{c.sub}</p>
                  </div>
                  <span
                    className="hidden h-8 w-8 flex-shrink-0 items-center sm:flex justify-center rounded-full bg-cream text-brown transition group-hover:bg-gold group-hover:text-white"
                    aria-hidden="true"
                  >
                    ←
                  </span>
                </div>
              </Link>
            ))}
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
