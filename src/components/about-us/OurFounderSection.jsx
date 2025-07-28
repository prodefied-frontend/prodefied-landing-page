import PeaceImage from "../../assets/images/about-us/peace.jpg";

export default function OurFounderSection() {
  return (
    <section className="py-10 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image Section */}
        <div className="relative w-full md:w-[45%]">
          <img
            src={PeaceImage}
            alt="Peace Agoha"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-md shadow-md max-w-[90%]">
            <span className="block text-sm font-semibold text-gray-600">
              Founder, Prodefied
            </span>
            <span className="block text-lg font-bold text-gray-900">
              PEACE AGOHA
            </span>
            <span className="block text-sm text-gray-700">Product Manager</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[55%] text-gray-800 space-y-4">
          <h2 className="text-2xl font-bold mb-2">What drives our Founder?</h2>

          <p>
            Peace Agoha is a Product Manager who didn't take the “typical” path
            into tech. Like many aspiring PMs, she came from a non-traditional
            background—dabbling in copywriting, digital marketing, affiliate
            marketing... you name it.
          </p>

          <p>
            She experienced confusion, rejections, imposter syndrome, and a lack
            of structure— all of which made breaking into product management
            feel overwhelming.
          </p>

          <p>
            That journey is the heartbeat of what we're building: a solution
            designed around your real struggles. Most Product Management
            programs focus too much on theory and leave you asking, “What now?”
            once the course ends.
          </p>

          <p>
            She believes every learner deserves more than content—they deserve
            clarity, guidance, support, and transformation.
          </p>

          <p>
            In Prodefied, we don't just teach you product management—we walk
            with you until you're confident enough to own it. Because you don't
            become a product manager by completing a course—you grow into it.
          </p>
        </div>
      </div>
    </section>
  );
}

// import PeaceImage from "../../assets/images/about-us/peace.jpg";

// export default function OurFounderSection() {
//   return (
//     <section>
//       <div className="flex flex-col md:flex-row">
//         <div>
//           <img src={PeaceImage} alt="Peace Image" />
//           <div>
//             <span>Founder, Prodefied</span>
//             <span>PEACE AGOHA</span>
//             <span>Product Manager</span>
//           </div>
//         </div>

//         <div>
//           <h2>What drives our Founder?</h2>

//           <p>
//             Peace Agoha is a Product Manager who didn't take “typical” path into
//             tech. Like many Product Managers or those aspiring to become one,
//             she came from a non-traditional background. She dabbled in
//             copywriting, digital marketing, content writing, affiliate
//             marketing... you name it.
//           </p>

//           <p>
//             She experienced confusion, the rejections, the imposter syndrome,
//             and the lack of structure that makes one break into product
//             management feeling overwhelming.
//           </p>

//           <p>
//             That journey is the heartbeat of what we're building, a solution
//             designed around your real struggles. Most Product Management
//             education programs focus too much on theory and leave you asking,
//             “What now?” once the course ends. She believes every learner
//             deserves more than just content. They deserve clarity, guidance,
//             support, and transformation.
//           </p>

//           <p>
//             She wants to meet people where they are and say: “Here's how you can
//             win with what you already know.” In Prodefied, we don't just teach
//             you product management, we walk with you until you're confident
//             enough to own it. Because you don't become a product manager by
//             completing a course you grow into it.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
