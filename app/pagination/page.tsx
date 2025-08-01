"use client";
import { useState } from "react";

const PaginationPage = () => {
  const [current, setCurrent] = useState(1);
  const [active, setActive] = useState(1);
  const [selected, setSelected] = useState(1);
  const [page, setPage] = useState(1);
  const [step, setStep] = useState(1);
  const total = 5;
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
    </div>
  );
};

export default PaginationPage;
