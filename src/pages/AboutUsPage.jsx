import AboutHeroSection from "../components/about-us/AboutHeroSection";
import OurFounderSection from "../components/about-us/OurFounderSection";
import MissionVisionSection from "../components/about-us/MissionVisionSection";
import MeetTeamSection from "../components/about-us/MeetTeamSection";
import IconCardSection from "../components/about-us/IconCardSection";

export default function AboutUsPage() {
  return (
    <div className="pt-[60px] md:pt-[100px]">
      <AboutHeroSection />
      <MissionVisionSection />
      <OurFounderSection />
      <MeetTeamSection />
      <IconCardSection />
    </div>
  );
}
