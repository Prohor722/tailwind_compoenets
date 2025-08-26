import React, { useState } from 'react'

const Pagination4 = () => {
  const [active, setActive] = useState(1);
  
  const total = 5;
  
  return (
    <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i + 1)}
            className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium text-sm transition-all duration-300
            ${active === i + 1
                ? "border-blue-600 text-blue-600 bg-blue-100 ring-2 ring-blue-300"
                : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  )
}

export default Pagination4