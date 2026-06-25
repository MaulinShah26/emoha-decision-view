"use client";

import { useState } from "react";

type Mode = "operator" | "leadership";

export default function DecisionView() {
  const [mode, setMode] = useState<Mode>("operator");

  return (
    <section className="section border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-6">
        <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
          04 · The decision view · live
        </p>
        <h2 className="mt-6 font-serif text-xl text-ink title-underline inline-block">
          [Section title]
        </h2>
        <p className="mt-6 text-md text-ink-muted max-w-[680px]">
          [One view, two modes. Same data, two lenses. Operator sees the work
          queue. Leadership sees portfolio and lift.]
        </p>

        {/* Mode toggle */}
        <div className="mt-10 inline-flex rounded-full border border-line bg-page p-1">
          <button
            onClick={() => setMode("operator")}
            className={`px-5 py-2 rounded-full text-md font-mono uppercase tracking-wider transition ${
              mode === "operator"
                ? "bg-accent text-page"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Operator mode
          </button>
          <button
            onClick={() => setMode("leadership")}
            className={`px-5 py-2 rounded-full text-md font-mono uppercase tracking-wider transition ${
              mode === "leadership"
                ? "bg-accent text-page"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Leadership mode
          </button>
        </div>

        {/* Mode content */}
        <div className="mt-10 min-h-[420px] rounded-2xl border border-line bg-page p-8">
          {mode === "operator" ? (
            <div className="text-ink-muted">
              <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
                Operator mode · the queue
              </p>
              <p className="mt-4">
                [Ranked queue (members at risk this week) plus member detail
                drill-down. The work list an ERM opens each morning.]
              </p>
            </div>
          ) : (
            <div className="text-ink-muted">
              <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
                Leadership mode · portfolio and lift
              </p>
              <p className="mt-4">
                [Portfolio header tiles (members at risk, value-at-risk,
                renewals due, saves made, suppressed) plus treated vs holdout
                lift over time.]
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
