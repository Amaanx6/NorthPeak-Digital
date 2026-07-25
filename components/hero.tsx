"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopoMark } from "@/components/ui/topo-mark";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

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
        </motion.div>
      </Container>
    </section>
  );
}
