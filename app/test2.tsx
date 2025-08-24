
{/* Button  */}
<button
onClick={() => setActiveModal('particle_count')}
className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium"
>
Particle Count
</button>

${activeModal === "particle_count" ? "flex items-center justify-center" : "hidden"}
        