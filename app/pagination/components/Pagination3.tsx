import React, { useState } from 'react'

const Pagination3 = () => {
  const [current, setCurrent] = useState(1);
  
  return (
    <div className="flex justify-center mt-10 gap-2" title='Pagination-3'>
        {Array.from({ length: 7 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`cursor-pointer w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all border ${current === i
              ? "bg-blue-600 text-white border-blue-600"
              : "text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  )
}

export default Pagination3