import { Mountain } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME, FOOTER_TRAINING_LINK } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ridge py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-alpine-600 text-paper">
                <Mountain className="h-4 w-4" aria-hidden="true" />
              </span>
              {SITE_NAME}
            </div>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink-soft">
              A small, senior team building web products, design systems, and
              cloud infrastructure for growing SaaS companies.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <a
            href={FOOTER_TRAINING_LINK.href}
            target="_blank"
            rel="noreferrer"
            className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            {FOOTER_TRAINING_LINK.label}
          </a>
        </div>
      </Container>
    </footer>
  );
}
