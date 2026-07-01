export default function HowRiskReads() {
  const bands = [
    {
      name: "Act now",
      range: "80 to 100",
      desc: "High value at stake, a clear step, and the window is closing.",
      cls: "bg-band-critical-bg text-band-critical",
    },
    {
      name: "Soon",
      range: "60 to 79",
      desc: "Real value and actionable, just not urgent yet.",
      cls: "bg-band-high-bg text-band-high",
    },
    {
      name: "Watch",
      range: "35 to 59",
      desc: "Early signals worth tracking before they harden.",
      cls: "bg-band-watch-bg text-band-watch",
    },
    {
      name: "Hold",
      range: "0 to 34",
      desc: "Healthy or low stakes. Most units sit here and get left alone.",
      cls: "bg-band-low-bg text-band-low",
    },
  ];

  const up = [
    { tag: "Value", body: "a lot of money or members ride on this one unit" },
    { tag: "Actionable", body: "there is a clear next step someone can take" },
    { tag: "Timing", body: "the window is closing, a renewal, a ramp deadline, an empty week" },
    { tag: "Convergence", body: "several signals point the same way" },
    { tag: "Owner", body: "someone can act on it right now" },
  ];

  const down = [
    { tag: "Stable", body: "the unit is healthy and trending the right way" },
    { tag: "Recovered", body: "a recent issue was handled well" },
    { tag: "Low stakes", body: "little value rides on it either way" },
    { tag: "Handled", body: "already self-sufficient, or on auto-renew" },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">05 · How it decides</p>
        <h2 className="mt-4 display title-underline inline-block">
          How the layer ranks what to act on
        </h2>
        <p className="mt-5 text-md text-ink-muted">
          The same engine runs all three bets. For each unit, a caregiver, a
          franchise, a member, it weighs two things: how much value is at stake,
          and how much can be done about it right now.
        </p>

        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Moves up the queue when</p>
            <ul className="mt-5 space-y-3">
              {up.map((r) => (
                <li key={r.tag} className="flex items-baseline gap-3 text-md text-ink-muted">
                  <span className="pill shrink-0">{r.tag}</span>
                  <span>{r.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Moves down when</p>
            <ul className="mt-5 space-y-3">
              {down.map((d) => (
                <li key={d.tag} className="flex items-baseline gap-3 text-md text-ink-muted">
                  <span className="pill-outline shrink-0">{d.tag}</span>
                  <span>{d.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-9 eyebrow">Four priority tiers</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bands.map((b) => (
            <div
              key={b.name}
              className={`rounded-2xl border border-line p-5 ${b.cls}`}
            >
              <p className="text-md font-medium uppercase tracking-[0.12em]">
                {b.name}
              </p>
              <p className="mt-2 display">{b.range}</p>
              <p className="mt-3 text-md opacity-90">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-md text-ink-muted space-y-3">
          <p className="text-ink text-md font-medium">
            It ranks by value at stake times how actionable, not by who is loudest.
          </p>
          <p>
            The biggest fixable problems surface first, across all three bets.
            And most units sit in Hold, so no one spends effort on what is
            already fine. Knowing what to leave alone is a first-class output,
            not an afterthought.
          </p>
        </div>
      </div>
    </section>
  );
}
