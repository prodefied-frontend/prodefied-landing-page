import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import Footer from "./Footer";

export default function ProtectedLayout() {
  const { user, logout } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // desktop toggle
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow =
      mobileNavOpen || mobileSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileNavOpen, mobileSidebarOpen]);

  useEffect(() => {
    setMobileNavOpen(false);
    setMobileSidebarOpen(false);
  }, [location.pathname]);

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
    <div className="min-h-screen flex bg-[#f9f9f9]">
      {/* Desktop Sidebar (Toggle visibility) */}
      {user && (
        <aside
          className={`hidden md:block fixed top-0 left-0 h-screen w-64 bg-[#FBFBFB] border-r border-gray-200 z-40 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </aside>
      )}

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          user && sidebarOpen ? "md:ml-64" : ""
        }`}
      >
        <NavBar
          onHamburgerClick={() => setMobileNavOpen(true)}
          onAvatarClick={() => {
            if (window.innerWidth < 768) {
              setMobileSidebarOpen(true);
            } else {
              setSidebarOpen((prev) => !prev);
            }
          }}
        />
        <main className="pt-[120px] flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* Mobile Nav drawer */}
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
            <nav className="mt-6 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  navigate("/portal");
                }}
              >
                Portal
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
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setMobileNavOpen(false)}
          />
        </div>
      )}

      {/* Mobile Sidebar drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-start">
          <div className="bg-white w-64 p-4 shadow-xl h-full transform -translate-x-0 transition-transform duration-300">
            <div className="flex items-end justify-end">
              {/* <h3 className="text-lg font-semibold">Profile</h3> */}
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