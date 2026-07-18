import SmartImage from "@/components/SmartImage";
import { Users, Check } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { BusinessSolution } from "@/data/products";

interface BusinessSolutionCardProps {
  solution: BusinessSolution;
  variant?: "default" | "home";
}

/**
 * Card variant tuned for the "Coffee solutions for businesses" page.
 * Emphasizes the employee-tier badge over price, since these are quote-based
 * packaged solutions rather than off-the-shelf products.
 */
export default function BusinessSolutionCard({
  solution,
  variant = "default",
}: BusinessSolutionCardProps) {
  if (variant === "home") {
    return (
      <article className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-brown-dark shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
          {solution.image ? (
            <SmartImage
              src={solution.image}
              alt={solution.name}
              fill
              className="object-contain p-6 transition duration-500 group-hover:scale-[1.03] sm:p-8"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <ImagePlaceholder label="הוסף תמונה" width={400} height={300} />
          )}
        </div>

        <div className="flex w-full flex-1 flex-col p-6 text-white sm:p-7">
          <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/40 bg-black/25 px-3 py-1.5 text-xs font-bold text-cream backdrop-blur-sm">
            <Users className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {solution.employeeRange}
          </div>
          <h3 className="mb-2 text-2xl font-bold leading-tight">{solution.name}</h3>
          {solution.tagline && (
            <p className="mb-4 min-h-10 text-sm font-medium leading-relaxed text-gold">
              {solution.tagline}
            </p>
          )}
          <ul className="mb-6 space-y-2 border-t border-white/15 pt-4">
            {(solution.features ?? []).slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-cream/85">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-brown focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            התאימו לי פתרון
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brown/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative">
        {solution.image ? (
          <div className="relative aspect-[4/3] w-full bg-cream/50">
            <SmartImage
              src={solution.image}
              alt={solution.name}
              fill
              className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03] sm:p-8"
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

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="mb-2 text-xl font-bold leading-snug text-brown">{solution.name}</h3>
        {solution.tagline && (
          <p className="text-gold text-sm font-medium mb-3">{solution.tagline}</p>
        )}
        <p className="content-summary mb-5 text-[0.95rem] leading-7 text-brown/65">{solution.description}</p>

        {solution.features && solution.features.length > 0 && (
          <ul className="mb-6 space-y-2.5 border-t border-brown/[0.06] pt-4">
            {solution.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm leading-6 text-brown/80">
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
