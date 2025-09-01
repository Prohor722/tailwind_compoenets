const IconButton = () => {
    return (
        <button className="flex items-center gap-2 px-5 py-2 bg-gray-800 
        text-white rounded hover:bg-gray-700 transition cursor-pointer">
            <span>Icon Button</span>
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
        </button>
    )
}

export default IconButton
