"use client";

import { ExternalLink } from "lucide-react";
import { useReveal } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/useReveal";

// Inline GitHub mark — lucide-react removed its "Github" icon in recent
// versions; a small hand-drawn svg avoids the version churn.
function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.57.11.79-.25.79-.55 0-.27-.01-.99-.02-1.94-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.79.55A11.51 11.51 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5z" />
    </svg>
  );
}

const TEAM = [
  {
    initial: "A",
    name: "Anthony",
    role: "Founder · fullstack",
    focus:
      "Brings ideas into execution by leading the team, shaping project direction, and working across both the backend and frontend.",
    github: "https://github.com/4nhy",
  },
  {
    initial: "D",
    name: "Dhvani",
    role: "Co-founder · backend & security",
    focus:
      "Builds the systems behind every product while keeping security at the forefront, ensuring every layer is designed to withstand threat.",
    github: "https://github.com/dhvqn1",
  },
  {
    initial: "S",
    name: "Swara",
    role: "Frontend & design",
    focus:
      "Shapes the frontend of every product, turning user needs into intuitive, polished experiences designed around how people actually use them.",
    github: "https://github.com/swara4747",
  },
];

const PRINCIPLES = [
  { t: "Direct.", d: "Talk to the engineers building it. No account managers." },
  { t: "Senior.", d: "A short bench. No junior contractors on your work." },
  { t: "Full-stack.", d: "Interface, backend, data, infrastructure. Same team." },
  { t: "One workspace.", d: "Every app under one Zen account. Shared auth. One invoice." },
  { t: "Kept running.", d: "The engineers who built it maintain it. Fixes, changes, infra. Included." },
  { t: "Priced lower.", d: "Small team. Shared infrastructure. Below per-seat SaaS." },
];

const STATS = [
  { n: "4", l: "Products shipped." },
  { n: "5", l: "Disciplines. One team." },
  { n: "< 1 day", l: "Reply time." },
  { n: "4 to 10 wks", l: "Build window." },
];

export function AboutSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="about"
      className="relative"
      style={{
        background: "var(--mono-black-400)",
        color: "var(--mono-beige-100)",
        paddingBlock: "clamp(4rem, 7vw, 7rem)",
      }}
    >
      <div className="mono-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* ── Left rail — sticky identity + partner ──────────────────── */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="mono-eyebrow">About us</span>
              <h2
                style={{
                  fontSize: "var(--font-size-h3)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.02,
                }}
              >
                A short bench.
                <br />
                Founders on every
                <br />
                engagement.
              </h2>
              <p className="opacity-70" style={{ lineHeight: 1.6 }}>
                Direct, senior, full-stack. Every build shipped and kept
                running by the same team.
              </p>
            </div>

            {/* Partner card at foot of rail */}
            <a
              href="https://www.wissenbaumllp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border p-5 transition-colors"
              style={{
                borderColor: "var(--mono-black-300)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.18em]"
                style={{ color: "var(--mono-black-50)" }}
              >
                Strategic partner
              </span>
              <div className="flex items-center gap-2">
                <h4
                  className="text-base font-semibold"
                  style={{ color: "var(--mono-beige-100)" }}
                >
                  Wissenbaum LLP
                </h4>
                <ExternalLink
                  className="w-3.5 h-3.5"
                  style={{ color: "var(--mono-black-50)" }}
                />
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ opacity: 0.7 }}
              >
                Legal, commercial and corporate governance handled by
                Wissenbaum LLP. Contracts, structure, long-view decisions.
                Their standing sits behind ours.
              </p>
            </a>
          </div>
        </aside>

        {/* ── Right column — scrolling body ──────────────────────────── */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {/* Team roster */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold">The team.</h3>
              <span
                className="text-[11px] font-mono uppercase tracking-widest"
                style={{ color: "var(--mono-black-50)" }}
              >
                {TEAM.length} on the bench
              </span>
            </div>
            <ul className="grid gap-4 md:grid-cols-3">
              {TEAM.map((m) => {
                const Card = m.github ? "a" : "div";
                const cardProps = m.github
                  ? {
                      href: m.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};
                return (
                  <li key={m.name} className="h-full">
                    <Card
                      {...cardProps}
                      className={`group flex flex-col gap-4 h-full rounded-2xl border p-5 transition-colors ${
                        m.github ? "cursor-pointer" : ""
                      }`}
                      style={{
                        borderColor: "var(--mono-black-300)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="w-11 h-11 rounded-xl grid place-items-center border text-lg font-semibold shrink-0"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            borderColor: "rgba(255,255,255,0.15)",
                            color: "var(--mono-beige-100)",
                          }}
                        >
                          {m.initial}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h4
                            className="text-base font-semibold leading-tight"
                            style={{ color: "var(--mono-beige-100)" }}
                          >
                            {m.name}
                          </h4>
                          <span
                            className="text-[11px] font-mono uppercase tracking-wider block mt-1"
                            style={{ color: "var(--mono-black-50)" }}
                          >
                            {m.role}
                          </span>
                        </div>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ opacity: 0.7 }}
                      >
                        {m.focus}
                      </p>
                      {m.github && (
                        <span
                          className="inline-flex items-center gap-1.5 text-xs mt-auto pt-2 transition-colors"
                          style={{ color: "var(--mono-black-50)" }}
                        >
                          <GithubMark className="w-3.5 h-3.5" /> github
                        </span>
                      )}
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* How we work */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold">How we work.</h3>
              <span
                className="text-[11px] font-mono uppercase tracking-widest"
                style={{ color: "var(--mono-black-50)" }}
              >
                A small studio. On purpose.
              </span>
            </div>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <li
                  key={p.t}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--mono-black-300)" }}
                >
                  <span
                    className="text-sm font-mono"
                    style={{ color: "var(--mono-black-50)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4
                    className="text-lg font-semibold mt-2 mb-2"
                    style={{ color: "var(--mono-beige-100)" }}
                  >
                    {p.t}
                  </h4>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ opacity: 0.7 }}
                  >
                    {p.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats strip */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
            style={{
              background: "var(--mono-black-300)",
              borderColor: "var(--mono-black-300)",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.l}
                className="px-6 py-8 text-center"
                style={{ background: "var(--mono-card-bg)" }}
              >
                <div
                  className="tracking-tight tabular-nums"
                  style={{
                    fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                    fontWeight: 700,
                    color: "var(--mono-beige-100)",
                  }}
                >
                  {s.n}
                </div>
                <div
                  className="text-sm mt-2 leading-snug"
                  style={{ color: "var(--mono-black-50)" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
