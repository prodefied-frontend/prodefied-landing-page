import React from "react";
import { partner } from "../../assets/images/partnership-images/index";
import { whyPartnerCard } from "../../constant/data";

const WhyPartner = () => {
  return (
    <div className="w-full py-10 bg-[#E5E8FF] pb-20">
      {/* Section Heading */}
      <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
        Why Partner With Us
      </h3>

      <div className="w-[90%] mx-auto">
        {/* Partner Image */}
        <div>
          <img
            src={partner}
            alt="Partnership Banner"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPartnerCard.map((link, index) => {
            const { id, title, text, img1, Timg1, img2, Timg2, img3, Timg3 } =
              link;

            return (
              <div
                key={id}
                className={`
                  rounded-lg bg-white shadow-md p-6 flex flex-col justify-between
                  transform transition-all duration-500 ease-in-out
                  hover:scale-105 hover:shadow-xl
                  ${
                    index === 2
                      ? "md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-auto"
                      : ""
                  }
                `}
              >
                {/* Card Title */}
                <h4 className="font-bold text-lg lg:text-xl text-gray-900">
                  {title}
                </h4>

                {/* Card Text */}
                <p className="my-4 text-sm lg:text-base text-gray-700">
                  {text}
                </p>

                {/* Card Features */}
                <div className="flex flex-col gap-6 mt-4">
                  <div className="flex items-center gap-4">
                    <img src={img1} alt="icon1" className="w-10 h-10" />
                    <p className="text-sm lg:text-base">{Timg1}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={img2} alt="icon2" className="w-10 h-10" />
                    <p className="text-sm lg:text-base">{Timg2}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={img3} alt="icon3" className="w-10 h-10" />
                    <p className="text-sm lg:text-base">{Timg3}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyPartner;