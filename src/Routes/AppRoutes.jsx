import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
<<<<<<< HEAD
import PartnershipPage from "../pages/PartnershipPage";
=======
import AboutUsPage from "../pages/AboutUsPage";
import ProgramDetails from "../pages/ProgramDetails";
import TermsConditionsPage from "../pages/TermsConditionsPage";
>>>>>>> 4c77a7004ee8e6d47a78bfb8b165f8da39b082ec

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
        <Route path="/partnership" element={<PartnershipPage />} />
=======
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/program-details" element={<ProgramDetails />} />
         <Route path="/terms-conditions" element={<TermsConditionsPage />} />
>>>>>>> 4c77a7004ee8e6d47a78bfb8b165f8da39b082ec
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
