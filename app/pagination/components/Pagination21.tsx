import React, { useState } from 'react'

const Pagination21 = () => {
  const [currentDot, setCurrentDot] = useState(1);
  return (
    <div className="flex justify-center mt-12 gap-4 p-4 
    backdrop-blur-md bg-white/30 border border-white/50 
    rounded-xl shadow-lg" title='Pagination-21'>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setCurrentDot(n)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${currentDot === n
              ? "bg-blue-600 scale-125 shadow-md"
              : "bg-gray-300 hover:bg-blue-400 cursor-pointer hover:scale-110"
              }`}
          />
        ))}
      </div>
  )
}

export default Pagination21
