import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoBlue from "/logo-blue.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navLinkClass = "text-sm lg:text-base hover:text-[#000F84] transition cursor-pointer";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow px-4 py-6 md:px-8 text-[#000000]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img src={logoBlue} alt="Prodefied Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold text-[#1B1A1A] -ml-1">rodefied</span>
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-6">
          <Link to="/sign-up" className={navLinkClass}>Sign Up</Link>
          <Link to="/login" className={navLinkClass}>Log In</Link>
          <Link to="/about-us" className={navLinkClass}>About Us</Link>
          <Link to="/program-details" className={navLinkClass}>Program Details</Link>
          <Link to="/blog" className={navLinkClass}>Blog</Link>
          <Link to="/partnership" className={navLinkClass}>Partnership</Link>
          <Link to="/contact-us" className={navLinkClass}>Contact Us</Link>
        </div>

        {/* Apply Now Button */}
        <div className="hidden md:flex justify-end flex-shrink-0">
          <Link to="/sign-up" className="bg-[#000F84] text-white text-sm lg:text-base py-3 px-6 rounded-lg hover:bg-[#0018a8] transition">
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6 text-[#1B1A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#1B1A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`md:hidden fixed top-0 right-0 w-full min-h-screen bg-[#0929FF] text-white z-50 transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header row with logo and close icon */}
        <div className="flex items-center justify-between px-4 pt-6">
          <Link to="/" className="flex items-end space-x-1" onClick={() => setMenuOpen(false)}>
            <img src="/logo-white.svg" alt="Prodefied Logo" className="w-10 h-10" />
            <span className="text-xl font-semibold -ml-2.5">rodefied</span>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setMenuOpen(false)}
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>

        {/* Mobile nav links + Apply Now */}
        <div className="flex flex-col justify-center min-h-[calc(90vh-72px)] py-12 px-6">
          <div className="flex flex-col items-center space-y-6 text-lg">
            <Link to="/sign-up" onClick={() => setMenuOpen(false)} className="cursor-pointer">Sign Up</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="cursor-pointer">Log In</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)} className="cursor-pointer">About Us</Link>
            <Link to="/program-details" onClick={() => setMenuOpen(false)} className="cursor-pointer">Program Details</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className="cursor-pointer">Blog</Link>
            <Link to="/partnership" onClick={() => setMenuOpen(false)} className="cursor-pointer">Partnership</Link>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)} className="cursor-pointer">Contact Us</Link>
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/sign-up" onClick={() => setMenuOpen(false)} className="bg-white text-[#0929FF] text-sm py-2 px-6 rounded-xl hover:bg-[#f0f4ff] transition">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}