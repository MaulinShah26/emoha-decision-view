export default function DashboardVsQueue() {
  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">02 · Dashboard vs Decision queue</p>
        <h2 className="mt-4 display title-underline inline-block">
          Dashboards report. This decides.
        </h2>
        <p className="mt-6 text-md text-ink-muted">
          Most retention tooling is a dashboard. A decision queue is a
          different surface, built for a different question.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Dashboard card (light) */}
          <div className="rounded-2xl border border-line bg-page p-8">
            <span className="pill-outline">A dashboard</span>
            <p className="mt-6 display">Reports the past</p>
            <ul className="mt-6 space-y-3 text-md text-ink-muted">
              <li>Aggregated views across cohorts</li>
              <li>Answers &quot;what happened&quot;</li>
              <li>Looks for trends over time</li>
              <li>Opened once a week, mostly by leadership</li>
              <li>The work it triggers is unclear and uneven</li>
            </ul>
          </div>

          {/* Decision queue card (dark) */}
          <div className="rounded-2xl card-dark p-8">
            <span className="pill-dark" style={{ background: "rgb(var(--accent-soft))", color: "rgb(var(--accent))" }}>
              A decision queue
            </span>
            <p className="mt-6 display">Names the next action</p>
            <ul className="mt-6 space-y-3 text-md" style={{ color: "rgb(var(--page) / 0.78)" }}>
              <li>Per member, every day</li>
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
