export default function Hero() {
  return (
    <section className="pt-24 pb-20">
      <div className="mx-auto max-w-content px-8 lg:px-12">
        <span className="section-anchor" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          {/* Left column: eyebrow + headline */}
          <div>
            <p className="eyebrow">For Emoha · prototype</p>
            <h1 className="mt-6 display-hero">
              Renewal runs the business. Today, no one owns it.
            </h1>
          </div>

          {/* Right column: subhead, bottom-aligned to the headline */}
          <div className="lg:pb-3">
            <p className="text-md text-ink-muted">
              This view answers, for each member, whether they are going to
              renew, and if not, what the next action is, who takes it, and
              whether it worked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
