"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart";

/**
 * Sumit payment-page URL. Hard-coded fallback is the production page for
 * Gintz Coffee; can be overridden via env var NEXT_PUBLIC_SUMIT_PAYMENT_URL.
 * When set, customers can choose "pay online now" — we redirect them to Sumit
 * with the order amount and contact details pre-filled in the query string.
 * Quote-based items still fall back to the phone-payment flow.
 */
const SUMIT_PAYMENT_URL =
  process.env.NEXT_PUBLIC_SUMIT_PAYMENT_URL ||
  "https://pay.sumit.co.il/w7pfxb/waf7oo/c/payment/";

type PaymentMethod = "phone" | "online";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, hasUnpricedItems, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Default to online payment when available AND all items are priced;
  // otherwise fall back to phone payment.
  const canPayOnline = !!SUMIT_PAYMENT_URL && !hasUnpricedItems && totalPrice > 0;
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    canPayOnline ? "online" : "phone"
  );

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
          paymentMethod,
        }),
      });

      if (!res.ok) {
        throw new Error("send failed");
      }

      // If the customer chose online payment AND Sumit is configured, ask our
      // server to create a Sumit payment session via the beginredirect API.
      // The server returns a one-time payment URL with the exact amount, and
      // we send the browser there. This avoids the URL-query-param guessing
      // game and gives Sumit a proper itemized record per order.
      if (paymentMethod === "online" && canPayOnline) {
        const orderRes = await res.json().catch(() => ({}));
        const orderId = orderRes.orderId || `ORD-${Date.now()}`;

        try {
          const payRes = await fetch("/api/sumit-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: totalPrice,
              orderId,
              customer: {
                name: form.name,
                phone: form.phone,
                email: form.email,
                address: form.address,
                city: form.city,
              },
              successUrl: `${window.location.origin}/order/success`,
              failureUrl: `${window.location.origin}/checkout`,
            }),
          });

          const payData = await payRes.json();
          if (!payRes.ok || !payData.ok || !payData.paymentUrl) {
            console.error("Sumit payment session failed:", payData);
            // Fall back to the direct URL with the yellow notice telling the
            // customer the amount to enter manually.
            const fallbackParams = new URLSearchParams();
            fallbackParams.set("amount", String(totalPrice));
            fallbackParams.set("name", form.name);
            if (form.email) fallbackParams.set("email", form.email);
            if (form.phone) fallbackParams.set("phone", form.phone);
            const separator = SUMIT_PAYMENT_URL.includes("?") ? "&" : "?";
            clear();
            window.location.href = `${SUMIT_PAYMENT_URL}${separator}${fallbackParams.toString()}`;
            return;
          }

          clear();
          window.location.href = payData.paymentUrl;
          return;
        } catch (err) {
          console.error("Sumit session request failed:", err);
          // Same fallback as above.
          const fallbackParams = new URLSearchParams();
          fallbackParams.set("amount", String(totalPrice));
          fallbackParams.set("name", form.name);
          if (form.email) fallbackParams.set("email", form.email);
          if (form.phone) fallbackParams.set("phone", form.phone);
          const separator = SUMIT_PAYMENT_URL.includes("?") ? "&" : "?";
          clear();
          window.location.href = `${SUMIT_PAYMENT_URL}${separator}${fallbackParams.toString()}`;
          return;
        }
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

            {/* Payment method selector — shown only when online payment is possible */}
            {canPayOnline && (
              <fieldset className="border border-cream-dark rounded-lg p-4">
                <legend className="px-2 text-sm font-semibold text-brown">
                  בחר אופן תשלום
                </legend>
                <div className="space-y-2 mt-2">
                  <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-cream/50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={paymentMethod === "online"}
                      onChange={() => setPaymentMethod("online")}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-brown">
                        💳 תשלום מאובטח באשראי אונליין
                      </p>
                      <p className="text-xs text-brown/65">
                        חיוב מיידי באתר מאובטח של Sumit. תקבלו חשבונית במייל.
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-cream/50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="phone"
                      checked={paymentMethod === "phone"}
                      onChange={() => setPaymentMethod("phone")}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-brown">
                        📞 חיוב טלפוני
                      </p>
                      <p className="text-xs text-brown/65">
                        נחזור אליכם תוך יום עסקים ונחייב את הכרטיס בשיחה טלפונית.
                      </p>
                    </div>
                  </label>
                </div>
              </fieldset>
            )}

            <div className="bg-cream rounded-lg p-4 text-sm text-brown/75">
              <p className="font-semibold text-brown mb-1">איך זה עובד?</p>
              {paymentMethod === "online" ? (
                <ol className="list-decimal list-inside space-y-1">
                  <li>תלחצו על &quot;שלם עכשיו&quot; ותועברו לדף תשלום מאובטח</li>
                  <li>תמלאו את פרטי כרטיס האשראי</li>
                  <li>תקבלו חשבונית מס במייל</li>
                  <li>נשלח את ההזמנה לכתובת שלכם תוך 48 שעות</li>
                </ol>
              ) : (
                <ol className="list-decimal list-inside space-y-1">
                  <li>תשלחו את ההזמנה (ללא חיוב בכרטיס אשראי)</li>
                  <li>נחזור אליכם תוך יום עסקים לאישור</li>
                  <li>נחייב את הכרטיס שלכם בשיחה טלפונית מאובטחת</li>
                  <li>נשלח את ההזמנה לכתובת שלכם</li>
                </ol>
              )}
            </div>

            {/* Reminder for online payments — in case the amount doesn't auto-fill on Sumit */}
            {paymentMethod === "online" && totalPrice > 0 && (
              <div className="bg-amber-50 border-r-4 border-amber-400 rounded-lg p-4 text-sm">
                <p className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                  🔔 שימו לב לפני התשלום
                </p>
                <p className="text-amber-900">
                  הסכום לתשלום הוא{" "}
                  <strong className="text-base">
                    {totalPrice.toLocaleString("he-IL")} ש&quot;ח
                  </strong>
                  . בעמוד התשלום של Sumit, אנא וודאו שהסכום שמופיע הוא{" "}
                  <strong>{totalPrice.toLocaleString("he-IL")} ש&quot;ח</strong>.
                  אם השדה ריק — הזינו את הסכום ידנית.
                </p>
              </div>
            )}

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
              {submitting
                ? "שולח..."
                : paymentMethod === "online"
                  ? `שלם עכשיו ${totalPrice.toLocaleString("he-IL")} ש"ח ←`
                  : "שלח הזמנה"}
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
                <span className="font-bold text-brown">{'סה"כ:'}</span>
                <span className="text-2xl font-bold text-gold">
                  {`${totalPrice.toLocaleString("he-IL")} ש"ח`}
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
