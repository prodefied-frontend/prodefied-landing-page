const workDetails = [
  {
    id: 1,
    title: "Apply",
    description: "Fill the form and make payment",
  },
  {
    id: 2,
    title: "Learn",
    description: "Attend live sessions + weekly assessments",
  },
  {
    id: 3,
    title: "Internship",
    description: "Work on real project with peers",
  },
  {
    id: 4,
    title: "Career Boost",
    description: "Coaching + CV Revamp",
  },
  {
    id: 5,
    title: "Job Ready",
    description: "Graduate with confidence and a portfolio",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-[#F9FAFF]">
      {/* HEADER */}
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#001196] mb-10">
        How It <span className="text-[#FFB236]">Works</span>
      </h2>

      {/* GRID / FLEX LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {workDetails.map((d) => (
          <div
            key={d.id}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-[3px_3px_0_#00119620] border border-[#E0E0E0] hover:shadow-[5px_5px_0_#00119640] transition-all duration-300 text-center"
          >
            <span className="text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB236] text-white mb-4">
              {d.id}
            </span>
            <h3 className="text-lg font-semibold text-[#333333] mb-2">
              {d.title}
            </h3>
            <p className="text-[#706E6E] text-sm md:text-base leading-relaxed">
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
