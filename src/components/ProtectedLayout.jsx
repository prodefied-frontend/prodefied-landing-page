import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function ProtectedLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] min-h-screen">
      {/* Sidebar: visible on md and up */}
      <aside className="hidden md:block bg-[#FBFBFB]">
        <SideBar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col">
        <NavBar />
        <main className="pt-[120px] flex-1 p-4 border-red-500 border-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}





// import { Outlet } from "react-router-dom";
// import NavBar from "./NavBar";
// import SideBar from "./SideBar";


// export default function ProtectedLayout() {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar: hidden on mobile */}
//       <aside className="hidden md:block md:w-64 bg-gray-900 text-white">
//         <SideBar />
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <NavBar />
//         <main className="flex-1 p-4 ml-64">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }