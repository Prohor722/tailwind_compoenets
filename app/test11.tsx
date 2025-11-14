import { Shield, ExternalLink, Lock } from 'lucide-react';

export default function FinalTableDesigns() {

  const data = [
    { id: 1, name: 'Sarah Anderson', company: 'TechCorp', value: '$450K', deal: 'Enterprise', stage: 'Closed Won', probability: 95, amount: 450000, daysOpen: 45, owner: 'John' },
    { id: 2, name: 'Mike Chen', company: 'StartupXYZ', value: '$125K', deal: 'Growth', stage: 'Negotiation', probability: 65, amount: 125000, daysOpen: 28, owner: 'Sarah' },
    { id: 3, name: 'Emma Wilson', company: 'GlobalCo', value: '$890K', deal: 'Expansion', stage: 'Proposal', probability: 40, amount: 890000, daysOpen: 62, owner: 'Mike' },
    { id: 4, name: 'James Johnson', company: 'InnovateLabs', value: '$280K', deal: 'Partnership', stage: 'Discovery', probability: 25, amount: 280000, daysOpen: 15, owner: 'Emma' },
    { id: 5, name: 'Lisa Garcia', company: 'MegaScale', value: '$1.2M', deal: 'Strategic', stage: 'Closed Won', probability: 100, amount: 1200000, daysOpen: 72, owner: 'James' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">


        {/* Table 52: Event Log with Severity */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Event Log</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
}