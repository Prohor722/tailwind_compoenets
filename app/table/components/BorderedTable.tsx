import React from "react";

const BorderedTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Bordered Table
      </h2>
      <table className="table-auto w-full border border-gray-400 text-gray-800">
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
    </div>
  );
};

export default BorderedTable;
