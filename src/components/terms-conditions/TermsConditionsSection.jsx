// import React from "react";



// const SectionHeading = ({ children }) => (

//   <h3 className="hidden md:block text-xl md:text-2xl mb-3 text-[#4D4D4D] font-semibold">
//     {children}
//   </h3>
// );

// const SectionParagraph = ({ children }) => (
//   <p className="text-[#4D4D4D] text-sm md:text-lg mb-3 md:mb-5">{children}</p>
// );

// const SectionList = ({ items }) => (
//   <ul className="text-[#4D4D4D] text-sm md:text-lg mb-4 md:mb-8 space-y-2 list-disc list-inside">
//     {items.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul>
// );

// export default function TermsConditionsSection() {
//   const termsList = [
//     "Program Participation: By enrolling in Prodefied, you agree to actively participate in all program activities and complete assigned tasks.",
//     "Payment: All payments are non-refundable unless otherwise stated.",
//     "Code of Conduct: Participants are expected to maintain professionalism and respect towards mentors and peers.",
//     "Intellectual Property: All materials provided during the program are the property of Prodefied and are for personal use only.",
//   ];

//   return (
//     <div className="py-4 px-8 space-y-10 ">
//       <img
//         src="/src/assets/terms.jpg"
//         alt="Terms and Conditions"
//         className="w-full h-auto object-cover rounded-lg"
//       />

//       <SectionHeading>Privacy Policy</SectionHeading>
//       <SectionParagraph>
//         We collect personal information such as email, CV, and LinkedIn profiles
//         to facilitate the application process and program participation. This
//         information is stored securely and used solely for program-related
//         purposes. We comply with all relevant data protection laws and do not
//         share your information with third parties without your consent.
//       </SectionParagraph>

//       <SectionHeading>Terms and Conditions</SectionHeading>
//       <SectionList items={termsList} />

//       <SectionHeading>Cookie Policy</SectionHeading>
//       <SectionParagraph>
//         Your website uses cookies to enhance user experience and analyze site
//         traffic. By using our site, you consent to our use of cookies in
//         accordance with our Cookie Policy. You can manage your cookie
//         preferences through your browser settings.
//       </SectionParagraph>
//     </div>
//   );
// }

import React from "react";

const SectionHeading = ({ children }) => (
  <h3 className="hidden text-xl md:text-2xl mb-3 text-[#4D4D4D] font-semibold">
    {children}
  </h3>
);

const SectionParagraph = ({ children }) => (
  <p className="text-[#4D4D4D] text-sm md:text-lg mb-3 md:mb-5">{children}</p>
);

const SectionList = ({ items }) => (
  <ul className="text-[#4D4D4D] text-sm md:text-lg mb-4 md:mb-8 space-y-2 list-disc list-inside">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default function TermsConditionsSection() {
  const termsList = [
    "Program Participation: By enrolling in Prodefied, you agree to actively participate in all program activities and complete assigned tasks.",
    "Payment: All payments are non-refundable unless otherwise stated.",
    "Code of Conduct: Participants are expected to maintain professionalism and respect towards mentors and peers.",
    "Intellectual Property: All materials provided during the program are the property of Prodefied and are for personal use only.",
  ];

  return (
    <div className="py-4 px-8 space-y-10 ">
      <img
         src="/terms.jpg"
        alt="Terms and Conditions"
        className="w-full h-auto object-cover rounded-lg"
      />

      <SectionHeading>Privacy Policy</SectionHeading>
      <SectionParagraph>
        We collect personal information such as email, CV, and LinkedIn profiles
        to facilitate the application process and program participation. This
        information is stored securely and used solely for program-related
        purposes. We comply with all relevant data protection laws and do not
        share your information with third parties without your consent.
      </SectionParagraph>

      <SectionHeading>Terms and Conditions</SectionHeading>
      <SectionList items={termsList} />

      <SectionHeading>Cookie Policy</SectionHeading>
      <SectionParagraph>
        Your website uses cookies to enhance user experience and analyze site
        traffic. By using our site, you consent to our use of cookies in
        accordance with our Cookie Policy. You can manage your cookie
        preferences through your browser settings.
      </SectionParagraph>
    </div>
  );
}