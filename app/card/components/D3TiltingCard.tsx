import React from "react";

const D3TiltingCard = () => {
  return (
    <div className="relative group perspective-1000">
      <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-300 group-hover:rotate-y-10 group-hover:rotate-x-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl transform translate-z-12"></div>
        <div className="relative bg-white rounded-2xl p-6 h-full shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Premium Plan</h3>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </span>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-800">$99</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Unlimited projects
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              24/7 Support
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Advanced analytics
            </li>
          </ul>
          <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-lg font-medium hover:from-orange-500 hover:to-red-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default D3TiltingCard;
