"use client";

import { OrbIcon } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/icons";
import { useReveal } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/useReveal";
import Threads from "@/components/sites/bymonolog-com-fdc3e3a7/shared/Threads";

const HERO_IMG = "https://picsum.photos/seed/zenhero/1920/1080?grayscale";

export function Hero() {
  const ref = useReveal<HTMLElement>({ threshold: 0.02 });

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100dvh] overflow-hidden flex flex-col isolate"
      style={{ background: "var(--mono-black-400)" }}
    >
      <style>{`
        @keyframes mono-spin { to { transform: rotate(360deg); } }
        .mono-orb { animation: mono-spin 30s linear infinite; }

        .mono-rise {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.8s var(--ease-expo-out), transform 0.8s var(--ease-expo-out);
        }
        [data-inview="true"] .mono-rise { opacity: 1; transform: translateY(0); }

        .mono-rise-big {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1.1s var(--ease-expo-out) 0.45s, transform 1.1s var(--ease-expo-out) 0.45s;
        }
        [data-inview="true"] .mono-rise-big { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Animated Threads backdrop pinned to visible viewport height so the
          wordmark's bottom bleed doesn't stretch its aspect ratio. */}
      <div className="absolute top-0 left-0 w-full h-[100dvh] z-0 pointer-events-none overflow-hidden">
        <Threads
          color={[0.42, 0.42, 0.48]}
          amplitude={1.1}
          distance={0.35}
          enableMouseInteraction={false}
          className="w-full h-full"
        />
      </div>

      {/* Atmospheric plate layered on top of Threads (also viewport-height only) */}
      <div className="absolute top-0 left-0 w-full h-[100dvh] z-[1] pointer-events-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(8,8,7,0.15)] to-[var(--mono-black-400)]" />
      </div>

      {/* Centred statement */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-xl flex flex-col items-center gap-8">
          <div className="mono-rise" style={{ transitionDelay: "0.05s" }}>
            <OrbIcon className="mono-orb h-10 w-10 text-[color:var(--mono-beige-100)]" />
          </div>
          <h1
            className="mono-rise text-balance"
            style={{
              transitionDelay: "0.15s",
              fontFamily: "'Khteka', 'Inter', sans-serif",
              fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
              fontWeight: 600,
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
              color: "var(--mono-beige-100)",
            }}
          >
            Custom software shaped around how your team actually runs. Built by us. Kept running by us.
          </h1>
        </div>
      </div>

      {/* Giant ZEN CONSULTING wordmark, bleeding off the bottom */}
      <div
        aria-hidden
        className="mono-rise-big relative z-10 select-none pointer-events-none flex justify-center"
      >
        <svg
          viewBox="0 0 1000 118"
          className="w-full block translate-y-[8%]"
          aria-hidden
        >
          <text
            x="0"
            y="100"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="130"
            fontWeight="600"
            fill="currentColor"
            className="text-[color:var(--mono-beige-100)]/45"
          >
            ZEN CONSULTING
          </text>
        </svg>
      </div>
    </section>
  );
}
