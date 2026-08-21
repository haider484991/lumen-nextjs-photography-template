import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 border-t border-current/10 pt-8 sm:flex-row sm:items-center">
        <div>
          <span className="block font-display text-xl font-bold tracking-[0.2em]">
            {siteConfig.name.toUpperCase()}
          </span>
          <p className="mt-1 text-xs opacity-55">
            {siteConfig.contact.city}, {siteConfig.contact.country} ·{" "}
            {siteConfig.photographer}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
          <a href="/#work" className="opacity-70 hover:opacity-100">
            Work
          </a>
          <a href="/#pricing" className="opacity-70 hover:opacity-100">
            Pricing
          </a>
          <a href="/proofing/" className="opacity-70 hover:opacity-100">
            Client galleries
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between gap-2 text-xs opacity-50 sm:flex-row">
        <span>
          © {year} {siteConfig.name}. All rights reserved.
        </span>
        <span>
          {siteConfig.footerNote}{" "}
          <a
            href={siteConfig.footerCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {siteConfig.footerCredit.label}
          </a>
        </span>
      </div>
    </footer>
  );
}
