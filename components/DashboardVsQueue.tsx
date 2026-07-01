export default function DashboardVsQueue() {
  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">02 · Reporting vs deciding</p>
        <h2 className="mt-4 display title-underline inline-block">
          A dashboard reports. A decision view decides.
        </h2>
        <p className="mt-5 text-md text-ink-muted">
          A dashboard tells you what already happened. A decision view tells you
          what to do next, and for whom.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Dashboard card (light) */}
          <div className="rounded-2xl border border-line bg-page p-6">
            <span className="pill-outline">A dashboard</span>
            <p className="mt-5 display">Tells you what happened</p>
            <ul className="mt-5 space-y-3 text-md text-ink-muted">
              <li>Looks at everyone, in aggregate</li>
              <li>Answers a question about the past</li>
              <li>Leaves you to work out the next step</li>
            </ul>
          </div>

          {/* Decision view card (dark) */}
          <div className="rounded-2xl card-dark p-6">
            <span className="pill">A decision view</span>
            <p className="mt-5 display">Tells you what to do</p>
            <ul
              className="mt-5 space-y-3 text-md"
              style={{ color: "rgb(var(--page) / 0.82)" }}
            >
              <li>Looks at one person at a time</li>
              <li>Answers what to do next, and for whom</li>
              <li>Sends it to the person who acts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
