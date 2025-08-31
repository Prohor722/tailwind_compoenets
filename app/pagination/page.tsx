"use client";
import { useEffect, useState } from "react";
import {
  ChevronLeft, ChevronRight,
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
import Pagination41 from "./components/Pagination41";
import Pagination42 from "./components/Pagination42";
import Pagination43 from "./components/Pagination43";
import Pagination44 from "./components/Pagination44";


const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shortPages, setShortPages] = useState([1, 2, 3, 4, 5]);
  const [shortPagesActive, setShortPagesActive] = useState(1);
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [steamAnimation, setSteamAnimation] = useState(false);
  const [matrixChars, setMatrixChars] = useState<Array<{char: string, x: number, delay: number}>>([]);

  const handlePageChange = (page: number) => {
    setSteamAnimation(true);
    setTimeout(() => setSteamAnimation(false), 1000);
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
      <Pagination41 />

      {/* Pagination 42  */}
      <Pagination42 />

      {/* Pagination 43  */}
      <Pagination43 />

      {/* Pagination 44  */}
      <Pagination44 />

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
