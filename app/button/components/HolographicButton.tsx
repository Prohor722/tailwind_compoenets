const HolographicButton = () => {
  return (
    <div className="rounded-lg bg-gray-100 h-fit">
      <button
        className="cursor-pointer relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-lg overflow-hidden group"
        style={{
          backgroundSize: "400% 400%",
          animation: "holographic 3s ease infinite",
        }}
      >
        <span className="relative z-10">Holographic Button</span>
        <div className="absolute inset-0 bg-white opacity-20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
    </div>
  );
};

export default HolographicButton;
