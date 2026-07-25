import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper shadow-elevate hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-elevate-lg",
        signal: "bg-alpine-600 text-paper shadow-elevate hover:-translate-y-0.5 hover:bg-alpine-700 hover:shadow-glow",
        outline: "border border-line bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink/30 hover:bg-card hover:shadow-elevate",
        ghost: "link-underline text-ink-soft hover:text-ink",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-[15px]",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };