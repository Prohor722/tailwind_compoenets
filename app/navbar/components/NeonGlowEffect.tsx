import React from "react";

const NeonGlowEffect = () => {
  return (
    <nav className="relative bg-black/80 backdrop-blur-sm border-2 border-cyan-500/50 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20">
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-xl opacity-50 animate-pulse"></div>
            </div>
            <span
              className="text-2xl font-black text-cyan-400"
              style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
            >
              CYBER
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {["Home", "Projects", "Lab", "Contact"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative px-5 py-2 text-cyan-300 hover:text-cyan-400 font-medium transition-all group"
                style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.3)" }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-cyan-400/50"></div>
              </a>
            ))}
          </div>

          <button className="hidden lg:block px-6 py-2 bg-cyan-500 text-black rounded-lg font-bold hover:bg-cyan-400 transition-all relative group">
            <span className="relative z-10">Connect</span>
            <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-all"></div>
          </button>

          <button
            onClick={() => setMobileMenu2(!mobileMenu2)}
            className="lg:hidden text-cyan-400 p-2"
          >
            {mobileMenu2 ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenu2 && (
          <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-cyan-500/30 pt-4">
            {["Home", "Projects", "Lab", "Contact"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-cyan-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-cyan-500 text-black rounded-lg font-bold mt-4">
              Connect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NeonGlowEffect;
