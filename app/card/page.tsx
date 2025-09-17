import { Basic } from "next/font/google";
import Image from "next/image";
import React from "react";
import BasicShadowCard from "./components/BasicShadowCard";
import ImageCard from "./components/ImageCard";
import BorderedCard from "./components/BorderedCard";
import ProfileCard from "./components/ProfileCard";
import ColoredCard from "./components/ColoredCard";
import GlassmorphicCard from "./components/GlassmorphicCard";
import GlassmorphismHoverCard from "./components/GlassmorphismHoverCard";
import HoverZoomImageCard from "./components/HoverZoomImageCard";
import AnimatedCard from "./components/AnimatedCard";

const Card = () => {
  const imageList = [
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold text-gray-800">
        Tailwind Card Showcase
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        <BasicShadowCard />

        <ImageCard />

        <BorderedCard />

        <ProfileCard />

        <ColoredCard />

        <GlassmorphicCard />

        <HoverZoomImageCard />

        <AnimatedCard />

        <GlassmorphismHoverCard />
      </div>
    </div>
  );
};

export default Card;
