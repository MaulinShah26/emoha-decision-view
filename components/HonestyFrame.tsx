export default function HonestyFrame() {
  return (
    <footer className="section border-t border-line">
      <div className="mx-auto max-w-content px-8 lg:px-12">
        <p className="eyebrow">Note</p>
        <p className="mt-4 text-md text-ink-muted">
          Synthetic profiles · illustrative logic · not built on Emoha&apos;s
          internal data. Structure uses Emoha&apos;s real vocabulary (Elder
          Relationship Manager, GoSecure, franchise, NRI sponsor, the actual
          service lines). Values and plan-tier names are placeholders to be
          confirmed in discovery.
        </p>
        <p className="mt-4 text-[13px] text-ink-subtle">
          Financial figures (revenue, growth, cost ratios) are provisional FY25
          numbers from company filings, as reported by{" "}
          <a
            href="https://entrackr.com/exclusive/exclusive-eldercare-platform-emoha-reports-rs-7435-cr-revenue-in-fy25-cuts-losses-by-32-9986550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Entrackr
          </a>
          , Sep 2025.
        </p>
      </div>
    </footer>
  );
}
