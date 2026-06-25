export default function Banner() {
  return (
    <section className="bg-accent text-page">
      <div className="mx-auto max-w-wide px-8 lg:px-12 py-10 flex flex-col md:flex-row md:items-center gap-5">
        <span className="pill-dark shrink-0">The stakes</span>
        <p className="text-md leading-relaxed flex-1">
          Subscription unit economics live on renewal. Solving this
          question for one cohort, end to end, is the single
          highest-leverage move available to Emoha this year.
        </p>
      </div>
    </section>
  );
}
