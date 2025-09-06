const ShimmerGlowButton = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative z-10">Shimmer Glow Button</span>
        </button>
    )
}

export default ShimmerGlowButton
