import { useState } from 'react'

const Pagination22 = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="flex justify-center mt-10 gap-3 bg-[#f1f3f5] 
    p-6 rounded-xl shadow-inner" title='Pagination-22'>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActivePage(n)}
            className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 shadow 
            ${activePage === n
                ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                : "bg-[#f1f3f5] text-gray-700 hover:bg-blue-100 cursor-pointer"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination22
