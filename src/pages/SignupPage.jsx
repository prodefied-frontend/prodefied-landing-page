import SignupLeftSection from "../components/SignupLeftSection";
import SignupRightSection from "../components/SignupRightSection";

const SignupPage = () => {
  return (
    <div className="w-full h-screen  flex">
      <SignupLeftSection />
      <SignupRightSection />
    </div>
  );
};

export default SignupPage;
