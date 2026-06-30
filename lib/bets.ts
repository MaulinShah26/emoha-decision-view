// Data for the centerpiece: three decisions Emoha makes on instinct,
// ranked from outside. All unit-level rows are illustrative dummy data shaped
// to show how each decision resolves. The structure uses Emoha's real
// vocabulary (caregiver, ERM, franchise, NRI sponsor). Numbers are placeholders
// to be calibrated on their data.

export type ActionFlag = "act" | "watch" | "suppress";
export type Readiness = "have" | "confirm";

export interface RankedAction {
  unit: string; // the thing being decided about
  read: string; // the situation, in one line
  action: string; // the decided next step
  owner: string; // who acts
  flag: ActionFlag;
}

export interface DataField {
  label: string;
  readiness: Readiness;
}

export interface Bet {
  id: "cost" | "franchise" | "retention";
  tag: string; // "Bet 1"
  toggleLabel: string; // short label for the switch
  title: string; // the decision in plain words
  madeToday: string; // how it is decided now
  question: string; // the per-unit question the layer answers
  signals: string[]; // what feeds the decision
  logic: string[]; // how the layer decides
  actions: RankedAction[]; // ranked, per-unit outputs
  data: DataField[]; // data readiness
  whyRank: string; // one line on why it sits at this rank
}

