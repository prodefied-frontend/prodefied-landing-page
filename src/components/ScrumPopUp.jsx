import { useEffect, useRef } from "react";
import ScrumImage from "../assets/images/homepage/scrum-image.jpg";

export default function ScrumPopUp({ isOpen, onClose }) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isOpen) return;

    // Store scroll position
    scrollYRef.current = window.scrollY;

    // Lock scroll by fixing body
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflowY = "scroll"; // optional for smooth scroll

    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);

      // Unlock scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";

      // Restore scroll position
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#001EFF] rounded-2xl shadow-lg max-w-4xl w-[90%] overflow-hidden transform opacity-0 animate-popSlideIn"
        onClick={stopPropagation}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full h-44 md:h-auto">
            <img
              src={ScrumImage}
              alt="Scrum"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2 w-full flex flex-col justify-center md:items-start">
            <h2 className="text-[#F5F4F4] text-2xl font-bold mb-3">
              Get Free Scrum Certificate
            </h2>
            <p className="text-[#F4F4F4] mb-6">
              Before you join Prodefied, take this free Scrum course we found
              for you, and earn a certificate at no cost. It's a great
              foundation for the real work you'll do with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://simpli-web.app.link/e/7x9f12dtrVb"
                className="px-4 py-2 bg-white text-[#000F84] rounded-lg hover:bg-[#001EFF] hover:text-white hover:border hover:border-white transition text-center"
                onClick={onClose}
              >
                Get Scrum Certificate
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#000F84] transition cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes popSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out forwards;
        }
        .animate-popSlideIn {
          animation: popSlideIn 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
