export default function WhatThisLayerDoes() {
  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-sm uppercase tracking-wider text-ink-subtle">
          06 · What this layer does
        </p>
        <h2 className="mt-6 font-serif text-xl text-ink title-underline inline-block">
          [Section title]
        </h2>
        <div className="mt-6 space-y-4 text-md text-ink-muted max-w-[680px]">
          <p>
            [Capabilities · ranked queue by where money is, routes each
            member to the right owner (ERM, Doctor, Ops, Auto), suppresses
            safe ones, measures lift via holdout. Stated concretely.]
          </p>
        </div>
      </div>
    </section>
  );
}
