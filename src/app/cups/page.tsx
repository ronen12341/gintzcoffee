import { permanentRedirect } from "next/navigation";

// Branded cups are now sold on our separate site, gilcups.com.
// Keep this route as a permanent redirect so any old links/bookmarks still work
// and no quote-only cup items can enter the gintz.co.il cart.
export default function CupsRedirect({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Forward the query string — old redirects/bookmarks/ads pointing at /cups
  // can still carry ?gclid=... or utm_* params, and dropping them here loses
  // ad attribution the moment the visitor lands on gilcups.com.
  const qs = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") qs.set(key, value);
    else if (Array.isArray(value)) value.forEach((v) => qs.append(key, v));
  }
  const query = qs.toString();
  permanentRedirect(
    query ? `https://www.gilcups.com?${query}` : "https://www.gilcups.com"
  );
}
