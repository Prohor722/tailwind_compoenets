import React from "react";

const MusicPlayerCard = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-white shadow-2xl">
      <div className="aspect-square bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <span className="text-4xl relative z-10">🎵</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-bold">Midnight City</h3>
        <p className="text-gray-400">M83</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">1:23</span>
          <div className="flex-1 bg-gray-700 rounded-full h-1">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1 rounded-full w-1/3"></div>
          </div>
          <span className="text-xs text-gray-400">4:01</span>
        </div>
        <div className="flex items-center justify-between">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 10 6.417 10 7.192v5.616c0 .775-.792.999-1.264.213L6.34 10.213c-.394-.66-.106-1.213.632-1.213h1.264z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="w-14 h-14 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.264-11.979c.472.786 1.264.562 1.264-.213V6.192c0-.775-.792-.999-1.264-.213l-2.395 4.008c-.394.66-.106 1.213.632 1.213h1.264z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerCard;
