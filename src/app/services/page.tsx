import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, CircleCheck, ShieldCheck } from "lucide-react";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import { ShaderBackground } from "@/components/ui/shader-background";
import { SwapTabs } from "@/components/ui/swap-tabs";

export const metadata: Metadata = {
  title: "Services · Anym",
  description:
    "Software, cybersecurity and websites from one team: from refreshing what you already run, to replacing the software you rent, to a team that runs it for you. Bundles available. Every job quoted after a scoping call.",
};

type Level = {
  name: string;
  tagline: string;
  body: string;
  includes: string[];
  link?: { href: string; label: string };
};

type Bundle = {
  name: string;
  combo: string;
  pitch: string;
  includes: string[];
  featured?: boolean;
  tag?: string;
};

/* Each tab's levels climb by how deep the engagement goes, mirroring the
   portfolio's tier ladders. No prices by design: every job is quoted after
   scoping. */
const softwareLevels: Level[] = [
  {
    name: "Upgrade",
    tagline: "Bring older software up to today's standard.",
    body: "We modernise the systems you already run: current frameworks, faster screens, security patches, and a hosting move if you need one.",
    includes: ["System upgrades", "Speed fixes", "Security patches", "Hosting move"],
  },
  {
    name: "Connect",
    tagline: "Your tools, finally talking to each other.",
    body: "We link the software you already pay for, then let you run it from WhatsApp and command it by voice, in your own language.",
    includes: ["Tool integrations", "WhatsApp control", "Voice commands", "Local languages"],
  },
  {
    name: "Replace",
    tagline: "Stop renting software. Own it.",
    body: "We swap the tools you pay for every month (CRM, bookings, invoicing, inventory, helpdesk) for one system built around how you work. We start from software we have already built, so it goes live fast, and it is yours. No per-seat fees.",
    includes: ["CRM", "Bookings", "Invoicing", "Inventory", "Support desk", "One login for everything"],
    link: { href: "/portfolio", label: "See the software" },
  },
  {
    name: "Build",
    tagline: "Software made for exactly how you work.",
    body: "Custom systems and apps shaped around your workflow: internal tools, iOS and Android apps, payments and the back office behind them.",
    includes: ["Custom systems", "iOS and Android apps", "Payments", "Internal tools"],
  },
  {
    name: "Run",
    tagline: "Your software team, without hiring one.",
    body: "We host, monitor and keep improving what we build, and put an AI workforce on the repetitive jobs.",
    includes: ["Hosting and monitoring", "Fixes and changes", "AI workforce", "Dedicated engineers"],
  },
];

