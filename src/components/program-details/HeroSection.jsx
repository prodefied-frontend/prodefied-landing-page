import herobanner from "../../assets/images/program-details/hero-banner.png";
import fact1 from "../../assets/images/program-details/fact-1.png";
import fact2 from "../../assets/images/program-details/fact-2.png";
import fact3 from "../../assets/images/program-details/fact-3.png";
import fact4 from "../../assets/images/program-details/fact-4.png";

export default function HeroSection() {
  return (
    <main className="pt-[100px] md:pt-[160px]">
      {/* Hero top section */}
      <div className="flex lg:flex-row flex-col justify-between lg:mx-[8%] lg:pb-12 items-center gap-6">
        <div className="md:mt-12 mx-4 text-center lg:text-left">
          <h1 className="md:text-4xl text-[18px] text-[#333333] font-semibold leading-[140%] lg:w-[80%]">
            The Prodefied 20-Week Product Management Program
          </h1>
          <p className="md:text-[28px] text-sm text-[#4D4D4D] font-medium md:mt-6 mt-3">
            Get One Year of Product Management Experience in Just 20 Weeks
          </p>
        </div>

        <img
          src={herobanner}
          alt="Hero banner"
          className="mt-4 md:mt-0 lg:max-w-[75%] rounded-xl shadow-md"
        />
      </div>

      {/* Info section */}
      <div className="px-4 lg:px-32 bg-[#E5E8FF] py-8 md:py-16 rounded-t-3xl">
        <p className="font-normal text-[#4D4D4D] text-center md:text-[22px] text-[12px] max-w-4xl mx-auto leading-relaxed">
          Our 20-week program is designed to simulate the real working world of
          Product Management so you don’t just learn the skills, you become a
          Product Manager. Through mentorship, you’ll graduate ready to get
          hired and thrive in your role.
        </p>

        {/* Facts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-12 place-items-center">
          <img
            src={fact1}
            alt="fact 1 about prodefied"
            className="w-full max-w-[180px] rounded-lg shadow hover:scale-105 transition-transform"
          />
          <img
            src={fact2}
            alt="fact 2 about prodefied"
            className="w-full max-w-[180px] rounded-lg shadow hover:scale-105 transition-transform"
          />
          <img
            src={fact3}
            alt="fact 3 about prodefied"
            className="w-full max-w-[180px] rounded-lg shadow hover:scale-105 transition-transform"
          />
          <img
            src={fact4}
            alt="fact 4 about prodefied"
            className="w-full max-w-[180px] rounded-lg shadow hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </main>
  );
}