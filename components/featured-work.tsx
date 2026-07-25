"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Activity, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, FADE_UP } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FEATURED_PROJECT, SUPPORTING_PROJECTS } from "@/data/site";

const DASHBOARD_STATS = [
  { icon: TrendingUp, label: "Revenue", value: 218, suffix: "%", decimals: 0, tone: "up" as const },
  { icon: Activity, label: "Deployments", value: 100, suffix: "%", decimals: 0, tone: "healthy" as const, display: "Healthy" },
  { icon: Users, label: "Users", value: 18241, suffix: "", decimals: 0, tone: "neutral" as const },
  { icon: Zap, label: "API latency", value: 46, suffix: "ms", decimals: 0, tone: "neutral" as const },
];

const CARD_RHYTHM = ["", "sm:rotate-[0.6deg] sm:hover:rotate-0", "sm:-translate-y-2 sm:border-alpine-300 sm:shadow-elevate-lg"];

export function FeaturedWork() {
  return (
    <Section id="work" tone="ridge" border="top">
      <Reveal>
        <Heading eyebrow="Featured work" title="One flow rebuild, one clear outcome." />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal delay={0.05}>
          <div className="overflow-hidden rounded-3xl border border-line bg-night shadow-elevate-lg">
            <div className="flex items-center gap-2 border-b border-line-dark bg-night-soft px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-paper/15" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/15" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/15" aria-hidden="true" />
              <span className="ml-3 rounded-pill bg-white/5 px-3 py-1 font-mono text-[11px] text-paper/60">
                app.fieldstack.io/dashboard
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6">
              {DASHBOARD_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-line-dark bg-white/[0.04] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-paper/55">
                        {stat.label}
                      </span>
                      <Icon className="h-3.5 w-3.5 text-alpine-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2.5 font-display text-2xl font-semibold text-paper sm:text-3xl">
                      {stat.display ? (
                        stat.display
                      ) : (
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-line-dark px-5 pb-6 pt-1 sm:px-6">
              <div className="flex items-center justify-between text-[11px] text-paper/50">
                <span>Last deploy 4 minutes ago</span>
                <span className="flex items-center gap-1.5 text-alpine-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-alpine-400" aria-hidden="true" />
                  All systems operational
                </span>
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
              See how we work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {SUPPORTING_PROJECTS.map((project, index) => (
          <motion.div key={project.title} variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Card hoverable className={`group h-full transition-transform duration-300 ${CARD_RHYTHM[index] ?? ""}`}>
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