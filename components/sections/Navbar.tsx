"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/proofing/", label: "Client galleries" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-current/10 bg-ink-50/85 backdrop-blur-xl dark:bg-ink-950/85"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="leading-none" aria-label={`${siteConfig.name} — home`}>
          <span className="block font-display text-2xl font-bold tracking-[0.2em]">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] opacity-50">
            {siteConfig.tagline}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium opacity-70 transition-opacity hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-ink-50 transition-opacity hover:opacity-85 sm:inline-block dark:bg-ink-100 dark:text-ink-900"
          >
            Check your date
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/15 md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-current/10 bg-ink-50 px-5 pb-6 pt-2 md:hidden dark:bg-ink-950">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-current/10 py-3.5 text-base font-medium last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-ink-900 px-5 py-3 text-center text-sm font-semibold text-ink-50 dark:bg-ink-100 dark:text-ink-900"
          >
            Check your date
          </a>
        </div>
      )}
    </header>
  );
}
