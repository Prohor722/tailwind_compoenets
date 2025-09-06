const SpinBorderButton = () => {
    return (
        <button className="cursor-pointer relative px-6 py-3 rounded-lg bg-gray-900 text-white overflow-hidden group">
            <span className="absolute inset-0 border-2 border-blue-400 rounded-lg animate-spin-slow"></span>
            <span className="relative z-10">Spin Border Button</span>
        </button>
    )
}

export default SpinBorderButton
