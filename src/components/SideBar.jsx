import { Link, useNavigate, useLocation } from "react-router-dom";
import EditIcon from "../assets/icons/sidebar-icons/edit-profile-icon.svg";
import CurriCulumIcon from "../assets/icons/sidebar-icons/curriculum.svg";
import HelpCenterIcon from "../assets/icons/sidebar-icons/help-center.svg";
import SuggestionIcon from "../assets/icons/sidebar-icons/suggestions.svg";
import LogOutIcon from "../assets/icons/sidebar-icons/logout.svg";
import { useAuth } from "../context/AuthContext";
import getInitials from "../utils/getInitials";

export default function Sidebar({ isMobile = false, onClose }) {
  const { user, logout, loading } = useAuth(); // removed hasPaid & profileImage
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    onClose?.(); // close sidebar on mobile after logout
  };

  const fullName = user ? `${user.first_name || ""} ${user.last_name || ""}`.trim() : "User";
  const email = user?.email || "user@example.com";
  const initials = getInitials(user);

  const sidebarLinks = [
    { icon: EditIcon, text: "Home", to: "/portal" },
    { icon: CurriCulumIcon, text: "Resources", to: "/resources" },
    { icon: EditIcon, text: "Profile", to: "/profile" },
    { icon: CurriCulumIcon, text: "Curriculum", to: "/portal/curriculum" },
    { icon: HelpCenterIcon, text: "Help Center", to: "/help-centre" },
    { icon: SuggestionIcon, text: "Suggestions", to: "/suggestions" },
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <aside
      className={`
        flex flex-col
        w-64
        h-full
        pt-[120px] pl-4 pr-2
        text-[#999999]
        py-10
        overflow-y-auto
        bg-white
        ${isMobile ? "" : "hidden md:flex"} 
      `}
    >
      {/* Profile header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-sm">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#333333]">{fullName}</span>
          <span className="text-xs text-[#808080]">{email}</span>
        </div>
      </div>

      {/* Main navigation (no payment gating at frontend) */}
      <nav className="space-y-3 mb-8 flex-1">
        {sidebarLinks.map((link, idx) => (
          <SidebarLink
            key={idx}
            {...link}
            currentPath={location.pathname}
            onClick={() => onClose?.()}
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="pt-6 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer text-[#999999] hover:text-[#000F84] transition-colors duration-200"
        >
          <img src={LogOutIcon} alt="Logout Icon" />
          Logout
        </button>
      </div>
    </aside>
  );
}

function SidebarLink({ icon, text, to, currentPath, onClick }) {
  const isActive = currentPath === to;
  const baseClasses =
    "flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200";
  const activeClasses = "bg-[#001299] text-white";
  const inactiveClasses = "text-[#999999] hover:text-blue-500";

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <img src={icon} alt={`${text} icon`} />
      {text}
    </Link>
  );
}
