"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart";

/**
 * Clears the cart only once the customer is actually back on this page with
 * a confirmed Sumit payment — not before redirecting to Sumit. Checkout used
 * to clear the cart pre-emptively, so a declined card, a closed tab, or
 * hitting "back" from Sumit's page all lost the customer's cart with no way
 * to retry without re-adding every item.
 */
export default function ClearCartOnPaid({ paid }: { paid: boolean }) {
  const { clear } = useCart();

  useEffect(() => {
    if (paid) clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paid]);

  return null;
}
