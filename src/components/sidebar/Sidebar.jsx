import React from "react";
import "./Sidebar.scss";
import SidebarStep from "../sidebarStep/SidebarStep";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarStep key={1} number={1} step="your inofo" />
      <SidebarStep key={2} number={2} step="selsect plane" />
      <SidebarStep key={3} number={3} step="add ones" />
      <SidebarStep key={4} number={4} step="summary" />
    </div>
  );
}

export default Sidebar;
