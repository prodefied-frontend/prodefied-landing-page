// src/pages/PortalPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { phases } from "../constant/data";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import StudentIcon from "../assets/icons/portal-page/student-icon.svg";
import AlumniIcon from "../assets/icons/portal-page/alumni-icon.svg";
import RightArrowIcon from "../assets/icons/portal-page/arrow-white.svg";

import getStudentId from "../utils/getStudentId";
import getDisplayName from "../utils/getDisplayName";

/** Helper: add weeks to a date */
function addWeeks(date, weeks) {
  return new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
}

/**
 * PhaseCard Component
 *
 * Props:
 * - phase: object from constant phases
 * - locked: boolean
 */
const PhaseCard = ({ phase, locked = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const PREVIEW_LENGTH = 60;
  const previewText = (text) =>
    text.length > PREVIEW_LENGTH ? text.slice(0, PREVIEW_LENGTH) + "..." : text;

  const [phaseWord] = phase.phaseTitle.split(" ").slice(2);
  const phasePrefix = phase.phaseTitle.split(" ").slice(0, 2).join(" ");

  return (
    <div className="relative">
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
        <div className="mt-4">
          <a
            href={phase.assessmentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center px-4 py-4 rounded-md text-sm font-medium 
              transition-all duration-300 ease-in-out 
              ${
                locked
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#001299] text-white hover:bg-[#000e80] hover:scale-[1.02] hover:shadow-md"
              }`}
            onClick={(e) => {
              if (locked) {
                e.preventDefault();
              }
            }}
            aria-disabled={locked}
          >
            {locked ? "Locked" : "Start Assessment"}
          </a>
        </div>
      </div>

      {/* Minimal Lock overlay: only shows Locked (no extra text) */}
      {locked && (
        <div
          className="absolute inset-0 rounded-md bg-white/70 flex items-center justify-center p-4"
          aria-hidden={false}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
              {/* lock icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m0-10a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3z"
                />
                <rect x="4" y="11" width="16" height="8" rx="2" ry="2" />
              </svg>
            </div>
            <p className="font-semibold text-gray-700">Locked</p>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * PortalPage Component
 * - phase 2 locked until cohortStart + 9 weeks
 * - phase 3 locked until cohortStart + 17 weeks
 * - graduated status toggles to "Graduated" and icon switches at cohortStart + 10 weeks
 */
export default function PortalPage() {
  const { user } = useAuth();

  const displayName = getDisplayName(user);
  const studentId = getStudentId(user) || "N/A";

  /**
   * Fixed cohort start date set to Oct 30, 2025 (local time midnight).
   * Month is 0-indexed so 9 = October.
   * If you prefer UTC use: new Date("2025-10-30T00:00:00Z")
   */
  const cohortStartDate = useMemo(() => new Date(2025, 9, 30, 0, 0, 0), []);

  // unlock weeks (per your request)
  const PHASE2_WEEKS = 9;
  const PHASE3_WEEKS = 17;
  const GRADUATION_WEEKS = 10; // change role to Graduated at +10 weeks

  // compute unlock / graduation dates
  const unlockPhase2 = useMemo(
    () => addWeeks(cohortStartDate, PHASE2_WEEKS),
    [cohortStartDate]
  );
  const unlockPhase3 = useMemo(
    () => addWeeks(cohortStartDate, PHASE3_WEEKS),
    [cohortStartDate]
  );
  const graduationDate = useMemo(
    () => addWeeks(cohortStartDate, GRADUATION_WEEKS),
    [cohortStartDate]
  );

  // Tick to re-evaluate locked/graduation state
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30_000); // 30s
    return () => clearInterval(id);
  }, []);

  // derived flags computed from current time (so they update after tick)
  const now = Date.now();
  const isGraduated = now >= graduationDate.getTime();

  // application status uses graduated flag (UI only)
  const applicationStatus = isGraduated ? "Graduated" : "Accepted";
  const statusBg = isGraduated ? "#E6F0FF" : "#E0FAE3";
  const statusIcon = isGraduated ? "/blue-mark.svg" : "/green-mark.svg";
  const statusTextColor = isGraduated ? "#003366" : "#15480C";

  // role display (Graduated vs Student)
  const userRole = isGraduated ? "Graduated" : "Student";
  const roleIcon = isGraduated ? AlumniIcon : StudentIcon;

  // phases with lock info
  const phasesWithLockInfo = useMemo(() => {
    return phases.map((p, idx) => {
      if (idx === 1) {
        const remainingMs = unlockPhase2.getTime() - Date.now();
        return {
          phase: p,
          locked: remainingMs > 0,
        };
      }
      if (idx === 2) {
        const remainingMs = unlockPhase3.getTime() - Date.now();
        return {
          phase: p,
          locked: remainingMs > 0,
        };
      }
      return { phase: p, locked: false };
    });
    // include tick so it recalculates periodically
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlockPhase2, unlockPhase3, tick]);

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
            href="https://meet.zoho.com/koeg-yct-ivq"
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
          {phasesWithLockInfo.map(({ phase, locked }, idx) => (
            <PhaseCard key={idx} phase={phase} locked={locked} />
          ))}
        </div>
      </section>
    </main>
  );
}