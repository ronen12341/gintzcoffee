"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

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

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
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
