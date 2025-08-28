import React, { useState } from 'react'

const Pagination11 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  
  return (
    <div className="flex justify-center gap-3 mt-10" title='Pagination-11'>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`cursor-pointer px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative group
            ${currentPage === i + 1
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:text-blue-600"
              }
          `}
          >
            {i + 1}
            <span className="absolute inset-0 rounded-md group-hover:ring-2 group-hover:ring-purple-400 group-hover:scale-105 transition-transform" />
          </button>
        ))}
      </div>
  )
}

export default Pagination11