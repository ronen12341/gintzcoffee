"use client";

import { useState } from "react";
import { trackLead } from "@/lib/gtag";

const EMPLOYEE_RANGES = ["עד 15", "15–50", "50–100", "מעל 100"];

export default function X10LeadForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    employees: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "יש להזין שם מלא";
    if (!form.company.trim()) nextErrors.company = "יש להזין את שם החברה";
    if (!form.phone.trim()) {
      nextErrors.phone = "יש להזין מספר טלפון";
    } else if (!/^[\d\s\-+()]{9,15}$/.test(form.phone)) {
      nextErrors.phone = "מספר הטלפון אינו תקין";
    }
    if (!form.employees) nextErrors.employees = "יש לבחור מספר עובדים";
    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSending(true);
    setServerError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          businessType: form.company,
          message: `מספר עובדים: ${form.employees}`,
          formType: "lead",
        }),
      });

      if (!response.ok) throw new Error("Lead submission failed");
      setSubmitted(true);
      trackLead("lp");
    } catch {
      setServerError("אירעה שגיאה בשליחה. אפשר לנסות שוב או להתקשר ל־03-9600550");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="lead-success" role="status">
        <span className="success-icon" aria-hidden="true">✓</span>
        <h3>תודה!</h3>
        <p>קיבלנו את הפרטים ונחזור אליכם בהקדם עם הצעה מותאמת.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>קבלו הצעת מחיר</h2>
      <p className="form-intro">פתרון קפה מלא לעסק שלכם</p>

      <div className="field">
        <label htmlFor="lp-name">שם מלא</label>
        <input
          id="lp-name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder="שם מלא"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="lp-company">שם החברה</label>
        <input
          id="lp-company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(event) => setForm({ ...form, company: event.target.value })}
          placeholder="שם החברה"
          aria-invalid={Boolean(errors.company)}
        />
        {errors.company && <p className="field-error">{errors.company}</p>}
      </div>

      <div className="field">
        <label htmlFor="lp-phone">טלפון</label>
        <input
          id="lp-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir="rtl"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
          placeholder="טלפון"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <p className="field-error">{errors.phone}</p>}
      </div>

      <div className="field">
        <label htmlFor="lp-employees">מספר עובדים</label>
        <select
          id="lp-employees"
          value={form.employees}
          onChange={(event) => setForm({ ...form, employees: event.target.value })}
          aria-invalid={Boolean(errors.employees)}
        >
          <option value="">מספר עובדים</option>
          {EMPLOYEE_RANGES.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
        {errors.employees && <p className="field-error">{errors.employees}</p>}
      </div>

      {serverError && <p className="server-error" role="alert">{serverError}</p>}

      <button type="submit" className="submit-button" disabled={sending}>
        {sending ? "שולחים..." : "קבלו הצעת מחיר"}
      </button>
      <p className="privacy">הפרטים נשמרים באופן מאובטח ומשמשים לחזרה אליכם בלבד.</p>
    </form>
  );
}
