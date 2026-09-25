"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Machine } from "@/data/products";

type TypeFilter = "all" | NonNullable<Machine["machineType"]>;
type SortKey = "featured" | "price-asc" | "price-desc";

const typeChips: { key: TypeFilter; label: string }[] = [
  { key: "all", label: "הכל" },
  { key: "automatic", label: "אוטומטיות" },
  { key: "manual", label: "ידניות" },
  { key: "office", label: "למשרד" },
];

/** Brand is derived from the product name, so new catalog entries are picked
 *  up without extra data. Order here is the order the chips appear in. */
const BRANDS: { label: string; re: RegExp }[] = [
  { label: "JURA", re: /jura|יורה/i },
  { label: "Gaggia", re: /gaggia|גאגיה/i },
  { label: "De'Longhi", re: /de'?longhi|דלונגי/i },
  { label: "Philips", re: /philips|פיליפס/i },
  { label: "Melitta", re: /melitta|מליטה/i },
  { label: "Pascale", re: /pascale|פסקל/i },
  { label: "La Pavoni", re: /la pavoni/i },
  { label: "Lelit", re: /lelit/i },
  { label: "Profitec", re: /profitec|פרופיטק/i },
  { label: "WMF", re: /wmf/i },
];

function brandOf(m: Machine): string | undefined {
  return BRANDS.find((b) => b.re.test(m.name))?.label;
}

export default function MachinesShop({ machines }: { machines: Machine[] }) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [brand, setBrand] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  // Only show brand chips that actually have machines in the current type.
  const brandChips = useMemo(() => {
    const inType = machines.filter(
      (m) => typeFilter === "all" || (m.machineType ?? "automatic") === typeFilter
    );
    return BRANDS.map((b) => b.label).filter((label) =>
      inType.some((m) => brandOf(m) === label)
    );
  }, [machines, typeFilter]);

  const visible = useMemo(() => {
    const filtered = machines.filter((m) => {
      if (typeFilter !== "all" && (m.machineType ?? "automatic") !== typeFilter) return false;
      if (brand !== "all" && brandOf(m) !== brand) return false;
      return true;
    });
    const price = (m: Machine) => m.priceNumeric ?? Number.MAX_SAFE_INTEGER;
    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return price(a) - price(b);
      if (sort === "price-desc") return price(b) - price(a);
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [machines, typeFilter, brand, sort]);

  const chipBase =
    "flex-shrink-0 text-sm font-semibold px-4 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold";
  const chipClass = (active: boolean) =>
    `${chipBase} ${active ? "bg-gold text-white" : "bg-brown/5 text-brown hover:bg-brown/10"}`;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-brown/50 text-xs font-semibold ms-1">סוג:</span>
          {typeChips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setTypeFilter(c.key);
                setBrand("all");
              }}
              aria-pressed={typeFilter === c.key}
              className={chipClass(typeFilter === c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Brand chips scroll sideways on phones instead of wrapping into rows */}
        <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 scrollbar-hide sm:mx-0 sm:flex-wrap sm:px-0">
          <span className="flex-shrink-0 text-brown/50 text-xs font-semibold ms-1">מותג:</span>
          <button
            type="button"
            onClick={() => setBrand("all")}
            aria-pressed={brand === "all"}
            className={chipClass(brand === "all")}
          >
            כל המותגים
          </button>
          {brandChips.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setBrand(label)}
              aria-pressed={brand === label}
              className={chipClass(brand === label)}
              dir="ltr"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-cream-dark pt-4">
          <p className="text-brown/60 text-sm">{visible.length} מכונות</p>
          <label className="flex items-center gap-2 text-sm text-brown/70">
            מיון:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-white border border-cream-dark rounded-lg px-3 py-1.5 text-brown focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="featured">מומלצות תחילה</option>
              <option value="price-asc">מחיר: מהנמוך לגבוה</option>
              <option value="price-desc">מחיר: מהגבוה לנמוך</option>
            </select>
          </label>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="text-brown/60 text-center py-16">
          לא נמצאו מכונות בסינון הזה. נסו לשנות את הבחירה.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {visible.map((m) => (
            <ProductCard
              key={m.id}
              name={m.name}
              description={m.description}
              features={m.features}
              image={m.image}
              priceRange={m.price}
              ctaHref={`/machines/${m.id}`}
              ctaLabel="פרטים מלאים ←"
              detailHref={`/machines/${m.id}`}
              imageContain={m.id === "melitta-solo-silver"}
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
      )}
    </div>
  );
}
