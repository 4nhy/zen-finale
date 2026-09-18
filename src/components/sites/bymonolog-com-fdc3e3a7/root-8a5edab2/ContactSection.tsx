"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "Custom software build",
  "Replace a tool we pay for",
  "Web application",
  "Mobile app",
  "AI / automation",
  "Something else",
];

const inputBase =
  "w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-2";

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  borderColor: "var(--mono-black-200)",
  color: "var(--mono-beige-100)",
};

/**
 * Contact form. Ported from Zen's ContactSection.tsx (same 7 fields, same
 * payload contract). POSTs to /api/contact.
 */
export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      message: [
        form.company && `Company: ${form.company}`,
        form.projectType && `Looking for: ${form.projectType}`,
        form.budget && `Plan: ${form.budget}`,
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok)
        throw new Error(`HTTP ${res.status} ${(await res.text()).slice(0, 200)}`.trim());
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setError("That didn't send. Email anthony@zen-consulting.co directly and we'll pick it up.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border p-10 text-center"
        style={{
          borderColor: "var(--mono-black-200)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full grid place-items-center mx-auto mb-5"
          style={{
            background: "var(--mono-beige-100)",
            color: "var(--mono-black-400)",
          }}
        >
          <Check className="w-7 h-7" strokeWidth={2.5} />
        </div>
        <h3
          className="text-2xl font-semibold"
          style={{ color: "var(--mono-beige-100)" }}
        >
          Message sent
        </h3>
        <p
          className="mt-2 max-w-sm mx-auto leading-relaxed"
          style={{ opacity: 0.7 }}
        >
          We read every one of these ourselves. Expect a reply within one
          working day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm underline hover:opacity-100"
          style={{ opacity: 0.6 }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border p-6 md:p-8"
      style={{
        borderColor: "var(--mono-black-200)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium mb-2"
            style={{ opacity: 0.85 }}
          >
            First name
          </label>
          <input
            id="firstName"
            required
            value={form.firstName}
            onChange={set("firstName")}
            className={inputBase}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium mb-2"
            style={{ opacity: 0.85 }}
          >
            Last name
          </label>
          <input
            id="lastName"
            value={form.lastName}
            onChange={set("lastName")}
            className={inputBase}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ opacity: 0.85 }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            className={inputBase}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium mb-2"
            style={{ opacity: 0.85 }}
          >
            Company{" "}
            <span className="font-normal" style={{ opacity: 0.5 }}>
              (optional)
            </span>
          </label>
          <input
            id="company"
            value={form.company}
            onChange={set("company")}
            className={inputBase}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium mb-2"
            style={{ opacity: 0.85 }}
          >
            What do you need?
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={set("projectType")}
            className={`${inputBase} appearance-none`}
            style={inputStyle}
          >
            <option value="">Select one</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium mb-2"
            style={{ opacity: 0.85 }}
          >
            Which plan fits?{" "}
            <span className="font-normal" style={{ opacity: 0.5 }}>
              (optional)
            </span>
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={set("budget")}
            className={`${inputBase} appearance-none`}
            style={inputStyle}
          >
            <option value="">Not sure yet</option>
            <option>Essential · one build at a time</option>
            <option>Growth · two builds at a time</option>
            <option>Partner · dedicated team</option>
            <option>One-time build instead</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ opacity: 0.85 }}
        >
          What are you trying to fix?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder="The tool you're stuck with, the workflow that's manual, or the product you want built."
          className={`${inputBase} resize-y`}
          style={inputStyle}
        />
        <p className="text-xs mt-2" style={{ opacity: 0.5 }}>
          No NDA needed to start a conversation.
        </p>
      </div>

      {status === "error" && (
        <p
          className="mt-4 text-sm"
          role="alert"
          style={{ color: "#f87171" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity active:translate-y-px inline-flex items-center justify-center gap-2 disabled:opacity-60"
        style={{
          background: "var(--mono-beige-100)",
          color: "var(--mono-black-400)",
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send it <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
