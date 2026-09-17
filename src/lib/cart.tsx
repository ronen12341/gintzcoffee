"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getCatalogPrice } from "@/lib/server-pricing";

export interface CartItem {
  id: string;
  name: string;
  /** Display price string like "11,200 ש\"ח" — undefined means "מחיר לפי הצעה" */
  price?: string;
  /** Numeric price in NIS for totals calc; undefined if quote-based */
  priceNumeric?: number;
  /** Product category (machine / bean / cup / used) — used for grouping in email */
  category: "machine" | "bean" | "cup" | "used";
  image?: string;
  qty: number;
  /** Optional free-text note per line, e.g. "כמות 500" for cups */
  note?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  // Keyed by id + category, not id alone — two catalog entries in different
  // categories could theoretically share an id, and matching by id alone
  // would silently act on every line sharing it.
  removeItem: (id: string, category: CartItem["category"]) => void;
  updateQty: (id: string, category: CartItem["category"], qty: number) => void;
  updateNote: (id: string, category: CartItem["category"], note: string) => void;
  clear: () => void;
  totalQty: number;
  totalPrice: number;
  hasUnpricedItems: boolean;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "gintz-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount, re-syncing each item's price against the
  // live catalog — a cart can sit in localStorage indefinitely (no expiry),
  // so without this a price change after add-to-cart would silently undercharge
  // (or overcharge) at checkout. The server re-verifies independently regardless.
  //
  // A confirmed Sumit payment redirects back to /order/success?paid=1 via a
  // full HTTP redirect, so this effect and the whole app mount fresh on that
  // page load. The "clear the cart after a real payment" logic has to live
  // HERE, in this same effect, rather than in a separate child effect on the
  // success page — a separate effect racing this one always loses, because
  // React fires child effects before parent effects: it would clear the cart
  // first, then this effect would immediately overwrite that with the still
  // -intact pre-payment cart it just read from storage.
  useEffect(() => {
    try {
      const paidConfirmed =
        typeof window !== "undefined" &&
        window.location.pathname === "/order/success" &&
        new URLSearchParams(window.location.search).get("paid") === "1";

      if (paidConfirmed) {
        localStorage.removeItem(STORAGE_KEY);
        setItems([]);
      } else {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            const resynced = parsed.map((item) => {
              const livePrice = getCatalogPrice(item.category, item.id);
              return livePrice !== undefined ? { ...item, priceNumeric: livePrice } : item;
            });
            setItems(resynced);
          }
        }
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage on change (after initial hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage full or disabled — ignore
    }
  }, [items, hydrated]);

  const addItem: CartContextType["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      // Match on id + category, not id alone — two catalog entries in
      // different categories could theoretically share an id, and matching
      // by id alone would silently merge them into one line (dropping the
      // second item's name/category/price from the cart and order).
      const existing = prev.find(
        (p) => p.id === item.id && p.category === item.category
      );
      if (existing) {
        return prev.map((p) =>
          p === existing ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem: CartContextType["removeItem"] = (id, category) => {
    setItems((prev) => prev.filter((p) => !(p.id === id && p.category === category)));
  };

  const updateQty: CartContextType["updateQty"] = (id, category, qty) => {
    if (qty <= 0) {
      removeItem(id, category);
      return;
    }
    setItems((prev) =>
      prev.map((p) => (p.id === id && p.category === category ? { ...p, qty } : p))
    );
  };

  const updateNote: CartContextType["updateNote"] = (id, category, note) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id && p.category === category ? { ...p, note } : p))
    );
  };

  const clear = () => setItems([]);

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + (i.priceNumeric ? i.priceNumeric * i.qty : 0),
    0
  );
  // Strictly "no catalog price", not "priced at 0" — a falsy check here
  // would treat a legitimately free (₪0) item as unpriced and disable
  // online payment for the whole cart.
  const hasUnpricedItems = items.some((i) => i.priceNumeric === undefined);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        updateNote,
        clear,
        totalQty,
        totalPrice,
        hasUnpricedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
