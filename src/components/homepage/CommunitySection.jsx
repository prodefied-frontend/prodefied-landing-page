import CommunityImage from "../../assets/images/homepage/community-image.jpg";
import ArrowWhite from '../../assets/icons/portal-page/arrow-white.svg'

export default function CommunitySection() {
  return (
    <section className="flex flex-col items-center text-center px-6 md:px-12 lg:px-20 py-16 bg-[#F8FAFF]">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001299] mb-4">
        Community That Believes in You
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8">
        You're not just learning, you're joining a tribe that supports and believes in you.
      </p>

      {/* Image */}
      <img
        src={CommunityImage}
        alt="Community group"
        className="w-full max-w-3xl rounded-2xl shadow-[6px_6px_0_#001196] mb-8 object-cover"
      />

      {/* Button */}
      <a
        href="https://chat.whatsapp.com/Jstx0VkYxxbHdtkhypDFxz?mode=ac_t"
        className="flex items-center gap-2 bg-[#001299] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0019cc] transition-colors duration-300"
      >
        Join our community here
        <img src={ArrowWhite} alt="" />
      </a>
    </section>
  );
}