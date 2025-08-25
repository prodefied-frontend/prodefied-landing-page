// import React from "react";
// import Faq from "./Faq";

// const cards = [
//   {
//     question: "What does the program include?",
//     answer:
//       "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation.",
//   },
//   {
//     question:
//       "How is this program different from others Product Management programs?",
//     answer:
//       "The program offers practical video learning with theoretical documentations, quizzes, tasks and assignments. including live-mentorship sessions, with real time internship offering collaborative projects and job readiness preparation. Our program consists of three phases which includes the following: 1. Learning   2. Internship   3. Career Acceleration    Read our program details here",
//   },
//   {
//     question: "What are the payment options?",
//     answer:
//       "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation.",
//   },
//   {
//     question: "What support is available during the program?",
//     answer:
//       "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation.",
//   },
//   {
//     question: "Will i get a job after completing the program?",
//     answer:
//       "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation",
//   },
// ];

// function FaqSection() {
//   return (
//     <section className="w-full px-4 py-16">
//       <h1 className="text-center tracking-widest font-bold mb-6 text-[1.6rem] ">
//         Frequently Asked Questions
//       </h1>
//       <section className="grid grid-cols-1 gap-4">
//         {cards.map((card, index) => (
//           <Faq key={index} {...card} />
//         ))}
//       </section>
//     </section>
//   );
// }

// export default FaqSection;

import React from "react";
import { Link } from "react-router-dom";
import Faq from "./Faq";

const cards = [
  {
    question: "What does the program include?",
    answer: (
      <p>
        The program offers live sessions, hands-on tasks, peer feedback, and job
        readiness preparation.
      </p>
    ),
  },
  {
    question:
      "How is this program different from others Product Management programs?",
    answer: (
      <p>
        The program offers practical video learning with theoretical
        documentation, quizzes, tasks and assignments, including live-mentorship
        sessions, with real-time internship offering collaborative projects and
        job readiness preparation. Our program consists of three phases: 1.
        Learning 2. Internship 3. Career Acceleration.{" "}
        <Link to="/program-details" className="text-blue-600 hover:underline">
          Read our program details here
        </Link>
      </p>
    ),
  },
  {
    question: "What are the payment options?",
    answer: (
      <p>
        Payments can be made via Paystack through virtual or physical card and
        also direct transfer
      </p>
    ),
  },
  {
    question: "What support is available during the program?",
    answer: (
      <p>
        Student receive guidance from experienced mentors, peer feedback an
        access to a supportive community.
      </p>
    ),
  },
  {
    question: "Will I get a job after completing the program?",
    answer: (
      <p>
        We don’t promise jobs, no one ethically can. But we offer job placement
        support, mentorship, an portfolio development to increase your chances
        significantly.
      </p>
    ),
  },
];

function FaqSection() {
  return (
    <section className="w-full px-4 py-16">
      <h1 className="text-center tracking-widest font-bold mb-6 text-[1.6rem] ">
        Frequently Asked Questions
      </h1>
      <section className="grid grid-cols-1 gap-4">
        {cards.map((card, index) => (
          <Faq key={index} {...card} />
        ))}
      </section>
    </section>
  );
}

export default FaqSection;