export const decisionBets: Bet[] = [
  {
    id: "cost",
    tag: "Bet 1",
    toggleLabel: "Cost to serve",
    title:
      "Which caregiver goes to which elder, and how full each caregiver's week runs against their cost.",
    madeToday:
      "Assigned by hand off a roster, balanced on memory and whoever happens to be free.",
    question:
      "For each caregiver and each visit, is this the right match, and is the week full enough to pay for itself?",
    signals: [
      "Caregiver skill and certification level",
      "Elder care plan and acuity",
      "Location and travel time between visits",
      "Hours paid vs hours actually billed",
      "Visit history and continuity with the elder",
      "Pay rate per caregiver",
    ],
    logic: [
      "Match elder acuity to the right caregiver skill",
      "Cut travel and idle time across the week",
      "Protect continuity, keep the same caregiver where it is working",
      "Flag under-filled weeks and over-stretched caregivers",
    ],
    actions: [
      {
        unit: "R. Devi · Pune · 22 hrs paid, 9 billed",
        read: "Half-paid week while two elders nearby sit unassigned.",
        action: "Fill the week with the two nearby visits before hiring anyone new.",
        owner: "Ops",
        flag: "act",
      },
      {
        unit: "Elder M. Iyer · high acuity, diabetic",
        read: "Assigned to a general attendant, not a trained nurse.",
        action: "Reassign to a skilled caregiver within 4 km.",
        owner: "Ops + Nursing",
        flag: "act",
      },
      {
        unit: "S. Khan · Gurugram · 6 elders, 3 swaps in 30d",
        read: "Over-stretched. Continuity breaking across all six elders.",
        action: "Cap the load. Do not route the new referral here.",
        owner: "Ops",
        flag: "watch",
      },
      {
        unit: "T. Rao · Hyderabad · full week, 5 star",
        read: "Right match, full week, stable.",
        action: "No change. Protect this assignment.",
        owner: "Auto",
        flag: "suppress",
      },
    ],
    data: [
      { label: "Caregiver rosters and shifts", readiness: "have" },
      { label: "Attendance and visit logs", readiness: "have" },
      { label: "Pay rates and billed hours", readiness: "have" },
      { label: "Elder care plan and location", readiness: "have" },
      { label: "Skill and certification tags per caregiver", readiness: "confirm" },
      { label: "Travel time between visits", readiness: "confirm" },
      { label: "Acuity scoring on the care plan", readiness: "confirm" },
    ],
    whyRank:
      "Sits directly on the 42% staff line that makes unit economics negative. Cleanest optimisation problem of the three, and the data is operational exhaust you cannot run payroll or dispatch without.",
  },
  {
    id: "franchise",
    tag: "Bet 2",
    toggleLabel: "Franchise survival",
    title:
      "Which franchises will fail early, where to open next, and where to spend support.",
    madeToday:
      "Judged at head office on revenue alone, usually noticed after the franchise is already failing.",
    question:
      "For each franchise, is it on a path to pay back, and what is the one move that changes that?",
    signals: [
      "Weeks since launch",
      "Members acquired vs a healthy ramp",
      "Staff hired vs revenue earned",
      "Support contact, or silence, from head office",
      "Local elder density and demand",
      "Partner background and capacity",
    ],
    logic: [
      "Compare each franchise to a healthy ramp curve",
      "Separate a demand problem from an execution problem",
      "Predict the shut-down window early enough to act",
      "Rank by how much value is still saveable",
    ],
    actions: [
      {
        unit: "Indore · week 7 · 0 paying members",
        read: "No demand traction and no head office contact in three weeks.",
        action: "Intervene now or cut. On the path most new franchises close on.",
        owner: "Franchise success",
        flag: "act",
      },
      {
        unit: "Nagpur · week 11 · hired 4, revenue flat",
        read: "Over-hired against demand, burning the partner's cash.",
        action: "Pause hiring. Shift the franchise to demand generation.",
        owner: "Franchise success",
        flag: "act",
      },
      {
        unit: "New referral · Tier 2 city",
        read: "Low elder density, looks like two franchises that just closed.",
        action: "Do not open here. Redirect to the nearby Tier 1 cluster.",
        owner: "Expansion",
        flag: "watch",
      },
      {
        unit: "Coimbatore · week 20 · ahead of curve",
        read: "Healthy ramp, self-sufficient.",
        action: "No intervention. Use this one as the playbook.",
        owner: "Auto",
        flag: "suppress",
      },
    ],
    data: [
      { label: "Franchise launch dates", readiness: "have" },
      { label: "Revenue and payouts per franchise", readiness: "have" },
      { label: "Member counts per location", readiness: "have" },
      { label: "A defined healthy ramp curve", readiness: "confirm" },
      { label: "Support-contact logs per franchise", readiness: "confirm" },
      { label: "Local demand and density data", readiness: "confirm" },
    ],
    whyRank:
      "The biggest cash and reputation bleed, with a large share of new franchises closing fast. Second only because part of the cause is head office support, which no model fixes, and the leading indicators are the least certain to already exist clean.",
  },
  {
    id: "retention",
    tag: "Bet 3",
    toggleLabel: "Why members leave",
    title:
      "Why members actually leave, traced back to the caregiver and franchise behind it.",
    madeToday:
      "Noticed at renewal, when it is already too late, with no idea which caregiver or franchise caused it.",
    question:
      "For each lapse, what caused it, and which caregiver or franchise does it point back to?",
    signals: [
      "Caregiver swaps per member",
      "Complaints and time to resolve",
      "Missed or late visits",
      "Sponsor app silence, often the NRI payer",
      "NPS and survey responses",
      "Franchise of record",
    ],
    logic: [
      "Attribute each churn to its caregiver and franchise",
      "Find the pattern, a caregiver, a franchise, a service line",
      "Feed the fix back into Bet 1 and Bet 2",
      "Suppress healthy accounts, decide who not to chase",
    ],
    actions: [
      {
        unit: "12 lapses last quarter · one franchise",
        read: "All trace to a single Gurugram franchise running 3.1 star caregivers.",
        action: "This is a franchise quality problem, not a pricing one. Route to Bet 2.",
        owner: "Quality",
        flag: "act",
      },
      {
        unit: "Elder R. Sharma · sponsor silent 40d",
        read: "NRI daughter stopped opening updates after two caregiver swaps.",
        action: "Restore continuity and re-engage the sponsor before renewal.",
        owner: "ERM",
        flag: "act",
      },
      {
        unit: "Caregiver pattern · 8 elders",
        read: "Eight churned elders shared one attendant already flagged in complaints.",
        action: "Pull the attendant and audit the remaining accounts.",
        owner: "Nursing + Quality",
        flag: "watch",
      },
      {
        unit: "Elder K. Menon · stable, auto-renew",
        read: "Engaged, sponsor active, no complaints.",
        action: "Do not contact. Healthy.",
        owner: "Auto",
        flag: "suppress",
      },
    ],
    data: [
      { label: "Renewal and lapse records", readiness: "have" },
      { label: "Complaint logs", readiness: "have" },
      { label: "Caregiver assignment per member", readiness: "have" },
      { label: "NPS responses", readiness: "have" },
      { label: "Sponsor app engagement, especially NRI", readiness: "confirm" },
      { label: "Caregiver-to-churn linkage", readiness: "confirm" },
      { label: "Reason-coded cancellations", readiness: "confirm" },
    ],
    whyRank:
      "The data exists, so it passes the data test, but the winnable part is attribution, not a lapse score. The churn signal is already loud because the member is complaining. Its real output is fixing Bets 1 and 2, which is why it ranks third rather than first.",
  },
];
