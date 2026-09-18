"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Quiet global route-transition indicator.
 *
 * Bottom-left pill, sized like the Next.js dev indicator. Fades in the
 * moment the visitor clicks an internal <a>/<Link>, sits at "Rendering…"
 * while the new route mounts, then fades out ~350ms after the pathname
 * (or search params) settle. Idle by default so it never fights for
 * attention when the site is at rest.
 *
 * Uses App Router primitives only — no dev-only APIs — so it works in
 * production and doesn't rely on Next's built-in dev overlay.
 */
export function RouteStatus() {
  const pathname = usePathname();
  const search = useSearchParams();
  const [state, setState] = useState<"idle" | "pending" | "settled">("idle");
  const lastKey = useRef(`${pathname}?${search?.toString() ?? ""}`);
  const hideTimer = useRef<number | null>(null);

  // Intercept clicks on internal links so we can show the pill BEFORE
  // React starts rendering the new segment (feels instant).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!href || href.startsWith("#")) return;
      // Only intercept in-app navigations (relative or same-origin, non-blank target).
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self") return;
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      } catch {
        return;
      }
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      setState("pending");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // When the router URL actually changes, hold "Rendering…" for a beat then fade out.
  useEffect(() => {
    const key = `${pathname}?${search?.toString() ?? ""}`;
    if (key === lastKey.current) return;
    lastKey.current = key;
    setState("pending");
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      setState("settled");
      hideTimer.current = window.setTimeout(() => {
        setState("idle");
        hideTimer.current = null;
      }, 700);
    }, 320);
  }, [pathname, search]);

  useEffect(() => () => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
  }, []);

  const visible = state !== "idle";
  const label = state === "settled" ? "Ready" : "Rendering";

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 left-4 z-[60]"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? "0" : "8px"})`,
        transition:
          "opacity 0.25s cubic-bezier(0.83, 0, 0.17, 1), transform 0.25s cubic-bezier(0.83, 0, 0.17, 1)",
      }}
    >
      <div
        className="flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md"
        style={{
          borderColor: "rgba(255,255,255,0.12)",
          background: "rgba(8,8,7,0.75)",
          color: "var(--mono-beige-100)",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        <span
          aria-hidden
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{
            background: state === "settled" ? "#a1e560" : "#22d3ee",
            boxShadow:
              state === "pending"
                ? "0 0 0 3px rgba(34,211,238,0.18)"
                : "none",
            transition: "background 0.2s ease, box-shadow 0.2s ease",
          }}
        />
        <span>
          {label}
          {state === "pending" && <span className="ml-0.5 opacity-70">…</span>}
        </span>
      </div>
    </div>
  );
}
