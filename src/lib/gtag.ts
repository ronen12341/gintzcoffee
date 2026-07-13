// Google tag IDs for גינץ פתרונות קפה
export const GA_MEASUREMENT_ID = "G-HR9MP6ENEP"; // GA4
export const GOOGLE_ADS_ID = "AW-766413183"; // Google Ads

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
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
