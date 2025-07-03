import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <NavBar /> */}
    </div>
  );
};

export default Layout;
