import React from "react";
import "./SidebarStep.scss";
function SidebarStep({ step, number }) {
  return (
    <div className="sidebarStep">
      <div className="sidebarStep_number_container">
        <div className="sidebarStep_number">{number}</div>
      </div>
      <div className="sidebarStep_info_container">
        <p className="sidebarStep_info_number">Step {number}</p>
        <h4 className="sidebarStep_info_step">{step}</h4>
      </div>
    </div>
  );
}

export default SidebarStep;
