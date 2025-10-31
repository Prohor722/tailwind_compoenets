import { ChevronRight, Zap, Flame, Lightbulb, Target } from 'lucide-react';

export default function EvenMoreTableDesigns() {

  const data = [
    { id: 1, name: 'Sarah Anderson', role: 'Product Manager', status: 'Active', price: '$12,500', priority: 'High', category: 'PM', tags: ['Leadership', 'Strategy'], progress: 85 },
    { id: 2, name: 'Mike Chen', role: 'Developer', status: 'Active', price: '$9,200', priority: 'Medium', category: 'Dev', tags: ['Backend', 'Frontend'], progress: 72 },
    { id: 3, name: 'Emma Wilson', role: 'Designer', status: 'Away', price: '$8,100', priority: 'High', category: 'Design', tags: ['UI/UX', 'Branding'], progress: 68 },
    { id: 4, name: 'James Johnson', role: 'Analyst', status: 'Active', price: '$11,300', priority: 'Medium', category: 'Analytics', tags: ['Data', 'Insights'], progress: 91 },
    { id: 5, name: 'Lisa Garcia', role: 'Manager', status: 'Offline', price: '$15,600', priority: 'Critical', category: 'Management', tags: ['Team', 'Planning'], progress: 95 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Even More Table Designs</h1>
          <p className="text-slate-600">Additional advanced variations and interaction patterns</p>
        </div>

        {/* Table 28: Code/Dev Style Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden font-mono">
          <div className="p-6 border-b border-slate-700 bg-slate-800">
            <h2 className="text-lg font-semibold text-white">Dev-Style Data Table</h2>
          </div>
          <div className="overflow-x-auto">
            
          </div>
        </div>
      </div>
    </div>
  );
}