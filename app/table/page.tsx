import React from "react";
import BorderedTable from "./components/BorderedTable";
import StripedTable from "./components/StripedTable";
import HoverableTable from "./components/HoverableTable";

const table = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-10">
      <h1 className="text-2xl mt-6 font-bold text-blue-500">
        Tailwind Table Showcase
      </h1>

      <div className="flex flex-wrap justify-center gap-4">

        <BorderedTable />

        <StripedTable />

        <HoverableTable />

        {/* Dark Table */}
        <div className="bg-gray-800 shadow rounded-lg p-4 w-full max-w-md text-white">
          <h2 className="font-semibold mb-2">Dark Table</h2>
          
        </div>
      </div>
    </div>
  );
};

export default table;
