export default function MoreTableDesigns() {
  
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


        {/* Table 6: Bubble Network */}
        <div className="animate-slide-up stagger-1" style={{animationDelay: '0.6s'}}>
          <h2 className="text-2xl font-bold text-white mb-4">Bubble Network</h2>
          
        </div>
      </div>
    </div>
  );
}