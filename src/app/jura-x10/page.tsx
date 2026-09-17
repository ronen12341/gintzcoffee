import { permanentRedirect } from "next/navigation";

// The JURA X10 landing page was renamed to /lp (our internal landing page).
// Keep this route as a permanent redirect so any old links still work.
export default function JuraX10Redirect({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Forward the query string — an ad group's Final URL can still point here,
  // and dropping ?gclid=... means the landing page never captures the click
  // id, so the eventual order/lead can't be attributed back to that ad spend.
  const qs = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") qs.set(key, value);
    else if (Array.isArray(value)) value.forEach((v) => qs.append(key, v));
  }
  const query = qs.toString();
  permanentRedirect(query ? `/lp?${query}` : "/lp");
}
