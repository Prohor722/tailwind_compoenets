import { useState } from 'react';
import { Menu, X, Droplets, Sun, Moon, Radio } from 'lucide-react';

export default function MoreUniqueAnimatedNavs() {
  const [mobileMenu4, setMobileMenu4] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 space-y-16 p-4 pt-8">
      

      {/* Navbar 3: Day/Night Toggle */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Day/Night Theme Navigation</h2>
        
      </div>

      {/* Navbar 4: Pulse & Radar Effect */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Radar Pulse Navigation</h2>
        <nav className="relative bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-green-500/30">
          {/* Radar Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="absolute w-32 h-32 border-2 border-green-500/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
            <div className="absolute w-64 h-64 border-2 border-green-500/20 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
            <div className="absolute w-96 h-96 border-2 border-green-500/10 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Radio className="w-6 h-6 text-green-400 animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-2xl font-black text-green-400 font-mono">
                  RADAR
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {['SCAN', 'DETECT', 'TRACK', 'ANALYZE'].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="relative text-green-400/70 hover:text-green-400 font-bold font-mono text-sm transition-all group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute -inset-2 border border-green-500/0 group-hover:border-green-500/50 rounded-lg transition-all"></div>
                    <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg transition-all"></div>
                  </a>
                ))}
              </div>

              <button className="hidden lg:block px-6 py-2 bg-green-500 text-black rounded-lg font-bold font-mono hover:bg-green-400 transition-all relative group">
                <span className="relative z-10">CONNECT</span>
                <div className="absolute inset-0 bg-green-400 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all"></div>
              </button>

              <button onClick={() => setMobileMenu4(!mobileMenu4)} className="lg:hidden text-green-400 p-2">
                {mobileMenu4 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu4 && (
              <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-green-500/30 pt-4">
                {['SCAN', 'DETECT', 'TRACK', 'ANALYZE'].map((item, idx) => (
                  <a key={idx} href="#" className="block text-green-400/70 hover:text-green-400 py-2 px-4 rounded-lg hover:bg-green-500/10 transition-all font-mono font-bold">
                    {item}
                  </a>
                ))}
                <button className="w-full mt-4 px-6 py-2 bg-green-500 text-black rounded-lg font-bold font-mono">
                  CONNECT
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

    </div>
  );
}