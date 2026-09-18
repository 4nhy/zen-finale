"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Auto-rotating context box with a CSS-driven timer bar.
 *
 * The bar is a pure CSS `scaleX` animation so it stays smooth even while the
 * WebGL Threads / grain saturate the main thread. That same animation is the
 * single clock: `onAnimationEnd` advances the card, and hover pauses it via
 * `animation-play-state`, so the bar and the advance can't drift.
 */
export function AutoRotator({
  items,
  interval = 5500,
  className = "",
  minHeight = 170,
  tone = "light",
}: {
  items: ReactNode[];
  interval?: number;
  className?: string;
  minHeight?: number;
  /** "light" = white text on dark backgrounds. "dark" = near-black text on
   *  a light background (used for the white/cream ProblemsSection). */
  tone?: "light" | "dark";
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const n = items.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const go = (d: number) => setI((p) => (p + d + n) % n);
  const auto = !reduce && n > 1;
  const dark = tone === "dark";

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes monoRotatorFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>

      {/* timer track */}
      <div
        className="relative h-px w-full overflow-hidden"
        style={{ background: dark ? "rgba(20,20,20,0.15)" : "rgba(255,255,255,0.15)" }}
      >
        <span
          key={i}
          onAnimationEnd={() => auto && go(1)}
          className="absolute inset-0 block origin-left will-change-transform"
          style={{
            background: dark ? "rgba(20,20,20,0.7)" : "rgba(255,255,255,0.7)",
            ...(auto
              ? {
                  transform: "scaleX(0)",
                  animation: `monoRotatorFill ${interval}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }
              : { transform: "scaleX(1)" }),
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="transition-colors"
            style={{
              color: dark ? "rgba(20,20,20,0.5)" : "rgba(255,255,255,0.5)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="transition-colors"
            style={{
              color: dark ? "rgba(20,20,20,0.5)" : "rgba(255,255,255,0.5)",
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <span
          className="font-mono text-xs"
          style={{
            color: dark ? "rgba(20,20,20,0.55)" : "rgba(255,255,255,0.55)",
          }}
        >
          {String(i + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-8 relative" style={{ minHeight }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            aria-hidden={idx !== i}
            className="absolute inset-0"
            style={{
              opacity: idx === i ? 1 : 0,
              transform: idx === i ? "translateY(0)" : "translateY(8px)",
              transition:
                "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              pointerEvents: idx === i ? "auto" : "none",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
