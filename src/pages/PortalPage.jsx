import { Link } from "react-router-dom";
import LockIcon from "../assets/icons/portal-page/lock.svg";
import ResourcesIcon from "../assets/icons/portal-page/resources.svg";
import AssessmentIcon from "../assets/icons/portal-page/assessment.svg";
import CurriculumIcon from "../assets/icons/portal-page/curriculum.svg";

// Reusable Phase Card
const PhaseCard = ({ title, label, labelBg, courseProgress, locked }) => (
  <div className="bg-white border border-[#E6E6E6] p-4 mb-4 rounded-md transition-transform hover:scale-[1.01] hover:shadow-md duration-300">
    <div className="flex gap-3 items-center">
      <h3 className="font-semibold">{title}</h3>
      <span
        className="text-xs px-2 py-1 rounded"
        style={{ backgroundColor: labelBg }}
      >
        {label}
      </span>
    </div>

    <div className="flex gap-3 text-[#999999] mt-1 text-sm">
      <span>Course</span>
      <span>{courseProgress}% Complete</span>
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#001299] to-blue-500 transition-all duration-500"
        style={{ width: `${courseProgress}%` }}
      ></div>
    </div>

    <button
      className={`mt-3 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
        locked
          ? "bg-[#E6E6E6] text-[#B3B3B3] cursor-not-allowed"
          : "bg-[#001299] text-white hover:bg-[#000e80] cursor-pointer"
      }`}
    >
      Start Assessment
      {locked && <img src={LockIcon} alt="Locked" className="w-4 h-4" />}
    </button>
  </div>
);

// Reusable Quick Action Card
const QuickActionCard = ({ icon, label, to }) => (
  <Link
    to={to}
    className="bg-white flex flex-col items-center justify-center p-14 rounded-md shadow-sm
               hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] 
               hover:-translate-y-[2px] transition-all duration-300 ease-in-out"
  >
    <img src={icon} alt={`${label} Icon`} className="w-10 h-10 mb-2" />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default function PortalPage() {
  return (
    <main className="-m-4 bg-[#FBFBFB]">
      {/* Top Status Bar */}
      <div className="px-8 mb-4 flex justify-between items-center">
        <div className="bg-[#E0FAE3] inline-flex gap-2 p-2 rounded">
          <img
            src="/green-mark.svg"
            alt="Green checkmark"
            className="w-4 h-4"
          />
          <span className="text-[#15480C] text-xs font-medium">
            Application status: Accepted
          </span>
        </div>
        <span className="text-sm font-semibold">ID: 445</span>
      </div>

      {/* Welcome Section */}
      <section className="bg-[#001299] text-white p-6">
        <h1 className="font-semibold text-2xl">Welcome back, Peace</h1>
        <p className="text-[#E6E6E6] text-xs my-2">
          Kickstart your product management journey!
        </p>

        <div className="my-6">
          <span className="text-[#FF9D00] text-xs">Phase 1: Learning</span>
        </div>

        <button className="bg-[#FF9D00] text-sm py-2 px-4 rounded-md hover:bg-[#e88c00] transition">
          Continue Learning
        </button>
      </section>

      {/* My Learning Section */}
      <section className="p-8">
        <h2 className="text-lg text-[#4D4D4D] font-semibold mb-4 md:text-xl">
          My Learning
        </h2>

        <PhaseCard
          title="Phase 1"
          label="Learning"
          labelBg="#F5FBB8"
          courseProgress={0}
          locked={false}
        />
        <PhaseCard
          title="Phase 2"
          label="Internship"
          labelBg="#CCF6FF"
          courseProgress={0}
          locked={true}
        />
        <PhaseCard
          title="Phase 3"
          label="Career"
          labelBg="#EECCFF"
          courseProgress={0}
          locked={true}
        />
      </section>

      {/* Quick Actions Section */}
      <section className="p-8">
        <h2 className="text-[#4D4D4D] font-semibold text-lg md:text-xl mb-4">
          Quick Actions
        </h2>

        <div className="bg-[#FFEBCC] p-4 md:p-6 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickActionCard
              icon={ResourcesIcon}
              label="Resources"
              to="/resources"
            />
            <QuickActionCard
              icon={AssessmentIcon}
              label="Assessments"
              to="/assessments"
            />
            <QuickActionCard
              icon={CurriculumIcon}
              label="Curriculum"
              to="/curriculum"
            />
          </div>
        </div>
      </section>
    </main>
  );
}




