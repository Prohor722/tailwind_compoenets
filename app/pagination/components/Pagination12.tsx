import { useState } from 'react'

const Pagination12 = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;
  
  return (
    <div className="flex justify-center items-center gap-2 mt-10" title='Pagination-12'>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="cursor-pointer px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-blue-100"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 rounded transition-all text-sm font-medium ${page === i + 1
              ? "bg-blue-600 text-white shadow"
              : "text-gray-700 hover:bg-blue-50"
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-blue-100"
        >
          Next
        </button>
      </div>
  )
}

export default Pagination12