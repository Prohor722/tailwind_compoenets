const WipeRevealButton = () => {
    return (
        <button className="relative px-6 py-3 bg-blue-600 text-white font-semibold rounded overflow-hidden group">
            <span className="absolute inset-0 bg-white transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
            <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Wipe Reveal Button
            </span>
        </button>
    )
}

export default WipeRevealButton
