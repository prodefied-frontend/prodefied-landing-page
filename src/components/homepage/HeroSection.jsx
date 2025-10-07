import { Link } from "react-router-dom";
import image1 from "../../assets/images/homepage/hero-image1.jpg";
import image2 from "../../assets/images/homepage/hero-image2.jpg";
import image3 from "../../assets/images/homepage/hero-image3.jpg";
import image4 from "../../assets/images/homepage/hero-image4.jpg";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  const messages = [
    "Hands-on training",
    "Real-world experience",
    "Career accelerator program",
  ];

  return (
    <main className="bg-white md:mt-6">
      <div className="flex flex-col items-center gap-6 px-6 md:px-20 md:flex-row md:justify-between">
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-lg gap-3 md:gap-4">
          <div>
            <h1 className="text-[#1A1A1A] font-semibold text-2xl md:text-4xl lg:text-[56px] leading-snug">
              Your{" "}
              <span className="text-[#FF9D00]">Product Management</span>{' '}
              journey starts here
            </h1>

            <div className="mt-2 md:mt-4">
              <p className="text-base md:text-lg text-[#4D4D4D]">
                Get job-ready in 20 weeks with
              </p>
              <p className="text-base md:text-xl text-[#3427FD]">
                <Typewriter texts={messages} speed={100} pause={2200} />
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-row justify-center md:justify-start gap-3 mt-3 md:mt-4">
            <Link
              to="/program-details"
              className="border border-[#001299] bg-white text-[#001299] px-5 py-2.5 rounded-lg text-sm md:text-lg text-center hover:underline transition"
            >
              Learn More
            </Link>

            <Link
              to="/registration"
              className="border border-[#001299] text-white bg-[#001299] px-5 py-2.5 rounded-lg text-sm md:text-lg text-center hover:bg-[#0019cc] transition"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto md:mx-0 mt-6 md:mt-0">
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

      {/* FOOTER STRIP */}
      <div className="bg-[#CCD2FF] min-h-10 py-4 text-center mt-8 md:mt-16">
        <p className="text-[#4D4D4D] text-xs md:text-base max-w-xs md:max-w-2xl mx-auto">
          We have a solid structure, trusted instructors and mentors, and a
          supportive community built to help you grow. We 'Prodefied' real
          guidance, real connection, and real results.
        </p>
      </div>
    </main>
  );
}
