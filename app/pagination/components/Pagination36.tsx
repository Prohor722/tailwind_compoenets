import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react'

const Pagination36 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }

    return (
        <div className="flex items-center justify-center 
        space-x-6 p-8 bg-gradient-to-br from-indigo-900 
        via-purple-900 to-pink-900 rounded-2xl"
        title='Pagination-36'>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="group relative w-14 h-14 bg-gradient-to-br 
                from-white to-gray-100 rounded-xl shadow-lg 
                hover:shadow-2xl transform hover:-translate-y-1 
                transition-all duration-300 disabled:opacity-50 
                cursor-pointer disabled:cursor-not-allowed 
                disabled:transform-none flex items-center 
                justify-center"
            >
                <div className="absolute inset-0 bg-gradient-to-br 
          from-blue-400 to-purple-500 rounded-xl opacity-0 
          group-hover:opacity-20 transition-opacity duration-300" />
                <ArrowLeft className="text-gray-700 relative z-10" size={20} />
            </button>

            <div className="relative flex items-center space-x-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                        pageNum = i + 1;
                    } else if (currentPage <= 3) {
                        pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                    } else {
                        pageNum = currentPage - 2 + i;
                    }

                    const isActive = currentPage === pageNum;
                    const distance = Math.abs(i - Math.min(4, currentPage - 1));

                    return (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            className={`relative w-14 h-16 rounded-xl font-bold text-lg transition-all duration-500 transform-gpu ${isActive
                                ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-2xl scale-110 z-20'
                                : 'bg-gradient-to-br cursor-pointer from-white to-gray-100 text-gray-700 shadow-lg hover:shadow-xl hover:scale-105'
                                }`}
                            style={{
                                transform: `
                  perspective(1000px) 
                  rotateY(${distance * 5}deg) 
                  translateZ(${isActive ? '20px' : `-${distance * 10}px`})
                  scale(${isActive ? 1.1 : 1 - distance * 0.05})
                `,
                                zIndex: isActive ? 20 : 10 - distance
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10">{pageNum}</span>
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="group relative w-14 h-14 
                bg-gradient-to-br from-white to-gray-100 
                rounded-xl shadow-lg hover:shadow-2xl transform 
                hover:-translate-y-1 transition-all duration-300 
                disabled:opacity-50 cursor-pointer 
                disabled:cursor-not-allowed disabled:transform-none 
                flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-gradient-to-br 
          from-blue-400 to-purple-500 rounded-xl opacity-0 
          group-hover:opacity-20 transition-opacity duration-300" />
                <ArrowRight className="text-gray-700 relative z-10" size={20} />
            </button>
        </div>
    )
}

export default Pagination36
