import AboutHeroSection from "../components/about-us/AboutHeroSection";
import MissionVisionSection from "../components/about-us/MissionVisionSection";
import IconCardSection from "../components/about-us/IconCardSection";

export default function AboutUs() {
    return (
        <div className="pt-[60px] md:pt-[100px]">
            <AboutHeroSection />
            <MissionVisionSection />
            <IconCardSection />
        </div>
    )
}