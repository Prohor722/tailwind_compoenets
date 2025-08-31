"use client";
import { useEffect, useState } from "react";
import {
  ChevronLeft, ChevronRight, ArrowLeft,
  ArrowRight, MoreHorizontal, Play, Pause
} from "lucide-react";
import Pagination1 from "./components/Pagination1";
import Pagination2 from "./components/Pagination2";
import Pagination3 from "./components/Pagination3";
import Pagination4 from "./components/Pagination4";
import Pagination5 from "./components/Pagination5";
import Pagination6 from "./components/Pagination6";
import Pagination7 from "./components/Pagination7";
import Pagination8 from "./components/Pagination8";
import Pagination9 from "./components/Pagination9";
import Pagination10 from "./components/Pagination10";
import Pagination11 from "./components/Pagination11";
import Pagination12 from "./components/Pagination12";
import Pagination13 from "./components/Pagination13";
import Pagination14 from "./components/Pagination14";
import Pagination15 from "./components/Pagination15";
import Pagination16 from "./components/Pagination16";
import Pagination17 from "./components/Pagination17";
import Pagination17a from "./components/pagination17a";
import Pagination18 from "./components/Pagination18";
import Pagination19 from "./components/Pagination19";
import Pagination20 from "./components/Pagination20";
import Pagination21 from "./components/Pagination21";
import Pagination22 from "./components/Pagination22";
import Pagination23 from "./components/Pagination23";
import Pagination24 from "./components/Pagination24";
import Pagination25 from "./components/Pagination25";
import Pagination26 from "./components/Pagination26";
import Pagination27 from "./components/Pagination27";
import Pagination28 from "./components/Pagination28";
import Pagination29 from "./components/Pagination29";
import Pagination30 from "./components/Pagination30";
import Pagination31 from "./components/Pagination31";
import Pagination32 from "./components/Pagination32";
import Pagination33 from "./components/Pagination33";
import Pagination34 from "./components/Pagination34";
import Pagination35 from "./components/Pagination35";
import Pagination36 from "./components/Pagination36";
import Pagination37 from "./components/Pagination37";
import Pagination38 from "./components/Pagination38";
import Pagination39 from "./components/Pagination39";
import Pagination40 from "./components/Pagination40";


const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shortPages, setShortPages] = useState([1, 2, 3, 4, 5]);
  const [shortPagesActive, setShortPagesActive] = useState(1);
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

  const totalPages = 5;
  const angle = ((currentPage - 1) / (totalPages - 1)) * 360;


  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {/* Pagination 1  */}
      <Pagination1 />

      {/* Pagination 2  */}
      <Pagination2 />

      {/* Pagination 3  */}
      <Pagination3 />

      {/* Pagination 4  */}
      <Pagination4 />

      {/* Pagination 5  */}
      <Pagination5 />

      {/* Pagination 6  */}
      <Pagination6 />

      {/* Pagination 7  */}
      <Pagination7 />

      {/* Pagination 8  */}
      <Pagination8 />

      {/* Pagination 9  */}
      <Pagination9 />

      {/* Pagination 10  */}
      <Pagination10 />

      {/* Pagination 11  */}
      <Pagination11 />

      {/* Pagination 12  */}
      <Pagination12 />

      {/* Pagination 13  */}
      <Pagination13 />

      {/* Pagination 14  */}
      <Pagination14 />

      {/* Pagination 15  */}
      <Pagination15 />

      {/* Pagination 16  */}
      <Pagination16 />

      {/* Pagination 17  */}
      <Pagination17 />

      {/* Pagination 17.1  */}
      <Pagination17a />

      {/* Pagination 18  */}
      <Pagination18 />

      {/* Pagination 19  */}
      <Pagination19 />

      {/* Pagination 20  */}
      <Pagination20 />

      {/* Pagination 21  */}
      <Pagination21 />

      {/* Pagination 22  */}
      <Pagination22 />

      {/* Pagination 23  */}
      <Pagination23 />

      {/* Pagination 24  */}
      <Pagination24 />

      {/* Pagination 25  */}
      <Pagination25 />

      {/* Pagination 26  */}
      <Pagination26 />

      {/* Pagination 27  */}
      <Pagination27 />

      {/* Pagination 28  */}
      <Pagination28 />

      {/* Pagination 29  */}
      <Pagination29 />

      {/* Pagination 30  */}
      <Pagination30 />

      {/* Pagination 31  */}
      <Pagination31 />

      {/* Pagination 32  */}
      <Pagination32 />

      {/* Pagination 33  */}
      <Pagination33 />
      

      {/* Pagination 34  */}
      <Pagination34 />
      

      {/* Pagination 35  */}
      <Pagination35 />

      {/* Pagination 36  */}
      <Pagination36 />

      {/* Pagination 37  */}
      <Pagination37 />

      {/* Pagination 38  HAVE-BUG */}
      <Pagination38 />

      {/* Pagination 39  */}
      <Pagination39 />

      {/* Pagination 40  */}
      <Pagination40 />

      {/* Pagination 41  */}
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
