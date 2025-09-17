import { ArrowRight, Globe } from "lucide-react";

const GlassmorphismHoverCard = () => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/25">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Glassmorphism</h3>
        <p className="text-white/70 mb-4">
          Beautiful frosted glass effect with smooth hover animations.
        </p>
        <button className="flex items-center text-cyan-400 font-medium group-hover:text-white transition-colors">
          Learn More{" "}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default GlassmorphismHoverCard;
