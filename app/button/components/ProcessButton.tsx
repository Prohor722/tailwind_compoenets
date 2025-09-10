import { useState } from "react";

const ProcessButton = () => {
  const [loadingStates, setLoadingStates] = useState<{ dots: boolean }>({ dots: false });

  const handleClick = (buttonId: string) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };

  return (
    <button
      onClick={() => handleClick("dots")}
      disabled={loadingStates.dots}
      className="cursor-pointer max-h-12 px-6 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-400 text-white font-semibold rounded-lg transition-all duration-300 min-w-32"
    >
      {loadingStates.dots ? (
        <div className="flex items-center justify-center gap-1">
          Processing
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      ) : (
        "Process"
      )}
    </button>
  );
};

export default ProcessButton;
