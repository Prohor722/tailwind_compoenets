import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'

const Pagination37 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }

  return (
    <div className="flex items-center justify-center space-x-1 p-6 
    bg-black rounded-3xl" title='Pagination37'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full bg-gradient-to-r 
          from-cyan-400 to-blue-500 flex items-center 
          justify-center text-white hover:scale-110 
          transition-transform duration-300 disabled:opacity-30 
          cursor-pointer disabled:cursor-not-allowed 
          disabled:transform-none shadow-lg shadow-cyan-500/50"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="relative flex items-center">
          <div
            className="absolute h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-pink-500/50"
            style={{
              width: '48px',
              left: `${(currentPage - 1) * 52}px`
            }}
          />
          {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 7) {
              pageNum = i + 1;
            } else if (currentPage <= 4) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 3) {
              pageNum = totalPages - 6 + i;
            } else {
              pageNum = currentPage - 3 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`relative w-12 h-12 rounded-full font-semibold text-sm transition-all duration-300 z-10 ${currentPage === pageNum
                  ? 'text-white'
                  : 'text-gray-400 cursor-pointer  hover:text-white hover:scale-105'
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
          className="w-12 h-12 rounded-full bg-gradient-to-r 
          from-cyan-400 to-blue-500 flex items-center 
          justify-center text-white hover:scale-110 
          transition-transform duration-300 disabled:opacity-30 
          cursor-pointer disabled:cursor-not-allowed 
          disabled:transform-none shadow-lg shadow-cyan-500/50"
        >
          <ChevronRight size={18} />
        </button>
      </div>
  )
}

export default Pagination37
