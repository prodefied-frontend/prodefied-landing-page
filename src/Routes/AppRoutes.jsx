import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedLayout from "../components/ProtectedLayout";
import ProtectedRoutes from "./ProtectedRoutes";

import Homepage from "../pages/Homepage";
import AboutUsPage from "../pages/AboutUsPage";
import Blog from "../pages/Blog";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PartnershipPage from "../pages/PartnershipPage";
import PaymentRegistrationPage from "../pages/PaymentRegistrationPage";
import PortalPage from "../pages/PortalPage";
import ProgramDetails from "../pages/ProgramDetails";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import RegistrationPage from "../pages/RegistrationPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/program" element={<ProgramDetails />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>

      {/* Protected Pages with Sidebar */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/portal" element={<PortalPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route
            path="/payment-registration"
            element={<PaymentRegistrationPage />}
          />
        </Route>
      </Route>

      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
  );
}