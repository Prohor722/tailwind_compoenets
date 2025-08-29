import React, { useState } from 'react'

const Pagination18 = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;
  return (
    <div className="backdrop-blur-lg bg-white/30 border 
    border-white/40 rounded-xl px-6 py-4 shadow-xl flex gap-3"
    title='Pagination-18'>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 text-sm font-semibold rounded-full transition-all duration-300 ${page === i + 1
              ? "bg-white/60 text-blue-700 shadow-inner ring-2 ring-blue-500"
              : "text-white cursor-pointer hover:bg-white/20"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  )
}

export default Pagination18
