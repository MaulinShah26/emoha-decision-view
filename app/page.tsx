import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RenewalProblem from "@/components/RenewalProblem";
import DashboardVsQueue from "@/components/DashboardVsQueue";
import MembershipUnit from "@/components/MembershipUnit";
import Banner from "@/components/Banner";
import DecisionEngine from "@/components/DecisionEngine";
import WhatThisLayerDoes from "@/components/WhatThisLayerDoes";
import WhatChanges from "@/components/WhatChanges";
import Closing from "@/components/Closing";
import HonestyFrame from "@/components/HonestyFrame";

export default function Page() {
  return (
    <main>
      <Nav />
      <div id="top">
        <Hero />
      </div>
      <div id="constraint" className="scroll-mt-14">
        <RenewalProblem />
      </div>
      <DashboardVsQueue />
      <div id="unit" className="scroll-mt-14">
        <MembershipUnit />
      </div>
      <Banner />
      <div id="bets" className="scroll-mt-14">
        <DecisionEngine />
      </div>
      <WhatThisLayerDoes />
      <div id="changes" className="scroll-mt-14">
        <WhatChanges />
      </div>
      <Closing />
      <HonestyFrame />
    </main>
  );
}
