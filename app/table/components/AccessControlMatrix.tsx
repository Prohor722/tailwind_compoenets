import { Shield, Lock } from 'lucide-react';

const AccessControlMatrix = () => {
  const data = [
    { id: 1, name: 'Sarah Anderson', company: 'TechCorp', value: '$450K', deal: 'Enterprise', stage: 'Closed Won', probability: 95, amount: 450000, daysOpen: 45, owner: 'John' },
    { id: 2, name: 'Mike Chen', company: 'StartupXYZ', value: '$125K', deal: 'Growth', stage: 'Negotiation', probability: 65, amount: 125000, daysOpen: 28, owner: 'Sarah' },
    { id: 3, name: 'Emma Wilson', company: 'GlobalCo', value: '$890K', deal: 'Expansion', stage: 'Proposal', probability: 40, amount: 890000, daysOpen: 62, owner: 'Mike' },
    { id: 4, name: 'James Johnson', company: 'InnovateLabs', value: '$280K', deal: 'Partnership', stage: 'Discovery', probability: 25, amount: 280000, daysOpen: 15, owner: 'Emma' },
    { id: 5, name: 'Lisa Garcia', company: 'MegaScale', value: '$1.2M', deal: 'Strategic', stage: 'Closed Won', probability: 100, amount: 1200000, daysOpen: 72, owner: 'James' },
  ];

  return (
    <table className="max-w-md bg-black">
      <thead>
        <tr className="border-b border-slate-800 bg-slate-800/50">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
            User
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Read
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Write
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Delete
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
            Admin
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-white">
              {item.name}
            </td>
            <td className="px-6 py-4 text-center">
              <button className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors">
                <Lock className="w-4 h-4" />
              </button>
            </td>
            <td className="px-6 py-4 text-center">
              <button
                className={`p-2 rounded-lg transition-colors ${
                  Math.random() > 0.4
                    ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                    : "bg-slate-700 text-slate-500 hover:bg-slate-600"
                }`}
              >
                <Lock className="w-4 h-4" />
              </button>
            </td>
            <td className="px-6 py-4 text-center">
              <button
                className={`p-2 rounded-lg transition-colors ${
                  Math.random() > 0.7
                    ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                    : "bg-slate-700 text-slate-500 hover:bg-slate-600"
                }`}
              >
                <Lock className="w-4 h-4" />
              </button>
            </td>
            <td className="px-6 py-4 text-center">
              <button
                className={`p-2 rounded-lg transition-colors ${
                  item.id === 5
                    ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                    : "bg-slate-700 text-slate-500 hover:bg-slate-600"
                }`}
              >
                <Shield className="w-4 h-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccessControlMatrix;
