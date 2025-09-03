import React from "react";
import { Link } from "react-router-dom";

// Logo & Icons
import whiteLogo from "../assets/icons/whitelogo.svg";
import gmailIcon from "../assets/images/gmail.png";
import instagramIcon from "../assets/icons/make-us-unique/instagram logo.svg";
import linkedinIcon from "../assets/icons/make-us-unique/linkedin.svg";
import facebookIcon from "../assets/icons/Facebook.png";
import youtubeIcon from "../assets/icons/youtube.svg";
import tiktokIcon from "../assets/icons/titok.svg";
import xIcon from "../assets/icons/make-us-unique/X.svg";
import footerBgLogo from "../assets/icons/footerbackgroundlogo.svg";

export default function Footer() {
  const footerLinkClass =
    "text-sm sm:text-base hover:text-[#000F84] transition cursor-pointer";

  const socialLinks = [
    { img: gmailIcon, link: "mailto:prodefied@gmail.com" },
    {
      img: instagramIcon,
      link: "https://www.instagram.com/prodefied?igsh=dXZhYW5rdjRhc2dj",
    },
    {
      img: linkedinIcon,
      link: "https://www.linkedin.com/company/prodefied.com/",
    },
    { img: facebookIcon, link: "https://facebook.com" },
    {
      img: youtubeIcon,
      link: "https://youtube.com/@prodefied?si=8WLp9bf8rANWp4S-",
    },
    {
      img: tiktokIcon,
      link: "https://www.tiktok.com/@prodefied?_t=ZM-8xAVuQj6Uem&_r=1",
    },
    { img: xIcon, link: "https://x.com/prodefied/" },
  ];

  // Scroll to top function
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#E5E8FF] px-4 py-6 relative overflow-hidden min-h-[300px] text-center sm:text-left">
      {/* Background Logo */}
      <img
        src={footerBgLogo}
        alt="Footer Logo Background"
        className="absolute bottom-0 right-0 w-[400px] md:w-[500px] z-0 opacity-100 pointer-events-none hidden sm:block max-w-full"
      />

      {/* Responsive Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 py-4 relative z-10">
        {/* Column 1 - Logo */}
        <div className="flex flex-col space-y-2 items-center sm:items-start">
          <Link to="/" onClick={handleScrollTop} className="flex items-start">
            <img
              src={whiteLogo}
              alt="Prodefied Logo"
              className="h-12 w-auto mx-auto sm:mx-0"
            />
          </Link>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Quick Links</h3>
          <Link to="/" onClick={handleScrollTop} className={footerLinkClass}>
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={handleScrollTop}
            className={footerLinkClass}
          >
            About Us
          </Link>
          <Link
            to="/sign-up"
            onClick={handleScrollTop}
            className={footerLinkClass}
          >
            Registration
          </Link>
          <Link
            to="/partnership"
            onClick={handleScrollTop}
            className={footerLinkClass}
          >
            Partnership
          </Link>
        </div>

        {/* Column 4 - Program Details */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Program Details</h3>
          <Link
            to="/hire-our-talents"
            onClick={handleScrollTop}
            className={footerLinkClass}
          >
            Hire Our Talents
          </Link>
        </div>

        {/* Column 5 - Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Resources</h3>
          <Link
            to="/terms-conditions"
            onClick={handleScrollTop}
            className={footerLinkClass}
          >
            Terms of Service
          </Link>
          <Link
            to="/sign-up"
            onClick={handleScrollTop}
            className={footerLinkClass}
          >
            Sign Up
          </Link>
        </div>

        {/* Column 6 - Social Icons */}
        <div className="flex flex-col space-y-2 items-center sm:items-start">
          <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
          <div className="flex gap-3 items-center flex-wrap">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.img}
                  alt="icon"
                  className="h-6 w-6 sm:h-7 sm:w-7 hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 7 - CTA */}
        <div className="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left">
          <h3 className="font-semibold text-gray-800">
            Ready to kickstart your Product Management journey?
          </h3>
          <Link
            to="/program-details"
            onClick={handleScrollTop}
            className="bg-[#000F84] text-white text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-[#0018a8]"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="relative z-10 mt-6 px-4 text-sm text-gray-900 md:text-left text-center max-w-7xl mx-auto">
        All Rights Reserved. {new Date().getFullYear()} Prodefied.
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// // Logo & Icons
// import whiteLogo from "../assets/icons/whitelogo.svg";
// import gmailIcon from "../assets/images/gmail.png";
// import instagramIcon from "../assets/icons/make-us-unique/instagram logo.svg";
// import linkedinIcon from "../assets/icons/make-us-unique/linkedin.svg";
// import facebookIcon from "../assets/icons/Facebook.png";
// import youtubeIcon from "../assets/icons/youtube.svg";
// import tiktokIcon from "../assets/icons/titok.svg";
// import xIcon from "../assets/icons/make-us-unique/X.svg";
// import footerBgLogo from "../assets/icons/footerbackgroundlogo.svg";

// export default function Footer() {
//   const footerLinkClass =
//     "text-sm sm:text-base hover:text-[#000F84] transition cursor-pointer";

//   return (
//     <div className="w-full bg-[#E5E8FF] px-4 py-6 relative overflow-hidden min-h-[300px] text-center sm:text-left">
//       {/* Background Logo */}
//       <img
//         src={footerBgLogo}
//         alt="Footer Logo Background"
//         className="absolute bottom-0 right-0 w-[400px] md:w-[500px] z-0 opacity-100 pointer-events-none hidden sm:block max-w-full"
//       />

//       {/* Responsive Grid */}
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 px-4 py-4 relative z-10">
//         {/* Column 1 - Logo */}
//         <div className="flex flex-col space-y-2 items-center sm:items-start">
//           <Link to="/" className="flex items-start">
//             <img
//               src={whiteLogo}
//               alt="Prodefied Logo"
//               className="h-12 w-auto mx-auto sm:mx-0"
//             />
//           </Link>
//         </div>

//         {/* Column 2 - Address */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Find Us</h3>
//           <p className="text-sm text-gray-600">
//             fdcxhshixbx <br />
//             hstcxsxhsxsv <br />
//             ixbhsvysxsu
//           </p>
//         </div>

//         {/* Column 3 - Quick Links */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Quick Links</h3>
//           <Link to="/" className={footerLinkClass}>
//             Home
//           </Link>
//           <Link to="/about-us" className={footerLinkClass}>
//             About Us
//           </Link>
//           <Link to="/sign-up" className={footerLinkClass}>
//             Registration
//           </Link>
//           <Link to="/partnership" className={footerLinkClass}>
//             Partnership
//           </Link>
//         </div>

//         {/* Column 4 - Program Details */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Program Details</h3>
//           {/* <p>Product Guide Book</p>
//           <p>Freebie</p>
//           <p>Certification</p> */}
//           <Link to="/hire-our-talents" className={footerLinkClass}>
//             Hire Our Talents
//           </Link>
//         </div>

//         {/* Column 5 - Resources */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Resources</h3>
//           {/* <p>Careers</p>
//           <p>FAQs</p> */}
//           {/* <Link to="/contact-us" className={footerLinkClass}>
//             Contact Us
//           </Link> */}
//           <Link to="/terms-conditions" className={footerLinkClass}>
//             Terms of service
//           </Link>
//           {/* <p>Privacy policy</p> */}
//           <Link to="/sign-up" className={footerLinkClass}>
//             Sign Up
//           </Link>
//         </div>

//         {/* Column 6 - Social Icons */}
//         <div className="flex flex-col space-y-2 items-center sm:items-start">
//           <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
//           <div className="flex gap-3 items-center flex-wrap">
//             {[
//               { img: gmailIcon, link: "mailto:prodefied@gmail.com" },
//               {
//                 img: instagramIcon,
//                 link: "https://www.instagram.com/prodefied?igsh=dXZhYW5rdjRhc2dj",
//               },
//               {
//                 img: linkedinIcon,
//                 link: "https://www.linkedin.com/company/prodefied.com/",
//               },
//               { img: facebookIcon, link: "https://facebook.com" },
//               {
//                 img: youtubeIcon,
//                 link: "https://youtube.com/@prodefied?si=8WLp9bf8rANWp4S-",
//               },
//               {
//                 img: tiktokIcon,
//                 link: "https://www.tiktok.com/@prodefied?_t=ZM-8xAVuQj6Uem&_r=1",
//               },
//               { img: xIcon, link: "https://x.com/prodefied/" },
//             ].map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={item.img}
//                   alt="icon"
//                   className="h-6 w-6 sm:h-7 sm:w-7 hover:scale-110 transition-transform duration-300"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Column 7 - CTA */}
//         <div className="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left">
//           <h3 className="font-semibold text-gray-800">
//             Ready to kickstart your Product Management journey?
//           </h3>
//           <Link
//             to="/"
//             className="bg-[#000F84] text-white text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-[#0018a8]"
//           >
//             Start Learning
//           </Link>
//         </div>
//       </div>

//       {/* Footer Bottom Text */}
//       <div className="relative z-10 mt-6 px-4 text-sm text-gray-900 md:text-left text-center max-w-7xl mx-auto">
//         All Rights Reserved. {new Date().getFullYear()} Prodefied.
//       </div>
//     </div>
//   );
// }
