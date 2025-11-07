import { Zap, Users, TrendingUp } from 'lucide-react';

const MultiStatRowTable = () => {
    
  const data = [
    { id: 1, name: 'Sarah Anderson', position: 'Senior PM', salary: '$145,000', start: '2021-03-15', team: 8, performance: 94, department: 'Product', badge: 'Lead' },
    { id: 2, name: 'Mike Chen', position: 'Senior Developer', salary: '$165,000', start: '2020-07-20', team: 6, performance: 88, department: 'Engineering', badge: 'Expert' },
    { id: 3, name: 'Emma Wilson', position: 'Designer', salary: '$125,000', start: '2022-01-10', team: 3, performance: 91, department: 'Design', badge: 'Contributor' },
    { id: 4, name: 'James Johnson', position: 'Data Analyst', salary: '$135,000', start: '2021-11-05', team: 4, performance: 85, department: 'Analytics', badge: 'Rising' },
    { id: 5, name: 'Lisa Garcia', position: 'Director', salary: '$185,000', start: '2019-05-01', team: 15, performance: 96, department: 'Operations', badge: 'Executive' },
  ];

  return (
    <table className="max-w-md bg-white">
      <thead>
        <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Employee
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-1">
              <Users className="w-4 h-4" />
              Team
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Performance
            </div>
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            <div className="flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" />
              Score
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-b border-slate-100 hover:bg-slate-50 transition-colors group"
          >
            <td className="px-6 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">{item.position}</p>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                {item.team}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.performance}%` }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                  ></div>
                </div>
                <span className="text-xs font-bold text-slate-700 w-8 text-right">
                  {item.performance}%
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold rounded-full">
                {Math.round(item.performance / 10)}/10
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MultiStatRowTable;
