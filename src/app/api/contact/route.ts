import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, businessType, message, quantity, formType } = body;

  const subject =
    formType === "cups"
      ? "בקשת הצעת מחיר לכוסות – קפה גינץ"
      : "פנייה חדשה מהאתר – קפה גינץ";

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F0E8; padding: 24px; border-radius: 8px;">
      <h2 style="color: #3B1F0A; border-bottom: 2px solid #C8922A; padding-bottom: 8px;">${subject}</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px; color: #5C3015; font-weight: bold; width: 140px;">שם מלא</td>
          <td style="padding: 8px; color: #3B1F0A;">${name || "—"}</td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">טלפון</td>
          <td style="padding: 8px; color: #3B1F0A; direction: ltr;">${phone || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">אימייל</td>
          <td style="padding: 8px; color: #3B1F0A; direction: ltr;">${email || "—"}</td>
        </tr>
        ${businessType ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">סוג עסק</td>
          <td style="padding: 8px; color: #3B1F0A;">${businessType}</td>
        </tr>` : ""}
        ${quantity ? `
        <tr style="background: #fff;">
          <td style="padding: 8px; color: #5C3015; font-weight: bold;">כמות כוסות</td>
          <td style="padding: 8px; color: #3B1F0A;">${Number(quantity).toLocaleString("he-IL")} יחידות</td>
        </tr>` : ""}
        ${message ? `
        <tr>
          <td style="padding: 8px; color: #5C3015; font-weight: bold; vertical-align: top;">הודעה</td>
          <td style="padding: 8px; color: #3B1F0A; white-space: pre-wrap;">${message}</td>
        </tr>` : ""}
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">נשלח מאתר קפה גינץ · gintzcoffee.co.il</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "קפה גינץ <noreply@gilcups.com>",
      to: "ronen@aspagil.com",
      replyTo: email || undefined,
      subject,
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
