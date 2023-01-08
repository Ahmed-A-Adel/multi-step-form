import React from "react";
import "./Switcher.scss";
function Switcher() {
  return (
    <div className="switcher">
      <span className="switcher_option">monthly</span>
      <div className="switcher_container">
        <div className="switcher_container_ball"></div>
      </div>
      <span className="switcher_option">yearly</span>
    </div>
  );
}

export default Switcher;
