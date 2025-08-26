import React, { useState } from 'react'

const Pagination5 = () => {
  const [selected, setSelected] = useState(1);
  
  return (
    <div className="flex justify-center mt-10 space-x-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className={`w-10 h-10 rounded-md transition-all duration-300 ease-in-out transform font-semibold text-sm ${selected === n
              ? "bg-indigo-600 text-white shadow-xl shadow-indigo-300 scale-105"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-indigo-50"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination5