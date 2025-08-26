import { useState } from 'react'

const Pagination8 = () => {
  const [page, setPage] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center gap-6 mt-10 border-b border-gray-200"
        title='Pagination-8'>
        {pages.map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`cursor-pointer pb-2 text-sm font-medium transition-all duration-300 relative ${page === n ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
              }`}
          >
            {n}
            {page === n && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-[slide_0.3s_ease-in-out]"></span>
            )}
          </button>
        ))}
    </div>
  )
}

export default Pagination8