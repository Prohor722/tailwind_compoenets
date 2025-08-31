import { ChevronLeft, ChevronRightCircle } from 'lucide-react';
import { useState } from 'react'

const Pagination39 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }
  return (
    <div className="relative p-8 bg-black rounded-3xl overflow-hidden" title='Pagination-39'>
        {/* Holographic background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 via-green-500/10 to-yellow-500/10"
            style={{ animation: 'hologram 3s ease-in-out infinite alternate' }} />
        </div>

        <style jsx>{`
        @keyframes hologram {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
      `}</style>

        <div className="relative z-10 flex items-center justify-center space-x-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="group relative w-12 h-12 cursor-pointer rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 hover:text-white hover:border-cyan-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <ChevronLeft size={18} className="relative z-10" />
          </button>

          <div className="flex items-center space-x-2">
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

              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`group relative w-12 h-12 rounded-lg font-bold transition-all duration-300 overflow-hidden ${isActive
                    ? 'bg-gradient-to-r from-pink-500/30 to-violet-500/30 backdrop-blur-sm border-2 border-pink-400 text-pink-300 shadow-lg shadow-pink-500/50'
                    : 'cursor-pointer bg-gradient-to-r from-gray-700/20 to-gray-600/20 backdrop-blur-sm border border-gray-500/30 text-gray-300 hover:text-white hover:border-gray-300'
                    }`}
                >
                  <div className={`absolute inset-0 transition-transform duration-500 ${isActive
                    ? 'bg-gradient-to-r from-pink-400/20 to-violet-500/20'
                    : 'bg-gradient-to-r from-gray-400/10 to-gray-500/10 translate-x-full group-hover:translate-x-0'
                    }`} />
                  <span className="relative z-10">{pageNum}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="cursor-pointer group relative w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 hover:text-white hover:border-cyan-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <ChevronRightCircle size={18} className="relative z-10" />
          </button>
        </div>
      </div>
  )
}

export default Pagination39
