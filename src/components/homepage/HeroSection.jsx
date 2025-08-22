import { Link } from "react-router-dom";
import image1 from "../../assets/images/homepage/hero-image1.jpg";
import image2 from "../../assets/images/homepage/hero-image2.jpg";
import image3 from "../../assets/images/homepage/hero-image3.jpg";
import image4 from "../../assets/images/homepage/hero-image4.jpg";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  const messages = [
    "Hands on projects",
    "Real Internship Experience",
    "CV Writing",
    "Portfolio Building",
    "Brand Positioning",
  ];

  return (
    <main className="bg-white md:mt-6">
      <div className="flex flex-col items-center gap-4 px-10 md:px-20 md:flex-row md:justify-between">
        <div className="text-center flex flex-col items-start gap-3 md:text-left md:items-start max-w-lg md:gap-4">
          <div className="text-left">
            <h1 className="text-[#1A1A1A] font-semibold text-lg md:text-4xl lg:text-5xl">
              Start Your{" "}
              <span className="text-[#FF9D00]">Product Management</span> Career
              with Prodefied
            </h1>
            <div className="mt-2 md:mt-4">
              <p className="text-base md:text-lg text-[#4D4D4D]">
                We give you less theory and more of:
              </p>
              <p className="text-base md:text-xl text-[#3427FD]">
                {/* <Typewriter texts={messages} speed={100} pause={2200} /> */}
                <Typewriter texts={messages} speed={100} pause={2200} />
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-xs mb-4 md:text-lg">
            <Link
              to="/program-details"
              className="border-[1px] border-[#000F84] bg-white text-[#000F84] px-6 py-3 rounded-lg"
            >
              Learn More
            </Link>

            <Link
              to="/registration"
              className="border-[1px] text-white bg-[#000F84] px-6 py-3 rounded-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto md:mx-0">
          <div className="flex flex-col gap-4">
            <img
              src={image1}
              alt="Image 1"
              className="w-full h-[150px] object-cover rounded-xl"
            />
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-[200px] object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-[200px] object-cover rounded-xl"
            />
            <img
              src={image4}
              alt="Image 4"
              className="w-full h-[150px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#CCD2FF] min-h-10 py-4 text-center mt-6 md:mt-16">
        <p className="text-[#4D4D4D] text-[9px] md:text-base max-w-2xs md:max-w-2xl mx-auto">
          We have a solid structure, trusted instructors and mentors, and a
          supportive community built to help you grow. We 'Prodefied' real
          guidance, real connection, and real results.
        </p>
      </div>
    </main>
  );
}

















// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import image1 from "../../assets/images/homepage/hero-image1.jpg";
// import image2 from "../../assets/images/homepage/hero-image2.jpg";
// import image3 from "../../assets/images/homepage/hero-image3.jpg";
// import image4 from "../../assets/images/homepage/hero-image4.jpg";

// export default function HeroSection() {
//   const messages = [
//     "Hands on projects",
//     "Real Internship Experience",
//     "CV Writing",
//     "Portfolio Building",
//     "Brand Positioning",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % messages.length);
//     }, 3000); // change every 3s
//     return () => clearInterval(interval);
//   }, [messages.length]);

//   return (
//     <main className="bg-white md:mt-6">
//       <div className="flex flex-col items-center gap-4 px-10 md:px-20 md:flex-row md:justify-between">
//         <div className="text-center flex flex-col items-start gap-3 md:text-left md:items-start max-w-lg md:gap-4">
//           <div className="text-left">
//             <h1 className=" text-[#1A1A1A] font-semibold text-lg md:text-4xl lg:text-5xl">
//               Start Your{" "}
//               <span className="text-[#FF9D00]">Product Management</span> Career
//               with Prodefied
//             </h1>
//             <div className="mt-2 md:mt-4">
//               <p className="text-base md:text-lg text-[#4D4D4D]">
//                 We give you less theory and more of:
//               </p>
//               <p className="text-base md:text-xl text-[#3427FD] transition-all duration-500 ease-in-out">
//                 {messages[index]}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3 text-xs mb-4 md:text-lg">
//             <Link
//               to="/program-details"
//               className="border-[1px] border-[#000F84] bg-white text-[#000F84] px-6 py-3 rounded-lg"
//             >
//               Learn More
//             </Link>

