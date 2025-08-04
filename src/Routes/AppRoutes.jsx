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
import PaymentRegistrationPage from "../pages/PaymentRegistrationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/program-details" element={<ProgramDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/payment-registration" element={<PaymentRegistrationPage />} />
    </Routes>
  );
};

export default AppRoutes;
