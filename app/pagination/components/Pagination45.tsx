import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

interface StyleProps{
  left?: number;
  animationDelay?: number;
}
const Pagination45 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [ style, setStyle] = useState<StyleProps[]>([{}]);

    useEffect(() => {
      const styleArray = Array.from({ length: 10 }, () => ({
          left: Math.random() * 100,
          animationDelay: Math.random() * 0.5
      }));

      setStyle(styleArray);
    }, [currentPage]);

    const totalPages = 10;
    const steamAnimation = true; // Toggle steam animation
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

  return (
    <div className="relative bg-gradient-to-br from-amber-900 
    via-orange-900 to-red-900 rounded-2xl p-8 border-4 
    border-amber-600/50 shadow-2xl" title='Pagination-45'>
        {/* Steam Effect */}
        {steamAnimation && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full animate-bounce"
                style={{
                  left: `${style[i]?.left}%`,
                  bottom: '20px',
                  animationDelay: `${style[i]?.animationDelay}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center space-x-6">
          {/* Left Gear */}
          <div className="relative">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-16 cursor-pointer h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-4 border-amber-500 flex items-center justify-center text-white transition-transform hover:rotate-45 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:rotate-0"
            >
              <ChevronLeft size={24} />
              {/* Gear Teeth */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-amber-500"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-30px)`,
                    transformOrigin: 'bottom center'
                  }}
                />
              ))}
            </button>
          </div>

          {/* Main Display */}
          <div className="flex flex-col items-center space-y-4">
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
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-12 h-12 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${isActive
                      ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/50 border-2 border-yellow-300'
                      : 'cursor-pointer bg-gradient-to-br from-amber-700 to-amber-900 text-amber-200 border-2 border-amber-600/50 hover:from-amber-600 hover:to-amber-800'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Pressure Gauge */}
            <div className="relative w-24 h-12 bg-black rounded-t-full border-2 border-amber-600 overflow-hidden">
              <div
                className="absolute bottom-0 left-0 bg-gradient-to-t from-red-600 to-yellow-400 transition-all duration-500"
                style={{
                  width: '100%',
                  height: `${(currentPage / totalPages) * 100}%`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                {Math.round((currentPage / totalPages) * 100)}%
              </div>
            </div>
          </div>

          {/* Right Gear */}
          <div className="relative">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-16 cursor-pointer h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-4 border-amber-500 flex items-center justify-center text-white transition-transform hover:-rotate-45 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:rotate-0"
            >
              <ChevronRight size={24} />
              {/* Gear Teeth */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-amber-500"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-30px)`,
                    transformOrigin: 'bottom center'
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </div>
  )
}

export default Pagination45