// import LockIcon from "../assets/icons/portal-page/lock.svg";
// import ResourcesIcon from "../assets/icons/portal-page/resources.svg";
// import AssessmentIcon from "../assets/icons/portal-page/assessment.svg";
// import CurriculumIcon from "../assets/icons/portal-page/curriculum.svg";

// // Reusable Phase Card
// const PhaseCard = ({ title, label, labelBg, courseProgress, locked }) => (
//   <div className="bg-white border border-[#E6E6E6] p-4 mb-4 rounded-md">
//     <div className="flex gap-3 items-center">
//       <h3 className="font-semibold">{title}</h3>
//       <span
//         className="text-xs px-2 py-1 rounded"
//         style={{ backgroundColor: labelBg }}
//       >
//         {label}
//       </span>
//     </div>

//     <div className="flex gap-3 text-[#999999] mt-1 text-sm">
//       <span>Course</span>
//       <span>{courseProgress}% Complete</span>
//     </div>

//     <button
//       className={`mt-3 px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium ${
//         locked
//           ? "bg-[#E6E6E6] text-[#B3B3B3] cursor-not-allowed"
//           : "bg-[#001299] text-white hover:bg-[#000e80] transition cursor-pointer"
//       }`}
//     >
//       Start Assessment
//       {locked && <img src={LockIcon} alt="Locked" className="w-4 h-4" />}
//     </button>
//   </div>
// );

// // Reusable Quick Action Card
// const QuickActionCard = ({ icon, label }) => (
//   <div className="bg-white flex flex-col items-center justify-center p-14 rounded-md shadow-sm hover:shadow-md transition">
//     <img src={icon} alt={`${label} Icon`} className="w-10 h-10 mb-2" />
//     <span className="text-sm font-medium">{label}</span>
//   </div>
// );

// export default function PortalPage() {
//   return (
//     <main className="-m-4 bg-[#FBFBFB]">
//       {/* Top Status Bar */}
//       <div className="px-8 mb-4 flex justify-between items-center">
//         <div className="bg-[#E0FAE3] inline-flex gap-2 p-2 rounded">
//           <img
//             src="/green-mark.svg"
//             alt="Green checkmark"
//             className="w-4 h-4"
//           />
//           <span className="text-[#15480C] text-xs font-medium">
//             Application status: Accepted
//           </span>
//         </div>
//         <span className="text-sm font-semibold">ID: 445</span>
//       </div>

//       {/* Welcome Section */}
//       <section className="bg-[#001299] text-white p-6">
//         <h1 className="font-semibold text-2xl">Welcome back, Peace</h1>
//         <p className="text-[#E6E6E6] text-xs my-2">
//           Kickstart your product management journey!
//         </p>

//         <div className="my-6">
//           <span className="text-[#FF9D00] text-xs">Phase 1: Learning</span>
//         </div>

//         <button className="bg-[#FF9D00] text-sm py-2 px-4 rounded-md hover:bg-[#e88c00] transition">
//           Continue Learning
//         </button>
//       </section>

//       {/* My Learning Section */}
//       <section className="p-8">
//         <h2 className="text-lg text-[#4D4D4D] font-semibold mb-4 md:text-xl">My Learning</h2>

//         <PhaseCard
//           title="Phase 1"
//           label="Learning"
//           labelBg="#F5FBB8"
//           courseProgress={0}
//           locked={false}
//         />
//         <PhaseCard
//           title="Phase 2"
//           label="Internship"
//           labelBg="#CCF6FF"
//           courseProgress={0}
//           locked={true}
//         />
//         <PhaseCard
//           title="Phase 3"
//           label="Career"
//           labelBg="#EECCFF"
//           courseProgress={0}
//           locked={true}
//         />
//       </section>

//       {/* Quick Actions Section */}
//       <section className="p-8">
//         <h2 className="text-[#4D4D4D] font-semibold text-lg md:text-xl mb-4">
//           Quick Actions
//         </h2>

//         <div className="bg-[#FFEBCC] p-4 md:p-6 rounded-md">
//           {/* grid: single column on mobile, 3 columns on md+ */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <QuickActionCard icon={ResourcesIcon} label="Resources" />
//             <QuickActionCard icon={AssessmentIcon} label="Assessments" />
//             <QuickActionCard icon={CurriculumIcon} label="Curriculum" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
