const FlyInButton = () => {
    return (
        <button className="cursor-pointer group px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 overflow-hidden">
            <span className="translate-x-[-150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                ✈️
            </span>
            <span className="transition-all duration-300 group-hover:ml-2">
                Fly In Button
            </span>
        </button>
    )
}

export default FlyInButton
