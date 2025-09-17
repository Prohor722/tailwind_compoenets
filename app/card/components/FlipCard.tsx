"use client";
import { Code, Zap } from "lucide-react";
import { useState } from "react";

const FlipCard = () => {
  const [likedCards, setLikedCards] = useState(new Set());
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  
  const toggleFlip = (cardId:string) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <div className="h-64 w-80 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          flippedCard === "flip" ? "rotate-y-180" : ""
        }`}
        onClick={() => toggleFlip("flip")}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 p-6 flex flex-col justify-center items-center text-white shadow-2xl">
          <Code className="w-16 h-16 mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold mb-2">Flip Me!</h3>
          <p className="text-center opacity-90">Click to reveal the magic</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 flex flex-col justify-center items-center text-white shadow-2xl">
          <Zap className="w-16 h-16 mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold mb-2">Surprise!</h3>
          <p className="text-center opacity-90">
            3D flip animation with Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
