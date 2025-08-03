"use client";
import { useState } from "react";

const PaginationPage = () => {
  const [current, setCurrent] = useState(1);
  const [active, setActive] = useState(1);
  const [selected, setSelected] = useState(1);
  const [page, setPage] = useState(1);
  const [step, setStep] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDot, setCurrentDot] = useState(1);

  const pages = [1, 2, 3, 4, 5];
  const total = 5;
  const totalPages = 5;

  const prev = () => page > 1 && setPage(page - 1);
  const next = () => page < totalPages && setPage(page + 1);

  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
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

      {/* Pagination 4  */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i + 1)}
            className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium text-sm transition-all duration-300
            ${
              active === i + 1
                ? "border-blue-600 text-blue-600 bg-blue-100 ring-2 ring-blue-300"
                : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Pagination 5  */}
      <div className="flex justify-center mt-10 space-x-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className={`w-10 h-10 rounded-md transition-all duration-300 ease-in-out transform font-semibold text-sm ${
              selected === n
                ? "bg-indigo-600 text-white shadow-xl shadow-indigo-300 scale-105"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-indigo-50"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 6  */}
      <div className="flex justify-center mt-10 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              step === i
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>

      {/* Pagination 7  */}
      <div className="flex justify-center mt-10 gap-2">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => setCurrent(n)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              current === n
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 8  */}
      <div className="flex justify-center gap-6 mt-10 border-b border-gray-200">
        {pages.map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`pb-2 text-sm font-medium transition-all duration-300 relative ${
              page === n ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {n}
            {page === n && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-[slide_0.3s_ease-in-out]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Pagination 9  */}
      <div className="flex justify-center gap-3 mt-10">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${
              page === n
                ? "bg-blue-600 text-white shadow-lg shadow-blue-300 scale-105"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 10  */}
      <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={`px-4 py-2 rounded-lg backdrop-blur-md border transition-all duration-300 ${
              active === n
                ? "bg-white/30 border-blue-400 text-blue-700 shadow-inner"
                : "bg-white/10 border-gray-300 text-gray-600 hover:border-blue-300"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 11  */}
      <div className="flex justify-center gap-3 mt-10">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative group
            ${
              currentPage === i + 1
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:text-blue-600"
            }
          `}
          >
            {i + 1}
            <span className="absolute inset-0 rounded-md group-hover:ring-2 group-hover:ring-purple-400 group-hover:scale-105 transition-transform" />
          </button>
        ))}
      </div>

      {/* Pagination 12  */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-blue-100"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 rounded transition-all text-sm font-medium ${
              page === i + 1
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-blue-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-blue-100"
        >
          Next
        </button>
      </div>

      {/* Pagination 13  */}
      <div className="flex justify-center gap-4 mt-10">
        {[1, 2, 3, 4, 5].map((dot) => (
          <button
            key={dot}
            onClick={() => setCurrentDot(dot)}
            className={`w-3 h-3 transition-all duration-300 ${
              currentDot === dot ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Pagination 14  */}
        <div className="flex justify-center mt-6 space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {page}
            </button>
          ))}
        </div>
    </div>
  );
};

export default PaginationPage;
