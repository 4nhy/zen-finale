import type { SVGProps } from "react";

/**
 * Original abstract marks used in place of real client logos in this study
 * clone. The names are labels for the tiles; the shapes are original geometry.
 */

export function OrbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 60" fill="none" {...props}>
      <ellipse cx="30" cy="30" rx="26" ry="9" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="30" cy="30" rx="26" ry="26" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <ellipse cx="30" cy="30" rx="14" ry="26" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="30" cy="30" rx="26" ry="18" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M5 12h13M12 6l7 6-7 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 5v14M6 12l6 7 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AsteriskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <path d="M12 3v18M4.5 7.5l15 9M4.5 16.5l15-9" strokeLinecap="round" />
    </svg>
  );
}

/** Generic abstract "client mark" — used as neutral geometry inside client tiles. */
export function ClientMark({ variant = 0, ...props }: SVGProps<SVGSVGElement> & { variant?: number }) {
  const shapes = [
    // 0: concentric arcs
    <g key="0">
      <circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M30 16a14 14 0 0 1 0 28" stroke="currentColor" strokeWidth="1.4" />
    </g>,
    // 1: triangle stack
    <g key="1">
      <path d="M18 42L30 20l12 22z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M22 42L30 28l8 14z" stroke="currentColor" strokeWidth="1.4" />
    </g>,
    // 2: square + circle
    <g key="2">
      <rect x="17" y="17" width="26" height="26" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1.4" />
    </g>,
    // 3: diagonal bars
    <g key="3">
      <path d="M14 42L34 18M22 42L42 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </g>,
    // 4: eye/lens
    <g key="4">
      <path d="M14 30q16-16 32 0-16 16-32 0Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="1.4" />
    </g>,
    // 5: linked circles
    <g key="5">
      <circle cx="23" cy="30" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="37" cy="30" r="9" stroke="currentColor" strokeWidth="1.4" />
    </g>,
    // 6: chevrons
    <g key="6">
      <path d="M18 22l12 8-12 8M30 22l12 8-12 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </g>,
    // 7: cross-hatch
    <g key="7">
      <path d="M15 30h30M30 15v30M20 20l20 20M40 20L20 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </g>,
  ];
  const shape = shapes[variant % shapes.length];
  return (
    <svg viewBox="0 0 60 60" fill="none" {...props}>
      {shape}
    </svg>
  );
}

/** Monolog wordmark stylized — original geometric interpretation. */
export function MonologWordmarkO(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <rect x="12" y="20" width="76" height="60" stroke="currentColor" strokeWidth="6" />
      <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
