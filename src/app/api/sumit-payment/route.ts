import { NextRequest, NextResponse } from "next/server";
import { getCatalogPrice, computeShippingFee } from "@/lib/server-pricing";

/**
 * Sumit credentials. The API key is sensitive and must never be exposed to the
 * client or committed to source control — this repo is public on GitHub, so
 * it must come ONLY from the SUMIT_API_KEY environment variable (set in
 * Vercel project settings). Do not add a hardcoded fallback here.
 */
const SUMIT_API_KEY = process.env.SUMIT_API_KEY;
const SUMIT_COMPANY_ID = Number(process.env.SUMIT_COMPANY_ID || "1947861983");

if (!SUMIT_API_KEY) {
  console.error("SUMIT_API_KEY environment variable is not set.");
}

/**
 * Sumit's "Begin redirect for transaction" endpoint at the billing/payments
 * layer (handles itemized orders + invoice generation, not raw card auth).
 * Per the public REST docs at app.sumit.co.il/developers/api.
 */
const SUMIT_BEGIN_REDIRECT_URL =
  "https://api.sumit.co.il/billing/payments/beginredirect/";

interface SumitPaymentRequest {
  /** Grand total to charge (products + shipping), VAT included. */
  amount: number;
  /** Shipping fee portion of `amount` (0 when free or self-pickup). This is
   *  only a client-side hint (used for the checkout page display) — the
   *  actual charge always recomputes it server-side via
   *  computeShippingFee(), see below. */
  shippingFee?: number;
  /** "delivery" = ship to address; "pickup" = self-pickup by prior
   *  arrangement (always free). Drives the server-side shipping-fee
   *  recomputation below. */
  deliveryMethod?: "delivery" | "pickup";
  /** Cart line items, itemized on the Sumit document (and eventually on the
   *  Hashavshevet invoice) instead of a single lump-sum line. `priceNumeric`
   *  here is only a client-side hint (used for the checkout page display) —
   *  the actual charge is always re-priced server-side from `id`+`category`
   *  via getCatalogPrice(), see below. */
  items: Array<{ id: string; category: string; name: string; qty: number; priceNumeric: number }>;
  orderId: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
    city?: string;
    zipCode?: string;
    /** Israeli company tax ID (ח.פ) or personal ID (ת.ז) — written to Sumit's
     *  Customer.CompanyNumber so it lands on the eventual tax receipt. */
    taxId?: string;
    /** Display name to use on the invoice if different from `name`. */
    invoiceName?: string;
  };
  successUrl: string;
  failureUrl: string;
}

interface SumitResponse {
  // Sumit returns Status as a numeric code (0 = success) — NOT a string like
  // "Success (0)" as the docs example suggested.
  Status: number | string;
  UserErrorMessage?: string | null;
  TechnicalErrorDetails?: string | null;
  Data?:
    | {
        URL?: string;
        Url?: string;
        RedirectURL?: string;
        PaymentURL?: string;
        PaymentPageURL?: string;
        [k: string]: unknown;
      }
    | string
    | null;
}

