import InsightResources1 from '../../assets/images/homepage/insight-resources/insight-resource1.jpg';
import InsightResources2 from '../../assets/images/homepage/insight-resources/insight-resource2.jpg';
import InsightResources3 from '../../assets/images/homepage/insight-resources/insight-resource3.jpg';

const resources = [
  {
    id: 1,
    image: InsightResources1,
    title: "5 essential skills for aspiring Product Managers",
    description:
      "Learn the key competencies that will set you apart in the competitive PM job market",
    link: "#",
  },
  {
    id: 2,
    image: InsightResources2,
    title: "How AI is Transforming Product Management",
    description:
      "Discover the latest AI tools that are revolutionizing the way products are built and managed.",
    link: "#",
  },
  {
    id: 3,
    image: InsightResources3,
    title: "Building Your First Product Portfolio",
    description:
      "A step-by-step guide to creating a portfolio that showcases your PM skills effectively",
    link: "#",
  },
];

export default function InsightResourcesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#F9FAFF]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Insights and Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {resources.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <img
              src={r.image}
              alt={r.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-[#0018CC] font-semibold text-lg md:text-xl mb-3">
                {r.title}
              </h3>
              <p className="text-[#333333] text-sm md:text-base flex-1">
                {r.description}
              </p>
              <a
                href={r.link}
                className="mt-4 text-[#FF9D00] font-semibold inline-flex items-center hover:underline"
              >
                Read More
                <img
                  src="/orange-arrow-right.svg"
                  alt="Arrow"
                  className="ml-2 w-4 h-4"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
