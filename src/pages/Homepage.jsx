import HeroSection from "../components/homepage/HeroSection";

import EarnCertificate from "../components/homepage/EarnCertificate";

import HireSection from "../components/homepage/HireSection";
import IndustryProsSection from "../components/homepage/IndustryProsSection";
import LearningPathSection from "../components/homepage/LearningPathSection";
import OtherServicesSection from "../components/homepage/OtherServicesSection";
import OurFounderSection from "../components/homepage/OurFounderSection";
import OurTalentsSection from "../components/homepage/OurTalentsSection";
import PartnerWithUsSection from "../components/homepage/PartnerWithUsSection";
import WhatMakesUsUniqueSection from "../components/homepage/WhatMakesUsUniqueSection";
import WhoWeAreSection from "../components/homepage/WhoWeAreSection";
import FaqSection from "../components/homepage/FaqSection";

export default function Homepage() {
  return (
    <div className="pt-[120px]">
      <HeroSection />
      <WhoWeAreSection />
      <LearningPathSection />
      <WhatMakesUsUniqueSection />
      <EarnCertificate />
      <IndustryProsSection />
      <OurTalentsSection />
      <OurFounderSection />
      <PartnerWithUsSection />
      <HireSection />
      <OtherServicesSection />
      <FaqSection />
    </div>
  );
}
