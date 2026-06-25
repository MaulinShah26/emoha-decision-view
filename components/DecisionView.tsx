"use client";

import { useState } from "react";
import { sampleMembers, portfolioSummary, liftSeries, type RiskBand } from "@/lib/data";

type Mode = "operator" | "leadership";

const bandStyles: Record<RiskBand, { dot: string; text: string; bg: string }> = {
  Critical: { dot: "bg-[#B33A3A]", text: "text-[#B33A3A]", bg: "bg-[#FBE8E8]" },
  High:     { dot: "bg-[#C4751F]", text: "text-[#C4751F]", bg: "bg-[#FBEBD7]" },
  Watch:    { dot: "bg-[#8A6A1F]", text: "text-[#8A6A1F]", bg: "bg-[#F5ECD3]" },
  Low:      { dot: "bg-[#3F7F4E]", text: "text-[#3F7F4E]", bg: "bg-[#E4F0E6]" },
};

function formatInr(n: number): string {
  // Indian-format with lakh/crore separators.
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000)    return `₹${(n / 1_00_000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function DecisionView() {
  const [mode, setMode] = useState<Mode>("operator");
  // Default-select the top-of-queue member.
  const sorted = [...sampleMembers].sort(
    (a, b) => b.valueAtRisk * b.lapseRiskScore - a.valueAtRisk * a.lapseRiskScore
  );
  const [selectedId, setSelectedId] = useState<string>(sorted[0].id);
  const selected = sorted.find((m) => m.id === selectedId) ?? sorted[0];

  return (
    <section className="section border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-6">
        <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
          04 · The decision view · live
        </p>
        <h2 className="mt-6 font-serif text-xl text-ink title-underline inline-block">
          One view, two modes
        </h2>
        <p className="mt-6 text-md text-ink-muted max-w-[680px]">
          Same data, two lenses. Operator mode is the queue an Elder Relationship Manager
          opens each morning. Leadership mode is the portfolio view that answers
          whether the layer is actually earning its keep.
        </p>

        {/* Mode toggle */}
        <div className="mt-10 inline-flex rounded-full border border-line bg-page p-1">
          <button
            onClick={() => setMode("operator")}
            className={`px-5 py-2 rounded-full text-md font-mono uppercase tracking-wider transition ${
              mode === "operator" ? "bg-accent text-page" : "text-ink-muted hover:text-ink"
            }`}
          >
            Operator mode
          </button>
          <button
            onClick={() => setMode("leadership")}
            className={`px-5 py-2 rounded-full text-md font-mono uppercase tracking-wider transition ${
              mode === "leadership" ? "bg-accent text-page" : "text-ink-muted hover:text-ink"
            }`}
          >
            Leadership mode
          </button>
        </div>

        <div className="mt-10">
          {mode === "operator" ? (
            <OperatorMode
              members={sorted}
              selected={selected}
              onSelect={setSelectedId}
            />
          ) : (
            <LeadershipMode />
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Operator mode -------------------- */

function OperatorMode({
  members,
  selected,
  onSelect,
}: {
  members: typeof sampleMembers;
  selected: (typeof sampleMembers)[number];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      {/* Queue */}
      <div className="rounded-2xl border border-line bg-page overflow-hidden">
        <div className="px-5 py-4 border-b border-line">
          <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
            Decision queue · ranked by Value-at-Risk × Risk
          </p>
        </div>
        <div className="divide-y divide-line">
          {members.map((m) => {
            const band = bandStyles[m.riskBand];
            const isActive = m.id === selected.id;
            return (
              <button
                key={m.id}
                onClick={() => onSelect(m.id)}
                className={`w-full text-left px-5 py-4 transition ${
                  isActive ? "bg-accent-soft/40" : "hover:bg-accent-soft/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-2 h-2 rounded-full ${band.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-serif text-ink">{m.elder.name}</span>
                      <span className="text-ink-subtle text-md">· {m.elder.age}</span>
                      <span className="text-ink-subtle text-md">
                        · sponsor {m.sponsor.name} ({m.sponsor.location}
                        {m.sponsor.isNri ? ", NRI" : ""})
                      </span>
                    </div>
                    <p className="text-md text-ink-muted mt-1 line-clamp-1">
                      {m.topDrivers[0]}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`font-mono text-sm uppercase tracking-wider ${band.text}`}>
                      {m.riskBand} · {m.lapseRiskScore}
                    </div>
                    <div className="font-mono text-sm text-ink-subtle mt-1">
                      {formatInr(m.valueAtRisk)} · {m.daysToRenewal}d
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Member detail */}
      <div className="rounded-2xl border border-line bg-page p-6">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="font-serif text-lg text-ink">{selected.elder.name}</h3>
          <span className="text-ink-subtle text-md">
            · {selected.elder.age} · {selected.id}
          </span>
        </div>
        <p className="text-md text-ink-muted mt-2">
          Sponsor: {selected.sponsor.name} ({selected.sponsor.relationship},{" "}
          {selected.sponsor.location}
          {selected.sponsor.isNri ? ", NRI" : ""})
        </p>
        <p className="text-md text-ink-muted">
          {selected.city} · {selected.franchiseId} · ERM {selected.ermName}
        </p>
        <p className="text-md text-ink-muted">
          {selected.planTier} · {formatInr(selected.monthlyValue)}/mo · renewal in{" "}
          {selected.daysToRenewal} days
        </p>

        <div
          className={`mt-5 rounded-xl px-4 py-3 ${bandStyles[selected.riskBand].bg}`}
        >
          <p
            className={`font-mono text-sm uppercase tracking-wider ${
              bandStyles[selected.riskBand].text
            }`}
          >
            {selected.riskBand} · risk {selected.lapseRiskScore} · value at risk{" "}
            {formatInr(selected.valueAtRisk)}
          </p>
        </div>

        <div className="mt-5">
          <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
            Why
          </p>
          <ul className="mt-2 space-y-1">
            {selected.topDrivers.map((d, i) => (
              <li key={i} className="text-md text-ink-muted">
                · {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
            Recommended action
          </p>
          <p className="mt-2 text-md text-ink">{selected.recommendedAction}</p>
          <p className="mt-1 font-mono text-sm text-ink-subtle">
            Owner: {selected.actionOwner} · Channel: {selected.actionChannel}
          </p>
        </div>

        <div className="mt-5">
          <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
            History
          </p>
          <ul className="mt-2 space-y-1">
            {selected.history.map((h, i) => (
              <li key={i} className="text-md text-ink-muted">
                <span className="font-mono text-sm text-ink-subtle mr-2">
                  -{h.daysAgo}d
                </span>
                {h.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Leadership mode -------------------- */

function LeadershipMode() {
  const tiles = [
    { label: "Members at risk this week", value: portfolioSummary.membersAtRiskThisWeek.toString() },
    { label: "Value at risk", value: formatInr(portfolioSummary.valueAtRiskInr) },
    { label: "Renewals due in 30 days", value: portfolioSummary.renewalsDueIn30Days.toString() },
    { label: "Saves made this month", value: portfolioSummary.savesMadeThisMonth.toString() },
    { label: "Suppressed", value: portfolioSummary.suppressedCount.toString() },
  ];

  // Chart bounds
  const allVals = liftSeries.flatMap((p) => [p.treated, p.holdout]);
  const min = Math.min(...allVals) - 2;
  const max = Math.max(...allVals) + 2;
  const yScale = (v: number) => 100 - ((v - min) / (max - min)) * 100;

  // Build polylines as percent coords in the viewBox.
  const xStep = 100 / (liftSeries.length - 1);
  const treatedPoints = liftSeries
    .map((p, i) => `${i * xStep},${yScale(p.treated)}`)
    .join(" ");
  const holdoutPoints = liftSeries
    .map((p, i) => `${i * xStep},${yScale(p.holdout)}`)
    .join(" ");

  const latest = liftSeries[liftSeries.length - 1];
  const lift = latest.treated - latest.holdout;

  return (
    <div className="space-y-6">
      {/* Portfolio tiles */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl border border-line bg-page px-5 py-5"
          >
            <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
              {t.label}
            </p>
            <p className="mt-3 font-serif text-lg text-ink">{t.value}</p>
          </div>
        ))}
      </div>

      {/* Lift chart */}
      <div className="rounded-2xl border border-line bg-page p-6">
        <div className="flex items-baseline justify-between flex-wrap gap-3">
          <div>
            <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
              Renewal rate · treated vs holdout · last 8 weeks
            </p>
            <p className="mt-2 text-md text-ink-muted">
              Treated members get the layer&apos;s recommended action. Holdout
              members are an untouched control. The gap is the lift the layer
              is producing.
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
              Current lift
            </p>
            <p className="mt-2 font-serif text-lg text-accent">+{lift} pts</p>
          </div>
        </div>

        <div className="mt-6">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-64"
          >
            {/* horizontal gridlines */}
            {[0, 25, 50, 75, 100].map((g) => (
              <line
                key={g}
                x1="0"
                x2="100"
                y1={g}
                y2={g}
                stroke="rgb(var(--line))"
                strokeWidth="0.2"
              />
            ))}
            {/* holdout line */}
            <polyline
              fill="none"
              stroke="rgb(var(--ink-subtle))"
              strokeWidth="0.6"
              strokeDasharray="1.2 1.2"
              points={holdoutPoints}
            />
            {/* treated line */}
            <polyline
              fill="none"
              stroke="rgb(var(--accent))"
              strokeWidth="0.8"
              points={treatedPoints}
            />
            {/* dots */}
            {liftSeries.map((p, i) => (
              <g key={p.week}>
                <circle
                  cx={i * xStep}
                  cy={yScale(p.holdout)}
                  r="0.9"
                  fill="rgb(var(--ink-subtle))"
                />
                <circle
                  cx={i * xStep}
                  cy={yScale(p.treated)}
                  r="0.9"
                  fill="rgb(var(--accent))"
                />
              </g>
            ))}
          </svg>
          <div className="flex justify-between mt-2">
            {liftSeries.map((p) => (
              <span
                key={p.week}
                className="font-mono text-sm text-ink-subtle"
              >
                {p.week}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-accent" />
            <span className="font-mono text-sm text-ink-muted">Treated</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-6 h-[2px]"
              style={{
                background:
                  "repeating-linear-gradient(to right, rgb(var(--ink-subtle)) 0 3px, transparent 3px 6px)",
              }}
            />
            <span className="font-mono text-sm text-ink-muted">Holdout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
