"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, hasUnpricedItems, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: "",
  });

  if (items.length === 0 && !submitting) {
    return (
      <section className="py-20 bg-cream min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-brown mb-3">הסל ריק</h1>
          <p className="text-brown/65 mb-6">
            הוסיפו פריטים לסל לפני השלמת ההזמנה.
          </p>
          <Link
            href="/machines"
            className="inline-block bg-brown hover:bg-brown-light text-cream font-medium py-3 px-6 rounded-lg transition-colors"
          >
            לעמוד המכונות
          </Link>
        </div>
      </section>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim()) {
      setError("נא למלא שם וטלפון.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form,
          items,
          totalPrice,
          hasUnpricedItems,
        }),
      });

      if (!res.ok) {
        throw new Error("send failed");
      }

      clear();
      router.push("/order/success");
    } catch {
      setError(
        "אירעה שגיאה בשליחת ההזמנה. אנא נסו שוב או התקשרו אלינו ב-03-9600550."
      );
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-cream min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brown mb-2">פרטי הזמנה</h1>
        <p className="text-brown/65 mb-8">
          מלאו את הפרטים ונחזור אליכם טלפונית לאישור ההזמנה וחיוב באשראי.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-4"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown mb-1">
                  שם מלא *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brown mb-1">
                  טלפון *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  dir="ltr"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brown mb-1">
                אימייל (לא חובה)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                dir="ltr"
                autoComplete="email"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-brown mb-1">
                  כתובת למשלוח
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  autoComplete="street-address"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-brown mb-1">
                  עיר
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  autoComplete="address-level2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-brown mb-1">
                הערות להזמנה (לא חובה)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-y"
                placeholder="שעות נוחות להתקשרות, פרטי משלוח, וכו'"
              />
            </div>

            <div className="bg-cream rounded-lg p-4 text-sm text-brown/75">
              <p className="font-semibold text-brown mb-1">איך זה עובד?</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>תשלחו את ההזמנה (ללא חיוב בכרטיס אשראי)</li>
                <li>נחזור אליכם תוך יום עסקים לאישור</li>
                <li>נחייב את הכרטיס שלכם בשיחה טלפונית מאובטחת</li>
                <li>נשלח את ההזמנה לכתובת שלכם</li>
              </ol>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-lg"
            >
              {submitting ? "שולח..." : "שלח הזמנה"}
            </button>
          </form>

          {/* Order summary */}
          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit lg:sticky lg:top-20">
            <h2 className="text-lg font-bold text-brown mb-4">סיכום הזמנה</h2>
            <ul className="divide-y divide-cream-dark mb-4">
              {items.map((item) => (
                <li key={item.id} className="py-3 flex justify-between text-sm">
                  <div className="flex-1 min-w-0">
                    <p className="text-brown font-medium truncate">{item.name}</p>
                    <p className="text-brown/55 text-xs">כמות: {item.qty}</p>
                  </div>
                  <p className="text-brown font-semibold ms-2 whitespace-nowrap">
                    {item.priceNumeric
                      ? `${(item.priceNumeric * item.qty).toLocaleString("he-IL")} ש"ח`
                      : "לפי הצעה"}
                  </p>
                </li>
              ))}
            </ul>
            {totalPrice > 0 && (
              <div className="border-t-2 border-brown pt-3 flex justify-between items-baseline">
                <span className="font-bold text-brown">סה"כ:</span>
                <span className="text-2xl font-bold text-gold">
                  {totalPrice.toLocaleString("he-IL")} ש"ח
                </span>
              </div>
            )}
            {hasUnpricedItems && (
              <p className="text-xs text-brown/65 mt-3 bg-cream p-2 rounded">
                * חלק מהפריטים דורשים תיאום מחיר בשיחה
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
