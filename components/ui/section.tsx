import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  tone?: "paper" | "ridge" | "night";
  border?: "none" | "top";
  as?: "section" | "div";
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
  className,
  children,
  ...props
}: SectionProps) {
  const Comp = as;
  return (
    <Comp
      id={id}
      className={cn(
        "py-24 md:py-28",
        toneMap[tone],
        border === "top" && (tone === "night" ? "border-t border-line-dark" : "border-t border-line"),
        className
      )}
      {...props}
    >
      <Container>{children}</Container>
    </Comp>
  );
}
