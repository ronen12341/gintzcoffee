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
 * Sumit's "Begin redirect for transaction" endpoint.
 * Per the REST API docs at app.sumit.co.il/developers/api the URL is:
 *   POST https://api.sumit.co.il/creditguy/gateway/beginredirect/
 */
const SUMIT_BEGIN_REDIRECT_URL =
  "https://api.sumit.co.il/creditguy/gateway/beginredirect/";

interface SumitPaymentRequest {
  amount: number;
  orderId: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
    city?: string;
    zipCode?: string;
  };
  successUrl: string;
  failureUrl: string;
}

interface SumitResponse {
  Status: string;
  UserErrorMessage?: string;
  TechnicalErrorDetails?: string;
  Data?: {
    URL?: string;
    RedirectURL?: string;
    PaymentURL?: string;
    [k: string]: unknown;
  } | string | null;
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

  // Build the request body Sumit expects. Structure based on public Sumit docs
  // (REST swagger): Credentials wraps auth, Customer block carries contact
  // info, Items lists the line items with Cost in NIS, and RedirectURL is
  // where the browser is sent after a successful charge.
  const sumitBody = {
    Credentials: {
      CompanyID: SUMIT_COMPANY_ID,
      APIKey: SUMIT_API_KEY,
    },
    Customer: {
      Name: body.customer.name,
      Phone: body.customer.phone,
      EmailAddress: body.customer.email || "",
      City: body.customer.city || "",
      Address: body.customer.address || "",
      ZipCode: body.customer.zipCode || "",
      SearchMode: "Automatic",
    },
    Items: [
      {
        Item: {
          Name: "הזמנה מאתר קפה גינץ",
          Description: `מספר הזמנה: ${body.orderId}`,
        },
        Quantity: 1,
        Cost: body.amount,
        Currency: "ILS",
      },
    ],
    RedirectURL: body.successUrl,
    FailureRedirectURL: body.failureUrl,
    ExternalIdentifier: body.orderId,
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

    if (!data.Status || !data.Status.startsWith("Success")) {
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
        data.Data.RedirectURL ||
        data.Data.PaymentURL ||
        (typeof data.Data.Url === "string" ? data.Data.Url : undefined);
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
