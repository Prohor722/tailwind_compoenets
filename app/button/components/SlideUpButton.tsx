const SlideUpButton = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 text-white bg-black group overflow-hidden rounded-lg">
            <span className="absolute inset-0 w-full h-full bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10 group-hover:text-black transition-all duration-500">
                Slide Up Button
            </span>
        </button>
    )
}

export default SlideUpButton
