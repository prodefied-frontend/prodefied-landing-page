import { Link } from "react-router-dom";
import PeaceAvatar from '/peace.jpg';

export default function Sidebar() {
  return (
    <aside className="pt-[120px] pl-4 space-y-14 text-[#999999] ">
      <div className="flex items-center gap-2">
        <img src={PeaceAvatar} alt="Peace profile avatar" className="w-12 h-12" />
        <div className="flex flex-col text-xs">
          <span className="text-[#333333]">Peace Agogha</span>
          <span className="text-[#808080]">peaceagoha@gmail.com</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link to="/portal/profile" className="block hover:text-blue-400">
            Edit Profile
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link to="/portal/curriculum" className="block hover:text-blue-400">
            Curriculum
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link to="/portal/assessment" className="block hover:text-blue-400">
            Assessment
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link to="/portal/resources" className="block hover:text-blue-400">
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link
            to="/portal/notifications"
            className="block hover:text-blue-400"
          >
            Notifications
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link
            to="/portal/certification"
            className="block hover:text-blue-400"
          >
            Certification
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link to="/portal/help-center" className="block hover:text-blue-400">
            Help Center
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <img src="/edit-profile-icon.svg" alt="edit profile icon" />
          <Link to="/portal/suggestions" className="block hover:text-blue-400">
            Suggestions
          </Link>
        </div>
      </div>
      <div>Logout</div>
      {/* Add more links as needed */}
    </aside>
  );
}
