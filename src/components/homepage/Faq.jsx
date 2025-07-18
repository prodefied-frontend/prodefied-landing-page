import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Faq({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer((prev) => !prev);

  return (
    <div className="border border-gray-400 rounded-lg bg-white">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer text-left flex-1"
          onClick={toggleAnswer}
        >
          {question}
        </h2>
        <button onClick={toggleAnswer} className="ml-4">
          {showAnswer ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </article>

      {showAnswer && (
        <div className="border-t border-gray-400 p-4 lg:p-6">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Faq;
