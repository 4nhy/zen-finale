"use client";

/**
 * ThreadMerge — a bus/harness "merge" backdrop.
 *
 * Lines start as a tight bundle on the left, run horizontally, then converge
 * via a straight diagonal into a SINGLE merged trunk right-of-centre, which
 * continues to the right edge. Orange packets travel left->right, funnel in,
 * and ride the shared trunk.
 *
 * No curvature — every source line is horizontal + one diagonal, then the
 * trunk. Collision-free on the merged trunk: every packet moves at one speed
 * and a new packet only launches when the nearest in-flight packet is a fixed
 * gap ahead, so the x-spacing between all packets is constant everywhere —
 * including the shared trunk.
 *
 * Self-contained: DPR-capped, visibility-gated, reduced-motion aware, cleans
 * up on unmount. Pure 2D canvas, no deps.
 */
import React, { useEffect, useRef } from "react";

interface ThreadMergeProps {
  className?: string;
  lineCount?: number;
  packetCount?: number;
  lineColor?: [number, number, number];
  packetColor?: [number, number, number];
}

const ThreadMerge: React.FC<ThreadMergeProps> = ({
  className = "w-full h-full",
  lineCount = 16,
  packetCount = 16,
  lineColor = [148, 154, 170],
  packetColor = [255, 148, 62],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%;display:block";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0;
    // Responsive line count: `lineCount` is the floor (great on mobile/tablet);
    // wide desktop viewports get proportionally more lines.
    let nLines = lineCount;
    function resize() {
      const r = container!.getBoundingClientRect();
      W = r.width; H = r.height;
      nLines = Math.max(lineCount, Math.round(W / 64));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(W * dpr));
      canvas.height = Math.max(1, Math.round(H * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const X1 = 0.60; // diagonal (convergence) starts — past middle
    const X2 = 0.70; // fully merged into one trunk from here rightward (steep)
    const MERGE_Y = 0.42; // centred on the headline

    // Tight bundle on the left, centred on the merge height.
    const startFrac = (i: number) => 0.30 + 0.24 * (i / (nLines - 1));

    // y at horizontal position x (px) for source line i: flat, then diagonal
    // into the single merge point; past X2 everything is the trunk.
    function yAt(i: number, x: number) {
      const ys = startFrac(i) * H;
      const ym = MERGE_Y * H;
      const x1 = X1 * W, x2 = X2 * W;
      if (x <= x1) return ys;
      if (x >= x2) return ym;
      return ys + (ym - ys) * ((x - x1) / (x2 - x1));
    }

    // ---- packets ----
    type Phase = "wait" | "run";
    interface Packet { line: number; x: number; phase: Phase; } // x normalized 0..1
    const V = 1 / 2600;  // shared speed (x per ms) — no catch-ups anywhere
    const GAP = 0.085;   // min x-spacing between any two packets
    function reset(pk: Packet): Packet {
      pk.line = Math.floor(Math.random() * nLines);
      pk.x = 0;
      pk.phase = "wait";
      return pk;
    }
    const packets: Packet[] = Array.from({ length: packetCount }, () => {
      const pk = reset({} as Packet);
      pk.x = Math.random();
      pk.phase = "run";
      return pk;
    });

    const [lr, lg, lb] = lineColor;
    const [pr, pg, pb] = packetColor;

    let raf = 0, last = 0, visible = true;
    const io = new IntersectionObserver(
      (e) => (visible = e[0].isIntersecting), { threshold: 0 }
    );
    io.observe(container);

    function step(dt: number) {
      for (const pk of packets) {
        if (pk.phase === "run") {
          pk.x += V * dt;
          if (pk.x >= 1) reset(pk);
        }
      }
      // nearest in-flight packet to the start
      let minX = Infinity;
      for (const pk of packets) if (pk.phase === "run" && pk.x < minX) minX = pk.x;
      // admit one waiting packet when there's a clear gap at the start; since
      // all packets share one speed, that gap is preserved for the whole run.
      for (const pk of packets) {
        if (pk.phase !== "wait") continue;
        if (minX >= GAP) { pk.phase = "run"; pk.x = 0; minX = 0; }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const x1 = X1 * W, x2 = X2 * W, ym = MERGE_Y * H;

      // source lines — tight bundle, flat then diagonal into the merge
      ctx!.globalCompositeOperation = "source-over";
      ctx!.lineWidth = 1;
      for (let i = 0; i < nLines; i++) {
        const ys = startFrac(i) * H;
        const g = ctx!.createLinearGradient(0, ys, x2, ym);
        g.addColorStop(0, `rgba(${lr},${lg},${lb},0.05)`);
        g.addColorStop(0.2, `rgba(${lr},${lg},${lb},0.14)`);
        g.addColorStop(1, `rgba(${lr},${lg},${lb},0.14)`);
        ctx!.strokeStyle = g;
        ctx!.beginPath();
        ctx!.moveTo(0, ys);
        ctx!.lineTo(x1, ys);
        ctx!.lineTo(x2, ym);
        ctx!.stroke();
      }

      // merged trunk — one line, a touch brighter, fading out to the right
      const tg = ctx!.createLinearGradient(x2, ym, W, ym);
      tg.addColorStop(0, `rgba(${lr},${lg},${lb},0.2)`);
      tg.addColorStop(1, `rgba(${lr},${lg},${lb},0.05)`);
      ctx!.strokeStyle = tg;
      ctx!.lineWidth = 1.3;
      ctx!.beginPath(); ctx!.moveTo(x2, ym); ctx!.lineTo(W, ym); ctx!.stroke();

      // packets (orange, oriented to the local segment)
      ctx!.globalCompositeOperation = "lighter";
      for (const pk of packets) {
        if (pk.phase !== "run") continue;
        const li = pk.line % nLines; // guard if a resize shrank the count
        const px = pk.x * W;
        const y = yAt(li, px);
        const xa = Math.min(W, px + 0.008 * W);
        const ang = Math.atan2(yAt(li, xa) - y, xa - px);
        const alpha = Math.min(1, pk.x / 0.04) * (1 - 0.3 * pk.x);

        const gg = ctx!.createRadialGradient(px, y, 0, px, y, 12);
        gg.addColorStop(0, `rgba(${pr},${pg},${pb},${0.75 * alpha})`);
        gg.addColorStop(0.5, `rgba(${pr},${pg},${pb},${0.26 * alpha})`);
        gg.addColorStop(1, `rgba(${pr},${pg},${pb},0)`);
        ctx!.fillStyle = gg;
        ctx!.beginPath(); ctx!.arc(px, y, 12, 0, Math.PI * 2); ctx!.fill();

        ctx!.save();
        ctx!.translate(px, y);
        ctx!.rotate(ang);
        ctx!.fillStyle = `rgba(${pr},${pg},${pb},${alpha})`;
        const w = 9, h = 5, r = 2;
        ctx!.beginPath();
        if (ctx!.roundRect) ctx!.roundRect(-w / 2, -h / 2, w, h, r);
        else ctx!.rect(-w / 2, -h / 2, w, h);
        ctx!.fill();
        ctx!.fillStyle = `rgba(255,232,205,${0.95 * alpha})`;
        ctx!.beginPath();
        if (ctx!.roundRect) ctx!.roundRect(-w / 2, -h / 2, w * 0.4, h, r);
        else ctx!.rect(-w / 2, -h / 2, w * 0.4, h);
        ctx!.fill();
        ctx!.restore();
      }
      ctx!.globalCompositeOperation = "source-over";
    }

    function frame(t: number) {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) { last = t; return; }
      const dt = Math.min(50, t - last || 16);
      last = t;
      if (!reduced) step(dt);
      draw();
      if (reduced) cancelAnimationFrame(raf);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      if (container.contains(canvas)) container.removeChild(canvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    lineCount, packetCount,
    lineColor[0], lineColor[1], lineColor[2],
    packetColor[0], packetColor[1], packetColor[2],
  ]);

  return <div ref={containerRef} className={className} />;
};

export default ThreadMerge;
