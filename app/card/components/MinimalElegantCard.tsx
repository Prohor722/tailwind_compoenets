import { Share2, Users } from "lucide-react";

const MinimalElegantCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Team Collaboration
        </h3>
        <p className="text-gray-600 mb-6">
          Clean, minimal design with subtle interactions and perfect typography.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-2xl hover:bg-gray-800 transition-colors">
            Join Team
          </button>
          <button className="p-3 border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinimalElegantCard;
