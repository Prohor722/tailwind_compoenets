import { useState } from 'react'

const LoadingSubmitButton = () => {
    const [clickedButton, setClickedButton] = useState<string | null>(null);

    const handleClick = (buttonName: string) => {
        setClickedButton(buttonName);
        setTimeout(() => setClickedButton(null), 600);
    };

    return (
        <div className="cursor-pointer flex flex-col items-center space-y-4">
            <h3 className="text-white text-lg font-semibold">Loading Spinner</h3>
            <button
                onClick={() => handleClick("spinner")}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
                {clickedButton === "spinner" ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                    </>
                ) : (
                    <span>Loading Submit Button</span>
                )}
            </button>
        </div>
    )
}

export default LoadingSubmitButton
