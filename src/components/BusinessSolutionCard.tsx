import Image from "next/image";
import { Users, Check } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { BusinessSolution } from "@/data/products";

interface BusinessSolutionCardProps {
  solution: BusinessSolution;
}

/**
 * Card variant tuned for the "Coffee solutions for businesses" page.
 * Emphasizes the employee-tier badge over price, since these are quote-based
 * packaged solutions rather than off-the-shelf products.
 */
export default function BusinessSolutionCard({ solution }: BusinessSolutionCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col group">
      <div className="relative">
        {solution.image ? (
          <div className="relative w-full aspect-[4/3] bg-cream">
            <Image
              src={solution.image}
              alt={solution.name}
              fill
              className="object-contain p-6 transition-transform group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : (
          <ImagePlaceholder label="הוסף תמונה" width={400} height={300} />
        )}
        {/* Employee-range badge — the headline feature of this card */}
        <div className="absolute top-4 start-4 bg-brown text-cream px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
          <Users className="w-4 h-4 text-gold" aria-hidden="true" />
          {solution.employeeRange}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-brown font-bold text-xl mb-1 leading-snug">{solution.name}</h3>
        {solution.tagline && (
          <p className="text-gold text-sm font-medium mb-3">{solution.tagline}</p>
        )}
        <p className="text-brown/70 text-sm leading-relaxed mb-4">{solution.description}</p>

        {solution.features && solution.features.length > 0 && (
          <ul className="mb-5 space-y-2">
            {solution.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-brown">
                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <a href="#contact" className="btn btn-primary btn-block mt-auto">
          קבל הצעת מחיר מותאמת
        </a>
      </div>
    </article>
  );
}
