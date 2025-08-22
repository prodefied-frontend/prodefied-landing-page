import {Link} from 'react-router-dom'
import signuplogo from "../assets/images/signuplogo.png";


const SignupLeftSection = () => {
  return (
    //   npm run dev
    // {/* Left Section */}
    <div className="relative w-1/2 bg-[#000F84] hidden lg:flex items-center justify-center overflow-hidden">
      {/* Top-right circle */}
      <div className="absolute top-[-30px] right-[-30px] w-[100px] h-[100px] bg-[#FF9D00] rounded-full z-0"></div>
      {/* Bottom-left circle */}
      <div className="absolute bottom-[-30px] left-[-30px] w-[100px] h-[100px] bg-[#FF9D00] rounded-full z-0"></div>

      {/* Blurred Background Image */}
      <img
        src={signuplogo} // Replace with actual path
        alt="Background model"
        className="absolute w-[300px] bottom-[-228px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover object-center  opacity-80 z-0"
      />

      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-xl p-10 max-w-[420px] text-white">
        <h2 className="text-sm mb-2">
          Welcome to <span className="text-[#FF9D00] text-lg font-bold"><Link to='/'>Prodefied</Link></span>
        </h2>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Ready to launch your career in Product Management?
        </h1>
        <p className="text-xs mb-6">
          Learn. Build. Ship. With real teams. Real products. Real impact.
        </p>
        <p className="text-sm mt-[200px]">
          Already have an account?{" "}
          <Link to='/login'><span className="underline cursor-pointer">Sign in</span></Link>
          
        </p>
      </div>
    </div>
  );
};

export default SignupLeftSection;
