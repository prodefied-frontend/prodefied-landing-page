import { Link } from "react-router-dom";
import image1 from "../../assets/images/about-us/image1.jpg";
import image2 from "../../assets/images/about-us/image2.jpg";
import image3 from "../../assets/images/about-us/image3.jpg";
import image4 from "../../assets/images/about-us/image4.jpg";
import InterPulseIcon from "../../assets/icons/about-icons/intern-pulse-icon.svg";

export default function AboutHeroSection() {
  return (
    <main className="px-6 md:px-10">
      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center gap-2 mt-8">
        <h2 className="text-[#FF9D00] text-sm md:text-lg">About Us</h2>
        <h3 className="text-[#1A1A1A] text-lg font-semibold md:text-4xl">
          Learn. Grow. Get hired.
        </h3>
        <p className="text-[#4D4D4D] text-sm max-w-xs mx-auto md:text-2xl md:max-w-2xl">
          From foundational learning to real-world application and career
          placement, we guide every step of the journey.
        </p>
        <Link
          to="/registration"
          className="bg-[#000F84] text-white text-xs px-8 py-2 mt-2 rounded-lg md:px-14 md:py-4 md:text-lg"
        >
          Apply Now
        </Link>
      </div>

      {/* Image Grid */}
      <div className="my-10">
        {/* Mobile & Tablet: Grid 2x2 */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto lg:hidden">
          {/* Left column: Image 1 & 3 */}
          <div className="flex flex-col gap-4">
            <img
              src={image1}
              alt="Image 1"
              className="w-full h-[150px] md:h-[260px] object-cover rounded-xl"
            />
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-[200px] md:h-[340px] object-cover rounded-xl"
            />
          </div>

          {/* Right column: Image 2 & 4 */}
          <div className="flex flex-col gap-4">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-[200px] md:h-[340px] object-cover rounded-xl"
            />
            <img
              src={image4}
              alt="Image 4"
              className="w-full h-[150px] md:h-[260px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Desktop: Row layout */}
        <div className="hidden lg:flex justify-center gap-6">
          <img
            src={image1}
            alt="Image 1"
            className="w-[220px] h-[200px] object-cover rounded-xl"
          />
          <img
            src={image2}
            alt="Image 2"
            className="w-[220px] h-[300px] object-cover rounded-xl"
          />
          <img
            src={image3}
            alt="Image 3"
            className="w-[220px] h-[300px] object-cover rounded-xl"
          />
          <img
            src={image4}
            alt="Image 4"
            className="w-[220px] h-[200px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Trusted by */}
      <div className="bg-[#FF9D00] py-4 md:py-8">
        <div className="flex items-center justify-center gap-2 text-white">
          <span className="text-base md:text-2xl">Trusted by:</span>
          <img src={InterPulseIcon} alt="InterPulse Logo" className="w-8 h-8" />
          <span className="text-base text-[#004AAD] font-semibold md:text-2xl" >InternPulse</span>
        </div>
      </div>
    </main>
  );
}

// import { Link } from "react-router-dom";
// import image1 from "../../assets/images/about-us/image1.jpg";
// import image2 from "../../assets/images/about-us/image2.jpg";
// import image3 from "../../assets/images/about-us/image3.jpg";
// import image4 from "../../assets/images/about-us/image4.jpg";
// import InterPulseIcon from "../../assets/icons/about-icons/intern-pulse-icon.svg";

// export default function AboutHeroSection() {
//   return (
//     <main className="px-6 md:px-10">
//       {/* Header Section */}
//       <div className="text-center flex flex-col items-center justify-center gap-2 mt-8">
//         <h2 className="text-[#FF9D00] text-sm">About Us</h2>
//         <h3 className="text-[#1A1A1A] text-lg font-semibold">
//           Learn. Grow. Get hired.
//         </h3>
//         <p className="text-[#4D4D4D] text-sm max-w-xs mx-auto">
//           From foundational learning to real-world application and career
//           placement, we guide every step of the journey.
//         </p>
//         <Link
//           to="/sign-up"
//           className="bg-[#000F84] text-white text-xs px-10 py-3 mt-2"
//         >
//           Apply Now
//         </Link>
//       </div>

//       {/* Image Grid */}
//       <div className="my-10">
//         {/* MOBILE & TABLET: 2x2 grid layout */}
//         <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto lg:hidden">
//           {/* Left column: Image 1 & 3 */}
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

//           {/* Right column: Image 2 & 4 */}
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

//         {/* DESKTOP: Single Row */}
//         <div className="hidden lg:flex justify-center gap-6">
//           <img
//             src={image1}
//             alt="Image 1"
//             className="w-[200px] h-[150px] object-cover rounded-xl"
//           />
//           <img
//             src={image2}
//             alt="Image 2"
//             className="w-[200px] h-[250px] object-cover rounded-xl"
//           />
//           <img
//             src={image3}
//             alt="Image 3"
//             className="w-[200px] h-[250px] object-cover rounded-xl"
//           />
//           <img
//             src={image4}
//             alt="Image 4"
//             className="w-[200px] h-[150px] object-cover rounded-xl"
//           />
//         </div>
//       </div>

//       {/* Trusted by Section */}
//       <div className="bg-[#FF9D00] py-4">
//         <div className="flex items-center justify-center gap-2 text-white">
//           <span>Trusted by:</span>
//           <img src={InterPulseIcon} alt="InterPulse Logo" className="w-8 h-8" />
//           <span className="font-semibold">InternPulse</span>
//         </div>
//       </div>
//     </main>
//   );
// }

// import { Link } from "react-router-dom";
// import Image1 from "../../assets/images/about-us/image1.jpg";
// import Image2 from "../../assets/images/about-us/image2.jpg";
// import Image3 from "../../assets/images/about-us/image3.jpg";
// import Image4 from "../../assets/images/about-us/image4.jpg";
// import InterPulseIcon from '../../assets/icons/about-icons/intern-pulse-icon.svg';

// const images = [Image1, Image2, Image3, Image4];

// export default function AboutHeroSection() {
//   return (
//     <main className="px-10">
//       <div className="text-center flex flex-col items-center justify-center gap-2">
//         <h2 className="text-[#FF9D00] text-sm">About Us</h2>
//         <h3 className="text-[#1A1A1A] text-lg font-semibold">Learn. Grow. Get hired.</h3>
//         <p className="text-[#4D4D4D] text-sm max-w-xs mx-auto">
//           From foundational learning to real-world application and career
//           placement, we guide every step of the journey.
//         </p>
//         <Link to="/sign-up" className="bg-[#000F84] text-white text-xs px-10 py-3">Apply Now</Link>
//       </div>

//       <div className="my-10">
//         {images.map((img, index) => (
//           <img key={index + 1} src={img} alt="" className="rounded-lg" />
//         ))}
//       </div>

//       <div className="bg-[#FF9D00] py-4">
//         <div className="flex items-center justify-center gap-2">
//           <span>Trusted by:</span>
//           <img src={InterPulseIcon} alt="" className="w-8 h-8" />
//           <span>InternPulse</span>
//         </div>
//       </div>
//     </main>
//   );
// }
