import React, { useContext } from "react";
import SidebarStep from "../sidebarStep/SidebarStep";
import { stepsContext } from "../StepsProvider";
import "./Sidebar.scss";
function Sidebar() {
  const { state } = useContext(stepsContext);
  const { step } = state;

  return (
    <div className="sidebar">
      <SidebarStep key={1} step={step} number={1} stepInfo="your inofo" />
      <SidebarStep key={2} step={step} number={2} stepInfo="selsect plane" />
      <SidebarStep key={3} step={step} number={3} stepInfo="add ones" />
      <SidebarStep key={4} step={step} number={4} stepInfo="summary" />
    </div>
  );
}

export default Sidebar;
