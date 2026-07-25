"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Users,
  Zap,
  TrendingUp,
  CheckCircle2,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, FADE_UP, SLIDE_LEFT, SLIDE_RIGHT, EASE_PREMIUM } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FEATURED_PROJECT, SUPPORTING_PROJECTS } from "@/data/site";

const DASHBOARD_STATS = [
  { icon: TrendingUp, label: "Revenue", value: 218, suffix: "%", decimals: 0, trend: "up" as const },
  { icon: Activity, label: "Deployments", value: 100, suffix: "%", decimals: 0, display: "Healthy" },
  { icon: Users, label: "Users", value: 18241, suffix: "", decimals: 0, trend: "up" as const },
  { icon: Zap, label: "API latency", value: 46, suffix: "ms", decimals: 0, trend: "down" as const },
];

// Static demo data for the analytics panel — no fetching, no client state.
const REVENUE_TREND = [38, 46, 42, 58, 54, 72, 88];
const DEPLOY_ACTIVITY = [72, 40, 88, 55, 96, 60, 84];
const CHART_WIDTH = 280;
const CHART_HEIGHT = 64;

function buildAreaPath(values: number[]) {
  const max = Math.max(...values);
  const step = CHART_WIDTH / (values.length - 1);
  const points = values.map((v, i) => [i * step, CHART_HEIGHT - (v / max) * CHART_HEIGHT]);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  return { line, area: `${line} L ${CHART_WIDTH} ${CHART_HEIGHT} L 0 ${CHART_HEIGHT} Z` };
}

const { line: REVENUE_LINE, area: REVENUE_AREA } = buildAreaPath(REVENUE_TREND);

const ACTIVITY_FEED = [
  { icon: CheckCircle2, label: "Deploy to production succeeded", time: "4m ago" },
  { icon: Users, label: "12 new users onboarded", time: "18m ago" },
  { icon: Bell, label: "Latency alert auto-resolved", time: "1h ago" },
];

const CARD_RHYTHM = ["", "sm:rotate-[0.6deg] sm:hover:rotate-0", "sm:-translate-y-2 sm:border-alpine-300 sm:shadow-elevate-lg"];

export function FeaturedWork() {
  return (
    <Section id="work" tone="ridge" border="top">
      <Reveal>
        <Heading eyebrow="Featured work" title="One flow rebuild, one clear outcome." />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={SLIDE_RIGHT}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          className="overflow-hidden rounded-3xl border border-line bg-night shadow-elevate-lg"
        >
          {/* Product chrome — no browser dots, reads as a real app */}
          <div className="flex items-center justify-between border-b border-line-dark bg-night-soft px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-alpine-400" aria-hidden="true" />
              <span className="font-mono text-[11px] text-paper/60">fieldstack &middot; overview</span>
            </div>
            <div className="hidden gap-4 font-mono text-[11px] text-paper/40 sm:flex" aria-hidden="true">
              <span className="text-paper/70">Overview</span>
              <span>Analytics</span>
              <span>Deployments</span>
            </div>
          </div>

          {/* KPI row — cards appear sequentially */}
          <div className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6">
            {DASHBOARD_STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08, ease: EASE_PREMIUM }}
                  className="rounded-2xl border border-line-dark bg-white/[0.04] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-paper/55">
                      {stat.label}
                    </span>
                    <Icon className="h-3.5 w-3.5 text-alpine-400" aria-hidden="true" />
                  </div>
                  <p className="mt-2.5 flex items-baseline gap-1 font-display text-2xl font-semibold text-paper sm:text-3xl">
                    {stat.display ? (
                      stat.display
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    )}
                    {stat.trend && (
                      <span
                        className={`text-xs font-medium ${
                          stat.trend === "up" ? "text-alpine-400" : "text-paper/40"
                        }`}
                        aria-hidden="true"
                      >
                        {stat.trend === "up" ? "↑" : "↓"}
                      </span>
                    )}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Analytics — revenue trend + deployment activity */}
          <div className="grid grid-cols-1 gap-3 px-5 pb-5 sm:grid-cols-[1.4fr_1fr] sm:gap-4 sm:px-6 sm:pb-6">
            <div className="rounded-2xl border border-line-dark bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-paper/55">
                  Revenue trend
                </span>
                <span className="text-[11px] font-medium text-alpine-400">+218%</span>
              </div>
              <svg
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                className="mt-3 h-16 w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7F987C" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#7F987C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={REVENUE_AREA} fill="url(#revenueGradient)" />
                <motion.path
                  d={REVENUE_LINE}
                  fill="none"
                  stroke="#7F987C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: 0.3, ease: EASE_PREMIUM }}
                />
              </svg>
            </div>

            <div className="rounded-2xl border border-line-dark bg-white/[0.04] p-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-paper/55">
                Deployments
              </span>
              <div className="mt-3 flex h-16 items-end gap-1.5" aria-hidden="true">
                {DEPLOY_ACTIVITY.map((value, index) => (
                  <motion.span
                    key={index}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: EASE_PREMIUM }}
                    style={{ height: `${value}%`, transformOrigin: "bottom" }}
                    className="w-full rounded-sm bg-alpine-500/50"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Recent activity feed */}
          <div className="border-t border-line-dark px-5 py-4 sm:px-6">
            <ul className="space-y-2.5">
              {ACTIVITY_FEED.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2.5 text-[12px]">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-alpine-400" aria-hidden="true" />
                    <span className="text-paper/70">{item.label}</span>
                    <span className="ml-auto shrink-0 text-paper/40">{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-line-dark px-5 pb-6 pt-3 sm:px-6">
            <div className="flex items-center justify-between text-[11px] text-paper/50">
              <span>Last deploy 4 minutes ago</span>
              <span className="flex items-center gap-1.5 text-alpine-400">
                <span className="h-1.5 w-1.5 rounded-full bg-alpine-400" aria-hidden="true" />
                All systems operational
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={SLIDE_LEFT}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.1 }}
        >
          <p className="text-base leading-[1.75] text-ink-soft">{FEATURED_PROJECT.description}</p>

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
        </motion.div>
      </div>

      <RevealGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {SUPPORTING_PROJECTS.map((project, index) => (
          <motion.div key={project.title} variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Card
              hoverable
              className={`group h-full transition-transform duration-300 motion-reduce:transform-none ${
                CARD_RHYTHM[index] ?? ""
              }`}
            >
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