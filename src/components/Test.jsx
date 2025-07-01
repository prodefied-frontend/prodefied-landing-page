import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoBlue from "/logo-blue.svg";
import logoWhite from "/logo-white.svg";
import hamburger from "/hamburger-menu.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-40 shadow px-4 py-6 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoBlue} alt="Prodefied Logo" className="w-10 h-10" />
          <span className="-ml-1 text-lg text-[#1B1A1A]">rodefied</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm lg:text-lg"
            >
              Waitlist
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm lg:text-lg"
            >
              Contact Us
            </a>
          </li>
          <li>
            <Link to="/partnership" className="text-sm lg:text-lg">
              Partnership
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-6"
          aria-label="Toggle menu"
        >
          <img src={hamburger} alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-[#0929FF] text-white transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-6">
          <Link
            to="/"
            className="flex items-end space-x-1"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logoWhite} alt="Prodefied Logo" />
            <span className="text-xl font-semibold">rodefied</span>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center mt-20 space-y-8 text-lg">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Waitlist
          </a>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Contact Us
          </a>
          <Link
            to="/partnership"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Partnership
          </Link>
        </div>
      </div>
    </nav>
  );
}
