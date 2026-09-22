"use client";

import { AutoRotator } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/AutoRotator";
import { useCounter, useReveal } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/useReveal";

// The real stack we build on — no invented client logos.
// Icons come from Simple Icons' CDN, tinted to match the dark section.
const STACK = [
  { slug: "react", name: "React" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "python", name: "Python" },
  { slug: "fastapi", name: "FastAPI" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "supabase", name: "Supabase" },
  { slug: "kotlin", name: "Kotlin" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "docker", name: "Docker" },
  { slug: "vercel", name: "Vercel" },
];

const PILLARS = [
  {
    label: "01 · START FROM READY",
    big: "Pick a template we already run and shape it to your team.",
    desc: "Skip the six-month greenfield build. We take one of our production systems, rebrand it, adapt the workflows to your operation, and hand you the keys.",
  },
  {
    label: "02 · CUSTOM, RUN BY US",
    big: "A system built for the way you actually operate, hosted by our team.",
    desc: "We design and build the system around your real workflows, then keep it running on our infrastructure. Every fix, every upgrade, every uptime call is ours.",
  },
  {
    label: "03 · CUSTOM, KEPT BY YOU",
    big: "Same custom build, delivered to your engineers on day one.",
    desc: "We ship the codebase, the deployment scripts and the runbook. Your team owns the repo, the domain, the database, the roadmap. No lock-in, no dependency.",
  },
];

function StatBlock({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [ref, value] = useCounter(target);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-1">
        <span
          ref={ref}
          className="text-[color:var(--mono-black-400)] tabular-nums"
          style={{
            fontSize: "clamp(3rem, 5vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontSize: "clamp(2rem, 3vw, 3rem)",
            fontWeight: 700,
            color: "var(--mono-black-200)",
            letterSpacing: "-0.03em",
          }}
        >
          {suffix}
        </span>
      </div>
      <p
        className="mono-eyebrow"
        style={{ color: "var(--mono-black-100)", maxWidth: "18ch" }}
      >
        {label}
      </p>
    </div>
  );
}

export function ProblemsSection() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section
      className="mono-light relative"
      style={{
        background: "#ffffff",
        color: "var(--mono-black-400)",
        paddingBlock: "clamp(4rem, 7vw, 7rem)",
      }}
    >
      <div ref={revealRef} className="mono-container flex flex-col gap-14 lg:gap-16">
        {/* Two-column body: narrative left, rotator right. On wide viewports
            the empty right side gets used without cramming the left column. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left column — stats, headline, body, founder */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <StatBlock
                target={20}
                suffix="+"
                label="Custom systems shipped for founder-led operations"
              />
              <StatBlock
                target={90}
                suffix="%"
                label="Of clients keep us on to run the system after launch"
              />
            </div>

            <h2
              className="max-w-[18ch]"
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Stop piecing together software that wasn't built for the way your business operates. Build around the way you actually work.
            </h2>

            <p
              style={{
                fontSize: "var(--font-size-text-main)",
                maxWidth: "48ch",
                lineHeight: 1.55,
                color: "var(--mono-black-100)",
              }}
            >
              Custom solutions, affordable alternatives, and every tool connected through one account, one platform, and one experience.
            </p>

            <div
              className="flex items-center gap-3 mono-eyebrow"
              style={{ color: "var(--mono-black-100)" }}
            >
              <span
                aria-hidden
                className="inline-block h-9 w-9 rounded-full border"
                style={{ borderColor: "var(--mono-black-200)" }}
              />
              <span>
                <span style={{ color: "var(--mono-black-400)" }}>Anthony</span>
                {" · "}Founder, Zen Consulting
              </span>
            </div>
          </div>

          {/* Right column — rotating pillar card (fills the previously empty
              right side, top-aligned with the stats row above it) */}
          <div className="lg:col-span-5 lg:pl-4">
            <div
              className="lg:sticky lg:top-24 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l"
              style={{ borderColor: "rgba(20,20,20,0.12)" }}
            >
              <div className="lg:pl-8">
                <div className="mb-6 flex items-center gap-2">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "rgba(20,20,20,0.6)" }}
                  />
                  <span
                    className="text-[11px] font-mono uppercase tracking-[0.18em]"
                    style={{ color: "rgba(20,20,20,0.55)" }}
                  >
                    Three ways in. One team.
                  </span>
                </div>
                <AutoRotator
                  tone="dark"
                  interval={5200}
                  minHeight={240}
                  items={PILLARS.map((p) => (
                    <div key={p.big}>
                      <div
                        className="text-[11px] font-mono uppercase tracking-[0.18em]"
                        style={{ color: "rgba(20,20,20,0.55)" }}
                      >
                        {p.label}
                      </div>
                      <div
                        className="mt-3 tracking-tight leading-[1.05]"
                        style={{
                          fontSize: "clamp(1.35rem, 1.9vw, 1.9rem)",
                          fontWeight: 700,
                          color: "var(--mono-black-400)",
                        }}
                      >
                        {p.big}
                      </div>
                      <p
                        className="mt-4 leading-relaxed"
                        style={{
                          fontSize: "var(--font-size-text-small)",
                          color: "rgba(20,20,20,0.65)",
                          maxWidth: "36rem",
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stack strip — the real tools we build on. Honest social proof
            for a young studio: no invented client logos, no fake metrics. */}
        <div className="flex flex-col gap-6">
          <span
            className="text-[11px] font-mono uppercase tracking-[0.2em] text-center"
            style={{ color: "var(--mono-black-100)" }}
          >
            The stack we build on
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {STACK.map((t) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={t.slug}
                src={`https://cdn.simpleicons.org/${t.slug}/393632`}
                alt={t.name}
                title={t.name}
                loading="lazy"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
