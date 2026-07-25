"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingField } from "@/components/ui/floating-field";
import { Toast } from "@/components/ui/toast";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { CONTACT_DETAILS, RESPONSE_TIME, AVAILABILITY_STATUS } from "@/data/site";
import type { ContactFormValues, ContactFormErrors } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.company.trim()) {
    errors.company = "Enter your company name.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a bit about the project.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      window.setTimeout(() => {
        setSubmitting(false);
        setValues(INITIAL_VALUES);
        setShowToast(true);
      }, 700);
    }
  };

  return (
    <Section id="contact" tone="paper" border="top">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tell us about your next build.
          </h2>
          <p className="mt-4 max-w-[40ch] text-lg leading-[1.7] text-ink-soft">
            Share a few details and an engagement lead will follow up
            directly — no forms disappearing into a queue.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Ways we can help">
            {["Discovery call", "Architecture review", "Project estimate"].map((item) => (
              <li
                key={item}
                className="rounded-pill border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-8 space-y-5">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <li key={detail.label} className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-alpine-50 text-alpine-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-muted">{detail.label}</p>
                    <p className="text-sm font-medium text-ink">{detail.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-ink-muted">Response time</span>
              <span className="font-medium text-ink">{RESPONSE_TIME}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-ink-muted">Availability</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-alpine-500" aria-hidden="true" />
                {AVAILABILITY_STATUS}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card padding="lg" className="sm:p-9">
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <FloatingField
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={handleChange("name")}
                invalid={Boolean(errors.name)}
                errorId={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="-mt-3 text-xs text-signal-dark sm:col-start-1">
                  {errors.name}
                </p>
              ) : null}

              <FloatingField
                id="email"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
                invalid={Boolean(errors.email)}
                errorId={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="-mt-3 text-xs text-signal-dark">
                  {errors.email}
                </p>
              ) : null}

              <div className="sm:col-span-2">
                <FloatingField
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="organization"
                  value={values.company}
                  onChange={handleChange("company")}
                  invalid={Boolean(errors.company)}
                  errorId={errors.company ? "company-error" : undefined}
                />
                {errors.company ? (
                  <p id="company-error" className="mt-2 text-xs text-signal-dark">
                    {errors.company}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <FloatingField
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  value={values.message}
                  onChange={handleChange("message")}
                  invalid={Boolean(errors.message)}
                  errorId={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-xs text-signal-dark">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  variant="signal"
                  disabled={submitting}
                  className="w-full sm:w-auto"
                >
                  {submitting ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>

      <Toast
        open={showToast}
        message="Message sent — we'll be in touch within one business day."
        onDismiss={() => setShowToast(false)}
      />
    </Section>
  );
}