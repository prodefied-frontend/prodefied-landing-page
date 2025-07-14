// HireSection.jsx
import { Link } from 'react-router-dom';
import HireImage from '../../assets/images/homepage/hire-image.jpg';

export  default function HireSection() {
  return (
    <section className="bg-[#E5E8FF] py-12 px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Mobile Heading */}
        <h2 className="text-lg text-center md:hidden font-semibold">Hire or Get Hired</h2>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
          {/* Image */}
          <img
            src={HireImage}
            alt="Hire Talent"
            className="rounded-lg w-full md:w-[50%] object-cover max-h-[400px]"
          />

          {/* Text Content */}
          <div className="text-center md:text-left md:w-[50%]">
            <h3 className="hidden md:block text-3xl md:text-4xl mb-6 font-semibold">Hire or Get Hired</h3>
            <p className="text-[#4D4D4D] text-sm md:text-lg mb-4 md:mb-8">
              Are you looking to take your team to the next level? Look no further! We have a pool of talented individuals
              ready to join your organization and contribute to your success. Don’t miss out on the opportunity to hire
              top-notch talent and elevate your business to new heights.
            </p>
            <Link
              to="/"
              className="bg-[#000F84] text-white text-xs md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}






// import { Link } from 'react-router-dom';
// import HireImage from '../assets/images/hire-image.jpg';

// export default function HireSection() {
//     return (
//         <section className="bg-[#E5E8FF] py-12 px-8">
//             <div className='flex flex-col gap-4'>
//                 <h2 className="text-lg text-center md:hidden">Hire or Get Hired</h2>

//                 <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
//                     <img src={HireImage} alt="" className='rounded-lg' />

//                     <div className='text-center md:text-left'>
//                         <h3 className='hidden md:block text-4xl mb-6 font-semibold'>Hire or Get Hired</h3>

//                         <p className='text-[#4D4D4D] text-sm mb-4 md:text-2xl md:mb-8'>
//                             Are you looking to take your team to the next level? Look no further! We have a pool of talented individuals ready to join your organization and contribute to your success. Don't miss out on the opportunity to hire top-notch talent and elevate your business to new heights.
//                         </p>

//                         <Link to='/' className='bg-[#000F84] text-white text-xs px-4 py-2 md:text-lg rounded-lg md:px-6 py-3 md:text-base'>Learn More</Link>
//                     </div>
                    
//                 </div>
//             </div>
//         </section>
//     )
// }