//             <Link
//               to="/payment-registration"
//               className="border-[1px] text-white bg-[#000F84] px-6 py-3 rounded-lg"
//             >
//               Apply Now
//             </Link>
//           </div>
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto md:mx-0">
//           {/* Column 1 */}
//           <div className="flex flex-col gap-4">
//             <img
//               src={image1}
//               alt="Image 1"
//               className="w-full h-[150px] object-cover rounded-xl"
//             />
//             <img
//               src={image3}
//               alt="Image 3"
//               className="w-full h-[200px] object-cover rounded-xl"
//             />
//           </div>
//           {/* Column 2 */}
//           <div className="flex flex-col gap-4">
//             <img
//               src={image2}
//               alt="Image 2"
//               className="w-full h-[200px] object-cover rounded-xl"
//             />
//             <img
//               src={image4}
//               alt="Image 4"
//               className="w-full h-[150px] object-cover rounded-xl"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#CCD2FF] min-h-10 py-4 text-center mt-6 md:mt-16">
//         <p className="text-[#4D4D4D] text-[9px] md:text-base max-w-2xs md:max-w-2xl mx-auto">
//           We have a solid structure, trusted instructors and mentors, and a
//           supportive community built to help you grow. We 'Prodefied' real
//           guidance, real connection, and real results.
//         </p>
//       </div>
//     </main>
//   );
// }

// import { Link } from "react-router-dom";
// import image1 from "../../assets/images/homepage/hero-image1.jpg";
// import image2 from "../../assets/images/homepage/hero-image2.jpg";
// import image3 from "../../assets/images/homepage/hero-image3.jpg";
// import image4 from "../../assets/images/homepage/hero-image4.jpg";

// export default function HeroSection() {
//   return (
//     <main className="bg-white md:mt-6">
//       <div className="flex flex-col items-center gap-4 px-10 md:px-20 md:flex-row md:justify-between">
//         <div className="text-center flex flex-col items-start gap-3 md:text-left md:items-start max-w-lg md:gap-4">
//           <div className="text-left">
//             <h1 className=" text-[#1A1A1A] font-semibold text-lg md:text-4xl lg:text-5xl">
//               Start Your{" "}
//               <span className="text-[#FF9D00]">Product Management</span> Career
//               with Prodefied
//             </h1>
//             <div className="mt-2 md:mt-4">
//               <p className="text-base md:text-lg text-[#4D4D4D] mt">
//                 We give you less theory and more of:
//               </p>
//               {/* DYNAMICALLY CHANGING */}
//               <p className="text-base md:text-xl text-[#3427FD]">
//                 Hands on projects
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3 text-xs mb-4 md:text-lg">
//             <Link
//               to="/program-details"
//               className="border-[1px] border-[#000F84] bg-white text-[#000F84] px-6 py-3 rounded-lg"
//             >
//               Learn More
//             </Link>

//             <Link
//               to="/payment-registration"
//               className="border-[1px] text-white bg-[#000F84] px-6 py-3 rounded-lg"
//             >
//               Apply Now
//             </Link>
//           </div>
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto md:mx-0">
//           {/* Column 1 (left): Image 1 (top), Image 3 (bottom) */}
//           <div className="flex flex-col gap-4">
//             <img
//               src={image1}
//               alt="Image 1"
//               className="w-full h-[150px] object-cover rounded-xl"
//             />
//             <img
//               src={image3}
//               alt="Image 3"
//               className="w-full h-[200px] object-cover rounded-xl"
//             />
//           </div>

//           {/* Column 2 (right): Image 2 (top), Image 4 (bottom) */}
//           <div className="flex flex-col gap-4">
//             <img
//               src={image2}
//               alt="Image 2"
//               className="w-full h-[200px] object-cover rounded-xl"
//             />
//             <img
//               src={image4}
//               alt="Image 4"
//               className="w-full h-[150px] object-cover rounded-xl"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#CCD2FF] min-h-10 py-4 text-center mt-6 md:mt-16">
//         <p className="text-[#4D4D4D] text-[9px] md:text-base max-w-2xs md:max-w-2xl mx-auto">
//           We have a solid structure, trusted instructors and mentors, and a
//           supportive community built to help you grow. We 'Prodefied' real
//           guidance, real connection, and real results.
//         </p>
//       </div>
//     </main>
//   );
// }
