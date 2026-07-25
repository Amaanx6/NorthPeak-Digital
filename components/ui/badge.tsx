import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill font-mono text-[10px] font-medium uppercase tracking-[0.1em]",
  {
    variants: {
      variant: {
        default: "border border-line bg-ridge px-2.5 py-1 text-ink-muted",
        accent: "bg-alpine-50 px-2.5 py-1 text-alpine-700",
        solid: "bg-signal px-3 py-1.5 text-paper",
        "on-dark": "border border-line-dark bg-white/5 px-2.5 py-1 text-paper/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
