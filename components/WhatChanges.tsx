export default function WhatChanges() {
  const blocks = [
    {
      label: "Business impact",
      body: "Cost to serve, franchise survival, and renewal tracked as live numbers each cycle. Every recommended action tied to rupees saved or at risk, and proven against a holdout.",
    },
    {
      label: "Team impact",
      body: "Ops gets a ranked queue of caregiver and franchise calls each morning. ERMs get the members worth saving, ranked by value. Doctors get clinically-triggered reviews on the highest-risk elders. HQ gets a portfolio view of where value is at risk across all three bets.",
    },
    {
      label: "How it lands",
      body: "Built on one bet first, say cost to serve, where the data is cleanest. Lift proven against a control before it expands to the next. No new tool to learn. It sits on top of the work the team already does.",
    },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">06 · What changes for Emoha</p>
        <h2 className="mt-5 display title-underline inline-block">
          What changes in practice
        </h2>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
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
