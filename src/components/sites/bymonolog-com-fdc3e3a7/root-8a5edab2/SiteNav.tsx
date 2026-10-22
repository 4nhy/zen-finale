"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
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
        <Link href="/" aria-label="ANYM" className="flex items-baseline select-none">
          {/* The Anym mark stands in for the A: the blackletter A, outlined
              from UnifrakturMaguntia. 0.6875em is Khteka's cap height, so on
              the shared baseline it is exactly as tall as N, Y and M. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/anym-mark.svg"
            alt=""
            aria-hidden
            className="h-[0.6875em] w-auto shrink-0 mr-[0.06em]"
          />
          <span aria-hidden className="font-[700] tracking-[-0.02em] text-[color:var(--mono-beige-100)]">
            NYM
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
        {/* Desktop shows the links above; phones hide them, so give phones a
            way into Services instead of an empty header. */}
        <Link
          href="/services"
          className="md:hidden rounded-full border border-[color:var(--mono-beige-100)]/70 px-4 py-2 text-[12px] tracking-tight hover:bg-[color:var(--mono-beige-100)] hover:text-[color:var(--mono-black-400)] transition-colors"
        >
          Services
        </Link>
      </div>
    </nav>
  );
}
