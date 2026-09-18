"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Construction } from "lucide-react";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import {
  websites,
  websiteTiers,
  software,
  softwareTiers,
  type WebsiteItem,
  type SoftwareItem,
} from "@/components/sites/bymonolog-com-fdc3e3a7/shared/portfolioData";

type Kind = "websites" | "software";

export default function PortfolioPage() {
  const [kind, setKind] = useState<Kind>("websites");

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "var(--mono-black-400)", color: "var(--mono-beige-100)" }}
    >
      <SiteNav />

      <section className="pt-32 pb-16">
        <div className="mono-container flex flex-col items-center gap-10 text-center">
          <span className="mono-eyebrow">Portfolio</span>
          <h1
            className="max-w-[24ch]"
            style={{
              fontSize: "var(--font-size-h2)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Two catalogs. One team building and running both.
          </h1>
          <p
            style={{
              maxWidth: "56ch",
              fontSize: "var(--font-size-text-main)",
              lineHeight: 1.6,
              opacity: 0.75,
            }}
          >
            Websites climb a build-complexity ladder, from a hand-tuned static
            brochure to a WebGL-scored, fully-composed set-piece. Software
            climbs a scope ladder, from a one-job tool to a full platform we
            operate.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex p-1 rounded-full border"
            style={{
              borderColor: "var(--mono-black-200)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(6px)",
            }}
          >
            {(["websites", "software"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className="relative px-6 py-2 text-sm font-medium rounded-full transition-colors"
                style={{
                  color:
                    kind === k
                      ? "var(--mono-black-400)"
                      : "var(--mono-beige-100)",
                  background:
                    kind === k ? "var(--mono-beige-100)" : "transparent",
                }}
              >
                {k === "websites" ? "Websites" : "Software"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mono-container">
          {kind === "websites" ? <WebsiteCatalog /> : <SoftwareCatalog />}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* ── Websites ───────────────────────────────────────────────────────── */

function WebsiteCatalog() {
  return (
    <div className="flex flex-col gap-14">
      {websiteTiers.map((tier) => {
        const items = websites.filter((w) => w.tier === tier.n).slice(0, 3);
        const slots: (WebsiteItem | null)[] = [
          ...items,
          ...Array.from({ length: Math.max(0, 3 - items.length) }, () => null),
        ];
        const empty = items.length === 0;
        return (
          <div
            key={tier.n}
            className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 border-t pt-8"
            style={{ borderColor: "var(--mono-black-300)" }}
          >
            <TierHeader tier={tier} />
            {empty ? (
              <UnderConstructionRow reason="No sites in this tier yet." />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {slots.map((w, i) =>
                  w ? <WebsiteCard key={w.id} w={w} /> : <UnderConstructionCard key={i} />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function WebsiteCard({ w }: { w: WebsiteItem }) {
  return (
    <Link
      href={`/portfolio/website/${w.slug}`}
      className="group relative block w-full aspect-video rounded-xl overflow-hidden border transition-transform hover:-translate-y-1"
      style={{
        borderColor: "var(--mono-black-300)",
        background: "var(--mono-card-bg)",
      }}
    >
      <Image
        src={`/portfolio/websites/${w.slug}.png`}
        alt={w.title}
        fill
        sizes="(max-width: 900px) 100vw, 33vw"
        className="object-cover object-top"
        unoptimized
      />
      <div
        className="absolute inset-0 opacity-90 group-hover:opacity-70 transition-opacity"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,7,0.92) 0%, rgba(8,8,7,0.4) 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-2.5 left-2.5">
        <span
          className="w-2 h-2 rounded-full block"
          style={{ background: w.accent }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-[11px] font-medium text-[color:var(--mono-beige-100)]/80">
          {w.tag}
        </span>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <h3 className="text-lg font-semibold text-[color:var(--mono-beige-100)] leading-tight">
            {w.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[color:var(--mono-beige-100)]/60 group-hover:text-[color:var(--mono-beige-100)] transition-colors shrink-0" />
        </div>
        <p className="text-sm text-[color:var(--mono-beige-100)]/70 leading-snug mt-1 max-h-0 overflow-hidden opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300">
          {w.blurb}
        </p>
      </div>
    </Link>
  );
}

/* ── Software ───────────────────────────────────────────────────────── */

function SoftwareCatalog() {
  const projects = software.filter((s) => s.kind === "project");
  return (
    <div className="flex flex-col gap-14">
      {/* Featured team projects — shipped open-source repos */}
      <div
        className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 border-t pt-8"
        style={{ borderColor: "var(--mono-black-300)" }}
      >
        <div className="md:pt-1">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-[color:var(--mono-beige-100)]/50">
              ★
            </span>
            <span
              className="text-6xl md:text-7xl font-semibold tracking-tight leading-none tabular-nums"
              style={{ color: "var(--mono-black-100)" }}
            >
              00
            </span>
          </div>
          <h3 className="text-xl font-semibold mt-3">Shipped by the team</h3>
          <p
            className="text-sm mt-1.5 leading-relaxed max-w-[15rem]"
            style={{ color: "var(--mono-beige-100)", opacity: 0.55 }}
          >
            Open-source repos we designed, built and still maintain.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.map((d) => (
            <SoftwareCard key={d.id} demo={d} />
          ))}
        </div>
      </div>

      {softwareTiers.map((tier) => {
        const items = software.filter(
          (s) => s.kind === "demo" && s.tier === tier.n
        );
        return (
          <div
            key={tier.n}
            className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 border-t pt-8"
            style={{ borderColor: "var(--mono-black-300)" }}
          >
            <TierHeader tier={tier} />
            {items.length === 0 ? (
              <UnderConstructionRow reason="No products at this tier yet." />
            ) : (
              <div className="flex flex-wrap gap-4">
                {items.map((d) => (
                  <SoftwareCard key={d.id} demo={d} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SoftwareCard({ demo }: { demo: SoftwareItem }) {
  return (
    <Link
      href={`/portfolio/software/${demo.id}`}
      className="group relative w-full sm:w-[320px] aspect-video rounded-xl overflow-hidden border transition-transform hover:-translate-y-1"
      style={{
        borderColor: "var(--mono-black-300)",
        background: "var(--mono-card-bg)",
      }}
    >
      <Image
        src={`/portfolio/software/${demo.id}.png`}
        alt={demo.title}
        fill
        sizes="(max-width: 640px) 100vw, 320px"
        className="object-cover object-top"
        unoptimized
      />
      <div
        className="absolute inset-0 opacity-90 group-hover:opacity-70 transition-opacity"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,7,0.9) 0%, rgba(8,8,7,0.25) 45%, transparent 100%)",
        }}
      />
      {demo.result && (
        <div className="absolute top-2.5 right-2.5">
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "var(--mono-beige-100)",
              backdropFilter: "blur(4px)",
            }}
          >
            {demo.result}
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-[11px] font-medium text-[color:var(--mono-beige-100)]/80">
          {demo.tag}
        </span>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <h3 className="text-lg font-semibold text-[color:var(--mono-beige-100)] leading-tight">
            {demo.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[color:var(--mono-beige-100)]/60 group-hover:text-[color:var(--mono-beige-100)] transition-colors shrink-0" />
        </div>
        <p className="text-sm text-[color:var(--mono-beige-100)]/70 leading-snug mt-1 max-h-0 overflow-hidden opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300">
          {demo.blurb}
        </p>
      </div>
    </Link>
  );
}

/* ── shared ─────────────────────────────────────────────────────────── */

function TierHeader({ tier }: { tier: { n: number; label: string; tagline: string } }) {
  return (
    <div className="md:pt-1">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-[color:var(--mono-beige-100)]/50">
          T{tier.n}
        </span>
        <span
          className="text-6xl md:text-7xl font-semibold tracking-tight leading-none tabular-nums"
          style={{ color: "var(--mono-black-100)" }}
        >
          {String(tier.n).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-xl font-semibold mt-3">{tier.label}</h3>
      <p
        className="text-sm mt-1.5 leading-relaxed max-w-[15rem]"
        style={{ color: "var(--mono-beige-100)", opacity: 0.55 }}
      >
        {tier.tagline}
      </p>
    </div>
  );
}

function UnderConstructionCard() {
  return (
    <div
      className="relative w-full aspect-video rounded-xl border border-dashed flex flex-col items-center justify-center gap-2"
      style={{
        borderColor: "var(--mono-black-300)",
        background: "rgba(255,255,255,0.02)",
        color: "var(--mono-beige-100)",
        opacity: 0.4,
      }}
    >
      <Construction className="w-5 h-5" />
      <span className="text-xs font-medium">Under construction</span>
    </div>
  );
}

function UnderConstructionRow({ reason }: { reason?: string }) {
  return (
    <div
      className="rounded-xl border border-dashed py-16 flex flex-col items-center justify-center gap-3"
      style={{
        borderColor: "var(--mono-black-300)",
        background: "rgba(255,255,255,0.02)",
        color: "var(--mono-beige-100)",
        opacity: 0.55,
      }}
    >
      <Construction className="w-6 h-6" />
      <span className="text-sm font-medium">Under construction</span>
      {reason && <span className="text-xs opacity-70">{reason}</span>}
    </div>
  );
}
