import VectorForDifferent from "../../assets/icons/makes-us-different/vector-for-different.svg";
import Icon1 from "../../assets/icons/makes-us-different/icon1.svg";
import Icon2 from "../../assets/icons/makes-us-different/icon2.svg";
import Icon3 from "../../assets/icons/makes-us-different/icon3.svg";

const cardDetails = [
  {
    id: 1,
    icon: Icon1,
    title: "Hands-On Product Management Training",
    description:
      "Learn the essentials of product management through practical, project-based sessions that bridge theory with real-world applications.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Real-World Internship",
    description:
      "Apply your skills in a live environment with partnered companies, gaining valuable experience to boost your portfolio and confidence.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Career Accelerator Program",
    description:
      "Receive mentorship, resume reviews, interview prep, and networking opportunities to position yourself for top PM roles.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-14 bg-[#F5F2F2]">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug">
        What makes us{" "}
        <span className="text-[#FFB236] relative inline-block">
          different
          <img
            src={VectorForDifferent}
            alt=""
            className="absolute -bottom-1 sm:-bottom-2 left-0 w-full max-w-[100px] sm:max-w-[140px]"
          />
        </span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 mt-10 max-w-6xl mx-auto">
        {cardDetails.map((cDetail) => (
          <div
            key={cDetail.id}
            className="bg-white flex flex-col items-center text-center gap-4 p-6 rounded-xl 
            shadow-[6px_6px_0px_#001196] transition-transform duration-300 hover:translate-y-[-4px]"
          >
            <img
              src={cDetail.icon}
              alt={cDetail.title}
              className="w-14 h-14 md:w-16 md:h-16"
            />
            <h3 className="text-[#1A1A1A] font-semibold text-base sm:text-lg md:text-xl">
              {cDetail.title}
            </h3>
            <p className="text-[#706E6E] text-sm sm:text-base leading-relaxed">
              {cDetail.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}