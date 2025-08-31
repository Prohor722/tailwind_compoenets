import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const totalPages = 5;

const Pagination31 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
      const pages = [];
      const showEllipsis = totalPages > 7;
  
      if (!showEllipsis) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 4) {
          pages.push(1, 2, 3, 4, 5, '...', totalPages);
        } else if (currentPage >= totalPages - 3) {
          pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
      }
  
      return pages;
    };

  return (
    <div className="flex items-center space-x-1 p-4"
      title="Pagination-31">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          <ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={index} className="flex items-center justify-center w-10 h-10 text-gray-500">
              <MoreHorizontal size={16} />
            </span>
          ) : (
            <button
              key={page}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              className={`flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-md border transition-all duration-300 font-medium ${currentPage === page
                ? 'bg-gradient-to-r cursor-none from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-110'
                : 'bg-white/20 cursor-pointer border-white/30 text-gray-700 hover:bg-white/30 hover:scale-105'
                }`}
            >
              {page}
            </button>
          )
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 
          h-10 rounded-xl bg-white/20 backdrop-blur-md border 
          border-white/30 text-gray-700 hover:bg-white/30 
          transition-all duration-300 disabled:opacity-50 
          cursor-pointer disabled:cursor-not-allowed shadow-lg"
        >
          <ChevronRight size={16} />
        </button>
      </div>
  );
};

export default Pagination31;
