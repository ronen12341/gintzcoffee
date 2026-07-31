"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { coffeeMachines, coffeeBeans, usedMachines } from "@/data/products";

/** Client-side mirror of the server's price lookup (src/lib/server-pricing.ts) —
 *  used only to keep the cart's *displayed* total from drifting; the actual
 *  charge is always re-verified server-side regardless of this. */
function currentCatalogPrice(category: string, id: string): number | undefined {
  switch (category) {
    case "bean":
      return coffeeBeans.find((b) => b.id === id)?.priceNumeric;
    case "machine":
      return coffeeMachines.find((m) => m.id === id)?.priceNumeric;
    case "used":
      return usedMachines.find((m) => m.id === id)?.priceNumeric;
    default:
      return undefined;
  }
}

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
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  updateNote: (id: string, note: string) => void;
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
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const resynced = parsed.map((item) => {
            const livePrice = currentCatalogPrice(item.category, item.id);
            return livePrice !== undefined ? { ...item, priceNumeric: livePrice } : item;
          });
          setItems(resynced);
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
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem: CartContextType["removeItem"] = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQty: CartContextType["updateQty"] = (id, qty) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const updateNote: CartContextType["updateNote"] = (id, note) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, note } : p)));
  };

  const clear = () => setItems([]);

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + (i.priceNumeric ? i.priceNumeric * i.qty : 0),
    0
  );
  const hasUnpricedItems = items.some((i) => !i.priceNumeric);

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
