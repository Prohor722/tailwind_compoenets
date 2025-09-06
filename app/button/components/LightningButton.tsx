const LightningButton = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg overflow-hidden group">
            <span className="absolute inset-0 translate-x-[-100%] bg-yellow-300 skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            <span className="relative z-10">Lightning Button</span>
        </button>
    )
}

export default LightningButton
