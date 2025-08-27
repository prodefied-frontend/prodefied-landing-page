import { Link } from "react-router-dom";
import PeaceAvatar from "/peace.jpg";
import EditIcon from "../assets/icons/sidebar-icons/edit-profile-icon.svg";
import CurriCulumIcon from "../assets/icons/sidebar-icons/curriculum.svg";
import HelpCenterIcon from "../assets/icons/sidebar-icons/help-center.svg";
import SuggestionIcon from "../assets/icons/sidebar-icons/suggestions.svg";
import LogOutIcon from "../assets/icons/sidebar-icons/logout.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }

  return (
    <aside className="w-full h-full pt-[120px] pl-4 pr-2 text-[#999999] py-10">
      {/* Make sidebar take full height and space items apart */}
      <div className="flex flex-col justify-between h-full">
        {/* Top section (profile + links) */}
        <div>
          {/* Profile */}
          <div className="flex items-center gap-2">
            <img
              src={PeaceAvatar}
              alt="Peace profile avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col text-xs">
              <span className="text-[#333333] font-medium">
                {user?.displayName || "Peace Agogha"}
              </span>
              <span className="text-[#808080]">
                {user?.email || "peaceagoha@gmail.com"}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="space-y-3 mt-10">
            <SidebarLink icon={EditIcon} text="Profile" to="/profile" />
            <SidebarLink
              icon={CurriCulumIcon}
              text="Curriculum"
              to="/curriculum"
            />
            <SidebarLink
              icon={CurriCulumIcon}
              text="Assessment"
              to="/assessment"
            />
            <SidebarLink
              icon={HelpCenterIcon}
              text="Help Center"
              to="/help-centre"
            />
            <SidebarLink
              icon={SuggestionIcon}
              text="Suggestions"
              to="/suggestions"
            />
          </nav>
        </div>

        {/* Bottom section (logout button) */}
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
