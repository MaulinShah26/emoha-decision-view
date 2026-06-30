export default function WhatChanges() {
  const blocks = [
    {
      label: "Business impact",
      body: "Renewal rate as a tracked metric, not a year-end number. Saves attributed to specific recommended actions. Holdout-proven lift. Rupees retained against rupees at risk, every cycle.",
    },
    {
      label: "Team impact",
      body: "ERMs get a ranked work queue each morning, sorted by where the value is. Doctors get clinically-triggered reviews on the highest-risk elders. Ops gets early flags on franchises that may be affecting renewal. HQ gets a portfolio view of where value is at risk.",
    },
    {
      label: "How it lands",
      body: "Built on one slice first, say Comprehensive plan with NRI sponsors. Lift proven against a control group before the layer expands. No new tool for the team to learn. This sits on top of the work they already do.",
    },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">07 · What changes for Emoha</p>
        <h2 className="mt-6 display title-underline inline-block">
          What this means in practice
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.label}>
              <p className="eyebrow">{b.label}</p>
              <p className="mt-4 text-md text-ink-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
