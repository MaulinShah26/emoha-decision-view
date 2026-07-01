export default function Hero() {
  return (
    <section className="pt-10 pb-10">
      <div className="mx-auto max-w-wide px-8 lg:px-12">
        <p className="eyebrow">For Emoha · prototype</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <h1 className="display-hero self-center">
            Three decisions run this business.
          </h1>
          <div className="flex items-center lg:border-l lg:border-line lg:pl-12">
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
