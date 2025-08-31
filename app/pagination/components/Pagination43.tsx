import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Pagination43 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setStyle({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
    });
  }, []);

  // setInterval(() => {
  //   setStyle({
  //     top: `${Math.random() * 100}%`,
  //     left: `${Math.random() * 100}%`,
  //     animationDelay: `${Math.random() * 20}s`,
  //   });
  // }, 100);
  
  const totalPages = 7;
  const onPageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }
  return (
    <div className="relative bg-black rounded-3xl 
    p-12 overflow-hidden h-[400px] w-[400px]"
      title="Pagination-43">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            // style={{
            //   top: `${Math.random() * 100}%`,
            //   left: `${Math.random() * 100}%`,
            //   animationDelay: `${Math.random() * 2}s`
            // }}
            style={style}
          >
            
            </div>

          
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
            className={`absolute w-8 h-8 rounded-full bg-gradient-to-br ${colors[i]} transition-all duration-300 transform hover:scale-125 ${isActive ? 'ring-4 ring-white/50 scale-110' : 'cursor-pointer hover:ring-2 hover:ring-white/30'
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
        className="absolute cursor-pointer bottom-4 left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="absolute cursor-pointer bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

export default Pagination43
