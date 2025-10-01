import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Rocket, Compass, Layers, Home, Briefcase, Mail, User } from 'lucide-react';

export default function UniqueAnimatedNavbars() {
  const [mobileMenu1, setMobileMenu1] = useState(false);
  const [mobileMenu2, setMobileMenu2] = useState(false);
  const [mobileMenu3, setMobileMenu3] = useState(false);
  const [mobileMenu4, setMobileMenu4] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 space-y-12 p-4">
      
      {/* Navbar 1: Morphing Blob Background */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Morphing Blob Navigation</h2>
        <nav className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 blur-xl bg-yellow-400/50 animate-pulse"></div>
                </div>
                <span className="text-2xl font-black text-white">NOVA</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-2 bg-white/5 rounded-full p-2">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeTab === idx ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {activeTab === idx && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>

              <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                Launch
              </button>

              <button onClick={() => setMobileMenu1(!mobileMenu1)} className="md:hidden text-white">
                {mobileMenu1 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu1 && (
              <div className="md:hidden mt-6 space-y-3 pb-4">
                {tabs.map((tab, idx) => (
                  <button key={idx} className="block w-full text-left text-gray-300 hover:text-white py-2">
                    {tab}
                  </button>
                ))}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold mt-4">
                  Launch
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 2: 3D Tilt Effect */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. 3D Tilt Navigation</h2>
        <nav 
          className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'perspective(1000px) rotateX(2deg)'
          }}
        >
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">AERO</span>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                {['Products', 'Solutions', 'Developers', 'Company'].map((item, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="relative text-white/90 hover:text-white font-medium transition-all group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 blur-xl transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              <div className="hidden lg:flex items-center space-x-3">
                <button className="px-5 py-2 text-white hover:bg-white/10 rounded-xl transition-all">
                  Login
                </button>
                <button className="px-6 py-2 bg-white text-blue-600 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all">
                  Get Started
                </button>
              </div>

              <button onClick={() => setMobileMenu2(!mobileMenu2)} className="lg:hidden text-white">
                {mobileMenu2 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu2 && (
              <div className="lg:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
                {['Products', 'Solutions', 'Developers', 'Company'].map((item, idx) => (
                  <a key={idx} href="#" className="block text-white/90 hover:text-white">{item}</a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Navbar 3: Glassmorphic Floating with Particles */}
      <div className="space-y-4 relative">
        <h2 className="text-2xl font-bold text-white">3. Particle Wave Navigation</h2>
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          <nav className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Compass className="w-8 h-8 text-cyan-400 animate-spin" style={{animationDuration: '8s'}} />
                    <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full"></div>
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    ORBIT
                  </span>
                </div>
                
                <div className="hidden md:flex items-center space-x-6">
                  {['Home', 'Explore', 'Create', 'Learn'].map((item, idx) => (
                    <a 
                      key={idx}
                      href="#" 
                      className="relative text-white/80 hover:text-white font-medium transition-all group"
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                    </a>
                  ))}
                </div>

                <div className="hidden md:flex items-center space-x-3">
                  <button className="relative px-6 py-2 overflow-hidden rounded-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                    <span className="relative text-white font-bold">Connect</span>
                  </button>
                </div>

                <button onClick={() => setMobileMenu3(!mobileMenu3)} className="md:hidden text-white">
                  {mobileMenu3 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {mobileMenu3 && (
                <div className="md:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
                  {['Home', 'Explore', 'Create', 'Learn'].map((item, idx) => (
                    <a key={idx} href="#" className="block text-white/80 hover:text-white">{item}</a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar 4: Animated Icons Navigation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Icon Wave Navigation</h2>
        <nav className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group hover:rotate-12 transition-transform">
                  <Layers className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-2xl font-black text-white">LAYERS</span>
              </div>
              
              <div className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: Briefcase, label: 'Work' },
                  { icon: User, label: 'About' },
                  { icon: Mail, label: 'Contact' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="group relative px-5 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <item.icon className="w-5 h-5 inline-block mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                    <span className="font-medium">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  </button>
                ))}
              </div>

              <button className="hidden lg:block relative px-8 py-3 bg-white text-purple-600 rounded-xl font-bold overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <span className="relative group-hover:text-white transition-colors">Join Now</span>
                <div className="absolute inset-0 blur-xl bg-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </button>

              <button onClick={() => setMobileMenu4(!mobileMenu4)} className="lg:hidden text-white">
                {mobileMenu4 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu4 && (
              <div className="lg:hidden mt-6 space-y-3 pb-4 border-t border-white/20 pt-4">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: Briefcase, label: 'Work' },
                  { icon: User, label: 'About' },
                  { icon: Mail, label: 'Contact' }
                ].map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center space-x-2 text-white/80 hover:text-white">
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
    </div>
  );
}