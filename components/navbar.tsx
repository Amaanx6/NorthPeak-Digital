"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`flex w-full max-w-3xl items-center justify-between gap-3 rounded-pill border border-line bg-card/90 px-3 py-2.5 shadow-capsule backdrop-blur-md transition-shadow duration-300 ${
            scrolled ? "shadow-elevate" : ""
          }`}
        >
          <a href="#top" className="flex shrink-0 items-center gap-2 pl-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-alpine-600 text-paper">
              <Mountain className="h-[18px] w-[18px]" />
            </span>

            <span className="hidden font-display text-[15px] font-semibold tracking-tight text-ink sm:inline">
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHovered(link.label)}
                aria-current={activeSection === link.href ? "true" : undefined}
                className="relative isolate rounded-pill px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine-400 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                {hovered === link.label && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 z-0 rounded-pill border border-black/5 bg-white shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 38,
                      mass: 0.6,
                    }}
                  />
                )}

                <span className="relative z-10 inline-flex items-center gap-1.5">
                  {link.label}
                  {activeSection === link.href && (
                    <span
                      className="h-1 w-1 rounded-full bg-alpine-600"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-pill bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink/85 sm:inline-flex"
            >
              Start a project
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-ridge lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed inset-x-4 top-5 z-[70] rounded-3xl border border-line bg-card p-3 shadow-elevate-lg lg:hidden"
            >
              <div className="flex items-center justify-between px-3 py-2">
                <span className="font-display text-[15px] font-semibold text-ink">
                  {SITE_NAME}
                </span>

                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-ridge"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <motion.nav
                className="mt-2 flex flex-col gap-1"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                }}
              >
                {NAV_LINKS.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl px-4 py-3 text-[15px] font-medium text-ink-soft transition-colors hover:bg-ridge hover:text-ink"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-2xl bg-ink px-4 py-3.5 text-center text-sm font-medium text-paper"
              >
                Start a project
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[92px]" />
    </>
  );
}