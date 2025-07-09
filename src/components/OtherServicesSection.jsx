export default function OtherServicesSection() {
  const services = [
    {
      title: "Structured Training",
      color: "#DEFCDE",
    },
    {
      title: "Personalised Mentorship",
      color: "#FFDBDB",
    },
    {
      title: "Strategic Consultation",
      color: "#FFFDCC",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-lg md:text-4xl font-semibold mb-8 text-center">
          Other Services We Offer
        </h2>

        {/* Grid layout for better tablet scaling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index + 1}
              className="rounded-lg text-center px-6 py-8 flex flex-col items-center justify-center shadow-sm"
              style={{ backgroundColor: service.color }}
            >
              <img
                src="/people-icon.svg"
                alt={`${service.title} Icon`}
                className="w-12 h-12 mb-4"
              />
              <p className="font-medium text-lg">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}