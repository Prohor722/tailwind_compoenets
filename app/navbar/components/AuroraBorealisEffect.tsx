import React from 'react'

const AuroraBorealisEffect = () => {
  return (
     <nav className="relative bg-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-500/30">
          {/* Animated Aurora Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-emerald-500/20 blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Wind className="w-8 h-8 text-emerald-400 animate-spin" style={{animationDuration: '8s'}} />
                  <div className="absolute inset-0 bg-emerald-400/30 blur-2xl rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AURORA
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-2">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: Compass, label: 'Explore' },
                  { icon: Star, label: 'Featured' },
                  { icon: Globe, label: 'Community' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveNav(idx)}
                    className={`relative px-5 py-3 rounded-2xl font-medium transition-all duration-500 group ${
                      activeNav === idx ? 'text-white' : 'text-emerald-300/70 hover:text-emerald-300'
                    }`}
                  >
                    {activeNav === idx && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                      </>
                    )}
                    <div className="relative flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-cyan-500/20 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </button>
                ))}
              </div>

              <button className="hidden lg:block px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105">
                Join Now
              </button>

              <button onClick={() => setMobileMenu2(!mobileMenu2)} className="lg:hidden text-emerald-400 p-2">
                {mobileMenu2 ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileMenu2 && (
              <div className="lg:hidden mt-6 space-y-2 pb-4 border-t border-emerald-500/30 pt-4">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: Compass, label: 'Explore' },
                  { icon: Star, label: 'Featured' },
                  { icon: Globe, label: 'Community' }
                ].map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center space-x-3 text-emerald-300/70 hover:text-emerald-300 py-2 px-4 rounded-xl hover:bg-emerald-500/10 transition-all">
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                ))}
                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-bold">
                  Join Now
                </button>
              </div>
            )}
          </div>
        </nav>
  )
}

export default AuroraBorealisEffect