import { Grid3x3, Layout, Plus, Upload, X } from "lucide-react";
import React, { useState } from "react";

const FileManagerModal = () => {
  const [currentPath, setCurrentPath] = useState("/Documents");
  const [ activeModal, setActiveModal] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState("list");
  const closeModal = () => setActiveModal(null);

  const files = [
    {
      name: "Project Proposal.pdf",
      type: "pdf",
      size: "2.4 MB",
      modified: "2 hours ago",
      icon: "📄",
    },
    {
      name: "Design Assets",
      type: "folder",
      size: "12 items",
      modified: "1 day ago",
      icon: "📁",
    },
    {
      name: "Screenshot.png",
      type: "image",
      size: "856 KB",
      modified: "3 hours ago",
      icon: "🖼️",
    },
    {
      name: "Budget.xlsx",
      type: "spreadsheet",
      size: "445 KB",
      modified: "1 week ago",
      icon: "📊",
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50
            ${activeModal ? "block" : "hidden"}`}
      >
        <div className="bg-white rounded-2xl max-w-4xl w-full h-[500px] shadow-2xl flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-gray-800">File Manager</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📁</span>
                <span>{currentPath}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setViewMode(viewMode === "list" ? "grid" : "list")
                }
                className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
              >
                {viewMode === "list" ? (
                  <Grid3x3 size={18} />
                ) : (
                  <Layout size={18} />
                )}
              </button>
              <button
                onClick={closeModal}
                className="cursor-pointer text-gray-400 hover:text-gray-600 p-2"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div
              className={
                viewMode === "grid" ? "grid grid-cols-4 gap-4" : "space-y-2"
              }
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className={`${
                    viewMode === "grid"
                      ? "p-4 border border-gray-200 rounded-lg hover:shadow-md text-center"
                      : "flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg"
                  } transition-all cursor-pointer`}
                >
                  <div
                    className={`${
                      viewMode === "grid" ? "text-4xl mb-2" : "text-2xl"
                    }`}
                  >
                    {file.icon}
                  </div>

                  <div className={`${viewMode === "grid" ? "" : "flex-1"}`}>
                    <div
                      className={`font-medium text-gray-800 ${
                        viewMode === "grid" ? "text-sm truncate" : ""
                      }`}
                    >
                      {file.name}
                    </div>
                    {viewMode === "list" && (
                      <>
                        <div className="text-sm text-gray-600">{file.size}</div>
                      </>
                    )}
                    {viewMode === "grid" && (
                      <div className="text-xs text-gray-500 mt-1">
                        {file.size}
                      </div>
                    )}
                  </div>

                  {viewMode === "list" && (
                    <div className="text-sm text-gray-500">{file.modified}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">{files.length} items</div>

            <div className="flex gap-2">
              <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-500 rounded-lg text-sm transition-colors">
                <Plus size={16} />
                New Folder
              </button>
              <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg text-sm transition-colors">
                <Upload size={16} />
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setActiveModal("fileManager")}
        className="cursor-pointer flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-2xl p-2 text-left transition-all duration-200 hover:scale-105"
      >
        <div className="bg-blue-500 rounded-xl flex items-center justify-center p-2">
          <Upload className="text-white" size={20} />
        </div>
        <span className="font-medium text-gray-800">File Manager</span>
      </button>
    </>
  );
};

export default FileManagerModal;
