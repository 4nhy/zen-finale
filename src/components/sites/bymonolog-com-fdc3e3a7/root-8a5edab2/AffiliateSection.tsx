"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Send,
  ShieldCheck,
  CheckCircle,
  Percent,
  ArrowRight,
  X,
} from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border outline-none transition-colors focus:ring-1";
const inputStyle: React.CSSProperties = {
  background: "var(--mono-black-400)",
  borderColor: "var(--mono-black-200)",
  color: "var(--mono-beige-100)",
};

export function AffiliateSection() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const emptyForm = {
    fullName: "",
    email: "",
    phone: "",
    profileUrl: "",
    background: "",
  };
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => setMounted(true), []);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await fetch("/api/affiliate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowRegisterModal(false);
        setIsSubmitted(false);
        setFormData(emptyForm);
      }, 4000);
    } catch {
      alert("Error submitting your application. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <section id="affiliate" className="py-24 relative">
        <div className="mono-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 border"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.10)",
                color: "var(--mono-beige-100)",
              }}
            >
              Zen Consulting Partner Program
            </span>
            <h2
              className="mb-6"
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
              }}
            >
              Refer. Earn.
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--mono-beige-100)", opacity: 0.7 }}
            >
              By invitation. A small group of vetted partners. Every
              application reviewed personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StepCard
              icon={<Send className="w-8 h-8" />}
              title="1. Apply."
              body="Who you are. How to reach you. A profile that shows your track record."
            />
            <StepCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="2. Reviewed."
              body="Every application read. If it's a fit, your referral code and tracking link ship within 3 to 5 business days."
              rails
            />
            <StepCard
              icon={<Percent className="w-8 h-8" />}
              title="3. Earn 15%."
              body="15% of every monthly payment. Direct cash. For as long as the customer stays."
              feature
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowRegisterModal(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              style={{
                background: "var(--mono-beige-100)",
                color: "var(--mono-black-400)",
              }}
            >
              Apply to the Partner Program <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {mounted &&
        showRegisterModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
            onClick={() => setShowRegisterModal(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative shadow-2xl border"
              style={{
                background: "var(--mono-card-bg)",
                borderColor: "var(--mono-black-300)",
                color: "var(--mono-beige-100)",
              }}
            >
              <button
                onClick={() => setShowRegisterModal(false)}
                className="absolute top-6 right-6 opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      Partner Application
                    </h3>
                    <p className="text-sm" style={{ opacity: 0.7 }}>
                      Codes aren&apos;t issued automatically. We review each
                      application and only approve partners we&apos;d be
                      comfortable having represent Zen.
                    </p>
                  </div>

                  <form
                    onSubmit={handleRegisterSubmit}
                    className="space-y-4"
                  >
                    <Field label="Full Name">
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Alex Chen"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </Field>
                    <Field label="Email Address">
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </Field>
                    <Field label="Phone Number">
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </Field>
                    <Field
                      label="LinkedIn or Professional Profile"
                      hint="A LinkedIn, company site, or portfolio we can use to verify who you are."
                    >
                      <input
                        required
                        type="url"
                        value={formData.profileUrl}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            profileUrl: e.target.value,
                          })
                        }
                        placeholder="https://linkedin.com/in/alexchen"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </Field>
                    <Field label="Who would you refer us to?">
                      <textarea
                        rows={3}
                        value={formData.background}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            background: e.target.value,
                          })
                        }
                        placeholder="The kind of clients you work with and how you'd introduce Zen to them."
                        className={`${inputClass} resize-none`}
                        style={inputStyle}
                      />
                    </Field>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full mt-6 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: "var(--mono-beige-100)",
                        color: "var(--mono-black-400)",
                      }}
                    >
                      {isProcessing ? "Submitting…" : "Submit Application"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Application Received</h3>
                  <p style={{ opacity: 0.7 }}>
                    We review every application personally and will get back to
                    you within 3 to 5 business days. If approved, we&apos;ll
                    email your partner code and tracking link.
                  </p>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function StepCard({
  icon,
  title,
  body,
  rails,
  feature,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  rails?: boolean;
  feature?: boolean;
}) {
  return (
    <div
      className="p-8 rounded-3xl flex flex-col items-center text-center backdrop-blur-sm relative border"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: feature
          ? "rgba(255,255,255,0.20)"
          : "var(--mono-black-300)",
        boxShadow: feature ? "0 0 30px rgba(255,255,255,0.05)" : undefined,
      }}
    >
      {rails && (
        <>
          <div
            className="hidden md:block absolute top-1/2 -left-4 w-8 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
          <div
            className="hidden md:block absolute top-1/2 -right-4 w-8 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </>
      )}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p style={{ color: "var(--mono-beige-100)", opacity: 0.7 }}>{body}</p>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium mb-1"
        style={{ opacity: 0.85 }}
      >
        {label}
      </label>
      {children}
      {hint && (
        <p className="mt-1 text-xs" style={{ opacity: 0.5 }}>
          {hint}
        </p>
      )}
    </div>
  );
}
