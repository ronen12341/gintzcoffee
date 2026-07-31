import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getCatalogPrice } from "@/lib/server-pricing";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OrderItem {
  id: string;
  name: string;
  price?: string;
  priceNumeric?: number;
  category: string;
  qty: number;
  note?: string;
}

interface OrderPayload {
  customer: {
    name: string;
    phone: string;
    email?: string;
    /** 9-digit Israeli company tax ID (ח.פ) or personal ID (ת.ז) */
    taxId?: string;
    /** Name to print on the tax invoice if it differs from the contact name */
    invoiceName?: string;
    address?: string;
    city?: string;
    notes?: string;
  };
  items: OrderItem[];
  totalPrice: number;
  hasUnpricedItems: boolean;
  /** "online" = customer is about to pay via Sumit; "phone" = will be charged by phone */
  paymentMethod?: "online" | "phone";
  /** "delivery" = ship to address; "pickup" = self-pickup by prior arrangement */
  deliveryMethod?: "delivery" | "pickup";
  /** Shipping fee in NIS (0 when free or self-pickup) */
  shippingFee?: number;
  /** Total to charge including shipping (totalPrice + shippingFee) */
  grandTotal?: number;
}

/**
 * Normalize an Israeli phone number to E.164 digits for wa.me links.
 * Examples:
 *   "+972532733822"  → "972532733822"
 *   "972532733822"   → "972532733822"
 *   "0532733822"     → "972532733822"
 *   "053-273-3822"   → "972532733822"
 * The bug we're fixing: a previous version always prepended "972", so an
 * already-international input like "+972532733822" produced "972972532733822".
 */
