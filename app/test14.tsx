import { useState } from 'react';
import { TrendingUp, TrendingDown, Zap, ArrowRight, Circle } from 'lucide-react';

export default function MoreTableDesigns() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const tableData = [
    { id: 1, name: 'Acme Corp', revenue: 12.5, growth: 24.5, status: 'active', score: 92, change: '+2.1%' },
    { id: 2, name: 'TechStart Inc', revenue: 8.3, growth: -5.2, status: 'active', score: 78, change: '-1.3%' },
    { id: 3, name: 'Design Studio', revenue: 5.1, growth: 18.7, status: 'pending', score: 85, change: '+3.2%' },
    { id: 4, name: 'Cloud Services', revenue: 15.2, growth: 32.1, status: 'active', score: 95, change: '+4.5%' },
    { id: 5, name: 'Data Analytics', revenue: 3.8, growth: 11.3, status: 'inactive', score: 71, change: '+1.8%' },
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

        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes stretchWidth {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes expandDown {
          from { max-height: 0; opacity: 0; }
          to { max-height: 400px; opacity: 1; }
        }

        @keyframes rotateIn {
          from { transform: rotate(-180deg); opacity: 0; }
          to { transform: rotate(0deg); opacity: 1; }
        }

        @keyframes bounce3d {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }

        @keyframes shimmerSkew {
          0% { transform: skewX(-20deg) translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: skewX(-20deg) translateX(100%); opacity: 0; }
        }

        @keyframes waveFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ringPulse {
          0% { 
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        @keyframes radarSweep {
          0% { transform: rotate(-180deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: rotate(0deg); opacity: 0; }
        }

        @keyframes slideYDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes scaleOut {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes barFill {
          from { width: 0; }
          to { width: var(--bar-width, 100%); }
        }

        @keyframes floatInPlace {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes columnSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gridFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes crispFlip {
          0% { transform: rotateY(90deg); opacity: 0; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }

        @keyframes liquidMotion {
          0%, 100% { clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%); }
          50% { clip-path: polygon(0% 60%, 15% 65%, 32% 70%, 54% 60%, 70% 40%, 84% 45%, 100% 50%, 100% 100%, 0% 100%); }
        }

        @keyframes dotWave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-slide-down { animation: slideInDown 0.5s ease-out forwards; }
        .animate-slide-left { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.6s ease-out forwards; }
        .animate-pop { animation: popIn 0.4s ease-out; }
        .animate-expand { animation: expandDown 0.4s ease-out forwards; }
        .animate-bounce-3d { animation: bounce3d 2s ease-in-out infinite; }
        .animate-wave-flow { animation: waveFlow 1.5s ease-in-out; }
        .animate-ring-pulse { animation: ringPulse 2s infinite; }
        .animate-float { animation: floatInPlace 3s ease-in-out infinite; }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        .bar-fill {
          animation: barFill 1s ease-out forwards;
        }

        .bar-fill.delay-1 { animation-delay: 0.2s; }
        .bar-fill.delay-2 { animation-delay: 0.4s; }
        .bar-fill.delay-3 { animation-delay: 0.6s; }
        .bar-fill.delay-4 { animation-delay: 0.8s; }
        .bar-fill.delay-5 { animation-delay: 1s; }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="animate-slide-down">
          <h1 className="text-4xl font-bold text-white mb-2">More Unique Tables</h1>
          <p className="text-slate-400">Fresh designs with advanced interactions</p>
        </div>

        {/* Table 1: Floating Row Selection */}
        <div className="animate-slide-up stagger-1">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Circle className="w-5 h-5" /> Floating Selection Table
          </h2>
          <div className="space-y-2 bg-slate-900/30 p-6 rounded-xl border border-slate-800">
            {tableData.map((row, idx) => (
              <div
                key={row.id}
                className="group cursor-pointer animate-slide-up"
                style={{animationDelay: `${idx * 0.08}s`}}
                onClick={() => setSelectedId(selectedId === row.id ? null : row.id)}
              >
                <div className={`p-4 rounded-lg transition-all duration-300 transform ${
                  selectedId === row.id 
                    ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-500/50 scale-102' 
                    : 'bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/40'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors">
                        {row.name}
                      </h3>
                      <div className="flex gap-4 text-sm text-slate-400">
                        <span>Revenue: <span className="text-blue-400 font-mono">${row.revenue}M</span></span>
                        <span>Growth: <span className={row.growth >= 0 ? 'text-emerald-400' : 'text-red-400'} style={{fontWeight: 'bold'}}>
                          {row.growth > 0 ? '+' : ''}{row.growth}%
                        </span></span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold transition-all duration-300 ${
                        selectedId === row.id ? 'text-blue-400 scale-125' : 'text-slate-500'
                      }`}>
                        ●
                      </div>
                    </div>
                  </div>
                  
                  {selectedId === row.id && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50 animate-slide-down">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-500/10 p-3 rounded">
                          <p className="text-blue-400 text-xs mb-1">Score</p>
                          <p className="text-white font-bold text-xl">{row.score}/100</p>
                        </div>
                        <div className="bg-purple-500/10 p-3 rounded">
                          <p className="text-purple-400 text-xs mb-1">Change</p>
                          <p className="text-white font-bold text-xl">{row.change}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 2: Gradient Bar Chart Hybrid */}
        <div className="animate-slide-up stagger-2">
          <h2 className="text-2xl font-bold text-white mb-4">Gradient Bar Chart Hybrid</h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
            <div className="space-y-5">
              <>
                {tableData.map((row, idx) => (
                  <div key={row.id} className="animate-slide-left" style={{animationDelay: `${idx * 0.1}s`}}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold text-sm">{row.name}</span>
                      <span className="text-blue-400 font-mono text-sm">${row.revenue}M</span>
                    </div>
                    <div className="relative h-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg overflow-hidden border border-slate-700">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg bar-fill flex items-center justify-end pr-3"
                        style={{
                          ['--bar-width' as string]: `${(row.revenue / 15.2) * 100}%`,
                          animationDelay: `${idx * 0.15}s`
                        }}
                      >
                        <span className="text-white font-bold text-xs">{row.score}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-xs">Growth</span>
                      <span className={`text-xs font-semibold ${row.growth >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {row.growth > 0 ? '↑' : '↓'} {Math.abs(row.growth)}%
                      </span>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>

        {/* Table 3: Isometric 3D Cards */}
        <div className="animate-slide-up stagger-3">
          <h2 className="text-2xl font-bold text-white mb-4">3D Isometric Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tableData.map((row, idx) => (
              <div
                key={row.id}
                className="h-64 group cursor-pointer animate-pop"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="relative w-full h-full transition-transform duration-500" style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(5deg) rotateY(-5deg) rotateZ(2deg)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 shadow-2xl group-hover:shadow-blue-500/50 transition-shadow duration-300">
                    <div className="relative z-10">
                      <h3 className="text-white font-bold text-lg mb-4">{row.name}</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur">
                          <p className="text-white/70 text-xs mb-1">Revenue</p>
                          <p className="text-white font-bold text-xl">${row.revenue}M</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <div className="flex-1 bg-white/10 p-3 rounded-lg backdrop-blur">
                            <p className="text-white/70 text-xs mb-1">Score</p>
                            <p className="text-white font-bold">{row.score}</p>
                          </div>
                          <div className="flex-1 bg-white/10 p-3 rounded-lg backdrop-blur">
                            <p className="text-white/70 text-xs mb-1">Growth</p>
                            <p className="text-white font-bold">{row.growth}%</p>
                          </div>
                        </div>

                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white/80 bar-fill" style={{
                            ['--bar-width' as string]: `${row.score}%`,
                            animationDelay: `${idx * 0.1 + 0.3}s`
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/30 rounded-xl z-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 4: Minimal Dots Connection */}
        <div className="animate-slide-up stagger-4">
          <h2 className="text-2xl font-bold text-white mb-4">Minimal Dot Connection</h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8">
            <div className="space-y-8">
              {tableData.map((row, idx) => (
                <div key={row.id} className="animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="flex items-center gap-8">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0 animate-ring-pulse"></div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors">{row.name}</h3>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-slate-500">Revenue</span>
                          <p className="text-blue-400 font-mono">${row.revenue}M</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Status</span>
                          <p className="text-white capitalize">{row.status}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Score</span>
                          <p className="text-white font-bold">{row.score}/100</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-right">
                      <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad)" strokeWidth="2" 
                            style={{
                              strokeDasharray: `${(row.score / 100) * 282.7} 282.7`,
                              animation: `barFill 1s ease-out forwards`,
                              animationDelay: `${idx * 0.1}s`
                            }}/>
                          <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6"/>
                              <stop offset="100%" stopColor="#8b5cf6"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{row.score}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table 5: Stacked Rows */}
        <div className="animate-slide-up stagger-5">
          <h2 className="text-2xl font-bold text-white mb-4">Stacked Compact View</h2>
          <div className="space-y-2">
            {tableData.map((row, idx) => (
              <div
                key={row.id}
                className="group cursor-pointer animate-slide-right"
                style={{animationDelay: `${idx * 0.08}s`}}
              >
                <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 hover:from-blue-600/20 hover:to-purple-600/20 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-lg p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-white font-bold group-hover:text-blue-300 transition-colors">{row.name}</h3>
                        <p className="text-slate-400 text-sm">{row.status === 'active' ? '🟢 Active' : row.status === 'pending' ? '🟡 Pending' : '⚪ Inactive'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-400">${row.revenue}M</p>
                        <p className={`text-sm ${row.growth >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {row.growth > 0 ? '↑' : '↓'} {Math.abs(row.growth)}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 bar-fill"
                        style={{
                          ['--bar-width' as string]: `${row.score}%`,
                          animationDelay: `${idx * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 6: Bubble Network */}
        <div className="animate-slide-up stagger-1" style={{animationDelay: '0.6s'}}>
          <h2 className="text-2xl font-bold text-white mb-4">Bubble Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tableData.map((row, idx) => (
              <div
                key={row.id}
                className="relative h-40 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group animate-pop overflow-hidden"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-white font-bold mb-3 group-hover:text-blue-300 transition-colors">{row.name}</h3>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 text-center hover:bg-blue-500/30 transition-all duration-300">
                      <p className="text-blue-300 text-xs">Revenue</p>
                      <p className="text-white font-bold text-sm">${row.revenue}M</p>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-2 text-center hover:bg-purple-500/30 transition-all duration-300">
                      <p className="text-purple-300 text-xs">Growth</p>
                      <p className="text-white font-bold text-sm">{row.growth}%</p>
                    </div>
                    <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-2 text-center hover:bg-pink-500/30 transition-all duration-300">
                      <p className="text-pink-300 text-xs">Score</p>
                      <p className="text-white font-bold text-sm">{row.score}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bar-fill" style={{
                      ['--bar-width' as string]: `${row.score}%`,
                      animationDelay: `${idx * 0.1 + 0.2}s`
                    }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}