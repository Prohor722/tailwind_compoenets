"use client";
import { X } from "lucide-react";
import { useState } from "react";

const WeatherDashboardModal = () => {
  const [activeModal, setActiveModal] = useState("");

  const closeModal = () => setActiveModal("");

  const weatherData = {
    current: { temp: 72, condition: "Sunny", humidity: 45, wind: 8 },
    forecast: [
      { day: "Today", high: 75, low: 65, condition: "☀️" },
      { day: "Tomorrow", high: 73, low: 63, condition: "🌤️" },
      { day: "Wednesday", high: 68, low: 58, condition: "🌧️" },
    ],
  };

  return (
    <div>
      <div
        className={`fixed overflow-scroll inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50
        ${activeModal === "weatherDashboard" ? "block" : "hidden"}`}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 max-w-sm w-full max-h-[80vh] shadow-2xl overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Weather Dashboard</h3>
            <button
              onClick={closeModal}
              className="cursor-pointer text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="text-4xl mb-3">☀️</div>
            <div className="text-3xl font-bold text-white mb-1">
              {weatherData.current.temp}°
            </div>
            <div className="text-white/80 text-base">
              {weatherData.current.condition}
            </div>
            <div className="text-white/60 text-xs">San Francisco, CA</div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-white/60 text-xs mb-1">Humidity</div>
              <div className="text-white font-bold text-sm">
                {weatherData.current.humidity}%
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-white/60 text-xs mb-1">Wind</div>
              <div className="text-white font-bold text-sm">
                {weatherData.current.wind} mph
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-white/60 text-xs mb-1">UV Index</div>
              <div className="text-white font-bold text-sm">6</div>
            </div>
          </div>

          <div className="space-y-2 mb-5">
            <h4 className="text-white font-semibold text-sm">3-Day Forecast</h4>
            {weatherData.forecast.map((day, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-2 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{day.condition}</span>
                  <span className="text-white font-medium text-sm">
                    {day.day}
                  </span>
                </div>
                <div className="text-white text-sm">
                  <span className="font-bold">{day.high}°</span>
                  <span className="text-white/60 ml-1">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={closeModal}
            className="cursor-pointer w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm"
          >
            View Full Forecast
          </button>
        </div>
      </div>

      <button
        onClick={() => setActiveModal("weatherDashboard")}
        className="border-4 border-blue-600 hover:border-blue-800 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        Weather Dashboard Modal
      </button>
    </div>
  );
};

export default WeatherDashboardModal;
