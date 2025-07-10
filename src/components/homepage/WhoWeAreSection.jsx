import image1 from "../../assets/images/homepage/who-we-are1.jpg";
import image2 from "../../assets/images/homepage/who-we-are2.jpg";
import image3 from "../../assets/images/homepage/who-we-are3.jpg";

export default function WhoWeAreSection() {
  return (
    <section className="bg-[#FFF5E5] py-12 px-6 md:px-12">
        <h2 className="text-center mb-4 text-xl font-semibold md:hidden">Who We Are</h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:items-center">
        {/* IMAGE SECTION */}
        <div className="grid gap-4 grid-rows-[auto_auto] md:grid-cols-[2fr_1fr_1fr] md:grid-rows-1 h-auto md:h-[400px]">
          {/* Row 1: Image1 */}
          <img
            src={image1}
            alt="team working together"
            className="w-full x object-cover rounded-lg row-start-1 row-end-2 col-span-full md:col-span-1 md:row-span-1 md:h-full"
          />

          {/* Row 2: Image2 and Image3 side by side on mobile */}
          <div className="grid grid-cols-2 gap-4 row-start-2 row-end-3 col-span-full md:contents">
            <img
              src={image2}
              alt="team working together"
              className="w-full h-[300px] object-cover rounded-lg md:h-full"
            />
            <img
              src={image3}
              alt="team working together"
              className="w-full h-[300px] object-cover rounded-lg md:h-full"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className=" text-center md:text-left space-y-2 ">
          <h2 className="hidden md:text-4xl font-semibold text-[#1A1A1A] md:block">Who We Are</h2>
          <p className="text-[#FF9D00] text-base font-medium md:text-2xl">Our goal is simple:</p>
          <p className="text-sm text-[#4D4D4D] md:text-lg">
            We help you become 70% job-ready with the clarity, structure, and
            support you need to stand out in the tech space.
          </p>
          <p className="text-base text-[#334BFF] md:text-2xl">
            We don't just teach. 
          </p>
          <p className="text-sm text-[#4D4D4D] md:text-lg">
            We build Product Managers. And we've made it
            our mission to help you become one—confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
