import React, { useState } from 'react'

const pagination17a = () => {
  const [shortPages, setShortPages] = useState([1, 2, 3, 4, 5]);
  const [shortPagesActive, setShortPagesActive] = useState(1);

  return (
    <div className="flex justify-center mt-6 items-center gap-2 text-sm font-medium"
      title='pagination-17a'>
        {shortPages.map((page) => (
          <button
            onClick={() => setShortPagesActive(page)}
            key={page}
            className={`px-2 py-1 rounded cursor-pointer 
              ${shortPagesActive === page
                ? "bg-blue-600 text-white hover:text-white hover:bg-blue-900"
                : "bg-gray-100 text-black hover:text-white hover:bg-gray-700"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
  )
}

export default pagination17a
