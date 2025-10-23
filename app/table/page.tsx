import React from "react";
import BorderedTable from "./components/BorderedTable";
import StripedTable from "./components/StripedTable";
import HoverableTable from "./components/HoverableTable";
import DarkTable from "./components/DarkTable";
import MinimalHoverEffect from "./components/MinimalHoverEffect";
import WithSearchFilter from "./components/WithSearchFilter";
import StripedDarkAccent from "./components/StripedDarkAccent";
import CardStyle from "./components/CardStyle";
import ColorfulHeaders from "./components/ColorfulHeaders";
import StatusIndicators from "./components/StatusIndicators";
import ExpandableRows from "./components/ExpandableRows";
import VerticalTimelineStyle from "./components/VerticalTimelineStyle";
import ShadowedCards from "./components/ShadowedCards";
import Glassmorphism from "./components/Glassmorphism";
import SparklineCharts from "./components/SparklineCharts";

const table = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-2 md:p-6 flex flex-col items-center gap-10">
       <style>{`
        @keyframes wave1 {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 0;
          }
        }

        @keyframes wave2 {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -100px 0;
          }
        }

        @keyframes fadeInWave1 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInWave2 {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .water-wave-h1 {
          position: relative;
          overflow: hidden;
          transition: all 0.8s ease-in-out;
        }

        .water-wave-h1::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 0;
          right: 0;
          height: 80px;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%230ea5e9;stop-opacity:0.8" /><stop offset="50%" style="stop-color:%230284c7;stop-opacity:0.6" /><stop offset="100%" style="stop-color:%231e40af;stop-opacity:0.3" /></linearGradient></defs><path d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z" fill="url(%23grad1)"/><path d="M0,50 Q300,30 600,50 T1200,50 L1200,110 L0,110 Z" fill="rgba(6,182,212,0.5)"/></svg>') repeat-x;
          background-size: 100px 80px;
          pointer-events: none;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .water-wave-h1::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 70px;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2306b6d4;stop-opacity:0.6" /><stop offset="100%" style="stop-color:%230ea5e9;stop-opacity:0" /></linearGradient></defs><path d="M0,60 Q300,40 600,60 T1200,60 L1200,120 L0,120 Z" fill="url(%23grad2)"/></svg>') repeat-x;
          background-size: 100px 70px;
          pointer-events: none;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .water-wave-h1:hover::before {
          animation: wave1 4s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          opacity: 1;
        }

        .water-wave-h1:hover::after {
          animation: wave2 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          opacity: 1;
        }
      `}</style>

      <h1 className="water-wave-h1 text-2xl border-2 p-4 mt-6 font-bold text-slate-700 hover:text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-700 rounded-lg transition-all duration-700 ease-in-out">
        <span className="relative z-10">Tailwind Table Showcase</span>
      </h1>

      <div className="flex flex-wrap w-full overflow-hidden justify-center gap-8">

        <BorderedTable />

        <StripedTable />

        <HoverableTable />

        <DarkTable />

       <MinimalHoverEffect /> 
        
        <WithSearchFilter />

        <StripedDarkAccent />

        <CardStyle />

        <ColorfulHeaders />

        <StatusIndicators />

        <ExpandableRows />

        <VerticalTimelineStyle />

        <ShadowedCards />

        <Glassmorphism />

        <SparklineCharts />
        
      </div>
    </div>
  );
};

export default table;
