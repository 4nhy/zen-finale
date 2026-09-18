"use client";

import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver reveal — sets data-inview="true" on the observed node.
 * Style entrance transitions with `[data-inview="true"] &`.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.inview = "true";
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.inview = "true";
          io.unobserve(entry.target);
        }
      }
    }, options);
    io.observe(node);
    return () => io.disconnect();
  }, [options]);
  return ref;
}

/** Count from 0 → target every time the element enters the viewport. Returns
 *  [ref, currentValue]. Re-runs on each re-entry: leave-and-come-back resets
 *  the value to 0 and animates back up to `target`. */
export function useCounter(target: number, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const runOnce = () => {
      cancelAnimationFrame(raf);
      let start = 0;
      setValue(0);
      const tick = (now: number) => {
        if (!start) start = now;
        const p = Math.min(1, (now - start) / durationMs);
        setValue(Math.round(easeOut(p) * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) runOnce();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [target, durationMs]);
  return [ref, value] as const;
}
