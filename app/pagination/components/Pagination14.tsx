import React, { useState } from 'react'

const Pagination14 = () => {
  const [activePage, setActivePage] = useState(1);
  console.log(typeof activePage)

  return (
    <div className="flex justify-center mt-6 space-x-2" title='Pagination-14'>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            onClick={()=>setActivePage(page)}
            key={page}
            className={`cursor-pointer w-10 h-10 rounded-full border border-gray-300 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400
            ${activePage===page?
            "bg-blue-600 text-white hover:bg-blue-400"
            :
            "hover:bg-blue-100 bg-white hover:text-blue-600 text-gray-700"
            }
            `}
          >
            {page}
          </button>
        ))}
      </div>
  )
}

export default Pagination14