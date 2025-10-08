import { Flame, Menu, X } from "lucide-react";
import React, { useState } from "react";

const DepthEffect = () => {
  const [mobileMenu1, setMobileMenu1] = useState(false);
  return (
    <nav
      className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl shadow-2xl overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px) rotateX(2deg)",
      }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"
        style={{ animationDuration: "3s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ transform: "translateZ(20px)" }}
              >
                <Flame className="w-7 h-7 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl"></div>
            </div>
            <span
              className="text-2xl font-black text-white"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
            >
              DEPTH
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            {["Home", "Work", "Services", "Blog", "Contact"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="relative px-5 py-3 text-white/90 hover:text-white font-semibold transition-all duration-300 group"
                  style={{ transform: `translateZ(${10 + idx * 2}px)` }}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 blur-xl transition-all duration-300"></div>
                </a>
              )
            )}
          </div>

          <button
            className="hidden lg:block px-8 py-3 bg-white text-red-600 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ transform: "translateZ(30px)" }}
          >
            Get Started
          </button>

          <button
            onClick={() => setMobileMenu1(!mobileMenu1)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenu1 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu1 && (
          <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-white/20 pt-4">
            {["Home", "Work", "Services", "Blog", "Contact"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-white/90 hover:text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  {item}
                </a>
              )
            )}
            <button className="w-full mt-4 px-8 py-3 bg-white text-red-600 rounded-2xl font-bold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DepthEffect;
