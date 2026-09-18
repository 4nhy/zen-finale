"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Global handle so section components can throttle the scroll speed while
 *  they're on screen. Undefined until LenisScroll mounts. */
declare global {
  interface Window {
    __monoLenis?: Lenis;
  }
}

export function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      smoothWheel: true,
    });

    window.__monoLenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__monoLenis;
    };
  }, []);

  return null;
}
