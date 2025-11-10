import { Code2, Database, Cloud, Server } from 'lucide-react';


const TechnologyStackDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {[
        {
          name: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS"],
          icon: Code2,
          color: "blue",
        },
        {
          name: "Backend",
          items: ["Node.js", "Express", "Python"],
          icon: Server,
          color: "purple",
        },
        {
          name: "Database",
          items: ["PostgreSQL", "MongoDB", "Redis"],
          icon: Database,
          color: "emerald",
        },
        {
          name: "Infrastructure",
          items: ["AWS", "Docker", "Kubernetes"],
          icon: Cloud,
          color: "orange",
        },
      ].map((stack, idx) => (
        <div
          key={idx}
          className={`p-4 rounded-lg border-2 border-${stack.color}-200 bg-${stack.color}-50 hover:shadow-lg transition-all group cursor-pointer`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg bg-${stack.color}-200`}>
              <stack.icon className={`w-5 h-5 text-${stack.color}-700`} />
            </div>
            <h3 className={`font-semibold text-${stack.color}-900`}>
              {stack.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.items.map((item, i) => (
              <span
                key={i}
                className={`px-2 py-1 bg-${stack.color}-200 text-${stack.color}-700 text-xs rounded font-medium`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyStackDisplay;
