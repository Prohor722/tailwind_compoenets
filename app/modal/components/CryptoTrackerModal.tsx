"use client";
import { X } from "lucide-react";
import { useState } from "react";

const CryptoTrackerModal = () => {
  const [activeModal, setActiveModal] = useState("");

  const closeModal = () => setActiveModal("");
  const cryptos = [
    { symbol: "BTC", name: "Bitcoin", price: 43250, change: 2.5, icon: "₿" },
    { symbol: "ETH", name: "Ethereum", price: 2650, change: -1.2, icon: "Ξ" },
    { symbol: "ADA", name: "Cardano", price: 0.48, change: 5.8, icon: "₳" },
  ];
  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50
        ${activeModal === "cryptoTracker" ? "block" : "hidden"}`}
      >
        <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-yellow-500/30">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Crypto Tracker</h3>
            <button
              onClick={closeModal}
              className="cursor-pointer text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            {cryptos.map((crypto) => (
              <div
                key={crypto.symbol}
                className="bg-gray-800 rounded-xl p-4 hover:bg-gradient-to-r from-green-800 to-blue-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {crypto.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold">{crypto.name}</div>
                      <div className="text-gray-400 text-sm">
                        {crypto.symbol}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-white font-bold text-lg">
                      ${crypto.price.toLocaleString()}
                    </div>
                    <div
                      className={`text-sm flex items-center gap-1 ${
                        crypto.change > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {crypto.change > 0 ? "↗" : "↘"}
                      {Math.abs(crypto.change)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4 mb-6">
            <div className="text-white text-sm mb-1">Portfolio Value</div>
            <div className="text-white text-2xl font-bold">$12,847.52</div>
            <div className="text-green-200 text-sm">+$247.83 (1.96%) today</div>
          </div>

          <div className="flex gap-3">
            <button className="cursor-pointer flex-1 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl transition-colors">
              Buy Crypto
            </button>
            <button className="cursor-pointer flex-1 bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl transition-colors">
              Sell
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setActiveModal("cryptoTracker")}
        className="cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-white p-4 rounded-full shadow-lg transition-colors"
      >
        Crypto Tracker Modal
      </button>
    </div>
  );
};

export default CryptoTrackerModal;
