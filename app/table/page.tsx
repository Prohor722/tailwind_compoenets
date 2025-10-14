import React from "react";
import BorderedTable from "./components/BorderedTable";
import StripedTable from "./components/StripedTable";

const table = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold text-blue-500">
        Tailwind Table Showcase
      </h1>

      <div className="flex flex-wrap justify-center gap-10">

        <BorderedTable />

        <StripedTable />

        {/* Hoverable Table */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Hoverable Table
          </h2>
          <table className="table-auto w-full text-gray-800">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-100 transition">
                <td className="px-4 py-2">John</td>
                <td className="px-4 py-2">Admin</td>
              </tr>
              <tr className="hover:bg-blue-100 transition">
                <td className="px-4 py-2">Emma</td>
                <td className="px-4 py-2">Editor</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dark Table */}
        <div className="bg-gray-800 shadow rounded-lg p-4 w-full max-w-md text-white">
          <h2 className="font-semibold mb-2">Dark Table</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
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
        </div>
      </div>
    </div>
  );
};

export default table;
