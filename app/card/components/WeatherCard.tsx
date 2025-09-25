import React from "react";

const WeatherCard = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-6 text-white animate-tilt">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">New York</h3>
            <p className="text-blue-100">Monday, Dec 18</p>
          </div>
          <div className="text-6xl">☀️</div>
        </div>
        <div className="flex items-end space-x-2 mb-6">
          <span className="text-5xl font-light">22°</span>
          <span className="text-xl text-blue-100 mb-2">C</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Sunny</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>18° / 25°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
