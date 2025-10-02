import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

export default function ModernNavbars() {
  const [mobileMenu3, setMobileMenu3] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 space-y-12 p-4">


      {/* Navbar 3: E-commerce Style */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">3. E-commerce Navbar</h2>
        
      </div>
    </div>
  );
}