const softwareBundles: Bundle[] = [
  {
    name: "Switch",
    combo: "Replace + Run",
    featured: true,
    pitch: "Move off the software you rent, without the risk.",
    includes: ["Your data moved over, free", "Old and new side by side for a month", "Every app under one login", "Hosting and changes included"],
  },
  {
    name: "Modernise",
    combo: "Upgrade + Connect",
    pitch: "Bring an older setup up to date without starting over.",
    includes: ["Overhaul of your current system", "Tool integrations", "WhatsApp control and voice commands", "Free data migration"],
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

// Anym Shield plans (Wissen Baum's Packs 1-3, renamed). Detail lives on /security.
const securityLevels: Level[] = [
  {
    name: "Essential",
    tagline: "See everything on your network.",
    body: "Every device across your floors and sites found and tracked, the network watched for unusual activity, and weak spots scanned, all on live dashboards.",
    includes: ["Device tracking", "Network monitoring", "Weak-spot scanning", "Live dashboards"],
  },
  {
    name: "Managed",
    tagline: "Our team watches it for you.",
    body: "Everything in Essential, plus a team that watches your devices and network around the clock, alerts you the moment something is wrong, and investigates incidents.",
    includes: ["Everything in Essential", "24/7 team monitoring", "Instant alerts", "Incident investigation"],
  },
  {
    name: "Complete",
    tagline: "Full cover, with an expert on site.",
    body: "Everything in Managed, plus advanced firewall rules, root-cause analysis after incidents, an on-site security expert and training for your staff.",
    includes: ["Everything in Managed", "Advanced firewall rules", "On-site expert", "Staff training"],
  },
];

const websiteLevels: Level[] = [
  {
    name: "Refresh",
    tagline: "Make the site you have work better.",
    body: "We overhaul your existing website: faster pages, a cleaner build, current standards, and a site search engines can actually read.",
    includes: ["Website overhaul", "Speed and technical SEO", "Content moved over", "Hosting move"],
  },
  {
    name: "Launch",
    tagline: "Everything you need to go live.",
    body: "A new website designed and built around your business, with your brand and search basics in place from day one.",
    includes: ["Websites", "Logo and branding", "Technical SEO", "Mobile-first design"],
    link: { href: "/portfolio?kind=websites", label: "See the websites" },
  },
  {
    name: "Care",
    tagline: "Hosted, fixed and kept current.",
    body: "We host your site, keep it fast and secure, make your changes, and keep its search basics in shape month after month.",
    includes: ["Hosting", "Fixes and changes", "Speed and uptime checks", "Technical SEO upkeep"],
  },
];

const websiteBundles: Bundle[] = [
  {
    name: "Go Live",
    combo: "Launch + Care",
    featured: true,
    pitch: "For businesses getting online properly for the first time.",
    includes: ["New website", "Logo and branding", "Technical SEO", "3 months of hosting and care"],
  },
  {
    name: "Relaunch",
    combo: "Refresh + Care",
    pitch: "Your current site, rebuilt and looked after.",
    includes: ["Overhaul of your current site", "Speed and technical SEO", "Your content moved over", "3 months of hosting and care"],
  },
];

// Bundles that span tabs. Shown under all three, outside the toggle.
const crossBundles: Bundle[] = [
  {
    name: "App + Site",
    combo: "Build + Launch",
    pitch: "Order the app, get the website that goes with it.",
    includes: ["iOS and Android app", "Matching website, included", "Shared branding", "One launch date"],
  },
  {
    name: "Switch & Shield",
    combo: "Switch + Essential",
    tag: "New",
    pitch: "New software, protected from day one.",
    includes: ["Your data moved over, free", "Every app under one login", "Hosting and changes included", "Every device tracked and scanned"],
  },
  {
    name: "Your IT Department",
    combo: "Your Tech Team + Managed",
    pitch: "Software, hosting and security under one team.",
    includes: ["Custom build", "12 months of hosting and changes", "24/7 security monitoring", "One contact for everything"],
  },
];

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div
      className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 border-t pt-10 mb-10"
      style={{ borderColor: "var(--mono-black-300)" }}
    >
      <span className="mono-eyebrow md:pt-3">{eyebrow}</span>
      <div>
        <h2 style={{ fontSize: "var(--font-size-h3)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          {title}
        </h2>
        <p className="mt-4 max-w-[52ch] leading-relaxed text-[color:var(--mono-beige-100)]/70">{body}</p>
      </div>
    </div>
  );
}

/* Numbered rows in the portfolio's tier layout. */
function LevelRow({ l, n, prefix }: { l: Level; n: number; prefix: string }) {
  return (
    <div
      className="group grid md:grid-cols-[240px_1fr_auto] gap-6 md:gap-10 border-t py-10"
      style={{ borderColor: "var(--mono-black-300)" }}
    >
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-[color:var(--mono-beige-100)]/50">
            {prefix}{n}
          </span>
          <span className="text-6xl md:text-7xl font-semibold tracking-tight leading-none tabular-nums text-[color:var(--mono-black-100)] transition-colors duration-300 group-hover:text-[color:var(--mono-beige-100)]">
            {String(n).padStart(2, "0")}
          </span>
        </div>
        <h2 className="text-xl font-semibold mt-3">{l.name}</h2>
        <p className="text-sm mt-1.5 leading-relaxed max-w-[15rem] text-[color:var(--mono-beige-100)]/55">
          {l.tagline}
        </p>
      </div>

      <div className="flex flex-col gap-5 md:pt-2">
        <p className="max-w-[58ch] leading-relaxed text-[color:var(--mono-beige-100)]/80">{l.body}</p>
        <ul className="flex flex-wrap gap-2">
          {l.includes.map((item) => (
            <li
              key={item}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{ borderColor: "var(--mono-black-300)", background: "rgba(255,255,255,0.03)" }}
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
  );
}

/* Pricing-card layout (21st.dev): centred badge header, divider, check list,
   full-width button. The featured card gets the primary button and a ring;
   the rest get the quiet variant. */
function BundleGrid({ bundles }: { bundles: Bundle[] }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${bundles.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
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
  );
}

/* One tab: its level rows, then its bundles. Rows are direct children so
   SwapTabs can stagger them in. */
function ServiceTab({
  levels,
  prefix,
  bundles,
  bundleIntro,
  children,
}: {
  levels: Level[];
  prefix: string;
  bundles?: Bundle[];
  bundleIntro?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {levels.map((l, i) => (
        <LevelRow key={l.name} l={l} n={i + 1} prefix={prefix} />
      ))}
      {bundles && (
        <div className="mt-16">
          <SectionHead eyebrow="Bundles" title="Better together." body={bundleIntro ?? ""} />
          <BundleGrid bundles={bundles} />
        </div>
      )}
      {children}
    </div>
  );
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string | string[] }>;
}) {
  // Lands on Software; ?kind=security or ?kind=websites opens another tab
  // (portfolio project pages link here this way).
  const { kind } = await searchParams;
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "var(--mono-black-400)", color: "var(--mono-beige-100)" }}
    >
      <SiteNav />

      <section className="relative isolate overflow-hidden pt-40 pb-16">
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
            Software, cybersecurity and websites, each on its own ladder: from
            sharpening what you already run, to replacing the software you
            rent, to a team that runs it all for you. Pick a level, or bundle a
            few. Every job is quoted after a short scoping call.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mono-container">
          <SwapTabs
            initial={typeof kind === "string" ? kind : undefined}
            tabs={[
              {
                id: "software",
                label: "Software",
                content: (
                  <ServiceTab
                    levels={softwareLevels}
                    prefix="S"
                    bundles={softwareBundles}
                    bundleIntro="Software bundles combine levels so one engagement covers more. Each is scoped and quoted for your business."
                  />
                ),
              },
              {
                id: "security",
                label: "Cybersecurity",
                content: (
                  <ServiceTab levels={securityLevels} prefix="C">
                    <div
                      className="mt-6 rounded-xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                      style={{ borderColor: "var(--mono-black-300)", background: "var(--mono-card-bg)" }}
                    >
                      <div className="flex gap-4">
                        <ShieldCheck className="h-6 w-6 shrink-0 mt-0.5" aria-hidden />
                        <div>
                          <h3 className="text-lg font-semibold">Anym Shield</h3>
                          <p className="mt-1.5 max-w-[56ch] text-sm leading-relaxed text-[color:var(--mono-beige-100)]/70">
                            Operated 24/7 by an ISO 27001 certified team. Helps
                            you meet CERT-In and DPDP requirements.
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/security"
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[color:var(--mono-beige-100)] px-5 py-2.5 text-sm font-semibold text-[color:var(--mono-black-400)] transition-colors hover:bg-[color:var(--mono-beige-400)]"
                      >
                        How Anym Shield works <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ServiceTab>
                ),
              },
              {
                id: "websites",
                label: "Websites",
                content: (
                  <ServiceTab
                    levels={websiteLevels}
                    prefix="W"
                    bundles={websiteBundles}
                    bundleIntro="Website bundles pair a build with the care that keeps it fast. Each is scoped and quoted for your business."
                  />
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Cross-tab bundles: same under every tab */}
      <section className="pb-28">
        <div className="mono-container">
          <SectionHead
            eyebrow="Across the board"
            title="Mix and match."
            body="Bundles that span software, security and websites. Each is scoped and quoted for your business."
          />
          <BundleGrid bundles={crossBundles} />
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
