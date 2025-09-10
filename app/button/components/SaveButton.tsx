import { useState } from "react";

const SaveButton = () => {
  const [loadingStates, setLoadingStates] = useState<{ pulse: boolean }>({
    pulse: false,
  });

  const handleClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };
  return (
    <button
      onClick={() => handleClick("pulse")}
      disabled={loadingStates.pulse}
      className={`px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 min-w-32 ${
        loadingStates.pulse ? "animate-pulse" : ""
      }`}
    >
      {loadingStates.pulse ? "Saving..." : "Save"}
    </button>
  );
};

export default SaveButton;
