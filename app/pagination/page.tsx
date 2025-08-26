"use client";
import { useEffect, useState } from "react";
import {
  ChevronLeft, ChevronRight, ArrowLeft,
  ArrowRight, MoreHorizontal, Play, Pause
} from "lucide-react";
import Pagination1 from "./components/Pagination1";
import Pagination2 from "./components/Pagination2";


const PaginationPage = () => {
  const [current, setCurrent] = useState(1);
  const [active, setActive] = useState(1);
  const [selected, setSelected] = useState(1);
  const [page, setPage] = useState(1);
  const [step, setStep] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDot, setCurrentDot] = useState(1);
  const [shortPages, setShortPages] = useState([1, 2, 3, 4, 5]);
  const [shortPagesActive, setShortPagesActive] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedButton, setSelectedButton] = useState<"left" | "right" | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [steamAnimation, setSteamAnimation] = useState(false);
  const [matrixChars, setMatrixChars] = useState<Array<{char: string, x: number, delay: number}>>([]);

  const handlePageChange = (page: number) => {
    setSteamAnimation(true);
    setTimeout(() => setSteamAnimation(false), 1000);
    onPageChange(page);
  };

  const triggerAnimation = (page: number) => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    onPageChange(page);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Auto-advance pages when "playing"
    if (!isPlaying && currentPage < totalPages) {
      const interval = setInterval(() => {
        setCurrentPage(prev => {
          if (prev >= totalPages) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);

      setTimeout(() => {
        if (isPlaying) setIsPlaying(false);
        clearInterval(interval);
      }, (totalPages - currentPage) * 2000);
    }
  };


  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const longPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const last = shortPages[shortPages.length - 1];
    const first = shortPages[0];

    if (
      (shortPagesActive === first && shortPagesActive > longPages[1]) ||
      (shortPagesActive === last && //active=9 last=9
        shortPagesActive < longPages.length - 1) //len 10
    ) {
      setShortPages([
        shortPagesActive - 2,
        shortPagesActive - 1,
        shortPagesActive,
        shortPagesActive + 1,
        shortPagesActive + 2,
      ]);
    } else if (
      shortPagesActive === last && //active=9 last=9
      shortPagesActive < longPages.length //len 9
    ) {
      setShortPages([
        shortPagesActive - 3,
        shortPagesActive - 2,
        shortPagesActive - 1,
        shortPagesActive,
        shortPagesActive + 1,
      ]);
    } else if (shortPagesActive === first && shortPagesActive > longPages[0]) {
      setShortPages([
        shortPagesActive - 1,
        shortPagesActive,
        shortPagesActive + 1,
        shortPagesActive + 2,
        shortPagesActive + 3,
      ]);
    }


    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン';
    const newChars = Array.from({ length: 100 }, () => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setMatrixChars(newChars);

  }, [shortPagesActive]);

  const pages = [1, 2, 3, 4, 5];
  const total = 5;
  const totalPages = 5;
  const progress = (currentPage / totalPages) * 100;
  const angle = ((currentPage - 1) / (totalPages - 1)) * 360;

  const prev = () => page > 1 && setPage(page - 1);
  const next = () => page < totalPages && setPage(page + 1);

  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {/* Simple Pagination  */}
      <Pagination1 />

      {/* Pagination 2  */}
      <Pagination2 />

      {/* Pagination 3  */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all border ${current === i
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
            ${active === i + 1
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
            className={`w-10 h-10 rounded-md transition-all duration-300 ease-in-out transform font-semibold text-sm ${selected === n
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
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${step === i
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
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${current === n
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
            className={`pb-2 text-sm font-medium transition-all duration-300 relative ${page === n ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
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
            className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${page === n
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
            className={`px-4 py-2 rounded-lg backdrop-blur-md border transition-all duration-300 ${active === n
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
            ${currentPage === i + 1
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
            className={`px-3 py-2 rounded transition-all text-sm font-medium ${page === i + 1
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
            className={`w-3 h-3 transition-all duration-300 ${currentDot === dot ? "bg-blue-600 scale-125" : "bg-gray-300"
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

      {/* Pagination 15  */}
      <div className="flex justify-center mt-6 space-x-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${page === active
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Pagination 16  */}
      <div className="flex justify-center mt-6 items-center gap-2">
        <button
          className={`px-3 py-1 rounded-md 
          ${active > pages[0]
              ? "bg-orange-600 text-white border-gray-700 hover:bg-orange-700 hover:text-yellow-300 hover:border-white"
              : "bg-white text-gray-700 border hover:bg-blue-100 cursor-not-allowed"
            }`}
          onClick={() => active > pages[0] && setActive(active - 1)}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`px-3 py-1 rounded-md transition
              ${active === page
                ? "bg-orange-600 text-white border-gray-700 hover:bg-orange-700 hover:text-yellow-300 hover:border-white"
                : "bg-white text-gray-700 border hover:bg-blue-100"
              }`}
          >
            {page}
          </button>
        ))}
        <button
          className={`px-3 py-1 rounded-md transition
          ${active < pages.length
              ? "bg-orange-600 text-white border-gray-700 hover:bg-orange-700 hover:text-yellow-300 hover:border-white"
              : "bg-white text-gray-700 border hover:bg-blue-100 cursor-not-allowed"
            }
          `}
          onClick={() => active < pages.length && setActive(active + 1)}
        >
          Next
        </button>
      </div>

      {/* Pagination 17  */}
      <div className="flex justify-center mt-6 gap-6">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`relative font-medium transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0  hover:after:w-full after:transition-all 
            ${page === active
                ? "after:w-full hover:text-yellow-300 text-blue-500 after:bg-blue-500 hover:after:bg-yellow-300"
                : "text-gray-700 hover:text-white after:w-0 after:bg-gray-200"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Pagination 17  */}
      <div className="flex justify-center mt-6 items-center gap-2 text-sm font-medium">
        {shortPages.map((page) => (
          <button
            onClick={() => setShortPagesActive(page)}
            key={page}
            className={`px-2 py-1 rounded 
              ${shortPagesActive === page
                ? "bg-blue-600 text-white hover:text-white hover:bg-blue-900"
                : "bg-gray-100 text-black hover:text-white hover:bg-gray-700"
              }`}
          >
            {page}
          </button>
        ))}

        {/* <button className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
          2
        </button>
        <span className="text-gray-500">...</span>
        <button className="px-2 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          8
        </button>
        <button className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
          9
        </button>
        <button className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
          10
        </button> */}
      </div>

      {/* Pagination 18  */}
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl px-6 py-4 shadow-xl flex gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 text-sm font-semibold rounded-full transition-all duration-300 ${page === i + 1
              ? "bg-white/60 text-blue-700 shadow-inner ring-2 ring-blue-500"
              : "text-white hover:bg-white/20"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Pagination 19  */}
      <div className="flex items-center justify-center mt-20 gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 transition"
        >
          <ChevronLeft />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${page === i + 1
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white border text-gray-600 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Pagination 20  */}
      <div className="flex justify-center mt-10 gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={`w-10 h-10 rounded-full border text-sm font-semibold transition-all duration-300 
            ${active === n
                ? "border-blue-600 text-blue-600 ring-2 ring-blue-300 animate-pulse"
                : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500"
              }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 21  */}
      <div className="flex justify-center mt-12 gap-4 p-4 backdrop-blur-md bg-white/30 border border-white/50 rounded-xl shadow-lg">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setCurrentDot(n)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${currentDot === n
              ? "bg-blue-600 scale-125 shadow-md"
              : "bg-gray-300 hover:bg-blue-400"
              }`}
          />
        ))}
      </div>

      {/* Pagination 22  */}
      <div className="flex justify-center mt-10 gap-3 bg-[#f1f3f5] p-6 rounded-xl shadow-inner">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActivePage(n)}
            className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 shadow 
            ${activePage === n
                ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                : "bg-[#f1f3f5] text-gray-700 hover:bg-blue-100"
              }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 23  */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-blue-100 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Prev
        </button>

        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-medium ${page === i + 1
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, total))}
          className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-blue-100 transition"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Pagination 24  */}
      <div className="flex justify-center mt-12 bg-white/20 backdrop-blur-md rounded-lg px-6 py-4 shadow-inner gap-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 
            ${selected === n
                ? " text-blue-200 shadow-lg ring-2 ring-blue-300"
                : "text-white hover:bg-white/20"
              }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 25  */}
      <div className="flex justify-center mt-12 gap-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={`relative px-4 py-2 font-semibold text-sm transform transition-all duration-300 skew-x-6
          ${active === n
                ? "bg-indigo-600 text-white shadow-md -skew-x-6"
                : "bg-gray-200 text-gray-800 hover:bg-indigo-100 -skew-x-6"
              }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Pagination 26  */}
      <div className="relative mt-14 flex justify-center gap-6">
        {pages.map((n) => (
          <div key={n} className="relative flex flex-col items-center">
            <button
              onClick={() => setPage(n)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
              ${page === n
                  ? "bg-blue-600 scale-125 animate-pulse"
                  : "bg-gray-400 hover:bg-blue-400"
                }`}
            />

            {/* {page === n && (
            <span className="mt-1 w-1 h-4 bg-blue-500 animate-pulse rounded" />
          )} */}
          </div>
        ))}
      </div>

      {/* Pagination 27  */}
      <div className="w-full max-w-md mt-12 relative">
        {/* Background Bar */}
        <div className="w-full h-[20px] bg-gray-200 rounded-full overflow-hidden relative z-10">
          <div
            className="h-[20px] bg-indigo-500 transition-all duration-500"
            style={{ width: `${(page / total) * 100}%` }}
          />
        </div>

        {/* Page numbers overlayed on top */}
        <div className="absolute top-0 left-0 w-full h-[20px] flex justify-evenly items-center z-20 text-xs text-white">
          {pages.map((p) => (
            <button
              onClick={() => setPage(p)}
              key={p}
              className={`cursor-pointer w-full h-full 
                ${page === p
                  ? "text-yellow-300 font-bold scale-105"
                  : "font-semibold"
                }
                ${p > page ? "text-gray-700" : ""}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Pagination 27.2  */}
      <div className="flex justify-center mt-12 gap-4 bg-white/20 backdrop-blur-lg p-4 rounded-2xl shadow-lg">
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm ${page === i + 1
              ? "bg-white/40 text-blue-700 ring-2 ring-blue-300"
              : "bg-white/10 text-gray-700 hover:bg-white/20"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Pagination 28  */}
      <div className="flex mt-16">
        <div className="flex flex-col gap-4 px-4 border-r border-gray-300">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${page === p
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="p-6 text-lg font-semibold text-blue-800">
          You are on Section {page}
        </div>
      </div>

      {/* Pagination 29  */}
      <div className="flex flex-col gap-4 items-center mt-12">
        <div className="flex gap-3">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 rounded-full transition ${page === i + 1
                ? "bg-pink-500 text-white font-bold scale-110"
                : "bg-gray-100 text-gray-800 hover:bg-pink-100"
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

      {/* Pagination 30  */}
      <div className="flex items-center space-x-1 p-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          <ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={index} className="flex items-center justify-center w-10 h-10 text-gray-500">
              <MoreHorizontal size={16} />
            </span>
          ) : (
            <button
              key={page}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              className={`flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-md border transition-all duration-300 font-medium ${currentPage === page
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-110'
                : 'bg-white/20 border-white/30 text-gray-700 hover:bg-white/30 hover:scale-105'
                }`}
            >
              {page}
            </button>
          )
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination 31  */}
      <div className="flex items-center justify-center space-x-3 p-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ChevronLeft size={16} />
          <span className="text-sm font-medium">Prev</span>
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 3) {
              pageNum = i + 1;
            } else if (currentPage === 1) {
              pageNum = i + 1;
            } else if (currentPage === totalPages) {
              pageNum = totalPages - 2 + i;
            } else {
              pageNum = currentPage - 1 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-12 h-12 rounded-full font-semibold transition-all duration-200 transform hover:-translate-y-0.5 ${currentPage === pageNum
                  ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/40 scale-110'
                  : 'bg-white text-gray-700 shadow-md border border-gray-200 hover:shadow-lg'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <span className="text-sm font-medium">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination 32  */}
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{currentPage}</div>
            <div className="text-sm text-gray-500">of {totalPages}</div>
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-0 h-full w-4 bg-white rounded-full shadow-md transition-all duration-300 ease-out transform -translate-x-2"
            style={{ left: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Start</span>
          <span>End</span>
        </div>
      </div>

      {/* Pagination 33  */}
      <div className="flex items-center justify-center space-x-6 p-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => onPageChange(i + 1)}
              className={`transition-all duration-200 rounded-full ${currentPage === i + 1
                ? 'w-8 h-3 bg-gradient-to-r from-indigo-500 to-purple-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination 34  */}
      <div className="flex items-center justify-center space-x-4 p-8 bg-gray-200 rounded-3xl">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-2xl bg-gray-200 shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.25)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] flex items-center justify-center text-gray-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center space-x-3">
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

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-12 h-12 rounded-2xl font-semibold transition-all duration-200 ${currentPage === pageNum
                  ? 'bg-gray-200 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] text-blue-600'
                  : 'bg-gray-200 shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.25)] text-gray-700'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-2xl bg-gray-200 shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.25)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] flex items-center justify-center text-gray-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination 35  */}
      <div className="flex items-center justify-center space-x-6 p-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="group relative w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
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
                  : 'bg-gradient-to-br from-white to-gray-100 text-gray-700 shadow-lg hover:shadow-xl hover:scale-105'
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
          className="group relative w-14 h-14 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <ArrowRight className="text-gray-700 relative z-10" size={20} />
        </button>
      </div>

      {/* Pagination 36  */}
      <div className="flex items-center justify-center space-x-1 p-6 bg-black rounded-3xl">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-cyan-500/50"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="relative flex items-center">
          <div
            className="absolute h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-pink-500/50"
            style={{
              width: '48px',
              left: `${(currentPage - 1) * 52}px`
            }}
          />
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

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`relative w-12 h-12 rounded-full font-semibold text-sm transition-all duration-300 z-10 ${currentPage === pageNum
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white hover:scale-105'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-cyan-500/50"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pagination 37  */}
      <div className="bg-gray-900 rounded-2xl p-6 max-w-md mx-auto border border-gray-700">
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
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <div className="w-2 h-4 bg-current rounded-sm mr-1" />
            <div className="w-0 h-0 border-l-4 border-l-current border-t-2 border-t-transparent border-b-2 border-b-transparent" />
          </button>

          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-400 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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

      {/* Pagination 38  */}
      <div className="relative p-8 bg-black rounded-3xl overflow-hidden">
        {/* Holographic background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 via-green-500/10 to-yellow-500/10"
            style={{ animation: 'hologram 3s ease-in-out infinite alternate' }} />
        </div>

        <style jsx>{`
        @keyframes hologram {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
      `}</style>

        <div className="relative z-10 flex items-center justify-center space-x-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="group relative w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 hover:text-white hover:border-cyan-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <ChevronLeft size={18} className="relative z-10" />
          </button>

          <div className="flex items-center space-x-2">
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

              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`group relative w-12 h-12 rounded-lg font-bold transition-all duration-300 overflow-hidden ${isActive
                    ? 'bg-gradient-to-r from-pink-500/30 to-violet-500/30 backdrop-blur-sm border-2 border-pink-400 text-pink-300 shadow-lg shadow-pink-500/50'
                    : 'bg-gradient-to-r from-gray-700/20 to-gray-600/20 backdrop-blur-sm border border-gray-500/30 text-gray-300 hover:text-white hover:border-gray-300'
                    }`}
                >
                  <div className={`absolute inset-0 transition-transform duration-500 ${isActive
                    ? 'bg-gradient-to-r from-pink-400/20 to-violet-500/20'
                    : 'bg-gradient-to-r from-gray-400/10 to-gray-500/10 translate-x-full group-hover:translate-x-0'
                    }`} />
                  <span className="relative z-10">{pageNum}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="group relative w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 hover:text-white hover:border-cyan-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <ChevronRight size={18} className="relative z-10" />
          </button>
        </div>
      </div>

      {/* Pagination 39  */}
      <div className="flex items-center justify-center space-x-6 p-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="group relative w-16 h-16 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg transform translate-x-1 translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform translate-x-2 translate-y-2" />
          <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:transform group-hover:scale-105 transition-transform duration-300">
            <ChevronLeft size={20} />
          </div>
        </button>

        <div className="flex items-end space-x-3">
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
            const height = isActive ? 20 : 16;

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className="group relative transition-all duration-300"
                style={{
                  transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)',
                  width: '64px',
                  height: `${height * 4}px`
                }}
              >
                <div className={`absolute inset-0 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 ${isActive
                  ? 'bg-gradient-to-br from-pink-400 to-purple-600'
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`} />
                <div className={`absolute inset-0 rounded-lg transform translate-x-1 translate-y-1 ${isActive
                  ? 'bg-gradient-to-br from-pink-300 to-purple-500'
                  : 'bg-gradient-to-br from-gray-300 to-gray-500'
                  }`} />
                <div className={`absolute inset-0 rounded-lg transform translate-x-2 translate-y-2 ${isActive
                  ? 'bg-gradient-to-br from-pink-500 to-purple-700'
                  : 'bg-gradient-to-br from-gray-500 to-gray-700'
                  }`} />
                <div className={`relative w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:transform group-hover:scale-105 transition-transform duration-300 ${isActive
                  ? 'bg-gradient-to-br from-pink-400 to-purple-600'
                  : 'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`}>
                  {pageNum}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="group relative w-16 h-16 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg transform translate-x-1 translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform translate-x-2 translate-y-2" />
          <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:transform group-hover:scale-105 transition-transform duration-300">
            <ChevronRight size={20} />
          </div>
        </button>
      </div>

      {/* Pagination 40  */}
      <div className="bg-gray-900 rounded-3xl p-8 border-2 border-green-500/30 shadow-2xl shadow-green-500/20">
        <div className="flex items-center justify-center space-x-8">
          {/* D-Pad Style Navigation */}
          <div className="relative">
            <div className="w-24 h-24 bg-gray-800 rounded-lg border-2 border-green-400/50 flex items-center justify-center">
              <div className="relative w-16 h-16">
                {/* Left Arrow */}
                <button
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  onMouseDown={() => setSelectedButton('left')}
                  onMouseUp={() => setSelectedButton(null)}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-sm flex items-center justify-center text-green-400 transition-all duration-150 ${selectedButton === 'left'
                    ? 'bg-green-500 text-white scale-95 shadow-lg shadow-green-500/50'
                    : 'bg-gray-700 hover:bg-gray-600'
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  onMouseDown={() => setSelectedButton('right')}
                  onMouseUp={() => setSelectedButton(null)}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-sm flex items-center justify-center text-green-400 transition-all duration-150 ${selectedButton === 'right'
                    ? 'bg-green-500 text-white scale-95 shadow-lg shadow-green-500/50'
                    : 'bg-gray-700 hover:bg-gray-600'
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                >
                  <ChevronRight size={16} />
                </button>

                {/* Center Display */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  {currentPage}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 4) {
                  pageNum = i + 1;
                } else if (currentPage <= 2) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 1) {
                  pageNum = totalPages - 3 + i;
                } else {
                  pageNum = currentPage - 1 + i;
                }

                const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500'];
                const isActive = currentPage === pageNum;

                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`w-12 h-12 rounded-full font-bold text-white transition-all duration-200 transform hover:scale-110 active:scale-95 ${isActive
                      ? `${colors[i % colors.length]} shadow-lg shadow-current/50 ring-4 ring-white/30`
                      : `${colors[i % colors.length]}/70 hover:${colors[i % colors.length]}`
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <div className="text-center text-green-400 text-sm font-mono">
              LEVEL {currentPage} / {totalPages}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination 41  */}
      <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 rounded-full p-8 relative" style={{ width: '300px', height: '300px' }}>
        {/* Compass Background */}
        <div className="absolute inset-4 rounded-full border-4 border-amber-400/30 bg-gradient-to-br from-amber-100/10 to-orange-100/10 backdrop-blur-sm">
          {/* Direction Markers */}
          {['N', 'E', 'S', 'W'].map((direction, index) => (
            <div
              key={direction}
              className="absolute text-amber-300 font-bold text-lg"
              style={{
                top: index === 0 ? '10px' : index === 2 ? 'calc(100% - 30px)' : '50%',
                left: index === 1 ? 'calc(100% - 20px)' : index === 3 ? '10px' : '50%',
                transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateY(-50%)'
              }}
            >
              {direction}
            </div>
          ))}

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {currentPage}
          </div>

          {/* Compass Needle */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-red-500 to-red-300 rounded-full origin-bottom transition-transform duration-500"
            style={{
              transform: `translate(-50%, -100%) rotate(${angle}deg)`,
              transformOrigin: 'bottom center'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-red-400" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={20} />
        </button>

        {/* Page Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-amber-300 text-sm font-mono">
          {currentPage} of {totalPages}
        </div>
      </div>

      {/* Pagination 42  */}
      <div className="relative bg-black rounded-3xl p-12 overflow-hidden" style={{ width: '400px', height: '400px' }}>
        {/* Stars Background */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Central Sun */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-lg shadow-orange-500/50 animate-pulse">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center text-white font-bold">
            {currentPage}
          </div>
        </div>

        {/* Orbital Paths */}
        {Array.from({ length: Math.min(3, Math.ceil(totalPages / 3)) }, (_, orbit) => (
          <div
            key={orbit}
            className="absolute top-1/2 left-1/2 border border-gray-600/30 rounded-full"
            style={{
              width: `${120 + orbit * 60}px`,
              height: `${120 + orbit * 60}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        {/* Planet Pages */}
        {Array.from({ length: Math.min(totalPages, 9) }, (_, i) => {
          const orbit = Math.floor(i / 3);
          const position = i % 3;
          const radius = 60 + orbit * 30;
          const angle = (position * 120) + (orbit * 40);
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          const pageNum = i + 1;
          const isActive = currentPage === pageNum;
          const colors = [
            'from-blue-400 to-blue-600',
            'from-green-400 to-green-600',
            'from-purple-400 to-purple-600',
            'from-pink-400 to-pink-600',
            'from-cyan-400 to-cyan-600',
            'from-yellow-400 to-yellow-600',
            'from-red-400 to-red-600',
            'from-indigo-400 to-indigo-600',
            'from-teal-400 to-teal-600'
          ];

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              onMouseEnter={() => setHoveredPlanet(pageNum)}
              onMouseLeave={() => setHoveredPlanet(null)}
              className={`absolute w-8 h-8 rounded-full bg-gradient-to-br ${colors[i]} transition-all duration-300 transform hover:scale-125 ${isActive ? 'ring-4 ring-white/50 scale-110' : ''
                }`}
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
                animation: isActive ? `orbit-${i} 10s linear infinite` : 'none'
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center text-white text-xs font-bold">
                {pageNum}
              </div>
              {hoveredPlanet === pageNum && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap">
                  Page {pageNum}
                </div>
              )}
            </button>
          );
        })}

        {/* Navigation Controls */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination 43  */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900 rounded-2xl p-8">
        <div className="flex items-end justify-center space-x-1 mb-6">
          {Array.from({ length: totalPages }, (_, i) => {
            const height = currentPage === i + 1 ? 60 : Math.random() * 40 + 20;
            const isActive = currentPage === i + 1;

            return (
              <button
                key={i + 1}
                onClick={() => triggerAnimation(i + 1)}
                className={`rounded-t-lg transition-all duration-300 hover:opacity-80 ${isActive ? 'bg-gradient-to-t from-pink-500 to-purple-400' : 'bg-gradient-to-t from-gray-600 to-gray-400'
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
            className="group flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
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
            className="group flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <span className="text-sm">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Pagination 44  */}
      <div className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 rounded-2xl p-8 border-4 border-amber-600/50 shadow-2xl">
        {/* Steam Effect */}
        {steamAnimation && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: '20px',
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center space-x-6">
          {/* Left Gear */}
          <div className="relative">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-4 border-amber-500 flex items-center justify-center text-white transition-transform hover:rotate-45 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:rotate-0"
            >
              <ChevronLeft size={24} />
              {/* Gear Teeth */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-amber-500"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-30px)`,
                    transformOrigin: 'bottom center'
                  }}
                />
              ))}
            </button>
          </div>

          {/* Main Display */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
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

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-12 h-12 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${isActive
                      ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/50 border-2 border-yellow-300'
                      : 'bg-gradient-to-br from-amber-700 to-amber-900 text-amber-200 border-2 border-amber-600/50 hover:from-amber-600 hover:to-amber-800'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Pressure Gauge */}
            <div className="relative w-24 h-12 bg-black rounded-t-full border-2 border-amber-600 overflow-hidden">
              <div
                className="absolute bottom-0 left-0 bg-gradient-to-t from-red-600 to-yellow-400 transition-all duration-500"
                style={{
                  width: '100%',
                  height: `${(currentPage / totalPages) * 100}%`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                {Math.round((currentPage / totalPages) * 100)}%
              </div>
            </div>
          </div>

          {/* Right Gear */}
          <div className="relative">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-4 border-amber-500 flex items-center justify-center text-white transition-transform hover:-rotate-45 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:rotate-0"
            >
              <ChevronRight size={24} />
              {/* Gear Teeth */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-amber-500"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-30px)`,
                    transformOrigin: 'bottom center'
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Pagination 45  */}
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

    </div>
  );
};

export default PaginationPage;
