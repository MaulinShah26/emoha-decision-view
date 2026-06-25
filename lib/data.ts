// Sample-data scaffolding. To be populated when we build out the Decision View
// interactive. Types reflect the blueprint's data model so the component can
// be built against the shape, not the values.

export type RiskBand = "Critical" | "High" | "Watch" | "Low";

export type ActionOwner =
  | "ERM"
  | "Doctor"
  | "Ops"
  | "ERM + Ops"
  | "Doctor + ERM"
  | "Auto";

export type Channel = "Call" | "WhatsApp" | "App" | "Visit" | "Email" | "—";

export type SponsorRelationship = "Daughter" | "Son" | "Spouse" | "Other";

export type PlanTier = "Comprehensive" | "Safety" | "Essential"; // placeholders

export interface Member {
  id: string;
  elder: { name: string; age: number };
  sponsor: {
    name: string;
    relationship: SponsorRelationship;
    location: string;
    isNri: boolean;
  };
  city: string;
  franchiseId: string;
  franchiseQuality: number; // 0–5
  ermName: string;
  planTier: PlanTier;
  monthlyValue: number; // in INR
  tenureMonths: number;
  daysToRenewal: number;
  autoRenew: boolean;

  // engagement
  elderEngagement90d: number; // events / app interactions
  sponsorUpdatesOpened30d: number;
  lastErmContactDaysAgo: number;
  helplineCalls30d: number;

  // service usage
  utilizationPct: number; // 0–100
  emergencyEvents30d: number;
  doctorConsults90d: number;

  // experience
  npsLast: number | null;
  openComplaints: number;
  escalations90d: number;
  caregiverChanges90d: number;

  // outputs
  lapseRiskScore: number; // 0–100
  riskBand: RiskBand;
  topDrivers: string[]; // ranked plain sentences
  valueAtRisk: number; // INR (annualized)
  recommendedAction: string;
  actionOwner: ActionOwner;
  actionChannel: Channel;
  suppress: boolean;
}

// History event for the timeline in the member detail panel.
export interface HistoryEvent {
  daysAgo: number;
  type: "action" | "emergency" | "complaint" | "engagement" | "renewal";
  text: string;
}

