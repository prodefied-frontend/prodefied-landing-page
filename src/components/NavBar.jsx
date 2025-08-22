import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoBlue from "/logo-blue.svg";
import { useAuth } from "../context/AuthContext";

export default function NavBar({ onHamburgerClick, onAvatarClick }) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const navigate = useNavigate();

  // ensure no scroll lock leftovers from older versions
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [location.pathname]);

  const navLinkClass =
    "text-sm md:text-base hover:text-[#000F84] transition whitespace-nowrap";

  const initials =
    (user?.displayName && user.displayName[0]?.toUpperCase()) ||
    (user?.email && user.email[0]?.toUpperCase()) ||
    "U";

  function handleHamburger() {
    // Always delegate to parent (public or protected layout)
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
          {/* Mobile - Authenticated: hamburger */}
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

          {/* Logo:
             - If authenticated, hide on mobile to match your previous intent.
             - If not authenticated, show on all breakpoints.
          */}
          <Link
            to="/"
            className={`items-center ${isAuthenticated ? "hidden md:flex" : "flex"}`}
          >
            <img src={logoBlue} alt="Prodefied Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold text-[#1B1A1A] -ml-1">
              rodefied
            </span>
          </Link>
        </div>

        {/* Center nav links (tablet/desktop only) */}
        <div className="hidden md:flex flex-wrap flex-1 justify-center items-center gap-4 md:gap-5 lg:gap-6">
          {!isAuthenticated ? (
            <>
              <Link to="/sign-up" className={navLinkClass}>
                Sign Up
              </Link>
              <Link to="/login" className={navLinkClass}>
                Log In
              </Link>
              <Link to="/about" className={navLinkClass}>
                About Us
              </Link>
              <Link to="/program" className={navLinkClass}>
                Program Details
              </Link>
              <Link to="/blog" className={navLinkClass}>
                Blog
              </Link>
              <Link to="/partnership" className={navLinkClass}>
                Partnership
              </Link>
            </>
          ) : (
            <>
              <Link to="/portal" className={navLinkClass}>
                Portal
              </Link>
              {/* <Link to="/profile" className={navLinkClass}>
                Profile
              </Link> */}
              <Link to="/about" className={navLinkClass}>
                About Us
              </Link>
              <Link to="/program" className={navLinkClass}>
                Program Details
              </Link>
              <Link to="/blog" className={navLinkClass}>
                Blog
              </Link>
              <Link to="/partnership" className={navLinkClass}>
                Partnership
              </Link>
              <Link to="/" className={navLinkClass}>
                Logout
              </Link>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!isAuthenticated && (
            <Link
              to="/payment-registration"
              className="hidden md:flex bg-[#000F84] text-white text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-[#0018a8] transition"
            >
              Apply Now
            </Link>
          )}

          {isAuthenticated && (
            <button
              onClick={handleAvatar}
              aria-label="Open profile menu"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#000F84] text-white font-bold"
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span>{initials}</span>
              )}
            </button>
          )}

          {/* Mobile - Not Authenticated: Hamburger now delegates to parent */}
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
      {/* NOTE: Removed NavBar-owned mobile drawer entirely.
               Parents (Layout/ProtectedLayout) now render drawers. */}
    </nav>
  );
}
