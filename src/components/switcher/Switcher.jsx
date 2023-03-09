import React, { useState } from "react";
import "./Switcher.scss";
function Switcher({ handleClick, toggleValue }) {
  return (
    <div className="switcher" onClick={handleClick}>
      <span className="switcher_option">monthly</span>
      <div className="switcher_container">
        <div
          className={`switcher_container_ball ${
            toggleValue === "yr" && "switcher_right"
          }`}
        ></div>
      </div>
      <span className="switcher_option">yearly</span>
    </div>
  );
}

export default Switcher;
