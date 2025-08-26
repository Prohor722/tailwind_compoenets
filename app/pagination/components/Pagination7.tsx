import { useState } from 'react'

const Pagination7 = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className="flex justify-center mt-10 gap-2" title='Pagination-7'>
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => setCurrent(n)}
            className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${current === n
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination7