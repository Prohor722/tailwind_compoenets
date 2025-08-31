import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const Pagination33 = () => {
    const [ currentPage, setCurrentPage ] = useState(1);

    const totalPages = 5;
    const progress = (currentPage / totalPages) * 100;

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white 
    rounded-2xl shadow-lg" title='Pagination-33'>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-gray-100 text-gray-600 
            hover:bg-gray-200 transition-colors disabled:opacity-50 
            cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{currentPage}</div>
            <div className="text-sm text-gray-500">of {totalPages}</div>
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-gray-100 text-gray-600 
            hover:bg-gray-200 transition-colors disabled:opacity-50 
            cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-0 h-full w-4 bg-white rounded-full shadow-md transition-all duration-300 ease-out transform -translate-x-2"
            style={{ left: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Start</span>
          <span>End</span>
        </div>
      </div>
  )
}

export default Pagination33
