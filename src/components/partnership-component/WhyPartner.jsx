import React from "react";
import { partner } from "../../assets/images/partnership-images/index";
import { whyPartnerCard } from "../../constant/data";

const WhyPartner = () => {
  return (
    <div className=" w-full py-10 bg-[#E5E8FF]">
      <h3 className="text-center  text-xl sm:text-2xl font-bold mb-6">
        Why Partner With Us
      </h3>
      <div className="">
        <div className="w-[90%] mx-auto">
          <img src={partner} className="mx-auto" />
        </div>

        <div className="w-[90%] mx-auto mt-8 flex flex-wrap justify-center gap-6">
          {whyPartnerCard.map((link) => {
            const { id, title, text, img1, Timg1, img2, Timg2, img3, Timg3 } =
              link;
            return (
              <div
                key={id}
                className="w-full sm:w-[90%] md:w-[48%] xl:w-[30%] px-4 rounded-md bg-white shadow py-10"
              >
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="my-4 text-sm text-gray-700">{text}</p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <img src={img1} alt="icon1" className="w-10 h-10" />
                    <p className="text-sm">{Timg1}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={img2} alt="icon2" className="w-10 h-10" />
                    <p className="text-sm">{Timg2}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={img3} alt="icon3" className="w-10 h-10" />
                    <p className="text-sm">{Timg3}</p>
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
