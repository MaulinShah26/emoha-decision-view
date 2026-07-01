export default function WhatThisLayerDoes() {
  const capabilities = [
    {
      title: "Ranks by value at stake",
      body: "Value times how actionable, so the biggest fixable problems surface first on whichever bet, not the loudest ones.",
    },
    {
      title: "Routes each to a named owner",
      body: "Ops for a caregiver's load, Franchise success for a failing franchise, ERM for a member at risk, Auto for the ones to leave alone.",
    },
    {
      title: "Says who to leave alone",
      body: "Most units are healthy or low stakes and get no contact. Effort goes to the ones that actually move the number.",
    },
    {
      title: "Proves it worked against a holdout",
      body: "A treated set gets the action, a holdout does not. The gap between them is the measured lift, not an assumption.",
    },
  ];

  const examples = [
    {
      bet: "Cost to serve",
      driver: "Caregiver half-booked, elders nearby unassigned",
      action: "Fill the week before hiring anyone new",
      owner: "Ops",
    },
    {
      bet: "Franchise survival",
      driver: "New franchise past its ramp with no traction",
      action: "Intervene early or cut, before more is sunk",
      owner: "Franchise success",
    },
    {
      bet: "Why members leave",
      driver: "Sponsor gone quiet before renewal, often NRI",
      action: "Restore continuity, re-engage the sponsor",
      owner: "ERM",
    },
    {
      bet: "Hold",
      driver: "Healthy, engaged, auto-renewing",
      action: "No contact. Leave it alone.",
      owner: "Auto",
    },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">06 · What the layer does</p>
        <h2 className="mt-5 display title-underline inline-block">
          Four jobs, applied to each bet
        </h2>
        <p className="mt-5 text-md text-ink-muted">
          The engine does a small number of things, and does the same four on
          each of the three bets. None are new ideas. What is new is doing them
          together, per unit, with an owner.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-line bg-page p-5"
            >
              <p className="display">{c.title}</p>
              <p className="mt-3 text-md text-ink-muted">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-9 eyebrow">One example from each bet</p>
        <p className="mt-3 text-md text-ink-muted">
          For each driver, the layer maps to a next step and an owner.
          Illustrative, to show the shape.
        </p>

        <div className="mt-6 space-y-3">
          {examples.map((r) => (
            <div
              key={r.bet}
              className="rounded-2xl border border-line bg-page p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
            >
              <div className="md:w-1/5 shrink-0">
                <span className="pill">{r.bet}</span>
              </div>
              <p className="md:w-1/3 shrink-0 text-md text-ink-muted">
                {r.driver}
              </p>
              <p className="md:flex-1 text-md text-ink">{r.action}</p>
              <div className="shrink-0">
                <span className="pill-outline">{r.owner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
