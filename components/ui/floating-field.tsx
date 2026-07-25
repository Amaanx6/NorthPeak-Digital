"use client";

import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  id: string;
  label: string;
  invalid?: boolean;
  errorId?: string;
  className?: string;
};

type InputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "children"> & {
    multiline?: false;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

type TextareaProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "children"> & {
    multiline: true;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  };

type FloatingFieldProps = InputProps | TextareaProps;

export function FloatingField(props: FloatingFieldProps) {
  const {
    id,
    label,
    invalid = false,
    errorId,
    className,
    multiline,
    ...fieldProps
  } = props;

  const [focused, setFocused] = useState(false);

  const filled = Boolean(fieldProps.value);
  const floated = focused || filled;

  const sharedClassName = cn(
    "peer w-full rounded-xl border bg-paper px-4 pb-2.5 pt-6 text-sm text-ink outline-none transition-all duration-200",
    "focus:border-alpine-500 focus:shadow-[0_0_0_4px_rgba(127,152,124,0.16),0_2px_8px_rgba(31,31,28,0.06)]",
    invalid ? "border-signal" : "border-line",
    multiline && "min-h-[128px] resize-none",
    className
  );

  return (
    <div className="relative">
      {multiline ? (
        // Narrow fieldProps to textarea-specific props to satisfy TS
        <textarea
          {...(fieldProps as Omit<TextareaProps, "multiline">)}
          id={id}
          className={sharedClassName}
          aria-invalid={invalid}
          aria-describedby={errorId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          {...(fieldProps as Omit<InputProps, "multiline">)}
          id={id}
          className={sharedClassName}
          aria-invalid={invalid}
          aria-describedby={errorId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}

      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 text-ink-muted transition-all duration-200",
          floated
            ? "top-2.5 text-[11px]"
            : "top-1/2 -translate-y-1/2 text-sm",
          multiline && !floated && "top-6"
        )}
      >
        {label}
      </label>
    </div>
  );
}