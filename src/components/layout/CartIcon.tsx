"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CartIcon() {
  const { totalQty } = useCart();
  return (
    <Link
      href="/cart"
      className="relative flex items-center text-cream hover:text-gold transition-colors p-1.5 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gold"
      aria-label={`עגלת הקניות (${totalQty} פריטים)`}
    >
      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
      {totalQty > 0 && (
        <span
          className="absolute -top-1 -start-1 bg-gold text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1"
          aria-hidden="true"
        >
          {totalQty}
        </span>
      )}
    </Link>
  );
}
