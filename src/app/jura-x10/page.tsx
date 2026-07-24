import { permanentRedirect } from "next/navigation";

// The JURA X10 landing page was renamed to /lp (our internal landing page).
// Keep this route as a permanent redirect so any old links still work.
export default function JuraX10Redirect() {
  permanentRedirect("/lp");
}
