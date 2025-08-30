import React from 'react'

const Pagination28 = () => {
    const [page, setPage] = React.useState(1);
    const total = 5;

  return (
    <div className="flex justify-center mt-12 gap-4 bg-white/20 
    backdrop-blur-lg p-4 rounded-2xl shadow-lg"
    title='Pagination-28'>
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm ${page === i + 1
              ? "bg-white/40 text-blue-700 ring-2 ring-blue-300 cursor-not-allowed"
              : "bg-white/10 text-gray-700 hover:bg-white/20 cursor-pointer"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  )
}

export default Pagination28
