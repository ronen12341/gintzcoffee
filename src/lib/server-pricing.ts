import { coffeeMachines, coffeeBeans, usedMachines } from "@/data/products";

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
    case "bean":
      return coffeeBeans.find((b) => b.id === id)?.priceNumeric;
    case "machine":
      return coffeeMachines.find((m) => m.id === id)?.priceNumeric;
    case "used":
      return usedMachines.find((m) => m.id === id)?.priceNumeric;
    default:
      return undefined;
  }
}