function toIsraeliE164(raw: string): string {
  const digits = (raw ?? "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("972")) return digits;
  if (digits.startsWith("0")) return "972" + digits.slice(1);
  return "972" + digits;
}

function categoryLabel(c: string): string {
  switch (c) {
    case "machine":
      return "מכונה";
    case "bean":
      return "פולי קפה";
    case "cup":
      return "כוסות";
    case "used":
      return "יד שנייה";
    default:
      return c;
  }
}

function generateOrderId() {
  // Simple human-readable order id
  const now = new Date();
  const ymd = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(Math.random() * 9000) + 1000;
  return `ORD-${ymd}-${rand}`;
}

function buildEmailHtml(orderId: string, p: OrderPayload): string {
  const itemRows = p.items
    .map((i) => {
      const lineTotal = i.priceNumeric
        ? `${(i.priceNumeric * i.qty).toLocaleString("he-IL")} ש"ח`
        : "לפי הצעה";
      return `
        <tr style="border-bottom: 1px solid #E8DFD0;">
          <td style="padding: 10px 8px; color: #3B1F0A;">
            <strong>${i.name}</strong>
            <div style="font-size: 11px; color: #999;">${categoryLabel(i.category)}${i.note ? " · " + i.note : ""}</div>
          </td>
          <td style="padding: 10px 8px; color: #3B1F0A; text-align: center;">${i.qty}</td>
          <td style="padding: 10px 8px; color: #3B1F0A; text-align: end;">${i.price ?? "—"}</td>
          <td style="padding: 10px 8px; color: #3B1F0A; text-align: end; font-weight: bold;">${lineTotal}</td>
        </tr>`;
    })
    .join("");

  const waLink = `https://wa.me/${toIsraeliE164(p.customer.phone)}`;
  const paymentBadge =
    p.paymentMethod === "online"
      ? `<span style="display:inline-block;background:#16a34a;color:#fff;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:bold;">💳 תשלום אונליין — הלקוח מועבר ל-Sumit</span>`
      : `<span style="display:inline-block;background:#C8922A;color:#fff;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:bold;">📞 הצעת מחיר — יש ליצור קשר עם הלקוח</span>`;

  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #F5F0E8; padding: 24px; border-radius: 8px;">
      <h2 style="color: #3B1F0A; border-bottom: 2px solid #C8922A; padding-bottom: 8px; margin-top: 0;">
        🛒 הזמנה חדשה מהאתר
      </h2>
      <p style="color: #666; margin: 4px 0;">
        מספר הזמנה: <strong style="color: #3B1F0A;">${orderId}</strong>
      </p>
      <p style="color: #666; margin: 4px 0;">
        ${new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" })}
      </p>
      <p style="margin: 12px 0;">${paymentBadge}</p>

      <h3 style="color: #5C3015; margin-top: 24px;">פרטי לקוח</h3>
      <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 10px; color: #5C3015; font-weight: bold; width: 120px;">שם</td>
          <td style="padding: 10px; color: #3B1F0A;">${p.customer.name}</td>
        </tr>
        <tr style="background: #FAF6F0;">
          <td style="padding: 10px; color: #5C3015; font-weight: bold;">טלפון</td>
          <td style="padding: 10px; color: #3B1F0A; direction: ltr;">
            <a href="tel:${p.customer.phone}" style="color: #C8922A; text-decoration: none;">${p.customer.phone}</a>
            &nbsp;·&nbsp;
            <a href="${waLink}" style="color: #25D366; text-decoration: none;">וואטסאפ ↗</a>
          </td>
        </tr>
        ${p.customer.email ? `
        <tr>
          <td style="padding: 10px; color: #5C3015; font-weight: bold;">אימייל</td>
          <td style="padding: 10px; color: #3B1F0A; direction: ltr;">${p.customer.email}</td>
        </tr>` : ""}
        ${p.customer.taxId ? `
        <tr style="background: #FAF6F0;">
          <td style="padding: 10px; color: #5C3015; font-weight: bold;">ח.פ / ת.ז</td>
          <td style="padding: 10px; color: #3B1F0A; direction: ltr;">${p.customer.taxId}</td>
        </tr>` : ""}
        ${p.customer.invoiceName ? `
        <tr>
          <td style="padding: 10px; color: #5C3015; font-weight: bold;">שם לחשבונית</td>
          <td style="padding: 10px; color: #3B1F0A;">${p.customer.invoiceName}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 10px; color: #5C3015; font-weight: bold;">אופן קבלה</td>
          <td style="padding: 10px; color: #3B1F0A;">${
            p.deliveryMethod === "pickup"
              ? "🏪 איסוף עצמי בתיאום מראש"
              : "🚚 משלוח עד הבית"
          }</td>
        </tr>
        ${p.customer.address || p.customer.city ? `
        <tr style="background: #FAF6F0;">
          <td style="padding: 10px; color: #5C3015; font-weight: bold;">כתובת</td>
          <td style="padding: 10px; color: #3B1F0A;">${[p.customer.address, p.customer.city].filter(Boolean).join(", ")}</td>
        </tr>` : ""}
        ${p.customer.notes ? `
        <tr>
          <td style="padding: 10px; color: #5C3015; font-weight: bold; vertical-align: top;">הערות</td>
          <td style="padding: 10px; color: #3B1F0A; white-space: pre-wrap;">${p.customer.notes}</td>
        </tr>` : ""}
      </table>

      <h3 style="color: #5C3015; margin-top: 24px;">פריטי הזמנה</h3>
      <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden;">
        <thead>
          <tr style="background: #5C3015; color: #fff;">
            <th style="padding: 10px 8px; text-align: start;">מוצר</th>
            <th style="padding: 10px 8px; text-align: center;">כמות</th>
            <th style="padding: 10px 8px; text-align: end;">מחיר ליחידה</th>
            <th style="padding: 10px 8px; text-align: end;">סה"כ</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
        ${p.totalPrice > 0 ? (() => {
          const shippingFee = p.shippingFee ?? 0;
          const grandTotal = p.grandTotal ?? p.totalPrice + shippingFee;
          const shippingLabel =
            p.deliveryMethod === "pickup"
              ? "איסוף עצמי"
              : shippingFee > 0
                ? `${shippingFee.toLocaleString("he-IL")} ש"ח`
                : "חינם";
          return `
        <tfoot>
          <tr style="background: #FAF6F0;">
            <td colspan="3" style="padding: 8px; text-align: end; color: #5C3015;">סכום ביניים:</td>
            <td style="padding: 8px; text-align: end; color: #3B1F0A;">${p.totalPrice.toLocaleString("he-IL")} ש"ח</td>
          </tr>
          <tr style="background: #FAF6F0;">
            <td colspan="3" style="padding: 8px; text-align: end; color: #5C3015;">משלוח:</td>
            <td style="padding: 8px; text-align: end; color: #3B1F0A;">${shippingLabel}</td>
          </tr>
          <tr style="background: #C8922A; color: #fff;">
            <td colspan="3" style="padding: 12px 8px; text-align: end; font-weight: bold;">סה"כ לתשלום:</td>
            <td style="padding: 12px 8px; text-align: end; font-weight: bold; font-size: 16px;">
              ${grandTotal.toLocaleString("he-IL")} ש"ח
            </td>
          </tr>
        </tfoot>`;
        })() : ""}
      </table>

      ${p.hasUnpricedItems ? `
      <p style="background: #FFF4D6; border-right: 4px solid #C8922A; padding: 12px; margin-top: 16px; color: #5C3015;">
        ⚠️ יש בהזמנה פריטים ללא מחיר — צריך לקבוע מחיר בשיחה עם הלקוח.
      </p>` : ""}

      <div style="margin-top: 24px; padding: 16px; background: #fff; border-radius: 8px; text-align: center;">
        <p style="margin: 0 0 8px; color: #5C3015; font-weight: bold;">פעולות מהירות:</p>
        <a href="tel:${p.customer.phone}" style="display: inline-block; background: #5C3015; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; margin: 4px;">📞 התקשר ללקוח</a>
        <a href="${waLink}" style="display: inline-block; background: #25D366; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; margin: 4px;">💬 וואטסאפ</a>
      </div>

      <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">
        נשלח מאתר קפה גינץ · gintz.co.il
      </p>
    </div>
  `;
}

function buildWhatsAppText(orderId: string, p: OrderPayload): string {
  const lines = [
    `🛒 *הזמנה חדשה - ${orderId}*`,
    ``,
    `👤 ${p.customer.name}`,
    `📞 ${p.customer.phone}`,
  ];
  if (p.customer.email) lines.push(`✉️ ${p.customer.email}`);
  if (p.customer.address || p.customer.city) {
    lines.push(`📍 ${[p.customer.address, p.customer.city].filter(Boolean).join(", ")}`);
  }
  lines.push(``, `*פריטים:*`);
  for (const i of p.items) {
    const lineTotal = i.priceNumeric
      ? `${(i.priceNumeric * i.qty).toLocaleString("he-IL")} ש"ח`
      : "לפי הצעה";
    lines.push(`• ${i.name} × ${i.qty} — ${lineTotal}`);
  }
  const shippingFee = p.shippingFee ?? 0;
  const grandTotal = p.grandTotal ?? p.totalPrice + shippingFee;
  lines.push(
    ``,
    p.deliveryMethod === "pickup"
      ? `📦 איסוף עצמי בתיאום מראש`
      : `📦 משלוח${shippingFee > 0 ? ` — ${shippingFee.toLocaleString("he-IL")} ש"ח` : " — חינם"}`
  );
  if (p.totalPrice > 0) {
    lines.push(`*סה"כ לתשלום: ${grandTotal.toLocaleString("he-IL")} ש"ח*`);
  }
  if (p.hasUnpricedItems) {
    lines.push(``, `⚠️ יש פריטים ללא מחיר`);
  }
  if (p.customer.notes) {
    lines.push(``, `הערות: ${p.customer.notes}`);
  }
  return lines.join("\n");
}

