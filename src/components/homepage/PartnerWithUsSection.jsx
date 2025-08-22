import { Link } from "react-router-dom";
import Image1 from "../../assets/images/homepage/partner-with-us/image1.jpg";
import Image2 from "../../assets/images/homepage/partner-with-us/image2.jpg";

export default function PartnerWithUsSection() {
  return (
    <section className="py-10 px-6 md:px-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-semibold md:text-4xl text-[#1A1A1A] md:hidden mb-4">
          Partner With Us
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 w-full max-w-6xl">
          {/* Image Grid */}
          <div className="flex gap-4 md:w-1/2 md:gap-6 justify-center">
            {[Image1, Image2].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Partner Image ${index + 1}`}
                className="w-32 h-32 md:w-full md:h-[220px] object-cover rounded-xl"
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 md:text-left">
            <h3 className="hidden md:block text-3xl lg:text-4xl font-semibold mb-6">
              Partner With Us
            </h3>
            <p className="text-[#4D4D4D] text-sm md:text-base lg:text-lg mb-4 md:mb-8">
              Our diverse backgrounds and extensive industry experience enable
              us to provide unparalleled insights and support.
            </p>

            <Link
              to="/partnership"
              className="bg-[#FF9D00] text-white text-xs md:text-base py-2 px-4 md:py-3 md:px-6 rounded-lg"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}