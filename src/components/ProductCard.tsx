import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SmartImage from "@/components/SmartImage";
import AddToCartButton from "@/components/AddToCartButton";
import type { CartItem } from "@/lib/cart";

interface ProductCardProps {
  name: string;
  description: string;
  priceRange?: string;
  /** Strike-through original price shown next to the current price (e.g. for sales/used items) */
  originalPrice?: string;
  image?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  features?: string[];
  imageContain?: boolean;
  /** When set, an "Add to cart" button is rendered alongside the CTA. */
  cartItem?: Omit<CartItem, "qty">;
  /** When set, the image and name become a link to this URL (the detail page). */
  detailHref?: string;
}

export default function ProductCard({
  name,
  description,
  priceRange,
  originalPrice,
  image,
  badge,
  ctaLabel = "לפרטים והצעת מחיר",
  ctaHref = "#contact",
  features,
  imageContain = false,
  cartItem,
  detailHref,
}: ProductCardProps) {
  // When a detail page exists for this product, the image and the title are
  // wrapped in a Link so customers can click to learn more.
  // Image area uses a fixed pixel height instead of an aspect ratio so the
  // card stays compact regardless of card width. 200px on mobile, 220px on
  // desktop — small enough to keep the card scannable, large enough to read
  // the product. `object-contain` guarantees the whole machine is visible
  // (never cropped), with a soft cream background so the letterboxing looks
  // intentional.
  const imageContent = image ? (
    <div className="relative w-full h-[200px] sm:h-[220px] bg-cream/40 p-3">
      <SmartImage
        src={image}
        alt={name}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  ) : (
    <ImagePlaceholder label="הוסף תמונה" width={400} height={300} />
  );

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative">
        {badge && (
          <span className="absolute top-3 start-3 z-10 bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}
        {detailHref ? (
          <Link
            href={detailHref}
            aria-label={`עוד פרטים על ${name}`}
            className="block focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {imageContent}
          </Link>
        ) : (
          imageContent
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {detailHref ? (
          <Link
            href={detailHref}
            className="text-brown font-bold text-lg mb-2 leading-snug hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded"
          >
            {name}
          </Link>
        ) : (
          <h3 className="text-brown font-bold text-lg mb-2 leading-snug">{name}</h3>
        )}
        <p className="text-brown/65 text-sm mb-3 leading-relaxed flex-1">{description}</p>

        {priceRange && (
          <div className="mb-3 flex items-baseline gap-2 flex-wrap">
            <span className="text-gold font-bold text-xl">{priceRange}</span>
            {originalPrice && (
              <span className="text-brown/50 text-sm line-through decoration-red-500 decoration-2">
                {originalPrice}
              </span>
            )}
            <span className="text-brown/50 text-xs">מחיר לקנייה</span>
          </div>
        )}

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

        <div className="flex flex-col gap-2 mt-auto">
          {cartItem && <AddToCartButton item={cartItem} />}
          {/* The standalone CTA is only shown when there's no detail page —
              when detailHref is set, the image and title already link there,
              so a separate button is redundant. */}
          {!detailHref && (
            <a href={ctaHref} className="btn btn-soft-secondary btn-block btn-sm">
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
