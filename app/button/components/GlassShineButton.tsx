import { useState } from "react";

const GlassShineButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 h-fit p-4">
        <button
          className="cursor-pointer relative px-8 py-4 text-white font-bold rounded-lg overflow-hidden 
                     backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300
                     bg-white/10"
          style={{
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative z-10 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-blue-200">
            Glass Shine Button
          </span>

          {/* Glass shine sweep effect */}
          <div
            className={`absolute inset-0 bg-white opacity-30 skew-x-12 transition-transform duration-700 
                        ${
                          isHovered ? "translate-x-full" : "-translate-x-full"
                        }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default GlassShineButton;