export async function POST(req: NextRequest) {
  if (!SUMIT_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "sumit_not_configured", message: "SUMIT_API_KEY is not set on the server." },
      { status: 500 }
    );
  }

  let body: SumitPaymentRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid json" },
      { status: 400 }
    );
  }

  if (
    !Array.isArray(body.items) ||
    body.items.length === 0 ||
    body.items.some((line) => !Number.isInteger(line.qty) || line.qty <= 0)
  ) {
    return NextResponse.json(
      { ok: false, error: "invalid_quantity", message: "כמות פריט לא תקינה." },
      { status: 400 }
    );
  }

  // Body shape per Sumit's beginredirect spec:
  //   { Customer, Items: [{ Item, Quantity, UnitPrice }], VATIncluded,
  //     RedirectURL, CancelRedirectURL, ExternalIdentifier, Credentials }
  // Prices are passed via Items[].UnitPrice (in NIS). VATIncluded=true tells
  // Sumit our amount already includes VAT — appropriate for Israeli B2C pricing
  // where the displayed price on the site is the final price.
  // Each cart line becomes its own Sumit item (instead of one lump-sum line)
  // so the document — and the eventual Hashavshevet invoice — itemizes by
  // product, plus an optional shipping line.

  // Re-price every line from the catalog — never trust the client-supplied
  // priceNumeric for an actual charge. A stale cart (price changed after the
  // item was added) or a directly-edited request body would otherwise let a
  // customer pay less (or more) than the real price. If any line's id/category
  // doesn't resolve to a known catalog price, refuse the whole charge rather
  // than silently falling back to whatever the client sent.
  const unresolvedLines: string[] = [];
  const items: Array<{
    Item: { Name: string; Description?: string };
    Quantity: number;
    UnitPrice: number;
    Description?: string;
  }> = (body.items || []).map((line) => {
    const catalogPrice = getCatalogPrice(line.category, line.id);
    if (catalogPrice === undefined) {
      unresolvedLines.push(`${line.name} (${line.category}/${line.id})`);
    }
    return {
      Item: {
        Name: line.name,
        Description: `הזמנה ${body.orderId}`,
      },
      Quantity: line.qty,
      UnitPrice: catalogPrice ?? 0,
      Description: `הזמנה ${body.orderId}`,
    };
  });

  if (unresolvedLines.length > 0) {
    console.error("sumit-payment: unresolved catalog price for line(s):", unresolvedLines);
    return NextResponse.json(
      {
        ok: false,
        error: "price_lookup_failed",
        message: "לא ניתן לאמת את המחיר עבור אחד או יותר מהפריטים בעגלה. רענן/י את העמוד ונסה/י שוב.",
      },
      { status: 400 }
    );
  }

  // Recomputed from the re-priced item total server-side rather than
  // trusting body.shippingFee, which is just a client-computed number that
  // travels as plain JSON (e.g. a request could send shippingFee: 0 on a
  // sub-threshold order).
  const itemsTotal = items.reduce((sum, i) => sum + i.UnitPrice * i.Quantity, 0);
  const shippingFee = computeShippingFee(body.deliveryMethod, itemsTotal);

  if (shippingFee > 0) {
    items.push({
      Item: {
        Name: "דמי משלוח",
        Description: `הזמנה ${body.orderId}`,
      },
      Quantity: 1,
      UnitPrice: shippingFee,
      Description: "דמי משלוח",
    });
  }

  const sumitBody = {
    Credentials: {
      CompanyID: SUMIT_COMPANY_ID,
      APIKey: SUMIT_API_KEY,
    },
    Customer: {
      // Invoice name takes precedence so the tax receipt carries the right
      // legal entity; the contact name is preserved in the order email.
      Name: body.customer.invoiceName?.trim() || body.customer.name,
      Phone: body.customer.phone || null,
      EmailAddress: body.customer.email || null,
      City: body.customer.city || null,
      Address: body.customer.address || null,
      ZipCode: body.customer.zipCode || null,
      CompanyNumber: body.customer.taxId || null,
      SearchMode: 0, // 0 = Automatic (matches existing or creates new)
    },
    Items: items,
    VATIncluded: true,
    RedirectURL: body.successUrl,
    CancelRedirectURL: body.failureUrl,
    ExternalIdentifier: body.orderId,
    // Finalized (not draft) so the transaction is included in Sumit's
    // "Export to Hashavshevet" feed, which only picks up documents that have
    // been moved to the books. UpdateCustomerOnSuccess stays false so Sumit
    // still doesn't email the customer directly — invoicing to the customer
    // continues to go through Ronen's own process.
    DraftDocument: false,
    UpdateCustomerOnSuccess: false,
  };

  try {
    const sumitRes = await fetch(SUMIT_BEGIN_REDIRECT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sumitBody),
    });

    const text = await sumitRes.text();
    let data: SumitResponse;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Sumit returned non-JSON response:", text);
      return NextResponse.json(
        {
          ok: false,
          error: "sumit_invalid_response",
          rawResponse: text.slice(0, 500),
        },
        { status: 502 }
      );
    }

    // Log the full Sumit response so we can inspect field names in Vercel logs.
    console.log("Sumit beginredirect response:", JSON.stringify(data));

    // Sumit success = Status code 0 (numeric). Anything else (or missing) is
    // a failure. Accept both numeric 0 and the legacy "Success" string form
    // in case the response shape ever flips.
    const isSuccess =
      data.Status === 0 ||
      (typeof data.Status === "string" &&
        data.Status.toLowerCase().startsWith("success"));

    if (!isSuccess) {
      return NextResponse.json(
        {
          ok: false,
          error: "sumit_error",
          message: data.UserErrorMessage || "Sumit rejected the request",
          technical: data.TechnicalErrorDetails,
          fullResponse: data,
        },
        { status: 502 }
      );
    }

    // Try to extract the redirect URL from common response shapes. Sumit may
    // return the URL as a plain string in Data, or nested under one of several
    // keys; we accept whichever shape appears.
    let paymentUrl: string | undefined;
    if (typeof data.Data === "string") {
      paymentUrl = data.Data;
    } else if (data.Data && typeof data.Data === "object") {
      paymentUrl =
        data.Data.URL ||
        data.Data.Url ||
        data.Data.RedirectURL ||
        data.Data.PaymentURL ||
        data.Data.PaymentPageURL;
    }

    if (!paymentUrl) {
      return NextResponse.json(
        {
          ok: false,
          error: "no_payment_url",
          message: "Sumit returned success but no payment URL was found.",
          fullResponse: data,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, paymentUrl });
  } catch (err) {
    console.error("Sumit beginredirect call failed:", err);
    return NextResponse.json(
      { ok: false, error: "network_error", message: String(err) },
      { status: 500 }
    );
  }
}
