"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, FADE_UP } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { FEATURED_PROJECT, SUPPORTING_PROJECTS } from "@/data/site";

export function FeaturedWork() {
  return (
    <Section id="work" tone="ridge" border="top">
      <Reveal>
        <Heading eyebrow="Featured work" title="One flow rebuild, one clear outcome." />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-line bg-card">
            <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" aria-hidden="true" />
              <span className="ml-3 rounded-pill bg-card px-3 py-1 font-mono text-[11px] text-ink-muted">
                app.fieldstack.io/setup
              </span>
            </div>
            <div className="grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex gap-2" aria-hidden="true">
                <div className="h-1.5 w-8 rounded-pill bg-alpine-500" />
                <div className="h-1.5 w-8 rounded-pill bg-alpine-500" />
                <div className="h-1.5 w-8 rounded-pill bg-line" />
              </div>
              <div />
              <div className="sm:col-span-2" aria-hidden="true">
                <div className="h-3 w-2/3 rounded bg-ink/10" />
                <div className="mt-3 h-2.5 w-full rounded bg-ink/[0.06]" />
                <div className="mt-2 h-2.5 w-4/5 rounded bg-ink/[0.06]" />
                <div className="mt-6 flex gap-3">
                  <div className="h-9 w-28 rounded-pill bg-alpine-500" />
                  <div className="h-9 w-24 rounded-pill border border-line" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-base leading-[1.75] text-ink-soft">
            {FEATURED_PROJECT.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {FEATURED_PROJECT.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-pill border border-line bg-card px-2.5 py-1 font-mono text-[11px] font-medium text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-baseline gap-2 border-t border-line pt-6">
            <span className="font-display text-3xl font-semibold text-alpine-700">
              {FEATURED_PROJECT.metricValue}
            </span>
            <span className="text-sm text-ink-muted">{FEATURED_PROJECT.metricLabel}</span>
          </div>

          <Button asChild size="lg" variant="primary" className="mt-8">
            <a href="#contact">
              Start a similar project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {SUPPORTING_PROJECTS.map((project) => (
          <motion.div key={project.title} variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Card hoverable className="group h-full">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink-muted transition-colors duration-300 group-hover:text-alpine-700"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-pill bg-ridge px-2 py-0.5 font-mono text-[10px] font-medium text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-baseline gap-1.5 border-t border-line pt-4">
                <span className="font-display text-lg font-semibold text-alpine-700">
                  {project.metricValue}
                </span>
                <span className="text-xs text-ink-muted">{project.metricLabel}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
