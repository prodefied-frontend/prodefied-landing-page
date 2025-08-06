import HeroSection from "../components/program-details/HeroSection";
import ProgramStructure from "../components/program-details/ProgramStructure";
import Tools from "../components/program-details/ToolsYoullMaster";
import ProgramEnd from "../components/program-details/ProgramEnd";

const ProgramDetails = () => {
    return (
        <div>
            <HeroSection />
            <ProgramStructure />
            <Tools />
            <ProgramEnd />
        </div>
    );
};

export default ProgramDetails;