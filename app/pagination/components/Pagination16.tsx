import React, { useState } from 'react'

const Pagination16 = () => {
  const [active, setActive] = useState(1);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center mt-6 items-center gap-2" title='Pagination-16'>
        <button
          className={`px-3 py-1 rounded-md 
          ${active > pages[0]
              ? "cursor-pointer bg-orange-600 text-white border-gray-700 hover:bg-orange-700 hover:text-yellow-300 hover:border-white"
              : "bg-white text-gray-700 border hover:bg-blue-100 cursor-not-allowed"
            }`}
          onClick={() => active > pages[0] && setActive(active - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`px-3 py-1 rounded-md transition
              ${active === page
                ? "bg-orange-600 text-white border-gray-700 hover:bg-orange-700 hover:text-yellow-300 hover:border-white"
                : "cursor-pointer bg-white text-gray-700 border hover:bg-blue-100"
              }`}
          >
            {page}
          </button>
        ))}
        <button
          className={`px-3 py-1 rounded-md transition
          ${active < pages.length
              ? "cursor-pointer bg-orange-600 text-white border-gray-700 hover:bg-orange-700 hover:text-yellow-300 hover:border-white"
              : "bg-white text-gray-700 border hover:bg-blue-100 cursor-not-allowed"
            }
          `}
          onClick={() => active < pages.length && setActive(active + 1)}
        >
          Next
        </button>
      </div>
  )
}

export default Pagination16
