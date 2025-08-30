import { useState } from 'react'

const Pagination29 = () => {
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex mt-16">
        <div className="flex flex-col gap-4 px-4 border-r 
        border-gray-300" title='Pagination-29'>
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${page === p
                ? "bg-blue-600 text-white shadow-md cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100 cursor-pointer"
                }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="p-6 text-lg font-semibold text-blue-800">
          You are on Section {page}
        </div>
      </div>
  )
}

export default Pagination29
