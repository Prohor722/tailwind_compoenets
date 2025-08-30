import { useState } from 'react'

const Pagination27 = () => {
  const [page, setPage] = useState(1);
  const total = 5;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  
  return (
    <div className="w-full max-w-md mt-12 relative" 
        title='Pagination-27'>
        
        {/* Background Bar */}
        <div className="w-full h-[20px] bg-gray-200 rounded-full overflow-hidden relative z-10">
          <div
            className="h-[20px] bg-indigo-500 transition-all duration-500"
            style={{ width: `${(page / total) * 100}%` }}
          />
        </div>

        {/* Page numbers overlayed on top */}
        <div className="absolute top-0 left-0 w-full h-[20px] flex justify-evenly items-center z-20 text-xs text-white">
          {pages.map((p) => (
            <button
              onClick={() => setPage(p)}
              key={p}
              className={`w-full h-full 
                ${page === p
                  ? "text-yellow-300 font-bold scale-105 cursor-not-allowed"
                  : "cursor-pointer font-semibold"
                }
                ${p > page ? "text-gray-700" : ""}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
  )
}

export default Pagination27
