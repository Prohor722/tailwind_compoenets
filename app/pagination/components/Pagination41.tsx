import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'

const Pagination41 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    
    const totalPages = 10;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };
  return (
    <div className="bg-gray-900 rounded-3xl p-8 border-2 
    border-green-500/30 shadow-2xl shadow-green-500/20"
      title="Pagination-41">
        <div className="flex items-center justify-center space-x-8">
          {/* D-Pad Style Navigation */}
          <div className="relative">
            <div className="w-24 h-24 bg-gray-800 rounded-lg border-2 border-green-400/50 flex items-center justify-center">
              <div className="relative w-16 h-16">
                {/* Left Arrow */}
                <button
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  onMouseDown={() => setSelectedButton('left')}
                  onMouseUp={() => setSelectedButton(null)}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-sm flex items-center justify-center text-green-400 transition-all duration-150 ${selectedButton === 'left'
                    ? 'bg-green-500 text-white scale-95 shadow-lg shadow-green-500/50'
                    : 'bg-gray-700 hover:bg-gray-600'
                    } cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed`}
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  onMouseDown={() => setSelectedButton('right')}
                  onMouseUp={() => setSelectedButton(null)}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-sm flex items-center justify-center text-green-400 transition-all duration-150 ${selectedButton === 'right'
                    ? 'bg-green-500 text-white scale-95 shadow-lg shadow-green-500/50'
                    : 'bg-gray-700 hover:bg-gray-600'
                    } cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed`}
                >
                  <ChevronRight size={16} />
                </button>

                {/* Center Display */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  {currentPage}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 4) {
                  pageNum = i + 1;
                } else if (currentPage <= 2) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 1) {
                  pageNum = totalPages - 3 + i;
                } else {
                  pageNum = currentPage - 1 + i;
                }

                const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500'];
                const isActive = currentPage === pageNum;

                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`w-12 h-12 rounded-full font-bold text-white transition-all duration-200 transform hover:scale-110 active:scale-95 ${isActive
                      ? `${colors[i % colors.length]} shadow-lg shadow-current/50 ring-4 ring-white/30`
                      : `${colors[i % colors.length]}/70 cursor-pointer hover:${colors[i % colors.length]}`
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <div className="text-center text-green-400 text-sm font-mono">
              LEVEL {currentPage} / {totalPages}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pagination41
