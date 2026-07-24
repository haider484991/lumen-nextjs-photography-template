/**
 * Frame — a stand-in "photograph".
 *
 * This template ships with zero image files, so the repo is tiny and there is
 * nothing to license. Each frame renders a deterministic gradient derived from
 * its gallery slug and index, so the layout looks like a real, varied portfolio
 * and stays identical between builds.
 *
 * ── USING REAL PHOTOS ──────────────────────────────────────────────────────
 * Replace the <div> below with next/image and pass a src through:
 *
 *   import Image from "next/image";
 *   <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 33vw"
 *          className="object-cover" />
 *
 * Keep the wrapper and its aspect ratio classes — the masonry grid depends on
 * them. Add `loading="lazy"` (next/image does this by default) so a gallery of
 * 60 photographs still loads fast.
 */

const RATIO_CLASS: Record<string, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

/** Cheap deterministic hash so a given (seed, index) always yields one look. */
function hash(seed: string, i: number): number {
  let h = 2166136261;
  const s = `${seed}-${i}`;
  for (let n = 0; n < s.length; n++) {
    h ^= s.charCodeAt(n);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export default function Frame({
  seed,
  index,
  ratio = "portrait",
  className = "",
  alt,
}: {
  seed: string;
  index: number;
  ratio?: string;
  className?: string;
  /** Real alt text once you swap in real photos. */
  alt?: string;
}) {
  const h = hash(seed, index);
  // Warm, filmic hues — amber through rose to deep indigo.
  const hue = h % 360;
  const hue2 = (hue + 35 + (h % 40)) % 360;
  const angle = h % 180;
  const light1 = 58 + (h % 18);
  const light2 = 22 + (h % 20);

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${RATIO_CLASS[ratio] ?? RATIO_CLASS.portrait} ${className}`}
      role={alt ? "img" : undefined}
      aria-label={alt}
      style={{
        backgroundImage: `
          linear-gradient(${angle}deg,
            hsl(${hue} 45% ${light1}%) 0%,
            hsl(${hue2} 38% ${light2}%) 100%),
          radial-gradient(at ${30 + (h % 40)}% ${20 + (h % 50)}%,
            hsl(${(hue + 180) % 360} 60% 70% / 0.35) 0px, transparent 60%)
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* film-grain-ish sheen, drawn not loaded */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.6) 0 1px, transparent 1px 3px)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
