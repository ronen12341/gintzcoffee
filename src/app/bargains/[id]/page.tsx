import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Check } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import MachineGallery from "@/components/MachineGallery";
import { usedMachines } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return usedMachines.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const machine = usedMachines.find((m) => m.id === id);
  if (!machine) return { title: "מכונה לא נמצאה" };
  return {
    title: `${machine.name} — מכונת יד2 | קפה גינץ`,
    description: machine.description.slice(0, 160),
    alternates: { canonical: `/bargains/${machine.id}` },
    openGraph: {
      title: machine.name,
      description: machine.description.slice(0, 160),
      images: machine.image ? [machine.image] : undefined,
    },
  };
}

export default async function UsedMachineDetailPage({ params }: PageProps) {
  const { id } = await params;
  const machine = usedMachines.find((m) => m.id === id);
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

  return (
    <>
      {/* Breadcrumb / back link */}
      <div className="bg-cream-dark border-b border-cream py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/bargains"
            className="inline-flex items-center gap-1 text-sm text-brown/70 hover:text-brown transition-colors"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            חזרה לכל מכונות היד2
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
              <span className="self-start bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                מכונות יד2
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold text-brown mb-3 leading-tight">
                {machine.name}
              </h1>

              {machine.price && (
                <div className="mb-5 flex items-baseline gap-2 flex-wrap">
                  <span className="text-gold font-bold text-3xl">{machine.price}</span>
                  {machine.originalPrice && (
                    <span className="text-brown/50 text-lg line-through decoration-red-500 decoration-2">
                      {machine.originalPrice}
                    </span>
                  )}
                  <span className="text-brown/50 text-sm">מחיר לקנייה</span>
                </div>
              )}

              {/* Condition */}
              <div className="mb-5 inline-flex items-center gap-2 self-start bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-brown/60 text-sm">מצב:</span>
                <span className="text-brown font-semibold text-sm">{machine.condition}</span>
              </div>

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
              {machine.priceNumeric != null && (
                <div className="flex flex-col gap-2 mb-6">
                  <AddToCartButton
                    item={{
                      id: machine.id,
                      name: machine.name,
                      price: machine.price,
                      priceNumeric: machine.priceNumeric,
                      category: "used",
                      image: machine.image,
                    }}
                  />
                </div>
              )}

              {/* Warranty note */}
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mb-6 text-sm text-brown/75">
                כל מכונות היד2 עוברות בדיקה טכנית ומגיעות עם אחריות מינימום 3 חודשים.
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
