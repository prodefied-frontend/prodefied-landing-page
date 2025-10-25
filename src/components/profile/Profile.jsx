// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateUserProfile } from "../../services/api";
import { toast } from "react-toastify";
import getInitials from "../../utils/getInitials";
import getStudentId from "../../utils/getStudentId";

/**
 * Profile page
 * - Uses backend user.created_at as the canonical "Date Joined"
 * - Cohort is set to "First Cohort" per the flow (users who reach sign-up are paid)
 * - No UI gating on hasPaid
 */
export default function Profile() {
  const { user, login } = useAuth();

  // derived read-only values
  const studentId = getStudentId(user);
  const initials = getInitials(user);

  // local form state (initialized from context user)
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [password, setPassword] = useState("");

  // ancillary UI state
  const [dateJoined, setDateJoined] = useState("");
  const [cohort, setCohort] = useState("First Cohort");
  const [saving, setSaving] = useState(false);

  // keep form in sync with context user changes (login / updates)
  useEffect(() => {
    setFirstName(user?.first_name || "");
    setLastName(user?.last_name || "");
    setPhoneNumber(user?.phone_number || "");

    // Use backend created_at when present (ISO 8601). Fallback to local today.
    const rawCreated = user?.created_at || user?.date_joined || null;
    let formattedDate = "";

    if (rawCreated) {
      try {
        const d = new Date(rawCreated);
        // if invalid date, fallback
        if (!isNaN(d.getTime())) {
          formattedDate = d.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
        }
      } catch (err) {
        formattedDate = "";
      }
    }

    if (!formattedDate) {
      formattedDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }

    setDateJoined(formattedDate);

    // Keep cohort fixed to first cohort (per your flow)
    setCohort("First Cohort");
  }, [user]);

  // detect local changes vs context
  const hasChanges = () =>
    firstName !== (user?.first_name || "") ||
    lastName !== (user?.last_name || "") ||
    phoneNumber !== (user?.phone_number || "") ||
    password.trim() !== "";

  // save changes and update context with backend response (server truth)
  const handleSave = async () => {
    if (!hasChanges()) return;
    setSaving(true);

    const payload = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };
    if (password.trim()) payload.password = password;

    try {
      const res = await updateUserProfile(payload);
      const updatedUser = res?.data?.user || res?.data;
      if (updatedUser) {
        login(updatedUser, localStorage.getItem("token"));
        toast.success("Profile updated successfully!");
        setPassword("");
      } else {
        // fallback: if backend doesn't return user, patch local context
        const patched = { ...(user || {}), ...payload };
        login(patched, localStorage.getItem("token"));
        toast.success("Profile updated locally.");
      }
    } catch (err) {
      console.error("Update profile error:", err);
      const msg =
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err?.message;
      toast.error(msg || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  // Display values — hard-coded per new flow (no hasPaid dependency)
  const applicationStatus = "Approved";
  const admissionStatus = "Student";

  return (
    <div className="p-6 max-w-2xl mx-auto bg-[#FBFBFB] rounded-md shadow-sm relative">
      <div className="flex flex-col items-start">
        {/* Initials Avatar */}
        <div className="mb-4">
          <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 bg-gray-300 text-gray-700 text-3xl font-bold">
            {initials}
          </div>
        </div>

        {/* Controls: Save (left on desktop, center on mobile) */}
        <div className="w-full flex items-center justify-center md:justify-start gap-3 mb-4">
          <button
            onClick={handleSave}
            disabled={!hasChanges() || saving}
            className={`px-4 py-2 rounded-md text-white transition ${
              !hasChanges() || saving
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#001299] hover:bg-[#000e80]"
            }`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Editable Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="border px-3 py-2 rounded-md w-full"
          />
        </div>

        {/* Read-Only Profile Details */}
        <div className="mt-6 space-y-3 text-[#4D4D4D] w-full text-sm">
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Student ID:</strong> {studentId || "N/A"}
          </p>
          <p>
            <strong>Current Phase:</strong> {user?.currentPhase || "Learning"}
          </p>
          <p>
            <strong>Date Joined:</strong> {dateJoined}
          </p>
          <p>
            <strong>Cohort:</strong> {cohort}
          </p>
          <p>
            <strong>Application Status:</strong>{" "}
            <span className="text-green-600">{applicationStatus}</span>
          </p>
          <p>
            <strong>Admission Status:</strong>{" "}
            <span className="text-blue-600">{admissionStatus}</span>
          </p>
        </div>
      </div>

      {/* Optional loading overlay */}
      {saving && (
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-md">
          <p className="text-[#001299] font-medium">Saving...</p>
        </div>
      )}
    </div>
  );
}
