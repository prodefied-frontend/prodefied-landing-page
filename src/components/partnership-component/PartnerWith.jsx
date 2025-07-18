import React from "react";
import { first, second, third } from "../../assets/images/partnership-images";

const PartnerWith = () => {
  return (
    <div className="px-4 py-15 md:px-10 lg:px-20 bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
        {/* Image Group */}
        <div className="flex gap-4 w-full lg:w-1/2 justify-center">
          <img
            src={first}
            alt="img1"
            className="w-[90px] md:w-[110px] lg:w-[180px] h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
          />
          <img
            src={second}
            alt="img2"
            className="w-[90px] md:w-[110px] lg:w-[140px] h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
          />
          <img
            src={third}
            alt="img3"
            className="w-[90px] md:w-[110px] lg:w-[140px] h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="max-w-[400px] text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Partner with Prodefied
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Through{" "}
              <span className="text-[#FF9D00] font-medium">
                Structured Training, Personalised Mentorship, and Strategic
                Consultation
              </span>
              , we prepare talents to lead with clarity, confidence, and
              real-world experiences.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              If you're an investor, recruiter, team leader, or ecosystem
              builder passionate about Africa's tech future, let's build
              something impactful together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWith;
