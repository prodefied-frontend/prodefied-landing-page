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
//     "text-sm lg:text-base hover:text-[#000F84] transition cursor-pointer";

//   return (
//     <div className="w-full bg-[#E5E8FF] px-4 py-4">
//       <div className="w-full grid grid-cols-1 md:grid-cols-7 gap-4 px-4 py-4">
//         {/* Column 1 - Logo */}
//         <div className="flex flex-col space-y-1">
//           <Link to="/" className="flex items-start">
//             <img src={whiteLogo} alt="Prodefied Logo" className="h-12 w-auto" />
//           </Link>
//         </div>

//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Find Us</h3>
//           <p className="text-sm text-gray-600">
//             fdcxh <br />
//             shixbxh stcxsxhsxsv
//             <br />
//             xhvshcxscxggcfxhxihsix
//             <br />
//             ixbhsvysxsuxuxxu
//           </p>
//         </div>

//         {/* Column 2 - Links */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Quick Links</h3>
//           <Link to="/" className={footerLinkClass}>
//             Home
//           </Link>
//           <Link to="/about-us" className={footerLinkClass}>
//             About Us
//           </Link>
//           <Link to="/out-talents" className={footerLinkClass}>
//             Our Talents
//           </Link>
//           <Link to="/sign-up" className={footerLinkClass}>
//             Registration
//           </Link>
//           <Link to="/partnership" className={footerLinkClass}>
//             Partnership
//           </Link>
//         </div>

//         {/* Column 3 - Resources */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-bold text-gray-800 mb-1">Program Details</h3>
//           <p>Product Guide Book</p>
//           <p>Freebie</p>
//           <p>Certification</p>
//           <p>Hire our Talent</p>
//         </div>

//         {/* Column 4 - Extras */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Resources</h3>
//           <p>Careers</p>
//           <p>FAQs</p>
//           <Link to="/contact-us" className={footerLinkClass}>
//             Contact Us
//           </Link>
//           <Link to="/terms-conditions" className={footerLinkClass}>
//             Terms of service
//           </Link>
//           <p>Privacy policy</p>
//           <Link to="/sign-up" className={footerLinkClass}>
//             Sign Up
//           </Link>
//         </div>

//         {/* Column 5 - Social Icons */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
//           <div className="flex flex-wrap gap-3">
//             <a
//               href="mailto:prodefied@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={gmailIcon} alt="Gmail" className="h-4 w-4" />
//             </a>
//             <a
//               href="https://www.instagram.com/prodefied?igsh=dXZhYW5rdjRhc2dj"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/prodefied.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
//             </a>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
//             </a>
//             <a
//               href="https://youtube.com/@prodefied?si=8WLp9bf8rANWp4S-"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={youtubeIcon} alt="YouTube" className="h-4 w-4" />
//             </a>
//             <a
//               href="https://www.tiktok.com/@prodefied?_t=ZM-8xAVuQj6Uem&_r=1"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={tiktokIcon} alt="TikTok" className="h-4 w-4" />
//             </a>
//             <a
//               href="https://x.com/prodefied/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={xIcon} alt="X" className="h-4 w-4" />
//             </a>
//           </div>
//         </div>

//         {/* Column 6 - CTA */}
//         <div className="flex flex-col items-center space-y-4 text-center">
//           <h3 className="font-semibold text-gray-800">
//             Ready to kickstart your <br /> Product Management journey
//           </h3>
//           <Link
//             to="/"
//             className="bg-[#000F84] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#0018a8]"
//           >
//             Start Learning
//           </Link>
//         </div>
//       </div>

//       {/* Footer Bottom  */}
//       <div className="relative mt-6 px-4">
//         <img
//           src={footerBgLogo}
//           alt="Footer Logo Background"
//           className="absolute bottom-0 right-0 w-[500px] pointer-events-none"
//         />
//         <div className="max-w-7xl mx-auto text-sm text-gray-900 text-left">
//           All Rights Reserved. {new Date().getFullYear()} Prodefied.
//         </div>
//       </div>
     

       
//     </div>
//   );
// }

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
    "text-sm lg:text-base hover:text-[#000F84] transition cursor-pointer";

  return (
    <div className="w-full bg-[#E5E8FF] px-4 py-4 relative overflow-hidden min-h-[300px]">
      {/* Background logo behind everything */}
      <img
        src={footerBgLogo}
        alt="Footer Logo Background"
        className="absolute bottom-0 right-0 w-[500px] z-0 opacity-100 pointer-events-none hidden sm:block max-w-full"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-7 gap-4 px-4 py-4 relative z-10">
        {/* Column 1 - Logo */}
        <div className="flex flex-col space-y-1">
          <Link to="/" className="flex items-start">
            <img src={whiteLogo} alt="Prodefied Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Column 2 - Address */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Find Us</h3>
          <p className="text-sm text-gray-600">
            fdcxh <br />
            shixbxh stcxsxhsxsv <br />
            xhvshcxscxggcfxhxihsix <br />
            ixbhsvysxsuxuxxu
          </p>
        </div>

        {/* Column 3 - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Quick Links</h3>
          <Link to="/" className={footerLinkClass}>
            Home
          </Link>
          <Link to="/about-us" className={footerLinkClass}>
            About Us
          </Link>
          <Link to="/out-talents" className={footerLinkClass}>
            Our Talents
          </Link>
          <Link to="/sign-up" className={footerLinkClass}>
            Registration
          </Link>
          <Link to="/partnership" className={footerLinkClass}>
            Partnership
          </Link>
        </div>

        {/* Column 4 - Program Details */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-gray-800 mb-1">Program Details</h3>
          <p>Product Guide Book</p>
          <p>Freebie</p>
          <p>Certification</p>
          <p>Hire our Talent</p>
        </div>

        {/* Column 5 - Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Resources</h3>
          <p>Careers</p>
          <p>FAQs</p>
          <Link to="/contact-us" className={footerLinkClass}>
            Contact Us
          </Link>
          <Link to="/terms-conditions" className={footerLinkClass}>
            Terms of service
          </Link>
          <p>Privacy policy</p>
          <Link to="/sign-up" className={footerLinkClass}>
            Sign Up
          </Link>
        </div>

        {/* Column 6 - Social Icons */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:prodefied@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmailIcon} alt="Gmail" className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/prodefied?igsh=dXZhYW5rdjRhc2dj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/prodefied.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/@prodefied?si=8WLp9bf8rANWp4S-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube" className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@prodefied?_t=ZM-8xAVuQj6Uem&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="TikTok" className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/prodefied/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="X" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 7 - CTA */}
        <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
          <h3 className="font-semibold text-gray-800">
            Ready to kickstart your <br /> Product Management journey
          </h3>
          <Link
            to="/"
            className="bg-[#000F84] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#0018a8]"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="relative z-10 mt-6 px-4 text-sm text-gray-900 text-left max-w-7xl mx-auto">
        All Rights Reserved. {new Date().getFullYear()} Prodefied.
      </div>
    </div>
  );
}

