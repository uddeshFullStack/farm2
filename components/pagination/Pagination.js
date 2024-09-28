import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(totalPages, currentPage + 4);

    if (endPage - startPage < 9) {
      if (startPage === 1) {
        endPage = Math.min(10, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - 9);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex  justify-start md:justify-center mt-4">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-3 py-1 hover:cursor-pointer mx-1 border rounded bg-white disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`px-3 hover:cursor-pointer py-1 mx-1 border-primary-colour border-3 rounded-lg 
          ${
            currentPage === pageNumber ? "bg-secondary-colour text-primary-colour" : "bg-white"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 hover:cursor-pointer border rounded bg-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
