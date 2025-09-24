import { Link, useNavigate, useLocation } from "react-router-dom";
import EditIcon from "../assets/icons/sidebar-icons/edit-profile-icon.svg";
import CurriCulumIcon from "../assets/icons/sidebar-icons/curriculum.svg";
import HelpCenterIcon from "../assets/icons/sidebar-icons/help-center.svg";
import SuggestionIcon from "../assets/icons/sidebar-icons/suggestions.svg";
import LogOutIcon from "../assets/icons/sidebar-icons/logout.svg";
import { useAuth } from "../context/AuthContext";
import getInitials from "../utils/getInitials";

export default function Sidebar() {
  const { user, logout, profileImage } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const fullName = user?.first_name + " " + user?.last_name || "User";
  const email = user?.email || "user@example.com";
  const initials = getInitials(user);

  return (
    <aside className="w-full h-full pt-[120px] pl-4 pr-2 text-[#999999] py-10">
      <div className="flex flex-col h-full">
        {/* Top section */}
        <div className="flex items-center gap-2 mb-8">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-sm">
              {initials}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#333333]">
              {fullName}
            </span>
            <span className="text-xs text-[#808080]">{email}</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="space-y-3 my-8">
          <SidebarLink
            icon={EditIcon}
            text="Assessment"
            to="/portal"
            currentPath={location.pathname}
          />
          <SidebarLink
            icon={CurriCulumIcon}
            text="Resources"
            to="/resources"
            currentPath={location.pathname}
          />
          <SidebarLink
            icon={EditIcon}
            text="Profile"
            to="/profile"
            currentPath={location.pathname}
          />
          <SidebarLink
            icon={CurriCulumIcon}
            text="Curriculum"
            to="/curriculum"
            currentPath={location.pathname}
          />

          <SidebarLink
            icon={HelpCenterIcon}
            text="Help Center"
            to="/help-centre"
            currentPath={location.pathname}
          />
          <SidebarLink
            icon={SuggestionIcon}
            text="Suggestions"
            to="/suggestions"
            currentPath={location.pathname}
          />
        </nav>

        {/* Bottom section */}
        <div className="mt-auto pt-10 pb-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer text-[#999999] hover:text-[#000F84] transition-colors duration-200"
          >
            <img src={LogOutIcon} alt="Logout Icon" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ icon, text, to, currentPath }) {
  const isActive = currentPath === to;

  const baseClasses =
    "flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200";
  const activeClasses = "bg-[#001299] text-white";
  const inactiveClasses = "text-[#999999] hover:text-blue-500";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <img src={icon} alt={`${text} icon`} />
      {text}
    </Link>
  );
}
