import React, { useEffect, useState } from 'react'

const Pagination46 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [matrixChars, setMatrixChars] = useState<Array<{ char: string, x: number, delay: number }>>([]);
    const totalPages = 20;

    useEffect(() => {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン';
        const newChars = Array.from({ length: 100 }, () => ({
            char: chars[Math.floor(Math.random() * chars.length)],
            x: Math.random() * 100,
            delay: Math.random() * 2
        }));
        setMatrixChars(newChars);
    }, []);

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className="relative bg-black rounded-2xl p-8 overflow-hidden border border-green-500/30">
            {/* Matrix Rain Background */}
            <div className="absolute inset-0 opacity-20">
                {matrixChars.map((item, i) => (
                    <div
                        key={i}
                        className="absolute text-green-400 text-sm font-mono animate-bounce"
                        style={{
                            left: `${item.x}%`,
                            top: `${(i * 5) % 100}%`,
                            animationDelay: `${item.delay}s`,
                            animationDuration: '2s'
                        }}
                    >
                        {item.char}
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex items-center justify-center space-x-8">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-lg bg-black border border-green-500 text-green-400 font-mono hover:bg-green-500/20 hover:text-green-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {'<'}
                </button>

                <div className="flex items-center space-x-2">
                    {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 7) {
                            pageNum = i + 1;
                        } else if (currentPage <= 4) {
                            pageNum = i + 1;
                        } else if (currentPage >= totalPages - 3) {
                            pageNum = totalPages - 6 + i;
                        } else {
                            pageNum = currentPage - 3 + i;
                        }

                        const isActive = currentPage === pageNum;

                        return (
                            <button
                                key={pageNum}
                                onClick={() => onPageChange(pageNum)}
                                className={`w-12 h-12 rounded-lg font-mono font-bold transition-all duration-300 ${isActive
                                    ? 'bg-green-500 text-black shadow-lg shadow-green-500/50 scale-110'
                                    : 'bg-black border border-green-500 text-green-400 hover:bg-green-500/20 hover:text-green-300'
                                    }`}
                            >
                                {String(pageNum).padStart(2, '0')}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-lg bg-black border border-green-500 text-green-400 font-mono hover:bg-green-500/20 hover:text-green-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {'>'}
                </button>
            </div>

            <div className="relative z-10 text-center mt-4 text-green-400 font-mono text-sm">
                SYSTEM PAGE [{String(currentPage).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}]
            </div>
        </div>
    )
}

export default Pagination46
