import { X } from 'lucide-react';
import { useEffect, useState } from 'react'

const ParticalCountModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [particleCount, setParticleCount] = useState(50);
  
  const closeModal = () => setActiveModal(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
  }>>([]);

  useEffect(() => {
    if (activeModal === 'particles') {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 400,
        y: Math.random() * 300,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        size: Math.random() * 4 + 2
      }));
      setParticles(newParticles);

      const interval = setInterval(() => {
        setParticles(prev => prev.map(p => ({
          ...p,
          x: (p.x + p.vx + 400) % 400,
          y: (p.y + p.vy + 300) % 300
        })));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [activeModal, particleCount]);

  return (
    <div>

        <div className={`fixed inset-0 bg-black bg-opacity-90 
        p-4 z-50
        ${activeModal === "particle_count" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-purple-500/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Particle System</h3>
              <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="relative bg-black rounded-xl overflow-hidden mb-6" style={{ height: '300px' }}>
              {particles.map(particle => (
                <div
                  key={particle.id}
                  className="absolute rounded-full opacity-80"
                  style={{
                    left: `${particle.x}px`,
                    top: `${particle.y}px`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
                  }}
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-white font-medium">Particle Count:</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={particleCount}
                  onChange={(e) => setParticleCount(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-purple-400 font-mono">{particleCount}</span>
              </div>

              <div className="flex gap-3">
                <button className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl transition-colors flex-1">
                  Save Animation
                </button>
                <button onClick={closeModal} className="cursor-pointer border border-purple-500 hover:bg-purple-500/20 text-purple-400 px-6 py-3 rounded-xl transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('particle_count')}
          className="cursor-pointer p-4
          bg-gray-900 rounded-xl shadow-2xl border border-purple-500/30"
        >
          Particle Count
        </button>

      </div>
  )
}

export default ParticalCountModal