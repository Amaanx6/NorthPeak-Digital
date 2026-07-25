"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, FADE_UP } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { PRICING_PLANS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" tone="ridge" border="top">
      <Reveal>
        <Heading
          eyebrow="Pricing"
          title="Straightforward plans, senior talent throughout."
          description="Every tier gets the same engineering bar. What changes is scope and how many workstreams run at once."
          maxWidth="max-w-xl"
        />
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
        {PRICING_PLANS.map((plan) => (
          <motion.div key={plan.name} variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div
              className={cn(
                "group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ease-premium hover:-translate-y-1",
                plan.highlighted
                  ? "border-ink bg-night text-paper shadow-glow lg:-my-3 lg:py-11"
                  : "border-line bg-card hover:shadow-elevate-lg"
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-8">
                  <Badge variant="solid">Most popular</Badge>
                </span>
              ) : null}

              <h3
                className={cn(
                  "font-display text-xl font-semibold",
                  plan.highlighted ? "text-paper" : "text-ink"
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  plan.highlighted ? "text-paper/65" : "text-ink-soft"
                )}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={cn(
                    "font-display text-4xl font-semibold tracking-tight",
                    plan.highlighted ? "text-paper" : "text-ink"
                  )}
                >
                  {plan.price}
                </span>
                {plan.period ? (
                  <span
                    className={cn("text-sm", plan.highlighted ? "text-paper/55" : "text-ink-muted")}
                  >
                    {plan.period}
                  </span>
                ) : null}
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                        plan.highlighted ? "bg-alpine-500/20" : "bg-alpine-50"
                      )}
                    >
                      <Check
                        className={cn("h-2.5 w-2.5", plan.highlighted ? "text-alpine-300" : "text-alpine-700")}
                        aria-hidden="true"
                        strokeWidth={3}
                      />
                    </span>
                    <span className={plan.highlighted ? "text-paper/85" : "text-ink-soft"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant={plan.highlighted ? "signal" : "outline"}
                className="mt-8 w-full"
              >
                <a href="#contact">
                  {plan.ctaLabel}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
