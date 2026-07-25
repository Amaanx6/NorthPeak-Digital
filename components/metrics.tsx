"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal, RevealGroup, FADE_UP } from "@/components/ui/reveal";
import { METRICS } from "@/data/site";

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-night py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpine-500/[0.10] blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <Reveal>
          <span className="eyebrow-on-dark">By the numbers</span>
        </Reveal>

        <RevealGroup
          className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-dark pt-10 lg:grid-cols-4"
          staggerDelay={0.12}
        >
          {METRICS.map((metric) => (
            <motion.div key={metric.label} variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
              <p className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
              </p>
              <p className="mt-2 text-sm text-paper/55">{metric.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
