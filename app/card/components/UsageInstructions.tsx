import React from "react";

const UsageInstructions = () => {
  return (
    <div className="mt-16 bg-white/5 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-6">
        How to Use These Cards
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            🎨 Customization Tips
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Modify gradient colors by changing Tailwind color classes</li>
            <li>• Adjust card sizes using width/height utilities</li>
            <li>• Change animations by editing the animation classes</li>
            <li>• Add your own icons or images</li>
            <li>• Experiment with different shadow intensities</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            ⚡ Performance Notes
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Use transform utilities for better GPU acceleration</li>
            <li>• Limit complex animations on mobile devices</li>
            <li>
              • Consider using will-change for frequently animated elements
            </li>
            <li>• Test responsiveness across different screen sizes</li>
            <li>• Optimize images and SVGs for faster loading</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsageInstructions;
