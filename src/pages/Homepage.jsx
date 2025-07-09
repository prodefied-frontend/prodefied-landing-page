import EarnCertificate from "../components/EarnCertificate";
import HeroSection from "../components/HeroSection";
import HireSection from "../components/HireSection";
import IndustryProsSection from "../components/IndustryProsSection";
import LearningPathSection from "../components/LearningPathSection";
import OtherServicesSection from "../components/OtherServicesSection";
import OurFounderSection from "../components/OurFounderSection";
import OurTalentsSection from "../components/OurTalentsSection";
import PartnerWithUsSection from "../components/PartnerWithUsSection";
import WhatMakesUsUniqueSection from "../components/WhatMakesUsUniqueSection";
import WhoWeAreSection from "../components/WhoWeAreSection";

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
    </div>
  );
}
