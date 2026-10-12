import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import { ShaderBackground } from "@/components/ui/shader-background";

export const metadata: Metadata = {
  title: "Services · Zen Consulting",
  description:
    "Six ways to work with Zen, from refreshing what you already run, to replacing the software you rent, to a team that runs it for you. Bundles available. Every job quoted after a scoping call.",
};

/* Levels climb by how deep the engagement goes, mirroring the portfolio's
   tier ladders. No prices by design: every job is quoted after scoping. */
const levels = [
  {
    n: 1,
    name: "Refresh",
    tagline: "Make what you already have work better.",
    body: "We overhaul an existing website or system: faster pages, cleaner code, current standards, and a site search engines can actually read.",
    includes: ["Website overhaul", "Speed and technical SEO", "System upgrades", "Hosting move"],
  },
  {
    n: 2,
    name: "Launch",
    tagline: "Everything you need to go live.",
    body: "A new website or app, designed and built around your business, with your brand and search basics in place from day one.",
    includes: ["Websites", "iOS and Android apps", "Logo and branding", "Technical SEO"],
  },
  {
    n: 3,
    name: "Connect",
    tagline: "Your tools, finally talking to each other.",
    body: "We link the software you already pay for, then let you run it from WhatsApp and command it by voice, in your own language.",
    includes: ["Tool integrations", "WhatsApp control", "Voice commands", "Local languages"],
  },
  {
    n: 4,
    name: "Replace",
    tagline: "Stop renting software. Own it.",
    body: "We swap the tools you pay for every month (CRM, bookings, invoicing, inventory, helpdesk) for one system built around how you work. We start from software we have already built, so it goes live fast, and it is yours. No per-seat fees.",
    includes: ["CRM", "Bookings", "Invoicing", "Inventory", "Support desk", "One login for everything"],
    link: { href: "/portfolio?kind=software", label: "See the software" },
  },
  {
    n: 5,
    name: "Build",
    tagline: "Software made for exactly how you work.",
    body: "Custom systems shaped around your workflow: internal tools, commerce apps, payments and the back office behind them.",
    includes: ["Custom systems", "Commerce apps", "Payments", "Internal tools"],
  },
  {
    n: 6,
    name: "Run",
    tagline: "Your software team, without hiring one.",
    body: "We host, monitor and keep improving what we build, and put an AI workforce on the repetitive jobs.",
    includes: ["Hosting and monitoring", "Fixes and changes", "AI workforce", "Dedicated engineers"],
  },
] as {
  n: number;
  name: string;
  tagline: string;
  body: string;
  includes: string[];
  link?: { href: string; label: string };
}[];

