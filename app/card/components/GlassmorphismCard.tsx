"use client"
import { ArrowRight, Heart, Star } from "lucide-react";
import { useState } from "react";

const GlassmorphismCard = () => {
  const [likedCards, setLikedCards] = useState(new Set());

  const toggleLike = (cardId: string) => {
    setLikedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl">
            <Star className="w-6 h-6 text-white" />
          </div>
          <button
            onClick={() => toggleLike("glass")}
            className="cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                likedCards.has("glass")
                  ? "text-red-400 fill-red-400"
                  : "text-white/70"
              }`}
            />
          </button>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Glassmorphism Design
        </h3>
        <p className="text-white/70 mb-4">
          Beautiful frosted glass effect with vibrant gradients and smooth
          interactions.
        </p>
        <button className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
          Learn More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GlassmorphismCard;
