"use client";

import { useRef, useState } from "react";
import {
  sampleMembers,
  portfolioSummary,
  liftSeries,
  type RiskBand,
} from "@/lib/data";

type Mode = "operator" | "leadership";

const bandClasses: Record<
  RiskBand,
  { dot: string; text: string; bg: string }
> = {
  Critical: {
    dot: "bg-band-critical",
    text: "text-band-critical",
    bg: "bg-band-critical-bg",
  },
  High: { dot: "bg-band-high", text: "text-band-high", bg: "bg-band-high-bg" },
  Watch: {
    dot: "bg-band-watch",
    text: "text-band-watch",
    bg: "bg-band-watch-bg",
  },
  Low: { dot: "bg-band-low", text: "text-band-low", bg: "bg-band-low-bg" },
};

function formatInr(n: number): string {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function DecisionView() {
  const [mode, setMode] = useState<Mode>("operator");
  const sorted = [...sampleMembers].sort(
    (a, b) =>
      b.valueAtRisk * b.lapseRiskScore - a.valueAtRisk * a.lapseRiskScore
  );
  const [selectedId, setSelectedId] = useState<string>(sorted[0].id);
  const selected = sorted.find((m) => m.id === selectedId) ?? sorted[0];

  return (
    <section className="section border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">04 · The decision view · live</p>
        <h2 className="mt-6 display title-underline inline-block">
          One view, two modes
        </h2>
        <p className="mt-6 text-md text-ink-muted max-w-[680px]">
          Same data, two lenses. Operator mode is the queue an Elder
          Relationship Manager opens each morning. Leadership mode is the
          portfolio view that answers whether the layer is actually earning
          its keep.
        </p>

        {/* Mode toggle */}
        <div className="mt-10 inline-flex rounded-full border border-line bg-page p-1">
          <button
            onClick={() => setMode("operator")}
            className={`px-5 py-2 rounded-full text-md font-medium uppercase tracking-[0.12em] transition ${
              mode === "operator"
                ? "bg-accent text-page"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Operator mode
          </button>
          <button
            onClick={() => setMode("leadership")}
            className={`px-5 py-2 rounded-full text-md font-medium uppercase tracking-[0.12em] transition ${
              mode === "leadership"
                ? "bg-accent text-page"
                : "text-ink-muted hover:text-ink"
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
          <p className="eyebrow">
            Decision queue · ranked by Value-at-Risk × Risk
          </p>
        </div>
        <div className="divide-y divide-line">
          {members.map((m) => {
            const band = bandClasses[m.riskBand];
            const isActive = m.id === selected.id;
            return (
              <button
                key={m.id}
                onClick={() => onSelect(m.id)}
                className={`w-full text-left px-5 py-4 transition ${
                  isActive ? "bg-accent-soft/60" : "hover:bg-accent-soft/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-2 h-2 rounded-full ${band.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-md font-medium text-ink">
                        {m.elder.name}
                      </span>
                      <span className="text-ink-subtle">· {m.elder.age}</span>
                      <span className="text-ink-subtle">
                        · sponsor {m.sponsor.name} ({m.sponsor.location}
                        {m.sponsor.isNri ? ", NRI" : ""})
                      </span>
                    </div>
                    <p className="text-md text-ink-muted mt-1 truncate">
                      {m.topDrivers[0]}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className={`text-md font-medium uppercase tracking-[0.12em] ${band.text}`}
                    >
                      {m.riskBand} · {m.lapseRiskScore}
                    </div>
                    <div className="text-md text-ink-subtle mt-1">
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
          <h3 className="display">{selected.elder.name}</h3>
          <span className="text-md text-ink-subtle">
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
          {selected.planTier} · {formatInr(selected.monthlyValue)}/mo · renewal
          in {selected.daysToRenewal} days
        </p>

        <div
          className={`mt-5 rounded-xl px-4 py-3 ${
            bandClasses[selected.riskBand].bg
          }`}
        >
          <p
            className={`text-md font-medium uppercase tracking-[0.12em] ${
              bandClasses[selected.riskBand].text
            }`}
          >
            {selected.riskBand} · risk {selected.lapseRiskScore} · value at
            risk {formatInr(selected.valueAtRisk)}
          </p>
        </div>

        <div className="mt-5">
          <p className="eyebrow">Why</p>
          <ul className="mt-2 space-y-1">
            {selected.topDrivers.map((d, i) => (
              <li key={i} className="text-md text-ink-muted">
                · {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="eyebrow">Recommended action</p>
          <p className="mt-2 text-md text-ink">{selected.recommendedAction}</p>
          <p className="mt-1 text-md text-ink-subtle">
            Owner: {selected.actionOwner} · Channel: {selected.actionChannel}
          </p>
        </div>

        <div className="mt-5">
          <p className="eyebrow">History</p>
          <ul className="mt-2 space-y-1">
            {selected.history.map((h, i) => (
              <li key={i} className="text-md text-ink-muted">
                <span className="text-ink-subtle mr-2">-{h.daysAgo}d</span>
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
    {
      label: "Members at risk this week",
      value: portfolioSummary.membersAtRiskThisWeek.toString(),
    },
    { label: "Value at risk", value: formatInr(portfolioSummary.valueAtRiskInr) },
    {
      label: "Renewals due in 30 days",
      value: portfolioSummary.renewalsDueIn30Days.toString(),
    },
    {
      label: "Saves made this month",
      value: portfolioSummary.savesMadeThisMonth.toString(),
    },
    { label: "Suppressed", value: portfolioSummary.suppressedCount.toString() },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio tiles */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl border border-line bg-page px-5 py-5"
          >
            <p className="eyebrow">{t.label}</p>
            <p className="mt-3 display">{t.value}</p>
          </div>
        ))}
      </div>

      {/* Interactive lift chart */}
      <LiftChart />
    </div>
  );
}

/* -------------------- Interactive Lift Chart -------------------- */

function LiftChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const allVals = liftSeries.flatMap((p) => [p.treated, p.holdout]);
  const min = Math.min(...allVals) - 2;
  const max = Math.max(...allVals) + 2;
  const yScale = (v: number) => 100 - ((v - min) / (max - min)) * 100;
  const xStep = 100 / (liftSeries.length - 1);

  const treatedPoints = liftSeries
    .map((p, i) => `${i * xStep},${yScale(p.treated)}`)
    .join(" ");
  const holdoutPoints = liftSeries
    .map((p, i) => `${i * xStep},${yScale(p.holdout)}`)
    .join(" ");

  const latest = liftSeries[liftSeries.length - 1];
  const currentLift = latest.treated - latest.holdout;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = (x / rect.width) * 100;
    const idx = Math.round(pct / xStep);
    const clamped = Math.max(0, Math.min(liftSeries.length - 1, idx));
    setHoverIdx(clamped);
  }

  function handleMouseLeave() {
    setHoverIdx(null);
  }

  const hovered = hoverIdx !== null ? liftSeries[hoverIdx] : null;
  const hoveredLift = hovered ? hovered.treated - hovered.holdout : null;
  const tooltipLeftPct = hoverIdx !== null ? hoverIdx * xStep : 0;
  // Flip tooltip side when near right edge.
  const tooltipFlip = tooltipLeftPct > 75;

  return (
    <div className="rounded-2xl border border-line bg-page p-6">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <div>
          <p className="eyebrow">
            Renewal rate · treated vs holdout · last 8 weeks
          </p>
          <p className="mt-2 text-md text-ink-muted max-w-[480px]">
            Treated members get the layer&apos;s recommended action. Holdout
            members are an untouched control. The gap is the lift the layer
            is producing.
          </p>
        </div>
        <div className="text-right">
          <p className="eyebrow">Current lift</p>
          <p className="mt-2 display text-accent">+{currentLift} pts</p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative mt-6 h-64 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
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

          {/* Hover guide line */}
          {hoverIdx !== null && (
            <line
              x1={hoverIdx * xStep}
              x2={hoverIdx * xStep}
              y1="0"
              y2="100"
              stroke="rgb(var(--ink-subtle))"
              strokeWidth="0.3"
              strokeDasharray="0.8 0.8"
            />
          )}

          {/* Holdout (dashed, subtle) */}
          <polyline
            fill="none"
            stroke="rgb(var(--ink-subtle))"
            strokeWidth="0.7"
            strokeDasharray="1.4 1.4"
            points={holdoutPoints}
            vectorEffect="non-scaling-stroke"
          />
          {/* Treated (solid, accent) */}
          <polyline
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth="0.9"
            points={treatedPoints}
            vectorEffect="non-scaling-stroke"
          />

          {/* Dots */}
          {liftSeries.map((p, i) => {
            const isHovered = i === hoverIdx;
            return (
              <g key={p.week}>
                <circle
                  cx={i * xStep}
                  cy={yScale(p.holdout)}
                  r={isHovered ? 1.6 : 1.0}
                  fill="rgb(var(--ink-subtle))"
                />
                <circle
                  cx={i * xStep}
                  cy={yScale(p.treated)}
                  r={isHovered ? 1.8 : 1.1}
                  fill="rgb(var(--accent))"
                />
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hovered && hoverIdx !== null && (
          <div
            className="pointer-events-none absolute top-2 z-10 rounded-lg border border-line bg-surface px-4 py-3 shadow-sm"
            style={{
              left: tooltipFlip ? "auto" : `calc(${tooltipLeftPct}% + 12px)`,
              right: tooltipFlip
                ? `calc(${100 - tooltipLeftPct}% + 12px)`
                : "auto",
              minWidth: "180px",
            }}
          >
            <p className="eyebrow">{hovered.week}</p>
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-3 justify-between">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-[2px] bg-accent" />
                  <span className="text-md text-ink-muted">Treated</span>
                </span>
                <span className="text-md font-medium text-ink">
                  {hovered.treated}%
                </span>
              </div>
              <div className="flex items-center gap-3 justify-between">
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block w-4 h-[2px]"
                    style={{
                      background:
                        "repeating-linear-gradient(to right, rgb(var(--ink-subtle)) 0 2px, transparent 2px 4px)",
                    }}
                  />
                  <span className="text-md text-ink-muted">Holdout</span>
                </span>
                <span className="text-md font-medium text-ink">
                  {hovered.holdout}%
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 mt-1 border-t border-line">
                <span className="text-md text-ink-muted">Lift</span>
                <span className="text-md font-medium text-accent">
                  +{hoveredLift} pts
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2">
        {liftSeries.map((p) => (
          <span key={p.week} className="text-md text-ink-subtle">
            {p.week}
          </span>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-[2px] bg-accent" />
          <span className="text-md text-ink-muted">Treated</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-6 h-[2px]"
            style={{
              background:
                "repeating-linear-gradient(to right, rgb(var(--ink-subtle)) 0 3px, transparent 3px 6px)",
            }}
          />
          <span className="text-md text-ink-muted">Holdout</span>
        </div>
        <p className="text-md text-ink-subtle">
          Hover the chart to see weekly values.
        </p>
      </div>
    </div>
  );
}
