"use client";

import { useState } from "react";
import { quantityOptions } from "@/data/products";

export default function CupsQuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "שם מלא הוא שדה חובה";
    if (!form.phone.trim()) e.phone = "טלפון הוא שדה חובה";
    else if (!/^[\d\s\-+()]{9,15}$/.test(form.phone)) e.phone = "מספר לא תקין";
    if (!form.quantity) e.quantity = "יש לבחור כמות";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "אימייל לא תקין";
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
        body: JSON.stringify({ ...form, formType: "cups" }),
      });
      if (res.ok) {
        setSubmitted(true);
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
      <div className="flex flex-col items-center py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brown mb-2">תודה!</h3>
        <p className="text-brown/70">קיבלנו את פנייתך ונחזור אליך בהקדם עם הצעת מחיר.</p>
      </div>
    );
  }

  const fieldClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-lg border ${
      errors[field] ? "border-red-500" : "border-brown/20"
    } bg-white focus:outline-none focus:ring-2 focus:ring-gold text-brown placeholder:text-brown/30`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cq-name" className="block text-sm font-medium text-brown mb-1">
            שם מלא <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cq-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass("name")}
            placeholder="ישראל ישראלי"
            aria-required="true"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cq-phone" className="block text-sm font-medium text-brown mb-1">
            טלפון <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cq-phone"
            type="tel"
            dir="ltr"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={fieldClass("phone")}
            placeholder="050-0000000"
            aria-required="true"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cq-email" className="block text-sm font-medium text-brown mb-1">
          אימייל
        </label>
        <input
          id="cq-email"
          type="email"
          dir="ltr"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={fieldClass("email")}
          placeholder="example@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="cq-qty" className="block text-sm font-medium text-brown mb-1">
          כמות כוסות נדרשת <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="cq-qty"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          className={fieldClass("quantity")}
          aria-required="true"
        >
          <option value="">בחר כמות…</option>
          {quantityOptions.map((q) => (
            <option key={q} value={q}>
              {q.toLocaleString("he-IL")} יחידות
            </option>
          ))}
        </select>
        {errors.quantity && <p className="text-red-500 text-xs mt-1" role="alert">{errors.quantity}</p>}
      </div>

      <div>
        <label htmlFor="cq-msg" className="block text-sm font-medium text-brown mb-1">
          פרטים נוספים
        </label>
        <textarea
          id="cq-msg"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${fieldClass("message")} resize-none`}
          placeholder="סוג כוס, גודל, עיצוב מיוחד…"
        />
      </div>

      {serverError && (
        <p className="text-red-500 text-sm text-center" role="alert">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        {sending ? "שולח…" : "שלח בקשת הצעת מחיר"}
      </button>
    </form>
  );
}
