import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  tone?: "paper" | "ridge" | "night";
  border?: "none" | "top";
  as?: "section" | "div";
  /** Adds the faint noise texture used across sections for perceived material quality. */
  noise?: boolean;
}

const toneMap = {
  paper: "bg-paper",
  ridge: "bg-ridge",
  night: "bg-night",
};

export function Section({
  id,
  tone = "paper",
  border = "none",
  as = "section",
  noise = true,
  className,
  children,
  ...props
}: SectionProps) {
  const Comp = as;
  const isDark = tone === "night";

  return (
    <Comp
      id={id}
      className={cn("relative py-24 md:py-28 lg:py-32", toneMap[tone], className)}
      {...props}
    >
      {border === "top" && (
        <span
          className={cn(
            "absolute inset-x-0 top-0 h-px",
            isDark ? "divider-fade-dark" : "divider-fade"
          )}
          aria-hidden="true"
        />
      )}

      {noise && (
        <span
          className="pointer-events-none absolute inset-0 bg-noise"
          aria-hidden="true"
        />
      )}

      <Container className="relative">{children}</Container>
    </Comp>
  );
}