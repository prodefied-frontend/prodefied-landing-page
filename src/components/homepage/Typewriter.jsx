import { useState, useEffect } from "react";

export default function Typewriter({ texts, speed = 100, pause = 2000, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    let typingInterval;

    if (!deleting) {
      typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setDeleting(true), pause);
        }
      }, speed);
    } else {
      typingInterval = setInterval(() => {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          clearInterval(typingInterval);
          setDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, speed / 2);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, deleting, texts, currentIndex, speed, pause]);

  return (
    <span className={`whitespace-pre ${className}`}>
      {displayedText}
      <span className="animate-pulse">!</span>
    </span>
  );
}
