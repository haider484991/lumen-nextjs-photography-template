import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

export default function About() {
  const { about, photographer } = siteConfig;

  return (
    <section
      id="about"
      className="border-y border-current/10 bg-ink-100/60 py-20 sm:py-28 dark:bg-ink-900/40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <Frame seed="about" index={0} ratio="portrait" />
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              About {photographer}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {about.heading}
            </h2>
            {about.body.map((p) => (
              <p key={p} className="mt-5 leading-relaxed opacity-70">
                {p}
              </p>
            ))}

            <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-current/10 pt-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider opacity-55">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
