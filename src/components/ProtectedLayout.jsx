// ProtectedLayout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import Footer from "./Footer";

export default function ProtectedLayout() {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileSidebarOpen]);

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const isAuthenticated = !!user;
  const hasPaid = user?.hasPaid ?? false;

  return (
    <div className="min-h-screen flex bg-[#f9f9f9]">
      {/* Desktop Sidebar */}
      {isAuthenticated && (
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
          isAuthenticated && sidebarOpen ? "md:ml-64" : ""
        }`}
      >
        <NavBar
          onHamburgerClick={() => setMobileSidebarOpen(true)}
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

      {/* ✅ Mobile Sidebar Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-start">
          <div className="bg-white w-64 shadow-xl h-full transform translate-x-0 transition-transform duration-300">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close sidebar"
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
            <Sidebar isMobile onClose={() => setMobileSidebarOpen(false)} />
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
