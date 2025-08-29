import { Link, useNavigate } from "react-router-dom";
import EditIcon from "../assets/icons/sidebar-icons/edit-profile-icon.svg";
import CurriCulumIcon from "../assets/icons/sidebar-icons/curriculum.svg";
import HelpCenterIcon from "../assets/icons/sidebar-icons/help-center.svg";
import SuggestionIcon from "../assets/icons/sidebar-icons/suggestions.svg";
import LogOutIcon from "../assets/icons/sidebar-icons/logout.svg";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout, profileImage } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const name = user?.first_name + " " + user?.last_name || "User";
  const email = user?.email || "user@example.com";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <aside className="w-full h-full pt-[120px] pl-4 pr-2 text-[#999999] py-10">
      <div className="flex flex-col justify-between h-full">
        {/* Top section */}
        <div>
          <div className="flex items-center gap-2">
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
            <div className="flex flex-col text-xs">
              <span className="text-[#333333] font-medium">{name}</span>
              <span className="text-[#808080]">{email}</span>
            </div>
          </div>

          <nav className="space-y-3 mt-10">
            <SidebarLink icon={EditIcon} text="Profile" to="/profile" />
            <SidebarLink icon={CurriCulumIcon} text="Curriculum" to="/curriculum" />
            <SidebarLink icon={CurriCulumIcon} text="Assessment" to="/portal" />
            <SidebarLink icon={HelpCenterIcon} text="Help Center" to="/help-centre" />
            <SidebarLink icon={SuggestionIcon} text="Suggestions" to="/suggestions" />
          </nav>
        </div>

        {/* Bottom section */}
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

function SidebarLink({ icon, text, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200"
    >
      <img src={icon} alt={`${text} icon`} />
      {text}
    </Link>
  );
}
