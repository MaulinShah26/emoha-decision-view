export type Tier = "Act now" | "Soon" | "Watch" | "Hold";
export type Readiness = "have" | "confirm";

export interface QueueRow {
  tier: Tier;
  unit: string;
  read: string;
  action: string;
  owner: string;
}

export interface DataField {
  label: string;
  readiness: Readiness;
}

export interface Bet {
  id: "cost" | "franchise" | "retention";
  label: string;
  call: string;
  queue: QueueRow[];
  data: DataField[];
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
    data: [
      { label: "Caregiver rosters and shifts", readiness: "have" },
      { label: "Attendance and visit logs", readiness: "have" },
      { label: "Pay rates and billed hours", readiness: "have" },
      { label: "Elder care plan and location", readiness: "have" },
      { label: "Skill and certification tags", readiness: "confirm" },
      { label: "Travel time between visits", readiness: "confirm" },
      { label: "Acuity scoring on the care plan", readiness: "confirm" },
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
    data: [
      { label: "Franchise launch dates", readiness: "have" },
      { label: "Revenue and payouts per franchise", readiness: "have" },
      { label: "Member counts per location", readiness: "have" },
      { label: "A defined healthy ramp curve", readiness: "confirm" },
      { label: "Support-contact logs per franchise", readiness: "confirm" },
      { label: "Local demand and density", readiness: "confirm" },
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
    data: [
      { label: "Renewal and lapse records", readiness: "have" },
      { label: "Complaint logs", readiness: "have" },
      { label: "Caregiver assignment per member", readiness: "have" },
      { label: "NPS responses", readiness: "have" },
      { label: "Sponsor app engagement, esp NRI", readiness: "confirm" },
      { label: "Caregiver-to-churn linkage", readiness: "confirm" },
      { label: "Reason-coded cancellations", readiness: "confirm" },
    ],
  },
];
