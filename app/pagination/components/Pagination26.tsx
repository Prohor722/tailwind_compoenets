import { useState } from 'react'

const Pagination26 = () => {
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="relative mt-14 flex justify-center gap-6"
      title='Pagination-26'>
        {pages.map((n) => (
          <div key={n} className="relative flex flex-col items-center">
            <button
              onClick={() => setPage(n)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
              ${page === n
                  ? "bg-blue-600 scale-125 animate-pulse cursor-not-allowed"
                  : "bg-gray-400 hover:bg-blue-400 cursor-pointer"
                }`}
            />
          </div>
        ))}
      </div>
  )
}

export default Pagination26
