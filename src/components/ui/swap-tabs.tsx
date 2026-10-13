"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { startTransition, useLayoutEffect, useRef, useState, type ReactNode } from "react";

/* `action` is an optional link shown beside the toggle that follows the
   active tab (e.g. Portfolio's Software tab links to Software services). */
export type SwapTab = { id: string; label: string; content: ReactNode; action?: { href: string; label: string } };

/* Pill toggle + animated content swap, shared by Portfolio and Services.
   Content arrives as props, so a click re-renders the toggle, not the cards. */
export function SwapTabs({ tabs, initial }: { tabs: SwapTab[]; initial?: string }) {
  const [active, setActive] = useState(() => tabs.find((t) => t.id === initial)?.id ?? tabs[0].id);
  // `active` moves the pill at once; `shown` swaps the content after the old
  // one has faded out, so the two never overlap.
  const [shown, setShown] = useState(active);
  const [leaving, setLeaving] = useState(false);
  const swapTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const select = (id: string) => {
    if (id === active) return;
    setActive(id);
    clearTimeout(swapTimer.current);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setLeaving(true);
    // The new content renders as a transition, in small slices, so the main
    // thread stays free and the pill keeps gliding while it mounts.
    swapTimer.current = setTimeout(
      () => startTransition(() => {
        setShown(id);
        setLeaving(false);
      }),
      reduce ? 0 : 160
    );
  };

  // Sliding pill: sized to the active button. Written straight to the DOM so
  // it lands before paint; the first placement skips the transition so the
  // pill doesn't grow in from the left on load.
  const pillRef = useRef<HTMLSpanElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  useLayoutEffect(() => {
    const place = () => {
      const b = btnRefs.current[active];
      const p = pillRef.current;
      if (!b || !p) return;
      const first = !p.dataset.placed;
      if (first) p.style.transition = "none";
      p.style.width = `${b.offsetWidth}px`;
      p.style.transform = `translateX(${b.offsetLeft}px)`;
      if (first) {
        void p.offsetWidth; // commit the jump before re-enabling the transition
        p.style.transition = "";
        p.dataset.placed = "1";
      }
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  const action = tabs.find((t) => t.id === active)?.action;

  return (
    <>
      <style>{`
        /* Opacity + transform only. No blur, since blurring image-heavy rows
           forces a full repaint every frame. */
        @keyframes mono-swap-out { to { opacity: 0; transform: translateY(-8px); } }
        @keyframes mono-swap-in { from { opacity: 0; transform: translateY(16px); } }
        .mono-swap-out { animation: mono-swap-out 0.16s cubic-bezier(0.4, 0, 1, 1) forwards; }
        /* Rows of the incoming content rise in one after another. */
        .mono-swap-in > * > * {
          animation: mono-swap-in 0.55s var(--ease-expo-out, cubic-bezier(0.16,1,0.3,1)) both;
        }
        .mono-swap-in > * > *:nth-child(2) { animation-delay: 50ms; }
        .mono-swap-in > * > *:nth-child(3) { animation-delay: 100ms; }
        .mono-swap-in > * > *:nth-child(4) { animation-delay: 150ms; }
        .mono-swap-in > * > *:nth-child(n+5) { animation-delay: 200ms; }
        @keyframes mono-action-in { from { opacity: 0; transform: translateY(4px); } }
        .mono-action-in { animation: mono-action-in 0.35s var(--ease-expo-out, ease-out) both; }
        @media (prefers-reduced-motion: reduce) {
          .mono-swap-out, .mono-swap-in > * > *, .mono-action-in { animation: none; }
        }
      `}</style>

      <div className="mb-16 flex flex-col items-center gap-4">
        {/* Until the pill is placed (server HTML, pre-hydration) the active
            button paints its own background so the toggle never looks blank. */}
        <div
          className="relative inline-flex p-1 rounded-full border [&:not(:has([data-placed]))_[aria-pressed=true]]:bg-[color:var(--mono-beige-100)]"
          style={{
            borderColor: "var(--mono-black-200)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            ref={pillRef}
            aria-hidden
            className="absolute inset-y-1 left-0 rounded-full bg-[color:var(--mono-beige-100)] transition-[transform,width] duration-[450ms] ease-[var(--ease-expo-out)] will-change-transform"
          />
          {tabs.map((t) => (
            <button
              key={t.id}
              ref={(el) => {
                btnRefs.current[t.id] = el;
              }}
              type="button"
              aria-pressed={active === t.id}
              onClick={() => select(t.id)}
              className="relative z-10 px-4 sm:px-6 py-2 text-sm font-medium rounded-full transition-[color,transform] duration-300 active:scale-95"
              style={{ color: active === t.id ? "var(--mono-black-400)" : "var(--mono-beige-100)" }}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* Quiet text link under the toggle; re-keyed so it fades on change. */}
        {action && (
          <Link
            key={active}
            href={action.href}
            className="mono-action-in group inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--mono-beige-100)]/60 underline-offset-4 transition-colors hover:text-[color:var(--mono-beige-100)] hover:underline"
          >
            {action.label}
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>

      <div key={shown} className={leaving ? "mono-swap-out" : "mono-swap-in"}>
        {tabs.find((t) => t.id === shown)?.content}
      </div>
    </>
  );
}
