export default function RenewalProblem() {
  const stats = [
    { value: "~40%", label: "Revenue growth, last reported year" },
    { value: "₹74 Cr", label: "Revenue scale" },
    { value: "₹1.5", label: "Spent to earn one rupee" },
    { value: "~42%", label: "Cost going to staff" },
  ];

  const points = [
    {
      label: "The math is unforgiving",
      body: "Growth here is not a free win. Each new cohort either keeps renewing or quietly drops, and the unit economics are most sensitive to that.",
    },
    {
      label: "The question is unavoidable",
      body: "For each member, are they going to renew, and if not, what do we do about it. There is no version of running this business that skips this question.",
    },
    {
      label: "Today, it lives nowhere",
      body: "Right now this question lives in spreadsheets, hunches, and the gap between teams. No one owns it end to end.",
    },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-content px-8 lg:px-12">
        <p className="eyebrow">01 · The renewal problem</p>
        <h2 className="mt-4 display title-underline inline-block">
          Where the money actually is
        </h2>

        <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-page p-6"
            >
              <p className="display text-accent">{s.value}</p>
              <p className="mt-3 text-md text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.label}>
              <p className="eyebrow">{p.label}</p>
              <p className="mt-3 text-md text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
