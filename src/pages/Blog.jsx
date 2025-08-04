import PaginatedGrid from "../components/blog/PaginationSection";
import BlogImage2 from "../assets/images/blog/blog1.png";
import BlogImage1 from "../assets/images/blog/blog2.png";

// Base templates
const baseCards = [
  {
    link: "/",
    image: BlogImage1,
    title: "Discover the story behind the launch of Prodefied",
    description: "From minimal ideas to building a vibrant learning community, the journey, vision, mission of Prodefied as it steps into a world of tech education on Product Management",
    date: "July 2, 2025",
  },
  {
    link: "/",
    image: BlogImage2,
    title: "The struggles of learning Product Management",
    description: "Challenges aspiring product managers face from understanding complex frameworks to balancing learning with real-life demands.",
    date: "July 1, 2025",
  },
];

// Generate 20 cards by repeating
const sampleData = Array.from({ length: 20 }, (_, i) => {
  const base = baseCards[i % baseCards.length]; // Alternate between 0 and 1
  return base;
});


const Blog = () => {
    return (
        <main className="pt-[74px] md:pt-[97px]">
            <div className="w-full md:px-24 px-8 md:py-8 py-4 md:text-[36px] text-[18px] font-medium leading-[140%] bg-[#FFEBCC] text-[#333333]">Blog Posts</div>
            <PaginatedGrid data={sampleData} />
        </main>
    );
};

export default Blog;