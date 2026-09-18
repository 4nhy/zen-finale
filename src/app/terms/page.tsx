import type { Metadata } from "next";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service · Zen Consulting",
};

export default function TermsPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "var(--mono-black-400)", color: "var(--mono-beige-100)" }}
    >
      <SiteNav />
      <section className="pt-32 pb-24">
        <article className="mono-container max-w-3xl flex flex-col gap-8">
          <span className="mono-eyebrow">Legal</span>
          <h1
            style={{
              fontSize: "var(--font-size-h3)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Terms of Service
          </h1>
          <p className="opacity-60 text-sm">Last updated: 2026-09-18</p>

          <Section title="1. Overview">
            These terms cover engagements between Zen Consulting and a client
            organization. Signing a proposal or paying an invoice constitutes
            acceptance of these terms alongside any project-specific
            statement of work.
          </Section>

          <Section title="2. Engagement">
            Every project starts with a written scope. Changes to scope are
            handled through a change order that is signed by both sides
            before work continues.
          </Section>

          <Section title="3. Payments">
            Fixed-scope projects invoice per milestone; retainers invoice
            monthly, in advance. Invoices are due within 14 days unless the
            SOW says otherwise. Late invoices accrue 1% per month.
          </Section>

          <Section title="4. Intellectual property">
            Once a project is paid in full, deliverables shipped under it
            transfer to the client, excluding our pre-existing tooling and
            open-source libraries which remain under their original license.
          </Section>

          <Section title="5. Confidentiality">
            We treat anything shared during an engagement as confidential and
            only use it to deliver the work. Staff and contractors are bound
            by the same terms.
          </Section>

          <Section title="6. Warranty and liability">
            We warrant deliverables for 30 days post-launch. Beyond that,
            our liability is capped at the fees paid for the engagement in
            question.
          </Section>

          <Section title="7. Contact">
            Questions:{" "}
            <a
              href="mailto:anthony@zen-consulting.co"
              className="underline underline-offset-4"
            >
              anthony@zen-consulting.co
            </a>
            .
          </Section>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p style={{ lineHeight: 1.6, opacity: 0.8 }}>{children}</p>
    </section>
  );
}
