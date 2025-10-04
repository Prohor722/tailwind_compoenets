"use client";
import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";

const TiltEffect = () => {
  const [mobileMenu2, setMobileMenu2] = useState(false);
  return (
    <nav
      className="w-full max-w-4xl relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px) rotateX(2deg)",
      }}
    >
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white">AERO</span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {["Products", "Solutions", "Developers", "Company"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="relative text-white/90 hover:text-white font-medium transition-all group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 blur-xl transition-all duration-300"></span>
                </a>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button className="cursor-pointer px-5 py-2 text-white hover:bg-white/10 rounded-xl transition-all">
              Login
            </button>
            <button className="cursor-pointer px-6 py-2 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenu2(!mobileMenu2)}
            className="lg:hidden text-white"
          >
            {mobileMenu2 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu2 && (
          <div className="lg:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
            {["Products", "Solutions", "Developers", "Company"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-white/90 hover:text-white"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TiltEffect;
