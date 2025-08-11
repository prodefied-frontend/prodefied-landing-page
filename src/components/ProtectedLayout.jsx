import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function ProtectedLayout() {
  return (
    <>
      <div className="min-h-screen flex">
        {/* Sidebar — fixed on desktop, hidden on mobile */}
        <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-[#FBFBFB] border-r border-gray-200">
          <SideBar />
        </aside>

        {/* Main content */}
        <div className="flex-1 md:ml-64 flex flex-col">
          <NavBar />

          <main className="pt-[120px] flex-1 p-4">
            <Outlet />

          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
