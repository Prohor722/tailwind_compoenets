import React from "react";

const DarkTable = () => {
  return (
    <table className="table-auto w-md">
      <thead>
        <tr className="bg-gray-900">
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-700">
          <td className="px-4 py-2">Dhaka</td>
          <td className="px-4 py-2">Bangladesh</td>
        </tr>
        <tr className="bg-gray-600">
          <td className="px-4 py-2">Tokyo</td>
          <td className="px-4 py-2">Japan</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DarkTable;
