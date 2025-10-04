import { useState } from 'react';
import { Menu, X, ChevronDown, Search, ShoppingBag, Heart, User, Home, Package, Zap, Code, Database, Cloud, Shield, Truck, CreditCard, HelpCircle, Phone, Mail, MapPin, Star, TrendingUp, Award, Wrench } from 'lucide-react';

export default function DetailedNavbars() {
  const [mobileMenu3, setMobileMenu3] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 space-y-12 p-4">
      
      {/* Navbar 3: Service Business with Contact Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">3. Service Business with Contact Details</h2>
        
      </div>

    </div>
  );
}