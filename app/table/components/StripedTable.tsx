import React from "react";

const StripedTable = () => {
  return (
    <table className="table-auto max-w-lg md:w-md overflow-scroll text-gray-800">
      <thead className="bg-gray-700 text-white">
        <tr>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="px-4 py-2">Pen</td>
          <td className="px-4 py-2">$1.50</td>
        </tr>
        <tr className="bg-white">
          <td className="px-4 py-2">Notebook</td>
          <td className="px-4 py-2">$3.00</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="px-4 py-2">Marker</td>
          <td className="px-4 py-2">$2.20</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StripedTable;
