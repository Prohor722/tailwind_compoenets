import { useState } from 'react'

const Pagination24 = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex justify-center mt-12 bg-white/20 
    backdrop-blur-md rounded-lg px-6 py-4 shadow-inner gap-3"
      title='Pagination-24'>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 
            ${selected === n
                ? " text-blue-200 shadow-lg ring-2 ring-blue-300 cursor-not-allowed"
                : "text-white hover:bg-white/20 cursor-pointer hover:shadow-lg hover:ring-1 hover:ring-white/30"
              }`}
          >
            {n}
          </button>
        ))}
      </div>
  )
}

export default Pagination24
