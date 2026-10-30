import { allCoffeeMachines } from "@/data/products";

/** Current site price of a machine, e.g. "6,300 ש״ח" — read from products-data.json
 *  so blog posts never show a stale hard-coded price. */
export function machinePrice(id: string): string {
  const m = allCoffeeMachines.find((x) => x.id === id);
  return m?.price ? m.price.replace(/ש"ח/, "ש״ח") : "";
}
