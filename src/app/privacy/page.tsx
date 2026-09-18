import type { Metadata } from "next";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy · Zen Consulting",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="opacity-60 text-sm">Last updated: 2026-09-18</p>

          <Section title="What we collect">
            When you contact us or book a call we collect your name, email,
            company and whatever context you share about the project. When
            we build software that we operate for you, we handle end-user
            data only as instructed by the client and only for the purpose
            of running the product.
          </Section>

          <Section title="How we use it">
            To reply to inquiries, run the engagement, invoice, and keep the
            software we host running. We never sell or rent personal data.
          </Section>

          <Section title="Where it lives">
            Client project data lives on infrastructure the client approves
            during onboarding (typically a major cloud in a region of their
            choosing). Contact-form messages live in our own inbox and
            operational tooling.
          </Section>

          <Section title="Sharing">
            We share data only with the sub-processors needed to deliver
            the work — hosting, email, error tracking, analytics — each of
            which is listed in every SOW we sign.
          </Section>

          <Section title="Your rights">
            You can ask us to access, correct, export or delete personal
            data we hold. Reach out and we will action it within 30 days.
          </Section>

          <Section title="Contact">
            Privacy questions:{" "}
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
