import { NextRequest, NextResponse } from "next/server";

/**
 * Sumit credentials. The API key is sensitive and must never be exposed to the
 * client; this route runs on the server, so reading it here is safe.
 *
 * Hardcoded fallbacks are for convenience while bootstrapping the integration —
 * they should be moved to Vercel environment variables (SUMIT_API_KEY,
 * SUMIT_COMPANY_ID) and the fallbacks removed once verified working. After
 * deploying, ROTATE the API key in Sumit (the current one was shared in chat).
 */
const SUMIT_API_KEY =
  process.env.SUMIT_API_KEY || "2IQgqpoHESFTdBbeUKG5NiIEHD5NoIkp9x2b9UTEmD2xio9tA1";
const SUMIT_COMPANY_ID = Number(process.env.SUMIT_COMPANY_ID || "1947861983");

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
  /** Shipping fee portion of `amount` (0 when free or self-pickup). */
  shippingFee?: number;
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
  let body: SumitPaymentRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid json" },
      { status: 400 }
    );
  }

  // Body shape per Sumit's beginredirect spec:
  //   { Customer, Items: [{ Item, Quantity, UnitPrice }], VATIncluded,
  //     RedirectURL, CancelRedirectURL, ExternalIdentifier, Credentials }
  // Prices are passed via Items[].UnitPrice (in NIS). VATIncluded=true tells
  // Sumit our amount already includes VAT — appropriate for Israeli B2C pricing
  // where the displayed price on the site is the final price.
  // Split the grand total into a products line and an optional shipping line,
  // so the Sumit record itemizes the delivery fee. The two lines always sum
  // back to `amount` (the exact figure shown to and charged to the customer).
  const shippingFee = Math.max(0, Number(body.shippingFee) || 0);
  const productsAmount = body.amount - shippingFee;

  const items: Array<{
    Item: { Name: string; Description?: string };
    Quantity: number;
    UnitPrice: number;
    Description?: string;
  }> = [
    {
      Item: {
        Name: "הזמנה מאתר קפה גינץ",
        Description: `מספר הזמנה: ${body.orderId}`,
      },
      Quantity: 1,
      UnitPrice: productsAmount,
      Description: `הזמנה ${body.orderId}`,
    },
  ];

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
    // Ronen invoices customers manually from Hashavshevet (חשבשבת) in the
    // office, so we don't want Sumit to email a tax invoice to the customer.
    // DraftDocument:true keeps an internal record without finalizing/sending,
    // and UpdateCustomerOnSuccess:false prevents the customer notification.
    DraftDocument: true,
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
