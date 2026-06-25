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

export const sampleMembers: Member[] = [
  // populated in the next iteration once the interactive build starts
];
