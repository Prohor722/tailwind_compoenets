import React, { useState } from 'react'

const Pagination2 = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const prev = () => page > 1 && setPage(page - 1);
  const next = () => page < totalPages && setPage(page + 1);

  return (
    <div className="flex justify-center mt-10 items-center space-x-2" title='Pagination-2'>
        <button
          onClick={prev}
          disabled={page === 1}
          className="cursor-pointer px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={next}
          disabled={page === totalPages}
          className="cursor-pointer px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          Next
        </button>
      </div>
  )
}

export default Pagination2