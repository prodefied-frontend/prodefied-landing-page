import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import DraggableWhatsAppButton from "./DraggableWhatsappButon";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <NavBar />

      {/* DRAGGABLE WHATSAPP BUTTON */}
      <DraggableWhatsAppButton />
      {/* OUTLET FOR OTHER COMPONENTS TO SHOW */}
      <Outlet />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
