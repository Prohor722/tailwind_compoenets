import { Star } from "lucide-react";

const PulseGlowCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-6 group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Premium Plan</h3>
        <p className="text-white/80 mb-4">
          Unlock all features with our premium subscription.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">$29/mo</span>
          <button className="cursor-pointer px-4 py-2 bg-white/20 rounded-lg text-white font-medium hover:bg-white/30 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PulseGlowCard;
