import React from "react";
import "./Heading.scss";
function Heading({ heading, subHeading }) {
  return (
    <div>
      <h2 className="step_heading">{heading}</h2>
      <p className="step_sub-heading">{subHeading}</p>
    </div>
  );
}

export default Heading;
