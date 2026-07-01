export default function Hero() {
  return (
    <section className="pt-8 pb-8">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <h1 className="display-hero self-center">
            Three decisions run this business.
          </h1>
          <div className="flex items-center lg:border-l-2 lg:border-ink-subtle lg:pl-8">
            <p className="text-md text-ink-muted">
              Which caregiver goes to which elder. Which franchise survives. Why
              members actually leave. None of these is a reporting problem. Each
              is a judgment repeated across the network, the kind that gets
              harder to make consistently as it grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
