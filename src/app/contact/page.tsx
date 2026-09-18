import type { Metadata } from "next";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import { ContactSection } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/ContactSection";

export const metadata: Metadata = {
  title: "Book a project · Zen Consulting",
  description:
    "Tell us what you're trying to fix. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--mono-black-400)",
        color: "var(--mono-beige-100)",
      }}
    >
      <SiteNav />

      <section className="pt-32 pb-20">
        <div className="mono-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <span className="mono-eyebrow">Book a project</span>
              <h1
                style={{
                  fontSize: "var(--font-size-h3)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.02,
                }}
              >
                Tell us what you&apos;re trying to fix.
              </h1>
              <p className="opacity-70" style={{ lineHeight: 1.6 }}>
                No NDA to start a conversation. We reply within one working
                day. If it&apos;s a fit, we book a scoping call and put a plan
                in front of you within a week.
              </p>
              <div
                className="mt-4 flex flex-col gap-3 text-sm"
                style={{ color: "var(--mono-beige-100)", opacity: 0.85 }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[11px] font-mono uppercase tracking-[0.18em] w-24 shrink-0"
                    style={{ color: "var(--mono-black-50)" }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:anthony@zen-consulting.co"
                    className="underline underline-offset-4 hover:opacity-100"
                  >
                    anthony@zen-consulting.co
                  </a>
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[11px] font-mono uppercase tracking-[0.18em] w-24 shrink-0"
                    style={{ color: "var(--mono-black-50)" }}
                  >
                    Reply
                  </span>
                  <span>Within 1 working day.</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[11px] font-mono uppercase tracking-[0.18em] w-24 shrink-0"
                    style={{ color: "var(--mono-black-50)" }}
                  >
                    Build
                  </span>
                  <span>4 to 10 weeks per engagement.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactSection />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
