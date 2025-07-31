"use client";
import { useState } from "react";

const PaginationPage = () => {
  const [current, setCurrent] = useState(1);
  const total = 5;
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const prev = () => page > 1 && setPage(page - 1);
  const next = () => page < totalPages && setPage(page + 1);

  return (
    <div>
      {/* Simple Pagination  */}
      <div className="flex justify-center mt-10 space-x-1">
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i + 1)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
              current === i + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Pagination 2  */}
      <div className="flex justify-center mt-10 items-center space-x-2">
        <button
          onClick={prev}
          disabled={page === 1}
          className="px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={next}
          disabled={page === totalPages}
          className="px-3 py-1.5 text-sm border rounded-md bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* Pagination 3  */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all border ${
              current === i
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationPage;
