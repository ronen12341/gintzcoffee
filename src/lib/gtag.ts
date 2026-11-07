// Google tag IDs for גינץ פתרונות קפה
export const GA_MEASUREMENT_ID = "G-HR9MP6ENEP"; // GA4 (original property)
export const GA_MEASUREMENT_ID_SECONDARY = "G-95ELQCJ4EQ"; // GA4 (second property, added in parallel)
export const GOOGLE_ADS_ID = "AW-766413183"; // Google Ads

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    fbq?: GtagFn;
    dataLayer?: unknown[];
  }
}

type TrackedItem = { id: string; name: string; category: string; priceNumeric?: number; qty: number };

function toGaItems(items: TrackedItem[]) {
  return items.map((i) => ({
    item_id: i.id,
    item_name: i.name,
    item_category: i.category,
    price: i.priceNumeric,
    quantity: i.qty,
  }));
}

function sumValue(items: TrackedItem[]) {
  return items.reduce((sum, i) => sum + (i.priceNumeric ?? 0) * i.qty, 0);
}

/** Funnel step 1 — GA4 `add_to_cart` + Meta Pixel `AddToCart`. */
export function trackAddToCart(item: TrackedItem): void {
  if (typeof window === "undefined") return;
  const value = sumValue([item]);
  window.gtag?.("event", "add_to_cart", { currency: "ILS", value, items: toGaItems([item]) });
  window.fbq?.("track", "AddToCart", {
    content_ids: [item.id],
    content_name: item.name,
    content_type: "product",
    value,
    currency: "ILS",
  });
}

/** Funnel step 2 — GA4 `begin_checkout` + Meta Pixel `InitiateCheckout`. */
export function trackBeginCheckout(items: TrackedItem[]): void {
  if (typeof window === "undefined" || items.length === 0) return;
  const value = sumValue(items);
  window.gtag?.("event", "begin_checkout", { currency: "ILS", value, items: toGaItems(items) });
  window.fbq?.("track", "InitiateCheckout", {
    content_ids: items.map((i) => i.id),
    num_items: items.reduce((n, i) => n + i.qty, 0),
    value,
    currency: "ILS",
  });
}

/** Funnel step 0 — GA4 `view_item` + Meta Pixel `ViewContent` (product page view). */
export function trackViewContent(item: { id: string; name: string; category: string; priceNumeric?: number }): void {
  if (typeof window === "undefined") return;
  const value = item.priceNumeric;
  window.gtag?.("event", "view_item", {
    currency: "ILS",
    value,
    items: [{ item_id: item.id, item_name: item.name, item_category: item.category, price: value, quantity: 1 }],
  });
  window.fbq?.("track", "ViewContent", {
    content_ids: [item.id],
    content_name: item.name,
    content_category: item.category,
    content_type: "product",
    value,
    currency: "ILS",
  });
}

// Google Ads conversion "send_to" labels (from Google Ads → Goals → Conversions)
export const ADS_CONVERSION = {
  // "ליד מכונות קפה" — office coffee machines lead (business-solutions)
  machines: "AW-766413183/guAjCMn7yqcBEP-Suu0C",
  // "ליד כוסות הגעה לדף תודה" — printed cups lead
  cups: "AW-766413183/57OGCOyn0KcBEP-Suu0C",
  // "רכישה באתר גינץ" — website order placed. Fill in the send_to label from
  // Google Ads → Goals → Conversions once the action is created; until then
  // only GA4 + Meta fire.
  purchase: "AW-766413183/FmGLCJ2hqYkdEP-Suu0C",
} as const;

/**
 * Fires a lead conversion when a contact/quote form is submitted successfully.
 * Sends BOTH:
 *  1. the GA4 `generate_lead` event (for analytics), and
 *  2. the direct Google Ads `conversion` event with the correct send_to label,
 *     which is what Google Ads actually counts as a conversion.
 *
 * Pass the matching conversion label so the right conversion action is credited.
 * Defaults to the machines (coffee) lead.
 */
