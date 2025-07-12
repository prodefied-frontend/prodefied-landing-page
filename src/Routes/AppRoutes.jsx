import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import AboutUsPage from "../pages/AboutUsPage";
import ProgramDetails from "../pages/ProgramDetails";
import TermsConditionsPage from "../pages/TermsConditionsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/program-details" element={<ProgramDetails />} />
         <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
