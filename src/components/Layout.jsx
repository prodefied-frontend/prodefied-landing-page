import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import DraggableWhatsAppButton from "./DraggableWhatsappButon";

const Layout = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <NavBar />
      {/* FOOTER */}

      {/* DRAGGABLE WHATSAPP BUTTON */}
      <DraggableWhatsAppButton />
      {/* OUTLET FOR OTHER COMPONENTS TO SHOW */}
      <Outlet />
    </div>
  );
};

export default Layout;
