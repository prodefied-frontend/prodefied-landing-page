import React, { useState } from "react";

export default function Suggestions() {
  const [formData, setFormData] = useState({
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form submitted", formData);
      setFormData({ message: "" }); // ✅ Clear the form
    }
  };

  return (
    <main className="px-6 md:px-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center gap-4 mt-8">
        {/* Image before heading */}
        <img
          src="/light.svg"
          alt="Feedback"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain mb-4"
        />

        <h3 className="text-[#1A1A1A] text-center text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold">
          Tell Us What You Think About <br />
          Prodefied
        </h3>

        <p className="text-[#4D4D4D] text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          Love something? Want more of something else? Share it with us — we’re
          building this with you.
        </p>
      </div>

      <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
        {/* Message (textarea) */}
        <label className="text-gray-700 font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Type here..."
          className="w-full mt-1 p-3 shadow rounded-md bg-white h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#000F84]"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message}</p>
        )}

        {/* Submit Button */}
        <div className="text-left mt-2">
          {" "}
          {/* 🔹 reduced from mt-4 to mt-2 */}
          <button
            type="submit"
            className="bg-[#000F84] rounded-md px-6 py-3 text-white text-sm font-semibold hover:scale-105 hover:bg-[#0018a8] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

// import React, { useState } from "react";

// export default function Suggestions() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     // Name validation
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     // Message validation
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     if (Object.keys(newErrors).length !== 0) {
//       setErrors(newErrors);
//     } else {
//       setErrors({});
//       console.log("Form submitted", formData);
//       // ✅ Clear the form
//       setFormData({ name: "", email: "", message: "" });
//     }
//   };

//   return (
//     <main className="px-6 md:px-10">
//       {/* Header */}
//       <div className="text-center flex flex-col items-center justify-center gap-2 mt-8">
//         <h3 className="text-[#1A1A1A] text-center text-lg md:text-4xl">
//           Tell Us What You Think
//         </h3>
//         <p className="text-[#4D4D4D] text-sm max-w-xs mx-auto md:text-2xl md:max-w-2xl">
//           <span className="block">
//             Love something? Want more of something else? Share it with us —
//             we’re building this with you.
//           </span>
//         </p>
//       </div>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Name */}
//         <label className="text-gray-700 font-medium">Name</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           className="w-full mt-1 p-2 shadow rounded-md bg-white"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

//         {/* Email */}
//         <label className="text-gray-700 font-medium">Email</label>
//         <input
//           type="text"
//           name="email"
//           placeholder="name@example.com"
//           className="w-full mt-1 p-2 shadow rounded-md bg-white"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

//         {/* Message (textarea) */}
//         <label className="text-gray-700 font-medium">Message</label>
//         <textarea
//           name="message"
//           placeholder="Write your thoughts here..."
//           className="w-full mt-1 p-2 shadow rounded-md bg-white h-28 resize-none"
//           value={formData.message}
//           onChange={handleChange}
//         />
//         {errors.message && (
//           <p className="text-red-600 text-sm">{errors.message}</p>
//         )}

//         {/* Submit Button */}
//         <div className="text-left mt-4">
//           <button
//             type="submit"
//             className="bg-[#000F84] rounded-md px-6 py-3 text-white text-sm font-semibold hover:scale-105 hover:bg-[#0018a8] transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </main>
//   );
// }
