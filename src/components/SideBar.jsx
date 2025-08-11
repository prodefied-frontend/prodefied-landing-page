import { Link } from "react-router-dom";
import PeaceAvatar from "/peace.jpg";
import EditIcon from "../assets/icons/sidebar-icons/edit-profile-icon.svg";
import CurriCulumIcon from "../assets/icons/sidebar-icons/curriculum.svg";
import ResourcesIcon from "../assets/icons/sidebar-icons/resources.svg";
import NotificationIcon from "../assets/icons/sidebar-icons/notification.svg";
import CertificationIcon from "../assets/icons/sidebar-icons/certification.svg";
import HelpCenterIcon from "../assets/icons/sidebar-icons/help-center.svg";
import SuggestionIcon from "../assets/icons/sidebar-icons/suggestions.svg";
import LogOutIcon from "../assets/icons/sidebar-icons/logout.svg";

export default function Sidebar() {
  return (
    <aside className="w-full pt-[120px] pl-4 pr-2 space-y-14 text-[#999999] overflow-y-auto">
      {/* Profile section */}
      <div className="flex items-center gap-2">
        <img
          src={PeaceAvatar}
          alt="Peace profile avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col text-xs">
          <span className="text-[#333333] font-medium">Peace Agogha</span>
          <span className="text-[#808080]">peaceagoha@gmail.com</span>
        </div>
      </div>

      {/* Nav links */}
      <div className="space-y-2">
        <SidebarLink icon={EditIcon} text="Edit Profile" to="/portal/profile" />
        <SidebarLink
          icon={CurriCulumIcon}
          text="Curriculum"
          to="/portal/curriculum"
        />
        <SidebarLink
          icon={CurriCulumIcon}
          text="Assessment"
          to="/portal/assessment"
        />
        <SidebarLink
          icon={ResourcesIcon}
          text="Resources"
          to="/portal/resources"
        />
        <SidebarLink
          icon={NotificationIcon}
          text="Notifications"
          to="/portal/notifications"
        />
        <SidebarLink
          icon={CertificationIcon}
          text="Certification"
          to="/portal/certification"
        />
        <SidebarLink
          icon={HelpCenterIcon}
          text="Help Center"
          to="/portal/help-center"
        />
        <SidebarLink
          icon={SuggestionIcon}
          text="Suggestions"
          to="/portal/suggestions"
        />
      </div>

      {/* Logout */}

      <button className="flex items-center gap-2 cursor-pointer">
        <img src={LogOutIcon} alt="Logout Icon" />
        Logout
      </button>
    </aside>
  );
}

function SidebarLink({ icon, text, to }) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt={`${text} icon`} />
      <Link
        to={to}
        className="block hover:text-blue-500 transition-colors duration-200"
      >
        {text}
      </Link>
    </div>
  );
}

// import { Link } from "react-router-dom";
// import PeaceAvatar from '/peace.jpg';
// import EditIcon from '../assets/icons/sidebar-icons/edit-profile-icon.svg';
// import CurriCulumIcon from '../assets/icons/sidebar-icons/curriculum.svg';
// import ResourcesIcon from '../assets/icons/sidebar-icons/resources.svg';
// import NotificationIcon from '../assets/icons/sidebar-icons/notification.svg';
// import CertificationIcon from '../assets/icons/sidebar-icons/certification.svg';
// import HelpCenterIcon from '../assets/icons/sidebar-icons/help-center.svg';
// import SuggestionIcon from '../assets/icons/sidebar-icons/suggestions.svg';
// import LogOutIcon from '../assets/icons/sidebar-icons/logout.svg';

// export default function Sidebar() {
//   return (
//     <aside className="pt-[120px] pl-4 space-y-14 text-[#999999] border-2 border-t-[#FBFBFB]">
//       <div className="flex items-center gap-2">
//         <img src={PeaceAvatar} alt="Peace profile avatar" className="w-12 h-12" />
//         <div className="flex flex-col text-xs">
//           <span className="text-[#333333]">Peace Agogha</span>
//           <span className="text-[#808080]">peaceagoha@gmail.com</span>
//         </div>
//       </div>
//       <div className="space-y-2">
//         <div className="flex items-center gap-2">
//           <img src={EditIcon} alt="edit profile icon" />
//           <Link to="/portal/profile" className="block hover:text-blue-400">
//             Edit Profile
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={CurriCulumIcon} alt="Curriculum icon" />
//           <Link to="/portal/curriculum" className="block hover:text-blue-400">
//             Curriculum
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={CurriCulumIcon} alt="Assessment icon" />
//           <Link to="/portal/assessment" className="block hover:text-blue-400">
//             Assessment
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={ResourcesIcon} alt="Resources icon" />
//           <Link to="/portal/resources" className="block hover:text-blue-400">
//             Resources
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={NotificationIcon} alt="edit profile icon" />
//           <Link
//             to="/portal/notifications"
//             className="block hover:text-blue-400"
//           >
//             Notifications
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={CertificationIcon} alt="Certification icon" />
//           <Link
//             to="/portal/certification"
//             className="block hover:text-blue-400"
//           >
//             Certification
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={HelpCenterIcon} alt="Help Center icon" />
//           <Link to="/portal/help-center" className="block hover:text-blue-400">
//             Help Center
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <img src={SuggestionIcon} alt="Suggestions icon" />
//           <Link to="/portal/suggestions" className="block hover:text-blue-400">
//             Suggestions
//           </Link>
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         <img src={LogOutIcon} alt="Logout Icon" />
//         <button className="cursor-pointer" >Logout</button>
//       </div>
//       {/* <button className="cursor-pointer" >Logout</button> */}
//       {/* Add more links as needed */}
//     </aside>
//   );
// }
