import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { attributionHtml, shortSource, type Attribution } from "@/lib/attribution";

/** Escapes user-supplied text before it's interpolated into an HTML email
 *  template — every form field goes through this rather than being trusted
 *  as safe markup. */
function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, company, businessType, employees, city, message, quantity, formType, gclid } = body;
  const attribution: Attribution | undefined =
    body.attribution && typeof body.attribution === "object" ? body.attribution : gclid ? { last: { gclid } } : undefined;

  const subject =
    formType === "cups"
      ? "בקשת הצעת מחיר לכוסות – קפה גינץ"
      : "פנייה חדשה מהאתר – קפה גינץ";
  const subjectWithSource = `${subject} [${shortSource(attribution)}]`;

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F0E8; padding: 24px; border-radius: 8px;">
      <h2 style="color: #3B1F0A; border-bottom: 2px solid #C8922A; padding-bottom: 8px;">${subject}</h2>
      ${attributionHtml(attribution, escapeHtml)}
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px; color: #5C3015; font-weight: bold; width: 140px;">שם מלא</td>
          <td style="padding: 8px; color: #3B1F0A;">${name ? escapeHtml(name) : "—"}</td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">טלפון</td>
          <td style="padding: 8px; color: #3B1F0A; direction: ltr;">${phone ? escapeHtml(phone) : "—"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">אימייל</td>
          <td style="padding: 8px; color: #3B1F0A; direction: ltr;">${email ? escapeHtml(email) : "—"}</td>
        </tr>
        ${company ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">שם החברה</td>
          <td style="padding: 8px; color: #3B1F0A;">${escapeHtml(company)}</td>
        </tr>` : ""}
        ${businessType ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">סוג עסק</td>
          <td style="padding: 8px; color: #3B1F0A;">${escapeHtml(businessType)}</td>
        </tr>` : ""}
        ${employees ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">מספר עובדים</td>
          <td style="padding: 8px; color: #3B1F0A;">${escapeHtml(employees)}</td>
        </tr>` : ""}
        ${city ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">עיר</td>
          <td style="padding: 8px; color: #3B1F0A;">${escapeHtml(city)}</td>
        </tr>` : ""}
        ${quantity ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">כמות כוסות</td>
          <td style="padding: 8px; color: #3B1F0A;">${Number(quantity).toLocaleString("he-IL")} יחידות</td>
        </tr>` : ""}
        ${message ? `
        <tr>
          <td style="padding: 8px; color: #5C3015; font-weight: bold; vertical-align: top;">הודעה</td>
          <td style="padding: 8px; color: #3B1F0A; white-space: pre-wrap;">${escapeHtml(message)}</td>
        </tr>` : ""}
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">נשלח מאתר קפה גינץ · gintz.co.il</p>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "קפה גינץ <noreply@aspagil.com>",
      to: "ronen@aspagil.com",
      replyTo: email || undefined,
      subject: subjectWithSource,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
