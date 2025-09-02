
const RippleButton = () => {
    return (
        <button className="relative cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded-lg group overflow-hidden">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white opacity-20 rounded-full group-hover:w-32 group-hover:h-32 group-hover:top-[-16px] group-hover:left-[-16px]" />
            <span className="relative z-10">Ripple Button</span>
        </button>
    )
}

export default RippleButton
