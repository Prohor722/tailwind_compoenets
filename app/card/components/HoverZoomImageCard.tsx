import Image from "next/image";

const HoverZoomImageCard = () => {
  const imageList = [
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
  ];

  return (
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
          Hover Zoom Image Card
        </h3>
        <p className="text-sm text-gray-600">
          Elegant card with animated image hover effect.
        </p>
      </div>
    </div>
  );
};

export default HoverZoomImageCard;
