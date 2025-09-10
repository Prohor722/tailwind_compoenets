import React, { useState } from "react";

const UploadButton = () => {
  const [loadingStates, setLoadingStates] = useState<{ progress: boolean }>({
    progress: false,
  });

  const handleClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };
  return (
    <button
      onClick={() => handleClick("progress")}
      disabled={loadingStates.progress}
      className="cursor-pointer relative px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white font-semibold rounded-lg transition-all duration-300 min-w-32 overflow-hidden"
    >
      {loadingStates.progress && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-green-300 animate-pulse"
          style={{ width: "100%", animation: "progress 3s ease-in-out" }}
        ></div>
      )}
      <span className="relative z-10">
        {loadingStates.progress ? "Uploading..." : "Upload"}
      </span>
    </button>
  );
};

export default UploadButton;
