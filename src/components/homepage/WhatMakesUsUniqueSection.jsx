import Image1 from "../../assets/images/homepage/make-us-unique1.jpg";
import Icon1 from "../../assets/icons/make-us-unique/icon1.svg";
import Icon2 from "../../assets/icons/make-us-unique/icon2.svg";
import Icon3 from "../../assets/icons/make-us-unique/icon3.svg";
import Icon4 from "../../assets/icons/make-us-unique/icon4.svg";
import Icon5 from "../../assets/icons/make-us-unique/icon5.svg";
import Icon6 from "../../assets/icons/make-us-unique/icon6.svg";
import Icon7 from "../../assets/icons/make-us-unique/icon7.svg";
import Icon8 from "../../assets/icons/make-us-unique/icon8.svg";

const features = [
  {
    icon: Icon1,
    title: "Your Growth Is Our Product",
    description:
      "We treat your growth like a product. We build, iterate, and win with you.",
  },
  {
    icon: Icon2,
    title: "Flexible Learning",
    description:
      "Learn Product Management your way, at your pace, just like it's done in the real world.",
  },
  {
    icon: Icon3,
    title: "From Zero to Job-Ready in 5 months",
    description:
      "In just 20 weeks, we fast-track your journey from beginner to job-ready.",
  },
  {
    icon: Icon4,
    title: "Built By People Who've Been There ",
    description:
      "Our program is built by real PMs who know the struggle and the solution.",
  },
    {
    icon: Icon5,
    title: "You Graduate Scrum Certified",
    description:
      "Finish with a globally recognized Scrum certification that proves you're ready.",
  },
  {
    icon: Icon6,
    title: "We Train You Beyond Your Role",
    description:
      "We don't stop at Product Manager we help you build your brand and voice in the industry.",
  },
  {
    icon: Icon7,
    title: "Partnerships That Open Doors",
    description:
      "Our network connects you with real internships, jobs, and visibility opportunities.",
  },
  {
    icon: Icon8,
    title: "Community That Believes in You",
    description:
      "You're not just learning, you're joining a tribe that supports and believes in you.",
  },
];

export default function WhatMakesUsUniqueSection() {
  return (
    <section className="py-4 px-8 space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-center text-xl md:text-4xl font-semibold mb-4">
          What Makes Us Unique
        </h2>
        <img
          src={Image1}
          alt=""
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Features */}
      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex md:flex-row items-start gap-4 p-4 rounded-lg bg-white shadow-sm"
          >
            <img
              src={feature.icon}
              alt=""
              className="w-10 h-10 flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-[#1A1A1A]">{feature.title}</p>
              <p className="text-[#4D4D4D]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className=" text-[#0929FF] text-base md:text-2xl">Join Our Community Here</a>
    </section>
  );
}

// import Image1 from "../assets/images/make-us-unique1.jpg";
// import Icon1 from "../assets/icons/make-us-unique/icon1.svg";
// import Icon2 from "../assets/icons/make-us-unique/icon2.svg";
// import Icon3 from "../assets/icons/make-us-unique/icon3.svg";
// import Icon4 from "../assets/icons/make-us-unique/icon4.svg";

// export default function WhatMakesUsUniqueSection() {
//   return (
//     <section className="py-14 px-8">
//       <div>
//         <h2 className="text-center text-2xl md:text-4xl font-semibold mb-4">
//           What Makes Us Unique
//         </h2>
//         <img
//           src={Image1}
//           alt=""
//           className="w-full h-auto object-cover rounded-lg"
//         />
//       </div>

//       <div className="flex flex-col md:flex-row">
//         <div className="flex items-start p-2 gap-2">
//           <img src={Icon1} alt="" />
//           <div>
//             <p>Your Growth Is Our Product</p>
//             <p>
//               We treat your growth like a product. We build, iterate, and win
//               with you.
//             </p>
//           </div>
//         </div>

//         <div className="flex items-start p-2 gap-2">
//           <img src={Icon2} alt="" />
//           <div>
//             <p>Your Growth Is Our Product</p>
//             <p>
//               We treat your growth like a product. We build, iterate, and win
//               with you.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
