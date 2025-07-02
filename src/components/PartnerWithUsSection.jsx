import { Link } from "react-router-dom";
import Image1 from "../assets/images/partner-with-us/image1.jpg";
import Image2 from "../assets/images/partner-with-us/image2.jpg";

export default function PartnerWithUsSection() {
  return (
    <section className="py-10 px-8">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-lg font-semibold md:text-4xl text-[#1A1A1A] md:hidden">
          Partner With Us
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row ">
          <div className="flex gap-4 md:gap-8 my-4">
            {[Image1, Image2].map((image, index) => (
              <img
                key={index + 1}
                src={image}
                alt=""
                className="w-32 md:w-full rounded-xl"
              />
            ))}
          </div>

          <div className="max-w-md md:text-left">
            <h3 className="hidden md:block text-4xl mb-6 font-semibold">
              Partner With Us
            </h3>
            <p className="text-[#4D4D4D] text-sm mb-4 md:text-lg md:mb-10">
              Our diverse backgrounds and extensive industry experience enable
              us to provide unparalleled insights and support.
            </p>

            <Link
              to="/"
              className="bg-[#FF9D00] text-white text-xs py-2 px-4 rounded-lg md:text-base md:py-3 md:px-6"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
