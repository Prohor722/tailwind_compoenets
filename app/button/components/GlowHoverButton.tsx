const GlowHoverButton = () => {
    return (
        <button className="relative cursor-pointer px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md transition duration-300 overflow-hidden">
            <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-lg"></span>
            Glow Hover Button
        </button>

    )
}

export default GlowHoverButton
