import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import PartnershipPage from "../pages/PartnershipPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
