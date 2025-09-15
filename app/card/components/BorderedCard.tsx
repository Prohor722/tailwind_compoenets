import React from "react";

const BorderedCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 w-64">
      <h2 className="text-lg font-semibold text-gray-800">Bordered Card</h2>
      <p className="text-gray-600">
        This card uses a subtle border instead of shadow.
      </p>
    </div>
  );
};

export default BorderedCard;
