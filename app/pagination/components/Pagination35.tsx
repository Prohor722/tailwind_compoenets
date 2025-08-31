import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'

const Pagination35 = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 5;
    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }

  return (
    <div className="flex items-center justify-center 
    space-x-4 p-8 bg-gray-200 rounded-3xl" title='Pagination-35'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-2xl bg-gray-200 
          shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] 
          hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.25)] 
          active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] 
          flex items-center justify-center text-gray-600 transition-all 
          duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center space-x-3">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-12 h-12 rounded-2xl font-semibold transition-all duration-200 ${currentPage === pageNum
                  ? 'bg-gray-200 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-blue-600'
                  : 'bg-gray-200 cursor-pointer shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.25)] text-gray-700'
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
          className="w-12 h-12 rounded-2xl bg-gray-200 
          shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] 
          hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.25)] 
          active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] 
          flex items-center justify-center text-gray-600 transition-all 
          duration-200 disabled:opacity-50 cursor-pointer 
          disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>
  )
}

export default Pagination35
