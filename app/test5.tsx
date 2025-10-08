import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Rocket, ShoppingCart, Heart } from 'lucide-react';

export default function UniqueAnimatedNavs() {
    const [mobileMenu4, setMobileMenu4] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 space-y-16 p-4 pt-8">

      {/* Navbar 4: Wave Animation on Hover */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Wave Ripple Navigation</h2>
        
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