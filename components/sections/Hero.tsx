import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">
          {hero.eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
        <Reveal delay={150}>
          <div>
            <p className="max-w-md leading-relaxed opacity-70">{hero.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-3.5 font-semibold text-ink-50 transition-opacity hover:opacity-85 dark:bg-ink-100 dark:text-ink-900"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-current/20 px-7 py-3.5 font-semibold transition-colors hover:bg-current/5"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Editorial three-up. Replace Frame with next/image when you have photos. */}
        <Reveal delay={220}>
          <div className="grid grid-cols-3 gap-3">
            <Frame seed="hero" index={0} ratio="portrait" className="mt-10" />
            <Frame seed="hero" index={1} ratio="portrait" />
            <Frame seed="hero" index={2} ratio="portrait" className="mt-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
