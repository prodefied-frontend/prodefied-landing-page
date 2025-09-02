import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LockIcon from "../assets/icons/portal-page/lock.svg";
import ResourcesIcon from "../assets/icons/portal-page/resources.svg";
import AssessmentIcon from "../assets/icons/portal-page/assessment.svg";
import CurriculumIcon from "../assets/icons/portal-page/curriculum.svg";
import StudentIcon from '../assets/icons/portal-page/student-icon.svg';
import AlumniIcon from '../assets/icons/portal-page/alumni-icon.svg';
import capitalize from "../utils/capitalize";
import getStudentId from "../utils/getStudentId";

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
  const { user } = useAuth();

  const name = capitalize(user) || "User";
  const studentId = getStudentId(user) || "N/A";
  const hasPaid = user?.hasPaid || false;
  const isGraduated = user?.isGraduated || false;

  // 🧠 Progress tracking
  const courseProgressPhase1 = user?.learningProgress || 0;
  const courseProgressPhase2 = user?.internshipProgress || 0;
  const courseProgressPhase3 = user?.careerProgress || 0;

  // 🧠 Unlock logic
  const phaseLocked = [
    false,
    courseProgressPhase1 < 100,
    courseProgressPhase2 < 100,
  ];

  // 🧠 Determine application status
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

  // 🧠 Determine user role
  const userRole = isGraduated ? "Alumni" : "Student";
  const roleIcon = isGraduated ? AlumniIcon : StudentIcon;

  // 🧠 Phase data
  const phases = [
    {
      title: "Phase 1",
      label: "Learning",
      bg: "#F5FBB8",
      progress: courseProgressPhase1,
      locked: phaseLocked[0],
    },
    {
      title: "Phase 2",
      label: "Internship",
      bg: "#CCF6FF",
      progress: courseProgressPhase2,
      locked: phaseLocked[1],
    },
    {
      title: "Phase 3",
      label: "Career",
      bg: "#EECCFF",
      progress: courseProgressPhase3,
      locked: phaseLocked[2],
    },
  ];

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
          <img src={roleIcon} alt={`${userRole} Icon`} />
          <p className="text-white text-xs">{userRole}</p>
        </div>
        <h1 className="font-semibold text-2xl">Welcome back, {name}</h1>
        <p className="text-[#E6E6E6] text-xs my-2">
          Kickstart your product management journey!
        </p>

        <div className="my-6">
          <span className="text-[#FF9D00] text-xs">
            Phase 1: {phases[0].label}
          </span>
        </div>
      </section>

      {/* My Learning Section */}
      <section className="p-8">
        <h2 className="text-lg text-[#4D4D4D] font-semibold mb-4 md:text-xl">
          My Learning
        </h2>

        {phases.map((phase) => (
          <PhaseCard
            key={phase.title}
            title={phase.title}
            label={phase.label}
            labelBg={phase.bg}
            courseProgress={phase.progress}
            locked={phase.locked}
          />
        ))}
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
              to="/portal"
            />
            <QuickActionCard
              icon={AssessmentIcon}
              label="Assessments"
              to="/portal"
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
