import { ExternalLink, Edit2, DollarSign } from 'lucide-react';


const CRMDealPipeline = () => {
  const data = [
    {
      id: 1,
      name: "Sarah Anderson",
      company: "TechCorp",
      value: "$450K",
      deal: "Enterprise",
      stage: "Closed Won",
      probability: 95,
      amount: 450000,
      daysOpen: 45,
      owner: "John",
    },
    {
      id: 2,
      name: "Mike Chen",
      company: "StartupXYZ",
      value: "$125K",
      deal: "Growth",
      stage: "Negotiation",
      probability: 65,
      amount: 125000,
      daysOpen: 28,
      owner: "Sarah",
    },
    {
      id: 3,
      name: "Emma Wilson",
      company: "GlobalCo",
      value: "$890K",
      deal: "Expansion",
      stage: "Proposal",
      probability: 40,
      amount: 890000,
      daysOpen: 62,
      owner: "Mike",
    },
    {
      id: 4,
      name: "James Johnson",
      company: "InnovateLabs",
      value: "$280K",
      deal: "Partnership",
      stage: "Discovery",
      probability: 25,
      amount: 280000,
      daysOpen: 15,
      owner: "Emma",
    },
    {
      id: 5,
      name: "Lisa Garcia",
      company: "MegaScale",
      value: "$1.2M",
      deal: "Strategic",
      stage: "Closed Won",
      probability: 100,
      amount: 1200000,
      daysOpen: 72,
      owner: "James",
    },
  ];

  const getStageColor = (stage: string) => {
    const colors: { [key: string]: string } = {
      Discovery: "from-blue-500 to-cyan-500",
      Proposal: "from-purple-500 to-pink-500",
      Negotiation: "from-amber-500 to-orange-500",
      "Closed Won": "from-emerald-500 to-teal-500",
    };
    return colors[stage] || "from-slate-500 to-slate-600";
  };

  const getProbabilityColor = (prob: number) => {
    if (prob >= 80) return "text-emerald-600 bg-emerald-100";
    if (prob >= 50) return "text-amber-600 bg-amber-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-to-r from-slate-100 to-blue-50 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Contact
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Company
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Deal Value
          </th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Stage
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Probability
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-blue-50 transition-colors group"
          >
            <td className="px-6 py-4 text-sm font-semibold text-slate-900">
              {item.name}
            </td>
            <td className="px-6 py-4 text-sm text-slate-600">{item.company}</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                {item.value}
              </span>
            </td>
            <td className="px-6 py-4">
              <div className="relative inline-block">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getStageColor(
                    item.stage
                  )} rounded-lg blur opacity-30`}
                ></div>
                <span
                  className={`relative inline-flex px-3 py-1 bg-gradient-to-r ${getStageColor(
                    item.stage
                  )} text-white text-xs font-bold rounded-lg`}
                >
                  {item.stage}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${getProbabilityColor(
                  item.probability
                )}`}
              >
                {item.probability}%
              </span>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CRMDealPipeline;
