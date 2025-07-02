import Image1 from '../assets/images/industry-pros/image1.jpg';
import Image2 from '../assets/images/industry-pros/image2.jpg';
import Image3 from '../assets/images/industry-pros/image3.jpg';
import Image4 from '../assets/images/industry-pros/image4.jpg';

export default function IndustryProsSection() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-lg font-semibold md:text-4xl mb-6">
        Learn From Industry Pros
      </h2>

      <div className="flex md:items-center md:justify-center gap-4 overflow-x-auto pb-4 px-1 md:px-0 scroll-smooth">
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pro ${index + 1}`}
            className="flex-shrink-0 w-64 h-80 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </section>
  );
}


// import Image1 from '../assets/images/industry-pros/image1.jpg';
// import Image2 from '../assets/images/industry-pros/image2.jpg';
// import Image3 from '../assets/images/industry-pros/image3.jpg';
// import Image4 from '../assets/images/industry-pros/image4.jpg';


// export default function IndustryProsSection() {
//     return (
//         <section className='p-8'>
//             <h2 className='text-center text-lg font-semibold md:text-4xl mb-8'>Learn From Industry pros</h2>

//             <div className='flex items-center gap-4 overflow-x-auto'>
//                 {[Image1, Image2, Image3, Image4].map((image, index) => (
//                     <img key={index + 1} src={image} alt="" />
//                 ))}
//             </div>
//         </section>
//     )
// }