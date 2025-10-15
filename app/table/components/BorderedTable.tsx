const BorderedTable = () => {
  return (
      <table className="table-auto max-w-lg md:w-md overflow-scroll border border-gray-400 text-gray-800">
        <thead className="bg-gray-600 text-white">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Alice</td>
            <td className="border px-4 py-2">24</td>
          </tr>
          <tr className="bg-white">
            <td className="border px-4 py-2">Bob</td>
            <td className="border px-4 py-2">29</td>
          </tr>
        </tbody>
      </table>
  );
};

export default BorderedTable;
