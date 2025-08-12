import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import PartnershipPage from "../pages/PartnershipPage";
import AboutUsPage from "../pages/AboutUsPage";
import ProgramDetails from "../pages/ProgramDetails";
import Blog from "../pages/Blog";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import HireOurTalentsPage from "../pages/HireOurTalentsPage";
import PaymentRegistrationPage from "../pages/PaymentRegistrationPage";
import ProtectedLayout from "../components/ProtectedLayout";
import PortalPage from "../pages/PortalPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/program-details" element={<ProgramDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/hire-our-talents" element={<HireOurTalentsPage />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/portal" element={<PortalPage />} />
        <Route
          path="/payment-registration"
          element={<PaymentRegistrationPage />}
        />
      </Route>

      {/* AUTH ROUTES */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
