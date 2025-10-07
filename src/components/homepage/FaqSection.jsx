// FaqSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import FaqItem from "./FaqItem"; // renamed for clarity

const faqData = [
  {
    question: "What does the program include?",
    answer: (
      <p className="text-gray-700 leading-relaxed">
        The program offers live sessions, hands-on tasks, peer feedback, and job
        readiness preparation.
      </p>
    ),
  },
  {
    question: "How is this program different from other Product Management programs?",
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p>
          Our program combines practical video learning with theoretical documentation, quizzes, tasks, and assignments. You also get live mentorship sessions, real-time internship projects, and job readiness preparation.
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Learning Phase</li>
          <li>Internship Phase</li>
          <li>Career Acceleration Phase</li>
        </ol>
        <p className="mt-2">
          <Link
            to="/program-details"
            className="text-blue-600 hover:underline font-medium"
          >
            Read our program details here
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: "What are the payment options?",
    answer: (
      <p className="text-gray-700 leading-relaxed">
        Payments can be made via Paystack using virtual or physical cards, and also through direct bank transfer.
      </p>
    ),
  },
  {
    question: "What support is available during the program?",
    answer: (
      <p className="text-gray-700 leading-relaxed">
        Students receive guidance from experienced mentors, peer feedback, and access to a supportive community.
      </p>
    ),
  },
  {
    question: "Will I get a job after completing the program?",
    answer: (
      <p className="text-gray-700 leading-relaxed">
        We don't promise jobs — ethically, no one can. But we provide job placement support, mentorship, and portfolio development to significantly increase your chances.
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="w-full px-4 py-16 bg-gray-50">
      <h2 className="text-center tracking-widest font-bold mb-12 text-2xl md:text-3xl">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto grid gap-4">
        {faqData.map((faq, index) => (
          // <FaqItem key={index} {...faq} />
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}
