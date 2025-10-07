import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { phases } from "../constant/data";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import StudentIcon from "../assets/icons/portal-page/student-icon.svg";
import AlumniIcon from "../assets/icons/portal-page/alumni-icon.svg";
import RightArrowIcon from "../assets/icons/portal-page/arrow-white.svg";

import getStudentId from "../utils/getStudentId";
import getDisplayName from "../utils/getDisplayName";

/**
 * PhaseCard Component
 */
const PhaseCard = ({ phase }) => {
  const [isOpen, setIsOpen] = useState(false);

  const PREVIEW_LENGTH = 60;
  const previewText = (text) =>
    text.length > PREVIEW_LENGTH ? text.slice(0, PREVIEW_LENGTH) + "..." : text;

  const [phaseWord] = phase.phaseTitle.split(" ").slice(2);
  const phasePrefix = phase.phaseTitle.split(" ").slice(0, 2).join(" ");

  return (
    <div
      className="bg-white border border-[#E6E6E6] p-4 rounded-md transition-transform hover:scale-[1.01] hover:shadow-md duration-300 flex flex-col justify-between"
      aria-expanded={isOpen}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start space-x-2">
        <div className="space-y-2">
          <h3 className="font-semibold">
            {phasePrefix}{" "}
            <span
              className="ml-2 px-2 py-0.5 rounded"
              style={{ backgroundColor: phase.highlightColor }}
            >
              {phaseWord}
            </span>
          </h3>
          <p className="text-sm text-gray-600">{phase.intro}</p>
          <p className="text-sm text-gray-500">
            {isOpen ? phase.introDetails : previewText(phase.introDetails)}
          </p>
        </div>

        {/* Expand/Collapse Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="p-2 rounded hover:bg-gray-100 transition"
          aria-label={isOpen ? "Collapse details" : "Expand details"}
        >
          {isOpen ? (
            <MdKeyboardArrowUp className="w-5 h-5 text-gray-600" />
          ) : (
            <MdKeyboardArrowDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Collapsible Details */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        <div className="text-sm text-gray-700 space-y-4">
          {phase.moreDetails && (
            <div className="space-y-2">
              <h4 className="font-semibold">More Details</h4>
              <ul className="list-disc list-inside space-y-1">
                {phase.moreDetails.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {phase.schedule?.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold">Class Schedule</h4>
              <ul className="list-disc list-inside space-y-1">
                {phase.schedule.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {phase.howToJoin && (
            <div className="space-y-2">
              <h4 className="font-semibold">How to Join</h4>
              <p>{phase.howToJoin}</p>
            </div>
          )}

          {phase.instructions?.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold">Instructions</h4>
              <ul className="list-disc list-inside space-y-1">
                {phase.instructions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {phase.encouragement && (
            <p className="italic text-gray-600">{phase.encouragement}</p>
          )}
        </div>
      </div>

      {/* Start Assessment Button */}
      <a
        href={phase.assessmentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full text-center px-4 py-4 rounded-md text-sm font-medium 
             bg-[#001299] text-white 
             transition-all duration-300 ease-in-out 
             hover:bg-[#000e80] 
             hover:scale-[1.02] hover:shadow-md 
             active:translate-y-[1px]"
      >
        Start Assessment
      </a>
    </div>
  );
};

/**
 * PortalPage Component
 */
export default function PortalPage() {
  const { user, hasPaid } = useAuth();

  const displayName = getDisplayName(user);
  const studentId = getStudentId(user) || "N/A";

  // We derive isGraduated locally since AuthContext doesn't expose it yet
  const isGraduated = user?.isGraduated || false;

  // Application Status
  let applicationStatus = "Pending";
  let statusBg = "#FFEBCC";
  let statusIcon = "/brown-mark.svg";
  let statusTextColor = "#7A4E00";

  if (isGraduated) {
    applicationStatus = "Graduated";
    statusBg = "#E6F0FF";
    statusIcon = "/blue-mark.svg";
    statusTextColor = "#003366";
  } else if (hasPaid) {
    applicationStatus = "Accepted";
    statusBg = "#E0FAE3";
    statusIcon = "/green-mark.svg";
    statusTextColor = "#15480C";
  }

  // Role Logic
  const userRole = isGraduated ? "Alumni" : hasPaid ? "Student" : "Applicant";
  const roleIcon = isGraduated ? AlumniIcon : StudentIcon;

  return (
    <main className="-m-4 bg-[#FBFBFB]">
      {/* Top Status Bar */}
      <div className="px-4 md:px-8 mb-4 flex justify-between items-center">
        <div
          className="inline-flex gap-2 p-2 rounded"
          style={{ backgroundColor: statusBg }}
        >
          <img src={statusIcon} alt="Status icon" className="w-4 h-4" />
          <span
            className="text-xs font-medium"
            style={{ color: statusTextColor }}
          >
            Application status: {applicationStatus}
          </span>
        </div>
        <span className="text-sm font-semibold">Student ID: {studentId}</span>
      </div>

      {/* Welcome Section */}
      <section className="bg-[#001299] text-white p-6">
        <div className="text-[#CCD2FF] flex items-center gap-1 mb-2">
          <img src={roleIcon} alt={`${userRole} icon`} />
          <p className="text-[#E6E6E6] text-xs">{userRole}</p>
        </div>
        <h1 className="font-semibold text-2xl">Welcome back, {displayName}</h1>
        <p className="text-[#E6E6E6] text-xs md:text-base my-2">
          Kickstart your product management journey!
        </p>

        <div className="mt-4 mb-2">
          <div className="text-white text-sm mb-4">{phases[0].phaseTitle}</div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#FF9D00] text-white text-sm py-2 px-4 rounded-md 
             transform transition-all duration-300 ease-in-out 
             hover:scale-105 active:scale-95 hover:bg-[#c67a00]"
          >
            Start Learning
            <img
              src={RightArrowIcon}
              alt="Right Arrow Icon"
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-active:translate-x-0"
            />
          </a>
        </div>
      </section>

      {/* My Learning Section */}
      <section className="p-8 py-12">
        <h2 className="text-lg text-[#4D4D4D] font-semibold mb-4 md:text-xl">
          My Learning
        </h2>

        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <PhaseCard key={idx} phase={phase} />
          ))}
        </div>
      </section>
    </main>
  );
}

// ===============================================================================

// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { phases } from "../constant/data";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// import StudentIcon from "../assets/icons/portal-page/student-icon.svg";
// import AlumniIcon from "../assets/icons/portal-page/alumni-icon.svg";
// import RightArrowIcon from "../assets/icons/portal-page/arrow-white.svg";

// import getStudentId from "../utils/getStudentId";
// import getDisplayName from "../utils/getDisplayName";

// /**
//  * PhaseCard
//  */
// const PhaseCard = ({ phase }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const PREVIEW_LENGTH = 60;
//   const previewText = (text) =>
//     text.length > PREVIEW_LENGTH ? text.slice(0, PREVIEW_LENGTH) + "..." : text;

//   // Split phase title (assumes format "Phase N Word")
//   const [phaseWord] = phase.phaseTitle.split(" ").slice(2);
//   const phasePrefix = phase.phaseTitle.split(" ").slice(0, 2).join(" ");

//   return (
//     <div
//       className="bg-white border border-[#E6E6E6] p-4 rounded-md transition-transform hover:scale-[1.01] hover:shadow-md duration-300 flex flex-col justify-between"
//       aria-expanded={isOpen}
//     >
//       {/* Content Wrapper */}
//       <div className="flex-1">
//         {/* Header */}
//         <div className="flex justify-between items-start space-x-2">
//           <div className="space-y-2">
//             <h3 className="font-semibold">
//               {phasePrefix}{" "}
//               <span
//                 className="ml-2 px-2 py-0.5 rounded"
//                 style={{ backgroundColor: phase.highlightColor }}
//               >
//                 {phaseWord}
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600">{phase.intro}</p>
//             <p className="text-sm text-gray-500">
//               {isOpen ? phase.introDetails : previewText(phase.introDetails)}
//             </p>
//           </div>

//           {/* Expand/Collapse Toggle */}
//           <button
//             type="button"
//             onClick={() => setIsOpen((o) => !o)}
//             className="p-2 rounded hover:bg-gray-100 transition"
//             aria-label={isOpen ? "Collapse details" : "Expand details"}
//           >
//             {isOpen ? (
//               <MdKeyboardArrowUp className="w-5 h-5 text-gray-600" />
//             ) : (
//               <MdKeyboardArrowDown className="w-5 h-5 text-gray-600" />
//             )}
//           </button>
//         </div>

//         {/* Collapsible details */}
//         <div
//           className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//             isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
//           }`}
//         >
//           <div className="text-sm text-gray-700 space-y-4">
//             {phase.moreDetails && (
//               <div className="space-y-2">
//                 <h4 className="font-semibold">More Details</h4>
//                 <ul className="list-disc list-inside space-y-1">
//                   {phase.moreDetails.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {phase.schedule?.length > 0 && (
//               <div className="space-y-2">
//                 <h4 className="font-semibold">Class Schedule</h4>
//                 <ul className="list-disc list-inside space-y-1">
//                   {phase.schedule.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {phase.howToJoin && (
//               <div className="space-y-2">
//                 <h4 className="font-semibold">How to Join</h4>
//                 <p>{phase.howToJoin}</p>
//               </div>
//             )}

//             {phase.instructions?.length > 0 && (
//               <div className="space-y-2">
//                 <h4 className="font-semibold">Instructions</h4>
//                 <ul className="list-disc list-inside space-y-1">
//                   {phase.instructions.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {phase.encouragement && (
//               <p className="italic text-gray-600">{phase.encouragement}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Start Assessment Button (always pinned at bottom) */}
//       {/* <a
//         href={phase.assessmentLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-4 block w-full text-center px-4 py-2 rounded-md text-sm font-medium bg-[#001299] text-white hover:bg-[#000e80] transition-colors"
//       >
//         Start Assessment
//       </a> */}
//       <a
//   href={phase.assessmentLink}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="mt-4 block w-full text-center px-4 py-4 rounded-md text-sm font-medium
//              bg-[#001299] text-white
//              transition-all duration-300 ease-in-out
//              hover:bg-[#000e80]
//              hover:scale-[1.02] hover:shadow-md
//              active:translate-y-[1px]"
// >
//   Start Assessment
// </a>
//     </div>
//   );
// };

// export default function PortalPage() {
//   const { user } = useAuth();

//   // Name handling
//  const displayName = getDisplayName(user);

//   const studentId = getStudentId(user) || "N/A";
//   const hasPaid = user?.hasPaid || false;
//   const isGraduated = user?.isGraduated || false;

//   // Application status UI
//   let applicationStatus = "Pending";
//   let statusBg = "#FFEBCC";
//   let statusIcon = "/brown-mark.svg";
//   let statusTextColor = "#7A4E00";

//   if (isGraduated) {
//     applicationStatus = "Graduated";
//     statusBg = "#E6F0FF";
//     statusIcon = "/blue-mark.svg";
//     statusTextColor = "#003366";
//   } else if (hasPaid) {
//     applicationStatus = "Accepted";
//     statusBg = "#E0FAE3";
//     statusIcon = "/green-mark.svg";
//     statusTextColor = "#15480C";
//   }

//   // User role
//   const userRole = isGraduated ? "Alumni" : hasPaid ? "Student" : "Applicant";
//   const roleIcon = isGraduated ? AlumniIcon : StudentIcon;

//   return (
//     <main className="-m-4 bg-[#FBFBFB]">
//       {/* Top Status Bar */}
//       <div className="px-4 md:px-8 mb-4 flex justify-between items-center">
//         <div
//           className="inline-flex gap-2 p-2 rounded"
//           style={{ backgroundColor: statusBg }}
//         >
//           <img src={statusIcon} alt="Status icon" className="w-4 h-4" />
//           <span
//             className="text-xs font-medium"
//             style={{ color: statusTextColor }}
//           >
//             Application status: {applicationStatus}
//           </span>
//         </div>
//         <span className="text-sm font-semibold">Student ID: {studentId}</span>
//       </div>

//       {/* Welcome Section */}
//       <section className="bg-[#001299] text-white p-6">
//         <div className="text-[#CCD2FF] flex items-center gap-1 mb-2">
//           <img src={roleIcon} alt={`${userRole} icon`} />
//           <p className="text-[#E6E6E6] text-xs">{userRole}</p>
//         </div>
//         <h1 className="font-semibold text-2xl">Welcome back, {displayName}</h1>
//         <p className="text-[#E6E6E6] text-xs md:text-base my-2">
//           Kickstart your product management journey!
//         </p>

//         <div className="mt-4 mb-2">
//           <div className="text-white text-sm mb-4">{phases[0].phaseTitle}</div>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 bg-[#FF9D00] text-white text-sm py-2 px-4 rounded-md
//              transform transition-all duration-300 ease-in-out
//              hover:scale-105 active:scale-95 hover:bg-[#c67a00]"
//           >
//             Start Learning
//             <img
//               src={RightArrowIcon}
//               alt="Right Arrow Icon"
//               className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-active:translate-x-0"
//             />
//           </a>
//         </div>
//       </section>

//       {/* My Learning Section */}
//       <section className="p-8 py-12">
//         <h2 className="text-lg text-[#4D4D4D] font-semibold mb-4 md:text-xl">
//           My Learning
//         </h2>

//         <div className="space-y-6">
//           {phases.map((phase, idx) => (
//             <PhaseCard key={idx} phase={phase} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
