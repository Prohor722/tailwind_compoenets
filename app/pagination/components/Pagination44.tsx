import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Pagination44 = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10;
    const [animating, setAnimating] = React.useState(false);

    const triggerAnimation = (page: number) => {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 600);
        onPageChange(page);
    };
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div className="bg-gradient-to-r from-purple-900 
        via-blue-900 to-teal-900 rounded-2xl p-8"
          title="Pagination-44">
            <div className="flex items-end justify-center space-x-1 mb-6">
                {Array.from({ length: totalPages }, (_, i) => {
                    const height = currentPage === i + 1 ? 60 : Math.random() * 40 + 20;
                    const isActive = currentPage === i + 1;

                    return (
                        <button
                            key={i + 1}
                            onClick={() => triggerAnimation(i + 1)}
                            className={`rounded-t-lg transition-all duration-300 hover:opacity-80 ${isActive ? 'bg-gradient-to-t from-pink-500 to-purple-400' : 'cursor-pointer bg-gradient-to-t from-gray-600 to-gray-400'
                                }`}
                            style={{
                                width: '20px',
                                height: `${height}px`,
                                animation: animating && isActive ? 'pulse 0.6s ease-in-out' : 'none'
                            }}
                        >
                            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold transition-opacity ${isActive ? 'text-pink-300 opacity-100' : 'text-gray-400 opacity-0 hover:opacity-100'
                                }`}>
                                {i + 1}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="flex items-center justify-center space-x-6">
                <button
                    onClick={() => triggerAnimation(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="group cursor-pointer flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
                >
                    <ChevronLeft size={16} />
                    <span className="text-sm">Prev</span>
                </button>

                <div className="text-white text-center">
                    <div className="text-2xl font-bold">{currentPage}</div>
                    <div className="text-sm text-gray-300">of {totalPages}</div>
                </div>

                <button
                    onClick={() => triggerAnimation(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="group cursor-pointer flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
                >
                    <span className="text-sm">Next</span>
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default Pagination44
