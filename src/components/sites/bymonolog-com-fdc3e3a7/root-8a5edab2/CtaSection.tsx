"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/icons";
import { useReveal } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/useReveal";

export function CtaSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    // Tall outer wrapper (250vh) + sticky inner pin (100dvh). Same "hold on
    // screen" effect Zen achieves with GSAP ScrollTrigger pin=true, +=150%.
    // Once the CTA fills the viewport it locks for ~1.5 screens of scroll
    // before the footer arrives.
    <section
      id="contact"
      className="relative"
      style={{ height: "250vh" }}
    >
      <div
        ref={ref}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden isolate flex items-center"
        style={{ color: "var(--mono-beige-100)" }}
      >
        <Image
          src="https://cdn.prod.website-files.com/68b652bbd6c64a44c8fe3e5e/6917e0c8019265ad19e8d1ac_DSCF2511%201.avif"
          alt=""
          fill
          priority={false}
          className="object-cover -z-10"
          unoptimized
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.4) 40%, rgba(8,8,7,0.85) 100%)",
          }}
        />
        <div className="mono-container flex flex-col gap-14 py-16">
          <div
            className="mono-eyebrow"
            style={{ color: "var(--mono-beige-100)" }}
          >
            Ready to run the system your team was quietly waiting for?
          </div>
          <h2
            className="max-w-[18ch]"
            style={{
              fontFamily: "'Animo', 'Khteka', serif",
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s build the system your team actually&nbsp;
            <ArrowRightIcon className="inline-block h-[0.75em] w-[0.75em] align-baseline" />
            &nbsp;needs
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@zenconsulting.dev"
              className="inline-flex items-center gap-3 rounded-full bg-[color:var(--mono-beige-100)] px-6 py-3 text-[color:var(--mono-black-400)] font-semibold hover:bg-[color:var(--mono-beige-400)] transition-colors"
            >
              Book a scoping call <ArrowRightIcon className="h-4 w-4" />
            </a>
            <p
              className="mono-eyebrow max-w-[42ch]"
              style={{ color: "var(--mono-beige-100)", opacity: 0.8 }}
            >
              One workspace, run by the same team that shipped it. Built and
              kept for you, or built and handed off, your call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
