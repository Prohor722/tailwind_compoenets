import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Pagination34 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex items-center justify-center space-x-6 p-4"
      title='Pagination-34'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-400 hover:text-gray-700 
          transition-colors disabled:opacity-30 cursor-pointer 
          disabled:cursor-not-allowed"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => onPageChange(i + 1)}
              className={`transition-all duration-200 rounded-full ${currentPage === i + 1
                ? 'w-8 h-3 bg-gradient-to-r from-indigo-500 to-purple-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 cursor-pointer'
                }`}
            />
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-400 hover:text-gray-700 
          transition-colors disabled:opacity-30 cursor-pointer 
          disabled:cursor-not-allowed"
        >
          <ChevronRight size={24} />
        </button>
      </div>
  )
}

export default Pagination34
