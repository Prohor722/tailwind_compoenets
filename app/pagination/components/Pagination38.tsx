import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Pagination38 = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)
    const myFunctionRef = useRef<(() => void) | null>(null);
    const totalPages = 5;

    const onPageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    useEffect(() => {
        const togglePlay = () => {
            if(currentPage === totalPages) {
                setCurrentPage(1);
            }
            console.log("1st: ", isPlaying);
            !isPlaying && setIsPlaying(!isPlaying);

            // Auto-advance pages when "playing"
            if (!isPlaying && currentPage <= totalPages) {
                const interval = setInterval(() => {
                    setCurrentPage(prev => {
                        if (prev >= totalPages) {
                            setIsPlaying(false);
                            clearInterval(interval);
                            return prev;
                        }
                        if (prev === 4) {
                            setIsPlaying(false);
                        }
                        return prev + 1;
                    });
                }, 2000);

                setTimeout(() => {
                    if (isPlaying) setIsPlaying(false);
                    clearInterval(interval);
                }, (totalPages + 1 - currentPage) * 2000);
            }
            console.log("2nd: ", isPlaying);
            console.log(currentPage);
        };

        myFunctionRef.current = togglePlay;
    }, [currentPage, isPlaying])

    return (
        <div className="bg-gray-900 rounded-2xl p-6 max-w-md 
        mx-auto border border-gray-700" title='Pagination-38'>
            <div className="flex items-center justify-between mb-4">
                <div className="text-white">
                    <div className="text-lg font-semibold">Page Navigation</div>
                    <div className="text-sm text-gray-400">Page {currentPage} of {totalPages}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{currentPage}</span>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>Start</span>
                    <span>End</span>
                </div>
                <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300"
                        style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    />
                    <div
                        className="absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-1/2 -translate-x-2 transition-all duration-300"
                        style={{ left: `${(currentPage / totalPages) * 100}%` }}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
                <button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-gray-800 
                    hover:bg-gray-700 flex items-center justify-center 
                    text-gray-400 hover:text-white transition-colors 
                    disabled:opacity-30 cursor-pointer 
                    disabled:cursor-not-allowed"
                >
                    <div className="w-2 h-4 bg-current rounded-sm mr-1" />
                    <div className="w-0 h-0 border-l-4 
                    border-l-current border-t-2 border-t-transparent 
                    border-b-2 border-b-transparent" />
                </button>

                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full 
                    bg-gray-800 hover:bg-gray-700 flex 
                    items-center justify-center text-gray-400 
                    hover:text-white transition-colors disabled:opacity-30 
                    cursor-pointer disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    onClick={myFunctionRef.current ? myFunctionRef.current : undefined}
                    className="w-14 h-14 rounded-full 
                    bg-gradient-to-r from-green-400 
                    to-blue-500 hover:from-green-300 
                    hover:to-blue-400 flex items-center 
                    justify-center text-white shadow-lg 
                    hover:shadow-xl transition-all duration-300 
                    transform hover:scale-105 cursor-pointer"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                </button>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full 
                    bg-gray-800 hover:bg-gray-700 flex items-center 
                    justify-center text-gray-400 hover:text-white 
                    transition-colors disabled:opacity-30 
                    cursor-pointer disabled:cursor-not-allowed"
                >
                    <ChevronRight size={18} />
                </button>

                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-gray-800 
                    hover:bg-gray-700 flex items-center justify-center 
                    text-gray-400 hover:text-white transition-colors 
                    disabled:opacity-30 cursor-pointer 
                    disabled:cursor-not-allowed"
                >
                    <div className="w-0 h-0 border-r-4 border-r-current border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                    <div className="w-2 h-4 bg-current rounded-sm ml-1" />
                </button>
            </div>

            <div className="mt-4 flex justify-center space-x-1">
                {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => (
                    <div
                        key={i}
                        className={`w-1 h-6 rounded-full transition-all duration-300 ${i + 1 === currentPage
                            ? 'bg-gradient-to-t from-green-400 to-blue-500'
                            : 'bg-gray-700'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Pagination38
