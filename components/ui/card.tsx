import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padding?: "sm" | "default" | "lg";
}

const paddingMap = {
  sm: "p-6",
  default: "p-8",
  lg: "p-9 sm:p-10",
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, padding = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-line bg-card shadow-subtle",
        paddingMap[padding],
        hoverable &&
          "transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-elevate-lg",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
