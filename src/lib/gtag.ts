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

// Google Ads conversion "send_to" labels (from Google Ads → Goals → Conversions)
export const ADS_CONVERSION = {
  // "ליד מכונות קפה" — office coffee machines lead (business-solutions)
  machines: "AW-766413183/guAjCMn7yqcBEP-Suu0C",
  // "ליד כוסות הגעה לדף תודה" — printed cups lead
  cups: "AW-766413183/57OGCOyn0KcBEP-Suu0C",
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
