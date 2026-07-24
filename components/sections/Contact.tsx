"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

/**
 * Enquiry form + FAQ. Works with no backend: point the form at Formspree,
 * Netlify Forms, or your own endpoint by setting `action` below.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);
  const action = ""; // e.g. "https://formspree.io/f/xxxxxx"
  const usesBackend = action !== "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!usesBackend) {
      e.preventDefault();
      setSent(true);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="contact"
      className="border-t border-current/10 bg-ink-100/60 py-20 sm:py-28 dark:bg-ink-900/40"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Enquiries
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Check your date
            </h2>
            <p className="mt-4 max-w-md leading-relaxed opacity-70">
              Tell me when and where. I reply to everything within a day, and I
              will be honest with you if I am not the right fit.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block font-semibold hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="block opacity-70 hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </Reveal>

          {/* FAQ — also emitted as FAQPage structured data in layout.tsx */}
          <Reveal delay={100}>
            <div className="mt-12 space-y-3">
              {siteConfig.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-b border-current/12 pb-3"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 font-medium">
                    {f.q}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="shrink-0 opacity-50 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="pb-2 pr-8 text-sm leading-relaxed opacity-70">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          {sent ? (
            <div className="rounded-2xl border border-current/12 p-10 text-center">
              <h3 className="font-display text-2xl font-bold">Thank you</h3>
              <p className="mt-3 text-sm opacity-70">
                This is the built-in demo confirmation. Set{" "}
                <code className="rounded bg-current/10 px-1.5 py-0.5 text-xs">
                  action
                </code>{" "}
                in{" "}
                <code className="text-xs">components/sections/Contact.tsx</code>{" "}
                to receive real enquiries.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold underline underline-offset-4"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              action={usesBackend ? action : undefined}
              method={usesBackend ? "POST" : undefined}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-current/12 p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Your names
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className="input" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="input" />
                </div>
                <div>
                  <label htmlFor="date" className="mb-2 block text-sm font-medium">
                    Date
                  </label>
                  <input id="date" name="date" type="date" min={today} className="input" />
                </div>
                <div>
                  <label htmlFor="type" className="mb-2 block text-sm font-medium">
                    Type
                  </label>
                  <select id="type" name="type" className="input">
                    <option>Wedding</option>
                    <option>Portrait</option>
                    <option>Editorial / brand</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Tell me about the day
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Where, roughly how many people, and what you are hoping for."
                  className="input resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-ink-900 px-6 py-4 font-semibold text-ink-50 transition-opacity hover:opacity-85 dark:bg-ink-100 dark:text-ink-900"
              >
                Send enquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
