import React from "react";

const TeamMemberCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
      <div className="text-center">
        <div className="relative mb-4 inline-block">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            MK
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">Michael Kim</h3>
        <p className="text-purple-600 font-medium mb-2">Senior Developer</p>
        <p className="text-gray-500 text-sm mb-4">
          Full-stack developer with 8+ years of experience in React and Node.js
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">127</p>
            <p className="text-xs text-gray-500">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">4.9</p>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">2.1K</p>
            <p className="text-xs text-gray-500">Reviews</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="cursor-pointer flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
            Hire Me
          </button>
          <button className="cursor-pointer px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
