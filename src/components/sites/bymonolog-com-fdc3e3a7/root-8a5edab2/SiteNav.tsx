"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Affiliate", href: "/partners" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,padding] duration-300",
        scrolled
          ? "backdrop-blur-md bg-[color:var(--background)]/70"
          : "bg-transparent",
      ].join(" ")}
      style={{ transitionTimingFunction: "var(--ease-primary)" }}
    >
      <div className="mono-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 select-none">
          {/* Real Zen mark (SVG copied from Zen's public/favicon.svg). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/zen-logo.svg"
            alt=""
            aria-hidden
            className="h-6 w-6 shrink-0"
          />
          <span className="font-[700] tracking-[-0.02em] text-[color:var(--mono-beige-100)]">
            ZEN CONSULTING
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-[13px] text-[color:var(--mono-beige-100)]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-full border border-[color:var(--mono-beige-100)]/70 px-4 py-2 text-[12px] tracking-tight hover:bg-[color:var(--mono-beige-100)] hover:text-[color:var(--mono-black-400)] transition-colors"
        >
          Book a project
        </Link>
      </div>
    </nav>
  );
}
