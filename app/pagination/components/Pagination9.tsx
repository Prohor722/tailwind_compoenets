import React, { useState } from 'react'

const Pagination9 = () => {
  const [page, setPage] = useState(1);
  
  return (
    <div className="flex justify-center gap-3 mt-10">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${page === n
              ? "bg-blue-600 text-white shadow-lg shadow-blue-300 scale-105"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination9