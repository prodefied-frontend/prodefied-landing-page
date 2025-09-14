import { Link } from "react-router-dom";

const ProgramEnd = () => {
  return (
    <div className="mx-4 lg:mx-28 py-8 lg:py-16 grid md:grid-cols-2 gap-10 lg:gap-24 items-start">
      {/* Left Section */}
      <div>
        <h2 className="text-[#333333] font-medium text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[140%] mb-3">
          By the end of the program, You'll be:
        </h2>
        <ul className="list-disc list-inside text-[#4D4D4D] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-normal space-y-2 sm:space-y-3">
          <li>70% job-ready and rising fast</li>
          <li>Confident in your skills and your story</li>
          <li>Fluent in the tools and language of product teams</li>
          <li>Ready to enter any product interview with confidence</li>
          <li>Able to present a complete case study and portfolio</li>
          <li>Positioned as a visible, standout Product Manager</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="lg:w-[88%]">
        <h2 className="text-[#333333] font-semibold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[140%] mb-2">
          Ready to transform your career?
        </h2>
        <p className="text-[#4D4D4D] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[0.01em]">
          Join the next cohort of Prodefied and turn{" "}
          <span className="font-medium">20 weeks</span> into a Product
          Management Career.
        </p>
        <Link
          to="/registration"
          className="inline-block w-full sm:w-auto bg-[#000F84] rounded-md lg:rounded-3xl px-6 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 my-6 text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-[#000E73]"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default ProgramEnd;