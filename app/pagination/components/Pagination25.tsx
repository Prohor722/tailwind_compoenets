import { useState } from 'react'

const Pagination25 = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex justify-center mt-12 gap-3"
      title='Pagination-25'>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={`relative px-4 py-2 font-semibold text-sm transform transition-all duration-300 skew-x-6
          ${active === n
                ? "bg-indigo-600 text-white shadow-md -skew-x-6 cursor-not-allowed"
                : "bg-gray-200 text-gray-800 hover:bg-indigo-100 -skew-x-6 cursor-pointer"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination25