/**
 * Optional WhatsApp notification via CallMeBot.
 * Requires both env vars to be set:
 *   - CALLMEBOT_PHONE: phone in international format without "+" (e.g., 972501234567)
 *   - CALLMEBOT_APIKEY: API key from CallMeBot (one-time setup)
 * Falls back silently if not configured.
 */
async function sendWhatsAppViaCallMeBot(text: string): Promise<void> {
  const phone = process.env.CALLMEBOT_PHONE;
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!phone || !apikey) return;

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apikey}`;
  try {
    await fetch(url, { method: "GET" });
  } catch (err) {
    console.error("CallMeBot WhatsApp send failed:", err);
  }
}

export async function POST(req: NextRequest) {
  let body: OrderPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  if (!body?.customer?.name || !body?.customer?.phone) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }
  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ ok: false, error: "empty cart" }, { status: 400 });
  }

  // Re-price from the catalog wherever possible — the cart's priceNumeric is
  // only a client-side snapshot (stale cache, or an edited request), and this
  // email is what Ronen actually acts on to fulfill/charge the order. Items
  // whose id/category don't resolve (e.g. quote-based cups) keep whatever the
  // client sent, since there's no catalog price to fall back to.
  body.items = body.items.map((item) => {
    const catalogPrice = getCatalogPrice(item.category, item.id);
    return catalogPrice !== undefined ? { ...item, priceNumeric: catalogPrice } : item;
  });
  body.totalPrice = body.items.reduce(
    (sum, i) => sum + (i.priceNumeric ? i.priceNumeric * i.qty : 0),
    0
  );
  body.grandTotal = body.totalPrice + (body.shippingFee ?? 0);

  const orderId = generateOrderId();
  const html = buildEmailHtml(orderId, body);
  const waText = buildWhatsAppText(orderId, body);
  const subject = `🛒 הזמנה חדשה ${orderId} — ${body.customer.name}`;

  // Primary recipient — known-verified address that works on Resend's free
  // tier. Must succeed for the order to be considered submitted.
  try {
    const { error } = await resend.emails.send({
      from: "קפה גינץ <onboarding@resend.dev>",
      to: "ronen@aspagil.com",
      replyTo: body.customer.email || undefined,
      subject,
      html,
    });
    if (error) {
      console.error("Primary email send failed:", error);
      return NextResponse.json(
        { ok: false, error: "email failed", detail: error.message },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Primary email exception:", err);
    return NextResponse.json(
      { ok: false, error: "email exception" },
      { status: 500 }
    );
  }

  // NOTE: Secondary recipient (e.g., ronen12341@gmail.com or
  // salesaspagil@gmail.com) was removed because Resend's free tier with the
  // shared sender domain (onboarding@resend.dev) only allows sending to the
  // account owner's verified address. To enable additional recipients, verify
  // a custom domain in Resend (Settings → Domains) and switch `from:` to use it.

  // Fire-and-forget WhatsApp
  sendWhatsAppViaCallMeBot(waText).catch((err) => console.error(err));

  return NextResponse.json({ ok: true, orderId });
}
