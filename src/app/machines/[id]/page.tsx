import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Check } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import MachineGallery from "@/components/MachineGallery";
import { coffeeMachines } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return coffeeMachines.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const machine = coffeeMachines.find((m) => m.id === id);
  if (!machine) return { title: "מכונה לא נמצאה" };
  return {
    title: `${machine.name} — קפה גינץ`,
    description: machine.description.slice(0, 160),
    alternates: { canonical: `/machines/${machine.id}` },
    openGraph: {
      title: machine.name,
      description: machine.description.slice(0, 160),
      images: machine.image ? [machine.image] : undefined,
    },
  };
}

export default async function MachineDetailPage({ params }: PageProps) {
  const { id } = await params;
  const machine = coffeeMachines.find((m) => m.id === id);
  if (!machine) notFound();

  // Combine main image with extras for the gallery
  const galleryImages = [
    ...(machine.image ? [machine.image] : []),
    ...(machine.images ?? []),
  ];

  const paragraphs = (machine.longDescription ?? machine.description)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  // --- Structured data (Product + BreadcrumbList) for rich results ---
  const site = "https://www.gintz.co.il";
  // Same fix as beans/[id]/page.tsx: a site-relative image path (most of
  // this catalog's images) was silently dropped instead of resolved to an
  // absolute URL, so the Product schema shipped with no "image" at all.
  const productImage = machine.image
    ? machine.image.startsWith("http")
      ? machine.image
      : `${site}${machine.image}`
    : undefined;
  const brandName = /jura/i.test(machine.name)
    ? "JURA"
    : /melitta/i.test(machine.name)
    ? "Melitta"
    : /lelit/i.test(machine.name)
    ? "LeLit"
    : /profitec/i.test(machine.name)
    ? "Profitec"
    : undefined;
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name,
    description: (machine.longDescription ?? machine.description).slice(0, 500),
    category: "Home & Garden > Kitchen & Dining > Kitchen Appliances > Coffee Makers & Espresso Machines",
    ...(productImage ? { image: productImage } : {}),
    ...(brandName ? { brand: { "@type": "Brand", name: brandName } } : {}),
    ...(machine.priceNumeric
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "ILS",
            price: machine.priceNumeric,
            availability: "https://schema.org/InStock",
            url: `${site}/machines/${machine.id}`,
            // Real site policy (src/app/checkout/page.tsx, src/app/terms):
            // ₪60 flat rate, free above ₪400, up to 7 business days; 14-day
            // cancellation window per Israeli consumer-protection law.
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: { "@type": "MonetaryAmount", value: 60, currency: "ILS" },
              shippingDestination: { "@type": "DefinedRegion", addressCountry: "IL" },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 7, unitCode: "d" },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "IL",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 14,
            },
          },
        }
      : {}),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: site },
      { "@type": "ListItem", position: 2, name: "מכונות קפה", item: `${site}/machines` },
      { "@type": "ListItem", position: 3, name: machine.name, item: `${site}/machines/${machine.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Breadcrumb / back link */}
      <div className="bg-cream-dark border-b border-cream py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/machines"
            className="inline-flex items-center gap-1 text-sm text-brown/70 hover:text-brown transition-colors"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            חזרה לכל המכונות
          </Link>
        </div>
      </div>

      <section className="py-10 sm:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <MachineGallery images={galleryImages} alt={machine.name} />

            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl font-bold text-brown mb-3 leading-tight">
                {machine.name}
              </h1>

              {machine.price && (
                <div className="mb-5 flex items-baseline gap-2 flex-wrap">
                  <span className="text-gold font-bold text-3xl">{machine.price}</span>
                  <span className="text-brown/50 text-sm">מחיר לקנייה</span>
                </div>
              )}

              {/* Short description */}
              <p className="text-brown/75 text-base leading-relaxed mb-5">
                {machine.description}
              </p>

              {/* Feature highlights */}
              {machine.features && machine.features.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {machine.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-brown"
                    >
                      <Check
                        className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTAs */}
              <div className="flex flex-col gap-2 mb-6">
                <AddToCartButton
                  item={{
                    id: machine.id,
                    name: machine.name,
                    price: machine.price,
                    priceNumeric: machine.priceNumeric,
                    category: "machine",
                    image: machine.image,
                  }}
                />
              </div>

              {/* Specs table */}
              {machine.specs && machine.specs.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
                  <h2 className="text-brown font-bold text-lg mb-3">
                    מפרט טכני
                  </h2>
                  <dl className="divide-y divide-cream">
                    {machine.specs.map((s) => (
                      <div
                        key={s.label}
                        className="py-2 grid grid-cols-2 gap-3 text-sm"
                      >
                        <dt className="text-brown/65">{s.label}</dt>
                        <dd className="text-brown font-medium">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>

          {/* Extended description */}
          {paragraphs.length > 0 && (
            <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-brown mb-4">
                על המכונה
              </h2>
              <div className="space-y-4 text-brown/75 leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

    </>
  );
}
