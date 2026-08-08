import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Check } from "lucide-react";
import BeanPurchase from "@/components/BeanPurchase";
import MachineGallery from "@/components/MachineGallery";
import { coffeeBeans } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return coffeeBeans.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const bean = coffeeBeans.find((b) => b.id === id);
  if (!bean) return { title: "פול קפה לא נמצא" };
  return {
    title: `${bean.name} — פולי קפה | קפה גינץ`,
    description: bean.description.slice(0, 160),
    alternates: { canonical: `/beans/${bean.id}` },
    openGraph: {
      title: bean.name,
      description: bean.description.slice(0, 160),
      images: bean.image ? [bean.image] : undefined,
    },
  };
}

export default async function BeanDetailPage({ params }: PageProps) {
  const { id } = await params;
  const bean = coffeeBeans.find((b) => b.id === id);
  if (!bean) notFound();

  // Combine main image with extras for the gallery
  const galleryImages = [
    ...(bean.image ? [bean.image] : []),
    ...(bean.images ?? []),
  ];

  const paragraphs = (bean.longDescription ?? bean.description)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  // --- Structured data (Product + BreadcrumbList) for rich results ---
  const site = "https://www.gintz.co.il";
  const productImage =
    bean.image && bean.image.startsWith("http") ? bean.image : undefined;
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: bean.name,
    description: (bean.longDescription ?? bean.description).slice(0, 500),
    category: "פולי קפה",
    brand: { "@type": "Brand", name: "קפה גינץ" },
    ...(productImage ? { image: productImage } : {}),
    ...(bean.priceNumeric
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "ILS",
            price: bean.priceNumeric,
            availability: "https://schema.org/InStock",
            url: `${site}/beans/${bean.id}`,
          },
        }
      : {}),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: site },
      { "@type": "ListItem", position: 2, name: "פולי קפה", item: `${site}/beans` },
      { "@type": "ListItem", position: 3, name: bean.name, item: `${site}/beans/${bean.id}` },
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
            href="/beans"
            className="inline-flex items-center gap-1 text-sm text-brown/70 hover:text-brown transition-colors"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            חזרה לכל הפולים
          </Link>
        </div>
      </div>

      <section className="py-10 sm:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <MachineGallery images={galleryImages} alt={bean.name} />

            {/* Product info */}
            <div className="flex flex-col">
              {/* Roast + origin badges */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs bg-gold/15 text-gold-dark font-semibold px-2.5 py-1 rounded-full">
                  {bean.roast}
                </span>
                {bean.origin && (
                  <span className="text-xs bg-brown/10 text-brown font-medium px-2.5 py-1 rounded-full">
                    {bean.origin}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-brown mb-3 leading-tight">
                {bean.name}
              </h1>

              {/* Short description */}
              <p className="text-brown/75 text-base leading-relaxed mb-5">
                {bean.description}
              </p>

              {/* Feature highlights */}
              {bean.features && bean.features.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {bean.features.map((f) => (
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

              {/* Purchase: weight + grind */}
              {bean.priceNumeric != null && (
                <div className="mb-6">
                  <BeanPurchase
                    bean={{
                      id: bean.id,
                      name: bean.name,
                      price: bean.price,
                      priceNumeric: bean.priceNumeric,
                      image: bean.image,
                    }}
                  />
                </div>
              )}

              {/* Freshness note */}
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mb-6 text-sm text-brown/75">
                נקלה טרי בהזמנה אישית ומסופק עד 10 ימים מהקלייה.
              </div>

              {/* Specs table */}
              {bean.specs && bean.specs.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
                  <h2 className="text-brown font-bold text-lg mb-3">
                    פרטי הקפה
                  </h2>
                  <dl className="divide-y divide-cream">
                    {bean.specs.map((s) => (
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
                על הקפה
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
