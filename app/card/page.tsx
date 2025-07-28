import Image from "next/image";
import React from "react";

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
        {/* Basic Shadow Card */}
        <div className="bg-white shadow-md rounded-lg p-6 w-64">
          <h2 className="text-lg font-semibold mb-2">Basic Card</h2>
          <p className="text-gray-600">
            This is a simple card with a shadow, padding, and border radius.
          </p>
        </div>

        {/* Image Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
          <Image
            width={200}
            height={200}
            src={imageList?.[0] || "/placeholder.jpg"}
            alt="Nature"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Nature View</h2>
            <p className="text-gray-600 text-sm">
              Beautiful landscape from Unsplash.
            </p>
          </div>
        </div>

        {/* Bordered Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 w-64">
          <h2 className="text-lg font-semibold text-gray-800">Bordered Card</h2>
          <p className="text-gray-600">
            This card uses a subtle border instead of shadow.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-md rounded-lg p-6 w-64 flex flex-col items-center text-center">
          <Image
            width={200}
            height={200}
            className="w-20 h-20 rounded-full mb-4"
            src={imageList?.[0] || "/placeholder.jpg"}
            alt="Profile"
          />
          <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-500 text-sm">UI/UX Designer</p>
        </div>

        {/* Colored Card */}
        <div className="bg-blue-600 text-white rounded-lg p-6 w-64 shadow-lg">
          <h2 className="text-lg font-bold mb-2">Colorful Card</h2>
          <p className="text-sm">
            Great for callouts, tips, or promotional blocks.
          </p>
        </div>
      </div>

      <div className="w-80 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 transition-transform hover:scale-105 duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Glassmorphic Card
        </h3>
        <p className="text-gray-600">
          A smooth frosted-glass look using Tailwind’s backdrop blur utility.
        </p>
      </div>

      <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all hover:shadow-2xl">
        <div className="overflow-hidden">
          <Image
            width={200}
            height={200}
            src={imageList?.[0] || "/placeholder.jpg"}
            alt="Random"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            Hover Zoom Image
          </h3>
          <p className="text-sm text-gray-600">
            Elegant card with animated image hover effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
