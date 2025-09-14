import React from "react";
import Hero from "../components/partnership-component/Hero";
import Trusted from "../components/partnership-component/Trusted";
import PartnerWith from "../components/partnership-component/PartnerWith";
import WhyPartner from "../components/partnership-component/WhyPartner";
import WorkTogether from "../components/partnership-component/WorkTogether";

const PartnershipPage = () => {
  return (
    <div>
      <Hero />
      {/* <Trusted /> */}
      <PartnerWith />
      <WorkTogether />
      <WhyPartner />
    </div>
  );
};

export default PartnershipPage;
