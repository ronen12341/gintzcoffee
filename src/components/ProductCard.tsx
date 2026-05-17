import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface ProductCardProps {
  name: string;
  description: string;
  priceRange?: string;
  image?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  features?: string[];
}

export default function ProductCard({
  name,
  description,
  priceRange,
  image,
  badge,
  ctaLabel = "לפרטים והצעת מחיר",
  ctaHref = "#contact",
  features,
}: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative">
        {badge && (
          <span className="absolute top-3 start-3 z-10 bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}
        {image ? (
          <div className="relative w-full aspect-[4/3]">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <ImagePlaceholder label="הוסף תמונה" width={400} height={300} />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-brown font-bold text-lg mb-2 leading-snug">{name}</h3>
        <p className="text-brown/65 text-sm mb-3 leading-relaxed flex-1">{description}</p>

        {features && features.length > 0 && (
          <ul className="mb-3 space-y-1">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-xs text-brown/70">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {priceRange && (
          <p className="text-gold font-semibold text-sm mb-4">{priceRange}</p>
        )}

        <a
          href={ctaHref}
          className="block text-center bg-brown hover:bg-brown-light text-cream font-medium py-2.5 px-4 rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
