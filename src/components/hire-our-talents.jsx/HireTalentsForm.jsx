import React, { useState } from "react";

export default function HireTalentsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    employmentType: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmploymentTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      employmentType: prev.employmentType === value ? "" : value,
    }));
  };

  const handleLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      location: prev.location === value ? "" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.employmentType)
      newErrors.employmentType = "Please select one employment type";
    if (!formData.location)
      newErrors.location = "Please select one location option";

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form submitted", formData);
      // Optionally reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        employmentType: "",
        location: "",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Basic Fields */}
        <label className="text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mt-1 p-2 shadow rounded-md bg-white"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        <label className="text-gray-700 font-medium">Email</label>
        <input
          type="text"
          name="email"
          placeholder="name@example.com"
          className="w-full mt-1 p-2 shadow rounded-md bg-white"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <label className="text-gray-700 font-medium">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          className="w-full mt-1 p-2 shadow rounded-md bg-white"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

        <label className="text-gray-700 font-medium">Position</label>
        <input
          type="text"
          name="position"
          placeholder="e.g. Junior PM, Associate PM"
          className="w-full mt-1 p-2 shadow rounded-md bg-white"
          value={formData.position}
          onChange={handleChange}
        />
        {errors.position && (
          <p className="text-red-600 text-sm">{errors.position}</p>
        )}

        <div>
          <label className="block text-sm text-gray-700 font-medium mb-1">
            Employment Type
          </label>
          <div className="w-full bg-white p-2 shadow rounded-md flex gap-x-8 overflow-x-auto">
            {["full-time", "part-time", "internship", "contract"].map(
              (type) => (
                <label
                  key={type}
                  className="inline-flex items-center text-sm whitespace-nowrap"
                >
                  <input
                    type="checkbox"
                    name="employmentType"
                    value={type}
                    checked={formData.employmentType === type}
                    onChange={handleEmploymentTypeChange}
                    className="mr-2"
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              )
            )}
          </div>
          {errors.employmentType && (
            <p className="text-red-600 text-sm">{errors.employmentType}</p>
          )}
        </div>

        {/* Location Option */}
        <div>
          <label className="block text-sm text-gray-700 font-medium mb-1">
            Location Option
          </label>
          <div className="w-full bg-white p-2 shadow rounded-md flex flex-wrap gap-x-10 gap-y-3">
            {["remote", "hybrid", "onsite"].map((option) => (
              <label key={option} className="inline-flex items-center text-sm">
                <input
                  type="checkbox"
                  name="location"
                  value={option}
                  checked={formData.location === option}
                  onChange={handleLocationChange}
                  className="mr-2"
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
          {errors.location && (
            <p className="text-red-600 text-sm">{errors.location}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-left mt-4">
          <button
            type="submit"
            className="bg-[#ff9d00] rounded-md px-6 py-3 text-white text-sm font-semibold hover:scale-105 hover:bg-[#000E73] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// export default function HireTalentsForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     position: "",
//     employmentType: [],
//     location: [],
//   });

//   const [errors, setErrors] = useState({
//     employmentType: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: checked ? [value] : [],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {
//       employmentType:
//         formData.employmentType.length === 0
//           ? "Select at least one employment type"
//           : "",
//       location:
//         formData.location.length === 0
//           ? "Select at least one location option"
//           : "",
//     };

//     setErrors(newErrors);

//     const hasErrors = Object.values(newErrors).some((err) => err !== "");
//     if (hasErrors) return;

//     console.log("Form submitted:", formData);
//     // You can send data to API here
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Full Name */}
//         <div className="">
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full mt-1 p-2  shadow rounded-md bg-white"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="name@example.com"
//             className="w-full mt-1 p-2  shadow rounded-md bg-white"
//             required
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label className="block text-sm font-medium">Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter phone number"
//             className="w-full mt-1 p-2  shadow rounded-md bg-white"
//             required
//           />
//         </div>

//         {/* Position */}
//         <div>
//           <label className="block text-sm font-medium">
//             What Position are you in for
//           </label>
//           <input
//             type="text"
//             name="position"
//             value={formData.position}
//             onChange={handleChange}
//             placeholder="e.g. Junior Product Manager, Associate PM"
//             className="w-full mt-1 p-2  shadow rounded-md bg-white"
//             required
//           />
//         </div>

//         {/* Employment Type */}

//         {/* <div className="">
//           <label className="block text-sm font-medium mb-1">
//             Employment Type
//           </label>
//           <div className="flex flex-wrap gap-4 bg-white p-4 shadow">
//             {["full-time", "part-time", "internship", "contract"].map(
//               (type) => (
//                 <label key={type} className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     name="employmentType"
//                     value={type}
//                     checked={formData.employmentType.includes(type)}
//                     onChange={handleCheckboxChange}
//                     className="mr-2 accent-gray-500"
//                   />
//                   {type
//                     .replace("-", " ")
//                     .replace(/\b\w/g, (l) => l.toUpperCase())}
//                 </label>
//               )
//             )}
//           </div>

//           {errors.employmentType && (
//             <p className="text-red-600 text-sm mt-1">{errors.employmentType}</p>
//           )}
//         </div> */}

//         <div className="w-full">
//           <label className="block text-sm font-medium mb-1">
//             Employment Type
//           </label>
//           <div className="w-full bg-white p-2 shadow rounded-md flex flex-wrap gap-x-20 gap-y-3">
//             {["full-time", "part-time", "internship", "contract"].map(
//               (type) => (
//                 <label key={type} className="inline-flex items-center text-sm">
//                   <input
//                     type="checkbox"
//                     name="employmentType"
//                     value={type}
//                     checked={formData.employmentType.includes(type)}
//                     onChange={handleCheckboxChange}
//                     className="mr-2 h-4 w-4"
//                   />
//                   {type
//                     .replace("-", " ")
//                     .replace(/\b\w/g, (l) => l.toUpperCase())}
//                 </label>
//               )
//             )}
//           </div>

//           {errors.employmentType && (
//             <p className="text-red-600 text-sm mt-1">{errors.employmentType}</p>
//           )}
//         </div>

//         {/* Location Option */}

//         <div className="w-full">
//           <label className="block text-sm font-medium mb-1">
//             Location Option
//           </label>
//           <div className="w-full bg-white p-2 shadow rounded-md flex flex-wrap gap-x-20 gap-y-3">
//             {["remote", "hybrid", "onsite"].map((option) => (
//               <label key={option} className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   name="location"
//                   value={option}
//                   checked={formData.location.includes(option)}
//                   onChange={handleCheckboxChange}
//                   className="mr-2 h-4 w-4"
//                 />
//                 {option.charAt(0).toUpperCase() + option.slice(1)}
//               </label>
//             ))}
//           </div>
//           {errors.location && (
//             <p className="text-red-600 text-sm mt-1">{errors.location}</p>
//           )}
//         </div>

//         {/* Submit */}
//         <div className="text-left">
//           <button
//             type="submit"
//             className="bg-[#ff9d00] rounded-md px-6 py-3 text-white text-sm font-semibold hover:scale-105 hover:bg-[#000E73] transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function HireTalentsForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     position: "",
//     employmentType: [],
//     location: [],
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;

//     setFormData((prev) => {
//       const updated = {
//         ...prev,
//         [name]: checked ? [value] : [],
//       };
//       return updated;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.employmentType.length) {
//       newErrors.employmentType = "Select one employment type.";
//     }
//     if (!formData.location.length) {
//       newErrors.location = "Select one location option.";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) return;

//     console.log("✅ Form submitted:", formData);
//     alert("Form submitted successfully!");
//   };

//   return (
// <div className="max-w-2xl mx-auto p-6">
//   <form onSubmit={handleSubmit} className="space-y-4">
//     {/* Full Name */}
//     <div>
//       <label className="block text-sm font-medium">Full Name</label>
//       <input
//         type="text"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         placeholder="Full Name"
//         className="w-full mt-1 p-2 shadow rounded-md bg-white"
//         required
//       />
//     </div>

//     {/* Email */}
//     <div>
//       <label className="block text-sm font-medium">Email</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="you@example.com"
//         className="w-full mt-1 p-2 shadow rounded-md bg-white"
//         required
//       />
//     </div>

//     {/* Phone */}
//     <div>
//       <label className="block text-sm font-medium">Phone Number</label>
//       <input
//         type="tel"
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         placeholder="e.g. 08012345678"
//         className="w-full mt-1 p-2 shadow rounded-md bg-white"
//         required
//       />
//     </div>

//     {/* Position */}
//     <div>
//       <label className="block text-sm font-medium">
//         What position are you hiring for?
//       </label>
//       <input
//         type="text"
//         name="position"
//         value={formData.position}
//         onChange={handleChange}
//         placeholder="e.g. Product Manager"
//         className="w-full mt-1 p-2 shadow rounded-md bg-white"
//         required
//       />
//     </div>

//     {/* Employment Type (single-select) */}
//     <div>
//       <label className="block text-sm font-medium mb-1">
//         Employment Type
//       </label>
//       <div className="w-full bg-white p-2 shadow rounded-md flex flex-wrap gap-x-10 gap-y-3">
//         {["full-time", "part-time", "internship", "contract"].map(
//           (type) => (
//             <label key={type} className="inline-flex items-center text-sm">
//               <input
//                 type="checkbox"
//                 name="employmentType"
//                 value={type}
//                 checked={formData.employmentType.includes(type)}
//                 onChange={handleCheckboxChange}
//                 disabled={
//                   formData.employmentType.length > 0 &&
//                   !formData.employmentType.includes(type)
//                 }
//                 className="mr-2"
//               />
//               {type.charAt(0).toUpperCase() + type.slice(1)}
//             </label>
//           )
//         )}
//       </div>
//       {errors.employmentType && (
//         <p className="text-red-500 text-sm mt-1">{errors.employmentType}</p>
//       )}
//     </div>

//     {/* Location Option (single-select) */}
//     <div>
//       <label className="block text-sm font-medium mb-1">
//         Location Option
//       </label>
//       <div className="w-full bg-white p-2 shadow rounded-md flex flex-wrap gap-x-10 gap-y-3">
//         {["remote", "hybrid", "onsite"].map((option) => (
//           <label key={option} className="inline-flex items-center text-sm">
//             <input
//               type="checkbox"
//               name="location"
//               value={option}
//               checked={formData.location.includes(option)}
//               onChange={handleCheckboxChange}
//               disabled={
//                 formData.location.length > 0 &&
//                 !formData.location.includes(option)
//               }
//               className="mr-2"
//             />
//             {option.charAt(0).toUpperCase() + option.slice(1)}
//           </label>
//         ))}
//       </div>
//       {errors.location && (
//         <p className="text-red-500 text-sm mt-1">{errors.location}</p>
//       )}
//     </div>

//     {/* Submit Button */}
//     <div className="text-left">
//       <button
//         type="submit"
//         className="bg-[#ff9d00] rounded-md px-6 py-3 text-white text-sm font-semibold hover:scale-105 hover:bg-[#000E73] transition"
//       >
//         Submit
//       </button>
//     </div>
//   </form>
// </div>
//   );
// }
