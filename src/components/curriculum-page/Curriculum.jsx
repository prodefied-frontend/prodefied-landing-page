import React from "react";
import { curriculum } from "../../constant/data";
import CurriculumLogo from "../../assets/images/curriculum/curriculum-logo.svg";
import CurriculumImage from "../../assets/images/curriculum/curriculum-image.jpg";

export default function Curriculum() {
  return (
    <main className="py-14 md:py-20 px-4">
      {/* Logo + Image wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        {/* Curriculum Logo */}
        <img
          src={CurriculumLogo}
          alt="Curriculum Logo"
          className="w-40 h-auto"
        />

        {/* Curriculum Image */}
        <img
          src={CurriculumImage}
          alt="Curriculum Visual"
          className="w-full md:w-1/2 h-auto max-h-[500px] object-cover rounded-xl"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {curriculum.map((weekData, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-3xl border border-[#999999] px-4 py-6"
          >
            {/* Week header */}
            <div className="flex items-center bg-[#001299] rounded-t-[20px] py-3 px-4">
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
            <h3 className="text-[#333333] text-lg font-semibold mt-2">
              {weekData.title}
            </h3>

            {/* Sections */}
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
        ))}
      </div>
    </main>
  );
}

// import React from "react";
// import { curriculum } from "../../constant/data";
// import CurriculumLogo from "../../assets/images/curriculum/curriculum-logo.svg";
// import CurriculumImage from "../../assets/images/curriculum/curriculum-image.jpg";

// export default function Curriculum() {
//   return (
//     <div className="grid gap-6 md:grid-cols-2">
//       <div>
//         <img src={CurriculumLogo} alt="" />
//         <img src={CurriculumImage} alt="" />
//       </div>
//       {curriculum.map((weekData, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-3xl border border-[#999999] px-4 py-6"
//         >
//           {/* Week header */}
//           <div className="flex items-center bg-[#001299] rounded-t-[20px] py-3 px-4">
//             <img
//               src="/calendar-icon.svg"
//               alt="Calendar Icon"
//               className="w-6 h-6"
//             />
//             <span className="text-lg font-medium text-white pl-1 pr-3">
//               Week
//             </span>
//             <span
//               className={`${weekData.weekColor} text-white font-medium text-2xl p-1 rounded-full`}
//             >
//               {weekData.weekNumber}
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="text-[#333333] text-lg font-semibold mt-2">
//             {weekData.title}
//           </h3>

//           {/* Sections */}
//           {weekData.sections.map((section, secIndex) => (
//             <div key={secIndex} className="mt-4">
//               <h4
//                 className={`font-semibold ${
//                   section.title === "(Capstone Demo Day)"
//                     ? "text-[#FF9D00] text-xl"
//                     : "text-[#333333]"
//                 }`}
//               >
//                 {section.title}
//               </h4>
//               <ul className="list-disc list-inside text-[#4D4D4D]">
//                 {section.items.map((item, itemIndex) => (
//                   <li key={itemIndex}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
