import { useState } from 'react';

export default function UniqueTableDesigns() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const tableData = [
    { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92 },
    { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78 },
    { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85 },
    { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95 },
    { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes borderGlow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.1);
          }
          50% { 
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes scanlines {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes flickerIn {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0; }
          20%, 24%, 55% { opacity: 1; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 1; }
          50% { transform: translateY(-30px) translateX(10px) scale(0.5); opacity: 0.5; }
        }

        @keyframes rowPulse {
          0% { background-color: transparent; }
          50% { background-color: rgba(59, 130, 246, 0.1); }
          100% { background-color: transparent; }
        }

        @keyframes cellHighlight {
          0%, 100% { background-color: transparent; box-shadow: none; }
          50% { background-color: rgba(59, 130, 246, 0.2); box-shadow: inset 0 0 15px rgba(59, 130, 246, 0.3); }
        }

        @keyframes morphShape {
          0%, 100% { border-radius: 8px; }
          50% { border-radius: 20px; }
        }

        @keyframes rainbowShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes blobRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes liquidSwipe {
          0% { clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 1), 0 0 30px rgba(168, 85, 247, 1); }
        }

        @keyframes slideRow {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-slide-down { animation: slideInDown 0.5s ease-out forwards; }
        .animate-slide-left { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.6s ease-out forwards; }
        .animate-border-glow { animation: borderGlow 2s ease-in-out infinite; }
        .animate-scanlines { animation: scanlines 3s linear infinite; }
        .animate-flicker { animation: flickerIn 0.7s; }
        .animate-glitch { animation: glitch 0.3s; }
        .animate-pulse-dot { animation: dotPulse 1.5s ease-in-out infinite; }
        .animate-text-glow { animation: textGlow 2s ease-in-out infinite; }
        .animate-slide-row { animation: slideRow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-size: 200% 200%;
          animation: rainbowShift 3s ease infinite;
        }

        .neon-border {
          border: 2px solid;
          border-image: linear-gradient(135deg, #667eea, #764ba2) 1;
          position: relative;
        }

        .glow-on-hover {
          transition: all 0.3s ease;
        }

        .glow-on-hover:hover {
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
          border-color: #667eea;
        }

        .hologram-effect {
          position: relative;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        }

        .hologram-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
          animation: slideInRight 1s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-12">


        {/* Table 5: Minimalist Blocks */}
        <div className="animate-slide-up stagger-5">
          <h2 className="text-2xl font-bold text-white mb-4">Minimalist Blocks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {tableData.map((row, idx) => (
              <div
                key={row.id}
                className="bg-slate-800/50 aspect-square rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group p-4 animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
                onMouseEnter={() => setHoveredId(row.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-xs text-slate-400 mb-2 line-clamp-2">{row.name}</div>
                  <div className="text-white font-bold text-lg mb-1">${row.revenue}M</div>
                  <div className={`text-xs font-semibold ${row.growth >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {row.growth > 0 ? '↑' : '↓'} {Math.abs(row.growth)}%
                  </div>
                  <div className="mt-2 h-1 w-6 bg-slate-600 rounded-full mx-auto group-hover:bg-blue-500 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 6: Timeline View */}
        <div className="animate-slide-up stagger-1" style={{animationDelay: '0.6s'}}>
          <h2 className="text-2xl font-bold text-white mb-6">Timeline View</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-6">
              {tableData.map((row, idx) => (
                <div key={row.id} className="pl-20 animate-slide-left" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="absolute left-0 top-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-950 group hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs">{idx + 1}</span>
                  </div>
                  
                  <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="text-white font-bold mb-2">{row.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">
                      Revenue: <span className="text-blue-400 font-mono">${row.revenue}M</span> • 
                      Growth: <span className={row.growth >= 0 ? 'text-emerald-400' : 'text-red-400'} style={{fontWeight: 'bold'}}>
                        {row.growth > 0 ? '+' : ''}{row.growth}%
                      </span>
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{width: `${row.score}%`}}></div>
                      </div>
                      <span className="text-slate-400 text-xs font-mono">{row.score}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}