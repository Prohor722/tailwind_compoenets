import React, { useState } from 'react'

const Pagination17 = () => {
  const [active, setActive] = useState(1);
  const pages = [1, 2, 3, 4, 5];
  
  return (
    <div className="flex justify-center mt-6 gap-6" title='Pagination-17'>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`relative font-medium transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0  hover:after:w-full after:transition-all 
            ${page === active
                ? "after:w-full hover:text-yellow-300 text-blue-500 after:bg-blue-500 hover:after:bg-yellow-300"
                : "cursor-pointer text-gray-700 hover:text-white after:w-0 after:bg-gray-200"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>
  )
}

export default Pagination17
