"use client";

import { useEffect } from "react";

/**
 * Adds `data-scrolling="true"` to the <html> element while the user is actively
 * scrolling, and removes it ~1s after they stop. Paired with CSS that fades
 * the scrollbar thumb in on that flag.
 */
export function ScrollbarAutoHide({ idleMs = 900 }: { idleMs?: number }) {
  useEffect(() => {
    const root = document.documentElement;
    let timeout: number | undefined;
    const onScroll = () => {
      root.dataset.scrolling = "true";
      if (timeout !== undefined) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        delete root.dataset.scrolling;
      }, idleMs);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
      if (timeout !== undefined) window.clearTimeout(timeout);
      delete root.dataset.scrolling;
    };
  }, [idleMs]);
  return null;
}
