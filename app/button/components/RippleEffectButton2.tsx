const RippleEffectButton2 = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 bg-blue-600 text-white rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500"></span>
            <span className="relative z-10">Ripple Effect Button</span>
        </button>
    )
}

export default RippleEffectButton2
