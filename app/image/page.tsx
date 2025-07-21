'use client';
import Image from 'next/image';
import { useState } from 'react';

const imageList = [
  'https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg',
  'https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg',
  'https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg',
];

export default function ModernImages() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex flex-col items-center justify-center gap-12 p-6">

      {/* Hover Zoom Image */}
      <div className="relative w-72 h-48 overflow-hidden rounded-xl shadow-lg group">
        <Image
          src={imageList?.[0] || '/placeholder.jpg'}
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
        {imageList.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-md group w-64 h-40"
          >
            <Image
              src={imageList?.[0] || '/placeholder.jpg'}
              alt={`Gallery ${i}`}
              fill
              className="transition-transform duration-500 group-hover:scale-105 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-all">
              Caption {i + 1}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
