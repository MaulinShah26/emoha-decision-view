export default function DashboardVsQueue() {
  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-6">
        <p className="eyebrow">02 · Dashboard vs Decision queue</p>
        <h2 className="mt-6 display title-underline inline-block">
          Dashboards report. This decides.
        </h2>
        <p className="mt-6 text-md text-ink-muted max-w-[680px]">
          Most retention tooling is a dashboard. A dashboard tells you what
          happened last week, across the cohort. A decision queue tells
          you what to do this morning, for each member, and who is doing it.
          The shift in surface matters because the shift in question matters.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-page p-6">
            <p className="eyebrow">A dashboard</p>
            <ul className="mt-4 space-y-3 text-md text-ink-muted">
              <li>Reports the past, aggregated across cohorts</li>
              <li>Answers &quot;what happened&quot;</li>
              <li>Looks for trends over time</li>
              <li>Opened once a week, mostly by leadership</li>
              <li>The work it triggers is unclear and uneven</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-accent-soft p-6">
            <p className="eyebrow">A decision queue</p>
            <ul className="mt-4 space-y-3 text-md text-ink">
              <li>Names the next action, per member, every day</li>
              <li>Answers &quot;what should we do, for whom, now&quot;</li>
              <li>Routes each item to a specific person to act on</li>
              <li>Opened every morning by the team that owns the work</li>
              <li>Lift is measured against a holdout, not assumed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
