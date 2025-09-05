const NeonPulseButton = () => {
    return (
        <button className="relative cursor-pointer px-6 py-3 font-semibold text-cyan-300 border border-cyan-400 rounded-lg bg-black shadow-md hover:shadow-[0_0_25px_#22d3ee] transition-all duration-300">
            <span className="absolute -inset-px rounded-lg opacity-20 blur-md bg-cyan-400 animate-pulse"></span>
            Neon Pulse Button
        </button>
    )
}

export default NeonPulseButton
