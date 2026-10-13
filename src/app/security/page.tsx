import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  MonitorSmartphone,
  ScanSearch,
  ShieldCheck,
  Siren,
} from "lucide-react";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import { ShaderBackground } from "@/components/ui/shader-background";

export const metadata: Metadata = {
  title: "Zen Shield · Zen Consulting",
  description:
    "Zen Shield: the cyber security Indian businesses are now required to have, run for you 24/7 by an ISO 27001 certified team. Helps you meet CERT-In and DPDP requirements.",
};

/* Say "helps you meet", never "makes you compliant". */
const rules = [
  {
    source: "CERT-In · since 2022",
    title: "6 hours to report an attack",
    body: "Companies in India must report certain cyber incidents to CERT-In within 6 hours of noticing them, and keep logs of their systems for 180 days.",
  },
  {
    source: "DPDP Act · from May 2027",
    title: "Safeguards for personal data",
    body: "Any business holding customer or staff data must protect it with reasonable security safeguards and report breaches. Failing to can cost up to ₹250 crore.",
  },
  {
    source: "Your customers",
    title: "Proof before they sign",
    body: "Larger clients, insurers and foreign partners now send security questionnaires and expect clear answers before they sign.",
  },
];

const parts = [
  {
    icon: MonitorSmartphone,
    name: "Know every device",
    body: "A live list of every computer, server, printer and router across your floors and sites. You hear the moment something new appears or goes offline.",
  },
  {
    icon: Activity,
    name: "Watch the network",
    body: "Traffic is watched around the clock for unusual behaviour, data leaving where it should not, and attacks in progress.",
  },
  {
    icon: ScanSearch,
    name: "Find the weak spots",
    body: "Regular scans for missing updates and security holes, ranked by risk, with clear steps to fix each one.",
  },
  {
    icon: Siren,
    name: "A 24/7 control room",
    body: "Analysts watch the alerts day and night, respond when something happens, and help you investigate and report it.",
  },
];

const steps = [
  { name: "Talk", body: "A short call about your floors, sites and devices, so we know what needs watching." },
  { name: "Set up", body: "We install the monitoring. It runs in the cloud, or on your own servers if your data must stay in-house." },
  { name: "Watch", body: "Your network is monitored 24/7. Real threats are acted on, not just logged." },
  { name: "Report", body: "One plain-language report every month: what we found, what was fixed, what needs you." },
];

/* Wissen Baum's Packs 1-3, renamed. No prices, same as Services. */
const plans = [
  {
    name: "Essential",
    pitch: "See everything on your network.",
    includes: ["Every device found and tracked", "Network monitoring", "Weak-spot scanning", "Unusual-activity detection", "Live dashboards"],
  },
  {
    name: "Managed",
    featured: true,
    pitch: "Our team watches it for you.",
    includes: ["Everything in Essential", "Alerts the moment something is wrong", "Deeper investigation of incidents", "Network map views", "Your devices and network monitored by our team"],
  },
  {
    name: "Complete",
    pitch: "Full cover, with an expert on site.",
    includes: ["Everything in Managed", "Advanced firewall rules", "Root-cause analysis after incidents", "An on-site security expert", "Security training for your staff"],
  },
];

const industries = ["Hospitals and clinics", "Manufacturing", "Schools and colleges", "IT and BPO", "Hotels", "Retail chains", "Logistics"];

const faqs = [
  {
    q: "Do we need our own IT or security staff?",
    a: "No. The team runs the monitoring and responds to incidents. You get alerts when something needs a decision, and a monthly report in plain language.",
  },
  {
    q: "What gets installed?",
    a: "Monitoring software on your network, set up by us. It can run in the cloud, or on your own servers if your data must stay in-house.",
  },
  {
    q: "Does this make us compliant?",
    a: "No single product can. Zen Shield gives you the monitoring and incident response that CERT-In and the DPDP Act expect, and we walk you through the rest.",
  },
  {
    q: "Who handles our data?",
    a: "An ISO 27001:2022 certified team, under a written agreement signed before anything is installed.",
  },
];

