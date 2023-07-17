"use client";
import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import React from "react";
import LineChart from "./LineChart";
import TopBar from "./TopBar";
import { useDashboardStore } from "../../lib/store/Dashboardstore";
import SystemHealth from "@/app/DashBoard/components/Basis2/TopBar/SystemHealth";

const Basis2Data = () => {
  const system = useDashboardStore((state) => state.system);
  // console.log("system in basis2data",system);

  return (
    <div className="flex flex-col justify-center w-full mx-auto space-y-4 ">
      <div className="flex items-center justify-between w-full overflow-x-hidden ">
        <div>
          <TopBar />
        </div>
      </div>
      <div className=" flex  md:mt-10 md:bottom-6 border-[1px] shadow-md  mr-0 ">
        <LineChart System={system} />
      </div>
    </div>
  );
};

export default Basis2Data;
