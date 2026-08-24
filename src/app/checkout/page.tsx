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

type DeliveryMethod = "delivery" | "pickup";

/** Free shipping at or above this priced-subtotal (NIS); below it costs SHIPPING_FEE. */
const FREE_SHIPPING_THRESHOLD = 350;
const SHIPPING_FEE = 40;

/** Israeli law requires a customer ID (ת.ז/ח.פ) on tax invoices at or above this amount (NIS). */
const TAX_ID_REQUIRED_THRESHOLD = 5000;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, hasUnpricedItems, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Delivery vs. self-pickup (by prior arrangement). Default to delivery.
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("delivery");

  // Shipping fee: only for delivery, only when there is a priced subtotal,
  // and only below the free-shipping threshold. Pickup is always free.
  const shippingFee =
    deliveryMethod === "delivery" &&
    totalPrice > 0 &&
    totalPrice < FREE_SHIPPING_THRESHOLD
      ? SHIPPING_FEE
      : 0;
  const grandTotal = totalPrice + shippingFee;

  // Israeli law only requires customer ID on the invoice above the threshold —
  // below it we don't want to force a government-ID field on small consumer
  // purchases (e.g. a bag of beans), since that's a known checkout blocker.
  const taxIdRequired = grandTotal >= TAX_ID_REQUIRED_THRESHOLD;

  // Online card payment via Sumit is the only payment method. It's available
  // when Sumit is configured, all items are priced, and there's an amount to
  // charge. (Quote-based items with no price are submitted as a request and we
  // contact the customer — there is no phone credit-card billing option.)
  const canPayOnline = !!SUMIT_PAYMENT_URL && !hasUnpricedItems && totalPrice > 0;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    taxId: "",
    invoiceName: "",
    address: "",
    city: "",
    notes: "",
    botcheck: "",
  });

  if (items.length === 0 && !submitting) {
    return (
      <section className="py-20 bg-cream min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-brown mb-3">הסל ריק</h1>
          <p className="text-brown/65 mb-6">
            הוסיפו פריטים לסל לפני השלמת ההזמנה.
          </p>
          <Link href="/machines" className="btn btn-soft-secondary">
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

    // Honeypot — real visitors never see or fill this field, so a filled-in
    // value means a bot is driving the form. Pretend nothing happened; the
    // server-side check in /api/order is the one that actually matters,
    // since a direct API POST skips this form entirely.
    if (form.botcheck.trim()) {
      return;
    }

    if (!form.name.trim() || !form.phone.trim()) {
      setError("נא למלא שם וטלפון.");
      return;
    }
    if (!form.email.trim()) {
      setError("נא למלא כתובת אימייל.");
      return;
    }
    if (taxIdRequired && !form.taxId.trim()) {
      setError('נא למלא ח.פ או ת.ז (חובה בחוק בהזמנות מעל 5,000 ש"ח).');
      return;
    }
    // Basic 9-digit check for Israeli ID numbers (ID or company tax ID) —
    // only enforced when the field is required or the customer chose to fill it in.
    if (taxIdRequired || form.taxId.trim()) {
      const digitsOnly = form.taxId.replace(/\D/g, "");
      if (digitsOnly.length !== 9) {
        setError("ח.פ או ת.ז חייבים להכיל 9 ספרות.");
        return;
      }
    }
    if (deliveryMethod === "delivery" && (!form.address.trim() || !form.city.trim())) {
      setError("נא למלא כתובת ועיר למשלוח, או לבחור באיסוף עצמי.");
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
          paymentMethod: canPayOnline ? "online" : "phone",
          deliveryMethod,
          shippingFee,
          grandTotal,
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
      if (canPayOnline) {
        const orderRes = await res.json().catch(() => ({}));
        const orderId = orderRes.orderId || `ORD-${Date.now()}`;

        try {
          const payRes = await fetch("/api/sumit-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: grandTotal,
              shippingFee,
              items: items.map((i) => ({
                id: i.id,
                category: i.category,
                name: i.name,
                qty: i.qty,
                priceNumeric: i.priceNumeric ?? 0,
              })),
              orderId,
              customer: {
                name: form.name,
                phone: form.phone,
                email: form.email,
                address: form.address,
                city: form.city,
                taxId: form.taxId,
                invoiceName: form.invoiceName,
              },
              successUrl: `${window.location.origin}/order/success?paid=1&amount=${grandTotal}`,
              failureUrl: `${window.location.origin}/checkout`,
            }),
          });

          const payData = await payRes.json();
          if (!payRes.ok || !payData.ok || !payData.paymentUrl) {
            console.error("Sumit payment session failed:", payData);
            // Fall back to the direct URL. Sumit's generic payment link does
            // not reliably pre-fill the amount field from the query string,
            // so warn the customer explicitly before sending them there.
            const fallbackParams = new URLSearchParams();
            fallbackParams.set("amount", String(grandTotal));
            fallbackParams.set("name", form.name);
            if (form.email) fallbackParams.set("email", form.email);
            if (form.phone) fallbackParams.set("phone", form.phone);
            const separator = SUMIT_PAYMENT_URL.includes("?") ? "&" : "?";
            window.alert(
              `לא הצלחנו ליצור עמוד תשלום מותאם אוטומטית. תועברו לדף תשלום כללי - אנא הזינו ידנית סכום של ${grandTotal.toLocaleString("he-IL")} ש"ח בשדה "סכום לתשלום".`
            );
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
          fallbackParams.set("amount", String(grandTotal));
          fallbackParams.set("name", form.name);
          if (form.email) fallbackParams.set("email", form.email);
          if (form.phone) fallbackParams.set("phone", form.phone);
          const separator = SUMIT_PAYMENT_URL.includes("?") ? "&" : "?";
          window.alert(
            `לא הצלחנו ליצור עמוד תשלום מותאם אוטומטית. תועברו לדף תשלום כללי - אנא הזינו ידנית סכום של ${grandTotal.toLocaleString("he-IL")} ש"ח בשדה "סכום לתשלום".`
          );
          clear();
          window.location.href = `${SUMIT_PAYMENT_URL}${separator}${fallbackParams.toString()}`;
          return;
        }
      }

      clear();
      router.push(`/order/success?amount=${grandTotal}`);
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
          מלאו את הפרטים ותשלמו באשראי בדף מאובטח. תקבלו חשבונית מס במייל.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-4"
            noValidate
          >
            <input
              type="text"
              name="botcheck"
              value={form.botcheck}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
            />
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
                אימייל *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                dir="ltr"
                autoComplete="email"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="taxId" className="block text-sm font-medium text-brown mb-1">
                  {taxIdRequired ? "ח.פ / ת.ז *" : "ח.פ / ת.ז (לא חובה מתחת ל-5,000 ש\"ח)"}
                </label>
                <input
                  id="taxId"
                  name="taxId"
                  type="text"
                  inputMode="numeric"
                  value={form.taxId}
                  onChange={handleChange}
                  required={taxIdRequired}
                  pattern="[0-9]{9}"
                  maxLength={9}
                  className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  dir="ltr"
                  placeholder="9 ספרות"
                />
              </div>
              <div>
                <label htmlFor="invoiceName" className="block text-sm font-medium text-brown mb-1">
                  שם לחשבונית (אם שונה)
                </label>
                <input
                  id="invoiceName"
                  name="invoiceName"
                  type="text"
                  value={form.invoiceName}
                  onChange={handleChange}
                  className="w-full border border-cream-dark rounded-lg px-3 py-2 text-brown focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="לא חובה — אם החשבונית צריכה שם אחר"
                />
              </div>
            </div>

            {/* Delivery method selector */}
            <fieldset className="border border-cream-dark rounded-lg p-4">
              <legend className="px-2 text-sm font-semibold text-brown">
                אופן קבלת ההזמנה
              </legend>
              <div className="space-y-2 mt-2">
                <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-cream/50">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={deliveryMethod === "delivery"}
                    onChange={() => setDeliveryMethod("delivery")}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-semibold text-brown">🚚 משלוח עד הבית</p>
                    <p className="text-xs text-brown/65">
                      משלוח חינם בקנייה מעל {FREE_SHIPPING_THRESHOLD} ש&quot;ח. מתחת לסכום זה — דמי משלוח {SHIPPING_FEE} ש&quot;ח.
                    </p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-cream/50">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={deliveryMethod === "pickup"}
                    onChange={() => setDeliveryMethod("pickup")}
                    className="mt-1"
                  />
                  <div>
                    <p className="font-semibold text-brown">🏪 איסוף עצמי בתיאום מראש</p>
                    <p className="text-xs text-brown/65">
                      ללא דמי משלוח. נתאם איתכם טלפונית מועד נוח לאיסוף.
                    </p>
                  </div>
                </label>
              </div>
            </fieldset>

            {deliveryMethod === "delivery" ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-brown mb-1">
                    כתובת למשלוח *
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
                    עיר *
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
            ) : (
              <div className="bg-cream rounded-lg p-3 text-sm text-brown/75">
                בחרתם באיסוף עצמי — נחזור אליכם טלפונית לתיאום מועד נוח לאיסוף ההזמנה.
              </div>
            )}

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
              {canPayOnline ? (
                <ol className="list-decimal list-inside space-y-1">
                  <li>תלחצו על &quot;שלם עכשיו&quot; ותועברו לדף תשלום מאובטח</li>
                  <li>תמלאו את פרטי כרטיס האשראי</li>
                  <li>תקבלו חשבונית מס במייל</li>
                  <li>
                    {deliveryMethod === "pickup"
                      ? "נתאם איתכם טלפונית מועד לאיסוף עצמי"
                      : "נשלח את ההזמנה לכתובת שלכם עד 7 ימי עסקים"}
                  </li>
                </ol>
              ) : (
                <ol className="list-decimal list-inside space-y-1">
                  <li>תשלחו את הבקשה</li>
                  <li>נחזור אליכם תוך יום עסקים עם הצעת מחיר</li>
                  <li>
                    {deliveryMethod === "pickup"
                      ? "לאחר אישור נתאם איתכם מועד לאיסוף עצמי"
                      : "לאחר אישור נשלח את ההזמנה לכתובת שלכם"}
                  </li>
                </ol>
              )}
            </div>


            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            <button type="submit" disabled={submitting} className="btn btn-primary btn-block btn-lg">
              {submitting
                ? "שולח..."
                : canPayOnline
                  ? `שלם עכשיו ${grandTotal.toLocaleString("he-IL")} ש"ח ←`
                  : "שלח בקשה"}
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
              <div className="border-t border-cream-dark pt-3 space-y-2">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="text-brown/75">סכום ביניים</span>
                  <span className="text-brown font-medium">
                    {`${totalPrice.toLocaleString("he-IL")} ש"ח`}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-sm">
                  <span className="text-brown/75">
                    {deliveryMethod === "pickup" ? "איסוף עצמי" : "משלוח"}
                  </span>
                  <span className="text-brown font-medium">
                    {shippingFee > 0
                      ? `${shippingFee.toLocaleString("he-IL")} ש"ח`
                      : "חינם"}
                  </span>
                </div>
                {deliveryMethod === "delivery" &&
                  shippingFee > 0 &&
                  totalPrice < FREE_SHIPPING_THRESHOLD && (
                    <p className="text-xs text-brown/55 bg-cream p-2 rounded">
                      הוסיפו עוד {(FREE_SHIPPING_THRESHOLD - totalPrice).toLocaleString("he-IL")} ש&quot;ח לקנייה כדי לקבל משלוח חינם.
                    </p>
                  )}
                <div className="border-t-2 border-brown pt-2 flex justify-between items-baseline">
                  <span className="font-bold text-brown">{'סה"כ לתשלום:'}</span>
                  <span className="text-2xl font-bold text-gold">
                    {`${grandTotal.toLocaleString("he-IL")} ש"ח`}
                  </span>
                </div>
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
