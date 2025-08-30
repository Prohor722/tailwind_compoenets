import { useState } from 'react'

const Pagination30 = () => {
    const [page, setPage] = useState(1);
    const total = 5;
    return (
        <div className="flex flex-col gap-4 items-center mt-12"
            title='Pagination-30'>
            <div className="flex gap-3">
                {[...Array(total)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`w-8 h-8 rounded-full transition ${page === i + 1
                            ? "bg-pink-500 text-white font-bold scale-110 cursor-not-allowed"
                            : "bg-gray-100 text-gray-800 hover:bg-pink-100 cursor-pointer"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <input
                type="number"
                value={page}
                onChange={(e) => {
                    const val = Math.max(1, Math.min(Number(e.target.value), total));
                    setPage(val);
                }}
                className="w-24 border border-gray-300 rounded px-3 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                min={1}
                max={total}
            />
        </div>
    )
}

export default Pagination30
