import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

// Pagination Component
const PaginatedGrid = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  // Update cards per page on window resize
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(3); // Mobile
      } else {
        setCardsPerPage(4); // Desktop
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(data.length / cardsPerPage);
  const startIdx = (currentPage - 1) * cardsPerPage;
  const currentCards = data.slice(startIdx, startIdx + cardsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Pagination range logic (show max 3 numbers)
  const getPageRange = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };


  return (
    <div className="md:w-[90%] mx-auto px-4 py-8">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 justify-items-center">
        {currentCards.map((item, index) => (
          <BlogCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-10 md:mt-16">
        <button
          className={`text-[11px] md:text-[22px] font-normal leading-[140%] ${
            currentPage === 1 ? "text-[#999999] cursor-default" : "text-[#333333] hover:text-black"
          }`}
          onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {getPageRange().map((page) => (
          <button
            key={page}
            className={`text-[11px] md:text-[22px] font-normal leading-[140%] ${
              page === currentPage ? "text-[#333333]" : "text-[#999999] hover:text-black"
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`text-[11px] md:text-[22px] font-normal leading-[140%] ${
            currentPage === totalPages
              ? "text-[#999999] cursor-default"
              : "text-[#333333] hover:text-black"
          }`}
          onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedGrid;
