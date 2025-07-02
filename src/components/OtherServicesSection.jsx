
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
        <h2 className="text-lg md:text-4xl font-semibold mb-8">Other Services We Offer</h2>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          {services.map((service, index) => (
            <div
              key={index + 1}
              className="rounded-lg text-center px-8 py-8 w-xs md:w-sm"
              style={{ backgroundColor: service.color }}
            >
              <img src="/people-icon.svg" alt={`${service.title} Icon`} className="mx-auto mb-4" />
              <p className="font-medium text-lg">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// export default function OtherServicesSection() {
//   return (
//     <section className="py-12">
//       <div className="flex flex-col items-center">
//         <h2 className="text-lg md:text-4xl mb-8">Other Services We Offer</h2>

//         <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
//           <div className="bg-[#DEFCDE] text-center px-10 py-8 flex flex-col items-center rounded-lg w-xs">
//             <img src="/people-icon.svg" alt="" />
//             <p>Structured Training</p>
//           </div>

//           <div className="bg-[#FFDBDB] text-center px-10 py-8 flex flex-col items-center rounded-lg w-xs">
//             <img src="/people-icon.svg" alt="" />
//             <p>Structured Training</p>
//           </div>

//           <div className="bg-[#FFFDCC] text-center px-10 py-8 flex flex-col items-center w-xs">
//             <img src="/people-icon.svg" alt="" />
//             <p>Structured Training</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
