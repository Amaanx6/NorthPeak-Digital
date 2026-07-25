"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  open: boolean;
  message: string;
  onDismiss: () => void;
}

export function Toast({ open, message, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onDismiss, 5000);
    return () => clearTimeout(timer);
  }, [open, onDismiss]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          className="fixed bottom-6 left-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-card px-5 py-4 shadow-elevate-lg"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-alpine-600" aria-hidden="true" />
          <p className="text-sm text-ink-soft">{message}</p>
          <button
            onClick={onDismiss}
            aria-label="Dismiss notification"
            className="ml-auto shrink-0 rounded-full p-1 text-ink-muted transition-colors hover:text-ink"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