export function trackLead(
  formType: string,
  sendTo: string = ADS_CONVERSION.machines,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  // GA4 event (analytics)
  window.gtag("event", "generate_lead", {
    form_type: formType,
    currency: "ILS",
  });
  // Google Ads conversion (what Google Ads counts)
  window.gtag("event", "conversion", {
    send_to: sendTo,
  });
}

type OrderCustomer = { name?: string; phone?: string; email?: string; city?: string };

const META_PIXEL_ID = "2239208016131254";
const LAST_ORDER_KEY = "gintz-last-order-ts";
const REORDER_WINDOW_MS = 15 * 60 * 1000;

/** Israeli phone → E.164 digits (972...) for Meta advanced matching. */
function toE164(raw?: string): string | undefined {
  const d = (raw ?? "").replace(/\D/g, "");
  if (!d) return undefined;
  if (d.startsWith("972")) return d;
  if (d.startsWith("0")) return "972" + d.slice(1);
  return d;
}

/** Test orders (name contains "בדיקה"/"test") are never reported as purchases. */
function isTestOrder(c?: OrderCustomer): boolean {
  return /בדיקה|test/i.test(c?.name ?? "");
}

/**
 * Fires the purchase conversion the moment an order is PLACED (the /api/order
 * call succeeded) — for every order, whether paid online via Sumit or by
 * phone. Deliberately not tied to payment: the business wants every received
 * order counted, and customers who pay at Sumit often never return to
 * /order/success, which previously lost the conversion.
 * orderId is sent as transaction_id / eventID so a double fire is deduped.
 *
 * Not counted: test orders, and a second order from the same browser within
 * 15 minutes (a customer correcting and resubmitting their cart — seen on
 * 17.10.26, which the pixel had counted as two purchases).
 *
 * The customer's email/phone/name/city are passed to the Meta Pixel as
 * advanced-matching data (the pixel SHA-256 hashes them in the browser before
 * sending), so Meta can match more purchases to the people who saw the ads.
 */
export function trackOrderPlaced(
  orderId: string,
  value: number,
  items: TrackedItem[],
  customer?: OrderCustomer,
): void {
  if (typeof window === "undefined") return;
  if (isTestOrder(customer)) return;
  try {
    const last = Number(localStorage.getItem(LAST_ORDER_KEY) || 0);
    localStorage.setItem(LAST_ORDER_KEY, String(Date.now()));
    if (last && Date.now() - last < REORDER_WINDOW_MS) return;
  } catch {
    /* storage unavailable — count the order */
  }

  const v = Number.isFinite(value) && value > 0 ? value : undefined;
  window.gtag?.("event", "purchase", {
    transaction_id: orderId,
    currency: "ILS",
    value: v,
    items: toGaItems(items),
    transport_type: "beacon",
  });
  if (ADS_CONVERSION.purchase) {
    window.gtag?.("event", "conversion", {
      send_to: ADS_CONVERSION.purchase,
      transaction_id: orderId,
      currency: "ILS",
      value: v,
      transport_type: "beacon",
    });
  }

  if (window.fbq) {
    const nameParts = (customer?.name ?? "").trim().split(/\s+/).filter(Boolean);
    const userData: Record<string, string> = { country: "il" };
    if (customer?.email?.trim()) userData.em = customer.email.trim().toLowerCase();
    const ph = toE164(customer?.phone);
    if (ph) userData.ph = ph;
    if (nameParts[0]) userData.fn = nameParts[0];
    if (nameParts.length > 1) userData.ln = nameParts.slice(1).join(" ");
    if (customer?.city?.trim()) userData.ct = customer.city.trim();
    // Re-init with the same pixel ID attaches the user data to this and later events.
    window.fbq("init", META_PIXEL_ID, userData);
    window.fbq(
      "track",
      "Purchase",
      {
        value: v,
        currency: "ILS",
        content_type: "product",
        content_ids: items.map((i) => i.id),
        contents: items.map((i) => ({ id: i.id, quantity: i.qty, item_price: i.priceNumeric })),
        num_items: items.reduce((n, i) => n + i.qty, 0),
      },
      { eventID: orderId },
    );
  }
}
