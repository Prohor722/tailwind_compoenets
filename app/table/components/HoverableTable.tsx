import React from "react";

const HoverableTable = () => {
  return (
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
  );
};

export default HoverableTable;
