import React from "react";
import "./Checker.scss";
function Checker({ title, info, price }) {
  return (
    <div className="checker">
      <input type="checkbox" className="checker_input" />
      <div className="checker_info_conatiner">
        <h4 className="checker_heading">{title}</h4>
        <p className="checker_info">{info}</p>
      </div>
      <span className="checker_price">{price}</span>
    </div>
  );
}

export default Checker;
