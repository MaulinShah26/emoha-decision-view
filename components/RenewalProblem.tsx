export default function RenewalProblem() {
  const stats = [
    { value: "~40%", label: "Revenue growth, last reported year" },
    { value: "₹74 Cr", label: "Revenue scale" },
    { value: "₹1.5", label: "Spent to earn one rupee" },
    { value: "~42%", label: "Cost going to caregivers and staff" },
  ];

  const points = [
    {
      label: "The unit economics are upside down",
      body: "Spending ₹1.5 to earn a rupee, with people as the largest cost. On the public numbers, this reads as a cost-to-serve problem before a growth problem.",
    },
    {
      label: "Growth raises the stakes",
      body: "On these unit economics, every new franchise and cohort adds cost about as fast as revenue. Scale rewards getting the calls underneath right and punishes getting them wrong.",
    },
    {
      label: "The decisions underneath",
      body: "Who serves which elder, which franchise survives, why members actually leave. Each is easy to make in the moment and hard to make consistently at scale. That gap is where a decision layer earns its place.",
    },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-content px-8 lg:px-12">
        <p className="eyebrow">01 · The real constraint</p>
        <h2 className="mt-4 display title-underline inline-block">
          Where the money actually leaks
        </h2>

        <div className="mt-7 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-page p-5"
            >
              <p className="display text-accent">{s.value}</p>
              <p className="mt-3 text-md text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
