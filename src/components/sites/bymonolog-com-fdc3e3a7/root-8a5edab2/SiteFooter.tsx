"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/icons";

const STUDIO_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zen-consulting-188872406/" },
  { label: "GitHub", href: "https://github.com/4nhy" },
];

function usePuneClock() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export function SiteFooter() {
  const clock = usePuneClock();
  return (
    <footer
      style={{
        background: "var(--mono-black-400)",
        color: "var(--mono-beige-100)",
        paddingBlock: "clamp(4rem, 6vw, 6rem)",
      }}
    >
      <div className="mono-container flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Studio */}
          <div className="flex flex-col gap-4">
            <span className="mono-eyebrow">Studio</span>
            <ul className="flex flex-col gap-2">
              {STUDIO_LINKS.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="inline-flex items-center gap-2 text-[color:var(--mono-beige-100)] opacity-85 hover:opacity-100"
                  >
                    {i.label} <ArrowUpRightIcon className="h-3 w-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio details */}
          <div className="flex flex-col gap-4">
            <span className="mono-eyebrow">Studio details</span>
            <p className="text-[13px] leading-relaxed opacity-85">
              anthony@zen-consulting.co
              <br />
              Based in Pune, India. Remote-first team, working worldwide.
            </p>
            <span className="mono-eyebrow mt-4">Socials</span>
            <ul className="flex flex-col gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] opacity-85 hover:opacity-100"
                  >
                    {s.label} <ArrowUpRightIcon className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <span className="mono-eyebrow">Legal</span>
            <ul className="flex flex-col gap-2">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-[13px] opacity-85 hover:opacity-100"
                  >
                    {l.label} <ArrowUpRightIcon className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pune clock */}
          <div className="flex flex-col gap-3 items-start">
            <span className="mono-eyebrow">Pune</span>
            <div
              className="tabular-nums"
              style={{
                fontFamily: "'Suisse Mono', ui-monospace, monospace",
                fontSize: "2rem",
                letterSpacing: "-0.02em",
              }}
            >
              {clock || "--:--:--"}
            </div>
            <span className="mono-eyebrow">IST · GMT +5:30</span>
            <span
              className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px]"
              style={{ borderColor: "var(--mono-beige-100)" }}
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ background: "#8dd97a" }}
              />
              Booking projects for Q3 &lsquo;2026
            </span>
          </div>
        </div>

        {/* Partner Program strip — quiet promo linking to /partners */}
        <Link
          href="/partners"
          className="group flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4 transition-colors"
          style={{
            borderColor: "var(--mono-black-200)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="flex flex-wrap items-baseline gap-3">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.18em]"
              style={{ color: "var(--mono-black-50)" }}
            >
              Partner Program
            </span>
            <span
              className="text-[14px]"
              style={{ color: "var(--mono-beige-100)" }}
            >
              15% recurring on every retained customer. By invitation.
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-[12px] opacity-70 group-hover:opacity-100 group-hover:gap-2.5 transition-all"
          >
            Apply <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </Link>

        <div
          className="flex flex-wrap items-baseline justify-between gap-3 border-t pt-6"
          style={{ borderColor: "var(--mono-black-200)" }}
        >
          <p className="text-[12px] opacity-70">
            © 2026 Zen Consulting · Custom software, built and run by us.
          </p>
          <a
            href="#top"
            className="text-[12px] opacity-70 hover:opacity-100 inline-flex items-center gap-1"
          >
            Back to top <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
