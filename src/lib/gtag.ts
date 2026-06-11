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

/**
 * Fires a lead conversion event when a contact/quote form is submitted
 * successfully. Sends a GA4 `generate_lead` event (which feeds the linked
 * Google Ads conversions) so Google Ads can attribute leads to campaigns.
 */
export function trackLead(formType: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", {
    form_type: formType,
    currency: "ILS",
  });
}
