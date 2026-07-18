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
  /** When true, the secondary "details" CTA link is suppressed entirely
   *  (used on pages where the cart button is the only action we want). */
  hideCta?: boolean;
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
  hideCta = false,
}: ProductCardProps) {
  // When a detail page exists for this product, the image and the title are
  // wrapped in a Link so customers can click to learn more.
  // A consistent 4:3 frame keeps every listing aligned while object-contain
  // preserves the full machine, regardless of the source image proportions.
  const imageContent = image ? (
    <div className="relative aspect-[4/3] w-full bg-cream/40">
      <SmartImage
        src={image}
        alt={name}
        fill
        className="object-contain p-5 sm:p-7"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  ) : (
    <ImagePlaceholder label="הוסף תמונה" width={400} height={300} />
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brown/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

      <div className="flex flex-1 flex-col p-6">
        {detailHref ? (
          <Link
            href={detailHref}
            className="mb-3 rounded text-xl font-bold leading-snug text-brown transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {name}
          </Link>
        ) : (
          <h3 className="mb-3 text-xl font-bold leading-snug text-brown">{name}</h3>
        )}
        <p className="content-summary mb-5 flex-1 text-[0.95rem] leading-7 text-brown/65">{description}</p>

        {priceRange && (
          <div className="mb-5 flex flex-wrap items-baseline gap-2 border-t border-brown/[0.06] pt-4">
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
          <ul className="mb-5 space-y-2">
            {features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm leading-6 text-brown/70">
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
          {!detailHref && !hideCta && (
            <a href={ctaHref} className="btn btn-soft-secondary btn-block btn-sm">
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
