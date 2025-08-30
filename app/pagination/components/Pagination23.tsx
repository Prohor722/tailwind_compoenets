import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Pagination23 = () => {
  const [page, setPage] = useState(1);
  const total = 5;

  return (
    <div className="flex justify-center items-center mt-10 gap-4"
        title='Pagination-23'>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-blue-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Prev
        </button>

        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-medium ${page === i + 1
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, total))}
          className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-blue-100 transition"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
  )
}

export default Pagination23
