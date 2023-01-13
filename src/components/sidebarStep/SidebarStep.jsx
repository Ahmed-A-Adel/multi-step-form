import React from "react";
import "./SidebarStep.scss";
function SidebarStep({ step, stepInfo, number }) {
  let isActive;
  if (+step.slice(-1) === number) {
    isActive = "active";
  }
  if (step.slice(-1) === "/" && number === 1) {
    isActive = "active";
  }
  return (
    <div className="sidebarStep">
      <div className="sidebarStep_number_container  ">
        <div className={`sidebarStep_number ${isActive}`}>{number}</div>
      </div>
      <div className="sidebarStep_info_container">
        <p className="sidebarStep_info_number">Step {number}</p>
        <h4 className="sidebarStep_info_step">{stepInfo}</h4>
      </div>
    </div>
  );
}

export default SidebarStep;
