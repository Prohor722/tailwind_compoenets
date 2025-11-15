import { useState } from 'react';
import { ChevronRight, Plus, Clock, MapPin, Eye, Users, Heart, Star, Layers, Inbox, ShoppingCart, Truck } from 'lucide-react';

export default function MoreMoreMoreMoreTableDesigns() {
  const [cartItems, setCartItems] = useState(new Set());
  const [favoriteEmails, setFavoriteEmails] = useState(new Set());

  const data = [
    { id: 1, name: 'Sarah Anderson', title: 'Senior PM', avatar: 'SA', rating: 4.8, availability: 'Available', responseTime: '2min', timezone: 'PST', status: 'online' },
    { id: 2, name: 'Mike Chen', title: 'Lead Developer', avatar: 'MC', rating: 4.5, availability: 'In Meeting', responseTime: '1hr', timezone: 'EST', status: 'busy' },
    { id: 3, name: 'Emma Wilson', title: 'UX Designer', avatar: 'EW', rating: 4.9, availability: 'Available', responseTime: '5min', timezone: 'CST', status: 'online' },
    { id: 4, name: 'James Johnson', title: 'Data Analyst', avatar: 'JJ', rating: 4.6, availability: 'Away', responseTime: '30min', timezone: 'MST', status: 'away' },
    { id: 5, name: 'Lisa Garcia', title: 'Director', avatar: 'LG', rating: 4.7, availability: 'Available', responseTime: '10min', timezone: 'PST', status: 'online' },
  ];

  const emailData = [
    { id: 1, from: 'client@company.com', subject: 'Q4 Budget Proposal', preview: 'Please review the attached proposal...', received: '2h ago', unread: true, starred: false, label: 'work' },
    { id: 2, from: 'team@startup.io', subject: 'Weekly Standup', preview: 'Thanks everyone for the updates on...', received: '4h ago', unread: true, starred: true, label: 'work' },
    { id: 3, from: 'hr@company.com', subject: 'Benefits Enrollment', preview: 'Your benefits enrollment period starts...', received: '1d ago', unread: false, starred: false, label: 'personal' },
    { id: 4, from: 'support@vendor.com', subject: 'Order Confirmation #12345', preview: 'Your order has been confirmed...', received: '2d ago', unread: false, starred: false, label: 'shopping' },
    { id: 5, from: 'manager@company.com', subject: 'Performance Review Scheduled', preview: 'Your annual review is scheduled for...', received: '3d ago', unread: false, starred: true, label: 'work' },
  ];

  const cartData = [
    { id: 1, product: 'Wireless Headphones', price: 129.99, quantity: 1, category: 'electronics', inCart: false, image: '🎧' },
    { id: 2, product: 'USB-C Cable (2m)', price: 19.99, quantity: 2, category: 'accessories', inCart: true, image: '🔌' },
    { id: 3, product: 'Laptop Stand', price: 49.99, quantity: 1, category: 'office', inCart: false, image: '🖥️' },
    { id: 4, product: 'Mechanical Keyboard', price: 159.99, quantity: 1, category: 'electronics', inCart: true, image: '⌨️' },
    { id: 5, product: 'Monitor Light Bar', price: 99.99, quantity: 1, category: 'office', inCart: false, image: '💡' },
  ];

  const toggleCart = (id: number) => {
    const newSet = new Set(cartItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCartItems(newSet);
  };

  const toggleStarred = (id: number) => {
    const newSet = new Set(favoriteEmails);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setFavoriteEmails(newSet);
  };

  const getStatusColor = (status: string) => {
    if (status === 'online') return 'bg-emerald-500';
    if (status === 'busy') return 'bg-red-500';
    if (status === 'away') return 'bg-amber-500';
    return 'bg-slate-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2">More Creative Designs</h1>
          <p className="text-slate-400">Specialized tables for different industries and use cases</p>
        </div>

        {/* Table 53: Team Availability Dashboard */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              Team Availability
            </h2>
          </div>
          <div className="overflow-x-auto">
            
          </div>
        </div>

        {/* Table 54: Email Inbox */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Inbox className="w-5 h-5 text-blue-600" />
              Inbox
            </h2>
          </div>
          <div className="divide-y divide-slate-200">
            {emailData.map((email) => (
              <div key={email.id} className={`px-6 py-4 hover:bg-slate-50 transition-colors flex items-center gap-4 group cursor-pointer ${email.unread ? 'bg-blue-50' : ''}`}>
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                <button onClick={() => toggleStarred(email.id)} className={`flex-shrink-0 ${favoriteEmails.has(email.id) ? 'text-yellow-400' : 'text-slate-300 group-hover:text-slate-400'}`}>
                  <Star className={`w-5 h-5 ${favoriteEmails.has(email.id) ? 'fill-yellow-400' : ''}`} />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`font-semibold ${email.unread ? 'text-slate-900' : 'text-slate-600'}`}>{email.from}</p>
                    {email.unread && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
                  </div>
                  <p className={`text-sm ${email.unread ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>{email.subject}</p>
                  <p className="text-xs text-slate-500">{email.preview}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="inline-flex px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium capitalize">{email.label}</span>
                  <span className="text-xs text-slate-500">{email.received}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 55: Shopping Cart Wishlist */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              Shopping List
            </h2>
            <span className="text-sm font-bold text-emerald-600">{cartItems.size} in cart</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left w-8"></th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Category</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Price</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Stock</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item.id} className={`border-b border-slate-100 hover:bg-blue-50 transition-colors group ${cartItems.has(item.id) ? 'bg-emerald-50' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleCart(item.id)} className={`p-2 rounded-lg transition-all ${cartItems.has(item.id) ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.image}</span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{item.product}</p>
                          <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium capitalize">{item.category}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">In Stock</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 56: Shipment Tracking */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-cyan-400" />
              Shipment Tracking
            </h2>
          </div>
          <div className="space-y-4 p-6">
            {[
              { tracking: '#SHP-001', status: 'Delivered', date: '2025-10-13', location: 'San Francisco, CA', progress: 100 },
              { tracking: '#SHP-002', status: 'In Transit', date: 'Est. 2025-10-15', location: 'Denver, CO', progress: 65 },
              { tracking: '#SHP-003', status: 'Processing', date: 'Est. 2025-10-16', location: 'Los Angeles, CA', progress: 30 },
              { tracking: '#SHP-004', status: 'Pending', date: 'Est. 2025-10-18', location: 'Seattle, WA', progress: 0 },
            ].map((ship, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-white">{ship.tracking}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" />{ship.location}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      ship.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-300' :
                      ship.status === 'In Transit' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-amber-500/20 text-amber-300'
                    }`}>
                      {ship.status}
                    </span>
                    <p className="text-xs text-slate-400 mt-1">{ship.date}</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div style={{ width: `${ship.progress}%` }} className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 57: Portfolio/Gallery Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              Project Portfolio
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {[
              { title: 'Dashboard Design', author: 'Sarah', views: 2450, likes: 342, rating: 4.8, thumbnail: '📊' },
              { title: 'Mobile App UI', author: 'Emma', views: 3120, likes: 521, rating: 4.9, thumbnail: '📱' },
              { title: 'Web Platform', author: 'Mike', views: 1890, likes: 234, rating: 4.6, thumbnail: '🌐' },
              { title: 'Brand Identity', author: 'Lisa', views: 2105, likes: 401, rating: 4.7, thumbnail: '🎨' },
              { title: 'Icon System', author: 'James', views: 1654, likes: 289, rating: 4.5, thumbnail: '✨' },
              { title: 'Illustration Kit', author: 'Sarah', views: 2345, likes: 445, rating: 4.8, thumbnail: '🎭' },
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-6xl">
                  {project.thumbnail}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">by {project.author}</p>
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                      <Eye className="w-3 h-3" />
                      {project.views}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-red-600">
                      <Heart className="w-3 h-3" />
                      {project.likes}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(project.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{project.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 58: Knowledge Base Articles */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Knowledge Base</h2>
          </div>
          <div className="divide-y divide-slate-800">
            {[
              { title: 'Getting Started with API', category: 'API', readTime: '5 min', views: 1200, helpful: 89 },
              { title: 'Authentication Methods', category: 'Security', readTime: '8 min', views: 890, helpful: 94 },
              { title: 'Rate Limiting Guide', category: 'API', readTime: '6 min', views: 654, helpful: 82 },
              { title: 'Webhook Integration', category: 'Integration', readTime: '10 min', views: 1450, helpful: 91 },
              { title: 'Error Handling Best Practices', category: 'Development', readTime: '7 min', views: 2100, helpful: 87 },
            ].map((article, idx) => (
              <div key={idx} className="px-6 py-4 hover:bg-slate-800/50 transition-colors group">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors mb-1">{article.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-slate-400">{article.views} views</p>
                      <p className="text-sm font-bold text-emerald-400">{article.helpful}% helpful</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400" />
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