const bundles = [
  {
    name: "Go Live",
    combo: "Launch + Run",
    pitch: "For businesses getting online properly for the first time.",
    includes: ["Website or app", "Logo and branding", "Technical SEO", "3 months of hosting and care"],
  },
  // Featured, so it sits centre of the top row like the reference design.
  {
    name: "Switch",
    combo: "Replace + Run",
    featured: true,
    pitch: "Move off the software you rent, without the risk.",
    includes: ["Your data moved over, free", "Old and new side by side for a month", "Every app under one login", "Hosting and changes included"],
  },
  {
    name: "App + Site",
    combo: "Build + Launch",
    pitch: "Order the app, get the website that goes with it.",
    includes: ["iOS and Android app", "Matching website, included", "Shared branding", "One launch date"],
  },
  {
    name: "Modernise",
    combo: "Refresh + Connect",
    pitch: "Bring an older setup up to date without starting over.",
    includes: ["Overhaul of your site or system", "Tool integrations", "WhatsApp control and voice commands", "Free data migration"],
  },
  {
    name: "AI Workforce",
    combo: "Connect + Run",
    tag: "New",
    pitch: "AI agents that take the repetitive jobs off your team.",
    includes: ["Payment reminders", "Replies to customer queries", "Reorder drafts when stock runs low", "A daily brief for the owner"],
  },
  {
    name: "Your Tech Team",
    combo: "Build + Run",
    pitch: "A custom system plus the team that keeps it running.",
    includes: ["Custom build", "12 months of hosting and changes", "AI workforce included", "A direct line to the engineers"],
  },
];

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "var(--mono-black-400)", color: "var(--mono-beige-100)" }}
    >
      <SiteNav />

      <section className="relative isolate overflow-hidden pt-40 pb-28">
        <style>{`
          @keyframes mono-services-in {
            from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
            to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
          }
          .mono-services-intro {
            animation: mono-services-in 1s var(--ease-expo-out, cubic-bezier(0.16,1,0.3,1)) both;
          }
          @media (prefers-reduced-motion: reduce) {
            .mono-services-intro { animation: none; }
          }
        `}</style>
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
          }}
        >
          <ShaderBackground className="absolute inset-0" />
        </div>

        <div className="mono-services-intro relative z-10 mono-container flex flex-col items-center gap-10 text-center">
          <span className="mono-eyebrow">Services</span>
          <h1
            className="max-w-[22ch]"
            style={{
              fontSize: "var(--font-size-h2)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Start where you are. One team takes it from there.
          </h1>
          <p
            style={{
              maxWidth: "56ch",
              fontSize: "var(--font-size-text-main)",
              lineHeight: 1.6,
              opacity: 0.75,
            }}
          >
            Every engagement sits on one ladder, from sharpening what you
            already run, to replacing the software you rent, to a team that
            runs it for you. Pick a level, or bundle a few. Every job is
            quoted after a short scoping call.
          </p>
        </div>
      </section>

      {/* Levels: numbered rows in the portfolio's tier layout */}
      <section className="pb-28">
        <div className="mono-container flex flex-col">
          {levels.map((l) => (
            <div
              key={l.n}
              className="group grid md:grid-cols-[240px_1fr_auto] gap-6 md:gap-10 border-t py-10"
              style={{ borderColor: "var(--mono-black-300)" }}
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-[color:var(--mono-beige-100)]/50">
                    S{l.n}
                  </span>
                  <span className="text-6xl md:text-7xl font-semibold tracking-tight leading-none tabular-nums text-[color:var(--mono-black-100)] transition-colors duration-300 group-hover:text-[color:var(--mono-beige-100)]">
                    {String(l.n).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mt-3">{l.name}</h2>
                <p className="text-sm mt-1.5 leading-relaxed max-w-[15rem] text-[color:var(--mono-beige-100)]/55">
                  {l.tagline}
                </p>
              </div>

              <div className="flex flex-col gap-5 md:pt-2">
                <p className="max-w-[58ch] leading-relaxed text-[color:var(--mono-beige-100)]/80">
                  {l.body}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {l.includes.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--mono-black-300)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {l.link && (
                  <Link
                    href={l.link.href}
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {l.link.label} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              <div className="md:pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[color:var(--mono-beige-100)] hover:text-[color:var(--mono-black-400)]"
                  style={{ borderColor: "var(--mono-black-200)" }}
                >
                  Get a quote <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundles */}
      <section className="pb-28">
        <div className="mono-container">
          <div
            className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 border-t pt-10 mb-10"
            style={{ borderColor: "var(--mono-black-300)" }}
          >
            <span className="mono-eyebrow md:pt-3">Bundles</span>
            <div>
              <h2
                style={{
                  fontSize: "var(--font-size-h3)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Better together.
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-[color:var(--mono-beige-100)]/70">
                Bundles combine levels so one engagement covers more. Each is
                scoped and quoted for your business.
              </p>
            </div>
          </div>

          {/* Pricing-card layout (21st.dev): centred badge header, divider,
              check list, full-width button. The featured card gets the
              primary button and a ring; the rest get the quiet variant. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b) => (
              <div
                key={b.name}
                aria-label={`${b.name} bundle`}
                className={`flex flex-col rounded-xl border p-6 text-left transition-transform duration-300 hover:-translate-y-1 ${
                  b.featured ? "ring-1 ring-[color:var(--mono-beige-100)]/10 shadow-sm" : ""
                }`}
                style={{
                  borderColor: b.featured ? "var(--mono-beige-400)" : "var(--mono-black-300)",
                  background: "var(--mono-card-bg)",
                }}
              >
                <div className="text-center">
                  <div className="inline-flex flex-wrap items-center justify-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        b.featured
                          ? "bg-[color:var(--mono-beige-100)] text-[color:var(--mono-black-400)]"
                          : "bg-white/10 text-[color:var(--mono-beige-100)]"
                      }`}
                    >
                      {b.combo}
                    </span>
                    {b.featured && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-[color:var(--mono-beige-100)]">
                        Core offer
                      </span>
                    )}
                    {b.tag && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-[color:var(--mono-beige-100)]">
                        {b.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 mt-4 text-2xl font-semibold">{b.name}</h3>
                  <p className="text-sm text-[color:var(--mono-beige-100)]/70">{b.pitch}</p>
                </div>

                <div className="my-5 border-t" style={{ borderColor: "var(--mono-black-300)" }} />

                <ul className="space-y-3">
                  {b.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm text-[color:var(--mono-beige-100)]/80">
                      <CircleCheck className="mr-2 h-4 w-4 shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      b.featured
                        ? "bg-[color:var(--mono-beige-100)] text-[color:var(--mono-black-400)] hover:bg-[color:var(--mono-beige-400)]"
                        : "bg-white/10 text-[color:var(--mono-beige-100)] hover:bg-white/15"
                    }`}
                  >
                    Get a quote <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anything else */}
      <section className="pb-32">
        <div className="mono-container">
          <div
            className="rounded-xl border px-8 py-14 md:px-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
            style={{ borderColor: "var(--mono-black-300)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <span className="mono-eyebrow">Something else</span>
              <h2
                className="mt-4 max-w-[18ch]"
                style={{
                  fontFamily: "'Animo', 'Khteka', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 400,
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                }}
              >
                Don&apos;t see it? If it&apos;s software, we&apos;ll build it.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--mono-beige-100)] px-6 py-3 font-semibold text-[color:var(--mono-black-400)] transition-colors hover:bg-[color:var(--mono-beige-400)]"
              >
                Book a scoping call <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors hover:bg-white/5"
                style={{ borderColor: "var(--mono-black-200)" }}
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
