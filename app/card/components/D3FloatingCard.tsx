"use client"
import { Bookmark, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const D3FloatingCard = () => {
  const [bookmarkedCards, setBookmarkedCards] = useState(new Set());

  const toggleBookmark = (cardId: string) => {
    setBookmarkedCards((prev) => {
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
    <div className="perspective-1000">
      <div className="relative transform-gpu transition-all duration-500 hover:rotate-y-12 hover:-translate-y-2 preserve-3d">
        <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="text-white">
              <h3 className="text-2xl font-bold">3D Float</h3>
              <p className="opacity-90">Interactive Design</p>
            </div>
            <button
              onClick={() => toggleBookmark("float")}
              className="cursor-pointer p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <Bookmark
                className={`w-5 h-5 transition-colors ${
                  bookmarkedCards.has("float")
                    ? "text-yellow-300 fill-yellow-300"
                    : "text-white"
                }`}
              />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Sep 25, 2024</span>
            </div>
          </div>
          <button className="cursor-pointer mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default D3FloatingCard;