export const sampleMembers: (Member & { history: HistoryEvent[] })[] = [
  {
    id: "EMH-04508",
    elder: { name: "Geeta Nair", age: 84 },
    sponsor: { name: "Anjali Nair", relationship: "Daughter", location: "Sydney", isNri: true },
    city: "Bengaluru",
    franchiseId: "FR-Blr-04",
    franchiseQuality: 3.6,
    ermName: "Meena K.",
    planTier: "Comprehensive",
    monthlyValue: 4500,
    tenureMonths: 19,
    daysToRenewal: 5,
    autoRenew: false,
    elderEngagement90d: 2,
    sponsorUpdatesOpened30d: 1,
    lastErmContactDaysAgo: 11,
    helplineCalls30d: 4,
    utilizationPct: 38,
    emergencyEvents30d: 2,
    doctorConsults90d: 1,
    npsLast: 6,
    openComplaints: 0,
    escalations90d: 2,
    caregiverChanges90d: 0,
    lapseRiskScore: 91,
    riskBand: "Critical",
    topDrivers: [
      "Post-hospitalization, two escalations in the last 90 days",
      "Sponsor anxious, only 1 update opened in 30 days",
      "Renewal in 5 days, no doctor follow-up booked",
    ],
    valueAtRisk: 54000,
    recommendedAction: "Joint ERM and doctor call to sponsor; propose stepped-up care plan",
    actionOwner: "Doctor + ERM",
    actionChannel: "Call",
    suppress: false,
    history: [
      { daysAgo: 2, type: "emergency", text: "Helpline call, mild fall reported" },
      { daysAgo: 9, type: "complaint", text: "Sponsor escalation: response time on emergency" },
      { daysAgo: 14, type: "emergency", text: "Hospital admit, 36 hours" },
      { daysAgo: 22, type: "action", text: "ERM check-in call (Meena K.), no answer" },
    ],
  },
  {
    id: "EMH-04821",
    elder: { name: "Kamala Iyer", age: 78 },
    sponsor: { name: "Anita Iyer", relationship: "Daughter", location: "London", isNri: true },
    city: "Chennai",
    franchiseId: "FR-Chennai-02",
    franchiseQuality: 3.2,
    ermName: "Priya N.",
    planTier: "Comprehensive",
    monthlyValue: 4500,
    tenureMonths: 14,
    daysToRenewal: 9,
    autoRenew: false,
    elderEngagement90d: 1,
    sponsorUpdatesOpened30d: 0,
    lastErmContactDaysAgo: 18,
    helplineCalls30d: 1,
    utilizationPct: 25,
    emergencyEvents30d: 0,
    doctorConsults90d: 0,
    npsLast: 5,
    openComplaints: 1,
    escalations90d: 1,
    caregiverChanges90d: 2,
    lapseRiskScore: 88,
    riskBand: "Critical",
    topDrivers: [
      "Renewal in 9 days, sponsor has not opened updates in 30 days",
      "Two caregiver changes in last 90 days, open complaint",
      "Utilization at 25% (paying, barely using)",
    ],
    valueAtRisk: 54000,
    recommendedAction: "HQ save call to sponsor with health digest; restore prior caregiver if possible",
    actionOwner: "ERM + Ops",
    actionChannel: "Call",
    suppress: false,
    history: [
      { daysAgo: 6, type: "complaint", text: "Open complaint: caregiver continuity" },
      { daysAgo: 11, type: "action", text: "Caregiver change #2 (within 90 days)" },
      { daysAgo: 18, type: "action", text: "ERM call (Priya N.), brief" },
      { daysAgo: 40, type: "engagement", text: "Last sponsor update opened" },
    ],
  },
  {
    id: "EMH-03190",
    elder: { name: "R. Venkatesh", age: 82 },
    sponsor: { name: "Karthik V.", relationship: "Son", location: "Bengaluru", isNri: false },
    city: "Hyderabad",
    franchiseId: "FR-Hyd-01",
    franchiseQuality: 4.1,
    ermName: "Arjun S.",
    planTier: "Safety",
    monthlyValue: 2200,
    tenureMonths: 8,
    daysToRenewal: 22,
    autoRenew: false,
    elderEngagement90d: 4,
    sponsorUpdatesOpened30d: 5,
    lastErmContactDaysAgo: 7,
    helplineCalls30d: 3,
    utilizationPct: 62,
    emergencyEvents30d: 3,
    doctorConsults90d: 0,
    npsLast: 7,
    openComplaints: 0,
    escalations90d: 0,
    caregiverChanges90d: 0,
    lapseRiskScore: 71,
    riskBand: "High",
    topDrivers: [
      "Three emergencies in 30 days, no doctor follow-up",
      "Elder anxious per ERM notes, sponsor concerned",
      "Renewal in 22 days, plan may be undersized for current need",
    ],
    valueAtRisk: 26400,
    recommendedAction: "Doctor review and reassurance call to son; GoSecure check",
    actionOwner: "Doctor + ERM",
    actionChannel: "Call",
    suppress: false,
    history: [
      { daysAgo: 4, type: "emergency", text: "Helpline call, breathlessness" },
      { daysAgo: 12, type: "emergency", text: "Helpline call, dizziness" },
      { daysAgo: 19, type: "emergency", text: "Helpline call, BP spike" },
      { daysAgo: 7, type: "action", text: "ERM check-in (Arjun S.)" },
    ],
  },
  {
    id: "EMH-05077",
    elder: { name: "Sushila Rao", age: 75 },
    sponsor: { name: "Neha Rao", relationship: "Daughter", location: "Toronto", isNri: true },
    city: "Bengaluru",
    franchiseId: "FR-Blr-04",
    franchiseQuality: 2.8,
    ermName: "Meena K.",
    planTier: "Comprehensive",
    monthlyValue: 4500,
    tenureMonths: 10,
    daysToRenewal: 12,
    autoRenew: false,
    elderEngagement90d: 3,
    sponsorUpdatesOpened30d: 3,
    lastErmContactDaysAgo: 14,
    helplineCalls30d: 1,
    utilizationPct: 55,
    emergencyEvents30d: 0,
    doctorConsults90d: 1,
    npsLast: 6,
    openComplaints: 0,
    escalations90d: 0,
    caregiverChanges90d: 2,
    lapseRiskScore: 66,
    riskBand: "High",
    topDrivers: [
      "Low franchise quality (2.8) for the plan tier",
      "Two caregiver changes in last 90 days",
      "Sponsor semi-engaged, renewal in 12 days",
    ],
    valueAtRisk: 54000,
    recommendedAction: "Service-recovery call to sponsor; flag franchise for quality review",
    actionOwner: "ERM + Ops",
    actionChannel: "Call",
    suppress: false,
    history: [
      { daysAgo: 8, type: "action", text: "Caregiver change #2" },
      { daysAgo: 14, type: "action", text: "ERM check-in (Meena K.)" },
      { daysAgo: 31, type: "action", text: "Caregiver change #1" },
    ],
  },
  {
    id: "EMH-02844",
    elder: { name: "Hari Menon", age: 80 },
    sponsor: { name: "Ravi Menon", relationship: "Son", location: "Pune", isNri: false },
    city: "Pune",
    franchiseId: "FR-Pune-02",
    franchiseQuality: 4.0,
    ermName: "Sana R.",
    planTier: "Safety",
    monthlyValue: 2200,
    tenureMonths: 16,
    daysToRenewal: 41,
    autoRenew: false,
    elderEngagement90d: 5,
    sponsorUpdatesOpened30d: 4,
    lastErmContactDaysAgo: 21,
    helplineCalls30d: 0,
    utilizationPct: 40,
    emergencyEvents30d: 0,
    doctorConsults90d: 1,
    npsLast: 7,
    openComplaints: 0,
    escalations90d: 0,
    caregiverChanges90d: 0,
    lapseRiskScore: 48,
    riskBand: "Watch",
    topDrivers: [
      "Utilization at 40%, paying for benefits not being used",
      "Mid-distance renewal (41 days) gives time to re-engage",
    ],
    valueAtRisk: 26400,
    recommendedAction: "Check-in call; surface unused benefits to sponsor and elder",
    actionOwner: "ERM",
    actionChannel: "Call",
    suppress: false,
    history: [
      { daysAgo: 21, type: "action", text: "ERM check-in (Sana R.)" },
      { daysAgo: 48, type: "engagement", text: "Yoga session attended (hostel event)" },
    ],
  },
  {
    id: "EMH-06012",
    elder: { name: "Lakshmi Pillai", age: 73 },
    sponsor: { name: "Divya Pillai", relationship: "Daughter", location: "Chennai", isNri: false },
    city: "Chennai",
    franchiseId: "FR-Chennai-01",
    franchiseQuality: 4.3,
    ermName: "Priya N.",
    planTier: "Safety",
    monthlyValue: 2200,
    tenureMonths: 22,
    daysToRenewal: 18,
    autoRenew: true,
    elderEngagement90d: 9,
    sponsorUpdatesOpened30d: 6,
    lastErmContactDaysAgo: 9,
    helplineCalls30d: 0,
    utilizationPct: 78,
    emergencyEvents30d: 0,
    doctorConsults90d: 2,
    npsLast: 9,
    openComplaints: 0,
    escalations90d: 0,
    caregiverChanges90d: 0,
    lapseRiskScore: 30,
    riskBand: "Low",
    topDrivers: [
      "Very high engagement, NPS 9, on Safety plan but uses Comprehensive-level services",
      "Likely candidate for plan upgrade or physiotherapy add-on",
    ],
    valueAtRisk: 26400,
    recommendedAction: "Upsell physiotherapy add-on at renewal; mention upgrade to Comprehensive",
    actionOwner: "ERM",
    actionChannel: "Call",
    suppress: false,
    history: [
      { daysAgo: 9, type: "action", text: "ERM check-in (Priya N.), positive" },
      { daysAgo: 33, type: "engagement", text: "Doctor consult, routine" },
      { daysAgo: 45, type: "engagement", text: "Yoga session attended" },
    ],
  },
  {
    id: "EMH-01765",
    elder: { name: "D. Sharma", age: 77 },
    sponsor: { name: "Vikram Sharma", relationship: "Son", location: "Dubai", isNri: true },
    city: "Gurugram",
    franchiseId: "FR-Ggn-03",
    franchiseQuality: 4.5,
    ermName: "Rohit V.",
    planTier: "Comprehensive",
    monthlyValue: 4500,
    tenureMonths: 28,
    daysToRenewal: 27,
    autoRenew: true,
    elderEngagement90d: 11,
    sponsorUpdatesOpened30d: 8,
    lastErmContactDaysAgo: 14,
    helplineCalls30d: 0,
    utilizationPct: 71,
    emergencyEvents30d: 0,
    doctorConsults90d: 3,
    npsLast: 10,
    openComplaints: 0,
    escalations90d: 0,
    caregiverChanges90d: 0,
    lapseRiskScore: 12,
    riskBand: "Low",
    topDrivers: [
      "Both elder and sponsor highly engaged, NPS 10, auto-renew on",
      "No service incidents in 90 days",
    ],
    valueAtRisk: 54000,
    recommendedAction: "Suppress: do not contact, let it auto-renew",
    actionOwner: "Auto",
    actionChannel: "—",
    suppress: true,
    history: [
      { daysAgo: 14, type: "action", text: "ERM courtesy call (Rohit V.)" },
      { daysAgo: 30, type: "engagement", text: "Doctor consult, routine" },
    ],
  },
];

// Portfolio aggregates for Leadership mode header tiles.
export const portfolioSummary = {
  membersAtRiskThisWeek: 47,
  valueAtRiskInr: 14_85_000,
  renewalsDueIn30Days: 132,
  savesMadeThisMonth: 23,
  suppressedCount: 78,
};

// Lift proof series for the chart in Leadership mode.
// Last 8 weeks, treated vs holdout renewal rate.
export const liftSeries = [
  { week: "W-7", treated: 71, holdout: 68 },
  { week: "W-6", treated: 74, holdout: 67 },
  { week: "W-5", treated: 76, holdout: 69 },
  { week: "W-4", treated: 78, holdout: 68 },
  { week: "W-3", treated: 81, holdout: 69 },
  { week: "W-2", treated: 82, holdout: 70 },
  { week: "W-1", treated: 84, holdout: 70 },
  { week: "W-0", treated: 85, holdout: 71 },
];
