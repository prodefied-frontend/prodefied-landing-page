import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoBlue from "/logo-blue.svg";
import { useAuth } from "../context/AuthContext";
import getInitials from "../utils/getInitials";
import ContactUsPopUp from "./ContactUsPopUp";

export default function NavBar({ onHamburgerClick, onAvatarClick }) {
  const { user, profileImage, logout } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const navigate = useNavigate();

  // contact dropdown state + wrapper ref
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactWrapperRef = useRef(null);

  useEffect(() => {
    // ensure normal body scroll on route change (keeps your prior behavior)
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  useEffect(() => {
    // close dropdown on ESC or click outside
    function onKey(e) {
      if (e.key === "Escape") setIsContactOpen(false);
    }
    function onDocClick(e) {
      if (
        isContactOpen &&
        contactWrapperRef.current &&
        !contactWrapperRef.current.contains(e.target)
      ) {
        setIsContactOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [isContactOpen]);

  const navLinkClass =
    "text-sm md:text-base hover:text-[#000F84] transition whitespace-nowrap cursor-pointer";

  const initials = getInitials(user);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  function handleHamburger() {
    onHamburgerClick?.();
  }

  function handleAvatar() {
    if (isAuthenticated) {
      onAvatarClick?.();
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow px-4 py-4 md:py-6 md:px-8 text-[#000000]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {isAuthenticated && (
            <button
              onClick={handleHamburger}
              className="md:hidden"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6 text-[#1B1A1A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          <Link
            to="/"
            className={`items-center ${
              isAuthenticated ? "hidden md:flex" : "flex"
            }`}
          >
            <img src={logoBlue} alt="Prodefied Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold text-[#1B1A1A] -ml-1">
              rodefied
            </span>
          </Link>
        </div>

        {/* Center nav links */}
        <div className="hidden md:flex flex-wrap flex-1 justify-center items-center gap-4 md:gap-5 lg:gap-6">
          {!isAuthenticated ? (
            <>
              <Link to="/sign-up" className={navLinkClass}>
                Sign Up
              </Link>
              <Link to="/login" className={navLinkClass}>
                Log In
              </Link>
              <Link to="/about-us" className={navLinkClass}>
                About Us
              </Link>
              <Link to="/program-details" className={navLinkClass}>
                Our Program
              </Link>
              <Link to="/blog" className={navLinkClass}>
                Blog
              </Link>
              <Link to="/partnership" className={navLinkClass}>
                Partnership
              </Link>

              {/* Contact wrapper: relative so popup is anchored here */}
              <div ref={contactWrapperRef} className="relative">
                <button
                  onClick={() => setIsContactOpen((s) => !s)}
                  className={navLinkClass}
                  aria-expanded={isContactOpen}
                  aria-haspopup="true"
                >
                  Contact Us
                </button>

                {/* Dropdown anchored under the button */}
                {isContactOpen && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50">
                    <ContactUsPopUp onClose={() => setIsContactOpen(false)} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className={navLinkClass}>
                Logout
              </button>
              <Link to="/about-us" className={navLinkClass}>
                About Us
              </Link>
              <Link to="/program-details" className={navLinkClass}>
                Our Program
              </Link>
              <Link to="/blog" className={navLinkClass}>
                Blog
              </Link>
              <Link to="/partnership" className={navLinkClass}>
                Partnership
              </Link>
              <Link to="/portal" className={navLinkClass}>
                Portal
              </Link>

              {/* Contact wrapper: relative so popup is anchored here */}
              <div ref={contactWrapperRef} className="relative">
                <button
                  onClick={() => setIsContactOpen((s) => !s)}
                  className={navLinkClass}
                  aria-expanded={isContactOpen}
                  aria-haspopup="true"
                >
                  Contact Us
                </button>

                {/* Dropdown anchored under the button */}
                {isContactOpen && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50">
                    <ContactUsPopUp onClose={() => setIsContactOpen(false)} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!isAuthenticated && (
            <Link
              to="/registration"
              className="hidden md:flex bg-[#000F84] text-white text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-[#0018a8] transition"
            >
              Apply Now
            </Link>
          )}

          {isAuthenticated && (
            <button
              onClick={handleAvatar}
              aria-label="Open profile menu"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#000F84] text-white font-bold overflow-hidden"
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span>{initials}</span>
              )}
            </button>
          )}

          {!isAuthenticated && (
            <button
              onClick={handleHamburger}
              className="md:hidden ml-6 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#1B1A1A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

// --------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
