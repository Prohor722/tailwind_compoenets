import { useState } from 'react'

const Pagination20 = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex justify-center mt-10 gap-2" title='Pagination-20'>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={`w-10 h-10 rounded-full border text-sm font-semibold transition-all duration-300 
            ${active === n
                ? "border-blue-600 text-blue-600 ring-2 ring-blue-300 animate-pulse"
                : "border-gray-300 cursor-pointer text-gray-700 hover:border-blue-400 hover:text-blue-500"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination20
