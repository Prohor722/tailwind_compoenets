import React from "react";

const SocialMediaFeedStyle = () => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-r from-slate-800 to-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 p-6 group cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                {item.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.role} • Active today
                </p>
              </div>
            </div>
            <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-700/50">
            <div className="space-y-2">
              <p className="text-slate-300 text-sm">
                Revenue:{" "}
                <span className="text-blue-300 font-semibold">
                  {item.revenue}
                </span>
              </p>
              <p className="text-slate-300 text-sm">
                Engagement:{" "}
                <span className="text-purple-300 font-semibold">
                  {item.engagement}%
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-400 text-sm">
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleLike(item.id)}
                className="flex items-center gap-2 hover:text-red-400 transition-colors group/like"
              >
                <Heart
                  className={`w-4 h-4 transition-all ${
                    likedItems.has(item.id) ? "fill-red-400 text-red-400" : ""
                  }`}
                />
                <span className="text-xs">{243 + item.id * 10}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{89 + item.id * 5}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">{42 + item.id * 3}</span>
              </button>
            </div>
            <button className="hover:text-yellow-400 transition-colors">
              <BookmarkPlus className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaFeedStyle;
