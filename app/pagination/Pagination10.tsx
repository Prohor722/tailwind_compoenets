import React, { useState } from 'react'

const Pagination10 = () => {
  const [active, setActive] = useState(1);
  
  return (
    <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={`px-4 py-2 rounded-lg backdrop-blur-md border transition-all duration-300 ${active === n
              ? "bg-white/30 border-blue-400 text-blue-700 shadow-inner"
              : "bg-white/10 border-gray-300 text-gray-600 hover:border-blue-300"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination10