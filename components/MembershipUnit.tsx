export default function MembershipUnit() {
  return (
    <section className="section border-t border-line">
      <div className="mx-auto max-w-wide px-6">
        <p className="eyebrow">03 · The unit is a Membership</p>
        <h2 className="mt-4 display title-underline inline-block">
          Every membership is two people
        </h2>

        <p className="mt-8 text-md text-ink-muted max-w-[680px]">
          In most subscription businesses, the customer is one person.
          Here it is two, and the renewal decision splits between them.
        </p>

        {/* Visual: Elder + Sponsor split with Membership in the middle */}
        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] items-stretch">
          {/* Elder card */}
          <div className="rounded-2xl border border-line bg-page p-6">
            <p className="eyebrow">The Elder</p>
            <p className="mt-3 text-md text-ink">Lives the service every day</p>
            <div className="mt-5 pt-4 border-t border-line space-y-2">
              <p className="text-md text-ink-muted">Signals we watch</p>
              <ul className="text-md text-ink-muted space-y-1">
                <li>· Engagement with events and the app</li>
                <li>· Helpline activity</li>
                <li>· Doctor and physiotherapy use</li>
                <li>· NPS and CSAT</li>
              </ul>
            </div>
          </div>

          {/* Middle connector */}
          <div className="flex md:flex-col items-center justify-center gap-3">
            <div className="hidden md:block h-12 w-px bg-line" />
            <div className="rounded-full border border-accent bg-accent text-page px-5 py-3 text-md uppercase tracking-[0.12em] font-medium whitespace-nowrap">
              One Membership
            </div>
            <div className="hidden md:block h-12 w-px bg-line" />
          </div>

          {/* Sponsor card */}
          <div className="rounded-2xl border border-line bg-page p-6">
            <p className="eyebrow">The Sponsor</p>
            <p className="mt-3 text-md text-ink">
              Pays for it, decides if it continues. Often abroad.
            </p>
            <div className="mt-5 pt-4 border-t border-line space-y-2">
              <p className="text-md text-ink-muted">Signals we watch</p>
              <ul className="text-md text-ink-muted space-y-1">
                <li>· Updates opened</li>
                <li>· Response to ERM outreach</li>
                <li>· Complaints and escalations</li>
                <li>· Auto-renew on or off</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-md text-ink max-w-[680px]">
          A Sponsor who has stopped opening updates is as strong a churn
          signal as an Elder who has stopped engaging. Most churn models
          miss this because they look at one person. This view does not.
        </p>
      </div>
    </section>
  );
}
