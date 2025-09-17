const AnimatedCard = () => {
  return (
    <div className="w-80 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold">Animated Card</h3>
      </div>
      <p className="mb-4 text-sm">
        This card slides upward and casts a stronger shadow on hover.
      </p>
      <button className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100 transition">
        Learn More
      </button>
    </div>
  );
};

export default AnimatedCard;
