// Reads the Google Ads click ID captured by the inline script in layout.tsx
// (src/app/layout.tsx, id="gclid-capture") so it can be attached to order
// and lead submissions — the only way to link a specific email/order back to
// the ad click that produced it, since Google Ads reporting never exposes
// who clicked.
const STORAGE_KEY = "gintz-gclid";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // Google Ads' own click-through conversion window ceiling

export function getGclid(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const { value, ts } = JSON.parse(raw) as { value?: string; ts?: number };
    if (!value || typeof ts !== "number" || Date.now() - ts > MAX_AGE_MS) return undefined;
    return value;
  } catch {
    return undefined;
  }
}
