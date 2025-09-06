const RevealTextButton = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 bg-gray-900 text-white rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Reveal Text Button
            </span>
        </button>
    )
}

export default RevealTextButton
