import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import ProtectedRoutes from "./ProtectedRoutes";

import Homepage from "../pages/Homepage";
import AboutUsPage from "../pages/AboutUsPage";
// import Blog from "../pages/Blog";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PartnershipPage from "../pages/PartnershipPage";
import PaymentRegistrationPage from "../pages/PaymentRegistrationPage";
import PortalPage from "../pages/PortalPage";
import ProfilePage from "../pages/ProfilePage";
import HelpCentrePage from "../pages/HelpCentrePage";
import SuggestionsPage from "../pages/SuggestionsPage";
import ProgramDetails from "../pages/ProgramDetails";
import TermsConditionsPage from "../pages/TermsConditionsPage";
import HireOurTalentsPage from "../pages/HireOurTalentsPage";
import RegistrationPage from "../pages/RegistrationPage";
import PaymentSuccessPage from "../components/payment-registration/PaymentSuccessPage";
import CurriculumPage from "../pages/CurriculumPage";
import ResourcesPage from "../pages/ResourcesPage";

// ✅ Import the reset-password pages correctly
import PasswordResetRequest from "../pages/password-reset/PasswordResetRequest";
import PasswordResetConfirm from "../pages/password-reset/PasswordResetConfirm";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/program-details" element={<ProgramDetails />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/hire-our-talents" element={<HireOurTalentsPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />

        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="/payment-registration"
          element={<PaymentRegistrationPage />}
        />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />

      </Route>

      {/* Protected Pages with Sidebar */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout protectedMode />}>
          <Route path="/portal" element={<PortalPage />} />
          <Route path="/portal/curriculum" element={<CurriculumPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/help-centre" element={<HelpCentrePage />} />
          <Route path="/suggestions" element={<SuggestionsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Route>
      </Route>

      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />

      {/* RESET PASSWORD FLOW */}
      <Route path="/reset-password" element={<PasswordResetRequest />} />
      <Route
        path="/reset-password/confirm"
        element={<PasswordResetConfirm />}
      />
    </Routes>
  );
}