"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart, type CartItem } from "@/lib/cart";

interface AddToCartButtonProps {
  item: Omit<CartItem, "qty">;
  qty?: number;
  label?: string;
  className?: string;
}

/**
 * Button that adds a product to the cart and shows a brief confirmation.
 * Falls back to "בקש הצעת מחיר" wording when the item has no priceNumeric
 * (i.e., quote-based product).
 */
export default function AddToCartButton({
  item,
  qty = 1,
  label,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(item, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const isQuote = !item.priceNumeric;
  const baseLabel = label ?? (isQuote ? "הוסף לבקשת הצעה" : "הוסף לסל");

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-live="polite"
      className={className ?? "btn btn-soft btn-block btn-sm"}
    >
      {added ? (
        <>
          <Check className="w-4 h-4" aria-hidden="true" />
          נוסף לסל
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4" aria-hidden="true" />
          {baseLabel}
        </>
      )}
    </button>
  );
}
