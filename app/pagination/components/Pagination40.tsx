import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'

const Pagination40 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

  return (
    <div className="flex items-center justify-center 
    space-x-6 p-8 bg-gradient-to-br from-purple-100 
    to-blue-100 rounded-2xl" title='Pagination-40'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="group relative w-16 h-16 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg transform translate-x-1 translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform translate-x-2 translate-y-2" />
          <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:transform group-hover:scale-105 transition-transform duration-300">
            <ChevronLeft size={20} />
          </div>
        </button>

        <div className="flex items-end space-x-3">
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

            const isActive = currentPage === pageNum;
            const height = isActive ? 20 : 16;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`group relative transition-all duration-300
                    ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                style={{
                  transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)',
                  width: '64px',
                  height: `${height * 4}px`
                }}
              >
                <div className={`absolute inset-0 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 ${isActive
                  ? 'bg-gradient-to-br from-pink-400 to-purple-600'
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`} />
                <div className={`absolute inset-0 rounded-lg transform translate-x-1 translate-y-1 ${isActive
                  ? 'bg-gradient-to-br from-pink-300 to-purple-500'
                  : 'bg-gradient-to-br from-gray-300 to-gray-500'
                  }`} />
                <div className={`absolute inset-0 rounded-lg transform translate-x-2 translate-y-2 ${isActive
                  ? 'bg-gradient-to-br from-pink-500 to-purple-700'
                  : 'bg-gradient-to-br from-gray-500 to-gray-700'
                  }`} />
                <div className={`relative w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:transform group-hover:scale-105 transition-transform duration-300 ${isActive
                  ? 'bg-gradient-to-br from-pink-400 to-purple-600'
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`}>
                  {pageNum}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="group cursor-pointer relative w-16 h-16 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg transform translate-x-1 translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform translate-x-2 translate-y-2" />
          <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:transform group-hover:scale-105 transition-transform duration-300">
            <ChevronRight size={20} />
          </div>
        </button>
      </div>
  )
}

export default Pagination40
