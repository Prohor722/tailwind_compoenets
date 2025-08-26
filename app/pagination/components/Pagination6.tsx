import React, { useState } from 'react'

const Pagination6 = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="flex justify-center mt-10 gap-3" title='Pagination-6'>
        {[1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`cursor-pointer w-3.5 h-3.5 rounded-full transition-all duration-300 ${step === i
              ? "bg-blue-600 scale-125"
              : "bg-gray-300 hover:bg-blue-400"
              }`}
          />
        ))}
      </div>
  )
}

export default Pagination6