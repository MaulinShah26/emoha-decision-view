export default function Banner() {
  return (
    <section className="bg-accent text-page">
      <div className="mx-auto max-w-wide px-8 lg:px-12 py-10 flex flex-col md:flex-row md:items-center gap-5">
        <span className="pill-dark shrink-0">The stakes</span>
        <p className="text-md leading-relaxed flex-1">
          These economics turn on a handful of decisions made every week by
          hand. Owning even one or two of them, end to end, is the single
          highest-leverage move available to Emoha this year.
        </p>
      </div>
    </section>
  );
}
