import React from "react";
import { curriculum } from "../../constant/data";
import CurriculumLogo from "../../assets/images/curriculum/curriculum-logo.svg";
import CurriculumImage from "../../assets/images/curriculum/curriculum-image.jpg";

export default function Curriculum() {
  return (
    <main className="px-4 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={CurriculumLogo}
          alt="Curriculum Logo"
          className="w-60 md:w-80 h-auto"
        />
      </div>

      {/* Mobile: Image + Cards stacked with overlap */}
      <div className="md:hidden relative">
        {/* Curriculum Image */}
        <div className="relative z-0">
          <img
            src={CurriculumImage}
            alt="Curriculum Visual"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Cards (overlay in front of image) */}
        <div className="-mt-40 space-y-6 relative z-10">
          {curriculum.map((weekData, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-3xl border border-[#999999] overflow-hidden"
            >
              {/* Week header */}
              <div className="flex items-center bg-[#001299] py-3 px-4">
                <img
                  src="/calendar-icon.svg"
                  alt="Calendar Icon"
                  className="w-6 h-6"
                />
                <span className="text-lg font-medium text-white pl-1 pr-3">
                  Week
                </span>
                <span
                  className={`${weekData.weekColor} text-white font-medium text-2xl p-1 rounded-full`}
                >
                  {weekData.weekNumber}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[#333333] text-lg font-semibold mt-2 px-4">
                {weekData.title}
              </h3>

              {/* Sections */}
              <div className="px-4 pb-6">
                {weekData.sections.map((section, secIndex) => (
                  <div key={secIndex} className="mt-4">
                    <h4
                      className={`font-semibold ${
                        section.title === "(Capstone Demo Day)"
                          ? "text-[#FF9D00] text-xl"
                          : "text-[#333333]"
                      }`}
                    >
                      {section.title}
                    </h4>
                    <ul className="list-disc list-inside text-[#4D4D4D]">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & Desktop: Cards normally (no image) */}
      <div className="hidden md:grid gap-6 md:grid-cols-2">
        {curriculum.map((weekData, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-3xl border border-[#999999] overflow-hidden"
          >
            {/* Week header */}
            <div className="flex items-center bg-[#001299] py-3 px-4">
              <img
                src="/calendar-icon.svg"
                alt="Calendar Icon"
                className="w-6 h-6"
              />
              <span className="text-lg font-medium text-white pl-1 pr-3">
                Week
              </span>
              <span
                className={`${weekData.weekColor} text-white font-medium text-2xl p-1 rounded-full`}
              >
                {weekData.weekNumber}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[#333333] text-lg font-semibold mt-2 px-4">
              {weekData.title}
            </h3>

            {/* Sections */}
            <div className="px-4 pb-6">
              {weekData.sections.map((section, secIndex) => (
                <div key={secIndex} className="mt-4">
                  <h4
                    className={`font-semibold ${
                      section.title === "(Capstone Demo Day)"
                        ? "text-[#FF9D00] text-xl"
                        : "text-[#333333]"
                    }`}
                  >
                    {section.title}
                  </h4>
                  <ul className="list-disc list-inside text-[#4D4D4D]">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
