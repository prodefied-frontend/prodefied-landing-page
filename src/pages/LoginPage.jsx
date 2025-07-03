import SignupLeftSection from "../components/SignupLeftSection";
import LoginRightSection from "../components/LoginRightSection";

const LoginPage = () => {
  return (
    <div className="w-full h-screen  flex">
      <SignupLeftSection />
      <LoginRightSection />
    </div>
  );
};

export default LoginPage;
