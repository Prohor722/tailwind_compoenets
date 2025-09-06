const BorderTraceButton = () => {
    return (
        <button className="cursor-pointer px-6 py-2 border-2 border-transparent bg-purple-700 text-white rounded-md relative group overflow-hidden">
            <span className="absolute inset-0 border-2 border-white transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out rounded-md pointer-events-none"></span>
            <span className="relative z-10">Border Trace Button</span>
        </button>
    )
}

export default BorderTraceButton
