import { useState } from 'react'

const Pagination15 = () => {
  const [active, setActive] = useState(1);
  const pages = [1, 2, 3, 4, 5];
  
  return (
    <div className="flex justify-center mt-6 space-x-2" title='Pagination-15'>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${page === active
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
  )
}

export default Pagination15
