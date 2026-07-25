"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, SCALE_FADE } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { TESTIMONIALS } from "@/data/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "h-3.5 w-3.5 fill-signal text-signal"
              : "h-3.5 w-3.5 fill-line text-line"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured);
  const supporting = TESTIMONIALS.filter((t) => !t.featured);

  if (!featured) return null;

  return (
    <Section id="testimonials" tone="paper" border="top">
      <Reveal>
        <Heading eyebrow="Client work" title="Trusted by teams past the first launch." />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.05} className="h-full">
          <Card padding="lg" className="flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-medium tracking-wide text-ink-muted">
                  {featured.company.toUpperCase()}
                </span>
                <StarRating rating={featured.rating} />
              </div>
              <Quote className="mt-6 h-7 w-7 text-alpine-400" aria-hidden="true" />
              <p className="mt-4 max-w-[54ch] text-xl leading-[1.6] text-ink">{featured.review}</p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xs font-medium text-paper"
                  aria-hidden="true"
                >
                  {featured.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{featured.name}</p>
                  <p className="text-xs text-ink-muted">{featured.role}</p>
                </div>
              </div>
              <Badge variant="accent">{featured.projectType}</Badge>
            </div>
          </Card>
        </Reveal>

        <RevealGroup className="flex flex-col gap-6" staggerDelay={0.1}>
          {supporting.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={SCALE_FADE}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-medium tracking-wide text-ink-muted">
                      {testimonial.company.toUpperCase()}
                    </span>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{testimonial.review}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[11px] font-medium text-paper"
                      aria-hidden="true"
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-ink">{testimonial.name}</p>
                      <p className="text-[11px] text-ink-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}