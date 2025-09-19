"use client"
import { Eye, Heart } from "lucide-react";
import { useState } from "react";

const LikeButtonCard = () => {
  const [likedCards, setLikedCards] = useState(new Set());

  const toggleLike = (cardId: string) => {
    const newLiked = new Set(likedCards);
    if (newLiked.has(cardId)) {
      newLiked.delete(cardId);
    } else {
      newLiked.add(cardId);
    }
    setLikedCards(newLiked);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <Eye className="w-6 h-6 text-white" />
        </div>
        <button
          onClick={() => toggleLike("like")}
          className={`cursor-pointer p-2 rounded-full transition-all duration-300 ${
            likedCards.has("like")
              ? "bg-red-500 scale-110"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              likedCards.has("like")
                ? "text-white fill-current"
                : "text-slate-400"
            }`}
          />
        </button>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Interactive UI</h3>
      <p className="text-slate-400 mb-4">
        Engaging user interfaces with micro-interactions.
      </p>
      <div className="flex items-center space-x-4 text-sm text-slate-500">
        <span className="flex items-center">
          <Eye className="w-4 h-4 mr-1" /> 1.2k views
        </span>
        <span className="flex items-center">
          <Heart className="w-4 h-4 mr-1" />{" "}
          {likedCards.has("like") ? "1 like" : "0 likes"}
        </span>
      </div>
    </div>
  );
};

export default LikeButtonCard;
