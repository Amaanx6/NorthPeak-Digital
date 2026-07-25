"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, FADE_UP } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SERVICES } from "@/data/site";

export function Services() {
  return (
    <Section id="services" tone="paper">
      <Reveal>
        <Heading
          eyebrow="Services"
          title="Six disciplines, one accountable team."
          description="Every engagement draws from the same pool of senior engineers, designers, and strategists — so nothing gets lost at a handoff."
          maxWidth="max-w-xl"
        />
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={FADE_UP} transition={{ duration: 0.5, ease: "easeOut" }}>
              <Card hoverable className="group h-full">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-alpine-50 text-alpine-700 transition-colors duration-300 ease-premium group-hover:bg-alpine-600 group-hover:text-paper">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Badge>{service.category}</Badge>
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-alpine-700">
                  Learn more
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Card>
            </motion.div>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
