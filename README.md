# Emoha · Member Retention Decision View

A standalone prototype page pitching the membership retention decision layer
to Emoha. Mirrors the structure of `thehosteller.vercel.app`.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS 3
- `next/font` (Inter, Spectral, JetBrains Mono)

## Local dev

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy

Deploy on Vercel from this repo. The `robots: noindex` metadata in
`app/layout.tsx` keeps the page out of search results until we decide
otherwise — same as the Hosteller prototype.

## Structure

- `app/layout.tsx` — fonts, metadata, root layout
- `app/page.tsx` — section ordering
- `app/globals.css` — design tokens (CSS variables) and shared rules
- `components/` — one component per section
- `lib/data.ts` — types and sample-data scaffolding

## Design system

Identical to the Hosteller prototype family — pale mint background, violet
accent, Spectral / Inter / JetBrains Mono fonts. Adjust the CSS variables in
`app/globals.css` if a vertical-specific palette is wanted later.
