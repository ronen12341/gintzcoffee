import { coffeeMachines, coffeeBeans, usedMachines } from "@/data/products";

/** Flat price (ש"ח) for the 250g bean variant, regardless of bean or grind.
 *  Single source of truth — imported by BeanPurchase.tsx for display too. */
export const BEAN_250G_PRICE = 45;

/**
 * Authoritative server-side price lookup. The cart's `priceNumeric` is only a
 * snapshot cached in the customer's browser (localStorage, no expiry) — if a
 * price changes after a customer adds an item to their cart, the stale value
 * would otherwise flow straight into the Sumit charge and the order email.
 * Worse, since it travels as plain JSON in the request body, a client could
 * edit it directly to pay any amount. Anything that touches money must look
 * the price up here instead of trusting the request.
 */
/** Mirrors checkout/page.tsx's FREE_SHIPPING_THRESHOLD / SHIPPING_FEE. Keep in sync. */
const FREE_SHIPPING_THRESHOLD = 400;
const SHIPPING_FEE = 60;

/**
 * Server-side mirror of checkout/page.tsx's shipping-fee calculation.
 * Like getCatalogPrice, this must be re-derived here rather than trusting
 * the client-supplied shippingFee, which travels as plain JSON and could be
 * edited directly (e.g. sending shippingFee: 0 on a sub-threshold order).
 * `itemsTotal` must be the server re-priced total (getCatalogPrice sum), not
 * the client-supplied totalPrice.
 */
export function computeShippingFee(
  deliveryMethod: string | undefined,
  itemsTotal: number
): number {
  return deliveryMethod === "delivery" &&
    itemsTotal > 0 &&
    itemsTotal < FREE_SHIPPING_THRESHOLD
    ? SHIPPING_FEE
    : 0;
}

export function getCatalogPrice(category: string, id: string): number | undefined {
  switch (category) {
    case "bean": {
      // BeanPurchase.tsx appends a variant suffix to the cart item id:
      // "<beanId>::1kg" (full kg, priced from the bean's own priceNumeric) or
      // "<beanId>::250g-whole" / "::250g-ground" (flat BEAN_250G_PRICE).
      const [beanId, variant] = id.split("::");
      const bean = coffeeBeans.find((b) => b.id === beanId);
      if (!bean) return undefined;
      if (variant === "1kg") return bean.priceNumeric;
      if (variant?.startsWith("250g-")) return BEAN_250G_PRICE;
      return undefined;
    }
    case "machine":
      return coffeeMachines.find((m) => m.id === id)?.priceNumeric;
    case "used":
      return usedMachines.find((m) => m.id === id)?.priceNumeric;
    default:
      return undefined;
  }
}
