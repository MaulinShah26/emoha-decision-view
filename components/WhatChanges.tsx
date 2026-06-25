export default function WhatChanges() {
  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow">07 · What changes for Emoha</p>
        <h2 className="mt-6 display title-underline inline-block">
          [Section title]
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="eyebrow">Business impact</p>
            <p className="mt-3 text-md text-ink-muted">
              [Renewal rate, ₹ retained, save attribution, holdout-proven
              lift.]
            </p>
          </div>
          <div>
            <p className="eyebrow">Team impact</p>
            <p className="mt-3 text-md text-ink-muted">
              [ERM gets a work queue. Doctor gets clinical-triggered reviews.
              Ops gets franchise quality flags. HQ gets portfolio visibility.]
            </p>
          </div>
          <div>
            <p className="eyebrow">How it lands</p>
            <p className="mt-3 text-md text-ink-muted">
              [One team, one cohort, one loop. Prove lift before scaling. No
              new system to learn.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
