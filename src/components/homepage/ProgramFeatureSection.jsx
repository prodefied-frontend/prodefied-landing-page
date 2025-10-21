import CheckMarkIcon from "../../assets/icons/checkmark-circle.svg";
import BgImage from "../../assets/images/homepage/bg-image.svg";

const programFeatureDetails = [
  "3 live projects",
  "Career coaching sessions",
  "Hands-on internship program",
  "Mastery of AI tools and PM processes",
  "Personal portfolio & branding",
  "A polished CV and optimized LinkedIn profile",
  "Lifetime access to mentors, peers, and community",
];

export default function ProgramFeatureSection() {
  return (
    <section className="relative bg-[#F9FAFF] overflow-hidden">
      {/* HEADER */}
      <div className="px-6 py-12 md:px-16 lg:px-24 relative z-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#001196] mb-10">
          Program <span className="text-[#FFB236]">Benefits</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#333333] justify-items-center relative z-10">
          {programFeatureDetails.map((d, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 bg-[#E5E8FF]/60 hover:bg-[#E5E8FF] transition-all duration-300 p-4 rounded-lg shadow-[3px_3px_0_#00119620] w-full sm:w-[90%] md:w-[85%] ${
                index === programFeatureDetails.length - 1
                  ? "sm:col-span-2 sm:justify-self-center"
                  : ""
              }`}
            >
              <img
                src={CheckMarkIcon}
                alt="Checkmark"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-sm md:text-base font-medium">{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FULL-WIDTH BACKGROUND IMAGE */}
      <div className="w-full mt-12 md:mt-16">
        <img
          src={BgImage}
          alt="Background illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
