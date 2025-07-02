import { Link } from "react-router-dom";
import image1 from "../assets/images/hero-image1.jpg";
import image2 from "../assets/images/hero-image2.jpg";
import image3 from "../assets/images/hero-image3.jpg";
import image4 from "../assets/images/hero-image4.jpg";
import CallIcon from "../assets/icons/phone.svg";
import BookmarkIcon from "../assets/icons/book.svg";

export default function HeroSection() {
  return (
    <main className="bg-white md:mt-6">
      <div className="flex flex-col items-center gap-4 px-10 md:px-20 md:flex-row md:justify-between">
        <div className="text-center flex flex-col items-start gap-3 md:text-left md:items-start max-w-lg md:gap-4">
          <div className="text-left">
            <h1 className=" text-[#1A1A1A] font-semibold text-lg md:text-4xl lg:text-5xl">
              Start Your{" "}
              <span className="text-[#FF9D00]">Product Management</span> Career
              with Prodefied
            </h1>
            <div className="mt-2 md:mt-4">
              <p className="text-base md:text-lg text-[#4D4D4D] mt">
                We give you less theory and more of:
              </p>
              <p className="text-base md:text-xl text-[#3427FD]">
                Hands on projects
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-xs mb-4 md:text-lg">
            <Link
              to="/learn-more"
              className="border-[1px] border-[#000F84] bg-white text-[#000F84] px-6 py-3 rounded-lg"
            >
              Learn More
            </Link>

            <Link
              to="/learn-more"
              className="border-[1px] text-white bg-[#000F84] px-6 py-3 rounded-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto md:mx-0">
          {/* Column 1 (left): Image 1 (top), Image 3 (bottom) */}
          <div className="flex flex-col gap-4">
            <img
              src={image1}
              alt="Image 1"
              className="w-full h-[150px] object-cover rounded-xl"
            />
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-[200px] object-cover rounded-xl"
            />
          </div>

          {/* Column 2 (right): Image 2 (top), Image 4 (bottom) */}
          <div className="flex flex-col gap-4">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-[200px] object-cover rounded-xl"
            />
            <img
              src={image4}
              alt="Image 4"
              className="w-full h-[150px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#CCD2FF] min-h-10 py-4 text-center mt-6 md:mt-16">
        <p className="text-[#4D4D4D] text-[9px] md:text-base max-w-2xs md:max-w-2xl mx-auto">
          We have a solid structure, trusted instructors and mentors, and a
          supportive community built to help you grow. We 'Prodefied' real
          guidance, real connection, and real results.
        </p>
      </div>

      <div className="py-8 px-8 md:py-12 md:px-20 flex flex-col md:flex-row gap-6 md:justify-between md:items-center ">
        <div className="text-[#4D4D4D] text-left md:max-w-md">
          <p className="block mb-2 text-lg font-semibold md:text-2xl ">
            Still unsure about becoming a Product Manager in 2025?
          </p>
          <p className="text-sm md:text-lg">
            Don't guess. Let's talk about journey, your strengths, and if this
            path fits your goals.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-16">
          <div className="flex flex-col items-center gap-2 md:gap-4 border-[1px] border-[#B3B3B3] p-2 py-4 rounded-sm md:px-8">
            <img
              src={BookmarkIcon}
              alt="Call Icon"
              className="w-14 h-14 md:w-20 md:h-20"
            />
            <span className="text-xs md:text-base text-white bg-[#FF9D00] border-[1px] border-[#FF9D00] px-2 py-2  md:px-8 md:py-4 rounded-md">
              Product Guide Book
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-4 border-[1px] border-[#B3B3B3] p-2 py-4 rounded-sm md:px-8">
            <img
              src={CallIcon}
              alt="Bookmark Book Icon"
              className="w-14 h-14 md:w-20 md:h-20"
            />
            <span className="text-xs md:text-base text-[#000F84] border-[1px] border-[#000F84] px-4 py-2 md:px-8 md:py-4 rounded-md">
              Free Clarity Call
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
