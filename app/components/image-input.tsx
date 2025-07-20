'use client';
import { useState } from "react";
import { UploadCloud, Camera } from "lucide-react";

export default function ImageInput() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold text-gray-800">Image Input Designs</h1>

      <div className="flex flex-wrap gap-10 justify-center max-w-6xl w-full">
        {/* Basic File Input */}
        <div className="flex flex-col gap-2 bg-white p-4 shadow rounded w-72">
          <label className="font-medium">Basic Upload</label>
          <input type="file" accept="image/*" />
        </div>

        {/* Image Preview Input */}
        <div className="flex flex-col gap-2 bg-white p-4 shadow rounded w-72">
          <label className="font-medium">With Preview</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 rounded border w-full h-40 object-cover"
            />
          )}
        </div>

        {/* Drag & Drop Area */}
        <div className="bg-white p-4 shadow rounded w-72 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-blue-400 text-center">
          <UploadCloud className="text-blue-500" size={32} />
          <p className="text-gray-600">Drag & Drop or Click to Upload</p>
          <input
            type="file"
            accept="image/*"
            className="opacity-0 absolute inset-0 cursor-pointer"
          />
        </div>

        {/* File Input with Button Style */}
        <div className="flex flex-col gap-2 bg-white p-4 shadow rounded w-72">
          <label className="font-medium">Upload Button</label>
          <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-max">
            Upload
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </div>

        {/* Circular Avatar Upload */}
        <div className="bg-white p-4 shadow rounded w-72 flex flex-col items-center gap-3">
          <label className="font-medium">Profile Avatar</label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              onChange={handleFileChange}
            />
            <div className="w-24 h-24 rounded-full border overflow-hidden bg-gray-200 relative flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <Camera className="text-gray-400" size={32} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
