"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 4 websites + 2 apps, interleaved so the apps aren't clustered.
const IMAGES = [
  "/gap-images/rootwell-dental.png",
  "/gap-images/app-slotly.png",
  "/gap-images/house-of-oak.png",
  "/gap-images/aether-studio.png",
  "/gap-images/app-ledger.png",
  "/gap-images/staylux.png",
];

// One entry stage (words + scale ramp) plus one stage per image, all sized in
// vh so the section length scales predictably.
const ENTRY_STAGES = 1;
const SECTION_STAGES = ENTRY_STAGES + IMAGES.length; // 7
const STAGE_VH = 60;
const ENTRY_END = ENTRY_STAGES / SECTION_STAGES;
const CYCLE_START = ENTRY_END;
const CYCLE_END = 1.0;

const IDLE_MS = 380;
const CYCLE_MS = 1400;

export function GapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const cycleTimerRef = useRef<number | null>(null);
  const lastScrollAt = useRef(0);
  const lastProgress = useRef(0);
  const [active, setActive] = useState(0);

  // Throttle Lenis scroll input while this section is in the viewport, so the
  // user can't fly past the mechanic — the cap they asked for.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const NORMAL_WHEEL = 1;
    const NORMAL_TOUCH = 1.2;
    const SLOW_WHEEL = 0.05;
    const SLOW_TOUCH = 0.1;
    const setSpeed = (slow: boolean) => {
      const lenis = window.__monoLenis;
      if (!lenis) return;
      lenis.options.wheelMultiplier = slow ? SLOW_WHEEL : NORMAL_WHEEL;
      lenis.options.touchMultiplier = slow ? SLOW_TOUCH : NORMAL_TOUCH;
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setSpeed(e.isIntersecting);
      },
      { threshold: 0.02 }
    );
    io.observe(section);
    return () => {
      io.disconnect();
      setSpeed(false);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    if (!section || !pinned) return;

    const setIndex = (i: number) => {
      if (activeRef.current === i) return;
      activeRef.current = i;
      setActive(i);
    };

    const stopAutoCycle = () => {
      if (cycleTimerRef.current) {
        window.clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
    };

    const startAutoCycle = () => {
      if (cycleTimerRef.current) return;
      cycleTimerRef.current = window.setInterval(() => {
        setIndex((activeRef.current + 1) % IMAGES.length);
      }, CYCLE_MS);
    };

    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress =
        total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;

      const wordEnter = Math.min(1, progress / ENTRY_END);
      const imageScale = Math.min(1, progress / ENTRY_END);
      pinned.style.setProperty("--word-enter", String(wordEnter));
      pinned.style.setProperty("--image-scale", String(imageScale));

      const delta = progress - lastProgress.current;
      lastProgress.current = progress;

      const inCycleZone = progress >= CYCLE_START && progress <= CYCLE_END;
      const scrolling = Math.abs(delta) > 0.0002;

      if (scrolling) {
        lastScrollAt.current = performance.now();
        stopAutoCycle();
        if (inCycleZone) {
          const cycleP = (progress - CYCLE_START) / (CYCLE_END - CYCLE_START);
          const idx = Math.min(
            IMAGES.length - 1,
            Math.max(0, Math.floor(cycleP * IMAGES.length))
          );
          setIndex(idx);
        }
      } else if (
        inCycleZone &&
        performance.now() - lastScrollAt.current > IDLE_MS
      ) {
        startAutoCycle();
      }

      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      stopAutoCycle();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        height: `calc(${SECTION_STAGES * STAGE_VH}vh + 100dvh)`,
        background: "var(--mono-black-400)",
        color: "var(--mono-beige-100)",
      }}
    >
      <div
        ref={pinnedRef}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden"
        style={{
          ["--word-enter" as string]: "0",
          ["--image-scale" as string]: "0",
        }}
      >
        <style>{`
          /* Corner-anchored copy blocks. The two titles come in from their own
             side (left corners slide from -X, right corners slide from +X);
             the two descriptions come in on the same axis but with a small
             delay so the eye lands on the title first. */
          .gap-corner {
            position: absolute;
            max-width: min(28ch, 34vw);
            transition:
              transform 0.9s cubic-bezier(0.83, 0, 0.17, 1),
              opacity 0.9s cubic-bezier(0.83, 0, 0.17, 1);
            will-change: transform, opacity;
            opacity: calc(var(--word-enter) * 1);
          }
          /* Top corners sit BELOW the fixed nav bar (~90px tall with the
             legal-strip + main row). Extra vertical padding on all
             viewports keeps them clear at desktop AND mobile. */
          .gap-corner-tl {
            top: clamp(5.5rem, 8vw, 7rem);
            left: clamp(1.5rem, 4vw, 3rem);
            text-align: left;
            transform: translate3d(calc((var(--word-enter) - 1) * 50vw), 0, 0);
          }
          .gap-corner-tr {
            top: clamp(5.5rem, 8vw, 7rem);
            right: clamp(1.5rem, 4vw, 3rem);
            text-align: right;
            transform: translate3d(calc((1 - var(--word-enter)) * 50vw), 0, 0);
            transition-delay: 0.08s;
          }
          .gap-corner-bl {
            bottom: clamp(1.5rem, 4vw, 3rem);
            left: clamp(1.5rem, 4vw, 3rem);
            text-align: left;
            transform: translate3d(calc((var(--word-enter) - 1) * 50vw), 0, 0);
            transition-delay: 0.12s;
          }
          .gap-corner-br {
            bottom: clamp(1.5rem, 4vw, 3rem);
            right: clamp(1.5rem, 4vw, 3rem);
            text-align: right;
            transform: translate3d(calc((1 - var(--word-enter)) * 50vw), 0, 0);
          }

          .gap-title {
            font-family: "Khteka", "Inter", sans-serif;
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 0.95;
            font-size: clamp(2rem, 4.5vw, 3.25rem);
            color: var(--mono-beige-100);
          }
          .gap-desc {
            font-family: "Khteka", "Inter", sans-serif;
            font-size: clamp(0.85rem, 1vw, 1rem);
            line-height: 1.45;
            color: var(--mono-beige-100);
            opacity: 0.75;
            margin-top: 0.6em;
          }
          .gap-tag {
            font-family: "Suisse Mono", ui-monospace, monospace;
            font-size: clamp(0.62rem, 0.7vw, 0.7rem);
            letter-spacing: 0.2em;
            text-transform: uppercase;
            opacity: 0.55;
            display: block;
            margin-bottom: 0.35em;
          }

          .gap-image-stack {
            transform: scale(var(--image-scale));
            transform-origin: center;
            will-change: transform;
          }
          .gap-image-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: center;
            width: min(46vw, 620px, 58dvh);
            aspect-ratio: 1 / 1;
            translate: -50% -50%;
            z-index: 1;
          }
          @media (max-width: 720px) {
            .gap-image-wrap { width: min(68vw, 46dvh); }
            .gap-corner { max-width: 40vw; }
          }
        `}</style>

        {/* Top-left · title */}
        <div className="gap-corner gap-corner-tl">
          <span className="gap-tag">Step 01</span>
          <h2 className="gap-title">We build</h2>
        </div>

        {/* Top-right · build description */}
        <div className="gap-corner gap-corner-tr">
          <span className="gap-tag">The build</span>
          <p className="gap-desc">
            Systems shaped around how your team actually runs. From the first
            call to shipping the last screen, one team owns the whole thing.
          </p>
        </div>

        {/* Center image stack */}
        <div className="gap-image-wrap">
          <div className="gap-image-stack absolute inset-0">
            {IMAGES.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 overflow-hidden rounded-[10px]"
                style={{
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 0.32s cubic-bezier(0.83, 0, 0.17, 1)",
                  boxShadow:
                    i === active
                      ? "0 30px 80px -30px rgba(0,0,0,0.6)"
                      : "none",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 68vw, 620px"
                  className="object-cover"
                  unoptimized
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-left · run description */}
        <div className="gap-corner gap-corner-bl">
          <span className="gap-tag">The run</span>
          <p className="gap-desc">
            Hosted on our infrastructure, monitored, patched and kept fresh.
            The engineers who built it are the ones who keep it running.
          </p>
        </div>

        {/* Bottom-right · title */}
        <div className="gap-corner gap-corner-br">
          <span className="gap-tag">Step 02</span>
          <h2 className="gap-title">We run</h2>
        </div>
      </div>
    </section>
  );
}
