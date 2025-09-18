// Layout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import DraggableWhatsAppButton from "./DraggableWhatsappButon";

export default function Layout({ protectedMode = false }) {
  const { user, logout } = useAuth();
  const isAuthenticated = !!user;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // only matters if protectedMode
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // body scroll lock
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
    <div
      className={`min-h-screen ${
        protectedMode ? "flex bg-[#f9f9f9]" : "flex flex-col"
      }`}
    >
      {/* Desktop Sidebar for protectedMode */}
      {protectedMode && isAuthenticated && (
        <aside
          className={`hidden md:block fixed top-0 left-0 h-screen w-64 bg-[#FBFBFB] border-r border-gray-200 z-40 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </aside>
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          protectedMode && isAuthenticated && sidebarOpen ? "md:ml-64" : ""
        }`}
      >
        <NavBar
          onHamburgerClick={() => setMobileNavOpen(true)}
          onAvatarClick={() => {
            if (window.innerWidth < 768) {
              setMobileSidebarOpen(true);
            } else {
              if (protectedMode) {
                setSidebarOpen((prev) => !prev);
              } else {
                navigate("/profile");
              }
            }
          }}
        />

        <DraggableWhatsAppButton />

        <main className={`flex-1 ${protectedMode ? "pt-[120px] p-4" : ""}`}>
          <Outlet />
        </main>

        <Footer />
      </div>

      {/* Mobile Nav Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          <div className="bg-white w-3/4 max-w-xs p-4 shadow-xl h-full">
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

            {!isAuthenticated ? (
              <nav className="mt-6 flex flex-col gap-4">
                {/* Public links */}
                <button
                  onClick={() => {
                    navigate("/sign-up");
                    setMobileNavOpen(false);
                  }}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMobileNavOpen(false);
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    navigate("/about-us");
                    setMobileNavOpen(false);
                  }}
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    navigate("/program-details");
                    setMobileNavOpen(false);
                  }}
                >
                  Program Details
                </button>
                <button
                  onClick={() => {
                    navigate("/blog");
                    setMobileNavOpen(false);
                  }}
                >
                  Blog
                </button>
                <button
                  onClick={() => {
                    navigate("/partnership");
                    setMobileNavOpen(false);
                  }}
                >
                  Partnership
                </button>
                <button
                  onClick={() => {
                    navigate("/registration");
                    setMobileNavOpen(false);
                  }}
                  className="bg-[#000F84] text-white text-sm py-2 px-6 rounded-lg hover:bg-[#0018a8] mt-2"
                >
                  Apply Now
                </button>
              </nav>
            ) : (
              <nav className="mt-6 flex flex-col gap-4">
                {/* Protected links */}
                <button
                  onClick={() => {
                    navigate("/portal");
                    setMobileNavOpen(false);
                  }}
                >
                  Portal
                </button>
                <button
                  onClick={() => {
                    navigate("/profile");
                    setMobileNavOpen(false);
                  }}
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    navigate("/payment-registration");
                    setMobileNavOpen(false);
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

      {/* Mobile Sidebar Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-start">
          <div className="bg-white w-64 p-4 shadow-xl h-full">
            <div className="flex items-end justify-end">
              <button
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close sidebar"
                className="p-1 text-right"
              >
                <svg
                  className="w-8 h-8 text-gray-700 hover:text-red-500"
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
}
