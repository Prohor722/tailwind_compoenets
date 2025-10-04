"use client";
import { Compass, Menu, X } from "lucide-react";
import React, { useState } from "react";

const GlassmorphicFloatingParticles = () => {
  const [mobileMenu3, setMobileMenu3] = useState(false);

  return (
    <nav className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Compass
                className="w-8 h-8 text-cyan-400 animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full"></div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ORBIT
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Explore", "Create", "Learn"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative text-white/80 hover:text-white font-medium transition-all group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="cursor-pointer relative px-6 py-2 overflow-hidden rounded-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
              <span className="relative text-white font-bold">Connect</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenu3(!mobileMenu3)}
            className="md:hidden text-white"
          >
            {mobileMenu3 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu3 && (
          <div className="md:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
            {["Home", "Explore", "Create", "Learn"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-white/80 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default GlassmorphicFloatingParticles;
