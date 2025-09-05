const HoverMeButton = () => {
    return (
        <button className="cursor-pointer relative px-5 py-2 text-blue-600 font-medium group">
            Hover Me Button
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full duration-300"></span>
        </button>
    )
}

export default HoverMeButton
