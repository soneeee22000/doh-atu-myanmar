"use client";

import { useActionState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const t = useTranslations("contact");
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: null,
  });

  return (
    <div>
      {state.success ? (
        <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
          <CheckCircle className="mb-4 h-12 w-12 text-green-600" />
          <p className="text-lg font-medium text-green-800">{t("success")}</p>
        </div>
      ) : (
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="honeypot">Do not fill this</label>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {t("name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t("name")}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {t("email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t("email")}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {t("subject")}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t("subject")}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              minLength={10}
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t("message")}
            />
          </div>

          {state.error && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {t("error")}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 font-medium text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
          >
            {isPending ? (
              t("sending")
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t("send")}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
