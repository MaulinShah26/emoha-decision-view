export default function HowRiskReads() {
  const bands = [
    {
      name: "Critical",
      range: "80 to 100",
      desc: "Renewal near plus multiple negative drivers, or an active escalation",
      cls: "bg-band-critical-bg text-band-critical",
    },
    {
      name: "High",
      range: "60 to 79",
      desc: "Several risk signals, or one strong signal near renewal",
      cls: "bg-band-high-bg text-band-high",
    },
    {
      name: "Watch",
      range: "35 to 59",
      desc: "Early or mid drivers showing, time to re-engage before renewal",
      cls: "bg-band-watch-bg text-band-watch",
    },
    {
      name: "Low",
      range: "0 to 34",
      desc: "Engaged, satisfied, often auto-renewing. Most get suppressed.",
      cls: "bg-band-low-bg text-band-low",
    },
  ];

  const rises = [
    { tag: "Utilization", body: "is low (paying for the plan, barely using it)" },
    { tag: "Engagement", body: "Elder engagement is dropping" },
    { tag: "Sponsor", body: "has stopped opening updates" },
    { tag: "ERM contact", body: "last touch was a long time ago" },
    { tag: "Complaints", body: "open issues or recent escalations" },
    { tag: "Caregiver", body: "changed more than once recently" },
    { tag: "Franchise", body: "serving them has a low quality score" },
    { tag: "Renewal", body: "any of the above happens close to a renewal date" },
  ];

  const dampens = [
    { tag: "NPS", body: "recent score is high" },
    { tag: "Engagement", body: "steady on both sides" },
    { tag: "Sponsor", body: "actively reading updates" },
    { tag: "Recovery", body: "a recent issue was resolved well" },
    { tag: "Cycle", body: "auto-renewal is on and the cycle has been clean" },
  ];

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">05 · How risk gets read</p>
        <h2 className="mt-4 display title-underline inline-block">
          How the score is built
        </h2>
        <p className="mt-6 text-md text-ink-muted">
          Risk for any one membership is built from observable signals
          across engagement, service use, experience, and the calendar.
          Every score is explainable in a sentence.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Risk rises when</p>
            <ul className="mt-5 space-y-3">
              {rises.map((r) => (
                <li key={r.tag} className="flex items-baseline gap-3 text-md text-ink-muted">
                  <span className="pill shrink-0">{r.tag}</span>
                  <span>{r.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Risk dampens when</p>
            <ul className="mt-5 space-y-3">
              {dampens.map((d) => (
                <li key={d.tag} className="flex items-baseline gap-3 text-md text-ink-muted">
                  <span className="pill-outline shrink-0">{d.tag}</span>
                  <span>{d.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 eyebrow">Four bands</p>
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

        <div className="mt-12 text-md text-ink-muted space-y-3">
          <p className="text-ink text-md font-medium">
            The queue ranks by Value-at-Risk times Risk, not raw risk.
          </p>
          <p>
            The highest-value memberships in trouble surface first, not the
            loudest ones. And most of the Low band gets suppressed so no one
            wastes a call on a happy auto-renewer. Restraint is a first-class
            output, not an afterthought.
          </p>
        </div>
      </div>
    </section>
  );
}
