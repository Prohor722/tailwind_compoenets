import React from "react";

const GlassmorphismProfileCard = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative glass-effect bg-white/10 rounded-2xl p-6 text-white border border-white/20 hover:border-white/30 transition-all duration-300 animate-float">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
            JD
          </div>
          <div>
            <h3 className="font-bold text-xl">John Doe</h3>
            <p className="text-gray-300">UI/UX Designer</p>
          </div>
        </div>
        <p className="text-gray-200 mb-4">
          Creating beautiful digital experiences with modern design principles.
        </p>
        <div className="flex space-x-3">
          <button className="flex-1 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 text-sm font-medium transition-colors">
            Follow
          </button>
          <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg px-4 py-2 text-sm font-medium transition-all">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismProfileCard;
