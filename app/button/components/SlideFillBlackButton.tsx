const SlideFillBlackButton = () => {
    return (
        <button className="cursor-pointer relative overflow-hidden px-6 py-3 text-white transition-all duration-300 ease-in-out bg-gray-800 rounded-lg group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Slide Fill Black Button
            </span>
            <span className="absolute inset-0 z-0 w-full h-full transform scale-x-0 origin-left transition-transform duration-300 ease-out bg-white group-hover:scale-x-100"></span>
        </button>
    )
}

export default SlideFillBlackButton
