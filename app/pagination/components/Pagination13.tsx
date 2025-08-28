import { useState } from 'react'

const Pagination13 = () => {
  const [currentDot, setCurrentDot] = useState(1);
  
  return (
    <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5].map((dot) => (
          <button
            key={dot}
            onClick={() => setCurrentDot(dot)}
            className={`cursor-pointer w-3 h-3 transition-all duration-300 ${currentDot === dot ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
  )
}

export default Pagination13