import React from "react";
import BorderedTable from "./components/BorderedTable";
import StripedTable from "./components/StripedTable";
import HoverableTable from "./components/HoverableTable";
import DarkTable from "./components/DarkTable";

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

        <DarkTable />
        
        
      </div>
    </div>
  );
};

export default table;
