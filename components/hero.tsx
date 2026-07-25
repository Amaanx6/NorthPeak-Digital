"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Activity,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

/**
 * Local, hero-only decorative mark. Not exported — inlined here because
 * it's used exclusively inside Hero and doesn't need to live as a
 * shared component.
 */
function TopoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="210" cy="210" r="1" fill="none" />
      {[42, 78, 114, 150, 186].map((r, i) => (
        <path
          key={r}
          d={`M ${210 - r} 210
              C ${210 - r} ${210 - r * 0.7}, ${210 - r * 0.55} ${210 - r}, 210 ${210 - r}
              C ${210 + r * 0.6} ${210 - r}, ${210 + r} ${210 - r * 0.65}, ${210 + r} 210
              C ${210 + r} ${210 + r * 0.75}, ${210 + r * 0.5} ${210 + r}, 210 ${210 + r}
              C ${210 - r * 0.62} ${210 + r}, ${210 - r} ${210 + r * 0.7}, ${210 - r} 210 Z`}
          stroke={i % 2 === 0 ? "#7F987C" : "#D8D2C4"}
          strokeOpacity={i % 2 === 0 ? 0.5 - i * 0.06 : 0.9 - i * 0.1}
          strokeWidth="1"
        />
      ))}
      <line x1="210" y1="20" x2="210" y2="60" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="210" y1="360" x2="210" y2="400" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="20" y1="210" x2="60" y2="210" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="360" y1="210" x2="400" y2="210" stroke="#7F987C" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="210" cy="210" r="5" fill="#6D8769" />
      <circle cx="210" cy="210" r="10" fill="none" stroke="#6D8769" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="288" cy="152" r="3" fill="#B08A4E" />
      <circle cx="146" cy="268" r="3" fill="#1F1F1C" fillOpacity="0.25" />
    </svg>
  );
}

/**
 * Small glass "product ecosystem" cards that float around the TopoMark.
 * Pure CSS positioning + the existing `animate-float` keyframe (staggered
 * via inline animationDelay) — no new JS, no new animation libraries.
 */
function FloatCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`animate-float pointer-events-none absolute z-10 flex items-center gap-2 rounded-xl border border-ink/[0.07] bg-paper/85 px-3.5 py-2.5 shadow-[0_8px_30px_-8px_rgba(31,31,28,0.18)] backdrop-blur-md ${className ?? ""}`}
      style={delay ? { animationDelay: delay } : undefined}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-alpine-300/[0.18] blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-64 -z-10 h-[320px] w-[320px] rounded-full bg-signal/[0.08] blur-[100px]"
        aria-hidden="true"
      />

      <Container className="grid gap-16 pb-24 pt-16 md:pb-32 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="accent">Digital product studio &middot; est. 2016</Badge>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
            Software built to <span className="italic text-alpine-700">hold its elevation.</span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-lg leading-[1.75] text-ink-soft">
            NorthPeak Digital partners with growing SaaS teams on web
            development, product design, and cloud infrastructure that stays
            steady as you scale — not just at launch.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="signal" className="bg-alpine-800 hover:bg-alpine-900">
              <a href="#contact">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#work">
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                See our work
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float">
            <TopoMark className="h-auto w-full" />
          </div>

          {/* Deployment status — upper right, tucked against the mark */}
          <FloatCard className="right-[2%] top-[6%] sm:right-[0%]" delay="0.3s">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-alpine-700/10">
              <CheckCircle2 className="h-3.5 w-3.5 text-alpine-700" aria-hidden="true" />
            </span>
            <span className="text-xs font-medium text-ink">Deployment successful</span>
          </FloatCard>

          {/* API health — left side, mid height */}
          <FloatCard className="-left-2 top-[42%] sm:-left-6" delay="0.9s">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal/10">
              <Activity className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-medium text-ink">API health</p>
              <p className="text-[11px] text-ink-soft">99.99% uptime</p>
            </div>
          </FloatCard>

          {/* Response time — lower right */}
          <FloatCard className="bottom-[8%] right-[6%] sm:right-[2%]" delay="1.5s">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-alpine-700/10">
              <Gauge className="h-3.5 w-3.5 text-alpine-700" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-medium text-ink">Response time</p>
              <p className="text-[11px] text-ink-soft">46ms avg</p>
            </div>
          </FloatCard>
        </motion.div>
      </Container>
    </section>
  );
}