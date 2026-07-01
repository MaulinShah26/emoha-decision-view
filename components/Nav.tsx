"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#constraint", label: "The constraint" },
  { href: "#unit", label: "The customer" },
  { href: "#bets", label: "The three bets" },
  { href: "#changes", label: "What changes" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-md whitespace-nowrap transition-colors ${
                  isActive ? "text-accent" : "text-ink-muted hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
