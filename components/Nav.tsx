const links = [
  { href: "#constraint", label: "The constraint" },
  { href: "#unit", label: "The customer" },
  { href: "#bets", label: "The three bets" },
  { href: "#changes", label: "What changes" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-page/85 backdrop-blur-md">
      <div className="mx-auto max-w-wide px-8 lg:px-12 h-[52px] flex items-center justify-between gap-8">
        <a
          href="#top"
          className="text-md font-medium text-ink whitespace-nowrap hidden sm:inline"
        >
          Emoha · Decision view
        </a>
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-md text-ink-muted hover:text-accent whitespace-nowrap transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
