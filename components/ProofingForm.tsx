"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

/**
 * Gallery-code entry.
 *
 * This is deliberately a front-end shell: a static export cannot authenticate
 * anyone, and pretending otherwise would be insecure theatre. Wire `onSubmit`
 * to your real gallery host — Pic-Time, Pixieset, ShootProof, CloudSpot — or to
 * your own API, and redirect on success.
 */
export default function ProofingForm() {
  const [code, setCode] = useState("");
  const [state, setState] = useState<"idle" | "checking" | "demo">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("checking");
    // Replace with a real lookup against your gallery provider.
    window.setTimeout(() => setState("demo"), 500);
  }

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="code" className="sr-only">
          Gallery code
        </label>
        <input
          id="code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={siteConfig.proofing.placeholder}
          required
          autoComplete="off"
          className="input sm:flex-1"
        />
        <button
          type="submit"
          disabled={state === "checking"}
          className="rounded-full bg-ink-900 px-7 py-3.5 font-semibold text-ink-50 transition-opacity hover:opacity-85 disabled:opacity-50 dark:bg-ink-100 dark:text-ink-900"
        >
          {state === "checking" ? "Checking…" : "View gallery"}
        </button>
      </form>

      {state === "demo" && (
        <div className="mt-5 rounded-xl border border-current/15 p-5 text-sm leading-relaxed opacity-75">
          <strong className="font-semibold">Demo mode.</strong> This template
          ships without a gallery backend — a static site cannot verify a code
          on its own. Connect{" "}
          <code className="rounded bg-current/10 px-1.5 py-0.5 text-xs">
            handleSubmit
          </code>{" "}
          in{" "}
          <code className="text-xs">components/ProofingForm.tsx</code> to
          Pic-Time, Pixieset, ShootProof, CloudSpot, or your own API.
        </div>
      )}
    </div>
  );
}
