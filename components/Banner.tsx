export default function Banner() {
  return (
    <section className="bg-accent text-page">
      <div className="mx-auto max-w-wide px-8 lg:px-12 py-7 flex flex-col md:flex-row md:items-center gap-5">
        <span className="shrink-0 inline-block rounded-full bg-page text-accent px-3 py-[3px] text-md font-medium uppercase tracking-[0.08em]">
          The stakes
        </span>
        <p className="text-md leading-relaxed flex-1">
          These economics turn on a handful of decisions repeated every
          week. Sharpening even one or two of them, end to end, is high-leverage
          on a business where people are the largest cost.
        </p>
      </div>
    </section>
  );
}
