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
  const hasPaid = user?.hasPaid ?? false;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
      <div
        className={`fixed inset-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[#000F84] w-full h-full flex flex-col p-6 shadow-xl text-white">
          {/* Header with logo + close */}
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-xl font-bold cursor-pointer"
              onClick={() => {
                navigate("/");
                setMobileNavOpen(false);
              }}
            >
              Prodefied
            </h2>
            <button
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
              className="p-1"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Center links */}
          <nav className="flex-1 flex flex-col gap-5 justify-center items-center text-lg font-medium">
            {!isAuthenticated && (
              <>
                <button onClick={() => navigate("/sign-up")}>Sign Up</button>
                <button onClick={() => navigate("/login")}>Log In</button>
                <button onClick={() => navigate("/about-us")}>About Us</button>
                <button onClick={() => navigate("/program-details")}>
                  Our Program
                </button>
                <button onClick={() => navigate("/blog")}>Blog Posts</button>
                <button onClick={() => navigate("/partnership")}>
                  Partnership
                </button>
              </>
            )}

            {isAuthenticated && !hasPaid && (
              <>
                <button
                  onClick={async () => {
                    await handleLogout();
                    setMobileNavOpen(false);
                  }}
                >
                  Log Out
                </button>
                <button onClick={() => navigate("/about-us")}>About Us</button>
                <button onClick={() => navigate("/program-details")}>
                  Our Program
                </button>
                <button onClick={() => navigate("/blog")}>Blog Posts</button>
                <button onClick={() => navigate("/partnership")}>
                  Partnership
                </button>
              </>
            )}

            {isAuthenticated && hasPaid && (
              <>
                <button onClick={() => navigate("/portal")}>Portal</button>
                <button onClick={() => navigate("/about-us")}>About Us</button>
                <button onClick={() => navigate("/program-details")}>
                  Our Program
                </button>
                <button onClick={() => navigate("/blog")}>Blog Posts</button>
                <button onClick={() => navigate("/partnership")}>
                  Partnership
                </button>
              </>
            )}
          </nav>

          {/* Bottom button */}
          <div className="mt-6">
            {!isAuthenticated && (
              <button
                onClick={() => navigate("/registration")}
                className="w-full bg-[#FF9D00] text-white py-3 rounded-lg font-semibold"
              >
                Apply Now
              </button>
            )}

            {isAuthenticated && !hasPaid && (
              <button
                onClick={() => navigate("/registration")}
                className="w-full bg-[#FF9D00] text-white py-3 rounded-lg font-semibold"
              >
                Apply Now
              </button>
            )}

            {isAuthenticated && hasPaid && (
              <button
                onClick={async () => {
                  await handleLogout();
                  setMobileNavOpen(false);
                }}
                className="w-full bg-[#FF0000] text-white py-3 rounded-lg font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer (updated) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar panel */}
        <div className="bg-white w-72 max-w-[80%] h-full shadow-2xl flex flex-col rounded-r-2xl overflow-y-auto relative">
          {/* Close button only at top-right */}
          <button
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close sidebar"
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
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

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto p-4">
            <Sidebar />
          </div>
        </div>

        {/* Overlay */}
        <div
          className="flex-1 bg-black bg-opacity-50"
          onClick={() => setMobileSidebarOpen(false)}
        />
      </div>
    </div>
  );
}

// =====================================================================================