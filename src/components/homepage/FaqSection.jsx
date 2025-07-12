import React from "react";
import Faq from "./Faq";

const cards = [
  {
    question: "What does the program include?",
    answer:
      "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation.",
  },
  {
    question:
      "How is this program different from others Product Management programs?",
    answer:
      "The program offers practical video learning with theoretical documentations, quizzes, tasks and assignments. including live-mentorship sessions, with real time internship offering collaborative projects and job readiness preparation. Our program consists of three phases which includes the following: 1. Learning   2. Internship   3. Career Acceleration    Read our program details here ",
  },
  {
    question: "What are the payment options?",
    answer:
      "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation.",
  },
  {
    question: "What support is available during the program?",
    answer:
      "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation.",
  },
  {
    question: "Will i get a job after completing the program?",
    answer:
      "The program offers live sessions, hands-on tasks, peer feedback, and job readiness preparation",
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
