import { redirect } from "next/navigation";

// Branded cups are now sold on our separate site, aspagil.com.
// Keep this route as a permanent redirect so any old links/bookmarks still work
// and no quote-only cup items can enter the gintz.co.il cart.
export default function CupsRedirect() {
  redirect("https://www.aspagil.com");
}
