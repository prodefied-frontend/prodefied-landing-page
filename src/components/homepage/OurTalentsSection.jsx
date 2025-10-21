import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import StarIcon from "../../assets/icons/star-icon.svg";
import TalentVectorIcon from "../../assets/icons/talents-vector.svg";
import Avatar1 from "../../assets/images/homepage/our-talents/eniola.jpg";
import Avatar2 from "../../assets/images/homepage/our-talents/toby.jpg";
import Avatar3 from "../../assets/images/homepage/our-talents/harry.jpg";
import Avatar4 from "../../assets/images/homepage/our-talents/esther.jpg";
import Avatar5 from "../../assets/images/homepage/our-talents/obinna.jpg";
import EmmanuelImage from "../../assets/images/about-us/meet-team/emmanuel.jpg";
import UgommaImage from "../../assets/images/about-us/meet-team/ugomma.jpg";


import PaystackLogo from "../../assets/images/homepage/our-talents/companies/paystack.svg";
import MazeranceLogo from "../../assets/images/homepage/our-talents/companies/mazerance.svg";
import SeamlessLogo from "../../assets/images/homepage/our-talents/companies/seamless.svg";
import WakanowLogo from "../../assets/images/homepage/our-talents/companies/wakanow.svg";
import BreetLogo from "../../assets/images/homepage/our-talents/companies/breet.svg";
import TekExpertsLogo from "../../assets/images/homepage/our-talents/companies/tek.svg";

import AutoScrollRow from "../AutoScrollRow";

const testimonials = [
  {
    name: "Eniola",
    message: "Breaking into Product Management was uncertain until Prodefied. From week one, i worked on real projects that built my confidence and portfolio. Prodefied gave me the skills, experience and belief to thrive as a Product Manager",
    avatar: Avatar1,
  },
  {
    name: "Emma",
    message: "It felt like I was working at a real company.",
    avatar: EmmanuelImage,
  },
  {
    name: "Esther",
    message: "I landed my first PM role just 3 months after graduating. The capstone project was my golden ticket!",
    avatar: Avatar4,
  },
  {
    name: "Obinna",
    message: "From zero PM experience to handling real projects in 6 months - Prodefied's internship program was transformative.",
    avatar: Avatar5,
  },
  {
    name: "Ugomma",
    message: "The career coaching helped me negotiate a 40% higher salary for my first PM position.",
    avatar: UgommaImage,
  },
];

const companies = [
  { id: 1, icon: PaystackLogo, altText: "Paystack" },
  { id: 2, icon: MazeranceLogo, altText: "Mazerance" },
  { id: 3, icon: SeamlessLogo, altText: "Seamless HR" },
  { id: 4, icon: WakanowLogo, altText: "Wakanow" },
  { id: 5, icon: BreetLogo, altText: "Breet" },
  { id: 6, icon: TekExpertsLogo, altText: "Tek Experts" },
];

const videoTestimonials = [
  {
    id: 1,
    url: "https://youtube.com/shorts/3fI_DLajyeM?si=H4kd-48H0ll8w3zG",
    caption:
      "Watch how learners at Prodefied build real products, collaborate across teams, and gain job-ready experience.",
  },
  {
    id: 2,
    url: "https://youtube.com/shorts/lU8Wnvjf9WY?si=NgRnk5ry9z4f-yoQ",
    caption:
      "See how Prodefied alumni transitioned successfully into tech careers with confidence.",
  },
];

export default function OurTalentsSection() {
  const formatYouTubeUrl = (url) => {
    if (url.includes("shorts/")) {
      const videoId = url.split("shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <section className="flex flex-col">
      {/* --- TESTIMONIAL CARDS --- */}
      <div className="bg-[#E8EBFC] py-12 px-6 md:px-12 overflow-hidden text-center">
        <div className="mb-10 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold relative inline-block text-center">
            Hear from our{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Talents</span>
              <img
                src={TalentVectorIcon}
                alt=""
                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/4 w-24 sm:w-36 md:w-52 lg:w-64 z-0"
              />
            </span>
          </h2>
        </div>

        <AutoScrollRow
          items={testimonials}
          direction="left"
          speed="superfast"
          pauseOnHover={true}
          renderItem={(t) => (
            <div
              className="
        bg-white rounded-xl p-6
        w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
        flex flex-col justify-between
        shadow-md transition-all duration-300
        text-left mx-auto
        overflow-hidden
      "
              style={{
                minHeight: "260px", // ensures mobile minimum height
              }}
            >
              <div className="flex flex-col">
                <img
                  src={StarIcon}
                  alt="Star"
                  className="w-8 h-8 mb-3 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
                <p
                  className="
            text-sm sm:text-base text-[#4D4D4D]
            mb-4 italic leading-relaxed
            break-words whitespace-normal
            overflow-hidden text-ellipsis
            line-clamp-3 sm:line-clamp-4
          "
                >
                  "{t.message}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold text-[#1A1A1A]">{t.name}</span>
              </div>
            </div>
          )}
        />
      </div>

      {/* --- VIDEO TESTIMONIALS --- */}
      <div className="bg-[#FBFBFB] py-12 px-6 md:px-12 text-center">
        <h3 className="text-lg md:text-2xl font-semibold mb-8">
          More from our learners
        </h3>

        {/* Mobile: Slider */}
        <div className="md:hidden">
          <Slider
            dots={true}
            arrows={false}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {videoTestimonials.map((video) => (
              <div key={video.id} className="p-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mx-auto">
                  <div className="aspect-video w-full">
                    <iframe
                      src={formatYouTubeUrl(video.url)}
                      title={`Prodefied Learners ${video.id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <p className="text-[#4D4D4D] text-sm md:text-base text-left leading-relaxed">
                      {video.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-md overflow-hidden mx-auto"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={formatYouTubeUrl(video.url)}
                  title={`Prodefied Learners ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <p className="text-[#4D4D4D] text-sm md:text-base text-left leading-relaxed">
                  {video.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- COMPANY LOGOS --- */}
      <div className="bg-white py-16 px-6 md:px-12 text-center">
        <p className="text-base md:text-lg font-medium text-[#1A1A1A] mb-8">
          Our graduates are building careers in leading industries and top
          companies
        </p>

        <AutoScrollRow
          items={companies}
          direction="right"
          speed="superfast"
          pauseOnHover={true}
          renderItem={(c) => (
            <div className="flex justify-center items-center hover:grayscale">
              <img
                src={c.icon}
                alt={c.altText}
                className="w-28 md:w-32 lg:w-36 object-contain"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}
