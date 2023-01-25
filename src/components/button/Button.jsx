import React from "react";
import "./Button.scss";
function Button({ children, className, handleClick, type }) {
  return (
    <button onClick={handleClick} type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
