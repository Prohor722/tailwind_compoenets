import React from "react";

const PullRequestStyleTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      title: "Critical Bug Fix",
      author: "Sarah",
      status: "Merged",
      commits: 12,
      changes: 342,
      likes: 45,
      comments: 8,
      timestamp: "2 hours ago",
      priority: "Critical",
      branch: "hotfix/auth-issue",
    },
    {
      id: 2,
      title: "Feature: Dark Mode",
      author: "Mike",
      status: "Open",
      commits: 8,
      changes: 156,
      likes: 23,
      comments: 12,
      timestamp: "4 hours ago",
      priority: "Medium",
      branch: "feature/dark-mode",
    },
    {
      id: 3,
      title: "Performance Optimization",
      author: "Emma",
      status: "In Review",
      commits: 15,
      changes: 567,
      likes: 34,
      comments: 6,
      timestamp: "1 day ago",
      priority: "High",
      branch: "perf/optimize-bundle",
    },
    {
      id: 4,
      title: "Documentation Update",
      author: "James",
      status: "Merged",
      commits: 3,
      changes: 89,
      likes: 12,
      comments: 2,
      timestamp: "2 days ago",
      priority: "Low",
      branch: "docs/api-reference",
    },
    {
      id: 5,
      title: "Refactor Components",
      author: "Lisa",
      status: "In Review",
      commits: 22,
      changes: 891,
      likes: 56,
      comments: 18,
      timestamp: "3 days ago",
      priority: "High",
      branch: "refactor/components",
    },
  ];

  return (
    <div className="divide-y divide-slate-800">
      {sortedData.map((item, idx) => (
        <div
          key={item.id}
          className="p-6 hover:bg-slate-800/50 transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredRow(item.id)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <div className="flex items-start gap-4">
            <div className="mt-1">
              {pinnedRows.has(item.id) ? (
                <Pin className="w-5 h-5 text-yellow-400" />
              ) : (
                <GitBranch className="w-5 h-5 text-slate-500" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors truncate">
                  {item.title}
                </h3>
                <span
                  className={`inline-flex px-3 py-1 bg-gradient-to-r ${getStatusColor(
                    item.status
                  )} text-white text-xs font-bold rounded-full flex-shrink-0`}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Code2 className="w-3 h-3" />
                  {item.branch}
                </span>
                <span>by {item.author}</span>
                <span>{item.timestamp}</span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded text-xs text-slate-300">
                  <GitCommit className="w-3 h-3" />
                  {item.commits} commits
                </div>
                <div className="flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded text-xs text-slate-300">
                  <Code2 className="w-3 h-3" />+{item.changes} changes
                </div>
                {getPriorityIcon(item.priority)}
                <span className="text-xs font-semibold text-slate-400">
                  {item.priority}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
              <button
                onClick={() => toggleLike(item.id)}
                className={`p-2 rounded-lg transition-all ${
                  likedRows.has(item.id)
                    ? "bg-red-500/20 text-red-400"
                    : "hover:bg-slate-700 text-slate-400"
                }`}
              >
                <ThumbsUp
                  className={`w-4 h-4 ${
                    likedRows.has(item.id) ? "fill-red-400" : ""
                  }`}
                />
              </button>
              <button
                onClick={() => togglePin(item.id)}
                className={`p-2 rounded-lg transition-all ${
                  pinnedRows.has(item.id)
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "hover:bg-slate-700 text-slate-400 hover:text-slate-200"
                }`}
              >
                {pinnedRows.has(item.id) ? (
                  <Pin className="w-4 h-4 fill-yellow-400" />
                ) : (
                  <Pin className="w-4 h-4" />
                )}
              </button>
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-200">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {hoveredRow === item.id && (
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-2 text-xs text-slate-400">
              <MessageSquare className="w-4 h-4" />
              <span>{item.comments} comments</span>
              <span>•</span>
              <ThumbsUp className="w-4 h-4" />
              <span>{item.likes} likes</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PullRequestStyleTable;
