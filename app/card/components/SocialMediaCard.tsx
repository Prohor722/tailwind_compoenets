import Image from "next/image";

const SocialMediaCard = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover-lift">
      <div className="flex items-start space-x-4 mb-4">
        <Image
          height={48}
          width={48}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='45'%3E🎨%3C/text%3E%3C/svg%3E"
          alt="User"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
            <svg
              className="w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="text-gray-500 text-sm">@sarahjohnson • 2h ago</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>
      </div>
      <p className="text-gray-800 mb-4">
        Just finished designing a new mobile app interface! The gradient effects
        and micro-interactions turned out amazing. Can't wait to share the final
        result! 🚀
      </p>
      <div className="aspect-video bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl mb-4 flex items-center justify-center">
        <span className="text-white text-6xl">📱</span>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>24</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>8</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaCard;
