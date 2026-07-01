"use client";

import { useState } from "react";
import { decisionBets, type ActionFlag } from "@/lib/bets";

const flagStyles: Record<
  ActionFlag,
  { dot: string; text: string; label: string }
> = {
  act: { dot: "bg-accent", text: "text-accent", label: "Act" },
  watch: { dot: "bg-band-high", text: "text-band-high", label: "Watch" },
  suppress: { dot: "bg-band-low", text: "text-band-low", label: "Hold" },
};

export default function DecisionView() {
  const [activeId, setActiveId] = useState(decisionBets[0].id);
  const bet = decisionBets.find((b) => b.id === activeId) ?? decisionBets[0];

  const have = bet.data.filter((d) => d.readiness === "have");
  const confirm = bet.data.filter((d) => d.readiness === "confirm");

  return (
    <section className="section border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">04 · The decision layer · ranked</p>
        <h2 className="mt-5 display title-underline inline-block">
          The three bets, ranked
        </h2>
        <p className="mt-5 text-md text-ink-muted">
          Not a finished dashboard. This is where I would point the decision
          layer first, second, and third, and how each call resolves down to
          the single caregiver, franchise, or member it is about.
        </p>

        {/* Honesty frame */}
        <div className="mt-6 rounded-2xl border border-line bg-page px-5 py-4">
          <p className="text-md text-ink-muted">
            <span className="font-medium text-ink">Read this honestly.</span>{" "}
            The order is my bet, made on public numbers and how the business
            runs. Which one your data can actually carry is the first thing we
            confirm together. The rows below are illustrative, not your real
            members.
          </p>
        </div>

        {/* Bet toggle — the ranking is always visible */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          {decisionBets.map((b) => {
            const active = b.id === activeId;
            return (
              <button
                key={b.id}
                onClick={() => setActiveId(b.id)}
                aria-pressed={active}
                className={`flex-1 text-left rounded-2xl border px-5 py-4 transition ${
                  active
                    ? "border-accent bg-accent text-page"
                    : "border-line bg-page text-ink hover:border-accent/50"
                }`}
              >
                <span
                  className={`text-md font-medium uppercase tracking-[0.12em] ${
                    active ? "text-page/80" : "text-ink-subtle"
                  }`}
                >
                  {b.tag}
                </span>
                <span className="mt-1 block display">{b.toggleLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Selected bet */}
        <div className="mt-7">
          {/* Decision + how it's made today */}
          <div className="">
            <h3 className="display">{bet.title}</h3>
            <p className="mt-4 text-md text-ink-muted">
              <span className="font-medium text-ink">The hard part: </span>
              {bet.madeToday}
            </p>
            <div className="mt-5 rounded-xl bg-accent-soft px-5 py-4">
              <p className="text-md text-accent">
                <span className="font-medium">The call the layer makes: </span>
                {bet.question}
              </p>
            </div>
          </div>

          {/* Signals + Logic */}
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-page p-5">
              <p className="eyebrow">Signals in</p>
              <ul className="mt-4 space-y-2">
                {bet.signals.map((s) => (
                  <li key={s} className="flex gap-3 text-md text-ink-muted">
                    <span className="mt-[10px] h-[3px] w-[3px] shrink-0 rounded-full bg-ink-subtle" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-page p-5">
              <p className="eyebrow">How it decides</p>
              <ul className="mt-4 space-y-2">
                {bet.logic.map((s) => (
                  <li key={s} className="flex gap-3 text-md text-ink-muted">
                    <span className="mt-[10px] h-[3px] w-[3px] shrink-0 rounded-full bg-accent" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ranked actions */}
          <div className="mt-5 rounded-2xl border border-line bg-page overflow-hidden">
            <div className="px-6 py-4 border-b border-line">
              <p className="eyebrow">
                What it outputs · ranked, per unit
              </p>
            </div>
            <div className="divide-y divide-line">
              {bet.actions.map((a) => {
                const f = flagStyles[a.flag];
                return (
                  <div key={a.unit} className="px-6 py-5">
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${f.dot}`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-4 flex-wrap">
                          <span className="text-md font-medium text-ink">
                            {a.unit}
                          </span>
                          <span
                            className={`text-md font-medium uppercase tracking-[0.12em] ${f.text}`}
                          >
                            {f.label}
                          </span>
                        </div>
                        <p className="mt-1 text-md text-ink-muted">{a.read}</p>
                        <p className="mt-2 text-md text-ink">{a.action}</p>
                        <p className="mt-1 text-md text-ink-subtle">
                          Owner: {a.owner}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data readiness */}
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-page p-5">
              <p className="eyebrow">Almost certainly in your systems</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {have.map((d) => (
                  <span key={d.label} className="pill">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-page p-5">
              <p className="eyebrow">We would confirm together</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {confirm.map((d) => (
                  <span key={d.label} className="pill-outline">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Why this rank */}
          <div className="mt-5 border-l-2 border-accent pl-5">
            <p className="eyebrow">Why it ranks {bet.tag.toLowerCase()}</p>
            <p className="mt-2 text-md text-ink-muted">{bet.whyRank}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
