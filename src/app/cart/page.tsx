"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, updateQty, removeItem, totalPrice, hasUnpricedItems, totalQty } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-20 bg-cream min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShoppingBag className="w-16 h-16 text-brown/30 mx-auto mb-4" aria-hidden="true" />
          <h1 className="text-3xl font-bold text-brown mb-3">סל הקניות שלך ריק</h1>
          <p className="text-brown/65 mb-8">
            עיינו במוצרים שלנו והוסיפו לסל כדי להתחיל הזמנה.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/machines" className="btn btn-soft-secondary">
              למכונות קפה
            </Link>
            <Link href="/beans" className="btn btn-soft">
              לפולי קפה
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-cream min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brown mb-2">סל הקניות שלך</h1>
        <p className="text-brown/65 mb-8">
          {totalQty} {totalQty === 1 ? "פריט" : "פריטים"} בסל
        </p>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <ul className="divide-y divide-cream-dark">
            {items.map((item) => (
              <li key={item.id} className="p-4 sm:p-6 flex gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-cream rounded-lg overflow-hidden relative">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                      sizes="96px"
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-brown text-base sm:text-lg leading-tight mb-1">
                    {item.name}
                  </h3>
                  {item.note && (
                    <p className="text-xs text-brown/55 mb-2">{item.note}</p>
                  )}
                  <p className="text-gold font-semibold text-sm sm:text-base">
                    {item.price ?? "מחיר לפי הצעה"}
                  </p>

                  <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2 border border-cream-dark rounded-lg">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="p-1.5 text-brown hover:bg-cream rounded-r-lg transition-colors"
                        aria-label="הפחת כמות"
                      >
                        <Minus className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <span className="px-3 py-1 font-bold text-brown min-w-[2rem] text-center">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="p-1.5 text-brown hover:bg-cream rounded-l-lg transition-colors"
                        aria-label="הוסף כמות"
                      >
                        <Plus className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-1 text-sm"
                      aria-label={`הסר ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                      הסר
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Totals */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          {totalPrice > 0 && (
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-brown font-medium">סך הביניים (פריטים מתומחרים)</span>
              <span className="text-2xl font-bold text-gold">
                {totalPrice.toLocaleString("he-IL")} ש&quot;ח
              </span>
            </div>
          )}
          {hasUnpricedItems && (
            <p className="text-sm text-brown/70 bg-cream rounded-lg p-3">
              חלק מהפריטים בסל דורשים תיאום מחיר בשיחה — נחזור אליך עם הצעה
              מותאמת אישית.
            </p>
          )}
          <p className="text-xs text-brown/55 mt-4">
            * התשלום מתבצע טלפונית — לאחר שליחת ההזמנה ניצור איתך קשר לחיוב באשראי.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/checkout" className="btn btn-primary btn-lg flex-1">
            המשך לפרטי הזמנה ←
          </Link>
          <Link href="/machines" className="btn btn-soft-secondary">
            המשך בקניות
          </Link>
        </div>
      </div>
    </section>
  );
}
