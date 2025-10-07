// FaqItem.jsx
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 focus:outline-none hover:bg-gray-100 transition"
      >
        <span className="text-gray-900 font-medium text-left">{question}</span>
        {isOpen ? (
          <HiChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <HiChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 py-4 transition-all duration-300">{answer}</div>
      )}
    </div>
  );
}
