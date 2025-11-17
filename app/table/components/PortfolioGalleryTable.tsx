import React from "react";

const PortfolioGalleryTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[
        {
          title: "Dashboard Design",
          author: "Sarah",
          views: 2450,
          likes: 342,
          rating: 4.8,
          thumbnail: "📊",
        },
        {
          title: "Mobile App UI",
          author: "Emma",
          views: 3120,
          likes: 521,
          rating: 4.9,
          thumbnail: "📱",
        },
        {
          title: "Web Platform",
          author: "Mike",
          views: 1890,
          likes: 234,
          rating: 4.6,
          thumbnail: "🌐",
        },
        {
          title: "Brand Identity",
          author: "Lisa",
          views: 2105,
          likes: 401,
          rating: 4.7,
          thumbnail: "🎨",
        },
        {
          title: "Icon System",
          author: "James",
          views: 1654,
          likes: 289,
          rating: 4.5,
          thumbnail: "✨",
        },
        {
          title: "Illustration Kit",
          author: "Sarah",
          views: 2345,
          likes: 445,
          rating: 4.8,
          thumbnail: "🎭",
        },
      ].map((project, idx) => (
        <div
          key={idx}
          className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
        >
          <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-6xl">
            {project.thumbnail}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 mb-3">by {project.author}</p>
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <Eye className="w-3 h-3" />
                {project.views}
              </div>
              <div className="flex items-center gap-1 text-xs text-red-600">
                <Heart className="w-3 h-3" />
                {project.likes}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(project.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">
                {project.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGalleryTable;
