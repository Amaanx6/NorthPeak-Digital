"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-night py-16">
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-alpine-500/[0.12] blur-[100px]"
        aria-hidden="true"
      />
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Ready to build your next product?
          </h2>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-pill border border-line-dark px-6 py-3 text-base font-medium text-paper transition-colors hover:border-alpine-400/50 hover:text-alpine-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine-500"
          >
            Let&apos;s talk
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
