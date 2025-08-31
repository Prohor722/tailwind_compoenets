import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Pagination42 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
    }
    
  const angle = ((currentPage - 1) / (totalPages - 1)) * 360;
  return (
    <div className="bg-gradient-to-br from-amber-900 
    via-orange-900 to-red-900 rounded-full p-8 relative" 
    style={{ width: '300px', height: '300px' }}
    title="Pagination-42">
        {/* Compass Background */}
        <div className="absolute inset-4 rounded-full border-4 border-amber-400/30 bg-gradient-to-br from-amber-100/10 to-orange-100/10 backdrop-blur-sm">
          {/* Direction Markers */}
          {['N', 'E', 'S', 'W'].map((direction, index) => (
            <div
              key={direction}
              className="absolute text-amber-300 font-bold text-lg"
              style={{
                top: index === 0 ? '10px' : index === 2 ? 'calc(100% - 30px)' : '50%',
                left: index === 1 ? 'calc(100% - 20px)' : index === 3 ? '10px' : '50%',
                transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateY(-50%)'
              }}
            >
              {direction}
            </div>
          ))}

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {currentPage}
          </div>

          {/* Compass Needle */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-red-500 to-red-300 rounded-full origin-bottom transition-transform duration-500"
            style={{
              transform: `translate(-50%, -100%) rotate(${angle}deg)`,
              transformOrigin: 'bottom center'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-red-400" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>

        {/* Page Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-amber-300 text-sm font-mono">
          {currentPage} of {totalPages}
        </div>
      </div>

  )
}

export default Pagination42
