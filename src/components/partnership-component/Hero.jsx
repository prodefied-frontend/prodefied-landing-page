import React from "react";
import handshake from "../../assets/images/partnership-images/handshake.jpg";

const Hero = () => {
  return (
    <div className="pt-[80px] sm:pt-[97px]">
      <div
        style={{
          backgroundImage: `url(${handshake})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center items-center h-[400px] sm:h-[500px] w-full"
      >
        <div className="w-full max-w-[540px] text-center text-white p-4 bg-opacity-50 rounded-md ">
          <p className="text-[#FF9D00] text-sm sm:text-base">Partnership</p>
          <h2 className="text-2xl sm:text-4xl mt-3 sm:mt-4 font-semibold">
            Collaborate, Invest, Empower
          </h2>
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed ">
            Join us in shaping the next generation of Product Leaders together.
            We bridge the gap between potential and performance for aspiring
            product managers across Africa.
          </p>

          <div className="flex  sm:flex-row gap-3 sm:gap-4 justify-center mt-4">
            <button className="px-6 py-2 rounded-md text-sm text-[#000F84] bg-white">
              Learn More
            </button>
            <button className="px-6 py-2 rounded-md text-sm text-white bg-[#000F84]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
