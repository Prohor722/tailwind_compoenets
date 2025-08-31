import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

const Pagination32 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center space-x-3 p-4"
        title='Pagination-32'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center space-x-2 px-4 py-2 
          rounded-full bg-white shadow-lg border border-gray-200 
          text-gray-600 hover:shadow-xl hover:-translate-y-0.5 
          transition-all duration-200 disabled:opacity-50 
          cursor-pointer disabled:cursor-not-allowed 
          disabled:transform-none"
        >
          <ChevronLeft size={16} />
          <span className="text-sm font-medium">Prev</span>
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 3) {
              pageNum = i + 1;
            } else if (currentPage === 1) {
              pageNum = i + 1;
            } else if (currentPage === totalPages) {
              pageNum = totalPages - 2 + i;
            } else {
              pageNum = currentPage - 1 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-12 h-12 rounded-full font-semibold transition-all duration-200 transform hover:-translate-y-0.5 ${currentPage === pageNum
                  ? 'cursor-none bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/40 scale-110'
                  : 'cursor-pointer bg-white text-gray-700 shadow-md border border-gray-200 hover:shadow-lg'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2 px-4 py-2 rounded-full 
          bg-white shadow-lg border border-gray-200 text-gray-600 
          hover:shadow-xl hover:-translate-y-0.5 transition-all 
          duration-200 disabled:opacity-50 cursor-pointer 
          disabled:cursor-not-allowed disabled:transform-none"
        >
          <span className="text-sm font-medium">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
  )
}

export default Pagination32
