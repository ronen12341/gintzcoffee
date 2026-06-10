"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  "משרד",
  "מסעדה / בית קפה",
  "מלון",
  "חנות",
  "מוסד חינוכי",
  "מרפאה / קליניקה",
  "אחר",
];

/**
 * Dark-styled lead form for the JURA X10 landing page.
 * Visually matches the page design (.x10p scoped CSS) while posting to the
 * same /api/contact endpoint used by the standard LeadForm — so submissions
 * reach the business exactly like every other lead on the site.
 */
export default function X10LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "שם מלא הוא שדה חובה";
    if (!form.phone.trim()) {
      e.phone = "מספר טלפון הוא שדה חובה";
    } else if (!/^[\d\s\-+()]{9,15}$/.test(form.phone)) {
      e.phone = "מספר טלפון לא תקין";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "כתובת אימייל לא תקינה";
    }
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "lead" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError("שגיאה בשליחה, נסה שוב או צור קשר בטלפון 03-9600550");
      }
    } catch {
      setServerError("שגיאה בשליחה, נסה שוב או צור קשר בטלפון 03-9600550");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="lead-success">
        <span className="ic" aria-hidden="true">✓</span>
        <h3>תודה!</h3>
        <p>קיבלנו את הפנייה ונחזור אליך בהקדם עם הצעה אישית.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3>פרטים ליצירת קשר</h3>

      <div className="field">
        <label htmlFor="x10-name">שם מלא *</label>
        <input
          id="x10-name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="ישראל ישראלי"
        />
        {errors.name && <p className="ferr">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="x10-phone">טלפון *</label>
        <input
          id="x10-phone"
          type="tel"
          autoComplete="tel"
          dir="ltr"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="050-0000000"
        />
        {errors.phone && <p className="ferr">{errors.phone}</p>}
      </div>

      <div className="field">
        <label htmlFor="x10-email">אימייל</label>
        <input
          id="x10-email"
          type="email"
          autoComplete="email"
          dir="ltr"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="example@company.com"
        />
        {errors.email && <p className="ferr">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="x10-biz">סוג עסק</label>
        <select
          id="x10-biz"
          value={form.businessType}
          onChange={(e) => setForm({ ...form, businessType: e.target.value })}
        >
          <option value="">בחר סוג עסק…</option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="x10-msg">הודעה חופשית</label>
        <textarea
          id="x10-msg"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="ספרו לנו על הצורך שלכם…"
        />
      </div>

      {serverError && <p className="ferr center">{serverError}</p>}

      <button type="submit" className="btn btn-gold submit" disabled={sending}>
        {sending ? "שולח…" : "שלח פנייה"}
      </button>
    </form>
  );
}
