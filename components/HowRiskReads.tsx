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

  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-6">
        <p className="eyebrow">05 · How risk gets read</p>
        <h2 className="mt-6 display title-underline inline-block">
          How the score is built
        </h2>
        <p className="mt-6 text-md text-ink-muted max-w-[680px]">
          Risk for any one membership is built from observable signals
          across engagement, service use, experience, and the calendar.
          The layer makes the logic legible, so every score can be
          explained in a sentence the team trusts.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-[860px]">
          <div>
            <p className="eyebrow">Risk rises when</p>
            <ul className="mt-4 space-y-2 text-md text-ink-muted">
              <li>Utilization is low (paying for the plan, barely using it)</li>
              <li>Elder engagement is dropping</li>
              <li>The Sponsor has stopped opening updates</li>
              <li>The last ERM contact was a long time ago</li>
              <li>There are open complaints or recent escalations</li>
              <li>The caregiver has changed more than once recently</li>
              <li>The franchise serving them has a low quality score</li>
              <li>Any of the above happens close to a renewal date</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Risk dampens when</p>
            <ul className="mt-4 space-y-2 text-md text-ink-muted">
              <li>Recent NPS or CSAT is high</li>
              <li>Engagement is steady on both sides</li>
              <li>The Sponsor is actively reading updates</li>
              <li>A recent issue was resolved well</li>
              <li>Auto-renewal is on and the cycle has been clean</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 eyebrow">Four bands</p>
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

        <div className="mt-12 max-w-[680px] text-md text-ink-muted space-y-4">
          <p className="text-ink">
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
