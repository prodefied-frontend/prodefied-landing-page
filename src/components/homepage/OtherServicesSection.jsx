import { useEffect, useState } from "react";

export default function OtherServicesSection() {
  const services = [
    { title: "Structured Training", color: "#DEFCDE" },
    { title: "Personalised Mentorship", color: "#FFDBDB" },
    { title: "Strategic Consultation", color: "#FFFDCC" },
  ];

  const [loaded, setLoaded] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-lg md:text-4xl font-semibold mb-8 text-center">
          Other Services We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                rounded-lg text-center px-6 py-8 flex flex-col items-center justify-center
                shadow-sm transform transition-transform duration-500 ease-out
                opacity-0 translate-y-6
                hover:scale-105 hover:shadow-lg
              `}
              style={{
                backgroundColor: service.color,
                transitionDelay: `${index * 150}ms`,
                ...(loaded && { opacity: 1, transform: "translateY(0)" }),
              }}
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