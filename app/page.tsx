import Hero from "@/components/Hero";
import RenewalProblem from "@/components/RenewalProblem";
import DashboardVsQueue from "@/components/DashboardVsQueue";
import MembershipUnit from "@/components/MembershipUnit";
import DecisionView from "@/components/DecisionView";
import HowRiskReads from "@/components/HowRiskReads";
import WhatThisLayerDoes from "@/components/WhatThisLayerDoes";
import WhatChanges from "@/components/WhatChanges";
import Closing from "@/components/Closing";
import HonestyFrame from "@/components/HonestyFrame";

export default function Page() {
  return (
    <main>
      <Hero />
      <RenewalProblem />
      <DashboardVsQueue />
      <MembershipUnit />
      <DecisionView />
      <HowRiskReads />
      <WhatThisLayerDoes />
      <WhatChanges />
      <Closing />
      <HonestyFrame />
    </main>
  );
}
