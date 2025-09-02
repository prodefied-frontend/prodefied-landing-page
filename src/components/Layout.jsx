import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import Footer from "./Footer";
import DraggableWhatsAppButton from "./DraggableWhatsappButon";
import Sidebar from "./SideBar";

const Layout = () => {
  const { user, logout } = useAuth();
  const isAuthenticated = !!user;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // lock body scroll when any drawer is open
  useEffect(() => {
    document.body.style.overflow =
      mobileNavOpen || mobileSidebarOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileNavOpen, mobileSidebarOpen]);

  // close drawers on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileNavOpen(false);
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar
        onHamburgerClick={() => setMobileNavOpen(true)}
        onAvatarClick={() => {
          // Match ProtectedLayout mobile behavior
          if (window.innerWidth < 768) {
            setMobileSidebarOpen(true);
          } else {
            // On desktop for public routes, no persistent sidebar.
            // Take user to profile (keeps UX intuitive).
            navigate("/profile");
          }
        }}
      />

      <DraggableWhatsAppButton />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Mobile Nav drawer (now shared, same pattern as ProtectedLayout) */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          <div className="bg-white w-3/4 max-w-xs p-4 shadow-xl h-full transform translate-x-0 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
                className="p-1"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* If NOT authenticated -> show public links (previous content preserved) */}
            {!isAuthenticated ? (
              <nav className="mt-6 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/sign-up");
                  }}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/login");
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/about-us");
                  }}
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/program-details");
                  }}
                >
                  Program Details
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/blog");
                  }}
                >
                  Blog
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/partnership");
                  }}
                >
                  Partnership
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/payment-registration");
                  }}
                  className="bg-[#000F84] text-white text-sm py-2 px-6 rounded-lg hover:bg-[#0018a8] mt-2 inline-block text-left"
                >
                  Apply Now
                </button>
              </nav>
            ) : (
              // Authenticated -> mirror ProtectedLayout mobile nav items
              <nav className="mt-6 flex flex-col gap-4">
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/portal");
                  }}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/payment-registration");
                  }}
                >
                  Payments
                </button>
                <hr className="my-2" />
                <button
                  className="font-medium"
                  onClick={async () => {
                    setMobileNavOpen(false);
                    await handleLogout();
                  }}
                >
                  Logout
                </button>
              </nav>
            )}
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setMobileNavOpen(false)}
          />
        </div>
      )}

      {/* Mobile Sidebar drawer (Profile/Sidebar) — same component and style as ProtectedLayout */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-start">
          <div className="bg-white w-64 p-4 shadow-xl h-full transform -translate-x-0 transition-transform duration-300">
            <div className="flex items-center justify-between">
              {/* <h3 className="text-lg font-semibold">Profile</h3> */}
              <button
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close sidebar"
                className="p-1"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <Sidebar />
            </div>
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
