import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Pagination19 = () => {
  const [page, setPage] = useState(1);

  const totalPages = 5;
  
  const prev = () => page > 1 && setPage(page - 1);
  const next = () => page < totalPages && setPage(page + 1);
  
  return (
    <div className="flex items-center justify-center mt-20 gap-4"
      title='Pagination-19'>
        <button
          onClick={prev}
          className={`p-2 rounded-full bg-gray-100 text-gray-700 
            hover:bg-blue-100 transition cursor-pointer
            ${page === 1 ? 
                "cursor-not-allowed opacity-50 hover:bg-gray-100"
            : "cursor-pointer"}`}
        >
          <ChevronLeft />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${page === i + 1
              ? "bg-blue-600 text-white shadow-lg"
              : 
              "bg-white border text-gray-600 border-gray-300 hover:bg-blue-50 cursor-pointer"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={next}
          className={`p-2 rounded-full bg-gray-100 text-gray-700 
            hover:bg-blue-100 transition
            ${page === totalPages ? 
                "cursor-not-allowed opacity-50 hover:bg-gray-100"
            : "cursor-pointer"}`}
        >
          <ChevronRight />
        </button>
      </div>
  )
}

export default Pagination19
