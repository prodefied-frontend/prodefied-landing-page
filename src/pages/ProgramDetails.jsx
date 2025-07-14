import NavBar from "../components/program-details/NavBar";
import HeroSection from "../components/program-details/HeroSection";
import ProgramStructure from "../components/program-details/ProgramStructure";
import Tools from "../components/program-details/ToolsYoullMaster";
import ProgramEnd from "../components/program-details/ProgramEnd";

const ProgramDetails = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <ProgramStructure />
            <Tools />
            <ProgramEnd />
        </div>
    );
};

export default ProgramDetails;