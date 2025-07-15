import React from "react";
import { Link } from "react-router-dom";
import logoBlue from "/logo-blue.svg";
import { Facebook, Mail, Instagram, Linkedin, Twitter } from "../assets/icons";

export default function Footer() {
  const footerLinkClass =
    "text-sm lg:text-base hover:text-[#000F84] transition cursor-pointer";
  return (
    <div className="w-full bg-[#E5E8FF] px-4 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-4 py-8 ">
        {/* Column 1 - Vertical Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2 text-gray-800"></h3>
          <Link to="/" className={footerLinkClass}>
            Home
          </Link>
          <Link to="/about-us" className={footerLinkClass}>
            About Us
          </Link>
          <Link to="/sign-up" className={footerLinkClass}>
            Registration
          </Link>
          <Link to="/partnership" className={footerLinkClass}>
            Partnership
          </Link>
          <Link to="/program-details" className={footerLinkClass}>
            Program Details
          </Link>
          <Link to="/blog" className={footerLinkClass}>
            Blog
          </Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2 text-gray-800"></h3>
          <p>Program Details</p>
          <p>Freebie</p>
          <p>Product Guide Book</p>
          <p>Clarity Call</p>
          <p>Hire our Talent</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2 text-gray-800"></h3>
          <p>Pitch Deck</p>
          <p>Careers</p>
          <p>Cookie Policy</p>
          <p>Privacy & Terms</p>
          <p>Brand Assets</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <h3 className="font-semibold text-gray-800"></h3>

          <Link to="/" className="flex flex-row items-center space-x-2 m-5">
            <img src={logoBlue} alt="Prodefied Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-gray-800 text-center">
            Ready to kickstart your <br /> Product Management journey
          </h3>

          <Link
            to="/"
            className="bg-[#000F84] text-white text-sm text-center px-4 py-2 rounded-lg hover:bg-[#0018a8]"
          >
            Start Learning
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center w-full  m-4">
        {/* Left-aligned icons */}
        <div className="flex space-x-3">
          <a href="#">
            <img src={Mail} alt="Gmail" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" className=" w-6 h-6" />
          </a>
          <a href="#">
            <img src={Linkedin} alt="Linkedin" className="w-6 h-6" />
          </a>

          <a href="#">
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={Twitter} alt="X" className="w-6 h-6" />
          </a>
        </div>

        {/* Centered copyright */}
        <div className="text-center flex-grow text-sm text-gray-900">
          All Rights Reserved. 2025 Prodefied,
        </div>
      </div>
    </div>
  );
}
