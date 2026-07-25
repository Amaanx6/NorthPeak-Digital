"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup, FADE_UP } from "@/components/ui/reveal";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SERVICES } from "@/data/site";

export function Services() {
  const [selected, setSelected] = useState<number | null>(null);

  // Split services into rows of 3
  const rows = [];
  for (let i = 0; i < SERVICES.length; i += 3) {
    rows.push({
      services: SERVICES.slice(i, i + 3),
      startIndex: i,
    });
  }

  const renderDetails = (index: number) => {
    const service = SERVICES[index];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={service.title}
          id={`service-details-${index}`}
          role="region"
          aria-label={`${service.title} details`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35 }}
          className="mt-6"
        >
          <Card className="overflow-hidden">
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div>
                <Badge>{service.category}</Badge>

                <h3 className="mt-4 font-display text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-3xl leading-8 text-ink-soft">
                  {service.details.overview}
                </p>

                <h4 className="mt-10 text-lg font-semibold">
                  Deliverables
                </h4>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.details.deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-stone-200 bg-paper px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  Technologies
                </h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.details.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl bg-alpine-50 p-6">
                  <h5 className="font-semibold text-alpine-800">
                    Typical engagement
                  </h5>

                  <p className="mt-3 text-sm leading-7 text-alpine-700">
                    Discovery, planning, implementation,
                    testing, deployment, documentation and
                    ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <Section id="services" tone="paper">
      <Reveal>
        <Heading
          eyebrow="Services"
          title="Six disciplines, one accountable team."
          description="Every engagement draws from the same pool of senior engineers, designers, and strategists."
          maxWidth="max-w-xl"
        />
      </Reveal>

      <div className="mt-14 space-y-8">
        {rows.map((row, rowIndex) => {
          const rowStart = row.startIndex;
          const rowEnd = rowStart + row.services.length - 1;

          const activeInRow =
            selected !== null &&
            selected >= rowStart &&
            selected <= rowEnd;

          return (
            <div key={rowStart}>
              <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {row.services.map((service, localIndex) => {
                  const index = rowStart + localIndex;
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      variants={FADE_UP}
                      transition={{
                        duration: 0.45,
                      }}
                    >
                      <Card
                        hoverable
                        role="button"
                        tabIndex={0}
                        aria-expanded={selected === index}
                        aria-controls={`service-details-${index}`}
                        aria-label={`${
                          selected === index ? "Hide" : "Show"
                        } details for ${service.title}`}
                        onClick={() =>
                          setSelected(
                            selected === index ? null : index
                          )
                        }
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setSelected(
                              selected === index ? null : index
                            );
                          }
                        }}
                        className={`group h-full cursor-pointer transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-elevate-lg hover:shadow-alpine-300/20 hover:ring-1 hover:ring-alpine-300/50 hover:border-alpine-300 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                          selected === index
                            ? "border-alpine-600 ring-1 ring-alpine-600"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-alpine-50 text-alpine-700 transition-all duration-300 group-hover:scale-105 group-hover:rotate-6 group-hover:bg-alpine-600 group-hover:text-paper motion-reduce:transform-none">
                            <Icon className="h-5 w-5" />
                          </div>

                          <Badge>{service.category}</Badge>
                        </div>

                        <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                          {service.title}
                        </h3>

                        <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                          {service.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-alpine-700">
                          <span className="relative">
                            Learn more
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-alpine-700 transition-all duration-300 group-hover:w-full" />
                          </span>

                          <ArrowRight
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform duration-300 ${
                              selected === index
                                ? "rotate-90"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </RevealGroup>

              {activeInRow && renderDetails(selected)}
            </div>
          );
        })}
      </div>
    </Section>
  );
}