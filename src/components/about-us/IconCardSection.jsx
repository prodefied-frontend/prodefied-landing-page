import Icon1 from "../../assets/icons/about-icons/icon1.svg";
import Icon2 from "../../assets/icons/about-icons/icon2.svg";
import Icon3 from "../../assets/icons/about-icons/icon3.svg";
import Icon4 from "../../assets/icons/about-icons/icon4.svg";

const cardDetails = [
  { id: 1, icon: Icon1, text: "100% Remote-first" },
  { id: 2, icon: Icon2, text: "1:1 Mentorship" },
  { id: 3, icon: Icon3, text: "Progress Tracker" },
  { id: 4, icon: Icon4, text: "Career Accelerator" },
];

export default function IconCardSection() {
  return (
    <section className="bg-[#0018CC] px-6 md:px-12 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {cardDetails.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-xl flex flex-col items-center justify-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={c.icon}
              alt={c.text}
              className="w-14 h-14 mb-3"
            />
            <p className="text-sm md:text-xl font-medium text-[#1A1A1A]">
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
