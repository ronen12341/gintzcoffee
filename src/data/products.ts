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
}

export interface CupCategory {
  id: string;
  name: string;
  description: string;
  minQuantity: number;
  image?: string;
  price?: string;
  priceNumeric?: number;
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
}

// Data lives in products-data.json so it can be edited via the admin tool
// (`admin.html` at the project root). Edit the JSON, then run publish.bat.
export const coffeeMachines: Machine[] = data.coffeeMachines as Machine[];
export const coffeeBeans: Bean[] = data.coffeeBeans as Bean[];
export const cupCategories: CupCategory[] = data.cupCategories as CupCategory[];
export const usedMachines: UsedMachine[] = data.usedMachines as UsedMachine[];

export const quantityOptions = [
  500, 1000, 2000, 3000, 5000, 10000, 20000, 50000, 100000,
];
