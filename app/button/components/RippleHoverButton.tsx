const RippleHoverButton = () => {
    return (
        <button className="cursor-pointer relative overflow-hidden px-6 py-3 bg-emerald-600 text-white rounded-lg group">
            Ripple Hover Button
            <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-48 group-hover:h-48 transition-all duration-500 ease-out"></span>
        </button>
    )
}

export default RippleHoverButton
