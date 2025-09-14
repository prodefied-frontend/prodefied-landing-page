import { Link } from "react-router-dom";
import BookOpenIcon from "../../assets/icons/program-details/BookOpen.svg";
import LinkedinIcon from "../../assets/icons/program-details/LinkedinLogo.svg";
import NewJobIcon from "../../assets/icons/program-details/new-job.svg";
import DurationIcon from "../../assets/icons/program-details/appointment-02.svg";
import Banner1 from "../../assets/images/program-details/program-structure-banner1.png";
import Banner2 from "../../assets/images/program-details/program-structure-banner2.png";
import Banner3 from "../../assets/images/program-details/program-structure-banner3.png";

const phases = [
  {
    id: "01",
    title: "Learning Phase",
    duration: "10 weeks",
    icon: BookOpenIcon,
    banner: Banner1,
    heading: "The Prodefied PM Training",
    description:
      "Learn and apply the foundations of product management through hands-on training, tasks and projects. We combine theoretical clarity with practical action.",
    gains: [
      "Ideate and validate your personal product idea",
      "Write a PRD and design simple flows",
      "Create your final portfolio entry",
      "Get trained on how to talk about your project",
    ],
    button: true,
  },
  {
    id: "02",
    title: "Internship Phase",
    duration: "8 weeks",
    icon: LinkedinIcon,
    banner: Banner2,
    heading: "Learning Meets Experience",
    description:
      "Collaborate with a cross-functional team of designers and developers to work on real-life projects. This is where theory becomes skill.",
    gains: [
      "Work on real business problems",
      "Build and test actual features",
      "Conduct usability tests and product tear-downs",
      "Deepen your command of PM tools",
      "Communicate like a professional PM",
      "Improve presentation, collaboration, and decision-making skills",
    ],
    button: false,
  },
  {
    id: "03",
    title: "Career Acceleration Phase",
    duration: "2 weeks",
    icon: NewJobIcon,
    banner: Banner3,
    heading: "Branding and Positioning",
    description:
      "Get the tools to position yourself as a strong PM candidate. Work on personal branding, visibility, and job readiness.",
    gains: [
      "Personal branding and online presence",
      "Resume optimization and portfolio polish",
      "Brand visibility and thought leadership",
      "Job search strategies, networking, and interview prep",
    ],
    button: false,
  },
];

export default function ProgramStructure() {
  return (
    <div className="py-6 lg:py-16 px-4 lg:px-12">
      {/* Section Title */}
      <h2 className="text-center text-[#001299] font-medium leading-[140%] text-lg lg:text-[32px]">
        Program Structure
      </h2>
      <p className="text-center text-[#4D4D4D] font-normal text-sm lg:text-[20px] lg:my-6 my-2 lg:w-[50%] mx-auto">
        The program is divided into 3 key phases, each carefully built to
        accelerate your learning, confidence, and career readiness.
      </p>

      {/* Phase Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-y-16 md:gap-x-8 mt-18">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className="relative max-w-[413px] w-full rounded-2xl border border-[#6678FF] shadow-md p-6 pt-8 flex flex-col transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ease-out bg-white"
          >
            {/* Phase Badge */}
            <div className="absolute -top-8 md:-top-10 left-6 flex items-center gap-2">
              <span className="text-sm md:text-base font-medium text-[#001299]">
                Phase
              </span>
              <div className="text-white text-base md:text-xl bg-[#001299] font-semibold rounded-full w-10 h-10 md:w-14 md:h-14 flex justify-center items-center shadow-md">
                {phase.id}
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[#001299] font-medium md:text-lg text-sm flex items-center gap-2">
                <img src={phase.icon} alt={`${phase.title} Icon`} />
                {phase.title}
              </span>
              <div className="flex items-center font-normal gap-1 text-[#4D4D4D] text-xs md:text-sm">
                <img src={DurationIcon} alt="Duration Icon" />
                <span>{phase.duration}</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full rounded-xl overflow-hidden mt-4">
              <img
                src={phase.banner}
                alt={`${phase.title} banner`}
                className="w-full object-cover h-auto transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="font-medium text-[#333333] md:text-lg text-sm leading-[140%] mb-2">
                {phase.heading}
              </h3>
              <p className="text-[#4D4D4D] md:text-base text-xs mb-4 font-normal">
                {phase.description}
              </p>
              <h4 className="font-medium text-[#4D4D4D] md:text-lg text-sm leading-[140%] mb-2">
                What You’ll Gain
              </h4>
              <ul className="list-disc list-inside text-[#4D4D4D] md:text-base text-xs space-y-1 font-normal">
                {phase.gains.map((gain, i) => (
                  <li key={i}>{gain}</li>
                ))}
              </ul>
            </div>

            {/* Button (only for Phase 01) */}
            {phase.button && (
              <Link
                to="/curriculum"
                className="mt-6 w-full text-center p-4 rounded-lg bg-[#FF9D00] text-white font-medium md:text-base text-sm leading-[140%] hover:scale-105 hover:bg-[#FD9C37] transition-all duration-300 ease-out"
              >
                View Full Curriculum
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}