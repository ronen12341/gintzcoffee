"use client";

import { useState } from "react";
import { trackLead } from "@/lib/gtag";

const BUSINESS_TYPES = [
  "משרד",
  "מסעדה / בית קפה",
  "מלון",
  "חנות",
  "מוסד חינוכי",
  "מרפאה / קליניקה",
  "אחר",
];

interface LeadFormProps {
  title?: string;
  className?: string;
}

export default function LeadForm({
  title = "קבל הצעת מחיר",
  className = "",
}: LeadFormProps) {
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
        trackLead("lead");
      } else {
        setServerError("שגיאה בשליחה, נסה שוב או צור קשר בטלפון");
      }
    } catch {
      setServerError("שגיאה בשליחה, נסה שוב או צור קשר בטלפון");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brown mb-2">תודה!</h3>
        <p className="text-brown/70">נחזור אליך בהקדם האפשרי.</p>
      </div>
    );
  }

  const fieldClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border ${
      errors[field] ? "border-red-400" : "border-brown/12"
    } bg-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent focus:bg-white text-brown placeholder:text-brown/35 text-sm transition-colors`;

  const labelClass = "block text-xs font-semibold text-brown/70 tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`} noValidate>
      {title && (
        <h3 className="text-2xl font-bold text-brown mb-6">{title}</h3>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lf-name" className={labelClass}>
            שם מלא <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lf-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass("name")}
            placeholder="ישראל ישראלי"
            aria-required="true"
            aria-describedby={errors.name ? "lf-name-err" : undefined}
          />
          {errors.name && (
            <p id="lf-name-err" className="text-red-500 text-xs mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lf-phone" className={labelClass}>
            טלפון <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lf-phone"
            type="tel"
            autoComplete="tel"
            dir="ltr"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`${fieldClass("phone")} text-right`}
            placeholder="050-0000000"
            aria-required="true"
            aria-describedby={errors.phone ? "lf-phone-err" : undefined}
          />
          {errors.phone && (
            <p id="lf-phone-err" className="text-red-500 text-xs mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lf-email" className={labelClass}>
            אימייל
          </label>
          <input
            id="lf-email"
            type="email"
            autoComplete="email"
            dir="ltr"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${fieldClass("email")} text-right`}
            placeholder="example@company.com"
            aria-describedby={errors.email ? "lf-email-err" : undefined}
          />
          {errors.email && (
            <p id="lf-email-err" className="text-red-500 text-xs mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lf-biz" className={labelClass}>
            סוג עסק
          </label>
          <select
            id="lf-biz"
            value={form.businessType}
            onChange={(e) => setForm({ ...form, businessType: e.target.value })}
            className={fieldClass("businessType")}
          >
            <option value="">בחר סוג עסק…</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lf-msg" className={labelClass}>
          הודעה חופשית
        </label>
        <textarea
          id="lf-msg"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${fieldClass("message")} resize-none`}
          placeholder="ספר לנו על הצורך שלך…"
        />
      </div>

      {serverError && (
        <p className="text-red-500 text-sm text-center" role="alert">{serverError}</p>
      )}

      <button type="submit" disabled={sending} className="btn btn-primary btn-block mt-1">
        {sending ? "שולח…" : "שלח פנייה"}
      </button>
    </form>
  );
}
