import MissionVisionImage from "../../assets/images/about-us/image5.jpg";

export default function MissionVisionSection() {
  return (
    <section className="px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-stretch max-w-6xl mx-auto">
        {/* Left Image Block */}
        <div className="w-full md:w-1/2">
          <img
            src={MissionVisionImage}
            alt="Mission and Vision"
            className="w-full h-[400px] md:h-[580px] object-cover rounded-lg"
          />
        </div>

        {/* Right Text Block */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
          {/* Mission */}
          <div className="bg-[#FFEBCC] p-4 md:p-6 rounded-lg flex-1 h-[190px] md:h-[190px] overflow-hidden">
            <h4 className="text-lg md:text-3xl font-semibold mb-2">Our Mission</h4>
            <p className="text-sm md:text-xl text-[#4D4D4D] leading-relaxed">
              To empower the next generation of product managers through practical,
              end-to-end training that bridges the gap between learning and career
              readiness — so they can confidently lead, build, and make impact from day one.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#CCD2FF] p-4 md:p-6 rounded-lg flex-1 h-[190px] md:h-[190px] overflow-hidden">
            <h4 className="text-lg md:text-3xl font-semibold mb-2">Our Vision</h4>
            <p className="text-sm md:text-xl text-[#4D4D4D] leading-relaxed">
              To become the leading launchpad for world-class product managers across
              Africa and emerging markets — redefining how talent is trained,
              mentored, and hired in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
