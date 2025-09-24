import hire1 from "../../assets/images/hire-our-talents/hire1.jpg";
import hire2 from "../../assets/images/hire-our-talents/hire2.jpg";
import hire3 from "../../assets/images/hire-our-talents/hire3.jpg";
import hire4 from "../../assets/images/hire-our-talents/hire4.jpg";

export default function HireHeroSection() {
  return (
    <main className="px-6 md:px-10">
      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center gap-2 mt-8">
        <h2 className="text-[#FF9D00] text-sm md:text-lg">Hire Our Talents</h2>
        <h3 className="text-[#1A1A1A] text-lg font-semibold md:text-4xl">
          Hire Product Managers Who <br /> Are Ready to Build.
        </h3>
        <p className="text-[#4D4D4D] text-sm max-w-xs mx-auto md:text-2xl md:max-w-2xl">
          Meet job-ready PMs equipped with Strategy, UX, agile, and leadership
          skills
        </p>
      </div>

      {/* Image Grid */}
      <div className="my-10">
        {/* Mobile & Tablet: Grid 2x2 */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto lg:hidden">
          {/* Left column: Image 1 & 3 */}
          <div className="flex flex-col gap-4">
            <img
              src={hire1}
              alt="Hire 1"
              className="w-full h-[150px] md:h-[260px] object-cover object-top rounded-xl"
            />
            <img
              src={hire3}
              alt="Hire 3"
              className="w-full h-[200px] md:h-[340px] object-cover rounded-xl"
            />
          </div>

          {/* Right column: Image 2 & 4 */}
          <div className="flex flex-col gap-4">
            <img
              src={hire2}
              alt="Hire 2"
              className="w-full h-[200px] md:h-[340px] object-cover rounded-xl"
            />
            <img
              src={hire4}
              alt="Hire 4"
              className="w-full h-[150px] md:h-[260px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Desktop: Row layout */}
        <div className="hidden lg:flex justify-center gap-6">
          <img
            src={hire1}
            alt="Hire 1"
            className="w-[220px] h-[200px] object-cover object-top rounded-xl"
          />
          <img
            src={hire2}
            alt="Hire 2"
            className="w-[220px] h-[300px] object-cover rounded-xl"
          />
          <img
            src={hire3}
            alt="Hire 3"
            className="w-[220px] h-[300px] object-cover rounded-xl"
          />
          <img
            src={hire4}
            alt="Hire 4"
            className="w-[220px] h-[200px] object-cover rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}