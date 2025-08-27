import React, { useState, useEffect } from "react";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [dateJoined, setDateJoined] = useState("");
  const [cohort, setCohort] = useState("");

  const profile = {
    name: "Peace Agoha",
    studentId: "17765",
    email: "peaceagoha@gmail.com",
    currentPhase: "Learning",
    applicationStatus: "Approved",
    admissionStatus: "Student",
  };

  // Get initials from name
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // Load saved profile data (image + dates) on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    const savedDate = localStorage.getItem("dateJoined");
    const savedCohort = localStorage.getItem("cohort");

    if (savedImage) setProfileImage(savedImage);

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

  // Handle image change and save to localStorage
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

  // Handle click on profile image
  const handleProfileClick = () => {
    if (profileImage) {
      const confirmReset = window.confirm(
        "Do you want to reset your profile image to default?"
      );
      if (confirmReset) {
        setProfileImage(null);
        localStorage.removeItem("profileImage");
      }
    } else {
      document.getElementById("upload-image").click();
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col items-start relative">
        {/* Profile Image (clickable) */}
        <div
          onClick={handleProfileClick}
          className="cursor-pointer relative group"
          title={profileImage ? "Click to reset" : "Click to upload"}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt={profile.name}
              className="w-28 h-28 rounded-full border-4 border-gray-100 object-cover mb-4 bg-gray-50"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-gray-400 bg-gray-300 text-gray-700 text-3xl font-bold mb-4">
              {getInitials(profile.name)}
            </div>
          )}
          {/* Hover overlay text */}
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
            {profileImage ? "Reset" : "Change"}
          </span>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Name + SVG Icon */}
        <h2 className="text-2xl font-medium flex items-center gap-2">
          {profile.name}
          <img src="/edit.svg" alt="Edit" className="w-5 h-5" />
        </h2>

        {/* Profile Details */}
        <div className="mt-6 space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {profile.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Student ID:</span>{" "}
            {profile.studentId}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Current Phase:</span>{" "}
            {profile.currentPhase}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date Joined:</span> {dateJoined}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Cohort:</span> {cohort}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Application Status:</span>{" "}
            <span className="text-green-600">{profile.applicationStatus}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Admission Status:</span>{" "}
            <span className="text-blue-600">{profile.admissionStatus}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function Profile() {
//   const [profileImage, setProfileImage] = useState(null);
//   const [dateJoined, setDateJoined] = useState("");
//   const [cohort, setCohort] = useState("");

//   const profile = {
//     name: "Peace Agoha",
//     studentId: "17765",
//     email: "peaceagoha@gmail.com",
//     currentPhase: "Learning",
//     applicationStatus: "Approved",
//     admissionStatus: "Student",
//   };

//   // Get initials from name
//   const getInitials = (name) =>
//     name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();

//   // Load saved profile data (image + dates) on mount
//   useEffect(() => {
//      const savedImage = localStorage.getItem("profileImage");
//     const savedDate = localStorage.getItem("dateJoined");
//     const savedCohort = localStorage.getItem("cohort");

//     if (savedImage) setProfileImage(savedImage);

//     if (savedDate) {
//       setDateJoined(savedDate);
//     } else {
//       const today = new Date().toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       });
//       localStorage.setItem("dateJoined", today);
//       setDateJoined(today);
//     }

//     if (savedCohort) {
//       setCohort(savedCohort);
//     } else {
//       const cohortDate = new Date().toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       });
//       localStorage.setItem("cohort", cohortDate);
//       setCohort(cohortDate);
//     }
//   }, []);

//   // Handle image change and save to localStorage
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//         localStorage.setItem("profileImage", reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex flex-col items-start relative">
//         {/* Profile Image or Initials */}
//         {profileImage ? (
//           <img
//             src={profileImage}
//             alt={profile.name}
//             className="w-28 h-28 rounded-full border-4 border-green-200 object-cover mb-4"
//           />
//         ) : (
//           <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-green-200 bg-green-100 text-green-700 text-3xl font-bold mb-4">
//             {getInitials(profile.name)}
//           </div>
//         )}

//         {/* Upload Button */}
//         <label
//           htmlFor="upload-image"
//           className="bg-green-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-green-600 transition inline-block mb-4"
//         >
//           Change
//         </label>
//         <input
//           type="file"
//           id="upload-image"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="hidden"
//         />

//         {/* Name + SVG Icon */}
//         <h2 className="text-2xl font-medium flex items-center gap-2">
//           {profile.name}
//           <img src="/edit.svg" alt="Edit" className="w-5 h-5" />
//         </h2>

//         {/* Profile Details */}
//         <div className="mt-6 space-y-3">
//           <p className="text-gray-700">
//             <span className="font-semibold">Name:</span> {profile.name}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Student ID:</span>{" "}
//             {profile.studentId}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Email:</span> {profile.email}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Current Phase:</span>{" "}
//             {profile.currentPhase}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Date Joined:</span> {dateJoined}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Cohort:</span> {cohort}
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Application Status:</span>{" "}
//             <span className="text-green-600">{profile.applicationStatus}</span>
//           </p>
//           <p className="text-gray-700">
//             <span className="font-semibold">Admission Status:</span>{" "}
//             <span className="text-blue-600">{profile.admissionStatus}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
