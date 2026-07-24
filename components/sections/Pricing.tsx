import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Investment
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Straightforward pricing
            </h2>
            <p className="mt-4 leading-relaxed opacity-70">
              No packages that quietly exclude the thing you actually wanted.
              Everything below includes full editing and a print release.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl p-8 ${
                  p.featured
                    ? "bg-ink-900 text-ink-50 dark:bg-ink-100 dark:text-ink-900"
                    : "border border-current/12"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 w-fit rounded-full bg-current/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    Most booked
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-4 font-display text-4xl font-bold">{p.price}</p>
                <p className="mt-1 text-sm opacity-60">{p.duration}</p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 opacity-60"
                        aria-hidden="true"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      <span className="opacity-80">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-6 py-3.5 text-center font-semibold transition-opacity hover:opacity-85 ${
                    p.featured
                      ? "bg-ink-50 text-ink-900 dark:bg-ink-900 dark:text-ink-50"
                      : "bg-ink-900 text-ink-50 dark:bg-ink-100 dark:text-ink-900"
                  }`}
                >
                  Enquire
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              How it works
            </h3>
          </Reveal>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.process.map(([title, detail], i) => (
              <Reveal key={title} delay={i * 70}>
                <li className="border-t border-current/15 pt-5">
                  <span className="font-display text-sm font-bold opacity-40">
                    0{i + 1}
                  </span>
                  <h4 className="mt-2 font-semibold">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed opacity-65">
                    {detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
