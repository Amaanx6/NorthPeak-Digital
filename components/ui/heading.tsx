import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "paper";
  maxWidth?: string;
}

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  maxWidth = "max-w-xl",
  className,
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(align === "center" && "mx-auto text-center", maxWidth, className)}
      {...props}
    >
      {eyebrow ? (
        <span className={tone === "ink" ? "eyebrow" : "eyebrow-on-dark"}>{eyebrow}</span>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl",
          eyebrow ? "mt-3" : "mt-0",
          tone === "ink" ? "text-ink" : "text-paper"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty mt-5 max-w-[60ch] text-lg leading-[1.7]",
            tone === "ink" ? "text-ink-soft" : "text-paper/65",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}