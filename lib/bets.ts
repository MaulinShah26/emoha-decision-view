export type Tier = "Act now" | "Soon" | "Watch" | "Hold";

export interface QueueRow {
  tier: Tier;
  unit: string;
  read: string;
  action: string;
  owner: string;
}

export interface Bet {
  id: "cost" | "franchise" | "retention";
  label: string;
  call: string;
  queue: QueueRow[];
}

export const dataInputs = [
  "Caregiver rosters & visits",
  "Franchise revenue & ramp",
  "Renewals & lapses",
  "Complaints & NPS",
  "Sponsor engagement",
];

export const decisionBets: Bet[] = [
  {
    id: "cost",
    label: "Cost to serve",
    call: "Which caregiver to which elder, and how full each week runs.",
    queue: [
      { tier: "Act now", unit: "Caregiver R. Devi", read: "22 hrs paid, 9 billed, elders nearby unassigned", action: "Fill the week before hiring", owner: "Ops" },
      { tier: "Soon", unit: "Elder M. Iyer", read: "High acuity on a general attendant", action: "Reassign to a nurse within 4 km", owner: "Ops + Nursing" },
      { tier: "Watch", unit: "Caregiver S. Khan", read: "6 elders, 3 swaps in 30 days", action: "Cap the load, hold referrals", owner: "Ops" },
      { tier: "Hold", unit: "Caregiver T. Rao", read: "Full week, five star, stable", action: "Leave alone", owner: "Auto" },
    ],
  },
  {
    id: "franchise",
    label: "Franchise survival",
    call: "Which franchises will fail early, and where to spend support.",
    queue: [
      { tier: "Act now", unit: "Indore", read: "Week 7, zero paying members, no head office contact", action: "Intervene now or cut", owner: "Franchise success" },
      { tier: "Soon", unit: "Nagpur", read: "Hired four, revenue flat", action: "Pause hiring, drive demand", owner: "Franchise success" },
      { tier: "Watch", unit: "New Tier 2 referral", read: "Low density, like two recent closures", action: "Redirect to a Tier 1 cluster", owner: "Expansion" },
      { tier: "Hold", unit: "Coimbatore", read: "Ahead of the ramp curve", action: "Use as the playbook", owner: "Auto" },
    ],
  },
  {
    id: "retention",
    label: "Why members leave",
    call: "Why members leave, traced back to a caregiver or franchise.",
    queue: [
      { tier: "Act now", unit: "12 lapses, one franchise", read: "All trace to a single 3.1 star franchise", action: "Route to franchise quality", owner: "Quality" },
      { tier: "Soon", unit: "Elder R. Sharma", read: "NRI sponsor silent, two caregiver swaps", action: "Restore continuity, re-engage", owner: "ERM" },
      { tier: "Watch", unit: "Caregiver pattern, 8 elders", read: "Shared one attendant already flagged", action: "Pull attendant, audit accounts", owner: "Nursing" },
      { tier: "Hold", unit: "Elder K. Menon", read: "Engaged, sponsor active, no complaints", action: "Leave alone", owner: "Auto" },
    ],
  },
];
