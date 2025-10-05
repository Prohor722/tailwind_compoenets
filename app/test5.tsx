import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Mail, User, Zap, Sparkles, Rocket, Circle, ArrowRight, ShoppingCart, Search, Heart } from 'lucide-react';

export default function UniqueAnimatedNavs() {
    const [mobileMenu2, setMobileMenu2] = useState(false);
    const [mobileMenu3, setMobileMenu3] = useState(false);
    const [mobileMenu4, setMobileMenu4] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Products', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 space-y-16 p-4 pt-8">
      
      {/* Navbar 1: Liquid Morphing Effect */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Liquid Morphing Navigation</h2>
        
      </div>

      {/* Navbar 2: Neon Glow Effect */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Neon Cyber Navigation</h2>
        <nav className="relative bg-black/80 backdrop-blur-sm border-2 border-cyan-500/50 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-2xl">
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 animate-pulse"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-xl opacity-50 animate-pulse"></div>
                </div>
                <span className="text-2xl font-black text-cyan-400" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.5)'}}>
                  CYBER
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {['Home', 'Projects', 'Lab', 'Contact'].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="relative px-5 py-2 text-cyan-300 hover:text-cyan-400 font-medium transition-all group"
                    style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.3)'}}
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg transition-all"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-cyan-400/50"></div>
                  </a>
                ))}
              </div>

              <button className="hidden lg:block px-6 py-2 bg-cyan-500 text-black rounded-lg font-bold hover:bg-cyan-400 transition-all relative group">
                <span className="relative z-10">Connect</span>
                <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-all"></div>
              </button>

              <button onClick={() => setMobileMenu2(!mobileMenu2)} className="lg:hidden text-cyan-400 p-2">
                {mobileMenu2 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu2 && (
              <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-cyan-500/30 pt-4">
                {['Home', 'Projects', 'Lab', 'Contact'].map((item, idx) => (
                  <a key={idx} href="#" className="block text-cyan-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-cyan-500/10 transition-all">
                    {item}
                  </a>
                ))}
                <button className="w-full px-6 py-2 bg-cyan-500 text-black rounded-lg font-bold mt-4">
                  Connect
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 3: Glassmorphism with Floating Elements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Floating Glass Navigation</h2>
        <div className="relative">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          <nav className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative group">
                    <Circle className="w-8 h-8 text-blue-400 animate-spin" style={{animationDuration: '10s'}} />
                    <div className="absolute inset-0 bg-blue-400/30 blur-xl rounded-full group-hover:bg-blue-400/50 transition-all"></div>
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    GLASS
                  </span>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                  {['Home', 'Features', 'Pricing', 'About'].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="relative text-white/80 hover:text-white font-medium transition-all group"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-lg"></div>
                    </a>
                  ))}
                </div>

                <div className="hidden lg:flex items-center space-x-3">
                  <button className="relative px-6 py-2 overflow-hidden rounded-xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                    <span className="relative text-white font-bold">Start Free</span>
                  </button>
                </div>

                <button onClick={() => setMobileMenu3(!mobileMenu3)} className="lg:hidden text-white p-2">
                  {mobileMenu3 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {mobileMenu3 && (
                <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-white/20 pt-4">
                  {['Home', 'Features', 'Pricing', 'About'].map((item, idx) => (
                    <a key={idx} href="#" className="block text-white/80 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all">
                      {item}
                    </a>
                  ))}
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-bold mt-4">
                    Start Free
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar 4: Wave Animation on Hover */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Wave Ripple Navigation</h2>
        <nav className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all group-hover:rotate-12">
                    <Rocket className="w-7 h-7 text-white transition-all group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                </div>
                <span className="text-2xl font-black text-white">WAVE</span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: ShoppingCart, label: 'Shop' },
                  { icon: Heart, label: 'Wishlist' },
                  { icon: User, label: 'Account' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="group relative px-5 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="relative flex items-center space-x-2">
                      <item.icon className="w-5 h-5 transition-all group-hover:scale-110 group-hover:rotate-12" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <button className="hidden lg:block relative px-8 py-3 bg-white text-purple-600 rounded-xl font-bold overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative group-hover:text-white transition-colors">Join Now</span>
              </button>

              <button onClick={() => setMobileMenu4(!mobileMenu4)} className="lg:hidden text-white p-2">
                {mobileMenu4 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu4 && (
              <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-white/20 pt-4">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: ShoppingCart, label: 'Shop' },
                  { icon: Heart, label: 'Wishlist' },
                  { icon: User, label: 'Account' }
                ].map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center space-x-3 text-white/80 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all">
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                ))}
                <button className="w-full mt-4 px-8 py-3 bg-white text-purple-600 rounded-xl font-bold">
                  Join Now
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}