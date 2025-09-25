import React from "react";

const NotificationCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:border-blue-600">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h4.586l.707-.707A1 1 0 0010 12h4a1 1 0 00.707-1.707L14 9.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-gray-900">
              New message from Alex
            </h4>
            <span className="text-xs text-gray-500">2 min ago</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Hey! I've finished the design mockups for the new project. Can you
            take a look and let me know your thoughts?
          </p>
          <div className="flex space-x-3">
            <button className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
              Reply
            </button>
            <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
