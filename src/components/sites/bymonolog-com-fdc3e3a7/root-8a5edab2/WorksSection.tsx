"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/icons";
import { useReveal } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/useReveal";

type Palette = {
  /** Primary saturated accent — top stripe. */
  primary: string;
  /** Deep companion — chip background. */
  deep: string;
  /** Warm highlight — metric-label eyebrow. */
  honey: string;
};

type Work = {
  index: string;
  name: string;
  category: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  poster: string;
  href: string;
  palette: Palette;
};

const WORKS: Work[] = [
  {
    index: "01",
    name: "Options Monitor",
    category: "Trading dashboard",
    tagline:
      "Self-hosted bull-put-spread desk with a live broker connection, backtester, AI news feed and TradingView-style charts.",
    metric: "Live",
    metricLabel: "broker-linked options desk",
    poster: "/works-posters/options-monitor/hero.png",
    href: "https://github.com/4nhy/options-monitor",
    // Fresh field: lime + moss + honey
    palette: { primary: "#d3e57a", deep: "#3f4a1a", honey: "#f0d484" },
  },
  {
    index: "02",
    name: "EXOSYS",
    category: "Exoplanet intelligence",
    tagline:
      "Real-time 3D star system paired with a Python XGBoost classifier for real exoplanet transit signals.",
    metric: "10",
    metricLabel: "real exoplanets modelled end-to-end",
    poster: "/works-posters/exosys/system.svg",
    href: "https://github.com/dhvqn1/ExoSys",
    // Sunset space: hot pink + plum + peach
    palette: { primary: "#ec5aa6", deep: "#4a2d5e", honey: "#f9c6a0" },
  },
  {
    index: "03",
    name: "Open",
    category: "Cybersecurity audit AI",
    tagline:
      "AI-driven browser agent that clicks, fills and navigates real apps to surface XSS, SQLi and data-flow leaks.",
    metric: "E2E",
    metricLabel: "browser-driven vulnerability discovery",
    poster: "/works-posters/open/hero.png",
    href: "https://github.com/4nhy/Open",
    // Warm brick: rust + brick + sand
    palette: { primary: "#e7623a", deep: "#5a1a0e", honey: "#f2d6a2" },
  },
  {
    index: "04",
    name: "Atlas",
    category: "Currency atlas",
    tagline:
      "Fast visual reference for world currencies, notes and flags, built as a static workspace with no build step.",
    metric: "200+",
    metricLabel: "currencies mapped with real notes and flags",
    poster: "/works-posters/atlas/map.png",
    href: "https://github.com/ritesh1234-art/Atlas",
    // Coastal: sky + deep sea + sand
    palette: { primary: "#7ec2d8", deep: "#173e50", honey: "#e8d7a4" },
  },
];

function WorkCard({ work }: { work: Work }) {
  const ref = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className="group relative overflow-hidden rounded-[14px]"
      style={{
        background: "#171512",
        color: "var(--mono-beige-100)",
        boxShadow:
          "0 20px 60px -30px rgba(0,0,0,0.6), 0 2px 8px -2px rgba(0,0,0,0.4)",
        transition: "transform 0.6s var(--ease-primary)",
      }}
    >
      {/* Thin accent stripe — primary colour of the trio. */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: work.palette.primary }}
      />

      <a
        href={work.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="p-3 pt-4">
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-[8px]"
            style={{
              background: "#0d0d0d",
              boxShadow: "inset 0 0 0 1px rgba(255,255,240,0.08)",
            }}
          >
            <Image
              src={work.poster}
              alt={`${work.name} screenshot`}
              fill
              sizes="(max-width: 900px) 100vw, 700px"
              className="object-cover"
              unoptimized
            />

            {/* Index chip — top-left, deep companion colour. */}
            <div className="absolute top-3 left-3 z-10">
              <span
                className="mono-eyebrow rounded-full px-2.5 py-1"
                style={{
                  background: work.palette.deep,
                  color: work.palette.honey,
                }}
              >
                /{work.index} · {work.category}
              </span>
            </div>
            {/* Metric chip — top-right, primary colour pop. */}
            <div className="absolute top-3 right-3 z-10">
              <span
                className="inline-flex items-baseline gap-1 rounded-full px-3 py-1 text-[13px] font-semibold"
                style={{
                  background: work.palette.primary,
                  color: work.palette.deep,
                }}
              >
                {work.metric}
              </span>
            </div>
          </div>
        </div>

        <div className="relative px-5 md:px-6 pb-5 md:pb-6 pt-2 flex flex-col gap-2">
          <h3
            style={{
              fontSize: "clamp(1.35rem, 2.1vw, 1.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--mono-beige-100)",
            }}
          >
            {work.name}
          </h3>
          <p
            style={{
              fontSize: "var(--font-size-text-small)",
              lineHeight: 1.5,
              opacity: 0.75,
              maxWidth: "56ch",
              color: "var(--mono-beige-100)",
            }}
          >
            {work.tagline}
          </p>
          <div
            className="mono-eyebrow mt-1 inline-flex items-center gap-1"
            style={{ color: work.palette.honey }}
          >
            {work.metricLabel} <span aria-hidden>↗</span>
          </div>
        </div>
      </a>
    </li>
  );
}

export function WorksSection() {
  return (
    <section
      id="work"
      className="relative"
      style={{
        background: "var(--mono-black-400)",
        paddingBlock: "clamp(4rem, 7vw, 7rem)",
      }}
    >
      <style>{`
        li.group { transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1); }
        li.group:hover { transform: translateY(-2px); }
      `}</style>

      <div className="mono-container flex flex-col gap-12">
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="mono-eyebrow">Selected Works</span>
            <h2
              className="max-w-[26ch]"
              style={{
                fontSize: "var(--font-size-h3)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Four open-source builds from the Zen team. Live systems, real repos.
            </h2>
          </div>
          <a
            href="https://github.com/4nhy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--mono-beige-100)]/40 px-4 py-2 text-[13px] hover:bg-[color:var(--mono-beige-100)] hover:text-[color:var(--mono-black-400)] transition-colors"
          >
            View on GitHub <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKS.map((w) => (
            <WorkCard key={w.index} work={w} />
          ))}
        </ul>
      </div>
    </section>
  );
}
