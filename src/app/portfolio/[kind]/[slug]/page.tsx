import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, ExternalLink } from "lucide-react";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import {
  websites,
  software,
  websiteTiers,
  softwareTiers,
} from "@/components/sites/bymonolog-com-fdc3e3a7/shared/portfolioData";

type Params = { kind: "website" | "software"; slug: string };

export function generateStaticParams() {
  return [
    ...websites.map((w) => ({ kind: "website", slug: w.slug })),
    ...software.map((s) => ({ kind: "software", slug: s.id })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { kind, slug } = await params;
  if (kind === "website") {
    const w = websites.find((x) => x.slug === slug);
    return {
      title: w
        ? `${w.title} · Portfolio · Zen Consulting`
        : "Not found · Portfolio",
      description: w?.blurb,
    };
  }
  const s = software.find((x) => x.id === slug);
  return {
    title: s
      ? `${s.title} · Portfolio · Zen Consulting`
      : "Not found · Portfolio",
    description: s?.blurb,
  };
}

export default async function PortfolioItem({
  params,
}: {
  params: Promise<Params>;
}) {
  const { kind, slug } = await params;

  if (kind === "website") {
    const w = websites.find((x) => x.slug === slug);
    if (!w) notFound();
    const tier = websiteTiers.find((t) => t.n === w.tier);
    const liveHref = `/websites/${w.slug}/index.html`;
    return (
      <DetailLayout>
        <PortfolioChrome
          kindLabel="Website"
          title={w.title}
          tag={w.tag}
          accent={w.accent}
          liveHref={liveHref}
        />
        <LivePreview src={liveHref} alt={w.title} />
        <DetailBody
          blurb={w.blurb}
          rows={[
            tier ? { label: "Tier", value: `${tier.label} — ${tier.tagline}` } : null,
            { label: "Category", value: w.tag },
            {
              label: "Live site",
              value: (
                <a
                  href={liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 underline underline-offset-4"
                >
                  {liveHref} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ),
            },
          ].filter(Boolean) as Row[]}
        />
      </DetailLayout>
    );
  }

  const s = software.find((x) => x.id === slug);
  if (!s) notFound();
  const tier = softwareTiers.find((t) => t.n === s.tier);
  const kindLabel = s.kind === "project" ? "Open source" : "Demo";
  // The Zen SPA is built with VITE_STANDALONE=1 and copied into
  // public/zen-app/. HashRouter means every demo route lives at
  // /zen-app/index.html#/demo/{id} — works on any static host, no rewrites
  // required. `demoUrl` on an item overrides this (e.g. a hosted URL).
  const demoHref =
    s.demoUrl ||
    (s.kind === "demo" ? `/zen-app/index.html#/demo/${s.id}` : undefined);
  return (
    <DetailLayout>
      <PortfolioChrome
        kindLabel={kindLabel}
        title={s.title.split("·")[0].trim()}
        tag={s.tag}
        liveHref={demoHref || s.github}
      />
      {demoHref ? (
        <LivePreview src={demoHref} alt={s.title} />
      ) : (
        <PosterFrame src={`/portfolio/software/${s.id}.png`} alt={s.title} />
      )}
      <DetailBody
        blurb={s.detail}
        rows={[
          tier
            ? { label: "Tier", value: `${tier.label} — ${tier.tagline}` }
            : null,
          { label: "Category", value: s.tag },
          s.tech ? { label: "Stack", value: s.tech } : null,
          s.status ? { label: "Status", value: s.status } : null,
          s.result
            ? {
                label: "Result",
                value: `${s.result}${s.resultDesc ? ` — ${s.resultDesc}` : ""}`,
              }
            : null,
          s.github
            ? {
                label: "Repo",
                value: (
                  <a
                    href={s.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-100"
                  >
                    {s.github.replace(/^https?:\/\//, "")}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ),
              }
            : null,
        ].filter(Boolean) as Row[]}
      />
    </DetailLayout>
  );
}

/* ── layout scaffolding ─────────────────────────────────────────── */

function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--mono-black-400)",
        color: "var(--mono-beige-100)",
      }}
    >
      {/* Spacer that reserves the exact height of the fixed chrome bar below
          — desktop row is ~56px, mobile has a second info row (~+28px). */}
      <div aria-hidden className="h-[56px] md:h-[56px]" style={{ height: "var(--chrome-h, 88px)" }} />
      <style>{`@media (min-width: 768px){:root{--chrome-h:56px;}}@media (max-width:767px){:root{--chrome-h:88px;}}`}</style>
      {children}
      <SiteFooter />
    </main>
  );
}

/**
 * Compact portfolio "demo viewer" chrome bar. Replaces SiteNav on detail
 * pages so the preview iframe below can breathe. Layout matches the
 * reference: Back-to-portfolio on the left, kind · title · tag in the
 * middle, Open-in-new-tab + Start-a-project on the right.
 */
function PortfolioChrome({
  kindLabel,
  title,
  tag,
  accent,
  liveHref,
}: {
  kindLabel: string;
  title: string;
  tag: string;
  accent?: string;
  liveHref?: string;
}) {
  return (
    <div
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-md"
      style={{
        background: "rgba(8,8,7,0.75)",
        borderBottom: "1px solid var(--mono-black-300)",
      }}
    >
      <div className="mono-container flex items-center gap-4 py-3">
        {/* Left · back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[13px] shrink-0 opacity-80 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        {/* Center · kind · title · tag */}
        <div className="flex-1 min-w-0 hidden md:flex items-center justify-center gap-2 text-[13px]">
          <span
            aria-hidden
            className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: accent || "var(--mono-beige-100)" }}
          />
          <span
            className="font-mono uppercase tracking-[0.16em] text-[11px] shrink-0"
            style={{ color: "var(--mono-black-50)" }}
          >
            {kindLabel}
          </span>
          <span
            aria-hidden
            className="shrink-0"
            style={{ color: "var(--mono-black-200)" }}
          >
            ·
          </span>
          <span
            className="font-semibold truncate"
            style={{ color: "var(--mono-beige-100)" }}
          >
            {title}
          </span>
          <span
            aria-hidden
            className="shrink-0"
            style={{ color: "var(--mono-black-200)" }}
          >
            ·
          </span>
          <span
            className="truncate"
            style={{ color: "var(--mono-black-50)" }}
          >
            {tag}
          </span>
        </div>

        {/* Right · open-in-new-tab + start-a-project */}
        <div className="ml-auto flex items-center gap-3 shrink-0">
          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] opacity-80 hover:opacity-100 transition-opacity"
            >
              Open in new tab <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-[12px] font-semibold hover:opacity-90 transition-opacity"
            style={{
              background: "var(--mono-beige-100)",
              color: "var(--mono-black-400)",
            }}
          >
            Start a project
          </Link>
        </div>
      </div>

      {/* Mobile · center info row wraps below on narrow screens */}
      <div className="mono-container md:hidden pb-2 flex items-center gap-2 text-[12px]">
        <span
          aria-hidden
          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: accent || "var(--mono-beige-100)" }}
        />
        <span
          className="font-mono uppercase tracking-[0.16em] text-[10px] shrink-0"
          style={{ color: "var(--mono-black-50)" }}
        >
          {kindLabel}
        </span>
        <span
          className="font-semibold truncate"
          style={{ color: "var(--mono-beige-100)" }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

/** Full-width iframe of the actual thing, sitting behind a subtle overlay
 *  pill so the visitor can either look at it in-place or launch it fully. */
function LivePreview({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="pt-6 pb-6">
      <div className="mono-container">
        <div
          className="relative rounded-2xl overflow-hidden border"
          style={{
            borderColor: "var(--mono-black-300)",
            background: "var(--mono-card-bg)",
            aspectRatio: "16 / 9",
          }}
        >
          <iframe
            src={src}
            title={alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function PosterFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="pt-6 pb-6">
      <div className="mono-container">
        <div
          className="relative rounded-2xl overflow-hidden border"
          style={{
            borderColor: "var(--mono-black-300)",
            background: "var(--mono-card-bg)",
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 900px) 100vw, 1200px"
            className="object-cover object-top"
            unoptimized
            priority
          />
        </div>
      </div>
    </section>
  );
}

function DetailBody({ blurb, rows }: { blurb: string; rows: Row[] }) {
  return (
    <section className="pb-24">
      <div className="mono-container grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
        <div className="lg:col-span-8">
          <p
            style={{
              fontSize: "var(--font-size-text-large)",
              lineHeight: 1.6,
              opacity: 0.85,
            }}
          >
            {blurb}
          </p>
        </div>
        <div className="lg:col-span-4">
          <DetailMeta rows={rows} />
        </div>
      </div>
    </section>
  );
}

type Row = { label: string; value: React.ReactNode };

function DetailMeta({ rows }: { rows: Row[] }) {
  return (
    <dl
      className="flex flex-col"
      style={{ borderColor: "var(--mono-black-300)" }}
    >
      {rows.map((r) => (
        <div
          key={r.label}
          className="py-4 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-6"
          style={{ borderTop: "1px solid var(--mono-black-300)" }}
        >
          <dt
            className="text-[11px] font-mono uppercase tracking-[0.18em]"
            style={{ color: "var(--mono-black-50)" }}
          >
            {r.label}
          </dt>
          <dd style={{ opacity: 0.9 }}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
