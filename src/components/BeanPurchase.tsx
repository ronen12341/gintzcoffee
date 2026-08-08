"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/lib/cart";
import { BEAN_250G_PRICE } from "@/lib/server-pricing";

interface BeanPurchaseProps {
  bean: {
    id: string;
    name: string;
    price?: string;
    priceNumeric?: number;
    image?: string;
  };
  /** Compact layout for product cards; full layout for the detail page. */
  compact?: boolean;
}

type Size = "1kg" | "250g";
type Grind = "whole" | "ground";

/**
 * Weight + grind selector for a coffee bean.
 * - Weight: 1 ק"ג (bean's own price) or 250 גרם (flat 45 ש"ח).
 * - Grind (250 גרם only): פולים שלמים / טחון.
 * Each combination is added to the cart as a distinct line (unique id).
 */
export default function BeanPurchase({ bean, compact = false }: BeanPurchaseProps) {
  const { addItem } = useCart();
  const [size, setSize] = useState<Size>("1kg");
  const [grind, setGrind] = useState<Grind>("whole");
  const [added, setAdded] = useState(false);

  const kgNumeric = bean.priceNumeric;
  const kgPrice = bean.price ?? (kgNumeric != null ? `${kgNumeric} ש"ח` : undefined);

  const is250 = size === "250g";
  const priceNumeric = is250 ? BEAN_250G_PRICE : kgNumeric;
  const priceStr = is250 ? `${BEAN_250G_PRICE} ש"ח` : kgPrice;

  const grindLabel = grind === "whole" ? "פולים שלמים" : "טחון";
  const note = is250 ? `250 גרם · ${grindLabel}` : '1 ק"ג';
  const variantId = is250 ? `${bean.id}::250g-${grind}` : `${bean.id}::1kg`;

  const handleAdd = () => {
    addItem({
      id: variantId,
      name: bean.name,
      price: priceStr,
      priceNumeric,
      category: "bean",
      image: bean.image,
      note,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const optionBtn = (active: boolean) =>
    `flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
      active
        ? "border-gold bg-gold text-white"
        : "border-cream-dark bg-white text-brown hover:border-gold/60"
    }`;

  return (
    <div className={compact ? "space-y-2" : "space-y-4"}>
      {/* Weight */}
      <div>
        {!compact && (
          <p className="text-xs font-semibold text-brown/60 mb-1.5">כמות</p>
        )}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setSize("1kg")}
            aria-pressed={size === "1kg"}
            className={optionBtn(size === "1kg")}
          >
            1 ק&quot;ג
            {kgPrice ? ` · ${kgPrice}` : ""}
          </button>
          <button
            type="button"
            onClick={() => setSize("250g")}
            aria-pressed={size === "250g"}
            className={optionBtn(size === "250g")}
          >
            250 גרם · {BEAN_250G_PRICE} ש&quot;ח
          </button>
        </div>
      </div>

      {/* Grind — only for 250g */}
      {is250 && (
        <div>
          {!compact && (
            <p className="text-xs font-semibold text-brown/60 mb-1.5">טחינה</p>
          )}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setGrind("whole")}
              aria-pressed={grind === "whole"}
              className={optionBtn(grind === "whole")}
            >
              פולים שלמים
            </button>
            <button
              type="button"
              onClick={() => setGrind("ground")}
              aria-pressed={grind === "ground"}
              className={optionBtn(grind === "ground")}
            >
              טחון
            </button>
          </div>
        </div>
      )}

      {/* Selected price + add */}
      <div className={compact ? "" : "flex items-center justify-between gap-4 pt-1"}>
        {!compact && (
          <div className="flex items-baseline gap-2">
            <span className="text-gold font-bold text-2xl">{priceStr}</span>
            <span className="text-brown/50 text-sm">{is250 ? "ל-250 גרם" : 'ל-1 ק"ג'}</span>
          </div>
        )}
        <button
          type="button"
          onClick={handleAdd}
          aria-live="polite"
          className={compact ? "btn btn-soft btn-block btn-sm mt-1" : "btn btn-soft btn-lg"}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" aria-hidden="true" />
              נוסף לסל
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              הוסף לסל
            </>
          )}
        </button>
      </div>
    </div>
  );
}
