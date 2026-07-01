"use client";

import { useState } from "react";
import { Brain, ArrowRight } from "lucide-react";
import { decisionBets, dataInputs, type Tier } from "@/lib/bets";

const tierDot: Record<Tier, string> = {
  "Act now": "bg-accent",
  Soon: "bg-band-high",
  Watch: "bg-band-watch",
  Hold: "bg-band-low",
};
const tierText: Record<Tier, string> = {
  "Act now": "text-accent",
  Soon: "text-band-high",
  Watch: "text-band-watch",
  Hold: "text-band-low",
};

export default function DecisionEngine() {
  const [activeId, setActiveId] = useState(decisionBets[0].id);
  const bet = decisionBets.find((b) => b.id === activeId) ?? decisionBets[0];
  const have = bet.data.filter((d) => d.readiness === "have");
  const confirm = bet.data.filter((d) => d.readiness === "confirm");

  return (
    <section className="section border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">04 · The decision engine</p>
        <h2 className="mt-4 display title-underline inline-block">
          Data in, decisions out
        </h2>

        {/* Flow: data in -> Company Brain -> decisions out */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex-1 min-w-0">
            <p className="eyebrow mb-3">Data in</p>
            <div className="flex flex-col gap-2">
              {dataInputs.map((d) => (
                <div
                  key={d}
                  className="text-md text-ink-muted bg-page border border-line rounded-lg px-3 py-2"
                >
                  {d}
                </div>
              ))}
            </div>
          </div>

          <ArrowRight className="hidden lg:block text-ink-subtle shrink-0" size={26} aria-hidden="true" />

          <div className="w-full lg:w-[160px] shrink-0 text-center">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto">
              <Brain size={46} strokeWidth={1.5} className="text-page" aria-hidden="true" />
            </div>
            <p className="mt-3 text-md font-medium text-ink">Company Brain</p>
            <p className="text-[13px] text-ink-subtle">one decision engine</p>
          </div>

          <ArrowRight className="hidden lg:block text-ink-subtle shrink-0" size={26} aria-hidden="true" />

          <div className="flex-1 min-w-0">
            <p className="eyebrow mb-3">Decisions out</p>
            <div className="flex flex-col gap-2">
              {decisionBets.map((b) => (
                <div key={b.id} className="bg-accent-soft rounded-lg px-3 py-2">
                  <p className="text-md font-medium text-accent">{b.label}</p>
                  <p className="text-[13px] text-ink-muted">ranked actions, an owner each</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-md text-ink-muted max-w-[760px]">
          Every signal the business already produces feeds one engine. What comes
          out is not a dashboard, it is ranked decisions, each with an owner.
        </p>

        {/* Interactive drill-down */}
        <div className="mt-12 border-t border-line pt-10">
          <p className="text-md text-ink">Pick a bet. The layer ranks what to act on.</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {decisionBets.map((b) => {
              const active = b.id === activeId;
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveId(b.id)}
                  aria-pressed={active}
                  className={`rounded-lg border px-4 py-2 text-md transition ${
                    active
                      ? "border-accent bg-accent text-page"
                      : "border-line bg-page text-ink-muted hover:border-accent/50"
                  }`}
                >
                  {b.label}
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-md text-ink-muted">
            <span className="text-ink">The call: </span>
            {bet.call}
          </p>
          <p className="mt-1 eyebrow">Ranked by value against how actionable</p>

          <div className="mt-4 flex flex-col gap-2">
            {bet.queue.map((r) => (
              <div
                key={r.unit}
                className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr_auto] gap-3 md:gap-5 items-center bg-page border border-line rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-[3px] shrink-0 ${tierDot[r.tier]}`} />
                  <span className={`text-md font-medium ${tierText[r.tier]}`}>{r.tier}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-md text-ink">{r.unit}</p>
                  <p className="text-[13px] text-ink-subtle">{r.read}</p>
                </div>
                <div className="col-span-2 md:col-span-1 md:text-right">
                  <p className="text-md text-ink-muted">{r.action}</p>
                  <p className="text-[13px] text-ink-subtle">{r.owner}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <p className="eyebrow">Almost certainly in your systems</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {have.map((d) => (
                  <span key={d.label} className="pill">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">We would confirm together</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {confirm.map((d) => (
                  <span key={d.label} className="pill-outline">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-md text-ink-muted max-w-[760px]">
            Every unit is scored on value at stake against how actionable it is,
            then sorted. Most sit in Hold and are left alone. The order is a read
            from outside, and the rows are illustrative, not real members.
          </p>
        </div>
      </div>
    </section>
  );
}
