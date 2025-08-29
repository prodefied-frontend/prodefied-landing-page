import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

export default function Profile() {
  const { user, profileImage, setProfileImage, login } = useAuth();

  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [password, setPassword] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [cohort, setCohort] = useState("");
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedDate = localStorage.getItem("dateJoined");
    const savedCohort = localStorage.getItem("cohort");

    if (savedDate) {
      setDateJoined(savedDate);
    } else {
      const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      localStorage.setItem("dateJoined", today);
      setDateJoined(today);
    }

    if (savedCohort) {
      setCohort(savedCohort);
    } else {
      const cohortDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      localStorage.setItem("cohort", cohortDate);
      setCohort(cohortDate);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    if (profileImage) {
      const confirmReset = window.confirm("Reset profile image?");
      if (confirmReset) {
        setProfileImage(null);
        localStorage.removeItem("profileImage");
      }
    } else {
      document.getElementById("upload-image").click();
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSuccessMessage("");

    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      };

      if (password.trim()) {
        payload.password = password;
      }

      const token = localStorage.getItem("token");
      const res = await axios.put(
        "https://your-backend.com/api/profile/update/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      login(res.data.user, token); // update context
      setSuccessMessage("Profile updated successfully!");
      setPassword(""); // clear password field
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const initials = `${firstName} ${lastName}`
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-[#FBFBFB] rounded-md shadow-sm">
      <div className="flex flex-col items-start relative">
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
          disabled={saving}
          className="bg-[#001299] text-white px-4 py-2 rounded-md hover:bg-[#000e80] transition disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

        {successMessage && (
          <p className="mt-3 text-green-600 text-sm font-medium">
            {successMessage}
          </p>
        )}

        {/* Profile Details */}
        <div className="mt-6 space-y-3 text-[#4D4D4D] w-full text-sm">
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Student ID:</strong> {user?.studentId || "N/A"}
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
            <span className="text-green-600">
              {user?.applicationStatus || "Approved"}
            </span>
          </p>
          <p>
            <strong>Admission Status:</strong>{" "}
            <span className="text-blue-600">
              {user?.admissionStatus || "Student"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