/* "team" opens into who actually runs it. Native <details>, so no JS. */
function OperatedBy({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <details className={`group max-w-[60ch] ${align === "center" ? "mx-auto text-center" : ""}`}>
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border px-4 py-2 text-sm [&::-webkit-details-marker]:hidden"
        style={{ borderColor: "var(--mono-black-200)", background: "rgba(255,255,255,0.03)" }}
      >
        <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
        <span>
          Operated 24/7 by an ISO 27001 certified{" "}
          <span className="font-semibold underline decoration-dotted underline-offset-4">team</span>
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--mono-beige-100)]/70">
        Zen Shield is run with our strategic partner, Wissen Baum Engineering
        Solutions, an engineering and IT security firm certified to ISO
        27001:2022 and ISO 9001:2015, with offices in Pune and Delhi, Wolfsburg
        in Germany, and Troy in the USA. Their analysts watch your network
        around the clock. Zen is your single point of contact, from the first
        call to every monthly report.
      </p>
    </details>
  );
}

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
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
        {body && <p className="mt-4 max-w-[56ch] leading-relaxed text-[color:var(--mono-beige-100)]/70">{body}</p>}
      </div>
    </div>
  );
}

export default function SecurityPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "var(--mono-black-400)", color: "var(--mono-beige-100)" }}
    >
      <SiteNav />

      <section className="relative isolate overflow-hidden pt-40 pb-28">
        <style>{`
          @keyframes mono-security-in {
            from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
            to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
          }
          .mono-security-intro {
            animation: mono-security-in 1s var(--ease-expo-out, cubic-bezier(0.16,1,0.3,1)) both;
          }
          @media (prefers-reduced-motion: reduce) {
            .mono-security-intro { animation: none; }
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

        <div className="mono-security-intro relative z-10 mono-container flex flex-col items-center gap-10 text-center">
          <span className="mono-eyebrow">Zen Shield</span>
          <h1
            className="max-w-[20ch]"
            style={{ fontSize: "var(--font-size-h2)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em" }}
          >
            The cyber security you&apos;re now required to have. Run for you, 24/7.
          </h1>
          <p style={{ maxWidth: "56ch", fontSize: "var(--font-size-text-main)", lineHeight: 1.6, opacity: 0.75 }}>
            Every device tracked, every weak spot found, and a control room
            watching your network day and night. Built for businesses with
            several floors or sites and no security team of their own.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--mono-beige-100)] px-6 py-3 font-semibold text-[color:var(--mono-black-400)] transition-colors hover:bg-[color:var(--mono-beige-400)]"
            >
              Book a security call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#plans"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors hover:bg-white/5"
              style={{ borderColor: "var(--mono-black-200)" }}
            >
              See the plans
            </Link>
          </div>
          <OperatedBy />
        </div>
      </section>

      {/* The rules */}
      <section className="pb-28">
        <div className="mono-container">
          <SectionHead
            eyebrow="The rules"
            title="Security is no longer optional."
            body="Three things now expect every Indian business to protect its systems and data, whatever its size."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rules.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-3 rounded-xl border p-6"
                style={{ borderColor: "var(--mono-black-300)", background: "var(--mono-card-bg)" }}
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--mono-beige-100)]/50">
                  {r.source}
                </span>
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--mono-beige-100)]/70">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[color:var(--mono-beige-100)]/45">
            Zen Shield helps you meet these requirements. It is not legal advice.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="pb-28">
        <div className="mono-container">
          <SectionHead
            eyebrow="What's included"
            title="Four layers, one service."
            body="No software to buy and nothing to learn. We put all four in place and keep them running."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {parts.map(({ icon: Icon, name, body }) => (
              <div
                key={name}
                className="flex gap-5 rounded-xl border p-6"
                style={{ borderColor: "var(--mono-black-300)", background: "rgba(255,255,255,0.02)" }}
              >
                <Icon className="h-6 w-6 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--mono-beige-100)]/70">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-28">
        <div className="mono-container">
          <SectionHead eyebrow="How it works" title="Running in days, watched for years." />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <li key={s.name} className="group border-t pt-6" style={{ borderColor: "var(--mono-black-300)" }}>
                <span className="text-5xl font-semibold tracking-tight leading-none tabular-nums text-[color:var(--mono-black-100)] transition-colors duration-300 group-hover:text-[color:var(--mono-beige-100)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--mono-beige-100)]/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plans: same pricing-card layout as the Services bundles */}
      <section id="plans" className="pb-28 scroll-mt-24">
        <div className="mono-container">
          <SectionHead
            eyebrow="Plans"
            title="Pick your level of cover."
            body="Every plan is quoted for your setup after a short call: how many sites, floors and devices you run."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div
                key={p.name}
                aria-label={`${p.name} plan`}
                className={`flex flex-col rounded-xl border p-6 text-left transition-transform duration-300 hover:-translate-y-1 ${
                  p.featured ? "ring-1 ring-[color:var(--mono-beige-100)]/10 shadow-sm" : ""
                }`}
                style={{
                  borderColor: p.featured ? "var(--mono-beige-400)" : "var(--mono-black-300)",
                  background: "var(--mono-card-bg)",
                }}
              >
                <div className="text-center">
                  <div className="inline-flex flex-wrap items-center justify-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        p.featured
                          ? "bg-[color:var(--mono-beige-100)] text-[color:var(--mono-black-400)]"
                          : "bg-white/10 text-[color:var(--mono-beige-100)]"
                      }`}
                    >
                      Level {i + 1}
                    </span>
                    {p.featured && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-[color:var(--mono-beige-100)]">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 mt-4 text-2xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-[color:var(--mono-beige-100)]/70">{p.pitch}</p>
                </div>

                <div className="my-5 border-t" style={{ borderColor: "var(--mono-black-300)" }} />

                <ul className="space-y-3">
                  {p.includes.map((item) => (
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
                      p.featured
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

      {/* Who it's for + who runs it */}
      <section className="pb-28">
        <div className="mono-container">
          <SectionHead
            eyebrow="Who it's for"
            title="Many devices, no security team."
            body="If you run several floors or sites, or dozens of computers, and nobody's job is security, Zen Shield is built for you."
          />
          <ul className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <li
                key={i}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{ borderColor: "var(--mono-black-300)", background: "rgba(255,255,255,0.03)" }}
              >
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              ["24/7", "Monitoring and response"],
              ["ISO 27001", "Certified operations team"],
              ["3 countries", "India, Germany and the USA"],
            ].map(([big, small]) => (
              <div key={big} className="border-t pt-6" style={{ borderColor: "var(--mono-black-300)" }}>
                <div className="text-4xl font-semibold tracking-tight">{big}</div>
                <div className="mt-2 text-sm text-[color:var(--mono-beige-100)]/60">{small}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <OperatedBy align="left" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="mono-container">
          <SectionHead eyebrow="Questions" title="Before you ask." />
          <div className="flex flex-col">
            {faqs.map((f) => (
              <details key={f.q} className="group border-t py-6" style={{ borderColor: "var(--mono-black-300)" }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-3 max-w-[64ch] leading-relaxed text-[color:var(--mono-beige-100)]/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="pb-32">
        <div className="mono-container">
          <div
            className="rounded-xl border px-8 py-14 md:px-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
            style={{ borderColor: "var(--mono-black-300)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              <span className="mono-eyebrow">Zen Shield</span>
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
                Find out what&apos;s really on your network.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--mono-beige-100)] px-6 py-3 font-semibold text-[color:var(--mono-black-400)] transition-colors hover:bg-[color:var(--mono-beige-400)]"
              >
                Book a security call <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors hover:bg-white/5"
                style={{ borderColor: "var(--mono-black-200)" }}
              >
                All services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
