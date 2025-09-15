import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  const imageList = [
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
  ];
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 w-64 flex flex-col items-center text-center"
      title="Profile Card"
    >
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
  );
};

export default ProfileCard;
