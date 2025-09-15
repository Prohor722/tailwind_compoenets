import Image from "next/image";
import React from "react";

const ImageCard = () => {
    const imageList = [
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
  ];
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
      <Image
        width={200}
        height={200}
        src={imageList?.[0] || "/placeholder.jpg"}
        alt="Nature"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">Image Card</h2>
        <p className="text-gray-600 text-sm">
          Beautiful landscape from Unsplash.
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
