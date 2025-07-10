import Image1 from "../../assets/images/homepage/industry-pros/image1.jpg";
import Image2 from "../../assets/images/homepage/industry-pros/image2.jpg";
import Image3 from "../../assets/images/homepage/industry-pros/image3.jpg";
import Image4 from "../../assets/images/homepage/industry-pros/image4.jpg";

export default function IndustryProsSection() {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-lg font-semibold md:text-4xl mb-6">
        Learn From Industry Pros
      </h2>

      {/* Scroll on mobile, grid/flex on tablet+ */}
      <div className="block md:hidden overflow-x-auto scroll-smooth">
        <div className="flex gap-4 w-max px-1 pb-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Pro ${index + 1}`}
              className="w-64 h-80 object-cover rounded-xl shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Flex/grid for tab and desktop */}
      <div className="hidden md:flex justify-center flex-wrap gap-6 px-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pro ${index + 1}`}
            className="w-64 h-80 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </section>
  );
}