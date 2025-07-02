import { Link } from "react-router-dom";

import PeaceAvatar from "../assets/images/our-founders/peace.jpg";
import ObinnaAvatar from "../assets/images/our-founders/obinna.jpg";
import KehindeAvatar from "../assets/images/our-founders/kehinde.jpg";
import FavourAvatar from "../assets/images/our-founders/favour.jpg";
import Avatar1 from "../assets/images/our-founders/avatar1.jpg";
import Avatar2 from "../assets/images/our-founders/avatar2.jpg";
import Avatar3 from "../assets/images/our-founders/avatar3.jpg";
import Avatar4 from "../assets/images/our-founders/avatar4.jpg";
import Avatar5 from "../assets/images/our-founders/avatar5.jpg";

const teamDetailsOne = [
  {
    id: 1,
    image: ObinnaAvatar,
    name: "Obinna C.",
    role: "Lead Product Manager",
  },
  {
    id: 2,
    image: KehindeAvatar,
    name: "Kehinde O.",
    role: "Lead Designer",
  },
  {
    id: 3,
    image: FavourAvatar,
    name: "Favour A.",
    role: "Lead Frontend Developer",
  },
];

const teamImages = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

export default function OurFounderSection() {
  return (
    <section className="px-6 py-12 md:px-12 bg-[#FFF5E5]">
      <h2 className="text-center text-lg md:text-4xl font-semibold mb-10">
        What Drives Our Founder?
      </h2>

      <div className="flex flex-col md:flex-row md:gap-12 max-w-7xl mx-auto">
        {/* Founder Avatar + Story combined section */}
        <div className="flex-[1.5] flex flex-col md:flex-row  items-start">
          {/* Founder Avatar */}
          <div className="md:w-[35%] flex flex-col items-center  text-center md:text-left">
            <img
              src={PeaceAvatar}
              alt="Peace Avatar"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <span className="text-lg font-semibold">PEACE AGOHA</span>
            <span className="text-sm text-[#555]">Founder, Prodefied</span>
            <span className="text-sm text-[#555]">Product Manager</span>
          </div>

          {/* Founder Story */}
          <div className="flex-1 mt-6 md:mt-0 space-y-4 text-[#4D4D4D] text-sm md:text-base">
            <p>
              Peace Agoha is a Product Manager who didn't take the “typical”
              path into tech. Like many Product Managers or those aspiring to
              become one, she came from a non-traditional background. She
              dabbled in copywriting, digital marketing, content writing,
              affiliate marketing... you name it.
              <span className="text-[#000F84] cursor-pointer block md:hidden">
                Read More
              </span>
            </p>
            <p className="hidden md:block">
              She experienced the confusion, the rejections, the imposter
              syndrome, and the lack of structure that makes one break into
              product management feel overwhelming.{" "}
              <span className="text-[#000F84] cursor-pointer">Read More</span>
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-10 md:mt-0 flex-1 flex flex-col items-center gap-6">
          {/* Team Leads */}
          <div className="flex justify-center gap-2 md:gap-6 w-full overflow-hidden">
            {teamDetailsOne.map((person) => (
              <div
                key={person.id}
                className="flex-1 min-w-0 flex flex-col items-center text-center"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover mb-1"
                />
                <span className="font-semibold truncate w-full text-sm">
                  {person.name}
                </span>
                <span className="text-[#555] text-[8px] md:text-sm w-full leading-snug text-center">
                  {person.role}
                </span>
              </div>
            ))}
          </div>

          {/* Extra Team Members and Logo */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-[#555]">+20 Members</span>
            <div className="flex justify-center gap-2">
              {teamImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Team member ${index + 1}`}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ))}
            </div>
            <img
              src="/logo-blue.svg"
              alt="Prodefied Logo"
              className="w-10 h-10"
            />
          </div>

          {/* Meet the Team Link */}
          <Link
            to="/team"
            className="text-[#000F84] font-semibold hover:underline text-sm md:text-base px-4 py-2 border-[#000F84] border-[1px] rounded-md"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}

// import { Link } from "react-router-dom";

// import PeaceAvatar from "../assets/images/our-founders/peace.jpg";
// import ObinnaAvatar from "../assets/images/our-founders/obinna.jpg";
// import KehindeAvatar from "../assets/images/our-founders/kehinde.jpg";
// import FavourAvatar from "../assets/images/our-founders/favour.jpg";
// import Avatar1 from "../assets/images/our-founders/avatar1.jpg";
// import Avatar2 from "../assets/images/our-founders/avatar2.jpg";
// import Avatar3 from "../assets/images/our-founders/avatar3.jpg";
// import Avatar4 from "../assets/images/our-founders/avatar4.jpg";
// import Avatar5 from "../assets/images/our-founders/avatar5.jpg";

// const teamDetailsOne = [
//   {
//     id: 1,
//     image: ObinnaAvatar,
//     name: "Obinna C.",
//     role: "Lead Product Manager",
//   },
//   {
//     id: 2,
//     image: KehindeAvatar,
//     name: "Kehinde O.",
//     role: "Lead Designer",
//   },
//   {
//     id: 3,
//     image: FavourAvatar,
//     name: "Favour A.",
//     role: "Lead Frontend Developer",
//   },
// ];

// const teamImages = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

// export default function OurFounderSection() {
//   return (
//     <section className="px-6 py-12 md:px-12 bg-[#FFF5E5]">
//       <h2 className="text-center text-lg md:text-4xl font-semibold mb-10">
//         What Drives Our Founder?
//       </h2>

//       <div className="flex flex-col md:flex-row md:gap-12 max-w-7xl mx-auto">
//         {/* Founder Avatar and Info */}
//         <div className="flex">
//           <div className="flex flex-col items-center text-center md:w-1/3 md:text-left">
//             <img
//               src={PeaceAvatar}
//               alt="Peace Avatar"
//               className="w-40 h-40 rounded-full object-cover mb-4"
//             />
//             <span className="text-lg font-semibold">PEACE AGOHA</span>
//             <span className="text-sm text-[#555]">Founder, Prodefied</span>
//             <span className="text-sm text-[#555]">Product Manager</span>
//           </div>

//           {/* Founder Story */}
//           <div className="flex-1 mt-6 md:mt-0 space-y-4 text-[#4D4D4D] text-sm md:text-base">
//             <p>
//               Peace Agoha is a Product Manager who didn't take the “typical”
//               path into tech. Like many Product Managers or those aspiring to
//               become one, she came from a non-traditional background. She
//               dabbled in copywriting, digital marketing, content writing,
//               affiliate marketing... you name it.
//               <span className="text-[#000F84] cursor-pointer block md:hidden">
//                 Read More
//               </span>
//             </p>
//             <p className="hidden md:block">
//               She experienced the confusion, the rejections, the imposter
//               syndrome, and the lack of structure that makes one break into
//               product management feel overwhelming.{" "}
//               <span className="text-[#000F84] cursor-pointer">Read More</span>
//             </p>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="mt-10 md:mt-0 md:w-1/3 flex flex-col items-center gap-6">
//           {/* Team Leads */}
//           <div className="flex justify-center gap-2 md:gap-6 w-full overflow-hidden">
//             {teamDetailsOne.map((person) => (
//               <div
//                 key={person.id}
//                 className="flex-1 min-w-0 flex flex-col items-center text-center"
//               >
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className="w-16 h-16 rounded-full object-cover mb-1"
//                 />
//                 <span className="font-semibold truncate w-full text-sm">
//                   {person.name}
//                 </span>
//                 <span className="text-[#555] text-[8px] md:text-sm w-full leading-snug text-center">
//                   {person.role}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col items-center gap-4">
//             <span className="text-sm text-[#555]">+20 Members</span>
//             <div className="flex justify-center gap-2">
//               {teamImages.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Team member ${index + 1}`}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//               ))}
//             </div>
//             <img
//               src="/logo-blue.svg"
//               alt="Prodefied Logo"
//               className="w-10 h-10"
//             />
//           </div>

//           {/* Meet the Team */}
//           <Link
//             to="/team"
//             className="text-[#000F84] font-semibold hover:underline text-sm md:text-base px-4 py-2 border-[#000F84] border-[1px] rounded-md"
//           >
//             Meet the Team
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
