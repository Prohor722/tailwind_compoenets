const FillSlideButton = () => {
    return (
        <button className="group relative px-6 py-3 overflow-hidden border border-lime-400 text-lime-400 rounded-md hover:text-black transition duration-300">
            <span className="absolute inset-0 bg-lime-400 w-0 group-hover:w-full transition-all duration-300"></span>
            <span className="relative z-10">Fill Slide Button</span>
        </button>
    )
}

export default FillSlideButton
