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
