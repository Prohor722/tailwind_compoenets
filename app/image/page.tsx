"use client";
import Image from "next/image";
import { useState } from "react";

const imageList = [
  "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
  "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
  "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
];

export default function ModernImages() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center gap-12 p-6">
      {/* Hover Zoom Image */}
      <div className="relative w-72 h-48 overflow-hidden rounded-xl shadow-lg group">
        <Image
          src={imageList?.[0] || "/placeholder.jpg"}
          alt="Zoom image"
          fill
          className="transition-transform duration-500 group-hover:scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Hover Zoom
        </div>
      </div>

      {/* Gallery with Hover Caption */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className="relative overflow-hidden rounded-lg shadow-md group w-64 h-40"
          >
            <Image
              src={imageList?.[0] || "/placeholder.jpg"}
              alt={`Gallery 1`}
              fill
              className="transition-transform duration-500 group-hover:scale-105 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-all">
              Caption 1
            </div>
          </div>
      </div>




      <div className="relative w-80 h-52 rounded-xl overflow-hidden shadow-xl group">
        <Image
          src={imageList?.[0] || "/placeholder.jpg"}
          alt="Zoom"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 text-white font-semibold">Hover Zoom</div>
      </div>

      {/* ✨ Glassmorphism */}
      <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl p-4 shadow-xl w-80">
        <Image
          src={imageList?.[0] || "/placeholder.jpg"}
          alt="Glass"
          width={320}
          height={200}
          className="rounded-lg"
        />
        <p className="text-center mt-2 text-gray-700 font-medium">Glassmorphism</p>
      </div>

      {/* 🎴 Tilt on Hover */}
      <div className="w-80 h-52 perspective">
        <div className="relative w-full h-full rounded-xl transition-transform duration-500 transform hover:rotate-x-6 hover:rotate-y-6 shadow-2xl overflow-hidden">
          <Image
            src={imageList?.[0] || "/placeholder.jpg"}
            alt="Tilt"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* 🌄 Parallax-like Hover Lift */}
      <div
        className="relative w-80 h-52 rounded-xl overflow-hidden shadow-lg group"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <Image
          src={imageList?.[0] || "/placeholder.jpg"}
          alt="Parallax"
          fill
          className={`object-cover transition-transform duration-700 ${
            hovered === 1 ? 'scale-110 translate-y-[-10px]' : ''
          }`}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
          Lift Parallax
        </div>
      </div>
    </div>
  );
}
