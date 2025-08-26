import React, { useState } from 'react'

const Pagination1 = () => {
  const [current, setCurrent] = useState(1);
  const total = 5;
  

  return (
    <div className="flex justify-center mt-10 space-x-1" title='Pagination-1'>
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i + 1)}
            className={`cursor-pointer px-4 py-2 rounded-md border text-sm font-medium transition-all ${current === i + 1
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  )
}

export default Pagination1