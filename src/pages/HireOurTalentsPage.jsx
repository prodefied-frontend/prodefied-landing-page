
import HireATalentToday from "../components/hire-our-talents/HireATalentToday";
import HireHeroSection from "../components/hire-our-talents/HireHeroSection";
import HireTalentsForm from "../components/hire-our-talents/HireTalentsForm";

export default function HireOurTalentsPage() {
  return (
    <div className="pt-[60px] md:pt-[100px]">
      <HireHeroSection />
      <HireATalentToday/>
      <HireTalentsForm />
    </div>
  );
}
