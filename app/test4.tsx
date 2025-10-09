import { useState } from 'react';
import { Menu, X, Droplets, Sun, Moon, Radio } from 'lucide-react';

export default function MoreUniqueAnimatedNavs() {
  const [mobileMenu3, setMobileMenu3] = useState(false);
  const [mobileMenu4, setMobileMenu4] = useState(false);
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 space-y-16 p-4 pt-8">
      

      {/* Navbar 3: Day/Night Toggle */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Day/Night Theme Navigation</h2>
        <nav className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
          isDay 
            ? 'bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400' 
            : 'bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900'
        }`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {isDay ? (
              <>
                <div className="absolute top-4 right-1/4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-70 animate-pulse"></div>
                <div className="absolute bottom-4 left-1/3 w-32 h-32 bg-white/30 rounded-full blur-3xl"></div>
              </>
            ) : (
              <>
                <div className="absolute top-4 right-1/4 w-16 h-16 bg-yellow-200 rounded-full blur-xl opacity-50"></div>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </>
            )}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Droplets className="w-8 h-8 text-white animate-bounce" style={{animationDuration: '2s'}} />
                  <div className="absolute inset-0 bg-white/30 blur-xl rounded-full"></div>
                </div>
                <span className="text-2xl font-black text-white">
                  {isDay ? 'DAYTIME' : 'NIGHTFALL'}
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-6">
                {['Home', 'Gallery', 'Studio', 'Contact'].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-white/90 hover:text-white font-medium transition-all relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isDay ? 'bg-white' : 'bg-purple-300'
                    }`}></div>
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsDay(!isDay)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-500 ${
                    isDay ? 'bg-white/30' : 'bg-indigo-950/50'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center ${
                    isDay 
                      ? 'left-1 bg-yellow-400' 
                      : 'left-9 bg-indigo-300'
                  }`}>
                    {isDay ? <Sun className="w-4 h-4 text-yellow-700" /> : <Moon className="w-4 h-4 text-indigo-900" />}
                  </div>
                </button>
                
                <button className="hidden lg:block px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl font-bold transition-all">
                  Subscribe
                </button>

                <button onClick={() => setMobileMenu3(!mobileMenu3)} className="lg:hidden text-white p-2">
                  {mobileMenu3 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {mobileMenu3 && (
              <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-white/20 pt-4">
                {['Home', 'Gallery', 'Studio', 'Contact'].map((item, idx) => (
                  <a key={idx} href="#" className="block text-white/90 hover:text-white py-2 px-4 rounded-xl hover:bg-white/20 transition-all">
                    {item}
                  </a>
                ))}
                <button className="w-full mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold">
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </nav>
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