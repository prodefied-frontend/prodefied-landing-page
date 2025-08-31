import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUserProfile, updateUserProfile } from "../../services/api";
import { toast } from "react-toastify";
import getInitials from "../../utils/getInitials";
import formatDateJoinedWithId from "../../utils/getStudentId";

export default function Profile() {
  const { user, profileImage, setProfileImage, login } = useAuth();
  const studentId = formatDateJoinedWithId(user);
  // console.log(user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [cohort, setCohort] = useState("");
  const [saving, setSaving] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (hasFetched) return;

      try {
        const res = await getUserProfile();
        const profile = res.data.user;

        setFirstName(profile.first_name || "");
        setLastName(profile.last_name || "");
        setPhoneNumber(profile.phone_number || "");

        login(profile, localStorage.getItem("token"));
        setHasFetched(true);
      } catch (err) {
        toast.error("Failed to fetch profile.");
      }
    };

    fetchProfile();

    const today = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const savedDate = localStorage.getItem("dateJoined") || today;
    const savedCohort = localStorage.getItem("cohort") || today;

    localStorage.setItem("dateJoined", savedDate);
    localStorage.setItem("cohort", savedCohort);

    setDateJoined(savedDate);
    setCohort(savedCohort);
  }, [hasFetched]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleProfileClick = () => {
    if (profileImage) {
      setShowResetModal(true);
    } else {
      document.getElementById("upload-image").click();
    }
  };

  const handleResetImage = () => {
    setProfileImage(null);
    localStorage.removeItem("profileImage");
    setShowResetModal(false);
  };

  const handleSave = async () => {
    if (!hasChanges()) return;

    setSaving(true);

    const payload = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };

    if (password.trim()) {
      payload.password = password;
    }

    try {
      const res = await updateUserProfile(payload);
      login(res.data.user, localStorage.getItem("token"));
      toast.success("Profile updated successfully!");
      setPassword("");
    } catch (err) {
      toast.error("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const hasChanges = () => {
    return (
      firstName !== user?.first_name ||
      lastName !== user?.last_name ||
      phoneNumber !== user?.phone_number ||
      password.trim() !== ""
    );
  };

  const initials = getInitials(user);
  const admissionStatus = user?.hasPaid ? "Student" : "Pending";
  const applicationStatus = user?.hasPaid ? "Approved" : "Pending";

  return (
    <div className="p-6 max-w-2xl mx-auto bg-[#FBFBFB] rounded-md shadow-sm relative">
      {/* Modal */}
      {showResetModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-[#FBFBFB] rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4 text-[#001299]">
              Reset Profile Image?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              This will remove your current profile image.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleResetImage}
                className="px-4 py-2 rounded-md bg-[#001299] hover:bg-[#000e80] text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-start">
        {/* Profile Image */}
        <div
          onClick={handleProfileClick}
          className="cursor-pointer relative group mb-4"
          title={profileImage ? "Click to reset" : "Click to upload"}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 object-cover"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 bg-gray-300 text-gray-700 text-3xl font-bold">
              {initials}
            </div>
          )}
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
            {profileImage ? "Reset" : "Change"}
          </span>
        </div>

        <input
          type="file"
          id="upload-image"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

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
            <span
              className={user?.hasPaid ? "text-green-600" : "text-yellow-600"}
            >
              {applicationStatus}
            </span>
          </p>
          <p>
            <strong>Admission Status:</strong>{" "}
            <span
              className={user?.hasPaid ? "text-blue-600" : "text-yellow-600"}
            >
              {admissionStatus}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
