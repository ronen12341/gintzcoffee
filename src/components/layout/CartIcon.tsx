"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

/**
 * Header cart icon. Renders as a soft empty disk until items are in the cart;
 * once anything is added it becomes a filled gold pill with a red count badge
 * that pops in with a spring animation. The badge re-animates whenever the
 * count changes so customers get clear feedback after "Add to cart".
 */
export default function CartIcon() {
  const { totalQty } = useCart();
  const [bump, setBump] = useState(0);
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    setHasItems(totalQty > 0);
    setBump((n) => n + 1);
  }, [totalQty]);

  return (
    <Link
      href="/cart"
      className={`cart-icon-wrap ${hasItems ? "" : "cart-icon-empty"}`}
      aria-label={`עגלת הקניות (${totalQty} פריטים)`}
    >
      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
      {totalQty > 0 && (
        <span key={bump} className="cart-badge" aria-hidden="true">
          {totalQty > 99 ? "99+" : totalQty}
        </span>
      )}
    </Link>
  );
}
