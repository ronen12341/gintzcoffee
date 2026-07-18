"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AddToCartButton from "@/components/AddToCartButton";
import type { Bean } from "@/data/products";

type TypeFilter = "all" | "blend" | "single";
type RoastFilter = "all" | "light" | "medium" | "dark";
type SortKey = "featured" | "name";

/** Single-origin beans carry an origin (country); blends have it left blank.
 *  So: no origin → blend, has origin → single-origin. */
function isBlend(bean: Bean): boolean {
  return (bean.origin ?? "").trim() === "";
}

/** Map the free-text roast label to a coarse category for filtering. */
function roastCategory(bean: Bean): Exclude<RoastFilter, "all"> {
  const r = bean.roast ?? "";
  if (r.includes("כהה")) return "dark";
  if (r.includes("בהיר")) return "light";
  return "medium";
}

const typeChips: { key: TypeFilter; label: string }[] = [
  { key: "all", label: "הכל" },
  { key: "blend", label: "תערובות" },
  { key: "single", label: "חד-זני" },
];

const roastChips: { key: RoastFilter; label: string }[] = [
  { key: "all", label: "כל הקליות" },
  { key: "light", label: "קלייה בהירה" },
  { key: "medium", label: "קלייה בינונית" },
  { key: "dark", label: "קלייה כהה" },
];

export default function BeansShop({ beans }: { beans: Bean[] }) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [roastFilter, setRoastFilter] = useState<RoastFilter>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const visible = useMemo(() => {
    const filtered = beans.filter((b) => {
      if (typeFilter === "blend" && !isBlend(b)) return false;
      if (typeFilter === "single" && isBlend(b)) return false;
      if (roastFilter !== "all" && roastCategory(b) !== roastFilter) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name, "he");
      // featured first, then keep original order
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [beans, typeFilter, roastFilter, sort]);

  const chipBase =
    "text-sm font-semibold px-4 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <div>
      {/* Filter + sort bar */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-brown/50 text-xs font-semibold ms-1">סוג:</span>
          {typeChips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setTypeFilter(c.key)}
              aria-pressed={typeFilter === c.key}
              className={`${chipBase} ${
                typeFilter === c.key
                  ? "bg-gold text-white"
                  : "bg-brown/5 text-brown hover:bg-brown/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-brown/50 text-xs font-semibold ms-1">קלייה:</span>
          {roastChips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setRoastFilter(c.key)}
              aria-pressed={roastFilter === c.key}
              className={`${chipBase} ${
                roastFilter === c.key
                  ? "bg-gold text-white"
                  : "bg-brown/5 text-brown hover:bg-brown/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-cream-dark pt-4">
          <p className="text-brown/60 text-sm">
            {visible.length} מוצרים
          </p>
          <label className="flex items-center gap-2 text-sm text-brown/70">
            מיון:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-white border border-cream-dark rounded-lg px-3 py-1.5 text-brown focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="featured">מומלצים תחילה</option>
              <option value="name">לפי שם (א׳–ת׳)</option>
            </select>
          </label>
        </div>
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="text-brown/60 text-center py-16">
          לא נמצאו פולים בסינון הזה. נסו לשנות את הבחירה.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((bean) => (
            <article
              key={bean.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <Link
                href={`/beans/${bean.id}`}
                aria-label={`עוד פרטים על ${bean.name}`}
                className="block focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {bean.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={bean.image}
                    alt={bean.name}
                    className="w-full h-52 object-contain bg-white"
                  />
                ) : (
                  <ImagePlaceholder label="הוסף תמונה" width={300} height={400} />
                )}
              </Link>
              <div className="p-6 flex flex-col flex-1">
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
                <Link
                  href={`/beans/${bean.id}`}
                  className="text-brown font-bold text-xl mb-2 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded"
                >
                  {bean.name}
                </Link>
                <p className="text-brown/65 text-sm leading-relaxed flex-1">
                  {bean.description}
                </p>

                {bean.features && bean.features.length > 0 && (
                  <p className="mt-3 text-xs text-brown/55 leading-relaxed">
                    {bean.features[0]}
                  </p>
                )}

                {bean.price && (
                  <div className="mt-3 mb-1 flex items-baseline gap-2">
                    <span className="text-gold font-bold text-xl">{bean.price}</span>
                    <span className="text-brown/50 text-xs">{'לק"ג'}</span>
                  </div>
                )}
                <div className="mt-4">
                  <AddToCartButton
                    item={{
                      id: bean.id,
                      name: bean.name,
                      price: bean.price,
                      priceNumeric: bean.priceNumeric,
                      category: "bean",
                      image: bean.image,
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
