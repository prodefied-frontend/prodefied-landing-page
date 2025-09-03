// import React, { useState } from "react";
// import Input from "../CustomInput";
// import { contactItems } from "../../constant/data";

// const WorkTogether = () => {
//   const [workTogetherForm, setWorkTogetherForm] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });

//   return (
//     <div className="mx-auto w-[90%] py-10">
//       <div className="flex justify-center">
//         <div className="w-[650px]">
//           <h3 className="text-2xl text-center font-semibold mb-2">
//             Let's Work Together
//           </h3>
//           <p className="mb-6 text-center">
//             If you're serious about innovation, product excellence, and Africa's
//             digital future, there's a place for you at Prodefied.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col items-start lg:flex-row gap-8 mt-5">
//         {/* Form Section */}
//         <form className="w-full lg:w-[65%] flex flex-col gap-4">
//           <Input
//             label="Full Name"
//             type="text"
//             placeholder="Full name"
//             name="fullName"
//             value={workTogetherForm.fullName}
//             onChange={(e) =>
//               setWorkTogetherForm({
//                 ...workTogetherForm,
//                 fullName: e.target.value,
//               })
//             }
//           />

//           <Input
//             label="Email"
//             type="email"
//             placeholder="name@example.com"
//             name="email"
//             value={workTogetherForm.email}
//             onChange={(e) =>
//               setWorkTogetherForm({
//                 ...workTogetherForm,
//                 email: e.target.value,
//               })
//             }
//           />

//           <Input
//             label="Message"
//             type="textarea"
//             placeholder="Type a message"
//             name="message"
//             value={workTogetherForm.message}
//             onChange={(e) =>
//               setWorkTogetherForm({
//                 ...workTogetherForm,
//                 message: e.target.value,
//               })
//             }
//             className="min-h-[200px] lg:min-h-[300px]"
//           />
//           <button
//             className="w-[60%] md:w-[30%] py-4 rounded-md mt-4 bg-[#ff9d00] text-white"
//             type="submit"
//           >
//             Let Hear From You
//           </button>
//         </form>

//         {/* Contact Info Section */}
//         <div className="w-full lg:w-[30%] p-6 rounded-lg bg-[#fff5e5] flex flex-col gap-6">
//           {contactItems.map((link) => {
//             const { id, img, title, text } = link;
//             return (
//               <div key={id} className="flex items-start gap-4">
//                 <img src={img} alt={title} className="w-[40px] h-[40px]" />
//                 <div>
//                   <h4 className="font-bold">{title}</h4>
//                   <p>{text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkTogether;

import React, { useState } from "react";
import Input from "../CustomInput";
import { contactItems } from "../../constant/data";
import emailjs from "@emailjs/browser";

const WorkTogether = () => {
  const [workTogetherForm, setWorkTogetherForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success or error message

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // 1. Send email to OWNER (Prodefied Team)
    const ownerEmail = emailjs.send(
      "service_rszkq0u", // your service ID
      "template_34knzyf", // OWNER template ID
      {
        fullName: workTogetherForm.fullName,
        email: workTogetherForm.email,
        message: workTogetherForm.message, // <-- make sure template uses {{message}}
      },
      "RHRSBPp_TOtrziZwA" // your public key
    );

    // 2. Send AUTO-REPLY email to USER
    const userEmail = emailjs.send(
      "service_rszkq0u", // same service ID
      "template_d49firm", // AUTO-REPLY template ID
      {
        fullName: workTogetherForm.fullName,
        email: workTogetherForm.email, // receiver = user’s email
        message: workTogetherForm.message, // include message if you want to echo it back
      },
      "RHRSBPp_TOtrziZwA"
    );

    // Run both in parallel
    Promise.all([ownerEmail, userEmail])
      .then(() => {
        setStatus("Message sent successfully ✅ Check your inbox.");
        setWorkTogetherForm({ fullName: "", email: "", message: "" }); // clear form
      })
      .catch(() => {
        setStatus("Something went wrong ❌ Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="mx-auto w-[90%] py-10">
      <div className="flex justify-center">
        <div className="w-[650px]">
          <h3 className="text-2xl text-center font-semibold mb-2">
            Let's Work Together
          </h3>
          <p className="mb-6 text-center">
            If you're serious about innovation, product excellence, and Africa's
            digital future, there's a place for you at Prodefied.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start lg:flex-row gap-8 mt-5">
        {/* Form Section */}
        <form
          className="w-full lg:w-[65%] flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            label="Full Name"
            type="text"
            placeholder="Full name"
            name="fullName"
            value={workTogetherForm.fullName}
            onChange={(e) =>
              setWorkTogetherForm({
                ...workTogetherForm,
                fullName: e.target.value,
              })
            }
          />

          <Input
            label="Email"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={workTogetherForm.email}
            onChange={(e) =>
              setWorkTogetherForm({
                ...workTogetherForm,
                email: e.target.value,
              })
            }
          />

          <Input
            label="Message"
            type="textarea"
            placeholder="Type a message"
            name="message"
            value={workTogetherForm.message}
            onChange={(e) =>
              setWorkTogetherForm({
                ...workTogetherForm,
                message: e.target.value,
              })
            }
            className="min-h-[200px] lg:min-h-[300px]"
          />

          <button
            className="w-[60%] md:w-[30%] py-4 rounded-md mt-4 bg-[#ff9d00] text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Let's Hear From You"}
          </button>

          {status && <p className="mt-3 text-center">{status}</p>}
        </form>

        {/* Contact Info Section */}
        <div className="w-full lg:w-[30%] p-6 rounded-lg bg-[#fff5e5] flex flex-col gap-6">
          {contactItems.map((link) => {
            const { id, img, title, text } = link;
            return (
              <div key={id} className="flex items-start gap-4">
                <img src={img} alt={title} className="w-[40px] h-[40px]" />
                <div>
                  <h4 className="font-bold">{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
