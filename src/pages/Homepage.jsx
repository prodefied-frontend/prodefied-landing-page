import EarnCertificate from "../components/EarnCertificate";
import HeroSection from "../components/HeroSection";
import IndustryProsSection from "../components/IndustryProsSection";
import LearningPathSection from "../components/LearningPathSection";
import OurFounderSection from "../components/OurFounderSection";
import OurTalentsSection from "../components/OurTalentsSection";
import WhatMakesUsUniqueSection from "../components/WhatMakesUsUniqueSection";
import WhoWeAreSection from "../components/WhoWeAreSection";

export default function Homepage() {
    return (
        <>
        <HeroSection />
        <WhoWeAreSection />
        <LearningPathSection />
        <WhatMakesUsUniqueSection />
        <EarnCertificate />
        <IndustryProsSection />
        <OurTalentsSection />
        <OurFounderSection />
        </>
    )
}