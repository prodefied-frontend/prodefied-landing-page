import { useEffect, useRef } from "react";
import StarIcon from "../../assets/icons/star-icon.svg";
import Avatar1 from "../../assets/images/homepage/our-talents/eniola.jpg";
import Avatar2 from "../../assets/images/homepage/our-talents/toby.jpg";
import Avatar3 from "../../assets/images/homepage/our-talents/harry.jpg";
import Avatar4 from "../../assets/images/homepage/our-talents/toby.jpg";
import Avatar5 from "../../assets/images/homepage/our-talents/eniola.jpg";

const testimonials = [
  {
    name: "Eniola",
    message: "Excellent platform! I learned so much.",
    avatar: Avatar1,
  },
  {
    name: "Toby",
    message: "It felt like I was working at a real company.",
    avatar: Avatar2,
  },
  {
    name: "Esther",
    message: "PM now makes sense. Big thanks to Prodefied!",
    avatar: Avatar3,
  },
  {
    name: "Obinna",
    message: "Best decision I made for my career switch.",
    avatar: Avatar4,
  },
  {
    name: "Elijah",
    message: "Real-world projects, real growth.",
    avatar: Avatar5,
  },
];

export default function OurTalentsSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return;

      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
        // Reset back to beginning
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll forward
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-[#E8EBFC] py-12 px-6 md:px-12">
      <h2 className="text-center text-xl md:text-4xl font-semibold mb-8">
        Hear from our Talents
      </h2>

      <div
        ref={scrollRef}
        // className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
        className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-xl p-6 w-[280px] shadow-md"
          >
            <img
              src={StarIcon}
              alt="Star"
              className="w-14 h-14 mb-4 md:w-18 md:h-18"
            />
            <p className="text-sm text-[#4D4D4D] mb-6 italic">"{t.message}"</p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-[#1A1A1A]">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// import StarIcon from '../assets/icons/star-icon.svg';
// import Avatar1 from '../assets/images/our-talents/eniola.jpg';
// import Avatar2 from '../assets/images/our-talents/toby.jpg';
// import Avatar3 from '../assets/images/our-talents/harry.jpg';

// export default function OurTalentsSection() {
//     return (
//         <section className="bg-[#E8EBFC] py-10 px-8">
//             <h2 className="text-center text-lg md:text-4xl font-semibold">Hear from our Talents</h2>

//             <div>
//                 <div className='bg-white'>
//                     <img src={StarIcon} alt="" />
//                     <p>
//                         Excellent platform! I learned so much.
//                     </p>
//                     <div className='flex items-center'>
//                         <img src={Avatar1} alt="" className='w-12' />
//                         <span>Eniola</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
