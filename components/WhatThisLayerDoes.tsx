export default function WhatThisLayerDoes() {
  const capabilities = [
    {
      title: "Ranks by where money actually is",
      body: "Value-at-Risk times Risk, so the highest-value memberships in trouble surface first. The team spends time on saves that matter, not on whoever shouted last.",
    },
    {
      title: "Routes each member to the right owner",
      body: "ERM for relationship saves. Doctor for clinically-triggered reviews. Ops for service and franchise issues. Auto for the suppress and auto-renew set.",
    },
    {
      title: "Suppresses the safe ones",
      body: "Most Low-band memberships get no contact at all. Happy, engaged, auto-renewing members are left alone. ERM time is freed for the saves that actually move the renewal rate.",
    },
    {
      title: "Measures lift against a holdout",
      body: "A treated group gets the layer&apos;s recommended action. A holdout group does not. The gap between their renewal rates is the proven lift. No more &quot;we think it worked&quot;.",
    },
  ];

  const routingExamples = [
    {
      driver: "Sponsor disengaged, NRI, not opening updates",
      action: "Monthly elder health digest plus a proactive video update",
      owner: "ERM and automation",
      channel: "WhatsApp, Email",
    },
    {
      driver: "Emergency spike in 30 days, elder anxious",
      action: "Doctor review, reassurance call to Sponsor, GoSecure check",
      owner: "Doctor and ERM",
      channel: "Call",
    },
    {
      driver: "Renewal near plus low franchise quality",
      action: "HQ-led save call, flag franchise for quality review",
      owner: "Ops",
      channel: "Call",
    },
    {
      driver: "High satisfaction, heavy usage, NPS 9 plus",
      action: "Upsell relevant add-on at renewal (physio, equipment)",
      owner: "ERM",
      channel: "Call",
    },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">06 · What this layer does</p>
        <h2 className="mt-6 display title-underline inline-block">
          Four jobs, one surface
        </h2>
        <p className="mt-6 text-md text-ink-muted">
          The layer does a small number of things, and does them well. None of
          them are new ideas. What is new is them living together, on one
          surface, owned end to end.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-line bg-page p-6"
            >
              <p className="display">{c.title}</p>
              <p className="mt-3 text-md text-ink-muted">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 eyebrow">What the routing looks like</p>
        <p className="mt-3 text-md text-ink-muted">
          For each driver, the layer maps to a specific recommended action,
          owner, and channel. A few illustrative examples below. The full
          mapping grows as the team adds patterns that work.
        </p>

        <div className="mt-8 space-y-3">
          {routingExamples.map((r) => (
            <div
              key={r.driver}
              className="rounded-2xl border border-line bg-page p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="md:w-1/3 shrink-0">
                <span className="pill">{r.driver}</span>
              </div>
              <p className="md:flex-1 text-md text-ink-muted">{r.action}</p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="pill-outline">{r.owner}</span>
                <span className="pill-outline">{r.channel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
