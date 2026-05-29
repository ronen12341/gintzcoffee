import data from "./products-data.json";

export interface Machine {
  id: string;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
  image?: string;
  /** Display price string like "11,200 ש\"ח" */
  price?: string;
  /** Numeric price in NIS — used for cart totals calculation */
  priceNumeric?: number;
  /** Multi-paragraph extended description shown on the detail page. Split on
   *  blank lines for paragraph breaks. Falls back to `description` if missing. */
  longDescription?: string;
  /** Additional images for the detail-page gallery (besides the main `image`). */
  images?: string[];
  /** Optional spec table shown on the detail page. */
  specs?: { label: string; value: string }[];
  /** When true, the product is kept in data but hidden from all public pages
   *  (listings, featured, detail page). Useful for out-of-stock or unreleased
   *  items the owner wants to bring back later without re-typing them. */
  hidden?: boolean;
}

export interface Bean {
  id: string;
  name: string;
  description: string;
  origin: string;
  roast: string;
  featured?: boolean;
  image?: string;
  price?: string;
  priceNumeric?: number;
  hidden?: boolean;
}

export interface CupCategory {
  id: string;
  name: string;
  description: string;
  minQuantity: number;
  image?: string;
  price?: string;
  priceNumeric?: number;
  hidden?: boolean;
}

export interface UsedMachine {
  id: string;
  name: string;
  description: string;
  condition: string;
  image?: string;
  /** Our selling price (display string) */
  price?: string;
  /** Numeric price in NIS for cart totals */
  priceNumeric?: number;
  /** Original / new-machine price — shown with strike-through */
  originalPrice?: string;
  hidden?: boolean;
}

// Data lives in products-data.json so it can be edited via the admin tool
// (`admin.html` at the project root). Edit the JSON, then run publish.bat.
//
// The public-facing exports automatically filter out items marked `hidden:true`
// — the owner can take a product off the site by toggling that flag in the
// admin without losing the entry. The raw `allXxx` arrays remain available
// for internal use that needs every entry regardless of visibility.
const allCoffeeMachines = data.coffeeMachines as Machine[];
const allCoffeeBeans = data.coffeeBeans as Bean[];
const allCupCategories = data.cupCategories as CupCategory[];
const allUsedMachines = data.usedMachines as UsedMachine[];

export const coffeeMachines: Machine[] = allCoffeeMachines.filter((m) => !m.hidden);
export const coffeeBeans: Bean[] = allCoffeeBeans.filter((b) => !b.hidden);
export const cupCategories: CupCategory[] = allCupCategories.filter((c) => !c.hidden);
export const usedMachines: UsedMachine[] = allUsedMachines.filter((m) => !m.hidden);

export const quantityOptions = [
  500, 1000, 2000, 3000, 5000, 10000, 20000, 50000, 100000,
];
