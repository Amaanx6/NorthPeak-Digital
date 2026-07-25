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
  } = props;

  const [focused, setFocused] = useState(false);

  const filled = Boolean(props.value);
  const floated = focused || filled;

  const sharedClassName = cn(
    "peer w-full rounded-xl border bg-paper px-4 pb-2.5 pt-6 text-sm text-ink outline-none transition-colors duration-200",
    "focus:border-alpine-500",
    invalid ? "border-signal" : "border-line",
    props.multiline && "min-h-[128px] resize-none",
    className
  );

  return (
    <div className="relative">
      {props.multiline ? (
        <textarea
          {...props}
          id={id}
          className={sharedClassName}
          aria-invalid={invalid}
          aria-describedby={errorId}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          {...props}
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
          props.multiline && !floated && "top-6"
        )}
      >
        {label}
      </label>
    </div>
  );
}