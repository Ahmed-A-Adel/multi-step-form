import React, { useState } from "react";
import "./Checker.scss";
function Checker({ title, info, price, handleClick, subs }) {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
    const priceValue = price[subs];
    handleClick({ title, priceValue, checked: !check });
  };
  return (
    <div className={`checker ${check ? "active" : ""}`} onClick={handleCheck}>
      <input
        type="checkbox"
        onChange={handleCheck}
        className="checker_input"
        checked={check}
      />
      <div className="checker_info_conatiner">
        <h4 className="checker_heading">{title}</h4>
        <p className="checker_info">{info}</p>
      </div>
      <span className="checker_price">
        +${price[subs]}/{subs}
      </span>
    </div>
  );
}

export default Checker;
